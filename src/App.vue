<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import {useProductSore} from "@/stores/ProductStore";
import {useCartStore} from "@/stores/CartStore";
import {ref, reactive} from "vue";

const productStore = useProductSore();
const cartStore = useCartStore();

cartStore.$onAction(({name, store, args, after, onError}) => {
  if (name === 'addItems') {
    after(() => {
      console.log(args[0]);
    });
    onError((error) => {
      console.log("Error", error.message);
    })
  }
});

// Import ProductStore action
productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader/>
    <div class="mb-5 flex justify-end">
      <AppButton @click="cartStore.undo">Undo</AppButton>
      <AppButton class='ml-2' @click="cartStore.redo">Redo</AppButton>
    </div>
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
