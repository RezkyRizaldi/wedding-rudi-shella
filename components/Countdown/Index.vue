<template>
	<section class="bg-stone-200 pt-10 pb-24 text-center">
		<h2 class="font-serif text-4xl font-bold uppercase tracking-[0.2em] text-yellow-800">Menghitung Hari</h2>
		<div class="mx-auto w-3/5">
			<p class="mt-6 font-serif text-sm italic text-gray-700">
				Jam berdetak begitu cepat, di antara momen mendebarkan yang belum pernah kami rasakan sebelumnya. Kami berharap dapat menyambut keluarga dan teman-teman untuk menyaksikan janji berkat kami di hari yang bahagia.
			</p>
		</div>
		<VueCountdown :time="time" v-slot="{ days, hours, minutes, seconds }">
			<div class="flex items-center justify-center gap-x-16 pt-14">
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
