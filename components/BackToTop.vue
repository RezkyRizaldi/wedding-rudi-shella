<template>
	<button
		class="fixed bottom-5 right-5 hidden rounded-full bg-slate-600 p-3 font-semibold leading-tight shadow-md transition hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg"
		id="backToTop"
		type="button"
		title="Back to Top"
		@click="back"
	>
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

	const back = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
</script>
