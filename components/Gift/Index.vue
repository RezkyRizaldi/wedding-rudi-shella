<template>
	<section class="bg-slate-800">
		<div class="py-16">
			<div class="mx-auto max-w-4xl rounded-2xl bg-stone-200 p-10">
				<h2 class="text-center font-body text-5xl text-yellow-800">Kado Pernikahan</h2>
				<div class="mx-auto w-2/4 py-4">
					<hr class="h-0.5 bg-slate-800" />
				</div>
				<h5 class="my-8 text-center font-semibold">Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</h5>
				<Disclosure>
					<div class="text-center">
						<DisclosureButton class="btn">
							<FontAwesomeIcon class="mr-2" :icon="['fas', 'gift']" />
							Beri Kado
						</DisclosureButton>
					</div>
					<transition
						enter-active-class="transition duration-300 ease-out"
						enter-from-class="transform opacity-0"
						enter-to-class="transform opacity-100"
						leave-active-class="transition duration-75 ease-out"
						leave-from-class="transform opacity-100"
						leave-to-class="transform opacity-0"
					>
						<DisclosurePanel class="mt-10">
							<div class="flex items-center justify-center gap-x-10">
								<GiftCard />
								<GiftCard />
							</div>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
</script>
