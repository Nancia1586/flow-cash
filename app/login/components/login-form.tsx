import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LoginForm = () => {
  return (
    <div className="grid gap-5 w-full lg:w-[280px]">
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Entrez votre adresse email"
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          type="password"
          id="password"
          placeholder="Entrez votre mot de passe"
        />
      </div>
      <div className="grid gap-3">
        <Button>Se connecter</Button>
        <p className="text-sm text-balance text-muted-foreground text-center">
          Pas encore de compte ?{" "}
          <a href="/register" className="text-primary">
            S&apos;inscrire
          </a>
        </p>
      </div>
    </div>
  );
};
