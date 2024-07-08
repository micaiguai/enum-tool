import { enumify } from '../dist/index.js'

const items = [
  { key: 'MALE', value: 0, meta: { label: '男' } },
  { key: 'FEMALE', value: 1 },
] as const

const SEX_ENUM = enumify(items)
const maleInfo = SEX_ENUM(SEX_ENUM.MALE)
const femaleInfo = SEX_ENUM(SEX_ENUM.FEMALE)
// output: SEX_ENUM : [Function: obj] { MALE: 0, FEMALE: 1 }
console.log('SEX_ENUM :', SEX_ENUM)
// output: maleInfo : { key: 'MALE', value: 0, meta: { label: '男' } }
console.log('maleInfo :', maleInfo)
// output: femaleInfo : { key: 'FEMALE', value: 1 }
console.log('femaleInfo :', femaleInfo)

