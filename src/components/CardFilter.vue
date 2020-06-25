<template>
  <q-toolbar>
    <div class="flex q-pa-lg q-mt-lg bg-primary shadow-4">
      <q-input
        dark
        dense
        standout
        v-model="text"
        input-class="text-right"
        class="q-ml-md"
      >
        <template v-slot:append>
          <q-icon v-if="text === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="text = ''"
          />
        </template>
      </q-input>
      <q-separator dark vertical class="q-mx-md"></q-separator>
      <q-btn
        v-for="(item, index) in tipos"
        :key="index"
        :color="item.disabled ? item.disabledColor : item.color"
        class="q-mx-xs"
        size="lg"
        :glossy="item.disabled ? false : true"
        :icon="`img:${item.disabled ? item.disabledImage : item.image}`"
        @click="item.disabled = !item.disabled"
      >
        <q-tooltip
          :content-class="
            `${item.disabled ? 'bg-grey' : 'bg-accent'} text-black museo`
          "
          content-style="font-size: 16px"
          :offset="[10, 10]"
        >
          {{ item.label }}
        </q-tooltip>
      </q-btn>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      tipos: [
        {
          label: "Aliado",
          image: "icons/png/guerrero-color.png",
          disabledImage: "icons/png/guerrero-line.png",
          color: "accent",
          disabledColor: "grey",
          disabled: false
        },
        {
          label: "Talismán",
          image: "icons/png/talisman-color.png",
          disabledImage: "icons/png/talisman-line.png",
          color: "accent",
          disabledColor: "grey",
          disabled: false
        },
        {
          label: "Arma",
          image: "icons/png/espada-color.png",
          disabledImage: "icons/png/espada-line.png",
          color: "accent",
          disabledColor: "grey",
          disabled: false
        },
        {
          label: "Tótem",
          image: "icons/png/totem-color.png",
          disabledImage: "icons/png/totem-line.png",
          color: "accent",
          disabledColor: "grey",
          disabled: false
        },
        {
          label: "Oro",
          image: "icons/png/oro-color.png",
          disabledImage: "icons/png/oro-line.png",
          color: "accent",
          disabledColor: "grey",
          disabled: false
        },
        {
          label: "Monumento",
          image: "icons/png/piramide-color.png",
          disabledImage: "icons/png/piramide-line.png",
          color: "accent",
          disabledColor: "grey",
          disabled: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.disable {
  background-color: grey;
}
</style>
