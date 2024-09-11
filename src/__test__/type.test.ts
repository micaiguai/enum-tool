import { describe, expectTypeOf, it } from 'vitest'
import { SexEnum, SimpleEnum } from './enum'

describe('type', () => {
  it('enum value', () => {
    expectTypeOf(SimpleEnum.ONE).toMatchTypeOf<1>()
    expectTypeOf(SimpleEnum.TWO).toMatchTypeOf<2>()
    expectTypeOf(SexEnum.MALE).toMatchTypeOf<'male'>()
    expectTypeOf(SexEnum.FEMALE).toMatchTypeOf<'female'>()
  })

  it('enum info', () => {
    const maleVo = SexEnum.get(SexEnum.MALE)
    expectTypeOf(maleVo).toMatchTypeOf<{
      readonly key: 'MALE'
      readonly value: 'male'
      readonly meta: {
        readonly desc: '男性'
        readonly hobbies: readonly ['basketball', 'play game']
      }
    }>()
    const femaleVo = SexEnum.get(SexEnum.FEMALE)
    expectTypeOf(femaleVo).toMatchTypeOf<{
      readonly key: 'FEMALE'
      readonly value: 'female'
      readonly meta: {
        readonly desc: '女性'
        readonly hobbies: readonly ['tennis']
      }
    }>()
  })
})
