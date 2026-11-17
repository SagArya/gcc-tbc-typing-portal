// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // तुमचे कस्टम डोमेन घेतल्यावर येथे अपडेट करा (किंवा .env मध्ये NEXT_PUBLIC_SITE_URL सेट करा)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gcctbctyping.in";

  // १. मुख्य टूल, मार्गदर्शक आणि AdSense कायदेशीर पेजेस
  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/speed-test`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mcq-test`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lessons`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/typing-practice`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/exam-guide`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  // २. सर्व ६१ मराठी टायपिंग धडे (mr-lesson-1 ते mr-lesson-61)
  const marathiLessonRoutes: MetadataRoute.Sitemap = Array.from(
    { length: 61 },
    (_, i) => ({
      url: `${baseUrl}/lessons/mr-lesson-${i + 1}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    })
  );

  return [...mainRoutes, ...marathiLessonRoutes];
}