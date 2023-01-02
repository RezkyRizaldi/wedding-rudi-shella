<template>
	<button class="floating-btn fixed bottom-24 right-5 z-40 hidden md:bottom-5" id="backToTop" type="button" title="Back to Top" @click="back">
		<FontAwesomeIcon class="h-5 w-5" :icon="['fas', 'arrow-up']" inverse />
	</button>
</template>

<script setup>
	onMounted(() => window.addEventListener('scroll', show));

	onBeforeUnmount(() => window.removeEventListener('scroll', show));

	const show = () => {
		const button = document.getElementById('backToTop');

		if (window.scrollY > 500) {
			button.classList.remove('hidden');
		} else {
			button.classList.add('hidden');
		}
	};

	const back = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
