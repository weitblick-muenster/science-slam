<template>
  <div class="w-full relative stream-container">
    <iframe
      title="Stream"
      class="inline-block absolute top-0 left-0 w-full min-h-full mx-auto"
      src="https://www.youtube-nocookie.com/embed/0p1jypeFYuw"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'Stream',
};
</script>

<style lang="scss" scoped>
.stream-container {
  height: 150px;
}

@screen xsm {
  .stream-container {
    height: 175px;
  }
}

@screen sm {
  .stream-container {
    height: 300px;
  }
}

@screen md {
  .stream-container {
    height: 400px;
  }
}

@screen lg {
  .stream-container {
    height: 600px;
  }
}
</style>
