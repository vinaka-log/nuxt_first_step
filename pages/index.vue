<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PushPagebutton from '~/components/PushPagebutton.vue'
const router = useRouter()

const text = ref('')

const { toDo, complete } = useTodoState()

const addToDo = () => {
  toDo.value.push(text.value)
  text.value = ''
}

const addComplete = (index: number) => {
  complete.value.push(toDo.value[index])
  toDo.value.splice(index, 1)
}

</script>

<template>
  <!-- <v-row class="ma-10 text-5xl" justify="center">
    <p>
      {{ count }}
    </p>
  </v-row> -->
  <PushPageButton title="完了済み" path="/complete" />
  <v-row class="ma-10 text-5xl" justify="center">
    <v-text-field v-model="text"></v-text-field>
    <v-btn icon @click="addToDo">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>
  <v-card v-for="(todo, index) in toDo" :key="index" :title="todo" class="mb-3 mx-3">
    <v-card-actions>
      <v-btn @click="addComplete(index)">完了にする</v-btn>
    </v-card-actions>
  </v-card>
</template>