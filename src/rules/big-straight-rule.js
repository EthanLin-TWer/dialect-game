import isEqual from 'lodash/isEqual'

import { Rule } from './index'

export class BigStraight extends Rule {
  calculate() {
    const isBigStraight = isEqual(this.numbers, [2, 3, 4, 5, 6])
    return isBigStraight ? 20 : 0
  }
}
