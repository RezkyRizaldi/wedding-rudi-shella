<template>
	<div class="fixed bottom-24 left-5 z-40 flex flex-col gap-y-4 md:bottom-5">
		<button class="floating-btn" type="button" :title="!isFullscreen ? 'Maximize' : 'Minimize'" @click="fullscreen">
			<FontAwesomeIcon class="h-5 w-5" :icon="['fas', !isFullscreen ? 'maximize' : 'minimize']" inverse />
		</button>
		<button class="floating-btn" type="button" :title="!isAudioPlay ? 'Unmute BGM' : 'Mute BGM'" @click="handleBGM">
			<FontAwesomeLayers class="!w-5">
				<FontAwesomeIcon :icon="['fas', 'music']" inverse />
				<FontAwesomeIcon v-show="isAudioPlay" :icon="['fas', 'slash']" inverse />
			</FontAwesomeLayers>
		</button>
	</div>
</template>

<script setup>
	const isFullscreen = ref(false);
	const isAudioPlay = ref(true);

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
