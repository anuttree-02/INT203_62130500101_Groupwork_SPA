<template>
  <div class="absolute h-auto w-3/4 bg-white shadow">
    <div class="m-3 text-2xl font-serif text-black">
      <div class="flex justify-center items-center">
        ShoppingCart <span class="material-icons">shopping_cart</span>:
        จำนวนสินค้า
      </div>
      <div>
        <div class="shadow m-5">
          <div v-for="(order,index) in orderuser" :key="index" class="flex justify-start m-10">
            
            <div>
              <img :src="require(`../assets${order.src}`)" class="w-auto h-52" />
            </div>
            <div class="ml-24">
              <div class="text-lg ">
                
                {{order.title}}
              </div>
            </div>
            
              <div class="absolute right-10">
                <div class=" material-icons">cancel</div>
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
      orderuser: [],
      urlorderuser: "http://localhost:5000/orderuser",
    };
  },
  async created() {
    const res = await fetch(this.urlorderuser);
    this.orderuser = [...this.orderuser, await res.json()];
  },
  methods:{
    async getOrder(order){
      return await require(`../assets/Case/${order.src}`)
    },
    async fetchGetUserOrder() {
          const res = await fetch(this.urlorderuser);
          const data = await res.json();

          return data;
        },
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