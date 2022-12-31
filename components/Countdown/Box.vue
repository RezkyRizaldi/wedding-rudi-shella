<template>
	<div class="rounded-2xl bg-white/50 py-4 px-10 text-yellow-800">
		<span class="text-4xl font-semibold">{{ time }}</span>
		<span class="block font-serif text-xs">{{ desc }}</span>
	</div>
</template>

<script setup>
	const { desc } = defineProps({
		time: {
			type: Number,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
	});
</script>
