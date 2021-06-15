<template>
  <v-app>
    <MainAppBar />

    <MainNavDrawer />

      <v-main id="main-content">
        <v-container fluid>
          <Nuxt />
        </v-container>
      </v-main>

    <MainFooter />

    <Settings />
  </v-app>
</template>