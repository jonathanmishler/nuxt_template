<template>
    <v-edit-dialog
      :return-value.sync="cellValue"
    >
      Click to Edit:{{ cellValue }}
      <template v-slot:input>
        <v-text-field
          v-model="cellValue"
          single-line
        >
        </v-text-field>
      </template>
    </v-edit-dialog>
</template>

<script>
  export default {
    //data: () => ({}),
    props: {
      cellValue: {
        type: String,
        default: () => '',
      },
    },
  }
</script>
