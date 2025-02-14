<script setup lang="js">
import '@splidejs/vue-splide/css';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

import AppLazyImage from '@/js/components/AppLazyImage.vue';

const options = {
	start: 0,
	perMove: 1,
	perPage: 5,
	gap: '4rem',
	type: 'loop',
	arrows: true,
	keyboard: true,
	lazyLoad: true,
	padding: '10%',
	focus: 'center',
	autoWidth: true,
	direction: 'ltr',
	pagination: false,
};

const gallery = [{
	src: new URL('@/img/monitors-mounted-on-wall.webp', import.meta.url).href,
	alt: 'Monitors mounted on wall',
	width: '33.313rem',
	height: '25rem',
}, {
	src: new URL('@/img/boardroom-6.webp', import.meta.url).href,
	alt: 'Boardroom',
	width: '33.313rem',
	height: '25rem',
}, {
	src: new URL('@/img/audio-visual-controller.webp', import.meta.url).href,
	alt: 'Audio Visual controller',
	width: '40.063rem',
	height: '25rem',
}, {
	src: new URL('@/img/row-of-monitors-on-wall.webp', import.meta.url).href,
	alt: 'Row of monitors on wall',
	width: '33.313rem',
	height: '25rem',
}, {
	src: new URL('@/img/dual-monitors-mounted-on-wall.webp', import.meta.url).href,
	alt: 'Dual monitors mounted on wall',
	width: '33.313rem',
	height: '25rem',
}];
</script>

<template v-if="gallery.length > 0">
	<section class="py-20 relative">
		<div class="flex flex-col relative z-20">
			<div class="flex flex-row items-center justify-center pb-12">
				<h2 class="text-center text-white text-4xl md:text-5xl font-xeola font-black tracking-wide drop-shadow-3xl leading-none">Recent AV Installs</h2>
			</div>
			<Splide :options="options" role="group" aria-label="Photo Gallery">
				<SplideSlide v-for="(image, index) in gallery" :key="index">
					<AppLazyImage :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" classes="rounded-xl drop-shadow-xl" />
				</SplideSlide>
			</Splide>
		</div>
		<div class="absolute z-10 bottom-0 w-full opacity-70">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#ffffff" fill-opacity="0.08" d="M0,288L24,288C48,288,96,288,144,256C192,224,240,160,288,165.3C336,171,384,245,432,261.3C480,277,528,235,576,208C624,181,672,171,720,186.7C768,203,816,245,864,240C912,235,960,181,1008,160C1056,139,1104,149,1152,133.3C1200,117,1248,75,1296,85.3C1344,96,1392,160,1416,192L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
			</svg>
		</div>
	</section>
</template>

<style scoped lang="css"></style>
