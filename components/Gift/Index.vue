<template>
	<section class="bg-gray-200 dark:bg-slate-800" id="gift">
		<div class="mx-auto max-w-xs py-16 md:max-w-2xl lg:max-w-4xl">
			<div class="rounded-2xl bg-stone-400 p-10 dark:bg-stone-200">
				<h2 class="text-center font-body text-4xl text-yellow-300/90 dark:text-yellow-800 md:text-5xl">Kado Pernikahan</h2>
				<div class="mx-auto w-2/4 py-4">
					<hr class="border-gray-200 dark:border-slate-600" />
				</div>
				<h3 class="my-6 text-center font-semibold text-gray-200 dark:text-slate-600 md:my-8">
					Do'a restu Anda merupakan karunia yang sangat berarti bagi kami. Jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
				</h3>
				<Disclosure>
					<div class="text-center">
						<DisclosureButton class="btn" title="Beri Kado">
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
							<div class="flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-y-0 md:gap-x-10">
								<GiftCard />
							</div>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
</script>
