<template>
	<section class="bg-stone-200 py-12 text-center md:py-24" id="protocol">
		<div class="mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl">
			<h2 class="font-serif text-2xl font-bold uppercase tracking-[0.2em] text-yellow-800 md:text-4xl" data-aos="zoom-in" data-aos-duration="750">Protokol Kesehatan</h2>
			<div class="mx-auto w-full md:w-3/4" data-aos="zoom-in" data-aos-duration="750">
				<p class="mt-6 text-slate-800">Mengingat situasi dan kondisi pandemi COVID-19, dimohon kepada semua tamu undangan agar mengikuti protokol kesehatan sebagai berikut:</p>
			</div>
			<div class="mt-14 grid grid-cols-2 gap-10 md:mt-20 md:grid-cols-4 md:gap-0">
				<ProtocolIcon icon="head-side-mask" text="Memakai Masker" data-aos="fade-up" data-aos-duration="1000" />
				<ProtocolIcon icon="hands-bubbles" text="Mencuci Tangan" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
				<ProtocolIcon icon="people-arrows" text="Menjaga Jarak" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
				<ProtocolIcon icon="thermometer" text="Cek Suhu Badan" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" />
			</div>
		</div>
	</section>
</template>

<script setup></script>
