<template>
  <div>
    <ul class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-5">
      <li v-for="(photo, index) in searchphotos" :key="index">
        <img
          :src="photocase.src"
          class="px-2 py-5 h-auto w-"
          :alt="photo.title"
        />

        <div class="flex flex-row justify-start space-x-1">
          <button
            class="bg-black text-white font-serif px-3 my-auto ml-2 text-lg rounded-md focus:outline-none"
            v-on:click="favorite(index)"
          >
            <i v-show="!photo.favor"> ADD TO CART </i>

            <i v-show="photo.favor"> ADDED </i>
          </button>
        </div>
        <p class="ml-2 text-lg font-serif text-black-500">{{ photo.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     photos: [],
  //     url: "http://localhost:5000/photos",
  //   };
  // },
  // async created() {
  //   const res = await fetch(this.url);
  //   this.photos = [...this.photos, await res.json()];
  //   console.log(this.photos);
  // },

  computed: {
    photocase() {
      return {
        ...this.searchphotos,
        src:
          this.searchphotos.src &&
          require(`@/assets/Case/${this.searchphotos.src}`),
      };
    },
  },

  methods: {
    // async fetchGetItem() {
    //   const res = await fetch(this.url);
    //   const data = await res.json();

    //   return data;
    // },

    addToCart() {
      this.addProduct({
        src: this.photos.src,
        title: this.photos.title,
        price: this.photos.price,
      });
    },
    async addProduct(product) {
      try {
        await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            src: this.product.src,
            title: this.product.title,
            price: this.product.price,
          }),
        });
      }catch(error){
        console.log("error");
      }
    },

    favorite(index) {
      this.$emit("like-photo", index);
    },
    zoomPhoto(index) {
      this.$emit("zoom-photo", index);
    },
  },

  props: {
    searchphotos: {
      type: Array,
      require: true,
    },
  },
};
</script>