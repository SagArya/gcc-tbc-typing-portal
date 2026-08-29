// src/data/mcq/marathi/msWord.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const MS_WORD_MARATHI_MCQ: MCQQuestion[] = [
  // --- भाग १: बेसिक, फॉरमॅटिंग आणि शॉर्टकट कीज (१ ते ५०) ---
  {
    id: 1,
    question: "MS Word 2013 आणि त्यापुढील आवृत्तीत तयार केलेल्या फाईलचे डिफॉल्ट एक्स्टेंशन कोणते असते?",
    options: [".doc", ".docx", ".dotx", ".txt"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 2,
    question: "तयार केलेले डॉक्युमेंट सेव्ह (Save) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + S", "Ctrl + A", "Ctrl + V", "Ctrl + P"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 3,
    question: "'Save As' चा डायलॉग बॉक्स उघडण्यासाठी कोणती की वापरली जाते?",
    options: ["F12", "Shift + F12", "Ctrl + F12", "Alt + F12"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 4,
    question: "मजकूर मध्यभागी (Center Alignment) घेण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + C", "Ctrl + E", "Ctrl + J", "Ctrl + L"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 5,
    question: "मजकुराच्या दोन्ही बाजू समान (Justify) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + J", "Ctrl + R", "Ctrl + E", "Ctrl + Shift + J"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 6,
    question: "MS Word मध्ये स्पेलिंग आणि व्याकरण (Spelling & Grammar) तपासण्यासाठी कोणती की वापरतात?",
    options: ["F5", "F7", "F9", "F11"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 7,
    question: "'Find and Replace' चा डायलॉग बॉक्स उघडण्यासाठी कोणती शॉर्टकट की आहे?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + R", "Ctrl + G"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 8,
    question: "एकाच वेळी अनेक व्यक्तींना एकच पत्र पाठवण्यासाठी MS Word मधील कोणते फिचर वापरतात?",
    options: ["Macro", "Mail Merge", "Template", "Hyperlink"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 9,
    question: "MS Word मध्ये पेजचे डिफॉल्ट ओरिएंटेशन (Orientation) कोणते असते?",
    options: ["Landscape", "Portrait", "Gutter", "Custom"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 10,
    question: "MS Word मध्ये कमाल (जास्तीत जास्त) झूम किती टक्के करता येते?",
    options: ["100%", "200%", "400%", "500%"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 11,
    question: "MS Word मध्ये किमान (कमीत कमी) झूम किती टक्के करता येते?",
    options: ["10%", "20%", "5%", "1%"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 12,
    question: "अक्षराच्या खाली लहान अक्षर किंवा अंक लिहिण्यासाठी (उदा. H₂O) कोणते फॉरमॅटिंग वापरतात?",
    options: ["Subscript (Ctrl + =)", "Superscript", "Drop Cap", "Strikethrough"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 13,
    question: "अक्षराच्या डोक्यावर लहान अक्षर किंवा अंक लिहिण्यासाठी (उदा. X²) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + =", "Ctrl + Shift + =", "Alt + Ctrl + =", "Shift + F3"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 14,
    question: "निवडलेल्या अक्षरांचा केस (Change Case) बदलण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + F3", "Shift + F3", "Alt + F3", "Ctrl + Shift + C"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 15,
    question: "MS Word मध्ये नवीन पेज ब्रेक (Page Break) इन्सर्ट करण्यासाठी कोणती शॉर्टकट की आहे?",
    options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Ctrl + Space"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 16,
    question: "नवीन पॅराग्राफ सुरू न करता फक्त नवीन ओळ (Line Break) घेण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Tab"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 17,
    question: "निवडलेल्या मजकुराचा फॉन्ट आकार १ पॉइंटने वाढवण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + ]", "Ctrl + [", "Ctrl + Shift + >", "Alt + ]"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 18,
    question: "निवडलेल्या मजकुराचा फॉन्ट आकार १ पॉइंटने कमी करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + [", "Ctrl + ]", "Ctrl + Shift + <", "Alt + ["],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 19,
    question: "'Header and Footer' चा पर्याय कोणत्या टॅबमध्ये उपलब्ध असतो?",
    options: ["Home", "Insert", "Page Layout", "References"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 20,
    question: "पानाच्या मागे फिकट मजकूर किंवा चित्र दाखवण्यासाठी (Watermark) कोणत्या टॅबचा वापर केला जातो?",
    options: ["Home", "Design (किंवा Page Layout)", "View", "Review"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 21,
    question: "पुस्तकाच्या किंवा पानांच्या बाइंडिंगसाठी (Binding) सोडल्या जाणाऱ्या जागेला काय म्हणतात?",
    options: ["Header Margin", "Footer Margin", "Gutter Margin", "Mirror Margin"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 22,
    question: "Format Painter द्वारे फक्त फॉरमॅटिंग कॉपी करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + C", "Ctrl + Shift + C", "Alt + Shift + C", "Ctrl + Alt + C"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 23,
    question: "कॉपी केलेले फॉरमॅटिंग दुसऱ्या मजकुरावर लागू (Paste) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + V", "Ctrl + Shift + V", "Alt + Shift + V", "Ctrl + Alt + V"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 24,
    question: "शब्दाखाली येणारी लाल नागमोडी रेघ (Wavy Red Line) काय दर्शवते?",
    options: ["व्याकरणाची चूक", "स्पेलिंगची चूक (Spelling Error)", "फॉरमॅटिंग चूक", "हायपरलिंक"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 25,
    question: "शब्दाखाली किंवा वाक्याखाली येणारी निळी/हिरवी नागमोडी रेघ काय दर्शवते?",
    options: ["स्पेलिंगची चूक", "व्याकरणाची चूक (Grammar Error)", "फॉन्ट मिसिंग", "प्रिंट एरर"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 26,
    question: "MS Word मध्ये हायपरलिंक (Hyperlink) जोडण्यासाठी कोणती शॉर्टकट की वापरली जाते?",
    options: ["Ctrl + H", "Ctrl + K", "Ctrl + L", "Ctrl + Shift + K"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 27,
    question: "हँगिंग इंडेंट (Hanging Indent) तयार करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + T", "Ctrl + M", "Ctrl + H", "Ctrl + Shift + T"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 28,
    question: "पॅराग्राफ डाव्या बाजूने पुढे ढकलण्यासाठी (Indent) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + M", "Ctrl + I", "Ctrl + Tab", "Ctrl + Shift + M"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 29,
    question: "दिलेला पॅराग्राफ इंडेंट काढून मूळ जागेवर आणण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + Shift + M", "Ctrl + Q", "Ctrl + Shift + T", "Alt + Backspace"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 30,
    question: "समानार्थी शब्द शोधण्यासाठी 'Thesaurus' उघडण्याची शॉर्टकट की कोणती आहे?",
    options: ["Shift + F7", "Ctrl + F7", "Alt + F7", "F7"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 31,
    question: "पॅराग्राफचे पहिले अक्षर मोठे आणि ठळक दाखवण्यासाठी कोणत्या पर्यायाचा वापर केला जातो?",
    options: ["WordArt", "Drop Cap", "Clip Art", "SmartArt"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 32,
    question: "Drop Cap द्वारे डिफॉल्ट स्वरूपात पहिले अक्षर किती ओळींपर्यंत खाली येते?",
    options: ["२ ओळी", "३ ओळी", "४ ओळी", "५ ओळी"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 33,
    question: "Drop Cap द्वारे जास्तीत जास्त किती ओळींपर्यंत अक्षर मोठे करता येते?",
    options: ["५", "१०", "१२", "१५"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 34,
    question: "निवडलेल्या मजकुराचे सर्व फॉरमॅटिंग काढून टाकण्यासाठी (Clear Formatting) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Spacebar", "Ctrl + Shift + N", "Ctrl + Del", "Ctrl + Alt + C"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 35,
    question: "Font डायलॉग बॉक्स उघडण्यासाठी कोणती शॉर्टकट की वापरली जाते?",
    options: ["Ctrl + D", "Ctrl + F", "Ctrl + Shift + F", "A आणि C दोन्ही"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 36,
    question: "खालीलपैकी कोणता वैध फॉन्ट प्रकार (Font Style) नाही?",
    options: ["Bold", "Italic", "Regular", "Superscript"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 37,
    question: "MS Word 2016/2019 मध्ये डिफॉल्ट लाईन स्पेसिंग किती असते?",
    options: ["1.0", "1.08", "1.15", "1.5"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 38,
    question: "सिंगल लाईन स्पेसिंग (1.0 Line Space) देण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 5", "Alt + 1"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 39,
    question: "डबल लाईन स्पेसिंग (2.0 Line Space) देण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + 2", "Ctrl + D", "Ctrl + Shift + 2", "Alt + 2"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 40,
    question: "1.5 लाईन स्पेसिंग देण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + 5", "Ctrl + 1.5", "Shift + F5", "Alt + 5"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 41,
    question: "डॉक्युमेंट प्रिंट झाल्यावर कसे दिसेल हे पाहण्यासाठी कोणता व्ह्यू (View) वापरला जातो?",
    options: ["Draft View", "Outline View", "Print Layout View", "Web Layout View"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 42,
    question: "वारंवार कराव्या लागणाऱ्या कामांचे रेकॉर्डिंग करून ऑटोमॅटिक करण्यासाठी काय वापरतात?",
    options: ["Macro", "Template", "Mail Merge", "AutoText"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 43,
    question: "MS Word मध्ये मॅक्रो (Macro) तयार करण्यासाठी कोणती प्रोग्रामिंग भाषा वापरली जाते?",
    options: ["C++", "Python", "VBA (Visual Basic for Applications)", "Java"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 44,
    question: "डॉक्युमेंटच्या सर्वात शेवटी येणाऱ्या टीपेला काय म्हणतात?",
    options: ["Footnote", "Endnote", "Header", "Footer"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 45,
    question: "प्रत्येक पानाच्या तळाशी येणाऱ्या स्पष्टीकरणात्मक टीपेला काय म्हणतात?",
    options: ["Footnote", "Endnote", "Watermark", "Header"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 46,
    question: "Footnote जोडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + Ctrl + F", "Alt + Shift + F", "Ctrl + F", "Alt + F"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 47,
    question: "Endnote जोडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + Ctrl + D", "Alt + Shift + D", "Ctrl + E", "Alt + E"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 48,
    question: "डॉक्युमेंट विंडो दोन भागात विभागण्यासाठी कोणता पर्याय वापरतात?",
    options: ["Split Window", "Divide View", "Dual Screen", "Switch Window"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 49,
    question: "MS Word मधील टेबलमध्ये जास्तीत जास्त किती कॉलम्स (Columns) टाकता येतात?",
    options: ["32", "45", "63", "100"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 50,
    question: "टेबलमधील पुढील सेलमध्ये जाण्यासाठी कोणती की वापरतात?",
    options: ["Tab", "Enter", "Right Arrow", "Shift + Tab"],
    correctAnswer: 0,
    category: "MS Word"
  },

  // --- भाग २: टेबल्स, ग्राफिक्स आणि प्रगत फिचर्स (५१ ते १००) ---
  {
    id: 51,
    question: "टेबलमधील मागील सेलमध्ये परत जाण्यासाठी कोणती की वापरतात?",
    options: ["Shift + Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Left Arrow"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 52,
    question: "टेबलच्या सर्वात शेवटच्या सेलमध्ये असताना नवीन रो (Row) जोडण्यासाठी कोणती की दाबतात?",
    options: ["Enter", "Tab", "Shift + Enter", "Ctrl + Enter"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 53,
    question: "Home टॅबवरील फॉन्ट साईझ ड्रॉपडाउनमध्ये सर्वात लहान आणि सर्वात मोठा आकार कोणता असतो?",
    options: ["6 आणि 72", "8 आणि 72", "8 आणि 96", "10 आणि 72"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 54,
    question: "MS Word मध्ये टाईप करून जास्तीत जास्त किती फॉन्ट साईझ देता येते?",
    options: ["500", "1000", "1638", "2048"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 55,
    question: "MS Word मध्ये टाईप करून कमीत कमी किती फॉन्ट साईझ देता येते?",
    options: ["0.5", "1", "2", "4"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 56,
    question: "मजकूर डाव्या बाजूला अलाइन (Left Align) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + L", "Ctrl + Shift + L", "Alt + L", "Ctrl + Shift + Left"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 57,
    question: "मजकूर उजव्या बाजूला अलाइन (Right Align) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "Ctrl + Shift + Right"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 58,
    question: "टाईप करताना होणाऱ्या सामान्य चुका आपोआप सुधारणाऱ्या फिचरला काय म्हणतात?",
    options: ["AutoCorrect", "AutoFormat", "SmartArt", "AutoText"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 59,
    question: "डॉक्युमेंटमध्ये चालू तारीख (Current Date) इन्सर्ट करण्यासाठी कोणती शॉर्टकट की आहे?",
    options: ["Shift + Alt + D", "Ctrl + Shift + D", "Alt + Ctrl + D", "F5"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 60,
    question: "डॉक्युमेंटमध्ये चालू वेळ (Current Time) इन्सर्ट करण्यासाठी कोणती शॉर्टकट की आहे?",
    options: ["Shift + Alt + T", "Ctrl + Shift + T", "Alt + Ctrl + T", "F9"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 61,
    question: "केलेली शेवटची क्रिया पूर्ववत करण्यासाठी (Undo) कोणती की वापरतात?",
    options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + X"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 62,
    question: "Undo केलेली क्रिया पुन्हा करण्यासाठी (Redo) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Y", "Ctrl + R", "Ctrl + Shift + Z", "A आणि C दोन्ही"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 63,
    question: "संपूर्ण डॉक्युमेंट एकाच वेळी निवडण्यासाठी (Select All) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + A", "Ctrl + E", "Ctrl + Shift + A", "Alt + A"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 64,
    question: "शब्दावर दोनदा क्लिक (Double Click) केल्यास काय निवडले जाते?",
    options: ["संपूर्ण पॅराग्राफ", "तो संपूर्ण शब्द (Single Word)", "संपूर्ण ओळ", "डॉक्युमेंट"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 65,
    question: "पॅराग्राफवर तीनदा क्लिक (Triple Click) केल्यास काय होते?",
    options: ["संपूर्ण पॅराग्राफ निवडला जातो", "एकच वाक्य निवडले जाते", "डॉक्युमेंट निवडले जाते", "अक्षर निवडले जाते"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 66,
    question: "कर्सरच्या जागेपासून ओळीच्या सुरुवातीपर्यंत मजकूर निवडण्यासाठी कोणती की वापरतात?",
    options: ["Shift + Home", "Ctrl + Home", "Alt + Home", "Shift + Up Arrow"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 67,
    question: "कर्सरच्या जागेपासून ओळीच्या शेवटापर्यंत मजकूर निवडण्यासाठी कोणती की वापरतात?",
    options: ["Shift + End", "Ctrl + End", "Alt + End", "Shift + Down Arrow"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 68,
    question: "कर्सर थेट डॉक्युमेंटच्या सुरुवातीला नेण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Home", "Home", "Alt + Home", "Shift + Home"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 69,
    question: "कर्सर थेट डॉक्युमेंटच्या शेवटी नेण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + End", "End", "Alt + End", "Shift + End"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 70,
    question: "डॉक्युमेंटमधील केलेले बदल आणि दुरुस्त्या नोंदवून ठेवण्यासाठी कोणते फिचर वापरतात?",
    options: ["Track Changes", "Document Compare", "Version History", "Protect Document"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 71,
    question: "Track Changes चालू किंवा बंद करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + E", "Ctrl + Alt + E", "Ctrl + Shift + T", "Alt + R"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 72,
    question: "Track Changes आणि Compare Documents हे पर्याय कोणत्या टॅबमध्ये असतात?",
    options: ["Review", "View", "References", "Insert"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 73,
    question: "टेबलमधील दोन किंवा अधिक सेल्स एकत्र करून एकच सेल बनवण्यासाठी काय वापरतात?",
    options: ["Split Cells", "Merge Cells", "Combine Cells", "Unify Cells"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 74,
    question: "टेबलमधील एका सेलचे अनेक सेल्समध्ये विभाजन करण्यासाठी कोणता पर्याय वापरतात?",
    options: ["Split Cells", "Break Cell", "Divide Cell", "Distribute Rows"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 75,
    question: "विशिष्ट पानावर किंवा ओळीवर थेट जाण्यासाठी (Go To) कोणती की वापरतात?",
    options: ["Ctrl + G", "F5", "Ctrl + Shift + G", "A आणि B दोन्ही"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 76,
    question: "पुस्तकाची अनुक्रमणिका (Table of Contents) तयार करण्याचा पर्याय कोणत्या टॅबमध्ये असतो?",
    options: ["References", "Insert", "Page Layout", "Review"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 77,
    question: "आकर्षक, 3D आणि रंगीबेरंगी अक्षरे तयार करण्यासाठी कोणते टूल वापरतात?",
    options: ["WordArt", "SmartArt", "ClipArt", "TextBox"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 78,
    question: "प्रक्रिया, क्रम किंवा संस्थात्मक तक्ता (Org Chart) दाखवण्यासाठी काय वापरतात?",
    options: ["SmartArt", "WordArt", "Charts", "Shapes"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 79,
    question: "कॉपीराइट चिन्ह (©) तयार करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + Ctrl + C", "Ctrl + Shift + C", "Alt + Shift + C", "Ctrl + C"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 80,
    question: "रजिस्टर्ड ट्रेडमार्क चिन्ह (®) तयार करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + Ctrl + R", "Ctrl + Shift + R", "Alt + Shift + R", "Ctrl + R"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 81,
    question: "ट्रेडमार्क चिन्ह (™) तयार करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + Ctrl + T", "Ctrl + Shift + T", "Alt + Shift + T", "Ctrl + T"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 82,
    question: "Tab की दाबल्यावर कर्सर डिफॉल्ट स्वरूपात किती अंतर पुढे जातो?",
    options: ["0.25 इंच", "0.5 इंच", "0.75 इंच", "1.0 इंच"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 83,
    question: "दशांश चिन्हावर संख्यांची मांडणी सरळ ठेवण्यासाठी कोणता टॅब स्टॉप वापरतात?",
    options: ["Decimal Tab", "Bar Tab", "Center Tab", "Right Tab"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 84,
    question: "चित्राच्या भोवती मजकूर योग्यरीत्या बसवण्यासाठी (Flow) कोणता पर्याय वापरतात?",
    options: ["Wrap Text", "Align Text", "Position Image", "Format Shape"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 85,
    question: "चित्र मजकुराच्या मागे पाठवून त्यावर मजकूर टाईप करण्यासाठी कोणता पर्याय वापरतात?",
    options: ["Behind Text", "In Front of Text", "Through", "Tight"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 86,
    question: "त्याच पानावर नवीन सेक्शन सुरू करण्यासाठी कोणता सेक्शन ब्रेक वापरतात?",
    options: ["Continuous", "Next Page", "Even Page", "Odd Page"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 87,
    question: "पुढील नवीन पानावरून सेक्शन सुरू करण्यासाठी कोणता ब्रेक वापरतात?",
    options: ["Next Page", "Continuous", "Even Page", "Odd Page"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 88,
    question: "प्रिंट न होणारी चिन्हे (उदा. पॅराग्राफ मार्क ¶) दाखवण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + Shift + 8 (Ctrl + *)", "Ctrl + Shift + P", "Ctrl + Alt + 8", "Alt + Shift + P"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 89,
    question: "प्रिंट प्रिव्ह्यू (Print Preview) उघडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + F2", "Ctrl + P", "Alt + Ctrl + I", "वरील सर्व"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 90,
    question: "कर्सरच्या डाव्या बाजूचा संपूर्ण एक शब्द एकाच वेळी डिलीट करण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + Backspace", "Backspace", "Ctrl + Delete", "Shift + Backspace"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 91,
    question: "कर्सरच्या उजव्या बाजूचा संपूर्ण एक शब्द एकाच वेळी डिलीट करण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + Delete", "Delete", "Shift + Delete", "Alt + Delete"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 92,
    question: "मजकुराला सामान्य शैली (Normal Style) लागू करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + N", "Ctrl + Alt + N", "Ctrl + N", "Shift + N"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 93,
    question: "Heading 1 स्टाईल लागू करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + Ctrl + 1", "Ctrl + 1", "Shift + Ctrl + 1", "Alt + 1"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 94,
    question: "Heading 2 स्टाईल लागू करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + Ctrl + 2", "Ctrl + 2", "Shift + Ctrl + 2", "Alt + 2"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 95,
    question: "Heading 3 स्टाईल लागू करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + Ctrl + 3", "Ctrl + 3", "Shift + Ctrl + 3", "Alt + 3"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 96,
    question: "तयार केलेले हेडर, फुटर किंवा मजकूर ब्लॉक पुन्हा वापरण्यासाठी कशात सेव्ह करतात?",
    options: ["Quick Parts", "WordArt", "Mail Merge", "Macro Library"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 97,
    question: "MS Word टेम्पलेट फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".dotx", ".docx", ".temx", ".docm"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 98,
    question: "मॅक्रो सुरू असलेल्या (Macro-Enabled) वर्ड फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".docm", ".dotm", ".docx", ".docb"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 99,
    question: "स्क्रीनवर एकाच वेळी दोन पाने शेजारी पाहण्यासाठी कोणता पर्याय वापरतात?",
    options: ["Multiple Pages", "Side by Side View", "Split Screen", "Two Pages Layout"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 100,
    question: "सध्या चालू असलेले डॉक्युमेंट बंद करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + W", "Ctrl + F4", "Alt + F4", "A आणि B दोन्ही"],
    correctAnswer: 3,
    category: "MS Word"
  }
];