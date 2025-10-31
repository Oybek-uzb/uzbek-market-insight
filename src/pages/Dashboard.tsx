import { useState, useEffect } from "react";
import { KPICard } from "@/components/KPICard";
import { ChartCard } from "@/components/ChartCard";
import { 
  Factory, 
  Package, 
  Send, 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  PieChart as PieChartIcon,
  Calendar as CalendarIcon,
  Globe
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { 
  mockKPIData, 
  mockProductionData, 
  mockMarketConcentration, 
  mockImportCountries, 
  mockMarketBalance, 
  mockCompetitiveMetrics,
  notebookKPIData,
  hairCareKPIData,
  notebookProductionData,
  hairCareProductionData,
  notebookImportCountries,
  hairCareImportCountries,
  notebookExportCountries,
  hairCareExportCountries,
  notebookMarketConcentration,
  hairCareMarketConcentration,
  notebookMarketBalance,
  hairCareMarketBalance,
  notebookCompetitiveMetrics,
  hairCareCompetitiveMetrics
} from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { SelectUI } from "@/components/select-ui";

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))", "hsl(var(--muted))"];

const MONTHS = [
  { value: "01", label: "Yanvar" },
  { value: "02", label: "Fevral" },
  { value: "03", label: "Mart" },
  { value: "04", label: "Aprel" },
  { value: "05", label: "May" },
  { value: "06", label: "Iyun" },
  { value: "07", label: "Iyul" },
  { value: "08", label: "Avgust" },
  { value: "09", label: "Sentabr" },
  { value: "10", label: "Oktabr" },
  { value: "11", label: "Noyabr" },
  { value: "12", label: "Dekabr" },
];

const YEARS = Array.from({ length: 10 }, (_, i) => {
  const year = new Date().getFullYear() - 5 + i;
  return { value: year.toString(), label: year.toString() };
});

// Define types for our data state
type KpiData = typeof notebookKPIData;
type ProductionData = typeof notebookProductionData;
type MarketConcentration = typeof notebookMarketConcentration;
type ImportCountries = Array<{
  country: string;
  volume: string;
  value: string;
  share: number;
}>;
type ExportCountries = typeof notebookExportCountries;
type MarketBalance = typeof notebookMarketBalance;
type CompetitiveMetrics = typeof notebookCompetitiveMetrics;

