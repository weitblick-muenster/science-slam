<template>
  <div class="w-full mt-8 lg:mt-12 text-center sm:text-left">
    <div class="w-full sm:flex space-y-4 sm:space-y-0 sm:space-x-4">
      <a
        href="https://weitblickmnstertickets.ticket.io/0gnfxr4g/?"
        target="_blank"
        role="button"
        class="button-primary inline-flex justify-center focus:outline-none"
      >
        <span class="flex items-center">
          <FontAwesomeIcon
            icon="ticket-alt"
            class="inline-flex fa-lg"
          />
        </span>

        <span class="ml-2">
          Ticketverkauf
        </span>
      </a>

      <a
        href="https://www.betterplace.org/de/projects/40094-weitblick-muenster-schulbau-benin"
        target="_blank"
        role="button"
        class="button-primary inline-flex justify-center focus:outline-none"
        >
        <span class="flex items-center">
          <FontAwesomeIcon
          icon="hand-holding-usd"
          class="inline-flex fa-lg"
          />
        </span>

        <span class="ml-2">
          Hier Spenden
        </span>
      </a>
    </div>

    <!-- <button
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
    /> -->
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
