<template>
	<section class="bg-slate-800 text-center">
		<div class="py-12 md:py-24">
			<h2 class="font-body text-4xl text-yellow-300/90 md:text-7xl">Acara Pernikahan</h2>
			<div class="mx-auto w-2/4 py-4 md:py-8">
				<hr class="text-white" />
			</div>
			<div class="mx-auto w-3/4 md:w-2/3">
				<h5 class="mt-5 text-sm text-white md:text-lg">
					Tanpa mengurangi rasa hormat, kami mengundang {{ recipient }} untuk dapat hadir pada acara <span class="font-semibold">Resepsi Pernikahan</span> putra dan putri kami yang insya Allah akan dilaksanakan pada
				</h5>
			</div>
		</div>
		<div class="mx-auto max-w-xs lg:max-w-4xl">
			<div class="flex flex-col items-center justify-center gap-y-10 pb-14 md:flex-row md:gap-y-0 md:gap-x-10 md:pb-20">
				<EventCard icon="ring" title="Akad Nikah" time="Pukul 09:00 - 10:00 WIB" />
				<EventCard icon="wine-glass" title="Resepsi" time="Pukul 10:00 WIB - Selesai" />
			</div>
		</div>
	</section>
</template>

<script setup>
	const { recipient } = defineProps({ recipient: String });
</script>
