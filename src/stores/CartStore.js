import {defineStore} from "pinia";
import {groupBy} from "lodash";
import {useAuthUserStore} from "@/stores/AuthUserStore";

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
        },
        clearItem(itemName) {
            this.items = this.items.filter(item => item.name !== itemName)
        },
        setItemCount(item, count) {
            this.clearItem(item.name);
            this.addItemsToCart(count, item);
        },
        checkout() {
            const authUserStore = useAuthUserStore();
            alert(`${authUserStore.username} just bought ${this.count} items at a total of $${this.totalPrice}.`);
        }
    },
    getters: {
        count: (state) => state.items.length,
        isEmpty: (state) => state.count === 0,
        // Use groupBy method of lodash library to group item by name
        grouped: (state) => {
            const grouped = groupBy(state.items, item => item.name);
            const sorted = Object.keys(grouped).sort();
            let inOrder = {};
            sorted.forEach((key) => (inOrder[key] = grouped[key]));
            return inOrder;
        },
        groupCount: (state) => (name) => state.grouped[name].length,
        totalPrice: (state) => {
            let acc = 0;
            for (const item of state.items) {
                acc += item.price;
            }
            return acc;
        }
    },
});
