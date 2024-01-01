import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css'
import { ReCaptchaProvider } from "next-recaptcha-v3";
import {FirebaseProvider} from "@/app/provider/firebase_provider";


export const metadata = {
  title: "Ryoga's Website",
  description: "This is Ryoga Mori's portfolio website.",
}

export default function RootLayout({children}) {
  return (
      <html lang="en">
        <body>
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
            <FirebaseProvider>
                {children}
            </FirebaseProvider>
        </ReCaptchaProvider>
        </body>
      </html>
  )
}
