<template>
	<div>
		<div class="flex flex-col items-center gap-y-10">
			<NuxtImg class="h-96 w-96 rounded-full" src="https://via.placeholder.com/400x200?text=Bride+Image" alt="Bride Image" />
			<h3 class="font-body text-6xl text-yellow-300/90">{{ name }}</h3>
			<h5 class="texl-4xl font-bold text-white">
				<slot name="family" />
			</h5>
			<BridegroomSocial url="https://instagram.com/">
				<slot name="social" />
			</BridegroomSocial>
		</div>
	</div>
</template>

<script setup>
	const { name } = defineProps({
		name: {
			type: String,
			required: true,
		},
	});
</script>
