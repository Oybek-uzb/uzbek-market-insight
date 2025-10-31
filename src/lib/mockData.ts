// Notebooks category data
export const notebookKPIData = {
  localProducers: 20,
  productionVolume: "482T",
  productionValue: "$18,3M",
  exportCompanies: 11,
  exportVolume: "0",
  exportValue: "$4k",
  importCompanies: 288,
  importVolume: "1450",
  importValue: "$1,8M",
  marketSaturation: 25,
  hhi: 2301,
  cr5: 0.68,
};

// Hair care products category data
export const hairCareKPIData = {
  localProducers: 7,
  productionVolume: "2474",
  productionValue: "72 484 683 so'm",
  exportCompanies: 64,
  exportVolume: "1561",
  exportValue: "$3337,5 ",
  importCompanies: 397,
  importVolume: "4958",
  importValue: "$22804",
  marketSaturation: 42.1,
  hhi: 8158,
  cr5: 0.58,
};

// Default to notebooks
export const mockKPIData = notebookKPIData;

// Notebook manufacturers
export const notebookManufacturers = [
  { id: 1, name: "FAROVON PRINT-2020 xususiy korxonasi", inn: "307832960", address: "Navoiy viloyati, Navoiy sh. Navoiy ko'chasi, 53-uy", category: "Қоғоз ёки картондан рўйхатга олиш журнали, бухгалтерия китоблари ва бланка, ордер ва квитанция китобчалари, ён дафтарчалар, кундалик ёзувлар дафтари ва шу каби буюмлар", volume: "1" },
  { id: 2, name: "GRAND POLIGRAF BIZNES mas'uliyati cheklangan jamiyati", inn: "207122289", address: "Toshkent shahri, Chilonzor tumani Olmazor daxasi, 14-uy, 37-xona", category: "Қоғоз ёки картондан рўйхатга олиш журнали, бухгалтерия китоблари ва бланка, ордер ва квитанция китобчалари, ён дафтарчалар, кундалик ёзувлар дафтари ва шу каби буюмлар", volume: "184" },
  { id: 3, name: "PLATINUM BUSINESS MANAGEMENT mas'uliyati cheklangan jamiyati", inn: "310809379", address: "Navoiy viloyati, Navoiy sh. G'alaba MFY, O'zbekiston ko'chasi, 559-uy", category: "Қоғоз ёки картондан рўйхатга олиш журнали, бухгалтерия китоблари ва бланка, ордер ва квитанция китобчалари, ён дафтарчалар, кундалик ёзувлар дафтари ва шу каби буюмлар", volume: "3" },
  { id: 4, name: "VODIY POLIGRAF mas'uliyati cheklangan jamiyat", inn: "206858719", address: "Namangan viloyati, Namangan sh., Davlatobod tumani Umid MFY, 5-kichik tuman, 19-uy", category: "Қоғоз ёки картондан рўйхатга олиш журнали, бухгалтерия китоблари ва бланка, ордер ва квитанция китобчалари, ён дафтарчалар, кундалик ёзувлар дафтари ва шу каби буюмлар", volume: "4" },
  { id: 5, name: "ZARHAL PRINT DIZAYN mas'uliyati cheklangan jamiyat", inn: "300767270", address: "Namangan viloyati, Namangan sh. Marg`ilon MFY, Marg`ilon ko`chasi, 8-uy", category: "Қоғоз ёки картондан рўйхатга олиш журнали, бухгалтерия китоблари ва бланка, ордер ва квитанция китобчалари, ён дафтарчалар, кундалик ёзувлар дафтари ва шу каби буюмлар", volume: "77" },
];

