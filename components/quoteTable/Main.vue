<template>
    <v-data-table
        :headers="columns"
        :items="rows"
    >
      <template v-slot:item.pn="props">
        <QuoteTableEditableCell
          :value = "props.item.name"
        />
      </template>
    </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      columns: [
          {text: 'PN', value: "pn"},
          {text: 'Description', value: "desc"},
          {text: 'List Price', value: "list"},
          {text: 'Cost', value: "cost"},
          {text: 'Qty', value: "qty"},
          {text: 'Stock', value: "stock"},
      ]
    }),
    props: {
      rows: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>
