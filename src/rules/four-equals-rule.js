import { SameNumbersRule } from './internal_same-numbers-rule'

export class FourEqualsRule extends SameNumbersRule {
  constructor(numbers) {
    super(numbers, 4)
  }
}