// Hair care manufacturers
export const hairCareManufacturers = [
  { id: 6, name: "ECLAIR COSMETIC mas'uliyati cheklangan jamiyati", inn: "23213744", address: "Toshkent shahri, Chilonzor tumani G`arbiy sanoat zonasi, Bunyod ko`chasi, 1B-uy", category: "Бошқа гуруҳларга киритилмаган лосьонлар ва соч учун бошқа воситалар (шампунлар, лаклар, сочларни жингалак қилиш ёки саранжомлаш учун воситалардан ташқари)", volume: "2 229" },
  { id: 7, name: "INCOSMETIC  ASIA mas'uliyati cheklangan jamiyati", inn: "28315053", address: "Toshkent shahri, Sirg'ali tumani Sog`diyona ko`chasi, 18-uy", category: "Бошқа гуруҳларга киритилмаган лосьонлар ва соч учун бошқа воситалар (шампунлар, лаклар, сочларни жингалак қилиш ёки саранжомлаш учун воситалардан ташқари)", volume: "114" },
  { id: 8, name: "DOCTOR HERBAL PRODUCT mas'uliyati cheklangan jamiyati", inn: "30664179", address: "Toshkent shahri, Olmazor tumani IBROXIM OTA MFY, QORASAROY KO'CHASI, 322B-UY", category: "Сочларни узоқ вақт давом этувчи жингалак қилиш ёки текислаш учун воситалар", volume: "100" },
  { id: 9, name: "NAVRO'Z-PTK MChJ", inn: "15379809", address: "Buxoro shahri, Buxoro ko'chasi, 15-uy", category: "Бошқа гуруҳларга киритилмаган лосьонлар ва соч учун бошқа воситалар (шампунлар, лаклар, сочларни жингалак қилиш ёки саранжомлаш учун воситалардан ташқари)", volume: "16" },
  { id: 10, name: "DAISY PRODUCT mas'uliyati cheklangan jamiyati", inn: "23739535", address: "Toshkent shahri, Mirobod tumani Farg'ona yo'li 2-muyulish ko'chasi, 119/17, 121/16-uylar oraligida ", category: "Бошқа гуруҳларга киритилмаган лосьонлар ва соч учун бошқа воситалар (шампунлар, лаклар, сочларни жингалак қилиш ёки саранжомлаш учун воситалардан ташқари)", volume: "7" },
];

// Default to notebook manufacturers
export const mockManufacturers = notebookManufacturers;

export const notebookImportCountries = [
  { country: "Xitoy", volume: "1363504,51", value: "$1348,6", share: 94.91 },
  { country: "Rossiya", volume: "31770,258", value: "$152,52", share: 2.21 },
  { country: "Turkiya", volume: "20975,477", value: "$244,204", share: 1.46 },
  { country: "Hindiston", volume: "14500", value: "$14,517", share: 1.01 },
  { country: "Ukraina", volume: "2058,824", value: "$12,102", share: 0.14 },
];

export const hairCareImportCountries = [
  { country: "Rossiya", volume: "252628,394", value: "$987,944", share: 69 },
  { country: "Turkiya", volume: "41666,576", value: "$94,912", share: 11 },
  { country: "Germaniya", volume: "28624,03", value: "$214,325", share: 8 },
  { country: "Xitoy", volume: "23164,5", value: "$15,692", share: 6 },
  { country: "Latviya", volume: "12980,075", value: "$8,244", share: 4 },
];

// Default to notebooks
export const mockImportCountries = notebookImportCountries;

export const notebookExportCountries = [
  { country: "Qozog'iston", volume: "224,8", value: "$2,54", share: 62.38 },
  { country: "Rossiya", volume: "79,97", value: "$1,61", share: 22.19 },
  { country: "Azarbayjon", volume: "21,5", value: "$0,207", share: 5.97 },
  { country: "Bosniya va Herzegovina", volume: "18", value: "$0,281", share: 4.99 },
  { country: "Turkmaniston", volume: "8,31", value: "$0,039", share: 2.31 },
];

export const hairCareExportCountries = [
  { country: "Tojikiston", volume: "150611", value: "$94,549", share: 33 },
  { country: "Rossiya", volume: "128493,64", value: "$112,387", share: 29 },
  { country: "Qozog'iston", volume: "116255,4", value: "$111,214", share: 26 },
  { country: "Qirg'iziston", volume: "49514,8", value: "$49,088", share: 11 },
  { country: "Turkmaniston", volume: "3398,8", value: "$4,305", share: 1 },
];

// Default to notebooks
export const mockExportCountries = notebookExportCountries;

export const mockImportedProducts = [
  { product: "Elektron Komponentlar", hsCode: "8542.31", volume: "1,250 dona", value: "$8.5M" },
  { product: "Sanoat Mashinalari", hsCode: "8479.89", volume: "850 dona", value: "$6.2M" },
  { product: "Plastik Xom Ashyolar", hsCode: "3901.10", volume: "2,300 tonna", value: "$4.8M" },
  { product: "Po'lat Mahsulotlari", hsCode: "7208.51", volume: "1,850 tonna", value: "$3.9M" },
  { product: "Dori-darmonlar", hsCode: "3004.90", volume: "450 dona", value: "$2.7M" },
];

export const mockExportedProducts = [
  { product: "Paxta To'qimachilik", hsCode: "5208.12", volume: "1,850 tonna", value: "$5.2M" },
  { product: "Yangi Mevalar", hsCode: "0808.10", volume: "3,200 tonna", value: "$4.8M" },
  { product: "Tabiiy Gaz", hsCode: "2711.11", volume: "850 MCF", value: "$3.5M" },
  { product: "Kimyoviy O'g'itlar", hsCode: "3102.10", volume: "1,450 tonna", value: "$2.8M" },
  { product: "Mis Mahsulotlari", hsCode: "7403.11", volume: "620 tonna", value: "$2.4M" },
];

