import { describe, expect, expectTypeOf, it } from 'vitest'
import { enumify } from '..'

describe('core', () => {
  const sexList = [
    { key: 'MALE', value: 'male', label: '男', meta: { desc: '男性' } },
    { key: 'FEMALE', value: 'female', meta: { desc: '女性' } },
  ] as const
  const SexEnum = enumify(sexList)
  const maleVO = SexEnum(SexEnum.MALE)
  it('enum value', () => {
    expect(maleVO).toMatchInlineSnapshot(`
      {
        "key": "MALE",
        "label": "男",
        "meta": {
          "desc": "男性",
        },
        "value": "male",
      }
    `)
    expectTypeOf(maleVO.label).toMatchTypeOf('男')
    expectTypeOf(maleVO.meta.desc).toMatchTypeOf('男性')
  })
})
