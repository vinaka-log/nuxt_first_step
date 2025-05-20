<template>
  <v-app>
    <v-app-bar app fixed color="primary">
      <v-toolbar-title>Nuxt3</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-spacer style="height: 80px;"></v-spacer>
      <slot/>
    </v-main>
  </v-app>
</template>