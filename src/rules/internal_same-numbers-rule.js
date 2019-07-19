// this should be an abstract and internal class that shouldn't be exported outside of this package, but since JavaScript doesn't have package scope, I can only express this in the file naming
import { Rule } from './index'

export class SameNumbersRule extends Rule {
  // https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
  constructor(numbers, occurrence = 2) {
    super(numbers)
    this.occurrence = occurrence
  }

  findDuplicates() {
    const uniq = this._findOccurrenceCounts()
    return Object.keys(uniq).filter((a) => uniq[a] >= this.occurrence)
  }

  findExactDuplicates(occurrence) {
    const uniq = this._findOccurrenceCounts()
    return Object.keys(uniq).filter((a) => uniq[a] === occurrence)
  }

  _findOccurrenceCounts() {
    return this.numbers
      .map((number) => ({
        count: 1,
        name: number,
      }))
      .reduce((result, b) => {
        result[b.name] = (result[b.name] || 0) + b.count
        return result
      }, {})
  }

  calculate() {
    const duplicates = this.findDuplicates(this.occurrence)

    if (duplicates.length > 0) {
      return Number(Math.max(...duplicates)) * this.occurrence
    }

    return 0
  }
}
