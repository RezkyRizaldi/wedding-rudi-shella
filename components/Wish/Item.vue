<template>
	<div class="flex gap-x-3 py-4">
		<div class="h-8 w-8 overflow-hidden">
			<NuxtImg class="rounded-full object-contain" src="https://via.placeholder.com/200x200?text=B" alt="Name" loading="lazy" />
		</div>
		<div class="flex-1">
			<h2 class="inline-block font-bold">Nama</h2>
			<FontAwesomeIcon class="ml-1 text-red-500" :icon="['fas', 'circle-xmark']" size="xs" />
			<FontAwesomeIcon class="ml-1 text-green-500" :icon="['fas', 'circle-check']" size="xs" />
			<p class="text-xs text-gray-500">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus saepe voluptatem, distinctio eaque dicta nobis esse ipsa impedit accusamus rerum quod cumque ut architecto. Sint quidem at totam praesentium alias ipsam sapiente
				animi nam, eos quisquam accusantium consectetur corrupti itaque quam veritatis repellat saepe iste quibusdam magnam! Commodi, laborum quia.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts"></script>
