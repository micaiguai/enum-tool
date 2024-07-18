import { describe, expect, it } from 'vitest'
import { enumify } from '..'

describe('core', () => {
  const enumOptList = [
    { key: 'MALE', value: 'male', meta: { label: '男' } },
    { key: 'FEMALE', value: 'female' },
  ] as const
  const sexEnum = enumify(enumOptList)

  it('enum value', () => {
    expect(sexEnum.MALE).toMatchInlineSnapshot(`"male"`)
    expect(sexEnum.FEMALE).toMatchInlineSnapshot(`"female"`)
  })

  it('enum info', () => {
    expect(sexEnum(sexEnum.MALE)).toMatchInlineSnapshot(`
      {
        "key": "MALE",
        "meta": {
          "label": "男",
        },
        "value": "male",
      }
    `)
    expect(sexEnum(sexEnum.FEMALE)).toMatchInlineSnapshot(`
      {
        "key": "FEMALE",
        "value": "female",
      }
    `)
  })

  it('enum all', () => {
    const items = sexEnum.all()
    expect(items).toMatchInlineSnapshot(`
      [
        {
          "key": "MALE",
          "meta": {
            "label": "男",
          },
          "value": "male",
        },
        {
          "key": "FEMALE",
          "value": "female",
        },
      ]
    `)
  })
})
