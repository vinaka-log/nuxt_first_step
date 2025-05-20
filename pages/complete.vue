<script setup lang="ts">
import { ref } from 'vue'

const toDo = ref<string[]>([])

</script>

<template>
  <p class="text-5xl">complete</p>
  <v-card v-for="todo in toDo" :key="todo" :title="todo" class="mb-3 mx-3">
  </v-card>
</template>