<script setup lang="js">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const sections = [{
	id: 'experience',
	title: 'Experience',
	effects: 'text-white hover:text-neutral-300 active:text-neutral-400 p-1 leading-none',
}, {
	id: 'services',
	title: 'Services',
	effects: 'text-white hover:text-neutral-300 active:text-neutral-400 p-1 leading-none',
}, {
	id: 'testimonials',
	title: 'Testimonials',
	effects: 'text-white hover:text-neutral-300 active:text-neutral-400 p-1 leading-none',
}, {
	id: 'contact',
	title: 'Contact Us',
	effects: 'text-white hover:text-white active:text-white inline-flex justify-center rounded-full py-2 px-4 bg-amber-400 hover:bg-amber-500 active:bg-amber-600',
}];

const closeMobileMenu = () => isMobileMenuOpen.value = false;

const toggleMobileMenu = () => isMobileMenuOpen.value = !isMobileMenuOpen.value;

const scrollToSection = (sectionId) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
};
</script>

<template>
	<header :class="isMobileMenuOpen ? 'bg-linear-to-r/shorter from-indigo-950 from-30% to-slate-950 to-100% lg:bg-none' : ''" class="flex flex-row justify-center relative py-8">
		<div class="flex absolute inset-x-0 bottom-0 h-px bg-white/5"></div>
		<div class="container hidden lg:flex flex-row items-center justify-between">
			<a href="/" title="ITer Audio Visual (AV)" class="flex flex-row items-center justify-center gap-4">
				<img src="@/img/iter-audio-visual-icon.png" alt="ITer Audio Visual (AV) Logo" class="w-auto h-[4.375rem]" />
				<h1 class="mt-2.5 text-white text-6xl font-xeola font-medium leading-none tracking-wide">ITer AV</h1>
			</a>
			<nav aria-label="Global navigation" class="flex flex-row">
				<ul class="flex flex-row items-center justify-center gap-8 xl:gap-12 text-lg font-lexend font-bold">
					<li v-for="(section, index) in sections" :key="index">
						<button :id="`${section.id}-nav-item`" :title="section.title" :class="section.effects" type="button" :name="`${section.id}-nav-item`" :aria-label="`Scroll to ${section.title}`" class="cursor-pointer transition-colors duration-300 ease-in-out" @click="scrollToSection(section.id)">{{ section.title }}</button>
					</li>
				</ul>
			</nav>
		</div>
		<div class="flex lg:hidden flex-col items-center justify-center relative w-full gap-20">
			<div class="container flex flex-row items-center justify-center">
				<div class="flex flex-row items-center justify-between w-full">
					<a href="/" title="ITer Audio Visual (AV)" class="flex flex-row items-center justify-center gap-4">
						<img src="@/img/iter-audio-visual-icon.png" alt="ITer Audio Visual (AV) Logo" class="w-auto h-[3.375rem]" />
						<h1 class="mt-2.5 text-white text-5xl font-xeola font-medium leading-none tracking-wide">ITer AV</h1>
					</a>
					<button v-if="!isMobileMenuOpen" id="open-menu" type="button" name="open-menu" aria-label="Open Menu" class="text-white hover:text-neutral-300 active:text-neutral-400 cursor-pointer transition-colors duration-300 ease-in-out" @click="toggleMobileMenu">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					<button v-if="isMobileMenuOpen" id="close-menu" type="button" name="close-menu" aria-label="Close Menu" class="text-white hover:text-neutral-300 active:text-neutral-400 cursor-pointer transition-colors duration-300 ease-in-out" @click="closeMobileMenu">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
			</div>
			<div v-if="isMobileMenuOpen" class="absolute top-[5.563rem] py-10 z-50 flex flex-col items-center justify-center w-full bg-linear-to-r/shorter from-indigo-950 from-30% to-slate-950 to-100% drop-shadow-3xl border-px border-t border-white/5">
				<nav aria-label="Global mobile navigation" class="w-full flex flex-col items-center">
					<ul class="flex flex-col items-center gap-12 text-lg font-lexend font-bold w-full">
						<li v-for="(section, index) in sections" :key="index">
							<button :id="`${section.id}-nav-item-mobile`" :title="section.title" :class="section.effects" type="button" :name="`${section.id}-nav-item-mobile`" :aria-label="`Scroll to ${section.title}`" class="cursor-pointer transition-colors duration-300 ease-in-out" @click="scrollToSection(section.id)">{{ section.title }}</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<style scoped lang="css"></style>
