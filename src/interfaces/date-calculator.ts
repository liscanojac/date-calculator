export interface TimeDifference {
  years: {
    total: number
    months: number
    months_days: number
    weeks: number
    weeks_days: number
  }
  months: {
    total: number
    weeks: number
    weeks_days: number
    days: number
  }
  weeks: {
    total: number
    days: number
  }
  days: {
    total: number
  }
}

export interface DateOptions {
  y_m_d: boolean
  m_d: boolean
  d: boolean
  w_d: boolean
}

export interface TimeTravelOptionsBase {
  years: number
  months: number
  weeks: number
  days: number
}

type TimeTravelMethod = (dateToAdd: Date, n: number) => Date

export interface TimeTravelMethods {
  years: TimeTravelMethod
  months: TimeTravelMethod
  weeks: TimeTravelMethod
  days: TimeTravelMethod
}

export interface TimeTravelOptions extends TimeTravelOptionsBase {
  past: boolean
}

export type DateOptionKey = 'y_m_d' | 'm_d' | 'w_d' | 'd'

export type DateMethod = (startDate: Date, endDate: Date) => Date

export type TimeDifferenceMethods = {
  y_m_d: Array<DateMethod>
  m_d: Array<DateMethod>
  d: Array<DateMethod>
  w_d: Array<DateMethod>
}

export interface DateDifferenceObject {
  y_m_d: string
  m_d: string
  d: string
  w_d: string
}

export interface formatTimeMethods {
  y_m_d: () => string
  m_d: () => string
  d: () => string
  w_d: () => string
}
