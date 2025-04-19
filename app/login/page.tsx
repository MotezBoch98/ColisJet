import ColisJetLogo from '@/app/ui/colisjet-logo';
import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login | ColisJet',
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        {/* Logo Header - More compact and centered */}
        <div className="flex flex-col items-center">
          <div className="mb-6 w-40 text-gray-900"> {/* Adjust width as needed */}
            <ColisJetLogo />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-gray-600">Please log in to continue</p>
        </div>

        {/* Login Form */}
        <Suspense>
          <LoginForm />
        </Suspense>

        {/* Optional Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
            Contact support
          </a>
        </div>
      </div>
    </main>
  );
}