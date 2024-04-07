import { useFetch } from "../hooks/useFetch"

self.onmessage = async({ data: { question } }) => {
    console.log('🚀 product-worker process ...')
    const { getData, getFormattedData } = await useFetch()
    const random = Math.floor(Math.random() * 4);
    console.log(random)
    const products = ["json5", "json", "toml", "yaml"];
    await getData(products[random], true)
    self.postMessage({
      answer: getFormattedData() ,
    });
};