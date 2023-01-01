<template>
	<section class="bg-stone-200 py-12 text-center md:py-24">
		<div class="mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl">
			<h2 class="font-serif text-2xl font-bold uppercase tracking-[0.2em] text-yellow-800 md:text-4xl">Protokol Kesehatan</h2>
			<div class="mx-auto w-full md:w-3/4">
				<p class="mt-6 text-slate-800">Mengingat situasi dan kondisi pandemi COVID-19, dimohon kepada semua tamu undangan agar mengikuti protokol kesehatan sebagai berikut:</p>
			</div>
			<div class="mt-14 grid grid-cols-2 gap-10 md:mt-20 md:grid-cols-4 md:gap-0">
				<ProtocolIcon icon="head-side-mask" text="Memakai Masker" />
				<ProtocolIcon icon="hands-bubbles" text="Mencuci Tangan" />
				<ProtocolIcon icon="people-arrows" text="Menjaga Jarak" />
				<ProtocolIcon icon="thermometer" text="Cek Suhu Badan" />
			</div>
		</div>
	</section>
</template>

<script setup></script>
