<script setup lang="ts">
defineProps<{
    property: string
    propertyValue: string | number
}>()
</script>

<template>
    <li class="border-b last:border-0 border-slate-600 flex justify-between p-5 w-72">
        <span>{{ property }}</span>
        <span>{{ propertyValue || 0 }}</span>
    </li>
</template>