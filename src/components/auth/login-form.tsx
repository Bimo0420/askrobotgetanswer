"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        toast.success("Успешный вход!");
        router.push("/dashboard");
      } else {
        toast.error("Неверные учетные данные");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-card rounded-xl border shadow-sm p-6">
      <div className="text-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">Добро пожаловать</h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">
          Войдите в свой аккаунт для продолжения
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Электронная почта</Label>
          <Input
            id="email"
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <Input
            id="password"
            type="password"
            placeholder="Введите ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading ? "Вход..." : "Войти"}
        </Button>
      </form>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>Демо-доступ:</p>
        <p>Email: user@example.com</p>
        <p>Пароль: password</p>
      </div>
    </div>
  );
}
