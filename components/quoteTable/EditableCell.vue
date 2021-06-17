<template>
    <v-edit-dialog
      :return-value.sync="value"
    >
      Click to Edit:{{ value }}
      <template v-slot:input>
        <v-text-field
          v-model="value"
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
      value: {
        type: String,
        default: () => '',
      },
    },
  }
</script>
