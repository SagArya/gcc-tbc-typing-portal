// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gcctbctyping.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // API मार्ग क्रॉलर्सपासून सुरक्षित ठेवण्यासाठी
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}