<template>
	<div>
		<div class="flex flex-col items-center gap-y-10">
			<NuxtImg
				class="h-60 w-60 rounded-full border-4 border-yellow-800 shadow-2xl dark:border-yellow-300/90 lg:h-96 lg:w-96"
				src="https://via.placeholder.com/400x200?text=Bride+Image"
				alt="Bride Image"
				loading="lazy"
				:data-aos="dataAos"
				data-aos-duration="1000"
			/>
			<h3 class="font-body text-4xl text-yellow-800 dark:text-yellow-300/90 md:text-6xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">{{ name }}</h3>
			<h4 class="max-w-xs font-bold text-slate-600 dark:text-gray-100 lg:text-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
				<slot name="family" />
			</h4>
			<div class="flex w-full items-center justify-center gap-x-10">
				<BridegroomSocial url="https://instagram.com/" title="Instagram" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
					<slot name="social" icon="instagram" />
				</BridegroomSocial>
				<BridegroomSocial url="https://facebook.com/" title="Facebook" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450">
					<slot name="social" icon="facebook" />
				</BridegroomSocial>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { dataAos, name } = defineProps({
		name: { type: String, required: true },
		dataAos: { type: String, required: true },
	});
</script>
