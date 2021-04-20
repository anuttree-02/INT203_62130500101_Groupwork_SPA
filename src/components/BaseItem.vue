<template>
     
        <span v-if="show.icon" @click="toggle" class="material-icons">
          search
        </span>
        <div v-if="show.searchbar" class="mt-2 flex justify-center">
          <input v-model="input"
            class="ml-2 p-1 w-80 placeholder-gray-500  focus:outline-none text-gray-500 rounded-sm text-lg" type="text"
            placeholder="Please enter text for searching photos...">
          <button class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-300 text-lg" @click="toggle">Cancel</button>
        </div>
      
      
</template>
<script>
export default {
    data(){
        return {
            input:''
        }
    },
    methods: {
        toggle() {
            this.$emit('show-bar')
        }
    },
    watch:{
        input: function(text){
            this.input = text
            this.$root.input = this.input
        }
    },
    props:{
        countphoto :Number,
        countlike :Number,
        show: {
            type: Array,
            require: true
        }
    }
}
</script>