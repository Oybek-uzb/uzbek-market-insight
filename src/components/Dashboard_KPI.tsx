import { Card } from "@/components/ui/card";
import { StatCard } from "./StatCard";
import { InfoBox } from "./InfoBox";
import { PercentageIndicator } from "./PercentageIndicator";
import { ChartCard } from "./ChartCard";
import {
  TrendingUp,
  Package,
  Globe,
  Percent,
  Recycle,
  Layers
} from "lucide-react";

interface DashboardKPIProps {
  data: {
    localProducers: number;
    productionVolume: string;
    productionValue: string;
    exportCompanies: number;
    exportVolume: string;
    exportValue: string;
    importCompanies: number;
    importVolume: string;
    importValue: string;
    marketSaturation: number;
    hhi: number;
    cr5: number;
    code: string;
    name: string;
  };
}

const DashboardKPI = ({ data }: DashboardKPIProps) => {
  return (
    <div>
      <main className="mx-auto p-0 space-y-6">
        {/* Production Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
           <div className="flex flex-col">
             <h3 className="text-xl font-bold text-black">{data.name} - TIF TN kodi: {data.code}</h3>
           <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-primary">Mahalliy ishlab chiqarish</h2>
           </div>
           </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <StatCard
                value={data.localProducers.toString()}
                unit="ta"
                label="Korxonalar"
              />
              <StatCard
                value={data.productionVolume}
                unit="tn"
                label="Ishlab chiqarish hajmi natijada"
              />
              <StatCard
                value={data.productionValue}
                unit=""
                label="Ishlab chiqarish hajmi summada"
              />
            </div>

            <div className="flex justify-center pt-4 border-t border-border">
              <StatCard
                value={data.hhi.toString()}
                label="HHI"
                variant="large"
              />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-secondary/20">
            <PercentageIndicator
              value={data.marketSaturation}
              icon={<Percent className="w-16 h-16 text-accent" />}
              label="Mahalliy mahsulotlar bilan to'yinganlik darajasi"
            />

            <div className="mt-8 space-y-3">
              <InfoBox icon={<Recycle className="w-5 h-5 text-success" />}>
                <div className="space-y-1">
                  <p><strong>Herfindahl-Hirschman index (HHI)</strong></p>
                  <p>0 dan 1 500 gacha raqobat muhitida rivojlangan</p>
                  <p>1 500 dan 2 500 gacha raqobat muhitida etarlicha rivojlanmagan</p>
                  <p>2 500 dan 10 000 gacha raqobat muhitida rivojlanmagan</p>
                </div>
              </InfoBox>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardKPI;