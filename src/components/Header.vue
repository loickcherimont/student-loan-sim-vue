<script setup lang="ts">
</script>

<template>
    <!-- For large screens -->
    <header class="bg-slate-900 text-slate-200 justify-between p-5 hidden lg:flex">
        <div>BACK</div>
        <h1 class="text-violet-500 font-bold text-2xl">STUDENT LOAN SIMULATOR</h1>
        <div>QUIT</div>
    </header>
    <!-- For mobile screens -->
    <header class="bg-slate-900 text-slate-200 p-5 lg:hidden flex">
        <!-- <div>BACK</div> -->
        <h1 class="text-violet-500 font-bold text-2xl w-full h-full text-center">STUDENT LOAN SIMULATOR</h1>
        <!-- <div>QUIT</div> -->

        <!-- Menu -->
         <div>MOBILE</div>
        <!-- <div class="inset-y-0 left-0 flex items-center border">
            Mobile menu button
            <button type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          
                <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          
                <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div> 
         Mobile menu, show/hide based on menu state. 
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
                 Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" 
                <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                    aria-current="page">Dashboard</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
            </div>
        </div>-->
    </header>
</template>