<template>
	<div class="w-[32rem] rounded-2xl bg-stone-200 p-10">
		<FontAwesomeIcon class="rotate-12 transform text-yellow-800" :icon="['fas', icon]" size="4x" />
		<h2 class="mt-8 font-body text-5xl text-slate-800">{{ title }}</h2>
		<div class="py-8">
			<h5 class="font-serif text-3xl text-yellow-800">Hari</h5>
			<h5 class="font-serif text-3xl text-yellow-800">00 Februari 2023</h5>
		</div>
		<span class="font-serif text-xl text-slate-800">{{ time }}</span>
		<div class="flex items-center justify-center gap-x-3 py-10">
			<hr class="h-0.5 w-32 bg-slate-800" />
			<FontAwesomeIcon :icon="['fas', 'location-dot']" size="2x" />
			<hr class="h-0.5 w-32 bg-slate-800" />
		</div>
		<div class="flex flex-col items-center justify-center gap-y-5">
			<p class="font-serif text-slate-800">Gedung Pernikahan</p>
			<p class="font-serif text-slate-800">Jl. alamat RT 11 RW 02, Bandung</p>
		</div>
		<div class="mt-8">
			<NuxtLink class="btn" to="/" target="_blank" rel="noopener noreferrer">
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
