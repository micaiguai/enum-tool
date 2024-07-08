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

## 🦄 Usage
```ts
import { enumify } from 'enum-tool'

// init enum
// tip: you must use `as const` at the end of array.
//      you can also use /** @type {const} */ in javascript develop environment
const SEX_ENUM = enumify([
  { key: 'MALE', value: 0, meta: { label: 'man' } },
  { key: 'FEMALE', value: 1, meta: { label: 'female' } },
] as const)

// output: 0
// you can get code intelligence here
console.log(SEX_ENUM.MALE)

const femaleInfo = SEX_ENUM(SEX_ENUM.FEMALE)

// output: female
// you can get code intelligence here
console.log(femaleInfo.meta.label)
```
The `SEX_ENUM` is equivalent to
```ts
const SEX_ENUM: {
  MALE: 0
  FEMALE: 1
}
```
The `enumify` is the core function of the library. It takes a array as params that describe the info of a bunch of `enum`.In single `enum` info obj, the `key` field is matched with the key of `SEX_ENUM`, the `value` is matched with the value of `SEX_ENUM`. You can set custom data in `meta` field.

The `SEX_ENUM` is also a function. It takes single `enum` value as params, return associated info.

## 👾 Compare with traditional code
Not use library
```ts
// init enum
const SEX_ENUM = {
  MALE: 0,
  FEMALE: 1
}

// init enum info
const sexList = [
  { label: 'man', value: SEX_ENUM.MALE },
  { label: 'woman', value: SEX_ENUM.FEMALE },
]

// mock enum value from backend
const unknownSex = 0

// render
if (unknownSex === SEX_ENUM.MALE) {
  // tip: there has no code intelligence, you can't get female info in coding
  const femaleInfo = SEX_ENUM(SEX_ENUM.FEMALE)
  render(femaleInfo)
}
```
Using library
```ts
// only init at here
const SEX_ENUM = enumify([
  { key: 'MALE', value: 0, meta: { label: 'man' } },
  { key: 'FEMALE', value: 1, meta: { label: 'woman' } }
] as const)

// mock enum value from backend
const unknownSex = 0

// render female info
if (unknownSex === SEX_ENUM.MALE) {
  // you can get code intelligence here
  const femaleInfo = SEX_ENUM(SEX_ENUM.FEMALE)
  render(femaleInfo)
}
```
