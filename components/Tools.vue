<template>
	<div class="fixed bottom-5 left-5 flex flex-col gap-y-4">
		<button
			class="rounded-full bg-slate-600 p-3 font-semibold leading-tight shadow-md transition hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg"
			type="button"
			:title="!isFullscreen ? 'Maximize' : 'Minimize'"
			@click="fullscreen"
		>
			<FontAwesomeIcon class="h-5 w-5" :icon="['fas', !isFullscreen ? 'maximize' : 'minimize']" inverse />
		</button>
		<button
			class="rounded-full bg-slate-600 p-3 font-semibold leading-tight shadow-md transition hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg"
			type="button"
			:title="!isAudioPlay ? 'Unmute BGM' : 'Mute BGM'"
			@click="handleBGM"
		>
			<FontAwesomeLayers class="!w-5">
				<FontAwesomeIcon :icon="['fas', 'music']" inverse />
				<FontAwesomeIcon v-show="isAudioPlay" :icon="['fas', 'slash']" inverse />
			</FontAwesomeLayers>
		</button>
	</div>
</template>

<script setup>
	const isFullscreen = ref(false);
	const isAudioPlay = ref(false);

	onMounted(() => {
		isAudioPlay.value = true;
	});

	const fullscreen = async () => {
		if (!document.fullscreenElement) {
			isFullscreen.value = true;
			await document.documentElement.requestFullscreen();
		} else {
			isFullscreen.value = false;
			await document.exitFullscreen();
		}
	};

	const handleBGM = () => {
		const audio = document.getElementById('audio');

		audio.muted = !audio.muted;

		if (!audio.muted) {
			isAudioPlay.value = true;
		} else {
			isAudioPlay.value = false;
		}
	};
</script>
