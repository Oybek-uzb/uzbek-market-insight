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

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

export default function ImportCountries() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Import Countries</h1>
        <p className="text-muted-foreground mt-1">
          Geographic distribution of import sources
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Import Sources</CardTitle>
            <CardDescription>Countries from which products are imported</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead className="text-right">Share %</TableHead>
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
          title="Import Share by Country"
          description="Percentage distribution of imports"
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockImportCountries}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ country, share }) => `${country}: ${share.toFixed(1)}%`}
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
