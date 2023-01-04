<template>
	<a :class="`inline-flex h-10 w-10 items-center justify-center rounded-full ${bgColor}`" :href="url" target="_blank" rel="noopener noreferrer" :title="title">
		<span class="sr-only">{{ title }}</span>
		<slot />
	</a>
</template>

<script setup lang="ts">
	const { title, url } = defineProps({
		title: { type: String, required: true },
		url: { type: String, required: true },
	});

	const bgColor = computed(() => (title === 'Instagram' ? 'bg-[#C13584] hover:bg-[#C13584]/80' : 'bg-[#1877F2] hover:bg-[#1877F2]/80'));
</script>
