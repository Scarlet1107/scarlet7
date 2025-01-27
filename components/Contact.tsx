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
import { Mail } from "lucide-react";

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  const sendMessage = () => {
    // ここに実際のメッセージ送信ロジックを実装します
    console.log("Sending message:", formData);
    setIsDialogOpen(false);
    // フォームをリセット
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Contact
            </CardTitle>
            <CardDescription className="text-center mt-2">
              Feel free to contact me if you have any questions or suggestions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <p className="text-muted-foreground">scarlet.second@gmail.com</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                placeholder="Your Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Textarea
                placeholder="Message"
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Message</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Message:</strong> {formData.message}
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={sendMessage}>Confirm and Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
