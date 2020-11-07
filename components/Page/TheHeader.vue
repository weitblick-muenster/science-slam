<template>
  <div class="bg-secondary">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between flex-wrap p-6 border-b border-primary">
        <a
          href="/"
          class="flex items-center flex-shrink-0 mr-6"
        >
          <img
            src="~/assets/images/science-slam/logo.png"
            alt="Logo"
            class="w-16 mr-2"
          >
          <span class="text-2xl text-white font-bold hidden md:inline-block">SCIENCE SLAM</span>
        </a>

        <div class="block lg:hidden">
          <button
            title="Menu"
            type="button"
            class="px-3 py-2 rounded text-primary focus:outline-none"
            @click="showMobileMenu = !showMobileMenu"
          >
            <FontAwesomeIcon
              :icon="showMobileMenu ? 'times' : 'bars'"
              class="text-primary fa-2x"
            />
          </button>
        </div>

        <div
          class="w-full lg:flex lg:items-center lg:w-auto px-4"
          :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }"
        >
          <div class="lg:flex-grow text-xl font-bold">
            <a href="/#stream" class="nav-link" @click="showMobileMenu = false" v-smooth-scroll>
              Stream
            </a>
            <a href="/#themen" class="nav-link" @click="showMobileMenu = false" v-smooth-scroll>
              Unsere Themen
            </a>
            <a href="/#ueber-weitblick" class="nav-link" @click="showMobileMenu = false" v-smooth-scroll>
              Über Weitblick
            </a>
            <a href="/#sponsoren" class="nav-link" @click="showMobileMenu = false" v-smooth-scroll>
              Unsere Sponsoren
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>
