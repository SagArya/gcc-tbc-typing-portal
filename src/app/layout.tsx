// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://typeforge-pro.vercel.app"
  ),
  title: {
    default: "TypeForge PRO | GCC-TBC Typing Exam Practice (Marathi & English)",
    template: "%s | TypeForge PRO",
  },
  description:
    "Free Maharashtra GCC-TBC speed test and typing exam practice suite. Practice official Marathi 30/40 WPM and English 30/40/50/60 WPM batch passages with real 7-minute timer, LCS mistake evaluation, and instant marks.",
  keywords: [
    "GCC TBC typing practice",
    "TypeForge PRO",
    "GCC TBC Marathi typing 30 wpm",
    "Marathi typing exam practice",
    "English typing test 30 wpm 40 wpm",
    "MSCE Pune typing exam",
    "GCC TBC previous year question passages",
    "Remington GAIL marathi keyboard",
    "GCC TBC speed test 7 minutes",
  ],
  authors: [{ name: "TypeForge PRO Team" }],
  creator: "TypeForge PRO",
  publisher: "TypeForge PRO",
  category: "Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "mr_IN",
    url: "/",
    siteName: "TypeForge PRO",
    title: "TypeForge PRO | GCC-TBC Typing Engine & Speed Test",
    description:
      "Practice official GCC-TBC Marathi and English typing passages with 7-minute exam timer, accurate mistake tracking, and instant marks evaluation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeForge PRO | GCC-TBC Typing Practice Suite",
    description:
      "Official Maharashtra GCC-TBC speed test simulation with Marathi & English batch passages.",
  },
};

// 🎯 Schema.org Combined Structured Data (WebApplication + FAQPage)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "TypeForge PRO - GCC-TBC Typing Practice",
      applicationCategory: "EducationalApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      description:
        "Online typing speed exam simulation tool for Maharashtra GCC-TBC examinations supporting Marathi and English speeds.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "GCC-TBC मराठी ३० परीक्षेसाठी कोणता कीबोर्ड लेआउट लागतो?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GCC-TBC मराठी परीक्षेसाठी प्रामुख्याने Remington Marathi (GAIL) कीबोर्ड लेआउट वापरला जातो.",
          },
        },
        {
          "@type": "Question",
          name: "GCC-TBC टायपिंग परीक्षेत उत्तीर्ण होण्यासाठी किती गुण लागतात?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "स्पीड पॅसेज चाचणी ही एकूण ४० गुणांची असते. उत्तीर्ण होण्यासाठी उमेदवाराला किमान १६ गुण मिळवणे बंधनकारक असते.",
          },
        },
        {
          "@type": "Question",
          name: "येथे सराव करण्यासाठी जुन्या परीक्षांचे उताऱ्यांचे बॅचेस उपलब्ध आहेत का?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "होय, येथे July 2026, April 2026, January 2026 आणि October 2025 या परीक्षा सत्रांचे ३० आणि ४० WPM चे सर्व अधिकृत बॅच पॅसेजेस मोफत उपलब्ध आहेत.",
          },
        },
        {
          "@type": "Question",
          name: "टाईप करताना एका चुकीमुळे पुढचे सर्व शब्द लाल होतात का?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "नाही, आमच्या प्रगत LCS (Diff Alignment) अल्गोरिदममुळे एखादा शब्द सुटला तरी उर्वरित बरोबर टाईप केलेले शब्द अचूक ओळखले जातात आणि फक्त चुकलेला शब्दच लाल दिसतो.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}