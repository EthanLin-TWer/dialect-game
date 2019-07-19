import { AllEqualsRule } from './rules/all-equals-rule'
import { BasicRule } from './rules/basic-rule'
import { BigStraight } from './rules/big-straight-rule'
import { FourEqualsRule } from './rules/four-equals-rule'
import { FullHouseRule } from './rules/full-house-rule'
import { SmallStraight } from './rules/small-straight-rule'
import { ThreeEqualsRule } from './rules/three-equals-rule'
import { TwoEqualsRule } from './rules/two-equals-rule'
import { TwoPairEqualsRule } from './rules/two-pair-equals-rule'

function getAllRulesFactory(number) {
  return [
    new AllEqualsRule(number),
    new BigStraight(number),
    new SmallStraight(number),
    new FourEqualsRule(number),
    new ThreeEqualsRule(number),
    new TwoEqualsRule(number),
    new TwoPairEqualsRule(number),
    new FullHouseRule(number),
  ]
}

export function calculateScores(numbers) {
  const basicScores = new BasicRule(numbers).calculate()
  const extraScores = getAllRulesFactory(numbers).map((rule) =>
    rule.calculate()
  )

  return basicScores + Math.max(...extraScores)
}
