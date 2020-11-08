<template>
  <div class="content-wrapper">
    <TheHeader color-scheme="secondary" />
    <Nuxt class="flex-1" />
    <TheFooter class="footer" />
  </div>
</template>

<style>
html {
  font-family:
    'Metropolis',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body,
#__nuxt,
#__layout {
  min-height: 100vh;
}

.content-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
