<template>
	<section class="bg-stone-400 text-center dark:bg-stone-200" id="gallery">
		<div class="pt-12 md:pt-20">
			<h2 class="font-body text-5xl text-gray-200 dark:text-slate-600 md:text-7xl" data-aos="zoom-in" data-aos-duration="750">Galeri</h2>
			<div class="mx-auto w-2/3" data-aos="zoom-in" data-aos-duration="750">
				<h3 class="mt-5 font-serif text-sm italic text-gray-200 dark:text-slate-600 md:text-base">Setiap kisah cinta itu indah, tapi kisah cinta kita adalah favoritku.</h3>
			</div>
			<div class="mx-auto w-2/4 py-6 md:py-8">
				<hr class="border-gray-200 dark:border-slate-600" />
			</div>
		</div>
		<div class="mx-auto max-w-xs pb-20 md:max-w-2xl lg:max-w-4xl">
			<ClientOnly>
				<Swiper
					class="h-full w-full"
					:spaceBetween="20"
					:modules="[SwiperNavigation]"
					:breakpoints="{ 320: { slidesPerView: 1, spaceBetween: 20 }, 480: { slidesPerView: 2, spaceBetween: 20 }, 640: { slidesPerView: 3, spaceBetween: 20 } }"
					navigation
					:slidesPerView="3"
					:loop="true"
				>
					<SwiperSlide v-for="slide in 3" :key="slide">
						<NuxtImg class="h-full w-full" :src="`https://via.placeholder.com/300x400?text=Demo+Image+${slide}`" alt="Demo Image" loading="lazy" />
					</SwiperSlide>
				</Swiper>
			</ClientOnly>
			<div class="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
				<div class="group relative overflow-hidden" v-for="image in 8" :key="image" data-aos="flip-right" data-aos-duration="750" :data-aos-delay="(num += 100)">
					<NuxtImg class="w-full transition-transform duration-300 group-hover:scale-125" :src="`https://via.placeholder.com/200x300?text=Demo+Image+${image}`" alt="Gallery Image" loading="lazy" />
					<div class="absolute inset-0 h-full w-full overflow-hidden bg-black/30 bg-fixed opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	let num = 0;
</script>
