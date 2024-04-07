import { useFetch } from "../hooks/useFetch";
import { ProductInterface } from "../interfaces/ProductInterface";

export class ProductService {

    static async getProducts(): Promise<Array<ProductInterface>> {
        const { getData, getFormattedData } = await useFetch()
        await getData("toml", true)
        return getFormattedData()
    }

    static async getProductById(id: number) {
        const product = (await this.getProducts()).find((p) => p.id == id)
        return product
    }

    static async getProductsByAuthor(author: string) {
        const products = (await this.getProducts()).filter((p) => p.author == author)
        return products
    }



}