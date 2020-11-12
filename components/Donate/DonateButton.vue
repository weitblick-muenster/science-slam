<template>
  <div class="w-full mt-12">
    <button
      type="button"
      class="button-primary flex items-center text-center justify-center max-w-xs
        h-12 mx-auto sm:float-left"
      @click="showDonateModal = true"
    >
      <span class="flex items-center">
        <FontAwesomeIcon
          icon="ticket-alt"
          class="inline-flex fa-lg"
        />
      </span>

      <span class="ml-2">
        Soli-Tickets kaufen!
      </span>
    </button>

    <DonateModal
      :show="showDonateModal"
      @close="showDonateModal = false"
    />
  </div>
</template>

<script>
export default {
  name: 'DonateButton',
  data() {
    return {
      showDonateModal: false,
    };
  },
};
</script>
