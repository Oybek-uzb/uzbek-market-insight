import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockManufacturers } from "@/lib/mockData";
import { SelectUI } from "@/components/select-ui";

export default function Manufacturers() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = mockManufacturers.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mahalliy Ishlab Chiqaruvchilar</h1>
        <p className="text-muted-foreground mt-1">
          Ro'yxatdan o'tgan ishlab chiqaruvchilar va ishlab chiqarish ma'lumotlari
        </p>
        </div>
        <SelectUI/>
      </div>



      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Ishlab Chiqaruvchilar Bazasi</CardTitle>
              <CardDescription>Mahalliy ishlab chiqarish kompaniyalarini qidirish va filtrlash</CardDescription>
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtrlash
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Kompaniya nomi yoki mahsulot turi bo'yicha qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kompaniya Nomi</TableHead>
                  <TableHead>STIR</TableHead>
                  <TableHead>Manzil</TableHead>
                  <TableHead>Mahsulot Turi</TableHead>
                  <TableHead className="text-center">Ishlab Chiqarish Hajmi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                      Hech qanday ishlab chiqaruvchi topilmadi
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.inn}</TableCell>
                      <TableCell>{item.address}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-center">{item.volume}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Ko'rsatilmoqda {filteredData.length} ta {mockManufacturers.length} ta ishlab chiqaruvchidan</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Oldingi</Button>
              <Button variant="outline" size="sm" disabled>Keyingi</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
