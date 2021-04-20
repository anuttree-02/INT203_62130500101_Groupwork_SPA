<template>
  <div class="h-auto w-3/4 bg-white shadow">
    <div class="m-3 text-2xl font-serif text-black">
      <div class="flex justify-center items-center">
        ShoppingCart <span class="material-icons">shopping_cart</span>:
        จำนวนสินค้า
      </div>
      <div>
        <div v-for="(order,index) in orderuser" :key="index" class="flex justify-center m-10">
          
          <div>
            <img :src="getOrder(order)" class="w-auto h-52" />
          </div>
          <div class="">
            {{order.title}}
          </div>
          <div class="">
            <div class="  material-icons">cancel</div>
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
  async created() {
    const res = await fetch(this.urluserorder);
    this.orderuser = [...this.orderuser, await res.json()];
  },
  methods:{
    async getOrder(order){
      return await require(`../assets/Case/${order.src}`)
    }
  }
  // computed:{
  //   getOrder(img){
  //     return{
  //       ...this.orderuser,
  //       logo:
  //         this.orderuser.src && require(`../assets/Case/${img}`)
  //     }
  //   }
  // }
};
</script>