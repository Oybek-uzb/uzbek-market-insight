import { KPICard } from "@/components/KPICard";
import { ChartCard } from "@/components/ChartCard";
import { 
  Factory, 
  Package, 
  Send, 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  PieChart as PieChartIcon
} from "lucide-react";
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
} from "recharts";
import { mockKPIData, mockProductionData, mockMarketConcentration, mockImportCountries } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))", "hsl(var(--muted))"];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Competition metrics and market insights
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Calendar className="w-4 h-4" />
          Jan 2025 - Oct 2025
        </Button>
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
    </div>
  );
}
