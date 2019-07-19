import { SameNumbersRule } from './internal_same-numbers-rule'

export class ThreeEqualsRule extends SameNumbersRule {
  constructor(numbers) {
    super(numbers, 3)
  }
}
