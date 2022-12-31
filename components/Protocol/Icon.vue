<template>
	<div>
		<div class="inline-flex h-24 w-24 items-center justify-center rounded-full border border-yellow-800 transition-transform hover:scale-110">
			<FontAwesomeIcon class="text-yellow-800" :icon="['fas', icon]" size="3x" />
		</div>
		<p class="mt-4 text-xl font-semibold text-yellow-800">{{ text }}</p>
	</div>
</template>

<script setup>
	const { icon, text } = defineProps({
		icon: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	});
</script>
