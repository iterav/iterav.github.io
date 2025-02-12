<script setup lang="js">
import AppTestimonial from '@/js/components/AppTestimonial.vue';

const testimonials = [{
	color: 'bg-fuchsia-700 lg:bg-blue-900 xl:bg-fuchsia-700',
	message: 'The service provided by ITer AV has completely transformed the way we do business. The team is incredibly responsive, and the results speak for themselves.',
	stars: 5,
	image: new URL('@/img/seandelaney.webp', import.meta.url).href,
	fullName: 'Sean Delaney',
	jobTitle: 'Director, DelaneyMethod',
}, {
	color: 'bg-blue-900 lg:bg-fuchsia-700 xl:bg-blue-900',
	message: 'We saw a noticeable improvement in efficiency and customer satisfaction within just a few weeks. Highly recommend ITer Audio Visual services to anyone looking to streamline their AV operations!',
	stars: 5,
	image: new URL('@/img/ashleyboyd.webp', import.meta.url).href,
	fullName: 'Ashley Boyd',
	jobTitle: 'Communications Manager',
}];
</script>

<template v-if="testimonials.length">
	<section id="testimonials" class="flex items-center justify-center py-20 bg-indigo-950 w-full border-px border-y border-white/5">
		<div class="container flex flex-col items-center justify-center gap-12">
			<h2 class="text-center text-white text-4xl md:text-5xl font-xeola font-black tracking-wide drop-shadow-3xl leading-none">What our customers have&nbsp;to&nbsp;say</h2>
			<div :class="testimonials.length > 2 ? 'xl:grid-cols-3' : 'xl:grid-cols-2'" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<AppTestimonial v-for="(testimonial, index) in testimonials" :key="index" :color="testimonial.color" :message="testimonial.message" :stars="testimonial.stars" :image="testimonial.image" :full-name="testimonial.fullName" :job-title="testimonial.jobTitle" />
			</div>
		</div>
	</section>
</template>

<style scoped lang="css"></style>
