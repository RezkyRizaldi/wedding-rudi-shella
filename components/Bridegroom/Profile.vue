<template>
	<div>
		<div class="flex flex-col items-center gap-y-10">
			<NuxtImg class="h-60 w-60 rounded-full lg:h-96 lg:w-96" src="https://via.placeholder.com/400x200?text=Bride+Image" alt="Bride Image" />
			<h3 class="font-body text-4xl text-yellow-300/90 md:text-6xl">{{ name }}</h3>
			<h5 class="font-bold text-white lg:text-xl">
				<slot name="family" />
			</h5>
			<div class="flex w-full items-center justify-center gap-x-10">
				<BridegroomSocial url="https://instagram.com/" title="Instagram">
					<slot name="social" icon="instagram" />
				</BridegroomSocial>
				<BridegroomSocial url="https://facebook.com/" title="Facebook">
					<slot name="social" icon="facebook" />
				</BridegroomSocial>
			</div>
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
