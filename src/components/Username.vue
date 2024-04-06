<template>
<div style="position: relative;">
    <img :src="userName" alt="User Name" style="width: 125px; height: 19px; position: absolute; left: 25px; top:65px;">
    <img :src="verified" alt="Verified" style="width: 16.8px; height: 16px; position: absolute; left: 155px; top:67px;">
</div>
</template>
<script setup>
import userName from '@/assets/images/username.png';
import verified from '@/assets/images/Verified.png'; 
</script>