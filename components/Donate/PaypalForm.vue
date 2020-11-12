<template>
  <form ref="form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_donations">
    <input type="hidden" name="currency_code" value="EUR">
    <input type="hidden" name="lc" value="de_DE">
    <input type="hidden" name="business" value="muenster@weitblicker.org">
    <input type="hidden" name="bn" value="StudierendeninitiativeWeitblickMünstere.V.Donate_WPS_DE">
    <input type="hidden" name="no_note" value="0">
    <input type="hidden" name="tax" value="0">
    <input type="hidden" name="amount" :value="amount">

    <input type="hidden" name="return" value="https://slam.weitblicker.live">
    <input type="hidden" name="cancel_return" value="https://slam.weitblicker.live">
  </form>
</template>

<script>
export default {
  name: 'PaypalForm',
  props: {
    amount: {
      type: [Number, String],
      required: false,
      default: 4.5,
    },
  },
  methods: {
    submit() {
      this.$refs.form.submit();
    },
  },
};
</script>
