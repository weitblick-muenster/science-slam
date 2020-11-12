<template>
  <BaseModal
    v-show="show"
    :show="show"
    @close="$emit('close')"
  >
    <template #modal-headline>
      <h3 class="text-xl font-semibold leading-6 text-gray-900 mb-2" id="modal-headline">
        Spenden
      </h3>

      <a
        title="Schließen"
        class="cursor-pointer absolute text-black hover:text-gray-700 transition-colors duration-200"
        :style="{ top: '1rem', right: '1.5rem' }"
        @click="$emit('close')"
      >
        <FontAwesomeIcon icon="times" class="fa-lg" />
        <span class="hidden">Schließen</span>
      </a>
    </template>

    <template #modal-content>
      <div class="text-base text-black">
        <p class="mb-2">
          Die ganze Veranstaltung ist zwar kostenlos, aber wir freuen uns über jede Unterstützung -
          wie gewohnt mit Tickets und Kuchen, allerdings diesmal virtuell!
        </p>
        <p>
          Alle Spendeneinnahmen kommen unseren Bildungsprojekten auf der ganzen Welt zu Gute.
          Ein DANKE an jeden, der heute dabei ist.
        </p>
      </div>

      <DonateForm ref="donateForm" @amount-change="onAmountChange" />
      <PaypalForm ref="paypalForm" :amount="donateAmount" />
    </template>

    <template #modal-footer>
      <span class="flex w-full rounded-md sm:ml-3 sm:w-auto justify-center">
        <button
          type="button"
          class="button bg-paypal text-white hover:bg-paypal-dark inline-flex items-center justify-center"
          @click="donate"
        >
          <FontAwesomeIcon :icon="['fab', 'paypal']" class="fa-2x" />
          <span class="ml-2">Spenden</span>
        </button>
      </span>
      <span class="mt-3 flex w-full rounded-md sm:mt-0 sm:w-auto justify-center">
        <button
          type="button"
          class="button-gray-outlined inline-flex items-center justify-center"
          @click="$emit('close')"
        >
          Abbrechen
        </button>
      </span>
    </template>
  </BaseModal>
</template>

<script>
export default {
  name: 'DonateModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      donateAmount: 0.0,
    };
  },
  methods: {
    onAmountChange(amount) {
      this.donateAmount = amount;
    },

    donate() {
      this.$refs.paypalForm.submit();
    },
  },
};
</script>
