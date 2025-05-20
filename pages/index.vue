<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

const toDo = ref<string[]>([])

const addToDo = () => {
  toDo.value.push(text.value)
  text.value = ''
}

</script>

<template>
  <!-- <v-row class="ma-10 text-5xl" justify="center">
    <p>
      {{ count }}
    </p>
  </v-row> -->
  <v-row class="ma-10 text-5xl" justify="center">
    <v-text-field v-model="text"></v-text-field>
    <v-btn icon @click="addToDo">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>
  <v-card v-for="todo in toDo" :key="todo" :title="todo" class="mb-3 mx-3">
  </v-card>
</template>