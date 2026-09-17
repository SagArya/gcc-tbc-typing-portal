"use client";

import React, { useMemo } from "react";

interface MistakeReviewerProps {
  originalText: string;
  userTypedText: string;
}

// 🛠️ मराठी युनिकोड आणि कॅनोनीकल नॉर्मलायझेशन
function normalizeText(str: string): string {
  if (!str) return "";
  return str
    .replace(/[\u200B-\u200D\uFEFF\u00AD\u00A0]/g, "")
    .replace(/[,\.!?:;'"।॥\(\)\[\]\{\}\+\-=_/\\`~]/g, "")
    .replace(/\u0907[\u094D\u0930\u200C\u200D]+/g, "\u0908")
    .replace(/\u0907\u0930\u094D/g, "\u0908")
    .replace(/इर्/g, "ई")
    .replace(/\u093E\u0947/g, "\u094B")
    .replace(/\u0947\u093E/g, "\u094B")
    .replace(/\u093E\u0948/g, "\u094C")
    .replace(/\u0948\u093E/g, "\u094C")
    .replace(/\u093E\u0945/g, "\u0949")
    .replace(/\u0945\u093E/g, "\u0949")
    .replace(/:/g, "\u0903")
    .normalize("NFC")
    .trim();
}

type DiffItem =
  | { type: "match"; word: string }
  | { type: "error"; userWord: string; expectedWord?: string }
  | { type: "omitted"; expectedWord: string };

export default function MistakeReviewer({
  originalText,
  userTypedText,
}: MistakeReviewerProps) {
  const diffTokens = useMemo(() => {
    const origTokens = originalText.trim().split(/\s+/).filter(Boolean);
    const typedTokens = userTypedText.trim().split(/\s+/).filter(Boolean);

    const m = typedTokens.length;
    const n = origTokens.length;

    // LCS Dynamic Programming Matrix
    const dp: number[][] = Array.from({ length: m + 1 }, () =>
      new Array(n + 1).fill(0)
    );

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (normalizeText(typedTokens[i]) === normalizeText(origTokens[j])) {
          dp[i + 1][j + 1] = dp[i][j] + 1;
        } else {
          dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
        }
      }
    }

    // 🎯 नवीन स्मार्ट अलाइनमेंट (Substitution + Skipped/Extra Words)
    const result: DiffItem[] = [];
    let i = m;
    let j = n;

    while (i > 0 || j > 0) {
      if (
        i > 0 &&
        j > 0 &&
        normalizeText(typedTokens[i - 1]) === normalizeText(origTokens[j - 1])
      ) {
        // १. शब्द बरोबर जुळला
        result.push({
          type: "match",
          word: typedTokens[i - 1],
        });
        i--;
        j--;
      } else if (
        i > 0 &&
        j > 0 &&
        dp[i - 1][j] === dp[i][j] &&
        dp[i][j - 1] === dp[i][j]
      ) {
        // २. 🎯 Substitution (एका शब्दाच्या जागी चुकीचा स्पेलिंग टाईप झाला)
        // इथे 1 चूक मोजली जाईल, आणि expectedWord तंतोतंत तोच शब्द असेल!
        result.push({
          type: "error",
          userWord: typedTokens[i - 1],
          expectedWord: origTokens[j - 1],
        });
        i--;
        j--;
      } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
        // ३. मूळ उताऱ्यातील शब्द पूर्णपणे सुटला (Skip झाला)
        result.push({
          type: "omitted",
          expectedWord: origTokens[j - 1],
        });
        j--;
      } else if (i > 0) {
        // ४. युझरने अतिरिक्त टाईप केलेला शब्द (Extra Word)
        result.push({
          type: "error",
          userWord: typedTokens[i - 1],
        });
        i--;
      }
    }

    return result.reverse();
  }, [originalText, userTypedText]);

  return (
    <div className="flex-1 bg-slate-950 p-4 sm:p-5 rounded-xl border border-slate-800 text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[520px]">
      <div className="flex flex-wrap gap-x-2 gap-y-2.5 items-center">
        {diffTokens.map((token, index) => {
          // १. बरोबर जुळलेला शब्द
          if (token.type === "match") {
            return (
              <span key={index} className="text-emerald-400 font-medium">
                {token.word}
              </span>
            );
          }

          // २. चुकलेला शब्द (लाल बॉक्स + खाली मूळ बरोबर शब्द)
          if (token.type === "error") {
            return (
              <span
                key={index}
                className="bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded border border-rose-500/50 inline-flex flex-col text-xs sm:text-sm"
              >
                <span className="line-through text-rose-400 font-bold">
                  {token.userWord}
                </span>
                {token.expectedWord && (
                  <span className="text-[10px] text-emerald-400 font-semibold leading-none mt-0.5">
                    ✓ {token.expectedWord}
                  </span>
                )}
              </span>
            );
          }

          // ३. टाईप न झालेला (सुटलेला) शब्द
          return (
            <span
              key={index}
              className="bg-amber-500/10 text-amber-400/80 px-1.5 py-0.5 rounded border border-dashed border-amber-500/40 text-xs sm:text-sm"
              title="हा शब्द टाईप करायचा राहिला"
            >
              {token.expectedWord} (सुटला)
            </span>
          );
        })}
      </div>
    </div>
  );
}