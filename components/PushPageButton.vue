<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps(
    {
        title: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    }
)

const router = useRouter()

const pushPage = (path: string) => {
  router.push(path)
}
</script>

<template>
  <v-row class="ma-10" justify="center">
    <v-btn icon rounded @click="pushPage(path)">
      {{ title }}
    </v-btn>
  </v-row>
</template>