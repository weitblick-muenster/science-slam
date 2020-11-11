<template>
  <table class="min-w-full my-4 table-fixed">
    <colgroup>
      <col span="1" class="w-fit-content">
      <col span="1" class="w-8">
      <col span="1" class="w-fit-content">
    </colgroup>

    <thead>
      <tr>
        <th class="xsm:px-2 md:px-6 py-2 md:py-3 border-b-2 border-gray-500 text-left text-sm leading-4
          font-semibold text-secondary tracking-wider">
          Produkt
        </th>
        <th class="xsm:px-2 md:px-6 py-2 md:py-3 border-b-2 border-gray-500 text-center text-sm leading-4
          font-semibold text-secondary tracking-wider">
          Preis
        </th>
        <th class="xsm:px-2 md:px-6 py-2 md:py-3 border-b-2 border-gray-500 text-left text-sm leading-4
          font-semibold text-secondary tracking-wider">
          Anzahl
        </th>
      </tr>
    </thead>

    <tbody class="bg-white">
      <tr
        v-for="product in products"
        :key="product.name"
      >
        <td class="xsm:px-2 md:px-6 py-2 md:py-4 text-left sm:whitespace-no-wrap border-b border-gray-500">
          <div class="flex items-center">
            <div>
              <div class="text-sm leading-5 text-gray-800">{{ product.fullName }}</div>
            </div>
          </div>
        </td>

        <td class="xsm:px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-b border-gray-500">
          <div class="flex items-center justify-center">
            <div>
              <div class="leading-5 text-gray-800 text-sm">{{ product.price | price }}</div>
            </div>
          </div>
        </td>

        <td class="xsm:px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap text-right border-b border-gray-500">
          <div class="flex items-center">
            <button
              type="button"
              :title="`${product.fullName} entfernen`"
              class="rounded-md font-bold p-1 md:p-2 mr-2 md:mr-4 bg-white text-secondary border-2 border-secondary
                transition-all duration-200 inline-flex justify-center
              hover:text-white hover:bg-secondary focus:outline-none"
              @click="decrementQuantity(product.name)"
            >
              <FontAwesomeIcon icon="minus" />
            </button>

            <input
              v-model.number="quantities[product.name]"
              type="number"
              step="1"
              min="0"
              class="w-8 md:w-16 border border-secondary rounded-md p-1 md:p-2"
              v-numeric-only
            >

            <button
              type="button"
              :title="`${product.fullName} hinzufügen`"
              class="rounded-md font-bold p-1 md:p-2 ml-2 md:ml-4 bg-white text-secondary border-2 border-secondary
                transition-all duration-200 inline-flex justify-center
              hover:text-white hover:bg-secondary focus:outline-none"
              @click="incrementQuantity(product.name)"
            >
              <FontAwesomeIcon icon="plus" />
            </button>
          </div>
        </td>
      </tr>

      <tr>
        <td class="xsm:px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-t-2 border-gray-500 font-semibold
        text-secondary text-left"
        >
          Gesamt
        </td>
        <td class="xsm:px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-t-2 border-gray-500 text-center">
          {{ totalSum | price }}
        </td>
        <td class="xsm:px-2 md:px-6 py-2 md:py-4 whitespace-no-wrap border-t-2 border-gray-500" />
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'DonateForm',
  data() {
    return {
      quantities: {
        ticket: 1,
        cake: 0,
        beer: 0,
        science: 0,
      },
      products: [
        {
          name: 'ticket',
          fullName: 'Virtuelles Ticket',
          price: 2.9,
        },
        {
          name: 'cake',
          fullName: 'Kuchen',
          price: 0.5,
        },
        {
          name: 'beer',
          fullName: 'Bildungsbier',
          price: 1.5,
        },
        {
          name: 'science',
          fullName: 'Für die Wissenschaft!',
          price: 1,
        },
      ],
    };
  },
  computed: {
    totalSum() {
      return Object.keys(this.quantities).map((productName) => {
        const quantity = this.quantities[productName];
        return quantity * this.products.find((product) => product.name === productName).price;
      }).reduce((a, b) => a + b, 0.0);
    },
  },
  mounted() {
    this.$emit('amount-change', this.totalSum);
  },
  methods: {
    decrementQuantity(productName) {
      if (this.quantities[productName] !== 0) {
        this.$set(this.quantities, productName, this.quantities[productName] - 1);
      }
    },
    incrementQuantity(productName) {
      this.$set(this.quantities, productName, this.quantities[productName] + 1);
    },
  },
  filters: {
    price(value) {
      return `${value.toFixed(2)} €`;
    },
  },
  watch: {
    totalSum(amount) {
      this.$emit('amount-change', amount);
    },
  },
};
</script>
