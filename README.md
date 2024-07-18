# enum-tool
The purpose of this library is resolving the troubled expressions in actual development.
- It is bother to manage `enum` and info that is associated with the enum.
- No Intelligence in traditional coding.

## 🚀 Features
- 💪 Type Strong: Written in TypeScript
- 💡 Code Intelligence: Powered by Typescript

## 📦 Install
``` bash
npm i enum-tool
```

## 🦄 Full Usage
```ts
import { enumify } from 'enum-tool'

// init enum
// tip: you must use `as const` at the end of array.
//      you can also use /** @type {const} */ in javascript develop environment
const sexEnum = enumify([
  { key: 'MALE', value: 'male', meta: { label: 'man' } },
  { key: 'FEMALE', value: 'female', meta: { label: 'woman' } },
] as const)

// output: 0
// you can get code intelligence here
console.log(sexEnum.MALE)

const femaleInfo = sexEnum(sexEnum.FEMALE)

// output: female
// you can get code intelligence here
console.log(femaleInfo.meta.label)

// you can extract all enum options by call `all` method
const items = sexEnum.all()
```
The `sexEnum` is equivalent to
```ts
const sexEnum: {
  MALE: 'male'
  FEMALE: 'female'
}
```
The `enumify` is the core function of the library. It accepts the array of `enum` info as params. In single `enum` info obj, the `key` field is matched with the key of `sexEnum`, the `value` is matched with the value of `sexEnum`. You can set custom data in `meta` field.

The `sexEnum` is the return of `enumify` function. It is a enumLike object, and also a function. It can accept single `enum` value as params, then return associated `enum` info.

If you want get the array of `enum` info, you can call `sexEnum.all` method.

## 👾 Compare with traditional code
Not use library
```ts
// init and maintain enum
const sexEnum = {
  MALE: 'male',
  FEMALE: 'female'
}

// init and maintain enum info
const sexList = [
  { label: 'man', value: sexEnum.MALE },
  { label: 'woman', value: sexEnum.FEMALE },
]

// mock enum value from backend
const unknownSex = 'male'

// render
if (unknownSex === sexEnum.MALE) {
  // tip: there has no code intelligence, you can't get female info in coding
  // you need call find method, it is not concision
  const femaleInfo = sexList.find(item => item.value === unknownSex)
  render(femaleInfo)
}
```
Using library
```ts
// only init and maintain at here
const sexEnum = enumify([
  { key: 'MALE', value: 0, meta: { label: 'man' } },
  { key: 'FEMALE', value: 1, meta: { label: 'woman' } }
] as const)

// mock enum value from backend
const unknownSex = 0

// render female info
if (unknownSex === sexEnum.MALE) {
  // you can get code intelligence here
  const femaleInfo = sexEnum(sexEnum.FEMALE)
  render(femaleInfo)
}
```
