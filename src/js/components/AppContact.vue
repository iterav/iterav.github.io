<script setup lang="js">
import { ref } from 'vue';

const fields = ref({
	firstName: '',
	lastName: '',
	email: '',
	contactNumber: '',
	message: ''
});

const errors = ref({
	firstName: '',
	lastName: '',
	email: '',
	contactNumber: '',
	message: ''
});

function validateForm() {
	errors.value = {};

	if (!fields.value.firstName) {
		errors.value.firstName = 'First name is required';
		fields.value.firstName = '';
	}

	if (!fields.value.lastName) {
		errors.value.lastName = 'Last name is required';
		fields.value.lastName = '';
	}

	if (!fields.value.email || !/\S+@\S+\.\S+/.test(fields.value.email) || /@iterav.ie\s*$/.test(fields.value.email)) {
		errors.value.email = 'A valid email is required';
		fields.value.email = '';
	}

	if (!fields.value.contactNumber) {
		errors.value.contactNumber = 'Contact number is required';
		fields.value.contactNumber = '';
	}

	if (!fields.value.message) {
		errors.value.message = 'Message is required';
		fields.value.message = '';
	}

	return Object.keys(errors.value).length === 0;
}

async function handleSubmit(event) {
	event.preventDefault();

	const contact = document.querySelector('#contact');
	if (!contact) {
		alert('There was a problem loading the page. Please try again.');

		return false;
	}

	const status = document.querySelector('#contact-form-status');
	if (!status) {
		alert('There was a problem loading the page. Please try again.');

		return false;
	}

	status.classList.add('hidden');
	status.classList.remove('flex');
	status.innerHTML = '';

	let errorMessage = 'Oops! There was a problem submitting our form';

	if (!validateForm()) {
		status.classList.add('bg-red-500');
		status.classList.remove('bg-emerald-500');
		status.classList.add('flex');
		status.classList.remove('hidden');
		status.innerHTML = errorMessage;

		contact.scrollIntoView({ behavior: 'smooth', block: 'start' });

		return false;
	}

	window.grecaptcha.enterprise.ready(async () => {
		const token = await window.grecaptcha.enterprise.execute('6LeAa9QqAAAAABuOYZw7rQzMObckFdS1WwoUMTuG', { action: 'submit' });

		const formData = new FormData(event.target);
		formData.append('g-recaptcha-response', token);

		const response = await fetch(event.target.action, {
			method: event.target.method,
			body: formData,
			headers: {
				Accept: 'application/json',
			},
		});

		const json = await response.json();

		if (Object.hasOwn(json, 'ok') && json.ok) {
			status.classList.add('bg-emerald-500');
			status.classList.remove('bg-red-500');
			status.classList.add('flex');
			status.classList.remove('hidden');
			status.innerHTML = 'Thanks for contacting us. We’ll get back to you shortly!';

			event.target.reset();

			fields.value.firstName = '';
			fields.value.lastName = '';
			fields.value.email = '';
			fields.value.contactNumber = '';
			fields.value.message = '';

			errors.value.firstName = '';
			errors.value.lastName = '';
			errors.value.email = '';
			errors.value.contactNumber = '';
			errors.value.message = '';
		} else {
			if (Object.hasOwn(json, 'errors')) {
				errorMessage = json.errors.map((error) => error.message).join(', ');
			} else if (Object.hasOwn(json, 'error')) {
				errorMessage = json.error;
			}

			status.classList.add('bg-red-500');
			status.classList.remove('bg-emerald-500');
			status.classList.add('flex');
			status.classList.remove('hidden');
			status.innerHTML = errorMessage;
		}

		contact.scrollIntoView({ behavior: 'smooth', block: 'start' });

		return true;
	});
}
</script>

