import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { useState } from "react";

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

interface SelectUIProps {
  onCategoryChange?: (category: string) => void;
}

export const SelectUI = ({ onCategoryChange }: SelectUIProps) => {
  const [fromMonth, setFromMonth] = useState("01");
  const [fromYear, setFromYear] = useState("2025");
  const [toMonth, setToMonth] = useState("10");
  const [toYear, setToYear] = useState("2025");
  const [selectedCategory, setSelectedCategory] = useState("bloknot");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (onCategoryChange) {
      onCategoryChange(value);
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <Select value={selectedCategory} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Kategoriya" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bloknot">Bloknot</SelectItem>
            <SelectItem value="soch">Soch uchun vositalar</SelectItem>
            <SelectItem value="fosfor">Fosfor kislotasi</SelectItem>
            <SelectItem value="tormoz">Tormoz Kolodkalari Qoplagichi</SelectItem>
            <SelectItem value="poliamid">Poliamid</SelectItem>
            <SelectItem value="qalam">Qalam Sterjeni</SelectItem>
            <SelectItem value="pishloq">Pishloq va Tvorog</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2 p-2 rounded-md">
          <CalendarIcon className="w-4 h-4 text-muted-foreground" />
          <Select value={fromMonth} onValueChange={setFromMonth}>
            <SelectTrigger className="w-[130px] bg-transparent border bg-white shadow-none">
              <SelectValue placeholder="Oy" />
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
            <SelectTrigger className="w-[100px] bg-transparent border bg-white shadow-none">
              <SelectValue placeholder="Yil" />
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
            <SelectTrigger className="w-[130px] bg-transparent border bg-white shadow-none">
              <SelectValue placeholder="Oy" />
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
            <SelectTrigger className="w-[100px] bg-transparent border bg-white shadow-none">
              <SelectValue placeholder="Yil" />
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
  );
};