<template>
  <div class="w-full flex flex-wrap items-center m-4">
    <div class="w-full md:w-1/2 xl:w-1/3">
      <div class="md:flex bg-white text-black rounded-lg p-6 shadow-md">
        <img
          :src="require(`~/assets/images/slammers/${slammer.slug}.png`)"
          :alt="slammer.name"
          class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 border-2 border-primary mb-2"
        >

        <div class="text-center md:text-left">
          <h3 class="text-xl">{{ `${slammer.name}, ${slammer.age}` }}</h3>
          <div class="text-secondary">
            <span>Fachbereich:</span>
            <span class="text-secondary">{{ slammer.subjectArea }}</span>
          </div>

          <div
            v-if="slammer.social"
            class="mt-1 flex justify-center md:justify-start"
          >
            <template v-for="socialMediaProvider in socialMediaProviders">
              <a
                v-if="slammer.social[socialMediaProvider]"
                :key="`${slammer.slug}_${socialMediaProvider}_${slammer.social[socialMediaProvider]}`"
                :href="`https://${socialMediaProvider}.com/${slammer.social[socialMediaProvider]}`"
                target="_blank"
                :class="socialMediaCssClasses(socialMediaProvider)"
              >
                <FontAwesomeIcon :icon="['fab', socialMediaProvider]" style="display: block" class="fa-w-16" />
                <span class="hidden">{{ socialMediaProvider }}</span>
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 xl:w-2/3">
      <div class="leading-loose py-2 px-6">
        {{ slammer.biography }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slammer',
  props: {
    slammer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      socialMediaProviders: ['twitter', 'instagram', 'facebook'],
    };
  },
  methods: {
    socialMediaCssClasses(provider) {
      return [
        'text-center',
        'rounded-full',
        'mr-1',
        'p-2',
        'transition-all',
        'ease-in-out',
        'duration-300',
        `text-${provider}`,
        'hover:text-white',
        `hover:bg-${provider}`,
      ];
    },
  },
};
</script>
