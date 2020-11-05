<template>
  <div>
    <Hero />
    <Stream />
    <SlammerInfo :slammers="slammers" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const slammers = await $content('slammers').fetch();

    return {
      slammers,
    };
  },
};
</script>
