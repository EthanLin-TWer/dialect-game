import { SameNumbersRule } from './internal_same-numbers-rule'

export class FourEqualsRule extends SameNumbersRule {
  constructor(numbers) {
    super(numbers, 4)
  }

  calculate() {
    const occurrence = 4
    const duplicates = this.findDuplicates(occurrence)

    if (duplicates.length > 0) {
      return Number(Math.max(...duplicates)) * occurrence
    }

    return 0
  }
}
