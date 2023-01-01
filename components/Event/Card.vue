<template>
	<div class="w-full rounded-2xl bg-stone-200 p-10">
		<FontAwesomeIcon class="fa-3x md:fa-4x rotate-12 transform text-yellow-800" :icon="['fas', icon]" />
		<h2 class="mt-4 font-body text-3xl text-slate-800 md:mt-8 md:text-4xl lg:text-5xl">{{ title }}</h2>
		<div class="py-4 md:py-8">
			<h5 class="font-serif text-xl text-yellow-800 md:text-2xl lg:text-3xl">Hari</h5>
			<h5 class="font-serif text-xl text-yellow-800 md:text-2xl lg:text-3xl">00 Februari 2023</h5>
		</div>
		<span class="font-serif text-lg text-slate-800 md:text-xl">{{ time }}</span>
		<div class="flex items-center justify-center gap-x-3 py-10">
			<hr class="h-0.5 w-full bg-slate-800 md:w-32" />
			<FontAwesomeIcon class="fa-xl md:fa-2x" :icon="['fas', 'location-dot']" />
			<hr class="h-0.5 w-full bg-slate-800 md:w-32" />
		</div>
		<div class="flex flex-col items-center justify-center gap-y-3 lg:gap-y-5">
			<p class="font-serif text-sm text-slate-800 md:text-base">Gedung Pernikahan</p>
			<p class="font-serif text-sm text-slate-800 md:text-base">Jl. alamat RT 11 RW 02, Bandung</p>
		</div>
		<div class="mt-8">
			<NuxtLink class="btn" to="/" target="_blank" rel="noopener noreferrer" title="Lihat Maps">
				<FontAwesomeIcon class="mr-2" :icon="['fas', 'paper-plane']" inverse />
				Lihat Maps
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	const { icon, title, time } = defineProps({
		icon: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
	});
</script>
a
