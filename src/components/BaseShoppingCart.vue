<template>
  <div class="h-auto w-3/4 bg-white shadow">
    <div class="m-3 text-2xl font-serif text-black">
      <div class="flex justify-center items-center">
        ShoppingCart <span class="material-icons">shopping_cart</span>:
        จำนวนสินค้า
      </div>
      <div>
        <div class="flex justify-center m-10">
          <!-- <tr v-for="(photo,index in photos)">   -->
              <div>
                <!-- <img :src="require(`../assets/1.jpg`)" class="w-auto h-52" /> -->
              </div>
              <div class="">
                  <!-- ชื่อสินค้า -->
              </div>
              <div class="">
                  <!-- <div class="  material-icons">cancel</div> -->
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            photos: [],
            
            url: "http://localhost:5000/photos"
        }
    },
    async created() {
        const res = await fetch(this.url)
        this.photos = [...this.photos,await res.json()]

    },
    
    
    methods:{
        async fetchGetItem() {
      const res = await fetch(this.url);
      const data = await res.json();

      return data;
        },

    }
}
</script>