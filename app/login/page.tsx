import { LoginForm } from "./components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-custom-light-green flex items-center justify-center w-full min-w-screen min-h-screen">
      <div className="bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-sm w-full min-h-screen lg:w-auto lg:min-h-0">
        <div className="hidden lg:flex bg-custom-green justify-center items-center">
          <Image
            src="/flow-cash-logo.png"
            width={250}
            height={250}
            alt="flow-cash-logo"
          />
        </div>
        <div className="p-10 lg:flex flex-col justify-center items-center w-full min-h-screen lg:min-h-0">
          <div className="lg:hidden flex justify-center mb-4">
            <Image
              src="/flow-cash-logo.png"
              width={120}
              height={120}
              alt="flow-cash-logo"
            />
          </div>
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
