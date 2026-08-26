"use client";

interface ResultCardProps {
  isOpen: boolean;
  onRestart: () => void;
  onReview: () => void; // चुका तपासण्यासाठी
  metrics: {
    totalTargetWords: number;
    typedWordsCount: number;
    correctWordsCount: number;
    wrongWordsCount: number;
    remainingWordsCount: number;
    mistakesCount: number;
    marksObtained: number;
    totalMarks: number;
    passingMarks: number;
    wpm: number;
    accuracy: number;
    targetSpeed: number;
    language: string;
    isPassed: boolean;
  };
}

export default function ResultCard({
  isOpen,
  onRestart,
  onReview,
  metrics,
}: ResultCardProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className={`p-6 text-center text-white ${metrics.isPassed ? "bg-emerald-600" : "bg-rose-600"}`}>
          <div className="text-4xl mb-2">{metrics.isPassed ? "🏆" : "❌"}</div>
          <h2 className="text-2xl font-black tracking-wide">
            {metrics.isPassed ? "निकाल: उत्तीर्ण (PASS)" : "निकाल: अनुत्तीर्ण (FAIL)"}
          </h2>
          <p className="text-sm opacity-90 mt-1 font-medium">
            GCC-TBC {metrics.language === "marathi" ? "मराठी" : "इंग्रजी"} {metrics.targetSpeed} WPM अधिकृत स्पीड टेस्ट
          </p>
        </div>

        {/* Metrics Body */}
        <div className="p-6 space-y-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
            <div>
              <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                प्राप्त गुण (Marks)
              </span>
              <span className={`text-3xl font-black ${metrics.isPassed ? "text-emerald-400" : "text-rose-400"}`}>
                {metrics.marksObtained} <span className="text-base text-slate-500 font-normal">/ {metrics.totalMarks}</span>
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block font-semibold">उत्तीर्ण निकष</span>
              <span className="text-sm font-bold text-amber-400">किमान १६ / ४० गुण</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 block font-medium">गती (Speed WPM)</span>
              <span className="text-2xl font-bold text-sky-400">{metrics.wpm}</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 block font-medium">अचूकता (Accuracy)</span>
              <span className={`text-2xl font-bold ${metrics.accuracy >= 90 ? "text-emerald-400" : "text-amber-400"}`}>
                {metrics.accuracy}%
              </span>
            </div>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700 space-y-2 text-sm">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block border-b border-slate-800 pb-1">
              शब्दांचे विश्लेषण
            </span>
            <div className="flex justify-between items-center text-slate-300">
              <span>📄 एकूण शब्द:</span>
              <span className="font-bold text-slate-100">{metrics.totalTargetWords}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>✅ बरोबर शब्द:</span>
              <span className="font-bold text-emerald-400">{metrics.correctWordsCount}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>❌ चुकलेले शब्द:</span>
              <span className="font-bold text-rose-400">{metrics.wrongWordsCount}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>⏳ न टाईप केलेले शब्द:</span>
              <span className="font-bold text-amber-400">{metrics.remainingWordsCount}</span>
            </div>
          </div>

          {/* Buttons: Review Mistakes & Restart */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={onReview}
              className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold rounded-xl transition duration-150 text-sm border border-slate-600"
            >
              🔍 चुका तपासा (Review)
            </button>
            <button
              onClick={onRestart}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition duration-150 shadow-lg text-sm"
            >
              नवीन सराव (Restart)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}