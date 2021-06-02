<template>
  <div
    class="w-full h-full lg:flex lg:items-start bg-white rounded text-black
      p-8 lg:pt-12 lg:py-12 lg:pl-8 lg:pr-24 xl:pl-16 xl:pr-48"
  >
    <div class="w-full lg:w-1/6 text-center lg:justify-center">
      <img
        :src="require(`~/assets/images/slammers/${slammer.slug}.png`)"
        :alt="slammer.name"
        class="h-24 w-24 xl:h-32 xl:w-32 rounded-full mx-auto border-2 border-primary mb-2"
      >

      <div
        v-if="slammer.social"
        class="mt-1 flex justify-around w-fit-content mx-auto"
      >
        <template v-for="socialMediaProvider in socialMediaProviders">
          <a
            v-if="slammer.social[socialMediaProvider]"
            :key="`${slammer.slug}_${socialMediaProvider}_${slammer.social[socialMediaProvider]}`"
            :href="socialMediaLink(socialMediaProvider)"
            target="_blank"
            :class="socialMediaCssClasses(socialMediaProvider)"
          >
            <FontAwesomeIcon
              :icon="socialMediaIcon(socialMediaProvider)"
              style="display: block"
              class="fa-lg fa-w-16"
            />
            <span class="sr-only">{{ socialMediaProvider }}</span>
          </a>
        </template>
      </div>
    </div>

    <div class="text-center lg:text-left w-full lg:w-5/6 lg:ml-8">
      <h2 class="font-bold text-lg sm:text-2xl">
        <span class="uppercase">{{ slammer.slamTitle }}</span>
      </h2>

      <h3 class="text-xl">{{ `${slammer.name}${slammer.age ? `, ${slammer.age}` : '' }` }}</h3>
      <div class="text-gray-600 text-lg">
        <span>Fachbereich:</span>
        <span>{{ slammer.subjectArea }}</span>
      </div>

      <div class="w-full hidden lg:block">
        <div
          class="leading-loose py-2"
          v-html="slammer.biography"
        />
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
      socialMediaProviders: ['homepage', 'twitter', 'instagram', 'facebook'],
    };
  },
  methods: {
    socialMediaLink(provider) {
      if (provider === 'homepage') return this.slammer.social.homepage;

      return `https://${provider}.com/${this.slammer.social[provider]}`;
    },
    socialMediaIcon(provider) {
      if (provider === 'homepage') return ['fas', 'globe'];

      return ['fab', provider];
    },
    socialMediaCssClasses(provider) {
      return [
        'text-center',
        'rounded-full',
        'mr-1',
        'p-2',
        'transition-all',
        'ease-in-out',
        'duration-300',
        'hover:text-white',
        {
          'text-twitter': provider === 'twitter',
          'hover:bg-twitter': provider === 'twitter',
          'text-instagram': provider === 'instagram',
          'hover:bg-instagram': provider === 'instagram',
          'text-facebook': provider === 'facebook',
          'hover:bg-facebook': provider === 'facebook',
          'text-blue-700': provider === 'homepage',
          'hover:bg-blue-700': provider === 'homepage',
        },
      ];
    },
  },
};
</script>
