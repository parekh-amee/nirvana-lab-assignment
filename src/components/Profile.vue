<template>
	<div class="rounded-lg mt-15 flex"  v-bind:style="{ background: 'rgba(24, 24, 27, 1)', height:'401px', width:'410px'}">
		<div>
			<slot name="cover-photo"/>
			<slot name="user-badges"/>
			<slot name="user-name"/>

			<hr v-bind:style="{border: '1px solid rgba(39, 39, 42, 1)', top:'114.05px', position: 'relative', width:'360px', left:'25px'}">

			<div class="lorem" v-bind:style="{position:'relative', top:'145px', left:'25px',width:'360px'}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac tortor vel libero maximus dapibus sed at justo. Nulla vitae odio...</div>

			<div v-bind:style="{position:'relative', top:'162px', left:'25px',width:'89.93px',height:'20px'}"> <img :src="social" alt="Social Media"></div>
		</div>
		
	</div>
</template>
<script setup>
import social from '@/assets/images/GroupSocial.png';
</script>
<style>
.lorem {
    font-family: OpenSans-Regular;
	font-size: 16px;
	font-weight:400;
	line-height: 21.79px;
	color: rgba(161, 161, 170, 1);
}
</style>