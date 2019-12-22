import { SameNumbersRule } from './internal_same-numbers-rule'

export class TwoPairEqualsRule extends SameNumbersRule {
  constructor(numbers) {
    super(numbers, 2)
  }

  calculate() {
    const duplicates = this.findDuplicates()

    if (duplicates.length === 2) {
      return duplicates.reduce((total, next) => total + next * 2, 0)
    }

    return 0
  }
}
