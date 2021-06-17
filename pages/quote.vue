<template>
  <v-container
    id="quote"
    fluid
    tag="section"
  >
    <QuoteTableMain
        :rows = quote
    />
  </v-container>
</template>

<script>
    export default {
    data: () => ({}),

    computed: {
      quote () {
        return this.$store.state.quote.quote
      },
    },
  }
</script>

</script>
