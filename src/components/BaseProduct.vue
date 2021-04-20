<template>
  <div>
    <ul class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-5">
      <li v-for="(photo, index) in searchphotos" :key="index">
        <img
          :src="require(`../assets/${photo.src}`)"
          class="px-2 py-5 h-auto w-"
          :alt="photo.title"
        />

        <div class="flex flex-row justify-start space-x-1">
          <button
            class="bg-black text-white font-serif px-3 my-auto ml-2 text-lg rounded-md focus:outline-none"
            v-on:click="addToCart()"
          >
            <i> ADD TO CART </i>
          </button>
        </div>
        <p class="ml-2 text-lg font-serif text-black-500">{{ photo.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      photos: [],
      urlorderuser: "http://localhost:5000/orderuser",
    };
  },
  // async created() {
  //   const res = await fetch(this.url);
  //   this.photos = [...this.photos, await res.json()];
  //   console.log(this.photos);
  // },

  // computed: {
  //   photocase() {
  //     return {
  //       ...this.searchphotos,
  //       src:
  //         this.searchphotos.src &&
  //         require(`@/assets/Case/${this.searchphotos.src}`),
  //     };
  //   },
  // },

  methods: {
    // async fetchGetItem() {
    //   const res = await fetch(this.url);
    //   const data = await res.json();

    //   return data;
    // },

    
    

    favorite(index) {
      this.$emit("like-photo", index);
    },
    zoomPhoto(index) {
      this.$emit("zoom-photo", index);
    },
    addToCart(){
      this.$emit("add-tocart");
    }
  },

  props: {
    searchphotos: {
      type: Array,
      require: true,
    },
  },
};
</script>