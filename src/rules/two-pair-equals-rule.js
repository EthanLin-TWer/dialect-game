import { TwoEqualsRule } from './two-equals-rule'

export class TwoPairEqualsRule extends TwoEqualsRule {
  calculate() {
    const duplicates = this.findDuplicates()

    if (duplicates.length === 2) {
      return duplicates
        .map((duplicated) => Number(duplicated) * 2)
        .reduce((total, next) => total + next, 0)
    }

    return 0
  }
}
