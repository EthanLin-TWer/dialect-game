import { calculateScores } from './index'
import { AllEqualsRule } from './rules/all-equals-rule'
import { BasicRule } from './rules/basic-rule'
import { BigStraightRule } from './rules/big-straight-rule'
import { FourEqualsRule } from './rules/four-equals-rule'
import { FullHouseRule } from './rules/full-house-rule'
import { SmallStraightRule } from './rules/small-straight-rule'
import { ThreeEqualsRule } from './rules/three-equals-rule'
import { TwoEqualsRule } from './rules/two-equals-rule'
import { TwoPairEqualsRule } from './rules/two-pair-equals-rule'

describe('基础分计算', () => {
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

  it('规则二：两个相同：如果有两个值相同，奖励这两个数的总和', () => {
    const numbers = [1, 2, 2, 3, 4]

    const result = new TwoEqualsRule(numbers).calculate()

    expect(result).toEqual(4)
  })

  it('规则二：两个相同：如果有多于两个值相同，仅奖励其中两个数的总和', () => {
    const numbers = [1, 2, 2, 2, 3]

    const result = new TwoEqualsRule(numbers).calculate()

    expect(result).toEqual(4)
  })

  it('规则二：两个相同：如果有多于两组值相同，奖励最大一组两个数的总和', () => {
    const numbers = [1, 2, 2, 4, 4]

    const result = new TwoEqualsRule(numbers).calculate()

    expect(result).toEqual(8)
  })

  it('规则二：两个相同：如果没有两个以上相同的值，则不奖励', () => {
    const numbers = [1, 2, 3, 4, 5]

    const result = new TwoEqualsRule(numbers).calculate()

    expect(result).toEqual(0)
  })

  it('规则三：两个两个相同：如果有两对相同的值，奖励两对相同数字的总和', () => {
    const numbers = [1, 1, 2, 2, 3]

    const result = new TwoPairEqualsRule(numbers).calculate()

    expect(result).toEqual(6)
  })

  it('规则三：两个两个相同：如果有两对相同的值，其中一对有三个值相等，也仅奖励其中两对相同数字的总和', () => {
    const numbers = [1, 1, 2, 2, 2]

    const result = new TwoPairEqualsRule(numbers).calculate()

    expect(result).toEqual(6)
  })

  it('规则三：两个两个相同：若不存在两对相同的值，则不奖励', () => {
    const numbers = [1, 1, 2, 3, 4]

    const result = new TwoPairEqualsRule(numbers).calculate()

    expect(result).toEqual(0)
  })

  it('规则四：三个相同：若存在三个相同的数字，则奖励该三个数字的总和', () => {
    const numbers = [1, 3, 3, 3, 3]

    const result = new ThreeEqualsRule(numbers).calculate()

    expect(result).toEqual(9)
  })

  it('规则四：三个相同：若存在三个以上相同的数字，也仅奖励其中三个数字的总和', () => {
    const numbers = [1, 3, 3, 3, 5]

    const result = new ThreeEqualsRule(numbers).calculate()

    expect(result).toEqual(9)
  })

  it('规则四：三个相同：若不存在三个相同的数字，则不奖励', () => {
    const numbers = [1, 1, 2, 3, 4]

    const result = new ThreeEqualsRule(numbers).calculate()

    expect(result).toEqual(0)
  })

  it('规则五：四个相同：若存在四个相同的数字，则奖励这四个数字的总和', () => {
    const numbers = [3, 3, 3, 3, 5]

    const result = new FourEqualsRule(numbers).calculate()

    expect(result).toEqual(12)
  })

  it('规则五：四个相同：若存在四个以上相同的数字，也仅奖励其中四个数字的总和', () => {
    const numbers = [3, 3, 3, 3, 3]

    const result = new FourEqualsRule(numbers).calculate()

    expect(result).toEqual(12)
  })

  it('规则五：四个相同：若不存在四个以上相同的数字，则不奖励', () => {
    const numbers = [3, 3, 3, 4, 4]

    const result = new FourEqualsRule(numbers).calculate()

    expect(result).toEqual(0)
  })

  it('规则六：小顺子：1, 2, 3, 4, 5 奖励15分', () => {
    const numbers = [1, 2, 3, 4, 5]

    const result = new SmallStraightRule(numbers).calculate()

    expect(result).toEqual(15)
  })

  it('规则六：小顺子：1, 2, 4, 3, 5 奖励15分', () => {
    const numbers = [1, 2, 4, 3, 5]

    const result = new SmallStraightRule(numbers).calculate()

    expect(result).toEqual(15)
  })

  it('规则六：小顺子：不是小顺子，则不奖励', () => {
    const numbers = [2, 3, 4, 5, 6]

    const result = new SmallStraightRule(numbers).calculate()

    expect(result).toEqual(0)
  })

  it('规则七：大顺子：2, 3, 4, 5, 6 奖励20分', () => {
    const numbers = [2, 3, 4, 5, 6]

    const result = new BigStraightRule(numbers).calculate()

    expect(result).toEqual(20)
  })

  it('规则七：大顺子：不是大顺子，则不奖励', () => {
    const numbers = [1, 2, 3, 4, 5]

    const result = new BigStraightRule(numbers).calculate()

    expect(result).toEqual(0)
  })

  it('规则八：三同点加一对：若存在三个相同的点数加不相同的一对，奖励其五个数字的总和', () => {
    const numbers = [3, 3, 3, 4, 4]

    const result = new FullHouseRule(numbers).calculate()

    expect(result).toEqual(17)
  })

  it('规则八：三同点加一对：若存在三个相同的点数加相同的一对（即五个点数完全相同），则不奖励', () => {
    const numbers = [3, 3, 3, 3, 3]

    const result = new FullHouseRule(numbers).calculate()

    expect(result).toEqual(0)
  })

  it('规则八：三同点加一对：若不存在三个相同的点数加不相同的一对，则不奖励', () => {
    const numbers = [3, 3, 3, 3, 4]

    const result = new FullHouseRule(numbers).calculate()

    expect(result).toEqual(0)
  })
})

describe('完整计算 最终得分', () => {
  it('只有基本分数', () => {
    const numbers = [1, 2, 3, 4, 6]

    const result = calculateScores(numbers)

    expect(result).toEqual(16)
  })

  it('基本分数 + 两对奖励', () => {
    const numbers = [1, 2, 2, 4, 4]

    const result = calculateScores(numbers)

    expect(result).toEqual(25)
  })

  it('基本分数 + max(两对奖励，三个相同奖励)', () => {
    const numbers = [3, 3, 5, 3, 5]

    const result = calculateScores(numbers)

    expect(result).toEqual(38)
  })

  it('基本分数 + 五个相同奖励', () => {
    const numbers = [6, 6, 6, 6, 6]

    const result = calculateScores(numbers)

    expect(result).toEqual(80)
  })
})
