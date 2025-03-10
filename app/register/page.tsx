import Image from "next/image";
import { RegisterForm } from "./components/register-form";

export default function RegisterPage() {
  return (
    <div className="bg-custom-light-green flex items-center justify-center w-full min-w-screen min-h-screen lg:p-10">
      <div className="bg-white shadow-xl mx-auto grid rounded-sm w-full min-h-screen lg:w-auto lg:min-h-0">
        <div className="p-10 lg:flex flex-col justify-center items-center w-full min-h-screen lg:min-h-0">
          <div className="flex justify-center mb-4">
            <Image
              src="/flow-cash-logo.png"
              width={120}
              height={120}
              alt="flow-cash-logo"
            />
          </div>
          <div className="grid gap-1 text-center pb-5">
            <h1 className="text-2xl text-primary font-bold">Inscription</h1>
            <p className="text-sm text-balance text-muted-foreground">
              Veuillez remplir le formulaire ci-dessous
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
