<script setup lang="js">
import AppLazyImage from '@/js/components/AppLazyImage.vue';

const itilFoundationCertificationLogo = new URL('@/img/itil-foundation-certification-logo.png', import.meta.url).href;
const fmpCertificationLogo = new URL('@/img/fmp-certification-logo.png', import.meta.url).href;
</script>

<template>
	<div class="flex justify-center w-full bg-slate-800 border-px border-b border-white/5 py-20">
		<div class="container flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-12 md:gap-0">
			<div data-aos="fade-up" data-aos-duration="2000" class="flex flex-row items-center justify-center w-auto h-[17.5rem]">
				<AppLazyImage :src="itilFoundationCertificationLogo" alt="ITIL Foundation Certification Logo" width="340" height="340" class="size-full object-contain" />
			</div>
			<div data-aos="fade-up" data-aos-duration="2000" class="flex flex-row items-center justify-center w-auto h-[17.5rem] bg-white rounded-xl p-8">
				<AppLazyImage :src="fmpCertificationLogo" alt="FMP Certification Logo" width="460" height="340" class="size-full object-contain" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="css"></style>
