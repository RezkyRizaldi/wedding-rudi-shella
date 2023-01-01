<template>
	<section class="bg-slate-800">
		<div class="mx-auto max-w-xs py-12 md:max-w-2xl md:py-16 lg:max-w-4xl">
			<h2 class="text-center font-serif text-2xl uppercase tracking-widest text-white md:text-4xl">Harapan & Do'a</h2>
			<h5 class="mt-4 mb-10 text-center font-serif text-sm italic text-white md:text-base">Sampaikan do'a dan ucapan terbaik Anda untuk kedua mempelai.</h5>
			<div class="rounded-2xl bg-white p-10">
				<div class="space-y-6">
					<span class="block text-center font-semibold">11 Komentar</span>
					<div class="flex items-center justify-center gap-x-10">
						<div class="w-32 rounded bg-slate-800 py-2 px-4 text-center text-white">
							<span class="block text-lg font-bold">3</span>
							<span class="block text-xs">Hadir</span>
						</div>
						<div class="w-32 rounded bg-slate-800 py-2 px-4 text-center text-white">
							<span class="block text-lg font-bold">2</span>
							<span class="block text-xs">Tidak Hadir</span>
						</div>
					</div>
					<hr class="h-0.5 bg-slate-800" />
					<form class="space-y-4">
						<input class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none" type="text" placeholder="Nama" aria-label="name" />
						<textarea class="focus:shadow-outline w-full resize-none appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none" placeholder="Ucapan" rows="6"></textarea>
						<div class="relative inline-block w-full">
							<select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
								<option selected>Konfirmasi Kehadiran</option>
								<option>Hadir</option>
								<option>Tidak Hadir</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
						<div class="text-right">
							<button class="btn" type="submit" title="Kirim Pesan">Kirim</button>
						</div>
					</form>
					<div class="max-h-40 w-full divide-y-2 overflow-y-scroll pr-4">
						<WishItem v-for="item in 5" :key="item" />
					</div>
				</div>
			</div>
			<div class="mt-12 flex flex-col-reverse items-center justify-center gap-y-10 md:mt-24 md:flex-row md:gap-y-0 md:gap-x-10">
				<NuxtImg class="rounded-lg" src="https://via.placeholder.com/400x300?text=Bride+image" />
				<div class="space-y-8 text-center">
					<p class="text-sm text-white md:text-base">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila {{ recipient }} berkenan hadir dan memberikan do'a restunya untuk keberkahan pernikahan kami.</p>
					<p class="text-sm text-white md:text-base">Atas do'a dan restunya, kami ucapkan terima kasih.</p>
					<h2 class="font-serif text-3xl text-yellow-300/90">Rudi & Shella</h2>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	const { recipient } = defineProps({ recipient: String });
</script>
