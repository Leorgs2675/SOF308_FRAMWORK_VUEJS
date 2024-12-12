<script setup>
import FooterLayout from './FooterLayout.vue';
import HeaderLayout from './HeaderLayout.vue';
import Model from './Model.vue';


</script>

<template>
  <HeaderLayout/>
  <main>
    <!-- <Model/> -->
     <RouterView/>
  </main>
  <FooterLayout/>
</template>

<style scoped>

</style>
