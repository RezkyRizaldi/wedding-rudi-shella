<template>
	<main class="overflow-hidden antialiased">
		<Splash :recipient="recipient" />
		<About />
		<Wave class="-mt-36" />
		<Verse />
		<Bridegroom />
		<Wave />
		<Countdown />
		<Event :recipient="recipient" />
		<Gallery />
		<Gift />
		<Protocol />
		<Wish :recipient="recipient" />
		<Wave />
		<Footer />
		<BackToTop />
		<Tools />
		<audio class="hidden" id="audio" loop src="/audio/bgm.mp3"></audio>
	</main>
</template>

<script setup>
	const {
		query: { to },
	} = useRoute();
	const recipient = ref(to || 'Bapak/Ibu/Saudara/i');
</script>
