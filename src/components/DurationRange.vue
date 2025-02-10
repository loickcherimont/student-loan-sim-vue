<script setup lang="ts">
import { ref } from "vue"

defineProps<{
    name: string
    subtitle: string
}>()

const model = defineModel()

// const duration = ref<number>(1)
</script>

<template>
     <!-- range flex flex-col gap -->
    <div class="field flex flex-col gap-x-2 m-5 space-y-3">
        <label for="duration"
            class="block text-sm font-medium text-purple-500">{{
                name }}</label>
        <!-- <p
            class="max-w-96 rounded-xl p-2.5 transition ease-in-out shadow duration-700 outline-none focus:ring-1 focus:ring-purple-500 text-slate-200 bg-slate-900">
            {{ model }} year{{ Number(model) > 1 ? "s" : "" }}</p> -->
             <p class="self-center">{{ model }} year{{ Number(model) > 1 ? "s" : "" }}</p>

        <input type="range" name="duration" id="duration" min="1" max="10" v-model="model" />
        <p class="text-slate-400 self-center">{{ subtitle }}</p>
    </div>
</template>