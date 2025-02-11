<script setup lang="js">
import AppContact from '@/js/components/AppContact.vue';
import AppExperience from '@/js/components/AppExperience.vue';
import AppHero from '@/js/components/AppHero.vue';
import AppPhotoGallery from '@/js/components/AppPhotoGallery.vue';
import AppQuote from '@/js/components/AppQuote.vue';
import AppServices from '@/js/components/AppServices.vue';
import AppTestimonials from '@/js/components/AppTestimonials.vue';
</script>

<template>
	<main class="flex-col">
		<AppHero />
		<AppExperience />
		<AppServices />
		<AppQuote />
		<AppPhotoGallery />
		<AppTestimonials />
		<AppContact />
	</main>
</template>

<style scoped lang="css"></style>
