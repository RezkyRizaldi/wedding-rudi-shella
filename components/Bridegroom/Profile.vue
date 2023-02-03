<template>
	<div>
		<div class="flex flex-col items-center gap-y-10">
			<slot name="image" />
			<h3 class="font-body text-4xl text-yellow-800 dark:text-yellow-300/90 md:text-6xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">{{ name }}</h3>
			<h4 class="max-w-xs font-bold text-slate-600 dark:text-gray-100 sm:max-w-sm lg:text-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
				<slot name="family" />
			</h4>
			<div class="flex w-full items-center justify-center gap-x-10">
				<BridegroomSocial :url="instagramURL" title="Instagram" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
					<slot name="social" icon="instagram" />
				</BridegroomSocial>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { name, instagramURL } = defineProps({
		name: { type: String, required: true },
		instagramURL: { type: String, required: true },
	});
</script>
