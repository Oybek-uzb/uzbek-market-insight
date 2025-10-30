import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockExportCountries } from "@/lib/mockData";
import { ChartCard } from "@/components/ChartCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { SelectUI } from "@/components/select-ui";
export default function ExportCountries() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold tracking-tight">Eksport Mamlakatlari</h1>
        <p className="text-muted-foreground mt-1">
          Eksport manzillarining geografik taqsimoti
        </p>
        </div>
        <SelectUI />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Eksport Manzillari</CardTitle>
            <CardDescription>Mahsulotlar eksport qilinadigan mamlakatlar</CardDescription>
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
                  {mockExportCountries.map((item, index) => (
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
          title="Mamlakatlar bo'yicha eksport ulushi"
          description="Eksport manzillarining taqsimoti"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockExportCountries}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="country" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }} 
              />
              <Bar dataKey="share" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} name="Eksport ulushi %" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
