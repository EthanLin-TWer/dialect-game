// this should be an abstract and internal class that shouldn't be exported outside of this package, but since JavaScript doesn't have package scope, I can only express this in the file naming
import { Rule } from './index'

export class SameNumbersRule extends Rule {
  // https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
  findDuplicates(occurrence = 2) {
    const uniq = this.numbers
      .map((number) => ({
        count: 1,
        name: number,
      }))
      .reduce((result, b) => {
        result[b.name] = (result[b.name] || 0) + b.count
        return result
      }, {})

    return Object.keys(uniq).filter((a) => uniq[a] >= occurrence)
  }

  // eslint-disable-next-line class-methods-use-this
  calculate() {
    throw new Error(
      'sub class responsibility, making this class only to reuse the findDuplicates()'
    )
  }
}
