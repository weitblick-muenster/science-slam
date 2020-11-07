<template>
  <!-- Link zur Weitblick.org/muenster, Datenschutz, Impressum -->
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
