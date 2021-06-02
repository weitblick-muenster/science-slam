<template>
  <div class="bg-secondary text-white">
    <BaseSection>
      <h2 class="text-4xl font-bold mb-2">Unsere Themen</h2>

      <div v-if="toBeAnnounced" class="text-xl text-primary text-center w-full font-semibold tracking-wider mt-6 mb-12">
        TO BE ANNOUNCED
      </div>

      <div v-else class="w-full flex flex-wrap">
        <ClientOnly>
          <Swiper :options="swiperOptions">
            <SwiperSlide
              v-for="slammer in slammers"
              :key="slammer.slug"
              class="px-0 py-10 sm:py-12 sm:px-16"
            >
              <Slammer :slammer="slammer" />
            </SwiperSlide>

            <div class="swiper-button-prev" slot="button-prev" />
            <div class="swiper-button-next" slot="button-next" />
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination" />
          </Swiper>

          <Spinner slot="placeholder" />
        </ClientOnly>
      </div>
    </BaseSection>
  </div>
</template>

<script>
export default {
  name: 'SlammerInfo',
  props: {
    slammers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      toBeAnnounced: false,

      swiperOptions: {
        loop: true,
        speed: 500,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  @apply text-primary #{!important};

  &:focus {
    @apply outline-none #{!important};
  }
}

.swiper-pagination-bullet {
  @apply bg-gray-300 #{!important};
}

.swiper-pagination-bullet-active {
  @apply bg-primary #{!important};
}

.swiper-pagination-bullet:focus {
  @apply outline-none #{!important};
}
</style>
