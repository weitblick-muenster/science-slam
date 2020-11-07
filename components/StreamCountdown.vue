<template>
  <ClientOnly>
    <VueCountdown
      ref="countdown"
      :time="timeLeft"
      :auto-start="false"
      :emit-events="true"
      :interval="1000"
      @end="$emit('end')"
      class=""
    >
      <template slot-scope="{ days, hours, minutes, seconds }">
        <ul class="countdown m-0 p-0 list-none w-fit-content mx-auto">
          <li v-if="days > 0">
            <p class="digit">
              {{ days | leadingZero }}
            </p>
          </li>
          <li>
            <p class="digit">
              {{ hours | leadingZero }}
            </p>
          </li>
          <li>
            <p class="digit">
              {{ minutes | leadingZero }}
            </p>
          </li>
          <li>
            <p class="digit">
              {{ seconds | leadingZero }}
            </p>
          </li>
        </ul>
      </template>
    </VueCountdown>
  </ClientOnly>
</template>

<script>
export default {
  name: 'StreamCountdown',
  props: {
    // Pass deadline as iso8601 DateTime
    deadline: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      timeLeft: 0,
    };
  },
  created() {
    this.timeLeft = new Date(this.deadline) - new Date();
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.countdown.start();
    });
  },
  destroyed() {
    this.$el.remove();
  },
  filters: {
    leadingZero(number) {
      return number < 10 ? `0${number}` : number;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

@screen sm {
  .countdown {
    @apply text-6xl #{!important};

    li {
      @apply mx-0 #{!important};

      &::after {
        top: -5px !important;
        right: -48px !important;
      }
    }
  }
}

@screen md {
  .countdown {
    li {
      @apply mx-0 #{!important};

      &::after {
        top: -5px !important;
        right: -48px !important;
      }
    }
  }
}

.countdown {
  font-family: 'Fira Code', monospace;
  @apply text-4xl;

  li {
    @apply inline-block my-0 mx-0 relative;

    &:first-of-type {
      @apply ml-0;
    }

    &:last-of-type {
      &::after {
        content: '';
      }
    }

    &::after {
      @apply absolute;
      content: ':';
      top: -3px;
      right: -22px;
    }

    .digit {
      @apply font-bold leading-normal mb-0;
    }
  }
}
</style>
