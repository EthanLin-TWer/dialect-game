import { Rule } from './index'

// https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
function findDuplicates(numbers) {
  const uniq = numbers
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
export class TwoEqualsRule extends Rule {
  calculate() {
    const duplicates = findDuplicates(this.numbers)

    if (duplicates.length > 0) {
      return Number(Math.max(...duplicates)) * 2
    }

    return 0
  }
}
