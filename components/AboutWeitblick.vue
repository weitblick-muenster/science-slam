<template>
  <div class="container mx-auto px-8 py-12 md:py-16">
    <h2 class="text-4xl font-bold mb-2">Über Weitblick</h2>

    <div class="flex flex-wrap-reverse md:flex-row-reverse">
      <div class="w-full mt-12 lg:w-1/2 lg:mt-0 text-center relative">
        <!-- TODO -->
        <img
          src=""
          alt="Weitblick Gruppenfoto"
          class="absolute m-auto inset-0"
        >
      </div>

      <div class="w-full lg:w-1/2">
        <div class="leading-loose text-lg">
          Weitblick Münster ist eine Studierendeninitiative, die offen für alle interessierten
          und motivierten Menschen ist.
          Gemeinsam setzen wir uns für einen weltweit gerechteren Zugang zu Bildung ein.
          Dazu fördern wir Bildungsprojekte für Kinder und Jugendliche in Deutschland und
          in unseren Partnerprojekten in Benin, Honduras, Madagaskar und Kambodscha.
        </div>

        <div class="mt-2 text-lg items-center">
          <div class="w-fit-content">
            <div>Du möchstest mitwirken?</div>
          </div>

          <div class="mt-4">
            <a
              href="https://infoabend.weitblicker.live"
              target="_blank"
              type="button"
              class="button-weitblick flex items-center justify-center max-w-xs mx-auto"
            >
              <span class="flex items-center">
                <SvgIcon
                  id="weitblick"
                  icon-name="weitblick"
                  width="32"
                  height="32"
                  class="inline-flex"
                >
                  <WeitblickIcon />
                </SvgIcon>
              </span>

              <span class="ml-2 text-center">
                Schau gern vorbei!
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
