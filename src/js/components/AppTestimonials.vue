<script setup lang="js">
import AppTestimonial from '@/js/components/AppTestimonial.vue';

const testimonials = [{
	color: 'bg-fuchsia-700 lg:bg-blue-900 xl:bg-fuchsia-700',
	message: 'The service provided by Daphne has completely transformed the way we do business. The team is incredibly responsive, and the results speak for themselves.',
	stars: 5,
	image: new URL('@/img/seandelaney.webp', import.meta.url).href,
	fullName: 'Sean Delaney',
	jobTitle: 'Director, DelaneyMethod',
	aosType: 'fade-up',
	aosDuration: '1000',
}, {
	color: 'bg-blue-900 lg:bg-fuchsia-700 xl:bg-blue-900',
	message: 'Working alongside Daphne was a pleasure. She knows what it takes to get the job done, coordinating and communicating effectively with all team members to ensure client requirements were captured. I would highly recommend Daphne to oversee AV projects from concept design through to installation.',
	stars: 5,
	image: new URL('@/img/rachelfrasca.webp', import.meta.url).href,
	fullName: 'Rachel Frasca',
	jobTitle: 'Associate Engineer',
	aosType: 'fade-up',
	aosDuration: '1200',
}, {
	color: 'bg-fuchsia-700 lg:bg-blue-900 xl:bg-fuchsia-700',
	message: 'We saw a noticeable improvement in efficiency and customer satisfaction within just a few weeks. Highly recommend ITer Audio Visual services to anyone looking to streamline their AV operations!',
	stars: 5,
	image: new URL('@/img/ashleyboyd.webp', import.meta.url).href,
	fullName: 'Ashley Boyd',
	jobTitle: 'Communications Manager',
	aosType: 'fade-up',
	aosDuration: '1000',
}];
</script>

<template v-if="testimonials.length">
	<section id="testimonials" class="flex items-center justify-center py-15 md:py-20 bg-indigo-950 w-full border-px border-y border-white/5">
		<div class="container flex flex-col items-center justify-center gap-12">
			<h2 class="text-center text-white text-4xl md:text-5xl font-xeola font-black tracking-wide drop-shadow-3xl leading-none">What our customers have&nbsp;to&nbsp;say</h2>
			<div :class="testimonials.length > 2 ? 'xl:grid-cols-3' : 'xl:grid-cols-2'" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<AppTestimonial v-for="(testimonial, index) in testimonials" :key="index" :color="testimonial.color" :message="testimonial.message" :stars="testimonial.stars" :image="testimonial.image" :full-name="testimonial.fullName" :job-title="testimonial.jobTitle" :aos-type="testimonial.aosType" :aos-duration="testimonial.aosDuration" />
			</div>
		</div>
	</section>
</template>

<style scoped lang="css"></style>
