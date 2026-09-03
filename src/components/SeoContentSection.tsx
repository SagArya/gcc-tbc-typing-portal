// src/components/SeoContentSection.tsx
import React from "react";
import { CheckCircle2, HelpCircle, BookOpen, Award, Sparkles } from "lucide-react";

export default function SeoContentSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200">
      {/* 1. Main Header */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MSCE Pune & GCC-TBC Exam Preparation 2026</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Maharashtra GCC-TBC Typing Practice Exam 2026
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          महाराष्ट्र राज्य परीक्षा परिषदेच्या अधिकृत पॅटर्ननुसार <strong>मराठी ३०/४० श.प्र.मि.</strong> आणि{" "}
          <strong>English 30/40/50/60 WPM</strong> टायपिंग सराव, मागील सत्रांचे अधिकृत उताऱ्यांचे बॅचेस आणि अचूक गुणांकन.
        </p>
      </div>

      {/* 2. Target Speeds */}
      <div className="mb-14">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">
          उपलब्ध परीक्षा सत्रे आणि टायपिंग गती (GCC-TBC Speeds)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-2.5">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
              <Award className="w-5 h-5" />
              <h3 className="text-base font-bold">मराठी ३० शब्द प्रति मिनिट</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              GCC TBC Marathi 30 परीक्षेसाठी Remington GAIL कीबोर्ड सराव. काना-मात्रा, वेलांटी आणि विसर्गाची अचूक तपासणी.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-2.5">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold">
              <Award className="w-5 h-5" />
              <h3 className="text-base font-bold">English 30 & 40 WPM Speed Test</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              इंग्रजी ३० व ४० WPM गतीसाठी रिअल-टाइम ७ मिनिटांचा टायमर, बॅकस्पेस नियम, आणि अचूक Gross/Net WPM गणना.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <BookOpen className="w-5 h-5" />
              <h3 className="text-base font-bold">सर्व सत्रांचे उताऱ्यांचे बॅचेस</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              July 2026, April 2026, January 2026 आणि October 2025 चे ओरिजिनल GCC-TBC Batch Passages सरावासाठी मोफत उपलब्ध.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Guidelines */}
      <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-500" />
          <span>GCC-TBC टायपिंग परीक्षा नियम आणि सराव पद्धती</span>
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
            <span><strong>७ मिनिटांचा वेळ:</strong> मुख्य परीक्षेत उतारा पूर्ण करण्यासाठी ७ मिनिटे (४२० सेकंद) मिळतात.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
            <span><strong>४० गुणांची विभागणी:</strong> एकूण ४० गुणांची परीक्षा असते, उत्तीर्ण होण्यासाठी किमान १६ गुण आवश्यक असतात.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
            <span><strong>स्मार्ट रिव्ह्यू:</strong> परीक्षेनंतर कोणत्या चुका झाल्या व कोणते शब्द सुटले हे तपासून सराव सुधारा.</span>
          </li>
        </ul>
      </div>

      {/* 4. FAQ Section */}
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-500" />
            <span>सतत विचारले जाणारे प्रश्न (Frequently Asked Questions)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-1.5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              १. GCC-TBC मराठी ३० परीक्षेसाठी कोणता कीबोर्ड लेआउट लागतो?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              GCC-TBC मराठी परीक्षेसाठी प्रामुख्याने <strong>Remington Marathi (GAIL)</strong> कीबोर्ड लेआउट वापरला जातो.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-1.5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              २. GCC-TBC टायपिंग परीक्षेत उत्तीर्ण होण्यासाठी किती गुण लागतात?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              स्पीड पॅसेज चाचणी ही एकूण ४० गुणांची असते. उत्तीर्ण होण्यासाठी किमान १६ गुण मिळवणे बंधनकारक असते.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-1.5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              ३. येथे सराव करण्यासाठी जुन्या परीक्षांचे उताऱ्यांचे बॅचेस उपलब्ध आहेत का?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              होय, येथे July 2026, April 2026, January 2026 आणि October 2025 या परीक्षा सत्रांचे ३० आणि ४० WPM चे सर्व अधिकृत बॅच पॅसेजेस उपलब्ध आहेत.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-1.5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              ४. टाईप करताना एका चुकीमुळे पुढचे सर्व शब्द लाल होतात का?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              नाही, प्रगत LCS (Diff Alignment) अल्गोरिदममुळे एखादा शब्द सुटला तरी उर्वरित बरोबर टाईप केलेले शब्द अचूक ओळखले जातात आणि फक्त चुकलेला शब्दच लाल दिसतो.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}