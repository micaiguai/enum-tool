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
const SexEnum = enumify([
  { key: 'MALE', value: 'male', meta: { desc: 'male' } },
  { key: 'FEMALE', value: 'female' },
] as const)

// output: 0
// you can get code intelligence here
console.log(SexEnum.MALE)

const maleVo = SexEnum.get(SexEnum.MALE)

// output: male
// you can get code intelligence here
console.log(maleVo.value)

// you can get all enum options by call `getAll` method
const sexList = SexEnum.getAll()
```
The `SexEnum` is equivalent to
```ts
const SexEnum: {
  MALE: 'male'
  FEMALE: 'female'
}
```
The `enumify` is the core function of the library. It accepts the array of `enum` info as params. In single `enum` info obj, the `key` field is matched with the key of `SexEnum`, the `value` is matched with the value of `SexEnum`. You can set custom data in `meta` field.

Call `SexEnum.get` method get the single enum info.

Call `SexEnum.all` method get the all enum info list.

## 👾 Compare code style with tradition
### Not use library
```ts
// init enum
const SexEnum = {
  MALE: 'male',
  FEMALE: 'female'
}

// init enum info list
const sexList = [
  { label: 'man', value: SexEnum.MALE },
  { label: 'woman', value: SexEnum.FEMALE },
]

// mock enum value from backend
const unknownSex = 'unknown'

// render info
if (unknownSex === SexEnum.MALE || unknownSex === SexEnum.FEMALE) {
  // tip: there has no code intelligence with maleVo, you can't get female info in coding
  // you need call find method, it is not concision
  const maleVo = sexList.find(item => item.value === unknownSex)
  render(maleVo)
}
```
### Using library
```ts
// only init and maintain at here
const SexEnum = enumify([
  { key: 'MALE', value: 'male', meta: { label: 'man' } },
  { key: 'FEMALE', value: 'female', meta: { label: 'woman' } }
] as const)

// mock enum value from backend
const unknownSex = 'unknown'

// render info
if (unknownSex === SexEnum.MALE || unknownSex === SexEnum.FEMALE) {
  // you can get code intelligence here
  const unknownVo = SexEnum.get(unknownSex)
  render(unknownVo)
}
```
