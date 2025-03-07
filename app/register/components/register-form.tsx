"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

export const RegisterForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="grid gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-15 w-full lg:w-[600px]">
        <div className="grid gap-5">
          <div className="grid gap-3">
            <Label htmlFor="lastname">Nom</Label>
            <Input
              type="lastname"
              id="lastname"
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="firstname">Prénom(s)</Label>
            <Input
              type="firstname"
              id="firstname"
              placeholder="Entrez votre prénom(s)"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="gender">Sexe</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre sexe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Homme</SelectItem>
                <SelectItem value="female">Femme</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="dateOfBirth">Date de naissance</Label>
            <DatePicker date={date} setDate={setDate} />
          </div>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-3">
            <Label htmlFor="gender">Devise utilisée</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez une devise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MGA">MGA</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
            <Label htmlFor="passwordConfirmation">
              Confirmation du mot de passe
            </Label>
            <Input
              type="password"
              id="passwordConfirmation"
              placeholder="Confirmez votre mot de passe"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-3 w-full">
        <div className="grid grid-cols-2 gap-3 w-full">
          <Button>S&apos;inscrire à Flow Cash</Button>
          <Button
            variant="outline"
            className="bg-custom-light-green text-muted-foreground"
          >
            Retour
          </Button>
        </div>
        <p className="text-sm text-balance text-muted-foreground text-center">
          Déjà un compte ?{" "}
          <a href="/login" className="text-primary">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};
