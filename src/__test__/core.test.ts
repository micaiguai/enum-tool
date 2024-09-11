import { describe, expect, expectTypeOf, it } from 'vitest'
import { SexEnum, SimpleEnum } from './enum'

describe('core', () => {
  it('enum value', () => {
    expect(SimpleEnum.ONE).toMatchInlineSnapshot(`1`)
    expect(SimpleEnum.TWO).toMatchInlineSnapshot(`2`)
    expect(SexEnum.MALE).toMatchInlineSnapshot(`"male"`)
    expect(SexEnum.FEMALE).toMatchInlineSnapshot(`"female"`)
  })
  it('enum get const', () => {
    const oneVo = SimpleEnum.get(SimpleEnum.ONE)
    expect(oneVo).toMatchInlineSnapshot(`
      {
        "key": "ONE",
        "value": 1,
      }
    `)
    const twoVo = SimpleEnum.get(SimpleEnum.TWO)
    expect(twoVo).toMatchInlineSnapshot(`
      {
        "key": "TWO",
        "value": 2,
      }
    `)
    const maleVo = SexEnum.get(SexEnum.MALE)
    expect(maleVo).toMatchInlineSnapshot(`
      {
        "key": "MALE",
        "meta": {
          "desc": "男性",
          "hobbies": [
            "basketball",
            "play game",
          ],
        },
        "value": "male",
      }
    `)
    const femaleVo = SexEnum.get(SexEnum.FEMALE)
    expect(femaleVo).toMatchInlineSnapshot(`
      {
        "key": "FEMALE",
        "meta": {
          "desc": "女性",
          "hobbies": [
            "tennis",
          ],
        },
        "value": "female",
      }
    `)
  })

  it('enum get', () => {
    const unknownStr: 'male' | 'female' | (string & {}) = 'xxx'
    const unknownVo = SexEnum.get(unknownStr)
    expect(unknownVo).toMatchInlineSnapshot(`undefined`)
    if (unknownVo) {
      expectTypeOf(unknownVo.key).toMatchTypeOf<'MALE' | 'FEMALE' | undefined>()
      expectTypeOf(unknownVo.value).toMatchTypeOf<'male' | 'female' | undefined>()
      expectTypeOf(unknownVo.meta.desc).toMatchTypeOf<'男性' | '女性' | undefined>()
      if (unknownVo.key === 'MALE') {
        if ('hobbies' in unknownVo.meta) {
          expectTypeOf(unknownVo.meta.hobbies).toMatchTypeOf<readonly ['basketball', 'play game']>()
        }
      }
    }
  })

  it('enum get all', () => {
    const items = SexEnum.getAll()
    expect(items).toMatchInlineSnapshot(`
      [
        {
          "key": "MALE",
          "meta": {
            "desc": "男性",
            "hobbies": [
              "basketball",
              "play game",
            ],
          },
          "value": "male",
        },
        {
          "key": "FEMALE",
          "meta": {
            "desc": "女性",
            "hobbies": [
              "tennis",
            ],
          },
          "value": "female",
        },
      ]
    `)
  })
})
