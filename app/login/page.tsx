import { LoginForm } from "./components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-custom-light-green flex items-center justify-center w-full min-w-screen min-h-screen">
      <div className="bg-white mx-auto grid grid-cols-1 md:grid-cols-2 rounded-sm">
        <div className="hidden md:flex bg-custom-green justify-center items-center">
          <Image
            src="/flow-cash-logo.png"
            width={250}
            height={250}
            alt="flow-cash-logo"
          />
        </div>
        <div className="p-10">
          <div className="grid gap-1 text-center pb-5">
            <h1 className="text-2xl text-primary font-bold">
              Authentification
            </h1>
            <p className="text-sm text-balance text-muted-foreground">
              Connectez-vous pour y accéder.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
