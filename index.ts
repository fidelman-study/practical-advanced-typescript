// population of africa 1287269147
const africaPop = 1_287_269_147;

class AmountInput {
  private static MAX_ALLOWED = 99_999_999
  amount: number = 0

  showTooltip(): void {
    setTimeout((): void => {

    }, 2_500)
  }

  formatMillion(): string {
    return this.amount / 1_000_000 + 'M'
  }
}