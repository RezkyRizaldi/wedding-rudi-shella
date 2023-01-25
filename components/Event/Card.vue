<template>
	<div class="w-full rounded-2xl bg-stone-400 p-10 dark:bg-stone-200">
		<FontAwesomeIcon class="fa-3x md:fa-4x rotate-12 transform text-yellow-300/90 dark:text-yellow-800" :icon="['fas', icon]" />
		<h2 class="mt-4 font-body text-3xl text-gray-200 dark:text-slate-600 md:mt-8 md:text-4xl lg:text-5xl">{{ title }}</h2>
		<div class="py-4 md:py-8">
			<h3 class="font-serif text-xl text-yellow-300/90 dark:text-yellow-800 md:text-2xl lg:text-3xl">Minggu</h3>
			<h3 class="font-serif text-xl text-yellow-300/90 dark:text-yellow-800 md:text-2xl lg:text-3xl">19 Februari 2023</h3>
		</div>
		<span class="font-serif text-lg text-gray-200 dark:text-slate-600 md:text-xl">{{ time }}</span>
		<div class="flex items-center justify-center gap-x-3 py-10">
			<hr class="w-full border-gray-200 dark:border-slate-800 md:w-32" />
			<FontAwesomeIcon class="fa-xl md:fa-2x text-gray-200 dark:text-slate-600" :icon="['fas', 'location-dot']" />
			<hr class="w-full border-gray-200 dark:border-slate-800 md:w-32" />
		</div>
		<div class="flex flex-col items-center justify-center gap-y-3 lg:gap-y-5">
			<p class="font-serif text-sm text-gray-200 dark:text-slate-600 md:text-base">Lokasi Acara</p>
			<p class="font-serif text-sm text-gray-200 dark:text-slate-600 md:text-base">Jl. Sayati Hilir No.51, Sayati, Kec. Margahayu, Kabupaten Bandung, Jawa Barat 40228 (Gor SMK Marhas / Gor Lukmaul Hakim)</p>
		</div>
		<div class="mt-8">
			<a class="btn" href="https://goo.gl/maps/Xjsg6CXUwzvWBd1Q7" target="_blank" rel="noopener noreferrer" title="Lihat Maps">
				<FontAwesomeIcon class="mr-2" :icon="['fas', 'paper-plane']" />
				Lihat Maps
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { icon, title, time } = defineProps({
		icon: { type: String, required: true },
		title: { type: String, required: true },
		time: { type: String, required: true },
	});
</script>
a