export default function Dashboard() {
  // Filter states
  const [fromMonth, setFromMonth] = useState("01");
  const [fromYear, setFromYear] = useState("2025");
  const [toMonth, setToMonth] = useState("10");
  const [toYear, setToYear] = useState("2025");
  
  // Data states
  const [kpiData, setKpiData] = useState<KpiData>(notebookKPIData);
  const [productionData, setProductionData] = useState<ProductionData>(notebookProductionData);
  const [marketConcentration, setMarketConcentration] = useState<MarketConcentration>(notebookMarketConcentration);
  const [importCountries, setImportCountries] = useState<ImportCountries>(notebookImportCountries);
  const [exportCountries, setExportCountries] = useState<ExportCountries>(notebookExportCountries);
  const [marketBalance, setMarketBalance] = useState<MarketBalance>(notebookMarketBalance);
  const [competitiveMetrics, setCompetitiveMetrics] = useState<CompetitiveMetrics>(notebookCompetitiveMetrics);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    if (category === 'soch') {
      setKpiData(hairCareKPIData);
      setProductionData(hairCareProductionData);
      setMarketConcentration(hairCareMarketConcentration);
      
      // Convert volume to string for hair care import countries
      const hairCareImports = hairCareImportCountries.map(item => ({
        ...item,
        volume: typeof item.volume === 'number' ? item.volume : item.volume
      }));
      
      setImportCountries(hairCareImports);
      setExportCountries(hairCareExportCountries);
      setMarketBalance(hairCareMarketBalance);
      setCompetitiveMetrics(hairCareCompetitiveMetrics);
    } else {
      setKpiData(notebookKPIData);
      setProductionData(notebookProductionData);
      setMarketConcentration(notebookMarketConcentration);
      
      // Convert volume to string for notebook import countries
      const notebookImports = notebookImportCountries.map(item => ({
        ...item,
        volume: typeof item.volume === 'number' ? item.volume : item.volume
      }));
      
      setImportCountries(notebookImports);
      setExportCountries(notebookExportCountries);
      setMarketBalance(notebookMarketBalance);
      setCompetitiveMetrics(notebookCompetitiveMetrics);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bozor Tahlillari Boshqaruv Paneli</h1>
          <p className="text-muted-foreground mt-1">
            Raqobat ko'rsatkichlari va bozor tahlillari
          </p>
        </div>
        
        <SelectUI onCategoryChange={handleCategoryChange} />
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Mahalliy Ishlab Chiqaruvchilar"
          value={kpiData.localProducers}
          subtitle={`Hajm: ${kpiData.productionVolume} dona`}
          icon={Factory}
          trend={{ value: 8.2, isPositive: true }}
        />
        <KPICard
          title="Ishlab Chiqarish Qiymati"
          value={kpiData.productionValue}
          subtitle="Umumiy bozor qiymati"
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
        />
        <KPICard
          title="Eksport Kompaniyalari"
          value={kpiData.exportCompanies}
          subtitle={`Hajm: ${kpiData.exportVolume} dona`}
          icon={Send}
          trend={{ value: 5.3, isPositive: true }}
        />
        <KPICard
          title="Import Qiymati"
          value={kpiData.exportValue}
          subtitle="Jami import qiymati"
          icon={TrendingUp}
          trend={{ value: 7.8, isPositive: true }}
        />
      </div>

      {/* Production Trend Line Chart */}

      {/* Market Concentration Indicators */}
      <div className="grid gap-4 md:grid-cols-3">
        <ChartCard 
          title="Bozor Konsentratsiyasi (HHI)"
          description="Bozor konsentratsiyasi indeksi"
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold">{kpiData.hhi}</div>
              <div className="text-sm text-muted-foreground">
                {kpiData.hhi > 2500 ? 'Yuqori konsentratsiya' : 'Oʻrtacha konsentratsiya'}
              </div>
              <div className="text-sm text-muted-foreground">
                CR5: {(kpiData.cr5 * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </ChartCard>
        <KPICard
          title="Bozor To'yinganligi"
          value={`${kpiData.marketSaturation}%`}
          subtitle="Mahsulotlarning qoplamasi"
          icon={TrendingUp}
        />
        <KPICard
          title="CR-5 Nisbati"
          value={`${(kpiData.cr5 * 100).toFixed(0)}%`}
          subtitle="5 ta yirik ishtirokchilar ulushi"
          icon={PieChartIcon}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
      

   <ChartCard 
        title="Ishlab Chiqarish Trendi"
        description="Oylik ishlab chiqarish ko'rsatkichlari"
        icon={TrendingUp}
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={productionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="local" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Mahalliy ishlab chiqarish"
            />
            <Line 
              type="monotone" 
              dataKey="import" 
              stroke="hsl(var(--chart-2))" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Import"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
 <ChartCard 
          title="Kompaniyalar bo'yicha bozor ulushi"
          description="Yetakchi kompaniyalar va ularning bozordagi ulushi"
          icon={PieChartIcon}
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={marketConcentration}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {marketConcentration.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Ulush']} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
          <ChartCard 
          title="Ishlab Chiqarish va Eksport/Import"
          description="Oylik ishlab chiqarish va tashqi savdo ko'rsatkichlari"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="local" fill="hsl(var(--chart-1))" name="Mahalliy ishlab chiqarish" />
              <Bar dataKey="export" fill="hsl(var(--chart-2))" name="Eksport" />
              <Bar dataKey="import" fill="hsl(var(--chart-3))" name="Import" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

   

      {/* New Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard 
          title="Bozor balansi tahlili"
          description="Taqsimot va talab dinamikasi"
          icon={TrendingUp}
        >
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={marketBalance}>
              <defs>
                <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }} 
              />
              <Legend />
              <Area type="monotone" dataKey="supply" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorSupply)" name="Taqdimot" />
              <Area type="monotone" dataKey="demand" stroke="hsl(var(--chart-2))" fillOpacity={1} fill="url(#colorDemand)" name="Talab" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard 
          title="Raqobatbardosh ko'rsatkichlar"
          description="Ko'p o'lchovli bozor tahlili"
          icon={BarChart3}
        >
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={competitiveMetrics}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
              <Radar name="Joriy davr" dataKey="current" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.6} />
              <Radar name="O'tgan davr" dataKey="previous" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.3} />
              <Legend />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
