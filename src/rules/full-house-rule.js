import { SameNumbersRule } from './internal_same-numbers-rule'

export class FullHouseRule extends SameNumbersRule {
  calculate() {
    const [threeOfAKind] = this.findExactDuplicates(3)
    const [aPair] = this.findExactDuplicates(2)

    if (!threeOfAKind || !aPair) {
      return 0
    }

    return Number(threeOfAKind) * 3 + Number(aPair) * 2
  }
}
