<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import {useProductSore} from "@/stores/ProductStore";
import {useCartStore} from "@/stores/CartStore";

const productStore = useProductSore();
const cartStore = useCartStore();


// Import ProductStore action
productStore.fill();
// Define AddToCart method
const addToCart = (count, product) => {
  count = parseInt(count)
  // Create only one mutation each time the same product is added to the cart
  cartStore.$patch(state => {
    for (let i = 0; i < count; i++) {
      // Access items on the state instead of directly on the cartStore
      state.items.push(product);
    }
  })

}
</script>

<template>
  <div class="container">
    <TheHeader/>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
          v-for="product in productStore.products"
          :key="product.name"
          :product="product"
          @addToCart="addToCart($event, product)"
      />
    </ul>
  </div>
</template>
