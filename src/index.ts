type Item = {
  key: string
  value: unknown
  meta?: {}
}

type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

type GetItem<L extends readonly Item[], V extends unknown> = L extends readonly [infer F extends Item, ...infer R extends Item[]] 
  ? V extends F['value']
    ? F
    : GetItem<R, V>
  : MergeInsertions<Item> | undefined

type EnumInfo<T extends readonly Item[], E = {}> = T extends readonly [infer F extends Item, ...infer R extends Item[]]
  ? EnumInfo<
      R,
      MergeInsertions<E & {
        [K in F['key']]: F['value']
      }>
    >
  : E

export type EnumValue<E extends {}> = MergeInsertions<E> extends Record<string, infer T>
  ? T
  : never

export function enumify<T extends readonly Item[]>(items: T): EnumInfo<T> & (<V>(value: V) => GetItem<T, V>) {
  const obj: any = (value: unknown) => {
    return items.find(item => item.value === value)
  }
  items.forEach(item => {
    obj[item.key] = item.value
  })
  return obj
}
