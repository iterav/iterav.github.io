<script setup lang="js">
import AppStar from '@/js/components/AppStar.vue';

defineProps({
	color: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	stars: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: false,
		default: '',
	},
	fullName: {
		type: String,
		required: true,
	},
	jobTitle: {
		type: String,
		required: false,
		default: '',
	}
});
</script>

<template>
	<div :class="color" class="flex flex-col p-8 gap-8 text-white text-lg font-lexend font-normal rounded-xl shadow-xl">
		<div class="leading-8">{{ message }}</div>
		<div class="flex flex-row gap-4">
			<img v-if="image.length" class="flex flex-col items-center w-[4.5rem] h-[4.5rem] rounded-full" :src="image" :alt="fullName" />
			<div class="flex flex-col gap-2">
				<div v-if="stars > 0" class="flex items-center gap-1">
					<AppStar v-for="index in 5" :key="index" :color="index <= stars ? 'text-amber-400' : 'text-neutral-300'" />
				</div>
				<div v-if="fullName.length" class="flex flex-col items-start justify-center">
					<span>{{ fullName }}</span>
					<span v-if="jobTitle?.length">{{ jobTitle }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="css"></style>
