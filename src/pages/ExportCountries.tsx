import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { notebookExportCountries, hairCareExportCountries, hairCareImportCountries, fosforImportCountries, tormozImportCountries, poliamidImportCountries, qalamImportCountries, pishloqImportCountries, notebookImportCountries } from "@/lib/mockData";
import { ChartCard } from "@/components/ChartCard";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { SelectUI } from "@/components/select-ui";

export default function ExportCountries() {
  const [category, setCategory] = useState("bloknot");
  
  // Handle category change
  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  // Get export countries based on selected category
  const getExportCountries = () => {
    switch (category) {
         case 'soch':
           return hairCareImportCountries;
         case 'fosfor':
           return fosforImportCountries;
         case 'tormoz':
           return tormozImportCountries;
         case 'poliamid':
           return poliamidImportCountries;
         case 'qalam':
           return qalamImportCountries;
         case 'pishloq':
           return pishloqImportCountries;
         default:
           return notebookImportCountries;
       }
  };

  // Get category title
  const getCategoryTitle = () => {
    switch (category) {
      case 'soch':
        return 'Soch uchun vositalar import mamlakatlari';
      case 'fosfor':
        return 'Fosfor kislotasi import mamlakatlari';
      case 'tormoz':
        return 'Tormoz kolodkalari qoplagichi import mamlakatlari';
      case 'poliamid':
        return 'Poliamid import mamlakatlari';
      case 'qalam':
        return 'Qalam sterjeni import mamlakatlari';
      case 'pishloq':
        return 'Pishloq va tvorog import mamlakatlari';
      default:
        return 'Bloknot import mamlakatlari';
    }
  };

  // Get category description
  const getCategoryDescription = () => {
 switch (category) {
      case 'soch':
        return 'Soch parvarishi uchun mahsulotlar import qilinadigan asosiy mamlakatlar';
      case 'fosfor':
        return 'Fosfor kislotasi import qilinadigan asosiy mamlakatlar';
      case 'tormoz':
        return 'Tormoz kolodkalari qoplagichi import qilinadigan asosiy mamlakatlar';
      case 'poliamid':
        return 'Poliamid import qilinadigan asosiy mamlakatlar';
      case 'qalam':
        return 'Qalam sterjeni import qilinadigan asosiy mamlakatlar';
      case 'pishloq':
        return 'Pishloq va tvorog import qilinadigan asosiy mamlakatlar';
      default:
        return 'Yozuv va yorliq mahsulotlari import qilinadigan asosiy mamlakatlar';
    }
  };

  const exportCountries = getExportCountries();
  
  const COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
  ];
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{getCategoryTitle()}</h1>
          <p className="text-muted-foreground mt-1">
            {getCategoryDescription()}
          </p>
        </div>
        <SelectUI onCategoryChange={handleCategoryChange} />
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
                  {exportCountries.map((item, index) => (
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
            <PieChart>
              <Pie
                data={exportCountries}
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
                      style={{ fontSize: '12px' }}
                    >
                      {`${country}: ${share.toFixed(1)}%`}
                    </text>
                  );
                }}
                outerRadius={100}
                fill="hsl(var(--chart-1))"
                dataKey="share"
              >
                {exportCountries.map((entry, index) => (
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
