<template>
	<NuxtLink class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300/90 transition-transform hover:scale-110" :to="url" target="_blank" rel="noopener noreferrer">
		<slot />
	</NuxtLink>
</template>

<script setup>
	const { url } = defineProps({
		url: {
			type: String,
			required: true,
		},
	});
</script>
