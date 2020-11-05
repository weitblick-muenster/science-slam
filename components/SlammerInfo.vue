<template>
  <div class="bg-secondary text-white">
    <div class="container mx-auto px-8 py-16">
      <div class="w-full flex">
        <h2 class="text-xl font-bold uppercase mb-2 mr-2">Unsere Slammer*innen:</h2>
      </div>

      <div class="w-full flex flex-wrap">
        <Slammer
          v-for="slammer in slammers"
          :key="slammer.slug"
          :slammer="slammer"
        />
        <!-- TODO: Maybe add the slider on the mobile view and leave out biographies
        <ClientOnly>
          <Swiper :options="swiperOptions">
            <SwiperSlide
              v-for="slammer in slammers"
              :key="slammer.slug"
            >
              <Slammer :slammer="slammer" />
            </SwiperSlide>

            <div class="swiper-button-prev" slot="button-prev" />
            <div class="swiper-button-next" slot="button-next" />
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination" />
          </Swiper>

          <Spinner slot="placeholder" />
        </ClientOnly> -->
      </div>
    </div>
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
      swiperOptions: {
        loop: true,
        speed: 500,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
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
}

.swiper-pagination-bullet-active {
  @apply bg-primary #{!important};
}
</style>
