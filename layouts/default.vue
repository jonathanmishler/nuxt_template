<template>
  <v-app>
    <AppBar />

    <Drawer />

      <v-main id="main-content">
        <v-container fluid>
          <Nuxt />
        </v-container>
      </v-main>

    <Footer />

    <Settings />
  </v-app>
</template>