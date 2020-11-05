<template>
  <div>
    <div class="container mx-auto px-8 py-16">
      <div class="flex flex-wrap-reverse md:flex-row-reverse">
        <div class="w-full md:w-2/3 text-center">
          <iframe
            title="Stream"
            class="inline-block"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/NpEaa2P7qZI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <div class="w-full md:w-1/3">
          <h2 class="text-xl font-bold uppercase mb-2">Der Science Slam:</h2>
          <p class="text-md leading-loose">
            Weitblick Münster veranstaltet jedes Semester einen Science Slam.
            4 junge Wissenschaft­ler*innen treten gegeneinander an und stellen ihre Forschung
            innerhalb von zehn Minuten möglichst verständlich und unterhaltsam vor.
            Ihr dürft entscheiden, wer diese Aufgabe am besten meistert.
            Auch in Zeiten von Corona sind wir weiterhin aktiv – wir freuen uns auf dich!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stream',
};
</script>
