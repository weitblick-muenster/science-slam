<template>
  <div class="bg-secondary text-white">
    <BaseSection>
      <h2 class="text-4xl font-bold mb-2">Unser Programm</h2>

      <div v-if="toBeAnnounced" class="text-xl text-primary text-center w-full font-semibold tracking-wider mt-6 mb-12">
        TO BE ANNOUNCED
      </div>

      <div v-else class="w-full flex flex-wrap">
        <ClientOnly>
          <Swiper :options="swiperOptions">
            <SwiperSlide
              v-for="point in program"
              :key="point.id"
              class="px-0 py-10 sm:py-12 sm:px-16"
            >
              <div
                class="w-full h-full lg:flex lg:items-start bg-white rounded text-black
                  p-8 lg:pt-12 lg:py-12 lg:pl-8 lg:pr-24 xl:pl-16 xl:pr-48"
              >
                <div class="text-left w-full lg:w-5/6 lg:ml-8">
                  <h2 class="font-bold text-lg sm:text-2xl">
                    <span class="uppercase">{{ point.title }}</span>
                  </h2>

                  <div class="w-full">
                    <p class="leading-loose py-2" v-html="point.infoText" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div v-if="program.length > 1" class="swiper-button-prev" slot="button-prev" />
            <div v-if="program.length > 1" class="swiper-button-next" slot="button-next" />
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
  name: 'Program',
  props: {
    program: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      toBeAnnounced: false,

      swiperOptions: {
        loop: this.program.length > 1,
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
  display: none;

  @apply text-primary #{!important};

  &:focus {
    @apply outline-none #{!important};
  }
}

@media screen and (min-width: 640px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: block;
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
