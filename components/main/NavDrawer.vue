<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    :mini-variant.sync="mini"
  >
    <v-list-item id="nav-drawer-header">
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application Title
        </v-list-item-title>
        <v-list-item-subtitle>
          Sub-Area
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list dense>
      <v-list-item
        v-for="item in routes"
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
        routes: [
          {
            title: 'Dashboard',
            icon: 'mdi-view-dashboard',
            to: '/',
          },
          {
            title: 'Quote',
            icon: 'mdi-clipboard-outline',
            to: '/quote',
          },
          {
            title: 'User Profile',
            icon: 'mdi-account',
            to: '/userProfile',
          },
          {
            title: 'Regular Tables',
            icon: 'mdi-clipboard-outline',
            to: '/regularTables',
          },
          {
            title: 'Typography',
            icon: 'mdi-format-font',
            to: '/typography',
          },
          {
            title: 'Icons',
            icon: 'mdi-chart-bubble',
            to: '/icons',
          },
          {
            title: 'Google Maps',
            icon: 'mdi-map-marker',
            to: '/googleMaps',
          },
          {
            title: 'Notifications',
            icon: 'mdi-bell',
            to: '/notifications',
          },
        ],
      }
    }
  }
    
</script>

<style>
  .nav-drawer-mini-btn{
    position: absolute;
    bottom: 0
  }
  #nav-drawer-header{
    background-color: var(--v-secondary-base);
  }
</style>
