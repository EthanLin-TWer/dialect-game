import isEqual from 'lodash/isEqual'

import { Rule } from './index'

export class SmallStraightRule extends Rule {
  calculate() {
    const inOrder = [...this.numbers].sort()
    return isEqual(inOrder, [1, 2, 3, 4, 5]) ? 15 : 0
  }
}
