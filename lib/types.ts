export type DeepPartial<T> = {
  [P in keyof T]?: unknown extends T[P]
    ? T[P]
    : T[P] extends Array<any>
    ? T[P]
    : DeepPartial<T[P]>;
};

export type GeneratorFnOptions<T, I> = {
  sequence: number;
  afterBuild: (fn: HookFn<T>) => any;
  onCreate: (fn: CreateFn<T>) => any;
  params: DeepPartial<T>;
  associations: Partial<T>;
  transientParams: Partial<I>;
};
export type GeneratorFn<T, I> = (opts: GeneratorFnOptions<T, I>) => T;
export type HookFn<T> = (object: T) => any;
export type CreateFn<T> = (object: T) => Promise<T>;
export type BuildOptions<T, I> = {
  associations?: Partial<T>;
  transient?: Partial<I>;
};

export type Diff<TBase extends {}, TExtended extends TBase> = {
  [Key in keyof TExtended as Key extends keyof TBase
    ? TBase[Key] extends TExtended[Key]
      ? never
      : Key
    : Key]: TExtended[Key];
};
