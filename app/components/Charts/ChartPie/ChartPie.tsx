import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import ChartDeferred from 'chartjs-plugin-deferred'
import type { FC } from 'react'
import { Pie } from 'react-chartjs-2'

import type { IChartProps } from '../../../types/chart.interface'
import ChartCard from '../ChartCard'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, ChartDeferred)

const ChartPie: FC<IChartProps> = ({
  title,
  locked = false,
  suggestedUse,
  chartData,
  chartLabels,
}) => {
  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: chartData.map((_, index) => '#FFE500'),
        hoverBackgroundColor: chartData.map((_, index) => '#FFE500'),
        borderColor: chartData.map((_, index) => 'white'),
        hoverBorderColor: chartData.map((_, index) => 'white'),
        hoverOffset: 20,
        borderWidth: 4,
        datalabels: {
          labels: {
            value: {
              color: 'black',
              weight: 'bold',
              textAlign: 'center',
              font: {
                weight: 'bold',
                size: 12,
              },
              formatter: function (value: any, context: any) {
                return `${value}`
              },
            },
            title: {
              color: 'black',
              textAlign: 'center',
              font: {
                size: 12,
              },
              formatter: function (value: any, context: any) {
                const _rawText = context.chart.data.labels![context.dataIndex]

                // magic numbers but it works
                let label = _rawText
                if (_rawText.length >= 15) {
                  const [firstLine, ...secondLine] = _rawText.split(' ')
                  label = `${firstLine}\n${secondLine.join(' ')}`
                }

                const prefix = label.includes('\n') ? '\n\n\n' : '\n\n'
                return `${prefix}${label?.toUpperCase()}`
              },
            },
          },
          anchor: 'end',
          clamp: true,
          backgroundColor: null,
          borderWidth: 0,
        },
      },
    ],
  } as any

  const options = {
    events: [''],
    mantainAspectRatio: true,
    layout: {
      padding: 40,
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      deferred: {
        yOffset: '60%',
      },
    },
    // hover: { mode: null },
  } as any

  return (
    <ChartCard title={title} locked={locked} suggestedUse={suggestedUse}>
      <Pie className="relative w-full" data={data} options={options} />
    </ChartCard>
  )
}

export default ChartPie
