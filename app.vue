<template>
	<main class="antialiased">
		<audio class="hidden" id="audio" loop src="/audio/bgm.mp3"></audio>
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
		<ToolsRight />
		<ToolsLeft />
		<Navbar :brideSection="brideSection" :eventSection="eventSection" :gallerySection="gallerySection" :giftSection="giftSection" :protocolSection="protocolSection" :wishSection="wishSection" />
	</main>
</template>

<script setup lang="ts">
	const {
		query: { to },
	} = useRoute();
	const recipient = ref(to || 'Bapak/Ibu/Saudara/i');
	const brideSection = ref<HTMLElement | null>(null);
	const eventSection = ref<HTMLElement | null>(null);
	const gallerySection = ref<HTMLElement | null>(null);
	const giftSection = ref<HTMLElement | null>(null);
	const protocolSection = ref<HTMLElement | null>(null);
	const wishSection = ref<HTMLElement | null>(null);

	onMounted(() => {
		brideSection.value = document.getElementById('bride');
		eventSection.value = document.getElementById('event');
		gallerySection.value = document.getElementById('gallery');
		giftSection.value = document.getElementById('gift');
		protocolSection.value = document.getElementById('protocol');
		wishSection.value = document.getElementById('wish');
	});
</script>
