<template>
  <div class="home">
    <!-- <base-product-list v-for="photo in photos" :key="photo.id" :home="photo" ></base-product-list> -->
    <!-- <BaseItem :countphoto = "countPhoto" :countlike = "countLike" :show = "show" @show-bar = "toggle"/>  -->
    <!-- <BaseSelect :searchselectphotos = "searchSelectPhoto" :select_image = "select_image" @close-photo = "closePhoto" @zoom-photo="zoomPhoto" :searchphotos = "searchphotos"/> -->
    <BaseProduct :searchphotos="photos" @like-photo="favorite" @zoom-photo="zoomPhoto"/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import BaseItem from '../components/BaseItem.vue'
import BaseProduct from "../components/BaseProduct.vue";
//  import BaseSelect from '../components/BaseSelect.vue'

export default {
  components: {
    // BaseItem,
    BaseProduct,
    // BaseSelect,
  },

  data() {
    return {
      url: "http://localhost:5000/photos",
      show: { icon: true, searchbar: false },
      input: "",
      photos:[
        // {
        //     src: '1.jpg',
        //     title: 'LAKERS MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '2.jpg',
        //     title: 'HEATS MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '3.jpg',
        //     title: 'MAGIC MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '4.jpg',
        //     title: 'PACERS MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '5.jpg',
        //     title: 'PACERS MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '6.jpg',
        //     title: 'BUCKS MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '7.jpg',
        //     title: '76ERS MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '8.jpg',
        //     title: 'GRIZZLIES MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '9.jpg',
        //     title: 'MAVERICKS MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
        // {
        //     src: '10.jpg',
        //     title: 'SPURS MANIA CASE',
        //     favor: false,
        //     like: 0,
        //     zoom: false
        // },
      ],
    };
  },

  methods: {
    favorite(index) {
      this.photos[index].favor = !this.photos[index].favor;
      this.photos[index].like = this.photos[index].like + 1;
    },

    toggle() {
      this.show.icon = !this.show.icon;
      this.show.searchbar = !this.show.searchbar;
      this.input = "";
    },

    zoomPhoto(index) {
      for (let i = 0; i < this.photos.length; i++) {
        if (i == index) {
          this.photos[i].zoom = true;
          console.log("select :" + index);
        } else {
          this.photos[i].zoom = false;
        }
      }
      this.select_image = true;
    },

    closePhoto() {
      console.log(this.select_image);
      this.select_image = false;
    },

    async fetchGetItem() {
      const res = await fetch(this.url);
      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.photos = await this.fetchGetItem()
  },
  computed: {
    // searchphotos() {
    //   return this.photos.filter((c) => {
    //     return c.title.toLowerCase().includes(this.input.toLowerCase());
    //   });
    // },

    countPhoto() {
      return this.photos.length;
    },

    searchSelectPhoto() {
      return this.photos.filter((c) => c.zoom);
    },
    countLike() {
      return this.photos.filter((t) => t.like).length;
    },
  },
};
</script>
