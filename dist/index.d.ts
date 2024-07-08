type Item = {
    key: string;
    value: unknown;
};
type MergeInsertions<T> = T extends object ? {
    [K in keyof T]: MergeInsertions<T[K]>;
} : T;
type GetItem<L extends readonly Item[], V extends unknown> = L extends readonly [infer F extends Item, ...infer R extends Item[]] ? V extends F['value'] ? F : GetItem<R, V> : never;
type EnumInfo<T extends readonly Item[], E = {}> = T extends readonly [infer F extends Item, ...infer R extends Item[]] ? EnumInfo<R, MergeInsertions<E & {
    [K in F['key']]: F['value'];
}>> : E;
declare function enumify<T extends readonly Item[]>(items: T): EnumInfo<T> & (<V>(value: V) => GetItem<T, V>);

export { enumify };
