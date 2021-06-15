<template>
  <v-app-bar
      app    
      color="white"
      elevate-on-scroll
  >
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer />

    <WidgetsSearch class="hidden-sm-and-down" />

    <WidgetsGoHome />

    <WidgetsNotifications />

    <WidgetsAccount />
  </v-app-bar>
</template>
