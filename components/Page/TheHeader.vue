<template>
  <div class="bg-secondary">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between flex-wrap p-6 border-b border-primary">
        <div class="flex items-center flex-shrink-0 mr-6">
          <img
            src="~/assets/images/science-slam/logo.png"
            alt="Logo"
            class="w-16 mr-2"
          >
          <span class="text-2xl text-white font-bold hidden md:inline-block">SCIENCE SLAM</span>
        </div>

        <div class="block lg:hidden">
          <button
            title="Menu"
            type="button"
            class="px-3 py-2 rounded text-primary focus:outline-none"
            @click="showMobileMenu = !showMobileMenu"
          >
            <FontAwesomeLayers class="fa-2x">
              <FontAwesomeIcon
                :icon="showMobileMenu ? 'times' : 'bars'"
                class="text-primary"
              />
            </FontAwesomeLayers>
          </button>
        </div>

        <div
          class="w-full lg:flex lg:items-center lg:w-auto px-4"
          :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }"
        >
          <div class="lg:flex-grow text-xl font-bold">
            <NavLink href="#">
              Stream
            </NavLink>
            <NavLink href="#">
              Unsere Slammer*innen
            </NavLink>
            <NavLink href="#">
              Über Weitblick
            </NavLink>
            <NavLink href="#">
              Hilfe
            </NavLink>
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
