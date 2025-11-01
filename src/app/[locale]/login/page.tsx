// src/app/[locale]/login/page.tsx
// Displays the login form using the shared AuthForm component.

import AuthForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm mode="login" />
    </div>
  );
}
