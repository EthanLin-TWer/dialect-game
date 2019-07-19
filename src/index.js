import { AllEqualsRule } from './rules/all-equals-rule'
import { BasicRule } from './rules/basic-rule'
import { BigStraightRule } from './rules/big-straight-rule'
import { FourEqualsRule } from './rules/four-equals-rule'
import { FullHouseRule } from './rules/full-house-rule'
import { SmallStraightRule } from './rules/small-straight-rule'
import { ThreeEqualsRule } from './rules/three-equals-rule'
import { TwoEqualsRule } from './rules/two-equals-rule'
import { TwoPairEqualsRule } from './rules/two-pair-equals-rule'

// eslint-disable-next-line no-unused-vars
function validate(numbers) {
  // throw new LackOfImplementationTimeException()
}

function getAllRulesFactory(number) {
  return [
    new AllEqualsRule(number),
    new BigStraightRule(number),
    new SmallStraightRule(number),
    new FourEqualsRule(number),
    new ThreeEqualsRule(number),
    new TwoEqualsRule(number),
    new TwoPairEqualsRule(number),
    new FullHouseRule(number),
  ]
}

export function calculateScores(numbers) {
  validate(numbers)

  const basicScores = new BasicRule(numbers).calculate()
  const extraScores = getAllRulesFactory(numbers).map((rule) =>
    rule.calculate()
  )

  return basicScores + Math.max(...extraScores)
}
