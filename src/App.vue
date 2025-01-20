<script setup lang="ts">
import { ref } from "vue"
import "./style.css"

const amount = ref<number | string>()

const emptyNullAmount = ref<boolean>(false)

// Functions
const handleInput = (event: Event) => {
  emptyNullAmount.value = !amount.value ? true : false

  console.log(amount)

  if (amount.value === 0) {
    console.log("foo")
  }
}

</script>

<template>
  <!-- Header -->
  <header class="bg-slate-900 text-slate-200 flex justify-between p-5">
    <div>BACK</div>
    <h1 class="text-violet-500 font-bold text-2xl">STUDENT LOAN SIMULATOR</h1>
    <div>QUIT</div>
  </header>
  <!-- Main -->
  <main class="text-slate-200 flex flex-col items-center gap-y-2 p-5">

    <!-- Header for main -->
    <div class="flex flex-col items-center gap-y-2 p-3">
      <h2 class="text-violet-500 text-xl">Simulator</h2>
      <p>Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
      </p>
    </div>

    <!-- Display and form -->
    <div class="flex shadow-lg shadow-slate-900 rounded-lg p-8">
      <!-- Display -->
      <div class="">
        <!-- display header -->
        <div class="bg-slate-900 p-5 rounded-xl flex flex-col items-center">
          <h3 class="text-lg font-black text-purple-500">188.45€ per month</h3>
          <p>During 120 months</p>
        </div>

        <!-- display body -->
        <ul>
          <!-- TAEG to translate in english -->
          <li class="border-b border-slate-600 flex justify-between p-5 w-72">
            <p>TAEG</p><p>2.53%</p>
          </li>

          <!-- Loan amount -->
          <li class="border-b border-slate-600 flex justify-between p-5 w-72"><p>Loan amount</p><p>{{ amount }} €</p></li>

          <!-- Total amount to repay -->
          <li class="border-b border-slate-600 flex justify-between p-5 w-72"><p>Total amount to repay</p><p>{{ amount }} €</p></li>

          <!-- Loan cost -->
          <li class="border-b border-slate-600 flex justify-between p-5 w-72"><p>Loan cost</p><p>2.000€</p></li>

          <!-- Expenses for folder -->
          <li class="border-b border-slate-600 flex justify-between p-5 w-72"><p>Expenses</p><p>Offered</p></li>
        </ul>
      </div>
      <!-- Form -->
      <div class="">
        <form>
          <!-- total loan -->
          <!-- <div>
            <label for="">Project amount</label>
            <input type="text" name="" id="projectAmount" v-model=""  />

          </div> -->

          <!-- New Total loan -->
          <div class="field flex flex-col gap-2 m-5">
            <label for="projectAmount"
              class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium  text-purple-500">Em@il</label>
            <input type="text" name="project_amount" id="projectAmount"
              class="max-w-96 rounded-xl p-2.5 transition ease-in-out shadow duration-700 outline-none focus:ring-1 focus:ring-purple-500 text-slate-200 bg-slate-700"
              placeholder="john.doe@domain.com" v-model="amount" @input="handleInput" />
              <p>Between 1500 and 20000€</p>
            <p class="error text-red-600 font-semibold">Error message</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6 stroke-emerald-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

          </div>
          <!-- Monthly payment -->
          <!-- <div>
          <label for="monthlyPayment">Monthly Payment</label>
          <input type="text" name="monthly_payment" id="monthlyPayment" />
          <p>Between 100 and 2000€</p>
        </div> -->
          <!-- Duration -->
          <!-- <div>
          <label for="duration">Duration</label>
          <input type="text" name="duration" id="duration" />
          <p>12 to 120 months</p>
        </div> -->
        </form>
      </div>
    </div>

  </main>
  <!-- FOOTER -->
  <footer class="flex justify-center py-5">
    <p>&copy; 2025 | Loick Cherimont</p>
  </footer>
</template>