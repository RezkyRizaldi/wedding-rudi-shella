<template>
	<section class="bg-stone-200 py-6 text-center md:pt-10 md:pb-20">
		<h2 class="font-serif text-xl font-bold uppercase tracking-[0.2em] text-yellow-800 md:text-4xl">Menghitung Hari</h2>
		<div class="mx-auto w-4/5 md:w-3/5">
			<p class="mt-6 font-serif text-sm italic text-gray-700">
				Jam berdetak begitu cepat, di antara momen mendebarkan yang belum pernah kami rasakan sebelumnya. Kami berharap dapat menyambut keluarga dan teman-teman untuk menyaksikan janji berkat kami di hari yang bahagia.
			</p>
		</div>
		<VueCountdown :time="time" v-slot="{ days, hours, minutes, seconds }">
			<div class="mx-auto grid max-w-2xl grid-cols-2 gap-5 p-10 md:grid-cols-4 md:gap-x-16 md:pt-14">
				<CountdownBox desc="Hari" :time="days" />
				<CountdownBox desc="Jam" :time="hours" />
				<CountdownBox desc="Menit" :time="minutes" />
				<CountdownBox desc="Detik" :time="seconds" />
			</div>
		</VueCountdown>
	</section>
</template>

<script setup>
	const countdownDate = new Date('Feb 27, 2023 10:00:00').getTime();
	const now = new Date().getTime();
	const time = countdownDate - now;
</script>
