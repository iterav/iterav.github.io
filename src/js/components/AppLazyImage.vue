<script setup lang="js">
import { onMounted, ref } from 'vue';

const props = defineProps({
	src: {
		type: String,
		default: '',
	},
	alt: {
		type: String,
		default: '',
	},
	width: {
		type: String,
		default: 'auto',
	},
	height: {
		type: String,
		default: 'auto',
	},
	classes: {
		type: String,
		default: '',
	},
});

const imageSrc = ref(null);
const imageRef = ref(null);

onMounted(() => {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				imageSrc.value = props.src;

				observer.unobserve(entry.target);
			}
		});
	},{
		rootMargin: '100px',
	});

	if (imageRef.value) {
		observer.observe(imageRef.value);
	}
});
</script>

<template>
	<img ref="imageRef" :class="classes" :src="imageSrc" :alt="alt" :width="width" :height="height" class="lazy-image" />
</template>

<style scoped lang="css">
.lazy-image {
	filter: blur(0.625rem);
	transition: filter 0.3s ease-in-out;
}

.lazy-image[src] {
	filter: blur(0);
}
</style>
