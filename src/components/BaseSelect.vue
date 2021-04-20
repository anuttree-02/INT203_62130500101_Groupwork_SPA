<template>
  <div
    v-if="select_image"
    class="h-auto w-auto bg-blue-400 mx-auto my-auto px-2 pb-10 "
  >
    <div 
      v-for="(photo, index) in searchselectphotos"
      :key="index"
      cless="ml-96 flex flex-row "
    >
      <img :src="require(`../assets/${photo.src}`)" class="w-1/5 h-4/5 " />
      <button>
        <span
          @click="closePhoto"
          v-if="select_image == true"
          class="material-icons bg-white ml-2 mb-96"
        >
          close
        </span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closePhoto() {
      this.$emit("close-photo");
    },
    zoomPhoto(index) {
      this.$emit("zoom-photo", index);
    },
  },
  props: {
    searchselectphotos: {
      type: Array,
      require: true,
    },
    select_image: Boolean,
    searchphotos: {
      type: Array,
      require: true,
    },
  },
};
</script>