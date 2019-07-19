import { SameNumbersRule } from './internal_same-numbers-rule'

export class FourEqualsRule extends SameNumbersRule {
  calculate() {
    const occurrence = 4
    const duplicates = this.findDuplicates(occurrence)

    if (duplicates.length > 0) {
      return Number(Math.max(...duplicates)) * occurrence
    }

    return 0
  }
}
