<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const text = ref('')

const toDo = ref<string[]>([])

const addToDo = () => {
  toDo.value.push(text.value)
  text.value = ''
}

const pushPage = () => {
  router.push('/complete')
}

</script>

<template>
  <!-- <v-row class="ma-10 text-5xl" justify="center">
    <p>
      {{ count }}
    </p>
  </v-row> -->
  <v-row class="ma-10" justify="center">
    <v-btn icon rounded @click="pushPage">
      完了済み
    </v-btn>
  </v-row>
  <v-row class="ma-10 text-5xl" justify="center">
    <v-text-field v-model="text"></v-text-field>
    <v-card v-for="todo in toDo" :key="todo" :title="todo" class="mb-3 mx-3">
    </v-card>
  </v-row>
</template>