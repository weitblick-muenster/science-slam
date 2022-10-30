<template>
  <div :class="headerWrapperCssClasses">
    <div class="container mx-auto">
      <nav :class="navCssClasses">
        <a
          href="/"
          class="flex items-center flex-shrink-0 mr-6"
        >
          <img
            src="~/assets/images/science-slam/logo.png"
            alt="Logo"
            class="h-12 w-auto mr-2"
          >
          <span :class="logoTextCssClasses">SCIENCE SLAM</span>
        </a>

        <div class="block lg:hidden">
          <button
            title="Menu"
            type="button"
            :class="menuButtonCssClasses"
            @click="showMobileMenu = !showMobileMenu"
          >
            <FontAwesomeIcon
              :icon="showMobileMenu ? 'times' : 'bars'"
              class="fa-2x"
            />
          </button>
        </div>

        <div
          class="w-full lg:flex lg:items-center lg:w-auto px-4"
          :class="{ 'block': showMobileMenu, 'hidden': !showMobileMenu }"
        >
          <div class="lg:flex-grow text-xl font-bold">
            <a
              v-for="section in linkedSections"
              :key="section.containerId"
              :class="navLinkCssClasses"
              @click="scrollToSection(section.containerId)"
            >
              {{ section.title }}
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
  props: {
    colorScheme: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      showMobileMenu: false,
      linkedSections: [
        // {
        //   title: 'Stream',
        //   containerId: 'stream',
        // },
        {
          title: 'Die Idee',
          containerId: 'idee',
        },
        {
          title: 'Unsere Themen',
          containerId: 'themen',
        },
        {
          title: 'Über Weitblick',
          containerId: 'ueber-weitblick',
        },
        {
          title: 'Unsere Sponsoren',
          containerId: 'sponsoren',
        },
      ],
    };
  },
  computed: {
    headerWrapperCssClasses() {
      return [
        {
          'bg-secondary': this.hasPrimaryColorScheme,
          'bg-white': this.hasSecondaryColorScheme,
        },
      ];
    },
    navCssClasses() {
      return [
        'flex',
        'items-center',
        'justify-between',
        'flex-wrap',
        'p-6',
        'border-b',
        {
          'border-primary': this.hasPrimaryColorScheme,
          'border-secondary': this.hasSecondaryColorScheme,
        },
      ];
    },
    logoTextCssClasses() {
      return [
        'text-2xl',
        'font-bold',
        'hidden',
        'md:inline-block',
        {
          'text-white': this.hasPrimaryColorScheme,
          'text-secondary': this.hasSecondaryColorScheme,
        },
      ];
    },
    menuButtonCssClasses() {
      return [
        'px-3',
        'py-2',
        'rounded',
        'focus:outline-none',
        {
          'text-primary': this.hasPrimaryColorScheme,
          'text-secondary': this.hasSecondaryColorScheme,
        },
      ];
    },
    navLinkCssClasses() {
      return [
        'no-underline',
        'block',
        'mt-4',
        'transition-all',
        'duration-300',
        'mr-4',
        'w-fit-content',
        'cursor-pointer',
        'lg:inline-block',
        'lg:mt-0',
        {
          'text-primary': this.hasPrimaryColorScheme,
          'text-secondary': this.hasSecondaryColorScheme,
          'hover:shadow-primary': this.hasPrimaryColorScheme,
          'hover:shadow-secondary': this.hasSecondaryColorScheme,
        },
      ];
    },

    hasPrimaryColorScheme() {
      return this.colorScheme === 'primary';
    },
    hasSecondaryColorScheme() {
      return this.colorScheme === 'secondary';
    },
  },
  methods: {
    scrollToSection(containerId) {
      const routeName = this.$nuxt.$route.name;

      if (routeName === 'index') {
        const scrollTo = document.getElementById(containerId);

        if (scrollTo) {
          this.$smoothScroll({
            scrollTo: document.getElementById(containerId),
          });
        } else {
          // eslint-disable-next-line no-console
          console.warn(`No HTML element with the ID '${containerId}' was found.`);
        }
      } else {
        this.$router.push({ path: '/', hash: containerId });
      }
    },
  },
};
</script>
