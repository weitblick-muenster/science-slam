<template>
  <BaseSection>
    <h2 class="text-4xl font-bold mb-2">Unsere Sponsoren</h2>

    <div class="flex flex-wrap w-full md:justify-around justify-center">
      <div
        v-for="sponsor in activeSponsors"
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
  </BaseSection>
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
  computed: {
    activeSponsors() {
      const sponsors = Array.isArray(this.sponsors) ? this.sponsors : [this.sponsors];
      return sponsors.filter((sponsor) => sponsor.active);
    },
  },
};
</script>
