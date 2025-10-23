import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockExportedProducts } from "@/lib/mockData";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ExportedProducts() {
  const chartData = mockExportedProducts.slice(0, 10).map(item => ({
    product: item.product.substring(0, 15) + '...',
    value: parseFloat(item.value.replace('$', '').replace('M', ''))
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Exported Products</h1>
        <p className="text-muted-foreground mt-1">
          Detailed view of exported goods and commodities
        </p>
      </div>

      <ChartCard 
        title="Top 10 Exported Products by Value"
        description="Product categories with highest export values"
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
            <YAxis type="category" dataKey="product" stroke="hsl(var(--muted-foreground))" width={120} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }} 
            />
            <Bar dataKey="value" fill="hsl(var(--chart-4))" radius={[0, 8, 8, 0]} name="Value ($M)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <Card>
        <CardHeader>
          <CardTitle>Exported Products Database</CardTitle>
          <CardDescription>Complete list of exported products with HS codes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>HS Code</TableHead>
                  <TableHead>Export Volume</TableHead>
                  <TableHead className="text-right">Export Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockExportedProducts.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.product}</TableCell>
                    <TableCell>{item.hsCode}</TableCell>
                    <TableCell>{item.volume}</TableCell>
                    <TableCell className="text-right">{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
