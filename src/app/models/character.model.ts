export interface Data {
  info: Info,
  results: []
}

export interface Info {
  count: number,
  next: string,
  pages: number,
  prev: any
}
