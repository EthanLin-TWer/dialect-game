import { Rule } from './index'

export class AllEqualsRule extends Rule {
  calculate() {
    const uniqNumbers = [...new Set(this.numbers)]
    return uniqNumbers.length === 1 ? 50 : 0
  }
}
