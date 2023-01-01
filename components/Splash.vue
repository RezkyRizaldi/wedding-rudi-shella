<template>
	<div class="fixed top-0 left-0 z-50 h-screen w-screen bg-slate-800 font-sans transition duration-300" id="splash">
		<div class="flex h-screen items-center justify-center">
			<button class="rounded-lg border border-white px-4 py-2 font-semibold uppercase tracking-widest text-white focus:ring-1 focus:ring-white" type="button" title="Buka Undangan" @click="handleTransition">Buka Undangan</button>
			<p class="absolute bottom-5 text-xs font-semibold text-white">
				Copyright &copy; 2022 <NuxtLink class="font-bold hover:underline" href="https://github.com/RezkyRizaldi" target="_blank" rel="noopener noreferrer">Muhamad Rezky Rizaldi</NuxtLink> | All Rights Reserved
			</p>
		</div>
	</div>
</template>

<script setup>
	const handleTransition = () => {
		const main = document.querySelector('main');
		const splash = document.getElementById('splash');

		main.classList.remove('overflow-hidden');
		splash.classList.add('opacity-0', 'hidden');
	};
</script>
