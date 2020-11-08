<template>
  <BaseSection>
    <div class="w-full mb-4 text-center">
      <h2 class="text-4xl font-bold mb-2">Hier geht's zum Stream:</h2>
      <div class="text-lg leading-loose text-left">
        <p>
          Weitblick Münster veranstaltet jedes Semester einen Science Slam.
          Junge Wissenschaft­ler*innen treten gegeneinander an und stellen ihre Forschung
          innerhalb von 10 Minuten möglichst verständlich und unterhaltsam vor.
          Ihr dürft entscheiden, wer diese Aufgabe am besten meistert.
        </p>

        <p>
          Die Veranstaltung könnt ihr kostenlos im Livestream verfolgen.
          Kostenlos? Ja, ihr habt richtig gehört! Ihr könnt den Livestream kostenlos aufrufen.
          Statt wie gewohnt Tickets zu verkaufen, setzen wir bei diesem Science Slam auf zu einhundert Prozent
          freiwillige Soli-Tickets. Mit einem Soli-Ticket unterstützt ihr Projekte für Bildungsgerechtigkeit
          von Weitblick Münster. Mehr zu Weitblick erfahrt ihr weiter unten. Wir würden uns sehr über
          eure Unterstützung freuen.
        </p>
      </div>
    </div>

    <div class="w-full text-center">
      <Stream v-show="showStream"/>

      <template v-if="!showStream">
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
          :style="{ height: '.5px' }"
        />

        <div>
          Schau dir in der Zwischenzeit unsere Themen an!
          <FontAwesomeIcon icon="arrow-alt-circle-down" class="rounded-full p-0 text-secondary bg-white" />
        </div>
      </template>
    </div>
  </BaseSection>
</template>

<script>
import { confetti } from 'dom-confetti';

export default {
  name: 'StreamTeaser',
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
