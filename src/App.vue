<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import {useProductSore} from "@/stores/ProductStore";
import {useCartStore} from "@/stores/CartStore";

const productStore = useProductSore();
const cartStore = useCartStore();

// Import ProductStore action
productStore.fill();

</script>

<template>
  <div class="container">
    <TheHeader/>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
          v-for="product in productStore.products"
          :key="product.name"
          :product="product"
          @addToCart="cartStore.addItemsToCart($event, product)"
      />
    </ul>
  </div>
</template>
