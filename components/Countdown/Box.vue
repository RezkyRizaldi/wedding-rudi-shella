<template>
	<div class="flex flex-col items-center justify-center rounded-2xl bg-white/50 py-6 text-yellow-800 shadow-xl md:py-4">
		<span class="text-4xl font-semibold">{{ time }}</span>
		<span class="block font-serif text-xs">{{ desc }}</span>
	</div>
</template>

<script setup lang="ts">
	const { desc, time } = defineProps({
		time: { type: Number, required: true },
		desc: { type: String, required: true },
	});
</script>
