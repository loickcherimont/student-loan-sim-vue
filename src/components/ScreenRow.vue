<script setup lang="ts">
interface Props {
    property: string
    propertyValue: number | string | undefined
    propertyType?: "rate" | "money"
}

defineProps<Props>()
</script>

<template>
    <li v-if="propertyType === 'rate'" class="border-b last:border-0 border-slate-600 flex justify-between p-5 w-72">
        <span>{{ property }}</span>
        <span>{{ propertyValue }} %</span>
    </li>
    <li v-else-if="propertyType === 'money'" class="border-b last:border-0 border-slate-600 flex justify-between p-5 w-72">
        <span>{{ property }}</span>
        <span>{{ propertyValue }} €</span>
    </li>
    <li v-else class="border-b last:border-0 border-slate-600 flex justify-between p-5 w-72">
        <span>{{ property }}</span>
        <span>{{ propertyValue }}</span>
    </li>
</template>