<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import {useProductSore} from "@/stores/ProductStore";
import {storeToRefs} from "pinia";

/*
Destructure products out of the ProductStore.
Usefull when only using state from the store but not calling any actions.
*/
const {products} = storeToRefs(useProductSore());
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </ul>
  </div>
</template>
