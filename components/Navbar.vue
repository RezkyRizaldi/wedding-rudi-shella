<template>
	<nav class="fixed bottom-5 left-1/2 z-40 h-16 max-w-xs -translate-x-1/2 rounded-lg bg-gray-400 shadow dark:bg-slate-800 md:hidden">
		<ul class="flex h-full w-full items-center justify-center gap-x-4 overflow-hidden px-3">
			<li class="group w-full text-center">
				<button class="inline-flex flex-col items-center justify-center gap-y-1" type="button" title="Pengantin" @click="back(brideSection)">
					<FontAwesomeIcon class="text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white" :icon="['fas', 'children']" size="lg" />
					<span class="text-xs font-semibold text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white">Pengantin</span>
				</button>
			</li>
			<li class="group w-full text-center">
				<button class="inline-flex flex-col items-center justify-center gap-y-1" type="button" title="Acara" @click="back(eventSection)">
					<FontAwesomeIcon class="text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white" :icon="['fas', 'ring']" size="lg" />
					<span class="text-xs font-semibold text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white">Acara</span>
				</button>
			</li>
			<li class="group w-full text-center">
				<button class="inline-flex flex-col items-center justify-center gap-y-1" type="button" title="Galeri" @click="back(gallerySection)">
					<FontAwesomeIcon class="text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white" :icon="['fas', 'images']" size="lg" />
					<span class="text-xs font-semibold text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white">Galeri</span>
				</button>
			</li>
			<li class="group w-full text-center">
				<button class="inline-flex flex-col items-center justify-center gap-y-1" type="button" title="Kado" @click="back(giftSection)">
					<FontAwesomeIcon class="text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white" :icon="['fas', 'gift']" size="lg" />
					<span class="text-xs font-semibold text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white">Kado</span>
				</button>
			</li>
			<li class="group w-full text-center">
				<button class="inline-flex flex-col items-center justify-center gap-y-1" type="button" title="Protokol" @click="back(protocolSection)">
					<FontAwesomeIcon class="text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white" :icon="['fas', 'head-side-mask']" size="lg" />
					<span class="text-xs font-semibold text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white">Protokol</span>
				</button>
			</li>
			<li class="group w-full text-center">
				<button class="inline-flex flex-col items-center justify-center gap-y-1" type="button" title="Do'a" @click="back(wishSection)">
					<FontAwesomeIcon class="text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white" :icon="['fas', 'wand-magic-sparkles']" size="lg" />
					<span class="text-xs font-semibold text-slate-600 transition-colors group-hover:text-gray-300 dark:text-yellow-300/90 dark:group-hover:text-white">Do'a</span>
				</button>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
	const { brideSection, eventSection, gallerySection, giftSection, protocolSection, wishSection } = defineProps<{
		brideSection: HTMLElement | null;
		eventSection: HTMLElement | null;
		gallerySection: HTMLElement | null;
		giftSection: HTMLElement | null;
		protocolSection: HTMLElement | null;
		wishSection: HTMLElement | null;
	}>();

	const back = (el: HTMLElement | null) => {
		if (!el) return;

		window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
	};
</script>
