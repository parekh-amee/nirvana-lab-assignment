<template>
<div style="position: relative;">
    <img :src="userBadge" alt="User Badge" style="width: 17.6px; height: 16px; position: absolute; right: 96.4px; top:14px;">
    <img :src="userBadge2" alt="User Badge" style="width: 22.87px; height: 16px; position: absolute; right: 64.1px; top:14px;">
    <img :src="userBadge3" alt="User Badge" style="width: 9.39px; height: 16px; position: absolute; right: 44.4px; top:14px;">
</div>
</template>
<script setup>
import userBadge from '@/assets/images/UB.png';
import userBadge2 from '@/assets/images/UB2.png';
import userBadge3 from '@/assets/images/UB3.png';
</script>