export const mockKPIData = {
  localProducers: 245,
  productionVolume: "12,450",
  productionValue: "$45.2M",
  exportCompanies: 89,
  exportVolume: "5,230",
  exportValue: "$18.7M",
  importCompanies: 156,
  importVolume: "8,940",
  importValue: "$32.4M",
  marketSaturation: 68,
  hhi: 0.62,
  cr5: 0.45,
};

export const mockManufacturers = [
  { id: 1, name: "Tashkent Manufacturing Co", inn: "123456789", address: "Tashkent, Yunusabad", category: "Electronics", volume: "2,500 units" },
  { id: 2, name: "Samarkand Textiles", inn: "987654321", address: "Samarkand, Center", category: "Textiles", volume: "5,800 units" },
  { id: 3, name: "Bukhara Food Industries", inn: "456789123", address: "Bukhara, Industrial Zone", category: "Food Products", volume: "12,300 units" },
  { id: 4, name: "Fergana Auto Parts", inn: "789123456", address: "Fergana, East District", category: "Auto Components", volume: "3,400 units" },
  { id: 5, name: "Namangan Chemicals", inn: "321654987", address: "Namangan, South", category: "Chemicals", volume: "1,900 units" },
];

export const mockImportCountries = [
  { country: "China", volume: "3,450 tons", value: "$12.5M", share: 38.6 },
  { country: "Russia", volume: "2,180 tons", value: "$7.8M", share: 24.1 },
  { country: "Kazakhstan", volume: "1,820 tons", value: "$5.2M", share: 16.0 },
  { country: "Turkey", volume: "980 tons", value: "$3.9M", share: 12.0 },
  { country: "Germany", volume: "510 tons", value: "$3.0M", share: 9.3 },
];

export const mockExportCountries = [
  { country: "Afghanistan", volume: "1,850 tons", value: "$6.2M", share: 33.2 },
  { country: "Kyrgyzstan", volume: "1,420 tons", value: "$4.8M", share: 25.7 },
  { country: "Tajikistan", volume: "1,120 tons", value: "$3.7M", share: 19.8 },
  { country: "Russia", volume: "780 tons", value: "$2.5M", share: 13.4 },
  { country: "Kazakhstan", volume: "560 tons", value: "$1.5M", share: 8.0 },
];

export const mockImportedProducts = [
  { product: "Electronic Components", hsCode: "8542.31", volume: "1,250 units", value: "$8.5M" },
  { product: "Industrial Machinery", hsCode: "8479.89", volume: "850 units", value: "$6.2M" },
  { product: "Plastic Raw Materials", hsCode: "3901.10", volume: "2,300 tons", value: "$4.8M" },
  { product: "Steel Products", hsCode: "7208.51", volume: "1,850 tons", value: "$3.9M" },
  { product: "Pharmaceuticals", hsCode: "3004.90", volume: "450 units", value: "$2.7M" },
];

export const mockExportedProducts = [
  { product: "Cotton Textiles", hsCode: "5208.12", volume: "1,850 tons", value: "$5.2M" },
  { product: "Fresh Fruits", hsCode: "0808.10", volume: "3,200 tons", value: "$4.8M" },
  { product: "Natural Gas", hsCode: "2711.11", volume: "850 MCF", value: "$3.5M" },
  { product: "Chemical Fertilizers", hsCode: "3102.10", volume: "1,450 tons", value: "$2.8M" },
  { product: "Copper Products", hsCode: "7403.11", volume: "620 tons", value: "$2.4M" },
];

export const mockProductionData = [
  { month: "Jan", local: 1850, export: 720, import: 1240 },
  { month: "Feb", local: 1920, export: 780, import: 1180 },
  { month: "Mar", local: 2100, export: 850, import: 1320 },
  { month: "Apr", local: 2050, export: 810, import: 1290 },
  { month: "May", local: 2280, export: 920, import: 1410 },
  { month: "Jun", local: 2350, export: 950, import: 1380 },
];

export const mockMarketConcentration = [
  { name: "Company A", value: 22 },
  { name: "Company B", value: 18 },
  { name: "Company C", value: 15 },
  { name: "Company D", value: 12 },
  { name: "Company E", value: 8 },
  { name: "Others", value: 25 },
];
