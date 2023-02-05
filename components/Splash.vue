<template>
	<div class="fixed top-0 left-0 z-50 h-screen w-screen bg-slate-800 bg-[url('/images/gallery4.jpg')] bg-cover bg-center bg-no-repeat md:bg-[50%_25%]" id="splash">
		<div class="absolute inset-0 -z-10 bg-black/40"></div>
		<div class="flex h-full w-full flex-col items-center justify-center gap-y-16">
			<div class="space-y-6 text-center md:space-y-14 lg:space-y-10">
				<h1 class="font-serif text-xl text-gray-100 md:text-4xl">Undangan Pernikahan</h1>
				<h2 class="font-body text-4xl text-yellow-300/90 md:text-7xl">Rudi & Shella</h2>
				<span class="block font-serif text-gray-100 md:text-xl">Kepada Yth.</span>
				<p class="font-serif text-xl font-bold text-gray-100 md:text-4xl">{{ recipient }}</p>
			</div>
			<button
				class="rounded-lg border border-gray-100 px-4 py-2 font-serif text-sm font-semibold uppercase tracking-widest text-gray-100 focus:ring-1 focus:ring-gray-100 disabled:border-gray-300 disabled:text-gray-300 hover:bg-gray-100 hover:text-slate-600 active:ring-1 active:ring-gray-100 md:text-base"
				type="button"
				title="Buka Undangan"
				:disabled="isDisabled"
				@click="loadPage"
			>
				Buka Undangan
			</button>
			<p class="absolute bottom-5 max-w-xs text-center text-xs font-semibold text-gray-100 md:max-w-full">
				Copyright &copy; 2023 <a class="font-bold hover:underline" href="https://github.com/RezkyRizaldi" target="_blank" rel="noopener noreferrer">Muhamad Rezky Rizaldi</a> | All Rights Reserved
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { LocationQueryValue } from 'vue-router';

	const { recipient } = defineProps<{ recipient: string | LocationQueryValue[] }>();
	const isDisabled = ref(true);

	onMounted(() => {
		isDisabled.value = false;
	});

	const loadPage = async () => {
		const main = document.querySelector('main');
		const splash = document.getElementById('splash');
		const audio = document.getElementById('audio') as HTMLAudioElement | null;

		if (!main || !splash || !audio) return;

		document.body.classList.remove('overflow-hidden');
		document.documentElement.classList.remove('overflow-hidden');
		splash.classList.add('opacity-0', 'hidden');

		await audio.play();
	};
</script>
