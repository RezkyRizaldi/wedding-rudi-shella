<template>
	<div
		class="max-h-44 w-full divide-y overflow-y-auto pr-4 scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-gray-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-track-slate-800 dark:scrollbar-thumb-gray-100"
	>
		<div class="flex items-center justify-center overflow-hidden" v-if="loading">
			<Loader class="mr-3 -ml-1 h-8 w-8" />
		</div>
		<div class="flex gap-x-3 border-gray-200 py-4 hover:bg-stone-500/50 dark:border-slate-600 dark:hover:bg-gray-300/50" v-for="wish in wishes" :key="wish.id" v-else>
			<div class="h-8 w-8 overflow-hidden">
				<NuxtImg
					class="rounded-full object-contain"
					:src="`https://via.placeholder.com/200x200?text=${wish.name
						.split(' ')
						.map((n) => n.charAt(0).toUpperCase())
						.join('')}`"
					:alt="wish.name"
					loading="lazy"
				/>
			</div>
			<div class="flex-1">
				<h2 class="inline-block font-bold text-gray-200 dark:text-black">{{ wish.name }}</h2>
				<FontAwesomeIcon class="ml-1 text-red-500" :icon="['fas', 'circle-xmark']" size="xs" v-if="wish.attendance === 'Tidak Hadir'" />
				<FontAwesomeIcon class="ml-1 text-green-500" :icon="['fas', 'circle-check']" size="xs" v-else />
				<p class="text-xs font-semibold text-gray-200 dark:text-gray-500">
					{{ wish.message }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { wishes, loading } = defineProps<{ wishes: Wish[]; loading: boolean }>();
</script>
