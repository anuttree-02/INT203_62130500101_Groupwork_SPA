<template>
  <div>
    <div class="mx-10 py-10 px-34 font-serif text-3xl font-medium text-black">
      <router-link to="/">MYCASE {{countphoto}} | </router-link>
      
        <router-link class="align-middle" to="/ShoppingCart">
          <span class=" material-icons">shopping_cart</span>
        </router-link>

      
    </div>
  </div>
</template>
<script>
export default {
  props:{
        countphoto :Number,
  }
}
</script>