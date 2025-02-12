<script setup lang="js">
import AppContact from '@/js/components/AppContact.vue';
import AppExperience from '@/js/components/AppExperience.vue';
import AppHero from '@/js/components/AppHero.vue';
// import AppPhotoGallery from '@/js/components/AppPhotoGallery.vue';
import AppQuote from '@/js/components/AppQuote.vue';
import AppServices from '@/js/components/AppServices.vue';
import AppTestimonials from '@/js/components/AppTestimonials.vue';
import AppTradeLogos from '@/js/components/AppTradeLogos.vue';
</script>

<template>
	<main class="flex-col">
		<AppHero />
		<AppExperience />
		<AppTradeLogos />
		<AppServices />
		<AppQuote />
		<!--
		<AppPhotoGallery />
		-->
		<AppTestimonials />
		<AppContact />
	</main>
</template>

<style scoped lang="css"></style>
