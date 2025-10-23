import { useState } from "react";
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
  Calendar as CalendarIcon
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  LineChart,
  Line,
  BarChart,
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
import { mockKPIData, mockProductionData, mockMarketConcentration, mockImportCountries, mockMarketBalance, mockCompetitiveMetrics } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))", "hsl(var(--muted))"];

const MONTHS = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const YEARS = Array.from({ length: 10 }, (_, i) => {
  const year = new Date().getFullYear() - 5 + i;
  return { value: year.toString(), label: year.toString() };
});

export default function Dashboard() {
  const [fromMonth, setFromMonth] = useState("01");
  const [fromYear, setFromYear] = useState("2025");
  const [toMonth, setToMonth] = useState("10");
  const [toYear, setToYear] = useState("2025");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Competition metrics and market insights
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-muted-foreground" />
          <div className="flex items-center gap-2">
            <Select value={fromMonth} onValueChange={setFromMonth}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={fromYear} onValueChange={setFromYear}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {YEARS.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-muted-foreground">-</span>
            <Select value={toMonth} onValueChange={setToMonth}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={toYear} onValueChange={setToYear}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {YEARS.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Local Producers"
          value={mockKPIData.localProducers}
          subtitle={`Volume: ${mockKPIData.productionVolume} units`}
          icon={Factory}
          trend={{ value: 8.2, isPositive: true }}
        />
        <KPICard
          title="Production Value"
          value={mockKPIData.productionValue}
          subtitle="Total market value"
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
        />
        <KPICard
          title="Export Companies"
          value={mockKPIData.exportCompanies}
          subtitle={`Value: ${mockKPIData.exportValue}`}
          icon={Send}
          trend={{ value: 5.3, isPositive: true }}
        />
        <KPICard
          title="Import Companies"
          value={mockKPIData.importCompanies}
          subtitle={`Value: ${mockKPIData.importValue}`}
          icon={Package}
          trend={{ value: 3.1, isPositive: false }}
        />
      </div>

      {/* Market Concentration Indicators */}
      <div className="grid gap-4 md:grid-cols-3">
        <KPICard
          title="Market Saturation"
          value={`${mockKPIData.marketSaturation}%`}
          subtitle="Local products coverage"
          icon={TrendingUp}
        />
        <KPICard
          title="HHI Index"
          value={mockKPIData.hhi}
          subtitle="Herfindahl-Hirschman Index"
          icon={BarChart3}
        />
        <KPICard
          title="CR-5 Ratio"
          value={`${(mockKPIData.cr5 * 100).toFixed(0)}%`}
          subtitle="Top 5 Concentration"
          icon={PieChartIcon}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard 
          title="Production, Import & Export Trends"
          description="Monthly data comparison"
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockProductionData}>
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
              <Line type="monotone" dataKey="local" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Local Production" />
              <Line type="monotone" dataKey="export" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Exports" />
              <Line type="monotone" dataKey="import" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Imports" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard 
          title="Market Concentration by Company"
          description="Top players and market share"
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockMarketConcentration}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="hsl(var(--chart-1))"
                dataKey="value"
              >
                {mockMarketConcentration.map((entry, index) => (
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

      <ChartCard 
        title="Import Geography Distribution"
        description="Import share by country"
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockImportCountries}>
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
            <Bar dataKey="share" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} name="Import Share %" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* New Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard 
          title="Market Balance Analysis"
          description="Supply vs demand dynamics"
        >
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={mockMarketBalance}>
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
              <Area type="monotone" dataKey="supply" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorSupply)" name="Total Supply" />
              <Area type="monotone" dataKey="demand" stroke="hsl(var(--chart-2))" fillOpacity={1} fill="url(#colorDemand)" name="Total Demand" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard 
          title="Competitive Performance Metrics"
          description="Multi-dimensional market analysis"
        >
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={mockCompetitiveMetrics}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
              <Radar name="Current Period" dataKey="current" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.6} />
              <Radar name="Previous Period" dataKey="previous" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.3} />
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