export const notebookProductionData = [
  { month: "Yan", local: 1850, export: 720, import: 1240 },
  { month: "Fev", local: 1920, export: 780, import: 1180 },
  { month: "Mar", local: 2100, export: 850, import: 1320 },
  { month: "Apr", local: 2050, export: 810, import: 1290 },
  { month: "May", local: 2280, export: 920, import: 1410 },
  { month: "Iyun", local: 2350, export: 950, import: 1380 },
];

export const hairCareProductionData = [
  { month: "Yan", local: 2450, export: 1520, import: 2840 },
  { month: "Fev", local: 2620, export: 1680, import: 2980 },
  { month: "Mar", local: 2800, export: 1850, import: 3120 },
  { month: "Apr", local: 2950, export: 2010, import: 3290 },
  { month: "May", local: 3080, export: 2220, import: 3510 },
  { month: "Iyun", local: 3250, export: 2450, import: 3680 },
];

// Default to notebooks
export const mockProductionData = notebookProductionData;

export const notebookMarketConcentration = [
  { name: "Kompaniya A", value: 22 },
  { name: "Kompaniya B", value: 18 },
  { name: "Kompaniya C", value: 15 },
  { name: "Kompaniya D", value: 12 },
  { name: "Kompaniya E", value: 8 },
  { name: "Boshqalar", value: 25 },
];

export const hairCareMarketConcentration = [
  { name: "L'Oreal", value: 28 },
  { name: "Procter & Gamble", value: 22 },
  { name: "Unilever", value: 18 },
  { name: "Kao Corporation", value: 12 },
  { name: "Henkel", value: 9 },
  { name: "Boshqalar", value: 11 },
];

// Default to notebooks
export const mockMarketConcentration = notebookMarketConcentration;

export const notebookMarketBalance = [
  { month: "Yan", supply: 4200, demand: 4000 },
  { month: "Fev", supply: 4400, demand: 4100 },
  { month: "Mar", supply: 4600, demand: 4300 },
  { month: "Apr", supply: 4800, demand: 4500 },
  { month: "May", supply: 5000, demand: 4700 },
  { month: "Iyun", supply: 5200, demand: 4900 },
  { month: "Iyul", supply: 5400, demand: 5100 },
  { month: "Avgust", supply: 5600, demand: 5300 },
  { month: "Sent", supply: 5800, demand: 5500 },
  { month: "Okt", supply: 6000, demand: 5700 },
];

export const hairCareMarketBalance = [
  { month: "Yan", supply: 5200, demand: 5000 },
  { month: "Fev", supply: 5400, demand: 5200 },
  { month: "Mar", supply: 5600, demand: 5400 },
  { month: "Apr", supply: 5800, demand: 5600 },
  { month: "May", supply: 6000, demand: 5800 },
  { month: "Iyun", supply: 6200, demand: 6000 },
  { month: "Iyul", supply: 6400, demand: 6200 },
  { month: "Avgust", supply: 6600, demand: 6400 },
  { month: "Sent", supply: 6800, demand: 6600 },
  { month: "Okt", supply: 7000, demand: 6800 },
];

// Default to notebooks
export const mockMarketBalance = notebookMarketBalance;

export const notebookCompetitiveMetrics = [
  { metric: "Bozor Xilma-xilligi", current: 75, previous: 68 },
  { metric: "Narx Raqobatbardoshligi", current: 82, previous: 76 },
  { metric: "Sifat Standartlari", current: 88, previous: 85 },
  { metric: "Innovatsiya Darajasi", current: 65, previous: 58 },
  { metric: "Bozorga Kirish Imkoniyati", current: 78, previous: 72 },
  { metric: "Qonuniy Talablarga Muvofiqlik", current: 92, previous: 90 },
];

export const hairCareCompetitiveMetrics = [
  { metric: "Brend Xilma-xilligi", current: 82, previous: 75 },
  { metric: "Mahsulot Turlari", current: 88, previous: 80 },
  { metric: "Tabiiy Ingredientlar", current: 76, previous: 68 },
  { metric: "Sifat Kafolati", current: 85, previous: 82 },
  { metric: "Narx Sifat Nisbati", current: 78, previous: 72 },
  { metric: "Innovatsion Mahsulotlar", current: 72, previous: 65 },
];

// Default to notebooks
export const mockCompetitiveMetrics = notebookCompetitiveMetrics;
