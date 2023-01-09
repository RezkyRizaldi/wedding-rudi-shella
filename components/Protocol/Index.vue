<template>
	<section class="bg-stone-400 py-12 text-center dark:bg-stone-200 md:py-24" id="protocol">
		<div class="mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl">
			<h2 class="font-serif text-2xl font-bold uppercase tracking-[0.2em] text-yellow-300/90 dark:text-yellow-800 md:text-4xl" data-aos="zoom-in" data-aos-duration="750">Protokol Kesehatan</h2>
			<div class="mx-auto w-full md:w-3/4" data-aos="zoom-in" data-aos-duration="750">
				<p class="mt-6 font-semibold text-gray-200 dark:text-slate-600">
					Mengingat situasi dan kondisi <a class="font-bold underline underline-offset-2" href="https://id.wikipedia.org/wiki/Pandemi_Covid-19" target="_blank" rel="noopener noreferrer">pandemi COVID-19</a>, dimohon kepada semua tamu
					undangan agar mengikuti protokol kesehatan sebagai berikut:
				</p>
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

<script setup lang="ts"></script>
