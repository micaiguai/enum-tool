import { describe, expectTypeOf, it } from 'vitest'
import { enumify } from '..'

describe('type', () => {
  const sexList = [
    { key: 'MALE', value: 'male', meta: { label: '男' } },
    { key: 'FEMALE', value: 'female' },
  ] as const
  const SexEnum = enumify(sexList)

  it('enum value', () => {
    expectTypeOf(SexEnum.MALE).toMatchTypeOf<'male'>()
    expectTypeOf(SexEnum.FEMALE).toMatchTypeOf<'female'>()
  })

  it('enum info', () => {
    expectTypeOf(SexEnum(SexEnum.MALE)).toMatchTypeOf<typeof sexList[0]>()
    expectTypeOf(SexEnum(SexEnum.FEMALE)).toMatchTypeOf<typeof sexList[1]>()
  })
})
