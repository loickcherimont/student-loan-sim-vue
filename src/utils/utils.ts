// Returns the monthly amount that client must repay to bank
export function getMonthlyPayment(loan: number, apr: number, years: number): number {

    const monthlyRate: number = (apr / 100) / 12
    
    const numerator: number = loan * monthlyRate
    const denominator: number = 1 - 1 / Math.pow(1 + monthlyRate, years * 12)
    return Number((numerator / denominator).toFixed(2))
}