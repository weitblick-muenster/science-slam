<template>
  <div class="bg-secondary">
    <div class="container mx-auto px-8 py-12 md:py-16 xl:py-32">
      <div class="flex mb-4 relative">
        <div class="lg:w-2/3">
          <div class="text-white">
            <h1 class="font-bold text-4xl sm:text-4.75xl md:text-6xl">SCIENCE SLAM</h1>

            <div class="right-0 text-lg md:text-xl">
              <span>präsentiert von</span>
              <img
                src="~/assets/images/weitblick/logo-white.png"
                alt="Weitblick Münster"
                class="w-32 md:w-40 inline-flex ml-1 md:ml-2 pb-2"
              >
            </div>

            <div class="w-fit-content">
              <div class="text-2xl md:text-4xl mt-8 font-semibold text-primary">
                Am 29.&nbsp;November&nbsp;2022 um&nbsp;20&nbsp;Uhr
              </div>
              <div class="text-base sm:text-xl font-semibold sm:text-right">
                <span>im Hörsaal&nbsp;H1,</span>
                <span>Schlossplatz&nbsp;46, 48143&nbsp;Münster</span>
                <!-- <FontAwesomeIcon
                  icon="arrow-alt-circle-down"
                  class="fa-lg"
                /> -->
              </div>

              <DonateButton />
            </div>
          </div>
        </div>

        <div class="items-center w-1/3 relative hidden lg:flex">
          <img
            src="~/assets/images/science-slam/logo.png"
            alt="Logo"
            class="absolute m-auto inset-0 w-64"
          >
        </div>

        <!-- <img
          src="~/assets/images/science-slam/logo.png"
          alt="Logo"
          class="hidden sm:block md:hidden absolute w-48 top-0 right-0 m-auto"
        > -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>
