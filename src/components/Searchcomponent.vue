<template>
<div style="position: relative; width: 100%;">
    <img :src="rectangle" alt="rectangle" style="width: 60px; height: 60px; position: absolute; left: 20px; top:20px;">
    
    <img :src="gpt" alt="gpt" style="width: 35.78px; height: 30.01px; position: absolute; left: 32px; top:35px;">    

    <img :src="rectangle" alt="rectangle" style="width: 50px; height: 50px; position: absolute; right: 20px; top:25px;">

    <img :src="combinedShape" alt="combined-shape" style="width: 18.48px; height: 18px; position: absolute; right: 35.52px; top:41px;"> 
</div>
</template>
<script setup>
import rectangle from '@/assets/images/Rectangle.png'
import gpt from '@/assets/images/gpt.png'
import combinedShape from '@/assets/images/CombinedShape.png'
</script>