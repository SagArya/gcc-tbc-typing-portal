// src/app/page.tsx
import Link from "next/link";

export default function LandingHomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 -right-40 w-[500px] h-[350px] bg-indigo-500/10 blur-[130px] rounded-full" />
      </div>

      {/* Top Navbar */}
      <nav className="relative z-10 w-full border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20">
              ⌨️
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                TypoMaster GCC-TBC
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Maharashtra Exam Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/typing-practice"
              className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold transition flex items-center gap-1.5"
            >
              ⚡ स्मार्ट लॅब
            </Link>
            <Link
              href="/speed-test"
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold transition shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            >
              स्पीड टेस्ट सुरू करा 🚀
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-16 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-emerald-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          अधिकृत MSCE Pune पॅटर्ननुसार १००% मोफत टायपिंग परीक्षा पोर्टल
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-slate-100 max-w-4xl mx-auto leading-tight sm:leading-tight">
          महाराष्ट्र शासकीय टंकलेखन परीक्षेत{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
            प्रथम श्रेणीत उत्तीर्ण व्हा
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          रेमिंग्टन मराठी कीबोर्ड, अचूक वेलांटी-रफार इंजिन, साइड-बाय-साइड सराव लॅब, ४० गुणांची परीक्षा पद्धती, आणि लाइव्ह वर्ड हायलाइटिंगसह सर्वोत्तम अनुभव.
        </p>

        {/* Main CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <Link
            href="/typing-practice"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-base transition shadow-xl shadow-amber-500/20 flex items-center gap-2"
          >
            ⚡ स्मार्ट टायपिंग लॅब उघडा →
          </Link>
          <Link
            href="/speed-test"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-base transition shadow-xl shadow-emerald-500/20"
          >
            ७ मिनिटांची स्पीड टेस्ट द्या
          </Link>
        </div>

        {/* Quick Launch Category Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          <Link
            href="/speed-test"
            className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/60 transition group shadow-md"
          >
            <div className="text-xs text-slate-400 font-medium">मराठी टंकलेखन</div>
            <div className="text-2xl font-bold text-emerald-400 group-hover:translate-x-1 transition mt-1">30 WPM सराव →</div>
            <div className="text-xs text-slate-500 mt-2">२१० शब्द • ७ मिनिटे चाचणी</div>
          </Link>

          <Link
            href="/speed-test"
            className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/60 transition group shadow-md"
          >
            <div className="text-xs text-slate-400 font-medium">मराठी टंकलेखन</div>
            <div className="text-2xl font-bold text-teal-400 group-hover:translate-x-1 transition mt-1">40 WPM सराव →</div>
            <div className="text-xs text-slate-500 mt-2">२८० शब्द • ७ मिनिटे चाचणी</div>
          </Link>

          <Link
            href="/speed-test"
            className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/60 transition group shadow-md"
          >
            <div className="text-xs text-slate-400 font-medium">English Typing</div>
            <div className="text-2xl font-bold text-sky-400 group-hover:translate-x-1 transition mt-1">30 & 40 WPM →</div>
            <div className="text-xs text-slate-500 mt-2">Official Passages • 7 Mins</div>
          </Link>

          <Link
            href="/speed-test"
            className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/60 transition group shadow-md"
          >
            <div className="text-xs text-slate-400 font-medium">English High Speed</div>
            <div className="text-2xl font-bold text-indigo-400 group-hover:translate-x-1 transition mt-1">50 WPM सराव →</div>
            <div className="text-xs text-slate-500 mt-2">३५० शब्द • ७ मिनिटे चाचणी</div>
          </Link>

        </div>
      </section>

      {/* Features Grid Section (Centered 3 Cards) */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-100">
            परीक्षेसाठी आवश्यक असणारी सर्व साधने एकाच ठिकाणी
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            विद्यार्थ्यांचा वेळ वाचवण्यासाठी आणि अचूक सराव होण्यासाठी तयार केलेले फीचर्स
          </p>
        </div>

        {/* Centered Grid Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          
          {/* १. नवीन स्मार्ट टायपिंग लॅब कार्ड */}
          <Link
            href="/typing-practice"
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/60 hover:bg-slate-800/60 transition group shadow-lg shadow-amber-500/5 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  NEW
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition">
                स्मार्ट टायपिंग लॅब →
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Side-by-Side सराव, मराठी/इंग्रजी मजकूर (.txt) अपलोड, थेट बोटांचे गाईड आणि कमजोर कीजचे विश्लेषण.
              </p>
            </div>
            <div className="text-[11px] text-amber-400 font-semibold mt-4 pt-3 border-t border-slate-800">
              कस्टम पॅसेज सराव • बोटांचे गाईड
            </div>
          </Link>

          {/* २. MCQ क्विझ कार्ड */}
          <Link
            href="/mcq-test"
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/60 transition group shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                📝
              </div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-teal-400 transition">
                MCQ क्विझ (५० गुण) →
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Computer Basics, MS Office, Windows व इंटरनेट विषयांवरील २५ प्रश्न आणि २४ मिनिटांची सराव परीक्षा.
              </p>
            </div>
            <div className="text-[11px] text-teal-400 font-semibold mt-4 pt-3 border-t border-slate-800">
              २५ प्रश्न • २४ मिनिटे • सविस्तर निकाल
            </div>
          </Link>

          {/* ३. कीबोर्ड रो सराव (Drills) कार्ड */}
          <Link
            href="/keyboard-drills"
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/60 transition group shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                ⌨️
              </div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-400 transition">
                कीबोर्ड रो सराव (Drills) →
              </h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Home Row, Upper Row आणि Bottom Row वरील मुळाक्षरे, काना-मात्रा व जोडाक्षरांचा पायाभूत सराव.
              </p>
            </div>
            <div className="text-[11px] text-sky-400 font-semibold mt-4 pt-3 border-t border-slate-800">
              Home Row • Top Row • Bottom Row
            </div>
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-10 text-center text-xs text-slate-500">
        <p>© 2026 TypoMaster GCC-TBC • महाराष्ट्र शासकीय टंकलेखन परीक्षा सराव पोर्टल</p>
      </footer>
    </div>
  );
}