import isEqual from 'lodash/isEqual'

import { Rule } from './index'

export class SmallStraightRule extends Rule {
  calculate() {
    const isSmallStraight = isEqual(this.numbers, [1, 2, 3, 4, 5])
    return isSmallStraight ? 15 : 0
  }
}
