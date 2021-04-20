<template>
  <div class="absolute h-auto w-3/4 bg-white shadow">
    <div class="m-3 text-2xl font-serif text-black">
      <div class="flex justify-center items-center">
        ShoppingCart <span class="material-icons">shopping_cart</span>:
        จำนวนสินค้า
      </div>
      <div>
        <div
          v-for="(order, index) in orderuser"
          :key="index"
          class="flex justify-start m-10"
        >
          <div>
            <img :src="require(`../assets/${order.src}`)" class="w-auto h-52" />
          </div>
          <div class="ml-24">
            <div class="text-lg">
              {{order.title}}
            </div>
          </div>

          <div class="absolute right-10">
            <div class="material-icons">cancel</div>
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
      orderuser: [],
      urluserorder: "http://localhost:5000/orderuser",
    };
  },
  async created(){
       this.orderuser = await this.getOrders()
  },
  methods: {
    async getOrders() {
      try {
        const res = await fetch(this.urluserorder);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>