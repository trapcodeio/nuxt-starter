<script setup lang="ts">
import { useStore } from "~/stores";

definePageMeta({
  layout: "main",
  name: "index",
});

const store = useStore();
</script>

<template>
  <div class="p-5 text-center">
    <h1 class="text-2xl underline">Welcome to Basic Nuxt Setup</h1>
    <p class="my-3">Count: {{ store.count }}</p>

    <div class="flex space-x-5 justify-center">
      <button @click="store.increment" class="action-btn">Increment</button>
      <button @click="store.decrement" class="action-btn">Decrement</button>
    </div>

    <client-only>
      <debug :data="{ counter: store.count }" use-parent-name></debug>
    </client-only>
  </div>
</template>
