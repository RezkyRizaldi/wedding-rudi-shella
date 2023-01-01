<template>
	<div class="w-full rounded-2xl border border-slate-800 bg-white/80 p-8 md:w-96">
		<div class="flex justify-end">
			<BCALogo class="h-8 w-20 md:w-24" />
		</div>
		<div class="space-y-3 pt-3 md:pt-5">
			<hr class="h-0.5 bg-slate-800" />
			<span class="block text-sm font-bold uppercase tracking-[0.3em] md:text-base">Nama Pemilik</span>
			<span class="block text-sm font-bold uppercase tracking-[0.3em] md:text-base">0000-999-000</span>
			<button class="flex w-full items-center justify-center rounded bg-blue-800 px-4 py-1.5 text-sm text-white md:text-base" type="button" @click="copy('xxxxxxxx')">
				<FontAwesomeIcon :icon="['fas', 'copy']" />
				<span id="btnText" class="flex-1">Salin</span>
			</button>
		</div>
	</div>
</template>

<script setup>
	const copy = async (text) => {
		await navigator.clipboard.writeText(text);

		document.querySelector('#btnText').innerHTML = 'Berhasil disalin!';
	};
</script>
