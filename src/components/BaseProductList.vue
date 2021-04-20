<template>
    <div>
        <ul class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-5">
            <li v-for="(photo,index) in photos" :key="index">
                {{photo.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        photos:{
            type:Array,
            require: true
        }
    }
    
}
</script>