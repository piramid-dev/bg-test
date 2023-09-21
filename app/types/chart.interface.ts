import type { Maybe } from '~/lib/generated'

export interface IChartProps {
  title?: Maybe<string>
  locked?: boolean
  suggestedUse?: Maybe<string>
  chartData: number[]
  meanData?: number[]
  chartLabels: (Maybe<string> | undefined)[]
}
