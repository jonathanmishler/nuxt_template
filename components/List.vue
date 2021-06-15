<template>
  <v-list
    expand
    nav
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(item, i) in items">
      <ListGroup
        v-if="item.items"
        :key="`group-${i}`"
        :item="item"
      />

      <ListItem
        v-else
        :key="`item-${i}`"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
  export default {
    name: 'DefaultList',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>
