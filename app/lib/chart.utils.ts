export const chartTwoDataCustomTooltipHandler = (context: any) => {
  // Tooltip Element
  let tooltipEl = document.getElementById('chartjs-tooltip')

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = 'chartjs-tooltip'
    tooltipEl.innerHTML = '<table></table>'
    document.body.appendChild(tooltipEl)
  }

  // Hide if no tooltip
  const tooltipModel = context.tooltip
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = '0'
    return
  }

  // Set caret Position
  tooltipEl.classList.remove('above', 'below', 'no-transform')
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign)
  } else {
    tooltipEl.classList.add('no-transform')
  }

  // Set Text
  if (tooltipModel.body) {
    const titleLines = tooltipModel.title || []
    const {
      formattedValue,
      dataset: { label },
    } = tooltipModel.dataPoints[0]

    let innerHtml = '<thead>'

    titleLines.forEach(function (title: string) {
      innerHtml +=
        '<tr><th class="font-sans body-xs px-2 pt-2 text-left text-white">' +
        title.toUpperCase() +
        '</th></tr>'
    })
    innerHtml += '</thead><tbody>'

    innerHtml += `<tr><td><div class="px-2 font-sans body-xs text-white"><b class="font-sans body-m">${formattedValue}</b> ${label}</div></td></tr></tbody>`

    const tableRoot = tooltipEl.querySelector('table')
    tableRoot!.innerHTML = innerHtml
    tableRoot!.style.background = 'rgba(0, 0,0, 0.8)'
    tableRoot!.style.borderRadius = '2px'
  }

  const position = context.chart.canvas.getBoundingClientRect()

  // Display, position, and set styles for font
  tooltipEl.style.opacity = '1'
  tooltipEl.style.position = 'absolute'
  tooltipEl.style.left =
    position.left + window.pageXOffset + tooltipModel.caretX + 'px'
  tooltipEl.style.top =
    position.top + window.pageYOffset + tooltipModel.caretY + 'px'
  //   tooltipEl.style.font = bodyFont.string
  tooltipEl.style.padding =
    tooltipModel.padding + 'px ' + tooltipModel.padding + 'px'
  tooltipEl.style.pointerEvents = 'none'
}

export const chartBarTooltipHandler = (context: any) => {
  // Tooltip Element
  let tooltipEl = document.getElementById('chartjs-tooltip')

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = 'chartjs-tooltip'
    tooltipEl.innerHTML = '<table></table>'
    document.body.appendChild(tooltipEl)
  }

  // Hide if no tooltip
  const tooltipModel = context.tooltip
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = '0'
    return
  }

  // Set caret Position
  tooltipEl.classList.remove('above', 'below', 'no-transform')
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign)
  } else {
    tooltipEl.classList.add('no-transform')
  }

  // Set Text
  if (tooltipModel.body) {
    const titleLines = tooltipModel.title || []
    const {
      dataset: { data, label },
    } = tooltipModel.dataPoints[0]

    const validForLabel = data.find((d: any) => !!d.label)
    const validForValue = data.find((d: any) => !!d.value)

    let innerHtml = '<thead>'

    titleLines.forEach(function (title: string) {
      innerHtml +=
        '<tr><th class="font-sans body-xs px-2 pt-2 text-left text-white">' +
        validForLabel?.label.toUpperCase() +
        '</th></tr>'
    })
    innerHtml += '</thead><tbody>'

    innerHtml += `<tr><td><div class="px-2 font-sans body-xs text-white"><b class="font-sans body-m">${validForValue.value}</b> ${label}</div></td></tr></tbody>`

    const tableRoot = tooltipEl.querySelector('table')
    tableRoot!.innerHTML = innerHtml
    tableRoot!.style.background = 'rgba(0, 0,0, 0.8)'
    tableRoot!.style.borderRadius = '2px'
  }

  const position = context.chart.canvas.getBoundingClientRect()

  // Display, position, and set styles for font
  tooltipEl.style.opacity = '1'
  tooltipEl.style.position = 'absolute'
  tooltipEl.style.left =
    position.left + window.pageXOffset + tooltipModel.caretX + 'px'
  tooltipEl.style.top =
    position.top + window.pageYOffset + tooltipModel.caretY + 'px'
  //   tooltipEl.style.font = bodyFont.string
  tooltipEl.style.padding =
    tooltipModel.padding + 'px ' + tooltipModel.padding + 'px'
  tooltipEl.style.pointerEvents = 'none'
}

export const MixBlendModeMultiply = {
  id: 'multiply',
  beforeDatasetsDraw: function (chart: {
    ctx: { globalCompositeOperation: string }
  }) {
    chart.ctx.globalCompositeOperation = 'multiply'
  },
  afterDatasetsDraw: function (chart: {
    ctx: { globalCompositeOperation: string }
  }) {
    chart.ctx.globalCompositeOperation = 'source-over'
  },
}
