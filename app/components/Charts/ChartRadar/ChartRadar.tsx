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

const ChartRadar: FC<IChartProps> = ({
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
      padding: 20,
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
      deferred: {
        yOffset: '70%',
      },
    },
  } as any

  //TODO: rotate labels https://stackoverflow.com/questions/75538096/chart-js-rotate-label-text-on-radar-chart-is-it-possible

  return (
    <ChartCard title={title} locked={locked} suggestedUse={suggestedUse}>
      <Radar
        className="relative w-full"
        data={data}
        options={options}
        plugins={[MixBlendModeMultiply]}
      />
    </ChartCard>
  )
}

export default ChartRadar
