import {defineStore} from "pinia";

export const useProductSore = defineStore("ProductStore", {
    state: () => {
        return {
            products: []
        }
    },

    actions: {
        async fill() {
            // Getting production via dynamic import
            this.products = (await import("@/data/products.json")).default;

            // Example for getting data from an API :
            // this.products = (await axios.get('endpoint')).data;
        }
    }

    //getters
})

