import { Rule } from './index'

export class TwoEqualsRule extends Rule {
  // https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
  findDuplicates() {
    const uniq = this.numbers
      .map((number) => ({
        count: 1,
        name: number,
      }))
      .reduce((result, b) => {
        result[b.name] = (result[b.name] || 0) + b.count
        return result
      }, {})

    return Object.keys(uniq).filter((a) => uniq[a] > 1)
  }

  calculate() {
    const duplicates = this.findDuplicates()

    if (duplicates.length > 0) {
      return Number(Math.max(...duplicates)) * 2
    }

    return 0
  }
}
