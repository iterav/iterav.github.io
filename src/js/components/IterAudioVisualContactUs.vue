<script setup lang="js">
async function handleSubmit(event) {
	event.preventDefault();

	const response = await fetch(event.target.action, {
		method: event.target.method,
		body: new FormData(event.target),
		headers: {
			Accept: 'application/json',
		},
	});

	const json = await response.json();
	const status = document.querySelector('#contact-us-form-status');

	if (Object.hasOwn(json, 'ok') && json.ok) {
		if (status) {
			status.innerHTML = 'Thanks for your submission!';
		}

		event.target.reset();
	} else if (Object.hasOwn(json, 'errors')) {
		const errorMessages = json.errors.map((error) => error.message).join(', ');

		if (status) {
			status.innerHTML = errorMessages;
		} else {
			console.error(errorMessages);
		}
	} else {
		const errorMessage = 'Oops! There was a problem submitting our form';

		if (status) {
			status.innerHTML = errorMessage;
		} else {
			console.error(errorMessage);
		}
	}
}
</script>

<template>
	<section>
		Contact Us

		<p id="contact-us-form-status"></p>
		<form action="https://formspree.io/f/mjkgyepj" method="POST" @submit.prevent="handleSubmit($event)">
			<label for="email">Email:</label>
			<input id="email" type="email" name="email" value="" />
			<label for="message">Message:</label>
			<input id="message" type="text" name="message" value="" />
			<button type="submit">Submit</button>
		</form>
	</section>
</template>

<style scoped lang="css"></style>
