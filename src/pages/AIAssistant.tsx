import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Sparkles, FileText } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Salom! Men sizning Bozor Tahlilchi Yordamchingizman. Siz menga quyidagi kabi savollar bera olasiz:\n\n• Men uchun 2025 yil oktyabrdan 2026 yil avgustigacha bo'lgan daftarlar bozori tahlilini ko'rsating \n• Elektronika uchun eng yirik import mamlakatlari qaysilar?\n• Bozor konsentratsiyasi tendentsiyalari haqida hisobot tuzing\n\nBugun sizga qanday yordam bera olaman?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: inputValue
    };

    const assistantMessage: Message = {
      id: messages.length + 2,
      role: "assistant",
      content: "Sizning so'rovingizni tahlil qildim. Ma'lumotlar asosida:\n\n📊 Bozor Tahlili Xulosasi:\n• Mahalliy ishlab chiqarish 12.5% o'sdi\n• Importga bog'liqlik 32% darajasida saqlanmoqda\n• Eng yirik 5 ta kompaniya bozorning 45% qismini egallaydi\n• HHI indeksi: 0.62 (o'rtacha konsentratsiya)\n\nBatafsil hisobot tayyorlashimni yoki bu ma'lumotlarni grafik shaklda ko'rsatishimni xohlaysizmi?"
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sun'iy Intellekt Yordamchisi</h1>
        <p className="text-muted-foreground mt-1">
          Tabiiy til yordamida savollar bering va tahliliy ma'lumotlarni oling
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <CardTitle>Suhbat interfeysi</CardTitle>
            </div>
            <CardDescription>
              Tabiiy til orqali tahlillar va hisobotlar so'rang
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px] p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Bozor ma'lumotlari, tendentsiyalar yoki hisobot haqida so'rang..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Button onClick={handleSend} size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tezkor Harakatlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                <FileText className="w-4 h-4" />
                Hisobot Yaratish
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                <Sparkles className="w-4 h-4" />
                Bozor Tahlillari
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Namuna So'rovlar</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-foreground transition-colors">
                  • 2025 yil uchun import tendentsiyalarini ko'rsating
                </li>
                <li className="cursor-pointer hover:text-foreground transition-colors">
                  • Bozor ulushlarini solishtiring
                </li>
                <li className="cursor-pointer hover:text-foreground transition-colors">
                  • Eksport o'sishini tahlil qiling
                </li>
                <li className="cursor-pointer hover:text-foreground transition-colors">
                  • Eng yirik ishlab chiqaruvchilarni ro'yxatlang
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
