<template>
  <div class="bg-secondary">
    <div class="container mx-auto px-8 py-16 xl:py-32">
      <div class="flex mb-4 tex-center">
        <div class="md:w-2/3">
          <div class="text-white">
            <h1 class="font-bold text-6xl">SCIENCE SLAM</h1>
            <p class="right-0">präsentiert von Weitblick</p>

            <p class="text-3xl mt-4">
              26 November 2020 um 20 Uhr
            </p>
            <p>im Live Stream ↓</p>
          </div>

          <button
            type="button"
            class="button-primary mt-4 flex items-center text-center"
          >
            <span class="mr-2">
              Soli Tickets!
            </span>

            <span class="flex items-center">
              <FontAwesomeIcon
                icon="ticket-alt"
                class="inline-flex"
              />
            </span>
          </button>
        </div>

        <div class="items-center w-1/3 relative hidden md:flex">
          <img
            src="~/assets/images/science-slam/logo.png"
            alt="Logo"
            class="absolute m-auto inset-0 w-64"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>
