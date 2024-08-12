interface Item {
  key: string
  value: unknown
  meta?: object
}

type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

type GetItem<L extends readonly Item[], V> = L extends readonly [infer F extends Item, ...infer R extends Item[]]
  ? V extends F['value']
    ? F
    : GetItem<R, V>
  : MergeInsertions<Item> | undefined

type EnumInfo<T extends readonly Item[], E = object> = T extends readonly [infer F extends Item, ...infer R extends Item[]]
  ? EnumInfo<
    R,
    MergeInsertions<E & {
      [K in F['key']]: F['value']
    }>
  >
  : E

export type EnumValue<E extends object> = MergeInsertions<Omit<E, 'all'>> extends Record<string, infer T>
  ? T
  : never

type AllMethod<T> = () => T

function bindMethods<T, R extends { all: AllMethod<T> }>(functionalObj: R, items: T) {
  functionalObj.all = () => {
    return items
  }
}

export function enumify<
  T extends readonly Item[],
  O extends EnumInfo<T>,
  F extends (<V>(value: V) => GetItem<T, V>),
  R extends O & { all: AllMethod<T> } & F,
>(items: T): R {
  const functionalObj: any = function (value: unknown) {
    return items.find(item => item.value === value)
  }
  items.forEach((item) => {
    functionalObj[item.key] = item.value
  })
  bindMethods<T, R>(functionalObj, items)
  return functionalObj
}
