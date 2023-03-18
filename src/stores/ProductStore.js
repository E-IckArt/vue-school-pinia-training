import {defineStore} from "pinia";
import products from "@/data/products.json";

export const useProductSore = defineStore("ProductStore", {
    //state
    state: () => {
        return {
            products,
        }
    }

    //actions

    //getters
})

