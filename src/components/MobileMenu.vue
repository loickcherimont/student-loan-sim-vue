<script setup lang="ts">

// const emit = defineEmits(["testMenu"])

// const emit = defineEmits<{
//     change: [id: number]
//     update: [value: string]
// }>()

const model = defineModel()

const emit = defineEmits({
    testMenu: () => {
        const mobileMenuList = document.getElementById("mobileMenuList")

        if (!mobileMenuList) {
            console.error(mobileMenuList + " is null!")
        }

        mobileMenuList?.classList.toggle("hidden")
    }
})

// Learn to use EMIT correctly before build this component

</script>

<template>
    <button type="button" @click="emit('testMenu')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </button>
    <div class="hidden lg:hidden" v-show="model" id="mobileMenuList">MENU</div>
</template>