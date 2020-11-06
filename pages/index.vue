<template>
  <div>
    <Hero />
    <Stream />
    <SlammerInfo :slammers="slammers" />
    <AboutWeitblick />
    <FollowUs />
    <Sponsors :sponsors="sponsors" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const slammers = await $content('/slammers').fetch();
    const sponsors = await $content('/sponsors').fetch();

    return {
      slammers,
      sponsors,
    };
  },
};
</script>
