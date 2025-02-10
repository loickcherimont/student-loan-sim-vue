<script setup lang="ts">
import { computed, ref, watch, type ComputedRef, type Ref } from "vue"
import "./style.css"
import Field from './components/Field.vue';
import ScreenRow from './components/ScreenRow.vue';
import ScreenHeader from './components/ScreenHeader.vue'
import Header from './components/Header.vue';
import MainHeader from './components/MainHeader.vue';
import Footer from './components/Footer.vue';
import { getMonthlyPayment } from './utils/utils';
import DurationRange from './components/DurationRange.vue';

const loan = ref<number | string>("")
// const monthlyPayment = ref<number>(0)
const duration = ref<number>(1) // number of year to repay
const apr = ref<number>(2.53)
const monthlyPayment = computed(() => getMonthlyPayment(Number(loan.value), apr.value, duration.value))

// Formula to evaluate the total amount to repay
const totalRepay = ref<string>("0")
const loanCost = ref<string>("0")


// Returns monthly payment amount
// const monthlyPayment2: ComputedRef<number> = computed<number>(() => getMonthlyPayment(loan.value, apr, years.value))

// watch(loan, (new, old) => monthlyPayment2)

// To modify dynamically totalRepay if monthPayment changes
watch(monthlyPayment, () => totalRepay.value = (monthlyPayment.value * 12 * duration.value).toFixed(2))

// To update loanCost if totalRepay changes
watch(totalRepay, () => loanCost.value = (Number(totalRepay.value) - Number(loan.value)).toFixed(2))

// console.log(monthPayment(20000, 2.53, 2))

</script>

<template>
  <!-- For large screen -->
  <div class="bg-slate-800 h-full text-slate-200 hidden lg:block">
    <!-- Header -->
    <Header />
    <!-- Main -->
    <main class="text-slate-200 flex flex-col items-center gap-y-2 p-5">
      <!-- {{ monthlyPayment2 || 0 }}-->
      <!-- Header for main -->
      <MainHeader />

      <!-- Display and form -->
      <div class="flex shadow-lg shadow-slate-900 rounded-3xl p-10 gap-x-5">
        <!-- Display -->
        <div class="display">
          <!-- display header -->
          <ScreenHeader :monthlyPayment="getMonthlyPayment(Number(loan), apr, duration)" :duration="duration" />

          <!-- display body -->
          <ul>
            <ScreenRow property="APR" :property-value="apr" property-type="rate" />

            <!-- Loan amount -->
            <ScreenRow property="Loan amount" :property-value="loan || 0" property-type="money" />

            <!-- Total amount to repay -->
            <ScreenRow property="Total repay" :property-value="totalRepay" property-type="money" />

            <!-- Loan cost -->
            <ScreenRow property="Loan cost" :property-value="loanCost" property-type="money" />

            <!-- Expenses for folder -->
            <ScreenRow property="Expenses" property-value="Offered" />
          </ul>
        </div>
        <!-- Form -->
        <div>
          <form>
            <!-- New Total loan -->
            <Field v-model="loan" name="Total loan" subtitle="Between 1 500 and 20 000€" placeholder="20 000€"
              type="loan" />
            <!-- Monthly payment -->
            <!-- getMonthlyPayment(loan, apr, duration) -->
            <Field v-model="monthlyPayment" name="Monthly payment" subtitle="Between 100 and 2 000€"
              placeholder="2 000€" :is-disabled="true" />
            <!-- Duration -->
            <!-- <Field v-model="duration" name="Duration" subtitle="Between 1 and 10 years" placeholder="10 years" /> -->
            <!-- Test -->
            <DurationRange v-model="duration" name="Duration" subtitle="Between 1 and 10 years" />
          </form>
        </div>
      </div>

    </main>
    <!-- FOOTER -->
    <Footer />
  </div>

  <!-- For mobile -->
  <div class="bg-slate-800 h-full text-slate-200 lg:hidden block">
    <!-- Header -->
    <Header />
    <!-- Main -->
    <main class="text-slate-200 flex flex-col items-center gap-y-2 p-5">
      <!-- {{ monthlyPayment2 || 0 }}-->
      <!-- Header for main -->
      <MainHeader />

      <!-- Display and form -->
      <div class="flex flex-col shadow-lg shadow-slate-900 rounded-3xl p-10 gap-x-5">
        <!-- Display -->
        <div class="display">
          <!-- display header -->
          <ScreenHeader :monthlyPayment="getMonthlyPayment(Number(loan), apr, duration)" :duration="duration" />

          <!-- display body -->
          <ul>
            <ScreenRow property="APR" :property-value="apr" property-type="rate" />

            <!-- Loan amount -->
            <ScreenRow property="Loan amount" :property-value="loan || 0" property-type="money" />

            <!-- Total amount to repay -->
            <ScreenRow property="Total repay" :property-value="totalRepay" property-type="money" />

            <!-- Loan cost -->
            <ScreenRow property="Loan cost" :property-value="loanCost" property-type="money" />

            <!-- Expenses for folder -->
            <ScreenRow property="Expenses" property-value="Offered" />
          </ul>
        </div>
        <!-- Form -->
        <div>
          <form>
            <!-- New Total loan -->
            <Field v-model="loan" name="Total loan" subtitle="Between 1 500 and 20 000€" placeholder="20 000€"
              type="loan" />
            <!-- Monthly payment -->
            <!-- getMonthlyPayment(loan, apr, duration) -->
            <Field v-model="monthlyPayment" name="Monthly payment" subtitle="Between 100 and 2 000€"
              placeholder="2 000€" :is-disabled="true" />
            <!-- Duration -->
            <!-- <Field v-model="duration" name="Duration" subtitle="Between 1 and 10 years" placeholder="10 years" /> -->
            <!-- Test -->
            <DurationRange v-model="duration" name="Duration" subtitle="Between 1 and 10 years" />
          </form>
        </div>
      </div>

    </main>
    <!-- FOOTER -->
    <Footer />
  </div>

</template>