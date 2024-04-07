import json5Products from '../../data/products.json5';
import jsonProducts from '../../data/products.json';
import yamlProducts from '../../data/products.yaml';
import tomlProducts from '../../data/products.toml';


export const useFetch = async () => {

    let url: string;
    let formattedData: any = [];


    function getFormattedData() {
        return formattedData
    }

    async function sendData(data: unknown): Promise<void> {
        try {
            const result = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            formattedData = await result.json()

        } catch (e) {
            console.log(e)
        }



    }

    async function getData(type: string, isConverted: boolean): Promise<void> {

        try {

            if (type == "json5") {

                if (!isConverted) {
                    const result = await fetch(url)
                    const json5Text = await result.text()
                    console.log(json5Text)
                    const JSON5 = await import("json5")
                    formattedData = await JSON5.parse(json5Text)

                } else {
                    formattedData = json5Products
                }

            }

            if (type == "json") {
                if (!isConverted) {
                    const result = await fetch(url)
                    formattedData = await result.json()
                }
                else {
                    formattedData = jsonProducts
                }
            }

            if (type == "yaml") {
                if (!isConverted) {
                    const result = await fetch(url)
                    const yamlText = await result.text()
                    const YAML = await import("js-yaml")
                    formattedData = await YAML.load(yamlText);

                } else {
                    formattedData = yamlProducts.products
                }

            }

            if (type == "toml") {
                if (!isConverted) {
                    const result = await fetch(url)
                    const tomlText = await result.text()
                    const TOML = await import("@iarna/toml")
                    formattedData = TOML.parse(tomlText);

                } else {
                    formattedData = tomlProducts.products
                }

            }
        } catch (e) {
            console.log(e)
        }


    }

    function setUrl(val?: string): void {
        url = val
    }

    function getUrl(): string {
        return url
    }

    return {
        sendData,
        getData,
        getUrl,
        setUrl,
        getFormattedData
    }
}