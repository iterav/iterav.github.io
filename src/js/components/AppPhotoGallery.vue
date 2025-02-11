<script setup lang="js">
import '@splidejs/vue-splide/css';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

const options = {
	start: 0,
	perMove: 1,
	perPage: 5,
	gap: '64px',
	type: 'loop',
	arrows: true,
	keyboard: true,
	lazyLoad: true,
	padding: '10%',
	focus: 'center',
	height: '360px',
	autoWidth: true,
	direction: 'ltr',
	pagination: false,
	mediaQuery: 'min',
	breakpoints: {
		640: {
			height: '440px',
		},
	},
};

const gallery = [{
	src: new URL('@/img/monitors-mounted-on-wall.jpg', import.meta.url).href,
	alt: 'Monitors mounted on wall',
	effects: '-rotate-2 hover:rotate-0 transition-all duration-300 ease-in-out',
}, {
	src: new URL('@/img/boardroom-6.jpg', import.meta.url).href,
	alt: 'Boardroom',
	effects: 'rotate-4 hover:rotate-0 transition-all duration-300 ease-in-out',
}, {
	src: new URL('@/img/audio-visual-controller.jpg', import.meta.url).href,
	alt: 'Audio Visual controller',
	effects: '-rotate-4 hover:rotate-0 transition-all duration-300 ease-in-out',
}, {
	src: new URL('@/img/row-of-monitors-on-wall.jpg', import.meta.url).href,
	alt: 'Row of monitors on wall',
	effects: '-rotate-4 hover:rotate-0 transition-all duration-300 ease-in-out',
}, {
	src: new URL('@/img/dual-monitors-mounted-on-wall.jpg', import.meta.url).href,
	alt: 'Dual monitors mounted on wall',
	effects: 'rotate-2 hover:rotate-0 transition-all duration-300 ease-in-out',
}];
</script>

<template v-if="gallery.length > 0">
	<section class="py-20 relative">
		<div class="absolute z-10 bottom-0 w-full opacity-70">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#ffffff" fill-opacity="0.08" d="M0,288L24,288C48,288,96,288,144,256C192,224,240,160,288,165.3C336,171,384,245,432,261.3C480,277,528,235,576,208C624,181,672,171,720,186.7C768,203,816,245,864,240C912,235,960,181,1008,160C1056,139,1104,149,1152,133.3C1200,117,1248,75,1296,85.3C1344,96,1392,160,1416,192L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
			</svg>
		</div>
		<div class="flex flex-col relative z-20">
			<div class="flex flex-row items-center justify-center pb-12">
				<h2 class="text-center text-white text-4xl md:text-5xl font-xeola font-black tracking-wide drop-shadow-3xl">Recent AV Installs</h2>
			</div>
			<Splide :options="options" role="group" aria-label="Photo Gallery">
				<SplideSlide v-for="(image, index) in gallery" :key="index" class="flex items-center justify-center">
					<img :src="image.src" :alt="image.alt" :class="image.effects" class="w-auto h-[320px] md:h-[390px] rounded-xl object-cover drop-shadow-xl" />
				</SplideSlide>
			</Splide>
		</div>
	</section>
</template>

<style scoped lang="css"></style>
