import { useState } from "react";
import { ChartCard } from "@/components/ChartCard";
import {
  TrendingUp,
  PieChart as PieChartIcon,
  BarChart3,
  Globe,
  Package,
  Download,
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
  hairCareCompetitiveMetrics,
  fosforKPIData,
  fosforImportCountries,
  fosforExportCountries,
  tormozKPIData,
  tormozImportCountries,
  tormozExportCountries,
  poliamidKPIData,
  poliamidImportCountries,
  poliamidExportCountries,
  qalamKPIData,
  qalamImportCountries,
  qalamExportCountries,
  pishloqKPIData,
  pishloqImportCountries,
  pishloqExportCountries
} from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { SelectUI } from "@/components/select-ui";
import Dashboard_KPI from "@/components/Dashboard_KPI";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";

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
  const [currentCategory, setCurrentCategory] = useState("bloknot");
  
  // Map category values to their corresponding image filenames
  const categoryImages = {
    bloknot: 'bloknot.jpg',
    soch: 'soch-uchun.jpg',
    fosfor: 'fosfor.jpg',
    tormoz: 'Tormiz.jpg',
    poliamid: 'poliamidlar.jpg',
    qalam: 'qalam.jpg',
    pishloq: 'pishloq.jpg'
  };

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
    setCurrentCategory(category);
    switch (category) {
      case 'soch':
        setKpiData(hairCareKPIData);
        setProductionData(hairCareProductionData);
        setMarketConcentration(hairCareMarketConcentration);
        setImportCountries(hairCareImportCountries);
        setExportCountries(hairCareExportCountries);
        setMarketBalance(hairCareMarketBalance);
        setCompetitiveMetrics(hairCareCompetitiveMetrics);
        break;
      case 'fosfor':
        setKpiData(fosforKPIData);
        setProductionData(notebookProductionData); // Using notebook data as placeholder
        setMarketConcentration(notebookMarketConcentration);
        setImportCountries(fosforImportCountries);
        setExportCountries(fosforExportCountries);
        setMarketBalance(notebookMarketBalance);
        setCompetitiveMetrics(notebookCompetitiveMetrics);
        break;
      case 'tormoz':
        setKpiData(tormozKPIData);
        setProductionData(notebookProductionData);
        setMarketConcentration(notebookMarketConcentration);
        setImportCountries(tormozImportCountries);
        setExportCountries(tormozExportCountries);
        setMarketBalance(notebookMarketBalance);
        setCompetitiveMetrics(notebookCompetitiveMetrics);
        break;
      case 'poliamid':
        setKpiData(poliamidKPIData);
        setProductionData(notebookProductionData);
        setMarketConcentration(notebookMarketConcentration);
        setImportCountries(poliamidImportCountries);
        setExportCountries(poliamidExportCountries);
        setMarketBalance(notebookMarketBalance);
        setCompetitiveMetrics(notebookCompetitiveMetrics);
        break;
      case 'qalam':
        setKpiData(qalamKPIData);
        setProductionData(notebookProductionData);
        setMarketConcentration(notebookMarketConcentration);
        setImportCountries(qalamImportCountries);
        setExportCountries(qalamExportCountries);
        setMarketBalance(notebookMarketBalance);
        setCompetitiveMetrics(notebookCompetitiveMetrics);
        break;
      case 'pishloq':
        setKpiData(pishloqKPIData);
        setProductionData(notebookProductionData);
        setMarketConcentration(notebookMarketConcentration);
        setImportCountries(pishloqImportCountries);
        setExportCountries(pishloqExportCountries);
        setMarketBalance(notebookMarketBalance);
        setCompetitiveMetrics(notebookCompetitiveMetrics);
        break;
      default:
        setKpiData(notebookKPIData);
        setProductionData(notebookProductionData);
        setMarketConcentration(notebookMarketConcentration);
        setImportCountries(notebookImportCountries);
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

        <div className="flex items-center gap-4">
          <SelectUI onCategoryChange={handleCategoryChange} />

           <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={() => {
              const imageName = categoryImages[currentCategory as keyof typeof categoryImages] || 'bloknot.jpg';
              const link = document.createElement('a');
              link.href = `/${imageName}`;
              link.download = imageName;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="h-4 w-4" />
            Rasm yuklab olish
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <Dashboard_KPI data={kpiData} />
      {/* Charts */}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6 ">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-success" />
              <h2 className="text-lg font-bold text-success">Eksport</h2>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <StatCard
                value={kpiData.exportCompanies.toString()}
                unit="ta"
                label="Korxonalar"
              />
              <StatCard
                value={kpiData.exportVolume.toString()}
                unit="tn"
                label="Eksport hajmi natijada"
              />
              <StatCard
                value={kpiData.exportValue.toString()}
                unit=""
                label="Eksport summasi AQSH dollarida"
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Package className="w-5 h-5 text-destructive" />
              <h2 className="text-lg font-bold text-destructive">Import</h2>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <StatCard
                value={kpiData.importCompanies.toString()}
                unit="ta"
                label="Korxonalar"
              />
              <StatCard
                value={kpiData.importVolume.toString()}
                unit="tn"
                label="Import hajmi natijada"
              />
              <StatCard
                value={kpiData.importValue.toString()}
                unit=""
                label="Import summasi AQSH dollarida"
              />
            </div>
            <div className="mt-10 pt-4 border-t border-border">
              <div className="flex items-center justify-center gap-2 bg-chart-2/10 rounded-lg p-4">
                <span className="text-3xl font-bold text-primary">CR-5</span>
                <span className="text-4xl font-bold text-chart-2">{(kpiData.cr5)}%</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col">
          <ChartCard
            title="Import taqsimoti mamlakatlar bo'yicha"
          >
            <div className="flex flex-col gap-4">
              <ResponsiveContainer width="100%" height={200}>
                {importCountries.length > 0 ? (
                  <PieChart>
                    <Pie
                      data={importCountries}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={100}
                      fill="hsl(var(--chart-1))"
                      dataKey="share"
                      nameKey="country"
                    >
                      {importCountries.map((entry, index) => (
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
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-muted-foreground text-lg">Ma'lumot yo'q</p>
                  </div>
                )}
              </ResponsiveContainer>
              <div className="space-y-1 max-h-[200px] overflow-y-auto border-t border-border pt-4">
                {importCountries.length > 0 ? (
                  importCountries.map((country, index) => (
                    <div key={country.country} className={`flex items-center justify-between py-1 ${index !== importCountries.length - 1 ? 'border-b border-border' : ''}`}>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        <span className="text-sm">{country.country}</span>
                      </div>
                      <span className="text-sm font-bold">{country.share.toFixed(1)}%</span>
                    </div>
                  ))
                ) : (
                  <div className="py-16 text-center">
                    <p className="text-muted-foreground text-lg">Ma'lumot yo'q</p>
                  </div>
                )}
              </div>
            </div>
          </ChartCard>
        </div>
      </div>

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
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1} />
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


      </div>
    </div>
  );
}
