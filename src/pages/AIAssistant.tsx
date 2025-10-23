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
      content: "Hello! I'm your Market Analytics AI Assistant. You can ask me questions like:\n\n• 'Show me market analysis for notebooks between Oct 2025 and Aug 2026'\n• 'What are the top import countries for electronics?'\n• 'Generate a report on market concentration trends'\n\nHow can I help you today?"
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
      content: "I've analyzed your request. Based on the data:\n\n📊 Market Analysis Summary:\n• Local production increased by 12.5%\n• Import dependency remains at 32%\n• Top 5 companies hold 45% market share\n• HHI index: 0.62 (moderately concentrated)\n\nWould you like me to generate a detailed report or visualize this data?"
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
        <h1 className="text-3xl font-bold tracking-tight">AI Assistant</h1>
        <p className="text-muted-foreground mt-1">
          Ask questions and get analytics insights using natural language
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <CardTitle>Chat Interface</CardTitle>
            </div>
            <CardDescription>
              Request analytics and reports in natural language
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
                  placeholder="Ask about market data, trends, or request a report..."
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
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                <FileText className="w-4 h-4" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2" size="sm">
                <Sparkles className="w-4 h-4" />
                Market Insights
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Example Queries</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-foreground transition-colors">
                  • Show import trends for 2025
                </li>
                <li className="cursor-pointer hover:text-foreground transition-colors">
                  • Compare market shares
                </li>
                <li className="cursor-pointer hover:text-foreground transition-colors">
                  • Analyze export growth
                </li>
                <li className="cursor-pointer hover:text-foreground transition-colors">
                  • List top manufacturers
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
