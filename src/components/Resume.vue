<template>
<div style="position: relative; width: 100%;">
    <!-- RESUME  -->
    <img :src="resume" alt="Resume" style="width: 153px; height: 39px; position: absolute; left: 15px; top:15px;">
    <img :src="add" alt="add" style="width: 16.8px; height: 16px; position: absolute; left: 159px; top:43px;">

    <!-- OTHER MEDIA -->
    <img :src="rectangle" alt="rectangle" style="width: 50px; height: 50px; position: absolute; left: 15px; top:104px;">
    <img :src="add" alt="add" style="width: 18px; height: 18px; position: absolute; left: 56px; top:141px;">
    <img :src="producthunt" alt="producthunt" style="width: 24px; height: 24px; position: absolute; left: 28px; top:117px;">

     <img :src="rectangle" alt="rectangle" style="width: 50px; height: 50px; position: absolute; left: 98px; top:104px;">
    <img :src="add" alt="add" style="width: 18px; height: 18px; position: absolute; left: 139px; top:141px;">
    <img :src="gitlab" alt="gitlab" style="width: 26.03px; height: 24px; position: absolute; left: 110px; top:117px;">

    <img :src="rectangle" alt="rectangle" style="width: 50px; height: 50px; position: absolute; left: 181px; top:104px;">
    <img :src="add" alt="add" style="width: 18px; height: 18px; position: absolute; left: 222px; top:141px;">
    <img :src="vector" alt="producthunt" style="width: 24px; height: 24px; position: absolute; left: 194px; top:117px;">

    <img :src="rectangle" alt="rectangle" style="width: 50px; height: 50px; position: absolute; left: 264px; top:104px;">
    <img :src="add" alt="add" style="width: 18px; height: 18px; position: absolute; left: 305px; top:141px;">
    <img :src="behance" alt="producthunt" style="width: 28.6px; height: 18px; position: absolute; left: 275px; top:120px;">
</div>
</template>
<script setup>
import resume from '@/assets/images/resume.png'
import add from '@/assets/images/add.png'
import rectangle from '@/assets/images/Rectangle.png'
import producthunt from '@/assets/images/product-hunt.png'
import gitlab from '@/assets/images/gitlab.png'
import vector from '@/assets/images/Vector.png'
import behance from '@/assets/images/be-hance.png'
</script>