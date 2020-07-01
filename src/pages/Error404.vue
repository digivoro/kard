<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">
        D:
      </div>

      <div class="text-h2" style="opacity:.4">
        Nope. Nada por acá...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        push
        to="/"
        label="Volver"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>
