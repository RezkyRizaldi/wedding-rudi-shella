<template>
	<NuxtLink :class="`inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110 ${bgColor}`" :to="url" target="_blank" rel="noopener noreferrer" :title="title">
		<slot />
	</NuxtLink>
</template>

<script setup>
	const { title, url } = defineProps({
		title: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	});

	const bgColor = computed(() => (title === 'Instagram' ? 'bg-[#C13584]' : 'bg-[#1877F2]'));
</script>
