<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    :mini-variant.sync="mini"
  >

    <v-list dense>
      <v-list-item
        v-for="item in app.items"
        :key="item.title"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    
    <v-divider />
    <v-btn
          block
          @click.stop="mini = !mini"
          class = "nav-drawer-mini-btn"
        >
          <v-icon v-if="!mini">mdi-chevron-left</v-icon>
          <v-icon v-if="mini">mdi-chevron-right</v-icon>
        </v-btn>
  
  
  </v-navigation-drawer>
</template>

<script>

  export default {
    data() {
      return {
        drawer: true,
        mini: false,
        }
      },
    computed: {
      app () {
        return this.$store.state
      },
    },
  }
    
</script>

<style>
  .nav-drawer-mini-btn{
    position: absolute;
    bottom: 0
  }
</style>
