"use client";

import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Mail } from "lucide-react";
import { senderEmail } from "@/constants/contact";
import FadeIn from "./motion/FadeIn";
import { useToast } from "@/hooks/use-toast";
import { useDictionary } from "@/context/dictionary-provider";

// フォームの型定義
type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const { Contact } = useDictionary();

  // フォーム入力ハンドラ
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 確認用ダイアログを開く
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  // メール送信を行う関数(API呼び出し)
  const sendMessage = async () => {
    setIsSending(true);
    try {
      // 送信中フラグを立てる
      // API呼び出し
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // エラー処理(例: ステータスコード500など)
        console.error("fail to send email");
      } else {
        toast({
          title: "Message sent!",
          description: "Thank you for your inquiry.",
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      // ダイアログを閉じる
      setIsDialogOpen(false);
      // フォームをリセット
      setFormData({ name: "", email: "", message: "" });
      // 送信中フラグを下げる
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="container mx-auto px-4">
        <FadeIn>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                {Contact.title}
              </CardTitle>
              <CardDescription className="text-center mt-2">
                {Contact.content}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">{senderEmail}</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder={Contact.Name}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  placeholder={Contact.Email}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  placeholder={Contact.Message}
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" className="w-full" disabled={isSending}>
                  {isSending ? (
                    <>
                      <Loader2 className="animate-spin text-blue-500" />
                      <span>{Contact["sending..."]}</span>
                    </>
                  ) : (
                    <span>{Contact["Send Message"]}</span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{Contact["Confirm Your Message"]}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="space-y-2"></div>
          <p>
            <strong>{Contact.Name}:</strong> {formData.name}
          </p>
          <p>
            <strong>{Contact.Email}:</strong> {formData.email}
          </p>
          <p>
            <strong>{Contact.Message}:</strong> {formData.message}
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              {Contact.Cancel}
            </Button>
            <Button onClick={sendMessage} disabled={isSending}>
              {isSending ? (
                <>
                  <Loader2 className="animate-spin text-blue-500" />
                  {Contact["sending..."]}
                </>
              ) : (
                <>{Contact["Confirm and Send"]}</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
