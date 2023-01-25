<template>
	<section class="bg-stone-400 py-6 text-center dark:bg-stone-200 md:pt-10 md:pb-20">
		<h2 class="font-serif text-xl font-bold uppercase tracking-[0.2em] text-yellow-300/90 dark:text-yellow-800 md:text-4xl" data-aos="fade-up" data-aos-duration="1000">Menghitung Hari</h2>
		<div class="mx-auto w-4/5 md:w-3/5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
			<p class="mt-6 font-serif text-sm italic text-gray-200 dark:text-gray-700">
				Jam berdetak begitu cepat, di antara momen mendebarkan yang belum pernah kami rasakan sebelumnya. Kami berharap dapat menyambut keluarga dan teman-teman untuk menyaksikan janji berkat kami di hari yang bahagia.
			</p>
		</div>
		<ClientOnly>
			<VueCountdown :time="time" v-slot="{ days, hours, minutes, seconds }">
				<div class="mx-auto grid max-w-2xl grid-cols-2 gap-5 p-10 md:grid-cols-4 md:gap-x-16 md:pt-14">
					<CountdownBox desc="Hari" :time="days" data-aos="flip-up" data-aos-duration="1500" />
					<CountdownBox desc="Jam" :time="hours" data-aos="flip-up" data-aos-duration="1500" data-aos-delay="300" />
					<CountdownBox desc="Menit" :time="minutes" data-aos="flip-up" data-aos-duration="1500" data-aos-delay="500" />
					<CountdownBox desc="Detik" :time="seconds" data-aos="flip-up" data-aos-duration="1500" data-aos-delay="700" />
				</div>
			</VueCountdown>
		</ClientOnly>
	</section>
</template>

<script setup lang="ts">
	const time = new Date('Feb 19, 2023 09:00:00').getTime() - new Date().getTime();
</script>
