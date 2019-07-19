import { SameNumbersRule } from './internal_same-numbers-rule'

export class TwoEqualsRule extends SameNumbersRule {
  constructor(numbers) {
    super(numbers, 2)
  }
}
