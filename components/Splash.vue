<template>
	<div class="fixed top-0 left-0 z-50 h-screen w-screen bg-slate-800 transition duration-300" id="splash">
		<div class="flex h-screen flex-col items-center justify-center gap-y-16">
			<div class="space-y-6 text-center md:space-y-14 lg:space-y-10">
				<h5 class="font-serif text-xl text-white md:text-4xl">Undangan Pernikahan</h5>
				<h2 class="font-body text-4xl text-yellow-300/90 md:text-7xl">Rudi & Shella</h2>
				<span class="block font-serif text-white md:text-xl">Kepada Yth.</span>
				<p class="font-serif text-xl font-bold text-white md:text-4xl">{{ recipient }}</p>
			</div>
			<button
				class="rounded-lg border border-white px-4 py-2 font-serif text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-slate-800 focus:ring-1 focus:ring-white active:ring-1 active:ring-white md:text-base"
				type="button"
				title="Buka Undangan"
				@click="loadPage"
			>
				Buka Undangan
			</button>
			<p class="absolute bottom-5 text-xs font-semibold text-white">
				Copyright &copy; 2022 <NuxtLink class="font-bold hover:underline" href="https://github.com/RezkyRizaldi" target="_blank" rel="noopener noreferrer">Muhamad Rezky Rizaldi</NuxtLink> | All Rights Reserved
			</p>
		</div>
	</div>
</template>

<script setup>
	const { recipient } = defineProps({ recipient: { type: String, required: true } });

	const loadPage = () => {
		const main = document.querySelector('main');
		const splash = document.getElementById('splash');
		const audio = document.getElementById('audio');

		document.body.classList.remove('overflow-hidden');
		main.classList.remove('overflow-hidden');
		splash.classList.add('opacity-0', 'hidden');
		audio.play();
	};
</script>
