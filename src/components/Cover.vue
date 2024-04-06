<template>
  <div style="position: relative; width: 380px; height: 100px; margin: 15px 15px 0px 15px;">
    <!-- Base image -->
    <img :src="coverImage" alt="Cover Photo" style="width: 100%; height: 100%;">

    <!-- Overlay image -->
    <img :src="secondImageSource" alt="Overlay Image" style="position: absolute; top: 55px; left: 55px; width: 80px; height: 80px; border: 5px solid hsla(0,0%,100%,.3);border-radius: .8em;">
  </div>
</template>

<script setup>
// import { defineProps } from 'vue';
import coverImage from '@/assets/images/cover.png';
import secondImageSource from '@/assets/images/second-image.png';
</script>
