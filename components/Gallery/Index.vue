<template>
	<section class="bg-stone-200 text-center">
		<div class="pt-20">
			<h2 class="font-body text-7xl text-slate-800">Galeri</h2>
			<div class="mx-auto w-2/3">
				<h5 class="mt-5 font-serif text-sm italic">Setiap kisah cinta itu indah, tapi kisah cinta kita adalah favoritku.</h5>
			</div>
			<div class="mx-auto w-2/4 py-8">
				<hr class="h-0.5 bg-slate-800" />
			</div>
		</div>
		<div class="mx-auto max-w-5xl pb-20">
			<Swiper
				class="h-full w-full"
				:spaceBetween="20"
				:modules="[SwiperAutoplay, SwiperNavigation]"
				navigation
				:slidesPerView="3"
				:loop="true"
				:autoplay="{
					delay: 3000,
					disableOnInteraction: true,
				}"
			>
				<SwiperSlide v-for="slide in 3" :key="slide">
					<NuxtImg class="h-full w-full" :src="`https://via.placeholder.com/300x400?text=Demo+Image+${slide}`" alt="Demo Image" />
				</SwiperSlide>
			</Swiper>
			<div class="mt-5 grid grid-cols-6 gap-5">
				<div class="group relative overflow-hidden" v-for="image in 8" :key="image">
					<NuxtImg class="transition-transform duration-300 group-hover:scale-125" :src="`https://via.placeholder.com/200x300?text=Demo+Image+${image}`" alt="Gallery Image" />
					<div class="absolute inset-0 h-full w-full overflow-hidden bg-black/30 bg-fixed opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>
