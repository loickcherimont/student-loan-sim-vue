<script setup lang="ts">
defineProps<{
    monthlyPayment: number | string | undefined
    duration: number
}>()
</script>

<template>
    <div class="bg-slate-900 p-5 rounded-xl flex flex-col items-center gap-y-2">
        <h3 class="text-purple-600">
            <span class="text-4xl font-light">{{ monthlyPayment || 0}} €</span>
            <span>/month</span></h3>
        <p class="text-sm text-slate-400">During {{ duration }} months</p>
    </div>
</template>