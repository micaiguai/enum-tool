import { describe, expectTypeOf, it } from 'vitest'
import { enumify } from '..'

describe('type', () => {
  const enumOptList = [
    { key: 'MALE', value: 'male', meta: { label: '男' } },
    { key: 'FEMALE', value: 'female' },
  ] as const
  const sexEnum = enumify(enumOptList)

  it('enum value', () => {
    expectTypeOf(sexEnum.MALE).toMatchTypeOf<'male'>()
    expectTypeOf(sexEnum.FEMALE).toMatchTypeOf<'female'>()
  })

  it('enum info', () => {
    expectTypeOf(sexEnum(sexEnum.MALE)).toMatchTypeOf<typeof enumOptList[0]>()
    expectTypeOf(sexEnum(sexEnum.FEMALE)).toMatchTypeOf<typeof enumOptList[1]>()
  })
})
