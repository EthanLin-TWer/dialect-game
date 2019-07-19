import { AllEqualsRule } from './rules/all-equals-rule'
import { BasicRule } from './rules/basic-rule'
import { TwoEqualsRule } from './rules/two-equals-rule'

describe('基础分计算 calculateBasicScores', () => {
  it('所有骰子分的总和', () => {
    const numbers = [1, 2, 3, 4, 5]

    const result = new BasicRule(numbers).calculate()

    expect(result).toEqual(15)
  })
})

describe('奖励规则', () => {
  it('规则一：全都相同：如果所有值相同，奖励玩家50分', () => {
    const numbers = [1, 1, 1, 1, 1]

    const result = new AllEqualsRule(numbers).calculate()

    expect(result).toEqual(50)
  })

  it('规则一：全都相同：如果所有值不全相同，则不奖励', () => {
    const numbers = [1, 1, 1, 1, 2]

    const result = new AllEqualsRule(numbers).calculate()

    expect(result).toEqual(0)
  })

  it.skip('规则二：两个相同：如果有两个值相同，奖励这两个数的总和', () => {
    const numbers = [1, 2, 2, 3, 4]

    const result = new TwoEqualsRule(numbers).calculate()

    expect(result).toEqual(4)
  })

  it.skip('规则二：两个相同：如果有多于两个值相同，仅奖励其中两个数的总和', () => {
    const numbers = [1, 2, 2, 2, 3]

    const result = new TwoEqualsRule(numbers).calculate()

    expect(result).toEqual(4)
  })

  it.skip('规则二：两个相同：如果有多于两组值相同，奖励最大一组两个数的总和', () => {
    const numbers = [1, 2, 2, 4, 4]

    const result = new TwoEqualsRule(numbers).calculate()

    expect(result).toEqual(8)
  })
})

describe('完整计算 最终得分', () => {})
