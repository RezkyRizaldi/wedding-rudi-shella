<template>
	<div class="max-h-40 w-full divide-y overflow-y-auto pr-4">
		<div class="flex items-center justify-center" v-show="loading">
			<Loader class="mr-3 -ml-1 h-8 w-8" />
		</div>
		<div class="flex gap-x-3 border-gray-200 py-4 dark:border-slate-600" v-show="!loading" v-for="wish in wishes" :key="wish.id">
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
				<FontAwesomeIcon v-show="wish.attendance === 'Tidak Hadir'" class="ml-1 text-red-500" :icon="['fas', 'circle-xmark']" size="xs" />
				<FontAwesomeIcon v-show="wish.attendance === 'Hadir'" class="ml-1 text-green-500" :icon="['fas', 'circle-check']" size="xs" />
				<p class="text-xs font-semibold text-gray-200 dark:text-gray-500">
					{{ wish.message }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { wishes, loading } = defineProps<{ wishes: Wish[] | null; loading: boolean }>();
</script>
