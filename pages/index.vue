<template>
  <div>
    <Hero />
    <StreamTeaser id="stream" :startsAt="streamStartsAt" />
    <SlammerInfo id="themen" :slammers="slammers" />
    <AboutWeitblick id="ueber-weitblick" />
    <FollowUs />
    <Sponsors id="sponsoren" :sponsors="sponsors" />
  </div>
</template>

<script>
const PAYPAL_PARAMS = ['amt', 'cc', 'cm', 'item_name', 'item_number', 'st', 'tx'];

export default {
  async asyncData({ $content }) {
    const slammers = await $content('/slammers').sortBy('position', 'asc').fetch();
    const sponsors = await $content('/sponsors').sortBy('position', 'asc').fetch();

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
  mounted() {
    const { query } = this.$route;

    if (PAYPAL_PARAMS.every((param) => Object.keys(query).includes(param))) {
      const {
        amt: amount,
        cc: currency,
        st: status,
        tx: transactionId,
      } = query;

      if (
        currency === 'EUR'
        && status === 'Completed'
        && typeof transactionId === 'string'
        && parseFloat(amount) > 0
      ) {
        this.$router.push({ query: {}, addToHistory: false });
        this.$notification.success('Vielen Dank für deine Unterstützung!');
      }
    }
  },
};
</script>
