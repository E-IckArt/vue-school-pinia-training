import {defineStore} from "pinia";
import {groupBy} from "lodash";

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
    },
    getters: {
        count: (state) => state.items.length,
        isEmpty: (state) => state.count === 0,
        // Use groupBy method of lodash library to group item by name
        grouped: (state) => groupBy(state.items, item => item.name),
        groupCount: (state) => (name) => state.grouped[name].length,
    },
});
