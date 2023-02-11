<template>
	<section class="h-[36rem] bg-gray-200 dark:bg-slate-800">
		<div class="flex h-full flex-col-reverse items-center justify-end gap-x-24 gap-y-10 pt-8 md:mx-auto md:max-w-2xl md:flex-row md:justify-center md:gap-y-0 md:pt-0 lg:max-w-full">
			<div class="h-52 w-80 overflow-hidden rounded-3xl border-4 border-yellow-800 dark:border-yellow-500 md:h-80 md:w-[32rem]">
				<Swiper class="h-full w-full" :modules="[SwiperAutoplay, SwiperEffectFade]" :slidesPerView="1" :loop="true" effect="fade" :autoplay="{ delay: 3000, disableOnInteraction: true }">
					<SwiperSlide v-for="slide in 5" :key="slide">
						<img class="h-full w-full overflow-hidden object-cover object-center" :src="`/images/about${slide}.jpg`" :alt="`Bride Image ${slide}`" loading="lazy" />
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="flex flex-col items-center justify-center gap-y-8 text-center md:gap-y-14 lg:gap-y-16">
				<h2 class="text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-gray-100 md:text-xl">Pernikahan</h2>
				<h2 class="font-body text-4xl text-yellow-800 dark:text-yellow-300/90 md:text-6xl lg:text-7xl">Rudi & Shella</h2>
				<h2 class="text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-gray-100 md:text-xl">19 Februari 2023</h2>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
