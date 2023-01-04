<template>
	<div class="fixed bottom-24 right-5 z-40 md:bottom-5">
		<button class="floating-btn hidden" id="backToTop" type="button" title="Back to Top" @click="back">
			<span class="sr-only">Back to Top</span>
			<FontAwesomeIcon class="h-5 w-5" :icon="['fas', 'arrow-up']" inverse />
		</button>
	</div>
</template>

<script setup lang="ts">
	onMounted(() => window.addEventListener('scroll', show));

	onBeforeUnmount(() => window.removeEventListener('scroll', show));

	const show = () => {
		const button = document.getElementById('backToTop');

		if (!button) return;

		if (window.scrollY > 500) {
			button.classList.remove('hidden');
		} else {
			button.classList.add('hidden');
		}
	};

	const back = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>
