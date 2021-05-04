export type FetchData<TData, TInput = unknown> = (
  input?: TInput,
) => Promise<TData>;

export type LangMeta = Record<string, string>;
