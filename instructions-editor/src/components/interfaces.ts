// core types:
export const SchemeType = {
    String: 'STRING',
    Object: 'OBJECT',
    List: 'LIST'
} as const

export type SchemeTypeValues = typeof SchemeType[keyof typeof SchemeType]

export interface InsKVPair {
    key: string,
    value?: Scheme
}

export interface ObjectScheme {
    type: typeof SchemeType.Object
    fields: InsKVPair[]
}

export interface ListScheme {
    type: typeof SchemeType.List
    element_scheme: Scheme,
    path: string
}

export interface StringScheme {
    type: typeof SchemeType.String
    path: string,
    mode: 'INNER_HTML' | 'SRC'
}

export type Scheme = ObjectScheme | StringScheme | ListScheme 

export interface Instructions {
    url: string,
    scheme: Scheme
}