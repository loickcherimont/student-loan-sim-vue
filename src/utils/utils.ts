export function getMonthlyPayment(loan: number, apr: number, years: number): number {

    // Type the different any precisely!!

    // The amount of user's loan

    // Year rate
    const t: number = (apr / 100) / 12
    
    const numerator: number = loan * t
    const denominator: number = 1 - Math.pow(1 + t, -years * 12)
    return numerator / denominator
}