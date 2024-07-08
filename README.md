# enum-tool
The purpose of this library is resolving the troubled expressions in actual development.
- It is bother to manage `enum` and info that is associated with the enum.
- No Intelligence in traditional coding.

## 🚀 Features
- 💪 Type Strong: Written in TypeScript

## 🦄 Usage
```ts
import { enumify } from 'enum-tool'

// init enum
const SEX_ENUM = enumify([
  { key: 'MALE', value: 0 },
  { key: 'FEMALE', value: 1, meta: { weight: 'light' } },
] as const)
// output: 0
console.log(SEX_ENUM.MALE)
const femaleInfo = SEX_ENUM(SEX_ENUM.FEMALE)
// output: light
console.log(femaleInfo.meta.weight)
```
The `SEX_ENUM` is equivalent to
```ts
const SEX_ENUM: {
  MALE: 0
  FEMALE: 1
}
```
The `SEX_ENUM` is also a function. It takes single `enum` value as params, return the associated info.

## 📦 Install
``` bash
npm i enum-tool
```