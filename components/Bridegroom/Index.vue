<template>
	<section class="bg-gray-200 text-center dark:bg-slate-800 md:pb-10 lg:pb-6" id="bride">
		<div class="mx-auto max-w-2xl py-12 md:py-24" data-aos="zoom-in" data-aos-duration="750">
			<h2 class="font-body text-5xl text-yellow-800 dark:text-yellow-300/90 md:text-7xl">Pengantin</h2>
			<h3 class="mx-auto mt-5 max-w-xs text-sm font-semibold text-slate-600 dark:text-gray-100 md:max-w-full">Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah rahmatilah pernikahan putra-putri kami</h3>
		</div>
		<div class="mx-auto flex max-w-2xl flex-col items-center justify-evenly gap-y-10 md:flex-row md:gap-y-0 lg:max-w-full">
			<BridegroomProfile name="Rudi" dataAos="fade-down">
				<template #family>Putra ke- dari Bapak ... & Ibu ...</template>
				<template #social="{ icon }">
					<FontAwesomeIcon :icon="['fab', icon]" size="lg" inverse />
				</template>
			</BridegroomProfile>
			<span class="text-slate:600 font-body text-5xl dark:text-gray-100 md:-mt-52 md:text-7xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">&</span>
			<BridegroomProfile name="Shella" dataAos="fade-down">
				<template #family>Putri ke- dari Bapak ... & Ibu ...</template>
				<template #social="{ icon }">
					<FontAwesomeIcon :icon="['fab', icon]" size="lg" inverse />
				</template>
			</BridegroomProfile>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
