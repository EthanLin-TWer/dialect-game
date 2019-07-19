import { SameNumbersRule } from './internal_same-numbers-rule'

export class ThreeEqualsRule extends SameNumbersRule {
  constructor(numbers) {
    super(numbers, 3)
  }

  calculate() {
    const duplicates = this.findDuplicates()

    if (duplicates.length > 0) {
      return Number(Math.max(...duplicates)) * 3
    }

    return 0
  }
}
