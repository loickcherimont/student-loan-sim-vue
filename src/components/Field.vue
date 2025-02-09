<script setup lang="ts">
import { ref, reactive } from 'vue';
defineProps<{
    name: string
    subtitle: string
    placeholder: string
    isDisabled?: boolean
    type?: "loan"
}>()

interface ErrorField {
    isInError: boolean
    message: string
}

const model = defineModel()
const errorField: ErrorField = reactive({
    isInError: false,
    message: ""
}) 

const handleInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement
    const UPPER_BOUND: number = 20000
    const LOWER_BOUND: number = 1500

// Reset errors if user follow instructions for this field
    errorField.isInError = false
    errorField.message = ""

    // isEmptyNull.value = !input.value ? true : false
    // Check for each entry if field is empty
    if(!input.value) {
        errorField.isInError = true
        errorField.message = "Please, this field is required"
        return
    }

    // Check for each entry if field is a number
    if(isNaN(Number(input.value))) {
        errorField.isInError = true
        errorField.message = "Please, use a NUMBER to fill this field"
        return
    }

    // Check for each entry if the number is between 1500 and 20000
    if(Number(input.value) < LOWER_BOUND || Number(input.value) > UPPER_BOUND) {
        errorField.isInError = true
        errorField.message = `Please, use a NUMBER between ${LOWER_BOUND} and ${UPPER_BOUND}`
        return
    }
}
</script>

<template>
    <div class="field flex gap-x-2 items-center m-5">

        <div class="input-field flex flex-col gap-2">
            <label for="projectAmount"
                class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium  text-purple-500">{{
                    name }}</label>
<!-- Other fields -->
            <input v-if="isDisabled" type="text" name="project_amount" id="projectAmount"
                class="max-w-96 rounded-xl p-2.5 transition ease-in-out shadow duration-700 outline-none focus:ring-1 focus:ring-purple-500 text-slate-200 bg-slate-900"
                :placeholder="placeholder" v-model="model"  disabled />
                <!-- @input="handleInput" -->
            <input v-else type="text" name="project_amount" id="projectAmount"
                class="max-w-96 rounded-xl p-2.5 transition ease-in-out shadow duration-700 outline-none focus:ring-1 focus:ring-purple-500 text-slate-200 bg-slate-700"
                :placeholder="placeholder" v-model="model" @input="handleInput" />
                <!-- @input="handleInput" -->

                <p class="text-slate-400">{{ subtitle }}</p>
                <!-- Loan field  -->

            <p v-show="errorField.isInError" class="text-red-600 font-semibold">{{ errorField.message }}</p>
        </div>

        <!-- <div class="valid">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 stroke-1 stroke-teal-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div> -->
    </div>
</template>