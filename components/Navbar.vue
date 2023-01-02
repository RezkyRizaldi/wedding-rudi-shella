<template>
	<nav class="fixed bottom-5 left-1/2 z-40 h-16 max-w-xs -translate-x-1/2 rounded-lg bg-slate-800 shadow md:hidden">
		<ul class="flex h-full w-full items-center justify-center gap-x-4 overflow-hidden px-3">
			<li class="group w-full text-center">
				<NuxtLink class="inline-flex flex-col items-center justify-center gap-y-1" :to="{ path: '/', hash: '#bride' }" title="Pengantin">
					<FontAwesomeIcon class="text-yellow-300/90 transition-colors group-hover:text-white" :icon="['fas', 'children']" size="lg" />
					<p class="text-xs font-semibold text-yellow-300/90 transition-colors group-hover:text-white">Pengantin</p>
				</NuxtLink>
			</li>
			<li class="group w-full text-center">
				<NuxtLink class="inline-flex flex-col items-center justify-center gap-y-1" :to="{ path: '/', hash: '#event' }" title="Acara">
					<FontAwesomeIcon class="text-yellow-300/90 transition-colors group-hover:text-white" :icon="['fas', 'ring']" size="lg" />
					<p class="text-xs font-semibold text-yellow-300/90 transition-colors group-hover:text-white">Acara</p>
				</NuxtLink>
			</li>
			<li class="group w-full text-center">
				<NuxtLink class="inline-flex flex-col items-center justify-center gap-y-1" :to="{ path: '/', hash: '#gallery' }" title="Galeri">
					<FontAwesomeIcon class="text-yellow-300/90 transition-colors group-hover:text-white" :icon="['fas', 'images']" size="lg" />
					<p class="text-xs font-semibold text-yellow-300/90 transition-colors group-hover:text-white">Galeri</p>
				</NuxtLink>
			</li>
			<li class="group w-full text-center">
				<NuxtLink class="inline-flex flex-col items-center justify-center gap-y-1" :to="{ path: '/', hash: '#gift' }" title="Kado">
					<FontAwesomeIcon class="text-yellow-300/90 transition-colors group-hover:text-white" :icon="['fas', 'gift']" size="lg" />
					<p class="text-xs font-semibold text-yellow-300/90 transition-colors group-hover:text-white">Kado</p>
				</NuxtLink>
			</li>
			<li class="group w-full text-center">
				<NuxtLink class="inline-flex flex-col items-center justify-center gap-y-1" :to="{ path: '/', hash: '#protocol' }" title="Protokol">
					<FontAwesomeIcon class="text-yellow-300/90 transition-colors group-hover:text-white" :icon="['fas', 'head-side-mask']" size="lg" />
					<p class="text-xs font-semibold text-yellow-300/90 transition-colors group-hover:text-white">Protokol</p>
				</NuxtLink>
			</li>
			<li class="group w-full text-center">
				<NuxtLink class="inline-flex flex-col items-center justify-center gap-y-1" :to="{ path: '/', hash: '#wish' }" title="Do'a">
					<FontAwesomeIcon class="text-yellow-300/90 transition-colors group-hover:text-white" :icon="['fas', 'wand-magic-sparkles']" size="lg" />
					<p class="text-xs font-semibold text-yellow-300/90 transition-colors group-hover:text-white">Do'a</p>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script setup></script>
