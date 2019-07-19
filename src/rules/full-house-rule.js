import { SameNumbersRule } from './internal_same-numbers-rule'

export class FullHouseRule extends SameNumbersRule {
  calculate() {
    const threeOfAKind = this.findExactDuplicates(3)
    const aPair = this.findExactDuplicates(2)

    if (threeOfAKind.length === 0 || aPair.length === 0) {
      return 0
    }

    const [three] = threeOfAKind
    const [two] = aPair
    if (three === two) {
      return 0
    }

    return Number(three) * 3 + Number(two) * 2
  }
}
