<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const countUp = () => {
  count.value++
}

</script>

<template>
  <v-row class="ma-10 text-5xl" justify="center">
    <p>
      {{ count }}
    </p>
  </v-row>
  <v-row justify="center">
    <v-btn icon @click="countUp">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>
</template>