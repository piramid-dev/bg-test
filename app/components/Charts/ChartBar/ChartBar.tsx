import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import type { FC } from 'react'
import { Scatter } from 'react-chartjs-2'
import { useTranslation } from 'react-i18next'

import type { IChartProps } from '../../../types/chart.interface'
import ChartCard from '../ChartCard/ChartCard'
import {
  MixBlendModeMultiply,
  chartBarTooltipHandler,
} from '../../../lib/chart.utils'

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  ChartDataLabels,
  Tooltip,
  Legend,
  Filler,
)

const MAGIC_NUMBERS = {
  MAX_VALUE: 10,
  SPACE_SIZE: 0.5,
}

const ChartBar: FC<IChartProps> = ({
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
      ...chartLabels
        .map((label, i) => {
          const space = [
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                (chartLabels.length - i),
              x: 0,
              label,
            },
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - i) -
                MAGIC_NUMBERS.SPACE_SIZE,
              x: 0,
            },
          ]

          const firstData = [
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - i) -
                MAGIC_NUMBERS.SPACE_SIZE,
              x: 0,
            },
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - i) -
                MAGIC_NUMBERS.MAX_VALUE / (chartLabels.length * 2),
              x: chartData ? chartData[i] : 0,
              value: chartData ? chartData[i] : 0,
              label,
            },
          ]

          const secondData = [
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - i) -
                MAGIC_NUMBERS.MAX_VALUE / (chartLabels.length * 2),
              x: chartData ? chartData[i] : 0,
            },
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - (i + 1)) +
                MAGIC_NUMBERS.SPACE_SIZE,
              x: 0,
            },
          ]

          return [
            {
              label: t('chart.space-data'),
              data: space,
              fill: null,
              pointRadius: 0,
              pointHitRadius: 0,
              datalabels: {
                labels: {
                  title: {
                    color: '#000000B3', // black 70%
                    weight: 'bold',
                    textAlign: 'left',
                    font: {
                      size: 12,
                    },
                    padding: {
                      bottom: -4,
                    },
                    formatter: function (value: any, context: any) {
                      return (value.label || '').toString().toUpperCase()
                    },
                  },
                  value: '',
                },
                align: 45,
                offset: -4,
                clamp: true,
              },
            },
            {
              label: t('chart.mean-data'),
              data: firstData,
              fill: {
                value:
                  (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                    (chartLabels.length - i) -
                  MAGIC_NUMBERS.MAX_VALUE / (chartLabels.length * 2),
              },
              backgroundColor: '#FFE500',
              borderColor: '#FFE500',
              showLine: true,
              borderWidth: 0,
              lineTension: 0,
              pointRadius: 0,
              pointHitRadius: 20,
              pointHoverBackgroundColor: 'transparent',
              pointHoverBorderColor: 'transparent',
              datalabels: {
                labels: {
                  title: '',
                  value: {
                    color: 'black',
                    textAlign: 'center',
                    rotation: 0,
                    font: {
                      size: 14,
                      weight: 'bold',
                    },
                    formatter: function (value: any, context: any) {
                      return (value.value || '').toString().toUpperCase()
                    },
                  },
                },
                anchor: 'bottom',
                rotation: -90,
              },
            },
            {
              label: t('chart.chart-data'),
              data: secondData,
              fill: {
                value:
                  (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                    (chartLabels.length - i) -
                  MAGIC_NUMBERS.MAX_VALUE / (chartLabels.length * 2),
              },
              backgroundColor: '#FFE500',
              borderColor: '#FFE500',
              showLine: true,
              borderWidth: 0,
              lineTension: 0,
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
          ]
        })
        .flat(),
      ...chartLabels
        .map((label, i) => {
          const space = [
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                (chartLabels.length - i),
              x: 0,
            },
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - i) -
                MAGIC_NUMBERS.SPACE_SIZE,
              x: 0,
            },
          ]

          const firstData = [
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - i) -
                MAGIC_NUMBERS.SPACE_SIZE,
              x: 0,
            },
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - i) -
                MAGIC_NUMBERS.MAX_VALUE / (chartLabels.length * 2),
              x: meanData ? meanData[i] : 0,
            },
          ]

          const secondData = [
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - i) -
                MAGIC_NUMBERS.MAX_VALUE / (chartLabels.length * 2),
              x: meanData ? meanData[i] : 0,
            },
            {
              y:
                (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                  (chartLabels.length - (i + 1)) +
                MAGIC_NUMBERS.SPACE_SIZE,
              x: 0,
            },
          ]

          return [
            {
              label: t('chart.space-data'),
              data: space,
              fill: null,
              pointRadius: 0,
              pointHitRadius: 0,
              datalabels: {
                labels: {
                  title: '',
                  value: '',
                },
              },
            },
            {
              label: t('chart.mean-data'),
              data: firstData,
              fill: {
                value:
                  (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                    (chartLabels.length - i) -
                  MAGIC_NUMBERS.MAX_VALUE / (chartLabels.length * 2),
              },
              backgroundColor: '#ECECE5',
              borderColor: '#ECECE5',
              showLine: true,
              borderWidth: 0,
              lineTension: 0,
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
              data: secondData,
              fill: {
                value:
                  (MAGIC_NUMBERS.MAX_VALUE / chartLabels.length) *
                    (chartLabels.length - i) -
                  MAGIC_NUMBERS.MAX_VALUE / (chartLabels.length * 2),
              },
              backgroundColor: '#ECECE5',
              borderColor: '#ECECE5',
              showLine: true,
              borderWidth: 0,
              lineTension: 0,
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
          ]
        })
        .flat(),
    ],
  } as any

  const options = {
    layout: {
      padding: {
        top: 2 * MAGIC_NUMBERS.MAX_VALUE,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: chartBarTooltipHandler,
      },
      deferred: {
        yOffset: '60%',
      },
    },
    scales: {
      y: {
        min: 0,
        max: MAGIC_NUMBERS.MAX_VALUE,
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        min: 0,
        max: MAGIC_NUMBERS.MAX_VALUE + 1,
        display: false,
        grid: {
          display: false,
        },
      },
    },
    animation: {
      numbers: { duration: 0 },
      colors: {
        type: 'color',
        duration: 3000,
        from: 'transparent',
      },
    },
  } as any

  return (
    <ChartCard title={title} locked={locked} suggestedUse={suggestedUse}>
      <Scatter
        height={270}
        className="relative mx-auto h-full !w-full"
        data={data}
        options={options}
        plugins={[MixBlendModeMultiply]}
      />
    </ChartCard>
  )
}

export default ChartBar
