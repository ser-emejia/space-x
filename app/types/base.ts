interface QueryMeta {
  success?: boolean;
}

interface OptionsMeta {
  limit?: number;
}

export interface BaseQueryPayload {
  query: QueryMeta;
  options: OptionsMeta;
}
