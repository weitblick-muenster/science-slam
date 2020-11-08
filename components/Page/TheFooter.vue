<template>
  <div class="bg-gray-300">
    <div class="container mx-auto px-8 py-12 md:py-16 md:flex text-center justify-center">
      <a
        href="https://weitblicker.org/muenster/"
        target="_blank"
        class="footer-link"
      >
        Weitblick Münster Homepage
      </a>

      <NuxtLink
        to="/impressum"
        class="footer-link"
      >
        Impressum
      </NuxtLink>

      <NuxtLink
        to="/datenschutz"
        class="footer-link"
      >
        Datenschutz
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-link {
  @apply text-secondary font-semibold list-none no-underline mr-0 pt-2 transition-all duration-300 w-fit-content;
  @apply mx-auto;
  display: list-item;
}

.footer-link:hover {
  @apply shadow-secondary-thin;
}

@screen md {
  .footer-link {
    @apply inline-block mr-12 ml-0;
  }

  .footer-link:last-child {
    @apply mr-0;
  }
}
</style>
