import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ImportUpload() {
  const [isUploaded, setIsUploaded] = useState(false);
  
  const mockPreviewData = [
    { product: "Elektron Komponentlar", country: "Xitoy", quantity: "1,250", value: "$8.5M", date: "2025-10-15" },
    { product: "Sanoat Mashinalari", country: "Germaniya", quantity: "850", value: "$6.2M", date: "2025-10-14" },
    { product: "Plastik Xom Ashyolar", country: "Rossiya", quantity: "2,300", value: "$4.8M", date: "2025-10-13" },
  ];

  const handleFileUpload = () => {
    setIsUploaded(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Import Ma'lumotlarini Yuklash</h1>
        <p className="text-muted-foreground mt-1">
          Excel fayllaridan import statistikasini yuklang va boshqaring
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Import Ma'lumotlarini Yuklash</CardTitle>
          <CardDescription>
            Import statistikasini o'z ichiga olgan Excel fayllarini yuklang (.xlsx, .xls)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isUploaded ? (
            <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <FileSpreadsheet className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Excel faylingizni shu yerga tashlang</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    yoki kompyuteringizdan fayl tanlash uchun bosing
                  </p>
                  <Button onClick={handleFileUpload} className="gap-2">
                    <Upload className="w-4 h-4" />
                    Fayl Yükle
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Qo'llab-quvvatlanadigan formatlar: .xlsx, .xls (Maksimal hajm: 10MB)
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-green-900">Fayl muvaffaqiyatli yuklandi</p>
                  <p className="text-sm text-green-700">import_malumotlari_okt_2025.xlsx • 3 ta yozuv tahlil qilindi</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setIsUploaded(false)}>
                  Yangisini Yuklash
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Ma'lumotlarni Ko'rish</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Mahsulot</TableHead>
                        <TableHead>Mamlakat</TableHead>
                        <TableHead>Soni</TableHead>
                        <TableHead>Qiymati</TableHead>
                        <TableHead>Sana</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockPreviewData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.product}</TableCell>
                          <TableCell>{item.country}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.value}</TableCell>
                          <TableCell>{item.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Ma'lumotlarni Qayta Ishlash va Saqlash</Button>
                <Button variant="outline">Shablonni Yuklab Olish</Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