<template>
	<section id="contact" class="flex items-center justify-center py-20 bg-linear-to-b/shorter from-indigo-950 from-30% to-slate-950 to-100% relative overflow-hidden">
		<div class="relative z-20 flex flex-col items-center w-full">
			<div class="container flex flex-col w-full items-center justify-center gap-12">
				<h2 class="text-center text-white text-4xl md:text-5xl font-xeola font-black tracking-wide drop-shadow-3xl leading-none">Contact our AV team</h2>
				<p class="text-center text-white text-lg md:text-xl w-full xl:w-[60%] font-lexend font-normal leading-8">We'd love to hear form you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.</p>
				<div id="contact-form-status" class="hidden w-full items-center justify-center p-4 rounded-xl text-white text-lg md:text-xl font-lexend font-normal transition-all duration-300 ease-in-out"></div>
				<div class="flex flex-col lg:flex-row items-start justify-start gap-12 w-full">
					<form id="contact-form" class="flex flex-col items-center justify-center gap-8 pt-4 pb-8 px-8 w-full rounded-xl lg:w-2/3 bg-white/5" action="https://formspree.io/f/mjkgyepj" method="POST" @submit.prevent="handleSubmit($event)">
						<div class="flex flex-col w-full gap-8">
							<div class="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-8">
								<div class="flex flex-col w-full">
									<label id="firstName-label" for="firstName-input" class="text-white text-lg md:text-xl font-lexend font-bold py-4 after:text-red-500 after:content-['*'] after:ml-2">First name</label>
									<input id="firstName-input" v-model="fields.firstName" type="text" name="firstName" aria-labelledby="firstName-label" inputmode="text" :placeholder="errors.firstName ? errors.firstName : 'John'" :class="errors.firstName ? 'placeholder:text-red-500' : ''" class="text-slate-500 text-lg md:text-xl font-lexend font-normal bg-white p-4 rounded-xl ring-0 outline-0 focus:ring-0 focus:outline-0 appearance-none whitespace-nowrap text-ellipsis text-left transition-colors duration-300 ease-in-out" />
								</div>
								<div class="flex flex-col w-full">
									<label id="lastName-label" for="lastName-input" class="text-white text-lg md:text-xl font-lexend font-bold py-4 after:text-red-500 after:content-['*'] after:ml-2">Last name</label>
									<input id="lastName-input" v-model="fields.lastName" type="text" name="lastName" aria-labelledby="lastName-label" inputmode="text" :placeholder="errors.lastName ? errors.lastName : 'Doe'" :class="errors.lastName ? 'placeholder:text-red-500' : ''" class="text-slate-500 text-lg md:text-xl font-lexend font-normal p-4 rounded-xl bg-white ring-0 outline-0 focus:ring-0 focus:outline-0 appearance-none whitespace-nowrap text-ellipsis text-left transition-colors duration-300 ease-in-out" />
								</div>
							</div>
							<div class="flex flex-col">
								<label id="email-label" for="email-input" class="text-white text-lg md:text-xl font-lexend font-bold py-4 after:text-red-500 after:content-['*'] after:ml-2">Email</label>
								<input id="email-input" v-model="fields.email" type="email" name="email" aria-labelledby="email-label" inputmode="email" :placeholder="errors.email ? errors.email : 'johndoe@gmail.com'" :class="errors.email ? 'placeholder:text-red-500' : ''" class="text-slate-500 text-lg md:text-xl font-lexend font-normal p-4 rounded-xl bg-white ring-0 outline-0 focus:ring-0 focus:outline-0 appearance-none whitespace-nowrap text-ellipsis text-left transition-colors duration-300 ease-in-out" />
							</div>
							<div class="flex flex-col">
								<label id="contactNumber-label" for="contactNumber-input" class="text-white text-lg md:text-xl font-lexend font-bold py-4 after:text-red-500 after:content-['*'] after:ml-2">Contact number</label>
								<input id="contactNumber-input" v-model="fields.contactNumber" type="tel" name="contactNumber" aria-labelledby="contactNumber-label" inputmode="numeric" :placeholder="errors.contactNumber ? errors.contactNumber : '087 000 0000'" :class="errors.contactNumber ? 'placeholder:text-red-500 text-red-500' : 'text-slate-500'" class="text-lg md:text-xl font-lexend font-normal p-4 rounded-xl bg-white ring-0 outline-0 focus:ring-0 focus:outline-0 appearance-none whitespace-nowrap text-ellipsis text-left transition-colors duration-300 ease-in-out" />
							</div>
						</div>
						<div class="flex flex-col w-full">
							<label id="message-label" for="message-input" class="text-white text-lg md:text-xl font-lexend font-bold py-4 after:text-red-500 after:content-['*'] after:ml-2">Message</label>
							<textarea id="message-input" v-model="fields.message" name="message" rows="8" aria-labelledby="message-label" inputmode="text" :placeholder="errors.message ? errors.message : 'I would like to ask you...'" :class="errors.message ? 'placeholder:text-red-500' : ''" class="text-slate-500 text-lg md:text-xl font-lexend font-normal p-4 rounded-xl bg-white ring-0 outline-0 focus:ring-0 focus:outline-0 appearance-none text-ellipsis text-left transition-colors duration-300 ease-in-out"></textarea>
						</div>
						<div class="flex w-full pt-4">
							<button id="submit" type="submit" name="submit" aria-label="Send message" class="w-full cursor-pointer p-4 rounded-xl text-slate-950 text-lg md:text-xl font-lexend font-bold bg-amber-400 hover:bg-amber-500 active:bg-amber-600 transition-colors duration-300 ease-in-out">Send message</button>
						</div>
					</form>
					<div class="flex flex-col items-start justify-start gap-8 p-8 w-full lg:w-1/3 text-white text-lg md:text-xl font-lexend font-normal rounded-xl bg-white/5 relative overflow-hidden">
						<h3 class="font-bold">Chat with us</h3>
						<div class="flex flex-col items-start justify-start gap-4">
							<p>Speak to our friendly team, via live chat or email.</p>
							<ul>
								<li>
									<a href="https://wa.me/353870661737?utm_source=website_whatsapp_link" title="Start a live chat" aria-label="Start a live chat" target="_blank" class="flex flex-row items-center justify-start gap-2 text-white hover:text-neutral-300 active:text-neutral-400 p-1 leading-none transition-colors duration-300 ease-in-out">
										<svg class="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
										Start a live chat
									</a>
								</li>
								<li>
									<a href="mailto:hello@iterav.ie" title="Shoot us an email" aria-label="Shoot us an email" class="flex flex-row items-center justify-start gap-2 text-white hover:text-neutral-300 active:text-neutral-400 p-1 leading-none transition-colors duration-300 ease-in-out">
										<svg class="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.4995 13.5001L20.9995 3.00005M10.6271 13.8281L13.2552 20.5861C13.4867 21.1815 13.6025 21.4791 13.7693 21.566C13.9139 21.6414 14.0862 21.6415 14.2308 21.5663C14.3977 21.4796 14.5139 21.1821 14.7461 20.587L21.3364 3.69925C21.5461 3.16207 21.6509 2.89348 21.5935 2.72185C21.5437 2.5728 21.4268 2.45583 21.2777 2.40604C21.1061 2.34871 20.8375 2.45352 20.3003 2.66315L3.41258 9.25349C2.8175 9.48572 2.51997 9.60183 2.43326 9.76873C2.35809 9.91342 2.35819 10.0857 2.43353 10.2303C2.52043 10.3971 2.81811 10.5128 3.41345 10.7444L10.1715 13.3725C10.2923 13.4195 10.3527 13.443 10.4036 13.4793C10.4487 13.5114 10.4881 13.5509 10.5203 13.596C10.5566 13.6468 10.5801 13.7073 10.6271 13.8281Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
										Shoot us an email
									</a>
								</li>
							</ul>
						</div>
						<div class="flex flex-col items-start justify-start gap-4">
							<h3 class="font-bold">Call us</h3>
							<p>Call our team Mon-Fri 9am - 5pm.</p>
							<ul>
								<li>
									<a href="tel:0870661737" title="Call us" aria-label="Call us" class="flex flex-row items-center justify-start gap-2 text-white hover:text-neutral-300 active:text-neutral-400 p-1 leading-none transition-colors duration-300 ease-in-out">
										<svg class="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
										087 066 1737
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="absolute z-10 bottom-0 w-full opacity-70">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#ffffff" fill-opacity="0.05" d="M0,128L1440,320L1440,320L0,320Z"></path>
			</svg>
			<div class="flex w-full bg-white h-[12.5rem] opacity-[0.05]"></div>
		</div>
	</section>
</template>

<style scoped lang="css"></style>
