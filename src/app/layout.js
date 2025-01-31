import { ubuntuRegular } from "@/styles/font";
import "./globals.css";

export const metadata = {
  title: "Multi Step Form",
  description: "A onboarding component",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntuRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
