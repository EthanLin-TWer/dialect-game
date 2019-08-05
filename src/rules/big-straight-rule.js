import isEqual from 'lodash/isEqual'

import { Rule } from './index'

export class BigStraightRule extends Rule {
  calculate() {
    const inOrder = [...this.numbers].sort()
    return isEqual(inOrder, [2, 3, 4, 5, 6]) ? 20 : 0
  }
}
