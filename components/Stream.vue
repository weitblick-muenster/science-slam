<template>
  <div class="container mx-auto px-8 py-12 md:py-16">
    <div class="w-full mb-4">
      <h2 class="text-4xl font-bold mb-2">Hier geht's zum Stream:</h2>
      <p class="text-lg leading-loose">
        Weitblick Münster veranstaltet jedes Semester einen Science Slam.
        Junge Wissenschaft­ler*innen treten gegeneinander an und stellen ihre Forschung
        innerhalb von 10 Minuten möglichst verständlich und unterhaltsam vor.
        Ihr dürft entscheiden, wer diese Aufgabe am besten meistert.
        Auch in Zeiten von Corona sind wir weiterhin aktiv – wir freuen uns auf dich!
      </p>
    </div>

    <div class="w-full text-center">
      <ClientOnly>
        <StreamCountdown
          ref="countdown"
          :deadline="startsAt"
          @end="onCountdownEnd"
        />

        <Spinner slot="placeholder" />
      </ClientOnly>

      <div
        ref="confettiHolder"
        class="w-fit-content m-auto confetti-holder"
      />

      <iframe
        v-if="showStream"
        title="Stream"
        class="inline-block"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/NpEaa2P7qZI"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
import { confetti } from 'dom-confetti';

export default {
  name: 'Stream',
  props: {
    // Date in ISO8601 format
    startsAt: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showStream: false,
    };
  },
  created() {
    this.showStream = new Date() >= new Date(this.startsAt);
  },
  methods: {
    onCountdownEnd() {
      confetti(this.$refs.confettiHolder);
      const vm = this;
      setTimeout(() => {
        vm.showStream = true;
        vm.$refs.countdown.$destroy();
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.confetti-holder {
  &::before {
    content: ' ';
    white-space: pre;
  }
}
</style>
