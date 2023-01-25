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
					<SwiperSlide class="group" v-for="slide in 3" :key="slide">
						<div class="overflow-hidden">
							<img class="h-full w-full transition-transform duration-1000 group-hover:scale-125" :src="`/images/gallery${slide}.jpg`" :alt="`Bride Image ${slide}`" loading="lazy" />
						</div>
					</SwiperSlide>
				</Swiper>
			</ClientOnly>
			<div class="mt-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
				<ClientOnly>
					<LightBox :visible="visible" :index="imgIndex" :imgs="images" @hide="visible = !visible" />
				</ClientOnly>
				<div class="group relative overflow-hidden" v-for="(image, idx) in images" :key="idx" data-aos="flip-right" data-aos-duration="750" :data-aos-delay="(num += 100)" @click="() => show(idx)">
					<img class="w-full transition-transform duration-300 group-hover:scale-125" :src="image" :alt="`Bride Image ${idx}`" loading="lazy" />
					<FontAwesomeIcon class="fa-lg absolute left-1/2 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" :icon="['fas', 'magnifying-glass-plus']" />
					<div class="absolute inset-0 h-full w-full overflow-hidden bg-black/10 bg-fixed opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const imgIndex = ref(0);
	const visible = ref(false);
	let num = 0;
	const images = ['/images/gallery4.jpg', '/images/gallery5.jpg', '/images/gallery6.jpg', '/images/gallery7.jpg', '/images/gallery8.jpg', '/images/gallery9.jpg', '/images/gallery10.jpg', '/images/gallery11.jpg'];

	const show = (index: number) => {
		imgIndex.value = index;
		visible.value = true;
	};
</script>
