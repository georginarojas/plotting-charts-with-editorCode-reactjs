import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { format } from 'date-fns'
import { Series } from '@/domain/models'

type Props = {
  series: Series[]
}

const Chart: React.FC<Props> = ({ series }: Props) => {
  return (
    <LineChart width={1150} height={400}>
      <CartesianGrid strokeDasharray="3 3" />
      {series.length > 0 && (
        <>
          <XAxis
            dataKey="timestamp"
            type="number"
            domain={['auto', 'auto']}
            tickFormatter={(timeStr) => format(timeStr, 'k:mm')}
          />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend layout='vertical' verticalAlign="middle" align="right"/>
          {series.map((s) => (
            <Line
              dataKey="value"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={`hsl(${Math.random() * 360}, 100%, 45%)`}
            />
          ))}
        </>
      )}
    </LineChart>
  )
}

export default Chart
