import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockImportCountries } from "@/lib/mockData";
import { ChartCard } from "@/components/ChartCard";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { SelectUI } from "@/components/select-ui";

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

export default function ImportCountries() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold tracking-tight">Import Mamlakatlari</h1>
        <p className="text-muted-foreground mt-1">
          Import manbalarining geografik taqsimoti
        </p>
        </div>
        <SelectUI />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import Manbalari</CardTitle>
            <CardDescription>Mahsulotlar import qilinadigan mamlakatlar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mamlakat</TableHead>
                    <TableHead>Hajmi</TableHead>
                    <TableHead>Qiymati</TableHead>
                    <TableHead className="text-right">Ulushi %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockImportCountries.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.country}</TableCell>
                      <TableCell>{item.volume}</TableCell>
                      <TableCell>{item.value}</TableCell>
                      <TableCell className="text-right">{item.share.toFixed(1)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <ChartCard 
          title="Import taqsimoti mamlakatlar bo'yicha"
          description="Importning foiz taqsimoti"
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockImportCountries}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ country, share, cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = 20 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="hsl(var(--foreground))"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                      style={{ fontSize: '12px'}}
                    >
                      {`${country}: ${share.toFixed(1)}%`}
                    </text>
                  );
                }}
                outerRadius={100}
                fill="hsl(var(--chart-1))"
                dataKey="share"
              >
                {mockImportCountries.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
