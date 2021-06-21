<template>
  <v-container
    id="quote"
    fluid
    tag="section"
  >
    <QuoteTableMain
      :rowData.sync = "quote"
    />
    {{ quote[0].pn }}
  </v-container>
</template>

<script>
    export default {
    data: () => ({
      quote: [
        {
          pn: "20143-1",
          qty: 1,
          desc: "ARM ASSY-FLAP ATTACH",
          list: 241.68,
          cost: 157.09,
          stock: 18
        },
        {
          pn: "SK40S5-6S",
          qty: 1,
          desc: "SS STUD",
          list: 6.45,
          cost: 4.19,
          stock: 0
        },
        {
          pn: "3/8X1X104",
          qty: 1,
          desc: "NATURAL SPONGE",
          list: 18.88,
          cost: 12.27,
          stock: 9
        },
        {
          pn: "AN3-5A",
          qty: 1,
          desc: "BOLT-HP",
          list: 0.25,
          cost: 0.16,
          stock: 5213
        },
        {
          pn: "153-5",
          qty: 1,
          desc: "GREASE RING-T/W",
          list: 26.38,
          cost: 21.1,
          stock: 17
        }
      ]
    }),
  }
</script>