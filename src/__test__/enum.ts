import { enumify } from '..'

const sexList = [
  {
    key: 'MALE',
    value: 'male',
    meta: {
      desc: '男性',
      hobbies: ['basketball', 'play game'],
    },
  },
  {
    key: 'FEMALE',
    value: 'female',
    meta: {
      desc: '女性',
      hobbies: ['tennis'],
    },
  },
] as const

export const SexEnum = enumify(sexList)

const simpleList = [
  { key: 'ONE', value: 1 },
  { key: 'TWO', value: 2 },
] as const

export const SimpleEnum = enumify(simpleList)
