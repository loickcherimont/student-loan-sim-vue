<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from "vue"
import "./style.css"
import Field from './components/Field.vue';
import ScreenRow from './components/ScreenRow.vue';
import ScreenHeader from './components/ScreenHeader.vue'
import Header from './components/Header.vue';
import MainHeader from './components/MainHeader.vue';
import Footer from './components/Footer.vue';
import { getMonthlyPayment } from './utils/utils';

const loan = ref<number>()
const monthlyPayment = ref<number>()
const duration = ref<number>()
const apr = ref<number>(2.54)

// Returns monthly payment amount

const monthlyPayment2: ComputedRef<number> = computed<number>(() => getMonthlyPayment(loan.value, apr, years.value))

watch(loan, (new, old) => monthlyPayment2)

// console.log(monthPayment(20000, 2.53, 2))

</script>

<template>
  <!-- Header -->
  <Header />
  <!-- Main -->
  <main class="text-slate-200 flex flex-col items-center gap-y-2 p-5">
    {{ monthlyPayment2 || 0 }}
    <!-- Header for main -->
    <MainHeader />

    <!-- Display and form -->
    <div class="flex shadow-lg shadow-slate-900 rounded-3xl p-10 gap-x-5">
      <!-- Display -->
      <div class="display">
        <!-- display header -->
        <ScreenHeader :monthlyPayment="monthlyPayment" />

        <!-- display body -->
        <ul>
          <!-- TAEG to translate in english -->
          <ScreenRow property="APR" :property-value="apr" property-type="rate" />

          <!-- Loan amount -->
          <ScreenRow property="Loan amount" :property-value="loan" property-type="money" />

          <!-- Total amount to repay -->
          <ScreenRow property="Total amount to repay" :property-value="0" property-type="money" />

          <!-- Loan cost -->
          <ScreenRow property="Loan cost" :property-value="2000" property-type="money" />

          <!-- Expenses for folder -->
          <ScreenRow property="Expenses" property-value="Offered" />
        </ul>
      </div>
      <!-- Form -->
      <div>
        <form>
          <!-- New Total loan -->
          <Field v-model="loan" name="Total loan" subtitle="Between 1 500 and 20 000€" placeholder="20 000€" />
          <!-- Monthly payment -->
          <Field v-model="monthlyPayment" name="Monthly payment" subtitle="Between 100 and 2 000€" placeholder="2 000€"
            :is-disabled="true" />
          <!-- Duration -->
          <Field v-model="duration" name="Duration" subtitle="Between 12 and 120 months" placeholder="20 months" />
        </form>
      </div>
    </div>

  </main>
  <!-- FOOTER -->
  <Footer />
</template>