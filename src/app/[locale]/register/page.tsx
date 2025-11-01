// src/app/[locale]/register/page.tsx
// Displays the registration form using the shared AuthForm component.

import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm mode="register" />
    </div>
  );
}
