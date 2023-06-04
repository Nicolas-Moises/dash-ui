"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "1 Bi",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "2 Bi",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "3 Bi",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "4 Bi",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "5 Bi",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "6 Bi",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function Sales() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 100}M`}
        />
        <Bar dataKey="total" fill="#996DFF" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}