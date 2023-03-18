import {defineStore} from "pinia";

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: []
        };
    },
    actions: {
        addItemsToCart(count, item) {
            count = parseInt(count)
            for (let i = 0; i < count; i++) {
                // Access a copy of each item on the cartStore.
                // Spread operator allows you to modify the properties of an item, without modifying those of other items of the same type
                // Example: in case of several pineapples, only one of them changes.
                this.items.push({...item});
            }
        }
    }
});
