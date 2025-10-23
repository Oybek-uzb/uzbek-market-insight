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

export default function ExportUpload() {
  const [isUploaded, setIsUploaded] = useState(false);
  
  const mockPreviewData = [
    { product: "Cotton Textiles", exporter: "Tashkent Textiles", country: "Afghanistan", quantity: "1,850", value: "$5.2M", date: "2025-10-15" },
    { product: "Fresh Fruits", exporter: "Fergana Export Co", country: "Russia", quantity: "3,200", value: "$4.8M", date: "2025-10-14" },
    { product: "Chemical Fertilizers", exporter: "Namangan Chemicals", country: "Tajikistan", quantity: "1,450", value: "$2.8M", date: "2025-10-13" },
  ];

  const handleFileUpload = () => {
    setIsUploaded(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Export Data Upload</h1>
        <p className="text-muted-foreground mt-1">
          Upload and manage export statistics from Excel files
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload Export Data</CardTitle>
          <CardDescription>
            Upload Excel files (.xlsx, .xls) containing export statistics
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
                  <h3 className="text-lg font-semibold mb-2">Drop your Excel file here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse from your computer
                  </p>
                  <Button onClick={handleFileUpload} className="gap-2">
                    <Upload className="w-4 h-4" />
                    Select File
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Supported formats: .xlsx, .xls (Max size: 10MB)
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-green-900">File uploaded successfully</p>
                  <p className="text-sm text-green-700">export_data_oct_2025.xlsx • 3 records parsed</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setIsUploaded(false)}>
                  Upload New
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Data Preview</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Exporter</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockPreviewData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.product}</TableCell>
                          <TableCell>{item.exporter}</TableCell>
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
                <Button className="flex-1">Process & Save Data</Button>
                <Button variant="outline">Download Template</Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
