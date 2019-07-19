import { Rule } from './index'

export class BasicRule extends Rule {
  calculate() {
    return this.numbers.reduce((total, next) => total + next, 0)
  }
}
