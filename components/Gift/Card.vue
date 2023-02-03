<template>
	<div class="w-full rounded-2xl border border-gray-800 bg-white/80 p-8 dark:border-slate-800 md:w-96">
		<div class="flex justify-end">
			<BCALogo class="h-8 w-20 md:w-24" />
		</div>
		<div class="space-y-3 pt-3 md:pt-5">
			<hr class="border-slate-600" />
			<span class="block text-sm font-bold uppercase tracking-[0.3em] md:text-base">Shella Febriyanti</span>
			<span class="block text-sm font-bold uppercase tracking-[0.3em] md:text-base">7840-284-799</span>
			<button id="btnGift" class="flex w-full items-center justify-center rounded bg-blue-800 px-4 py-1.5 text-sm text-white md:text-base" type="button" @click="copy('7840284799')" title="Salin ke Clipboard">
				<FontAwesomeIcon :icon="['fas', 'copy']" />
				<span id="btnGiftText" class="flex-1">Salin</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	const copy = async (text: string) => {
		const btnGift = document.getElementById('btnGift');

		if (!btnGift) return;

		const btnGiftText = btnGift.lastElementChild;

		if (!btnGiftText) return;

		await navigator.clipboard.writeText(text);

		btnGift.setAttribute('title', 'Berhasil disalin');
		btnGiftText.innerHTML = 'Berhasil disalin';

		setTimeout(() => {
			btnGift.setAttribute('title', 'Salin ke Clipboard');
			btnGiftText.innerHTML = 'Salin';
		}, 3000);
	};
</script>
