<script setup lang="ts">
import { ref } from 'vue'

const { complete } = useTodoState()

</script>

<template>
  <p class="text-5xl">complete</p>
  <v-card v-for="com in complete" :key="com" :title="com" class="mb-3 mx-3">
  </v-card>
</template>