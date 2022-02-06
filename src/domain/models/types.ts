enum SelectTypeEnum { start = 'start', end = 'end', data = 'data', span = 'span'}

export type SelectType = keyof typeof SelectTypeEnum

export type Start = {
  type: SelectType
  timestamp: number
  select: string[]
  group: string[]
}

export type Span = {
  type: SelectType
  timestamp: number
  begin: number
  end: number
}

export type Data = {
  type: SelectType
  timestamp: number
}

export type Stop = {
  type: SelectType
  timestamp: number
}
