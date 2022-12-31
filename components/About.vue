<template>
	<section class="h-[36rem] bg-slate-800">
		<div class="flex h-full items-center justify-center gap-x-24">
			<div class="h-80 w-[32rem] overflow-hidden rounded-3xl border-4 border-yellow-500">
				<Swiper
					class="h-full w-full"
					:modules="[SwiperAutoplay, SwiperEffectFade]"
					:slidesPerView="1"
					:loop="true"
					:effect="'fade'"
					:autoplay="{
						delay: 3000,
						disableOnInteraction: true,
					}"
				>
					<SwiperSlide v-for="slide in 3" :key="slide">
						<NuxtImg class="h-full w-full" :src="`https://via.placeholder.com/400x200?text=Demo+Image+${slide}`" alt="Demo Image" />
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="flex flex-col items-center justify-center gap-y-16 text-center">
				<h2 class="text-xl font-semibold uppercase tracking-widest text-white">The Wedding Of</h2>
				<h1 class="font-body text-7xl text-yellow-300/90">Rudi & Shella</h1>
				<h2 class="text-xl font-semibold uppercase tracking-widest text-white">February 2022</h2>
			</div>
		</div>
	</section>
</template>

<script setup></script>
