import { enumify } from '../dist/index.js'

const items = [
  { key: 'MALE', value: 0, meta: { label: '男' } },
  { key: 'FEMALE', value: 1 },
] as const

const sexEnum = enumify(items)
const maleInfo = sexEnum(sexEnum.MALE)
const femaleInfo = sexEnum(sexEnum.FEMALE)
// output: sexEnum : [Function: obj] { MALE: 0, FEMALE: 1 }
console.log('sexEnum :', sexEnum)
// output: maleInfo : { key: 'MALE', value: 0, meta: { label: '男' } }
console.log('maleInfo :', maleInfo)
// output: femaleInfo : { key: 'FEMALE', value: 1 }
console.log('femaleInfo :', femaleInfo)

