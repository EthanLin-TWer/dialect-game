import { SameNumbersRule } from './internal_same-numbers-rule'

export class TwoEqualsRule extends SameNumbersRule {
  calculate() {
    const duplicates = this.findDuplicates()

    if (duplicates.length > 0) {
      return Number(Math.max(...duplicates)) * 2
    }

    return 0
  }
}
