<template>
  <div class="bg-bluegray">
    <div class="container mx-auto px-8 py-12 md:py-16">
      <div class="w-full">
        <h2 class="text-4xl font-bold mb-2">Folge uns!</h2>

        <div class="leading-loose mt-4">
          Du willst auf dem Laufenden bleiben?
          Folge uns doch auf unseren Social Media Kanälen und verpasse keine Neuigkeiten!
        </div>

        <div class="flex mt-3">
          <a
            href="https://www.instagram.com/weitblick_muenster/"
            target="_blank"
            type="button"
            class="text-center rounded-full mr-3 p-3 transition-all ease-in-out duration-300
              text-instagram hover:text-white hover:bg-instagram"
          >
            <FontAwesomeIcon :icon="['fab', 'instagram']" style="display: block" class="fa-2x fa-w-16" />
            <span class="hidden">instagram</span>
          </a>

          <a
            href="https://www.facebook.com/WeitblickMuenster"
            target="_blank"
            type="button"
            class="text-center rounded-full mr-3 p-3 transition-all ease-in-out duration-300
              text-facebook hover:text-white hover:bg-facebook"
          >
            <FontAwesomeIcon :icon="['fab', 'facebook']" style="display: block" class="fa-2x" />
            <span class="hidden">facebook</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
