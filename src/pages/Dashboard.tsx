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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))", "hsl(var(--muted))"];

export default function Dashboard() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 1),
    to: new Date(2025, 9, 23),
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Competition metrics and market insights
          </p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2 min-w-[260px] justify-start">
              <CalendarIcon className="w-4 h-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
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
