import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICES_OPTIONS } from "@/lib/amg-data";

export function LeadModal({
  open,
  onOpenChange,
  presetService,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presetService?: string | undefined;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [service, setService] = useState(presetService ?? "");

  useEffect(() => {
    if (open) setService(presetService ?? "");
  }, [open, presetService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
    toast.success("Спасибо! Мы перезвоним вам", {
      description: "Наш мастер свяжется с вами в рабочее время: 9:30 — 19:00.",
    });
    setName("");
    setPhone("");
    setCar("");
    setService("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="surface-panel max-w-md border-border/80 sm:rounded-md">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-crimson" />
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold uppercase tracking-wide">
            Записаться в <span className="text-gradient-crimson">AMG</span>
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Оставьте контакты — рассчитаем стоимость и подберём материалы под ваш автомобиль.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="lead-name">Ваше имя</Label>
            <Input
              id="lead-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Александр"
              className="h-11 bg-background/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-phone">Телефон</Label>
            <Input
              id="lead-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="h-11 bg-background/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-car">Марка авто</Label>
            <Input
              id="lead-car"
              value={car}
              onChange={(e) => setCar(e.target.value)}
              placeholder="Mercedes-AMG GT 63"
              className="h-11 bg-background/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-service">Выберите услугу</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger id="lead-service" className="h-11 bg-background/60">
                <SelectValue placeholder="Услуга" />
              </SelectTrigger>
              <SelectContent>
                {SERVICES_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" size="lg" className="h-12 w-full text-sm font-bold uppercase tracking-widest shadow-crimson">
            Отправить заявку
          </Button>
          <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
