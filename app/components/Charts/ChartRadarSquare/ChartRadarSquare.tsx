import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import type { FC } from 'react'
import { Radar } from 'react-chartjs-2'
import { useTranslation } from 'react-i18next'

import type { IChartProps } from '../../../types/chart.interface'
import ChartCard from '../ChartCard/ChartCard'
import {
  MixBlendModeMultiply,
  chartTwoDataCustomTooltipHandler,
} from '../../../lib/chart.utils'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartDataLabels,
)

const ChartRadarSquare: FC<IChartProps> = ({
  title,
  locked = false,
  suggestedUse,
  chartData,
  meanData,
  chartLabels,
}) => {
  const { t } = useTranslation()

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: t('chart.mean-data'),
        data: meanData,
        backgroundColor: '#ECECE5',
        borderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 20,
        pointHoverBackgroundColor: 'transparent',
        pointHoverBorderColor: 'transparent',
        datalabels: {
          labels: {
            title: '',
            value: '',
          },
        },
      },
      {
        label: t('chart.chart-data'),
        data: chartData,
        backgroundColor: '#FFE500',
        borderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 20,
        pointHoverBackgroundColor: 'transparent',
        pointHoverBorderColor: 'transparent',
        datalabels: {
          font: {
            weight: 'bold',
            size: 14,
          },
        },
      },
    ],
  } as any

  const options = {
    mantainAspectRatio: true,
    layout: {
      padding: { left: 30, right: 30 },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          borderDash: (context: any) => (context.index == 6 ? [] : [6, 4]),
        },
        pointLabels: {
          display: false,
        },
        ticks: {
          display: false, // Hides the labels in the middle (numbers)
          maxTicksLimit: 1,
        },
        beginAtZero: true,
        max: 11,
        min: 0,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: chartTwoDataCustomTooltipHandler,
      },
    },
    deferred: {
      yOffset: '70%',
    },
  } as any

  //TODO: rotate labels https://stackoverflow.com/questions/75538096/chart-js-rotate-label-text-on-radar-chart-is-it-possible

  return (
    <ChartCard title={title} locked={locked} suggestedUse={suggestedUse}>
      <div className="absolute left-1/2 top-0 -mt-2 -translate-x-1/2 text-xs uppercase text-black/70">
        {chartLabels[0]}
      </div>
      <div className="absolute -right-14 top-1/2 mr-4 -rotate-90 -translate-y-1/2 text-xs uppercase text-black/70">
        {chartLabels[1]}
      </div>
      <div className="absolute bottom-0 left-1/2 -mb-2 -translate-x-1/2 text-xs uppercase text-black/70">
        {chartLabels[2]}
      </div>
      <div className="absolute left-0 top-1/2 -ml-4 -rotate-90 -translate-y-1/2 text-xs uppercase text-black/70">
        {chartLabels[3]}
      </div>
      <Radar
        className="relative mt-8 w-full"
        data={data}
        options={options}
        plugins={[MixBlendModeMultiply]}
      />
    </ChartCard>
  )
}

export default ChartRadarSquare
