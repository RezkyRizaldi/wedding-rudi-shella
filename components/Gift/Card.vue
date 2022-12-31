<template>
	<div class="w-96 rounded-2xl border border-slate-800 bg-white/80 p-8">
		<div class="flex justify-end">
			<BCALogo class="h-24 w-24" />
		</div>
		<hr class="h-0.5 bg-slate-800" />
		<div class="space-y-3 pt-5">
			<span class="block font-bold uppercase tracking-[0.3em]">Nama Pemilik</span>
			<span class="block font-bold uppercase tracking-[0.3em]">0000-999-000</span>
			<button class="flex w-full items-center justify-center rounded bg-blue-800 px-4 py-1.5 text-white" type="button" @click="copy('xxxxxxxx')">
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
