import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockImportedProducts } from "@/lib/mockData";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ImportedProducts() {
  const chartData = mockImportedProducts.slice(0, 10).map(item => ({
    product: item.product.substring(0, 15) + '...',
    value: parseFloat(item.value.replace('$', '').replace('M', ''))
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Imported Products</h1>
        <p className="text-muted-foreground mt-1">
          Detailed view of imported goods and commodities
        </p>
      </div>

      <ChartCard 
        title="Top 10 Imported Products by Value"
        description="Product categories with highest import values"
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
            <Bar dataKey="value" fill="hsl(var(--chart-3))" radius={[0, 8, 8, 0]} name="Value ($M)" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <Card>
        <CardHeader>
          <CardTitle>Imported Products Database</CardTitle>
          <CardDescription>Complete list of imported products with HS codes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>HS Code</TableHead>
                  <TableHead>Import Volume</TableHead>
                  <TableHead className="text-right">Import Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockImportedProducts.map((item, index) => (
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
