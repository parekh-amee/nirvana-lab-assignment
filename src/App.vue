<script setup lang="ts">
import Profile from './components/Profile.vue'
import Cover from './components/Cover.vue'
import Icons from './components/Icons.vue'
import Username from './components/Username.vue'
import Upload from './components/Upload.vue'
import Resume from './components/Resume.vue'
import Search from './components/Search.vue'
import Searchcomponent from './components/Searchcomponent.vue'
</script>
<style>
@font-face {
  font-family: OpenSans-Regular;
  src: url('@/assets/OpenSans-Regular.ttf');
}
</style>
<template>
  <div class="px-5 pt-10 z-10 max-w-7xl mx-auto flex">
    
      <Profile>
        <template #cover-photo><Cover/></template>
        <template #user-badges><Icons/></template>
        <template #user-name><Username/></template>
      </Profile>
   
    <Upload>
      <template #resume-tab><Resume/></template>
    </Upload>
  </div>
  <div class="px-5 pt-10 z-10 max-w-7xl mx-auto flex">
    <Search>
      <template #search><Searchcomponent/></template>
    </Search>
  </div>
</template>
