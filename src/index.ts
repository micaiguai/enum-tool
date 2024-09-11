export interface EnumItem {
  key: string
  value: unknown
  label?: string
  meta?: object
}

type MergeInsertions<T> =
  // eslint-disable-next-line ts/no-unsafe-function-type
  T extends Function
    ? T
    : T extends object
      ? { [K in keyof T]: MergeInsertions<T[K]> }
      : T

type UnionifyArray<ConstEnumList extends readonly EnumItem[], Splitted extends EnumItem = ConstEnumList[0]> = ConstEnumList extends readonly [infer First extends EnumItem, ...infer Rest extends readonly EnumItem[]]
  ? UnionifyArray<Rest, Splitted | First>
  : Splitted

type GetItem<ConstEnumList extends readonly EnumItem[], V, InferEnumItem> =
  ConstEnumList extends readonly [infer F extends EnumItem, ...infer R extends readonly EnumItem[]]
    ? V extends F['value']
      ? F
      : GetItem<R, V, InferEnumItem>
    : InferEnumItem | undefined

type EnumInfo<T extends readonly EnumItem[], E = object> = T extends readonly [infer F extends EnumItem, ...infer R extends EnumItem[]]
  ? EnumInfo<
    R,
    MergeInsertions<E & {
      [K in F['key']]: F['value']
    }>
  >
  : E

export type EnumValue<E extends object> = MergeInsertions<Omit<E, 'getAll' | 'get'>> extends Record<string, infer T>
  ? T
  : never

type GetAll<T> = () => T

function bindMethods(enumVO: any, items: readonly EnumItem[]) {
  enumVO.getAll = () => {
    return items
  }
  enumVO.get = (value: unknown) => {
    return items.find(item => item.value === value)
  }
}

export function enumify<
  ConstEnumList extends readonly EnumItem[],
>(items: ConstEnumList): MergeInsertions<EnumInfo<ConstEnumList> & { getAll: GetAll<ConstEnumList>, get: (<Val>(value: Val) => GetItem<ConstEnumList, Val, UnionifyArray<ConstEnumList>>) }> {
  const enumVo: any = {}
  items.forEach((item) => {
    enumVo[item.key] = item.value
  })
  bindMethods(enumVo, items)
  return enumVo
}
