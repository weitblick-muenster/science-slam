<template>
  <div>
    <Hero />
    <Stream id="stream" :startsAt="streamStartsAt" />
    <SlammerInfo id="themen" :slammers="slammers" />
    <AboutWeitblick id="ueber-weitblick" />
    <FollowUs />
    <Sponsors id="sponsoren" :sponsors="sponsors" />
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
  data() {
    return {
      streamStartsAt: '2020-11-23T19:00:00+00:00',
    };
  },
};
</script>
