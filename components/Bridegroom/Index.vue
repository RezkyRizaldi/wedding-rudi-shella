<template>
	<section class="bg-slate-800 text-center md:pb-10 lg:pb-6">
		<div class="mx-auto max-w-2xl py-12 md:py-24">
			<h2 class="font-body text-5xl text-yellow-300/90 md:text-7xl">Pengantin</h2>
			<h5 class="mx-auto mt-5 max-w-xs text-sm text-white md:max-w-full">Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah rahmatilah pernikahan putra-putri kami</h5>
		</div>
		<div class="mx-auto flex max-w-2xl flex-col items-center justify-evenly gap-y-10 md:flex-row md:gap-y-0 lg:max-w-full">
			<BridegroomProfile name="Rudi">
				<template #family>Putra ke- dari Bapak ... & Ibu ...</template>
				<template #social="{ icon }">
					<FontAwesomeIcon :icon="['fab', icon]" size="lg" inverse />
				</template>
			</BridegroomProfile>
			<span class="font-body text-5xl text-white md:-mt-52 md:text-7xl">&</span>
			<BridegroomProfile name="Shella">
				<template #family>Putri ke- dari Bapak ... & Ibu ...</template>
				<template #social="{ icon }">
					<FontAwesomeIcon :icon="['fab', icon]" size="lg" inverse />
				</template>
			</BridegroomProfile>
		</div>
	</section>
</template>

<script setup></script>
