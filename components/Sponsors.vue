<template>
  <div class="container mx-auto px-8 py-12 md:py-16">
    <h2 class="text-4xl font-bold mb-2">Unsere Sponsoren</h2>

    <div class="flex flex-wrap w-full md:justify-around justify-center">
      <div
        v-for="sponsor in sponsors"
        :key="sponsor.slug"
        class="m-8 mb-12 inline-flex"
      >
        <a
          :href="sponsor.link"
          :title="sponsor.name"
          target="_blank"
        >
          <img
            :src="require(`~/assets/images/sponsors/${sponsor.slug}.png`)"
            :alt="sponsor.name"
            class="h-16 md:h-24 max-w-full"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sponsors',
  props: {
    sponsors: {
      type: Array,
      required: true,
    },
  },
};
</script>
