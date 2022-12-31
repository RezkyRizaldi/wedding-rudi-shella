<template>
	<section class="bg-slate-800 text-center">
		<div class="py-24">
			<h2 class="font-body text-7xl text-yellow-300/90">Pengantin</h2>
			<h5 class="mt-5 text-white">Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah rahmatilah pernikahan putra-putri kami</h5>
		</div>
		<div class="flex items-center justify-evenly">
			<BridegroomProfile name="Rudi">
				<template v-slot:family>Putra ke- dari Bapak ... & Ibu ...</template>
				<template v-slot:social>
					<FontAwesomeIcon :icon="['fab', 'instagram']" size="lg" inverse />
				</template>
			</BridegroomProfile>
			<span class="-mt-52 font-body text-7xl text-white">&</span>
			<BridegroomProfile name="Shella">
				<template v-slot:family>Putri ke- dari Bapak ... & Ibu ...</template>
				<template v-slot:social>
					<FontAwesomeIcon :icon="['fab', 'instagram']" size="lg" inverse />
				</template>
			</BridegroomProfile>
		</div>
	</section>
</template>

<script setup></script>
