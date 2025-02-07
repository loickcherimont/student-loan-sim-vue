<script setup lang="ts">
import { ref } from "vue"

const duration = ref<number>(1)
</script>

<template>
    <!-- TODO: use the same template as monthly payment Field -->
    <div class="range flex flex-col gap">
        <p
            class="max-w-96 rounded-xl p-2.5 transition ease-in-out shadow duration-700 outline-none focus:ring-1 focus:ring-purple-500 text-slate-200 bg-slate-900">
            {{ duration }} year{{ duration > 1 ? "s" : "" }}</p>
        <input type="range" name="duration" id="duration" min="1" max="10" v-model="duration" />
    </div>
</template>