// src/data/mcq/marathi/msExcel.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const MS_EXCEL_MARATHI_MCQ: MCQQuestion[] = [
  // --- भाग १: बेसिक, सेल रचना आणि शॉर्टकट कीज (१ ते २५) ---
  {
    id: 1,
    question: "MS Excel 2013 आणि त्यापुढील आवृत्तीत वर्कबुक फाईलचे डिफॉल्ट एक्स्टेंशन कोणते असते?",
    options: [".xls", ".xlsx", ".xlsm", ".xltx"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 2,
    question: "MS Excel मध्ये रो (Row) आणि कॉलम (Column) यांच्या छेदनबिंदू किंवा जोडणीला काय म्हणतात?",
    options: ["ब्लॉक (Block)", "सेल (Cell)", "ग्रीड (Grid)", "बॉक्स (Box)"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 3,
    question: "MS Excel वर्कशीटमध्ये कॉलम्स (Columns) कशाने ओळखले जातात?",
    options: ["अंक (1, 2, 3...)", "अक्षरे (A, B, C...)", "रोमन अंक", "चिन्हे"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 4,
    question: "MS Excel वर्कशीटमध्ये रो (Rows) कशाने ओळखल्या जातात?",
    options: ["अक्षरे (A, B, C...)", "अंक (1, 2, 3...)", "अल्फा-न्यूमेरिक कोड", "चिन्हे"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 5,
    question: "MS Excel 2007 व पुढील आवृत्त्यांमध्ये एका वर्कशीटमध्ये एकूण किती रो (Rows) असतात?",
    options: ["६५,५३६", "१०,४८,५७६", "५,२४,२८८", "२,५६,०००"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 6,
    question: "MS Excel 2007 व पुढील आवृत्त्यांमध्ये एका वर्कशीटमध्ये एकूण किती कॉलम्स (Columns) असतात?",
    options: ["२५६", "१,०२४", "१६,३८४", "६५,५३६"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 7,
    question: "MS Excel वर्कशीटमधील सर्वात शेवटच्या कॉलमचे नाव कोणते असते?",
    options: ["XFD", "ZZZ", "XFC", "AZD"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 8,
    question: "सध्या निवडलेल्या ॲक्टिव्ह सेलचा पत्ता (Cell Address) कुठे दर्शवला जातो?",
    options: ["Formula Bar", "Name Box", "Status Bar", "Title Bar"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 9,
    question: "ॲक्टिव्ह सेलमध्ये टाईप केलेला मजकूर किंवा फॉर्म्युला कुठे दिसतो?",
    options: ["Name Box", "Formula Bar", "Ribbon", "Quick Access Toolbar"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 10,
    question: "सेलमध्ये टाईप केलेल्या अक्षरांचे (Text) डिफॉल्ट अलाइनमेंट कोणते असते?",
    options: ["Right (उजवे)", "Center (मध्य)", "Left (डावे)", "Justified"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 11,
    question: "सेलमध्ये टाईप केलेल्या आकड्यांचे (Numbers) डिफॉल्ट अलाइनमेंट कोणते असते?",
    options: ["Left (डावे)", "Center (मध्य)", "Right (उजवे)", "Bottom"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 12,
    question: "सेलमध्ये TRUE किंवा FALSE या मूल्यांचे डिफॉल्ट अलाइनमेंट कोणते असते?",
    options: ["Left", "Center", "Right", "Justify"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 13,
    question: "MS Excel मधील प्रत्येक फॉर्म्युला आणि फंक्शन कोणत्या चिन्हाने सुरू होणे बंधनकारक आहे?",
    options: ["+", "=", "@", "#"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 14,
    question: "निवडलेल्या सेलचे संपादन (Edit) करण्यासाठी कोणती फंक्शन की वापरतात?",
    options: ["F2", "F4", "F7", "F12"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 15,
    question: "वर्कबुकमध्ये नवीन वर्कशीट जोडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Shift + F11", "Alt + Shift + F1", "Ctrl + N", "A आणि B दोन्ही"],
    correctAnswer: 3,
    category: "MS Excel"
  },
  {
    id: 16,
    question: "संपूर्ण वर्कशीट एकाच वेळी निवडण्यासाठी (Select All) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + A", "Ctrl + Shift + Spacebar", "A आणि B दोन्ही", "Ctrl + Spacebar"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 17,
    question: "सध्याचा संपूर्ण कॉलम निवडण्यासाठी कोणती शॉर्टकट की वापरली जाते?",
    options: ["Ctrl + Spacebar", "Shift + Spacebar", "Alt + Spacebar", "Ctrl + Shift + C"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 18,
    question: "सध्याची संपूर्ण रो निवडण्यासाठी कोणती शॉर्टकट की वापरली जाते?",
    options: ["Ctrl + Spacebar", "Shift + Spacebar", "Alt + Spacebar", "Ctrl + Shift + R"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 19,
    question: "Absolute Cell Reference (सेल संदर्भ स्थिर ठेवण्यासाठी) कोणते चिन्ह वापरतात?",
    options: ["&", "#", "$", "%"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 20,
    question: "Relative, Absolute आणि Mixed सेल रेफरन्स बदलण्यासाठी कोणती फंक्शन की वापरतात?",
    options: ["F2", "F3", "F4", "F9"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 21,
    question: "MS Excel मधील `$A$1` हा कोणत्या प्रकारचा सेल रेफरन्स आहे?",
    options: ["Relative Reference", "Absolute Reference", "Mixed Reference", "Circular Reference"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 22,
    question: "MS Excel मधील `A$1` किंवा `$A1` हा कोणत्या प्रकारचा सेल रेफरन्स आहे?",
    options: ["Absolute Reference", "Relative Reference", "Mixed Reference", "3D Reference"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 23,
    question: "कॉलमची रुंदी आकड्यांच्या लांबीपेक्षा कमी पडल्यास सेलमध्ये कोणता एरर दिसतो?",
    options: ["#VALUE!", "######", "#REF!", "#NAME?"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 24,
    question: "एखाद्या संख्येला शून्य (0) ने भागल्यास कोणता एरर येतो?",
    options: ["#DIV/0!", "#NULL!", "#N/A", "#NUM!"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 25,
    question: "फॉर्म्युल्यात फंक्शनचे नाव किंवा स्पेलिंग चुकल्यास कोणता एरर प्रदर्शित होतो?",
    options: ["#NAME?", "#VALUE!", "#REF!", "#NULL!"],
    correctAnswer: 0,
    category: "MS Excel"
  },

  // --- भाग २: गणितीय, सांख्यिकीय आणि लॉजिकल फंक्शन्स (२६ ते ५०) ---
  {
    id: 26,
    question: "फॉर्म्युल्यामध्ये दिलेला सेल संदर्भ डिलीट झाल्यास कोणता एरर येतो?",
    options: ["#REF!", "#VALUE!", "#NULL!", "#N/A"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 27,
    question: "दिलेल्या रेंजमधील सर्व संख्यांची बेरीज करण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=ADD()", "=SUM()", "=TOTAL()", "=COUNT()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 28,
    question: "MS Excel मध्ये 'AutoSum' ची शॉर्टकट की कोणती आहे?",
    options: ["Alt + =", "Ctrl + =", "Shift + =", "Alt + Shift + S"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 29,
    question: "संख्यांची सरासरी (Arithmetic Mean) काढण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=MEAN()", "=AVERAGE()", "=MEDIAN()", "=AVG()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 30,
    question: "दिलेल्या संख्येपैकी सर्वात मोठी संख्या शोधण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=MAX()", "=LARGE()", "=TOP()", "=HIGHEST()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 31,
    question: "दिलेल्या संख्येपैकी सर्वात लहान संख्या शोधण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=MIN()", "=SMALL()", "=BOTTOM()", "=LEAST()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 32,
    question: "फक्त संख्या (Numbers) असणाऱ्या सेल्सची मोजणी करण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=COUNT()", "=COUNTA()", "=COUNTBLANK()", "=COUNTIF()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 33,
    question: "संख्या किंवा अक्षरे असणाऱ्या सर्व भरलेल्या (Non-empty) सेल्स मोजण्यासाठी काय वापरतात?",
    options: ["=COUNT()", "=COUNTA()", "=COUNTALL()", "=COUNTIF()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 34,
    question: "रेंजमधील फक्त रिकाम्या (Blank) सेल्स मोजण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=COUNTEMPTY()", "=COUNTBLANK()", "=BLANK()", "=ISBLANK()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 35,
    question: "विशिष्ट अटीनुसार (Criteria) सेल्सची मोजणी करण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=COUNTIF()", "=SUMIF()", "=IFCOUNT()", "=CHECKCOUNT()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 36,
    question: "विशिष्ट अट पूर्ण करणाऱ्या संख्यांचीच बेरीज करण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=SUMIF()", "=IFSUM()", "=TOTALIF()", "=ADDCITEMS()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 37,
    question: "दिलेल्या सर्व अटी सत्य (TRUE) असल्यावरच TRUE उत्तर देणारे लॉजिकल फंक्शन कोणते?",
    options: ["=OR()", "=AND()", "=NOT()", "=IF()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 38,
    question: "दिलेल्या अटींपैकी कोणतीही एक अट सत्य असल्यास TRUE उत्तर देणारे फंक्शन कोणते?",
    options: ["=AND()", "=OR()", "=XOR()", "=NOT()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 39,
    question: "फक्त चालू तारीख (Date Only) मिळवण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=NOW()", "=TODAY()", "=DATE()", "=CURRENTDATE()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 40,
    question: "चालू तारीख आणि चालू वेळ दोन्ही मिळवण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=TODAY()", "=NOW()", "=DATETIME()", "=TIME()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 41,
    question: "सेलमध्ये थेट चालू तारीख (Current Date) इन्सर्ट करण्याची शॉर्टकट की कोणती?",
    options: ["Ctrl + ; (Semicolon)", "Ctrl + : (Colon)", "Ctrl + Shift + D", "Alt + Shift + D"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 42,
    question: "सेलमध्ये थेट चालू वेळ (Current Time) इन्सर्ट करण्याची शॉर्टकट की कोणती?",
    options: ["Ctrl + Shift + ; (Ctrl + :)", "Ctrl + ;", "Alt + Shift + T", "Ctrl + T"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 43,
    question: "संख्येचे वर्गमूळ (Square Root) काढण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=SQR()", "=SQRT()", "=ROOT()", "=POWER()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 44,
    question: "संख्येचा घात (Power) काढण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=POW()", "=POWER()", "=EXP()", "=SQUARE()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 45,
    question: "MS Excel मध्ये `=5+3*2` या फॉर्म्युल्याचे अचूक उत्तर काय येईल?",
    options: ["१६", "११", "१३", "१०"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 46,
    question: "मजकुरातील सर्व अक्षरे कॅपिटल (Uppercase) करण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=UPPER()", "=CAPITAL()", "=UCASE()", "=TOUPPER()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 47,
    question: "मजकुरातील सर्व अक्षरे स्मॉल (Lowercase) करण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=LOWER()", "=SMALL()", "=LCASE()", "=TOLOWER()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 48,
    question: "प्रत्येक शब्दाचे पहिले अक्षर कॅपिटल करण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=CAPITALIZE()", "=PROPER()", "=TITLE()", "=INITCAP()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 49,
    question: "मजकुरातील एकूण अक्षरांची संख्या मोजण्यासाठी कोणते फंक्शन वापरतात?",
    options: ["=COUNT()", "=LEN()", "=LENGTH()", "=STRLEN()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 50,
    question: "दोन किंवा अधिक टेक्स्ट एकत्र जोडण्यासाठी कोणता ऑपरेटर वापरला जातो?",
    options: ["+", "& (Ampersand)", "*", "@"],
    correctAnswer: 1,
    category: "MS Excel"
  },

  // --- भाग ३: डेटा फॉरमॅटिंग, ऑटोफिल आणि टूल्स (५१ ते ७५) ---
  {
    id: 51,
    question: "अनेक सेल्समधील टेक्स्ट एकत्र जोडण्यासाठी कोणते फंक्शन वापरले जाते?",
    options: ["=JOIN()", "=CONCATENATE()", "=MERGETEXT()", "=COMBINE()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 52,
    question: "शब्दांमधील आवश्यक एक स्पेस ठेवून बाकी सर्व अतिरिक्त स्पेस काढून टाकणारे फंक्शन कोणते?",
    options: ["=CLEAN()", "=TRIM()", "=REMOVE()", "=STRIP()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 53,
    question: "अनेक सेल्स एकत्र करून मजकूर मध्यभागी आणण्यासाठी कोणता पर्याय वापरतात?",
    options: ["Wrap Text", "Merge & Center", "Combine Cells", "Center Across"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 54,
    question: "मोठा मजकूर सेलच्या रुंदीनुसार एकाखाली एक ओळींवर बसवण्यासाठी काय वापरतात?",
    options: ["Merge Cells", "Wrap Text", "Shrink to Fit", "AutoFit"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 55,
    question: "एकाच सेलमध्ये नवीन ओळ (Line Break) सुरू करण्यासाठी कोणती की वापरतात?",
    options: ["Enter", "Alt + Enter", "Ctrl + Enter", "Shift + Enter"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 56,
    question: "ॲक्टिव्ह सेलच्या तळाशी उजव्या कोपऱ्यात असलेल्या लहान काळ्या चौकोनाला काय म्हणतात?",
    options: ["Selection Handle", "Fill Handle", "Copy Handle", "Drag Box"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 57,
    question: "महिने, वार किंवा आकडे आपोआप पुढे भरण्यासाठी (Generate Series) कोणते फिचर वापरतात?",
    options: ["AutoFill", "AutoComplete", "AutoFormat", "Flash Fill"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 58,
    question: "डेटा पॅटर्न ओळखून आपोआप भरणाऱ्या 'Flash Fill' ची शॉर्टकट की कोणती आहे?",
    options: ["Ctrl + E", "Ctrl + F", "Ctrl + Shift + F", "Alt + E"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 59,
    question: "Format Cells चा डायलॉग बॉक्स उघडण्यासाठी कोणती शॉर्टकट की आहे?",
    options: ["Ctrl + 1", "Ctrl + F", "Ctrl + Shift + F", "Alt + 1"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 60,
    question: "दोन दशांश स्थळांसह करन्सी (Currency) फॉरमॅट देण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + $ (Ctrl + Shift + 4)", "Ctrl + $", "Alt + Shift + $", "Ctrl + Shift + C"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 61,
    question: "टक्केवारी (Percentage) फॉरमॅट लागू करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + % (Ctrl + Shift + 5)", "Ctrl + %", "Alt + %", "Ctrl + Shift + P"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 62,
    question: "निवडलेल्या डेटाचा टेबल (Excel Table) बनवण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + T", "Ctrl + L", "A आणि B दोन्ही", "Ctrl + Shift + T"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 63,
    question: "डेटा टेबलवर ऑटोफिल्टर (AutoFilter) चालू/बंद करण्याची शॉर्टकट की कोणती?",
    options: ["Ctrl + Shift + L", "Alt + D + F + F", "A आणि B दोन्ही", "Ctrl + F"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 64,
    question: "विशिष्ट नियमांनुसार सेल्सना आपोआप रंग किंवा स्टाईल देण्यासाठी काय वापरतात?",
    options: ["Format Painter", "Conditional Formatting", "Cell Styles", "Data Validation"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 65,
    question: "सेलमध्ये फक्त विशिष्ट प्रकारचाच डेटा भरता यावा (उदा. Dropdown लिस्ट) यासाठी काय वापरतात?",
    options: ["Data Validation", "Protect Sheet", "Conditional Formatting", "Goal Seek"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 66,
    question: "स्क्रोल करताना रो किंवा कॉलम हेडिंग्स जागेवर स्थिर ठेवण्यासाठी काय वापरतात?",
    options: ["Split Panes", "Freeze Panes", "Lock Rows", "Hold Header"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 67,
    question: "'Freeze Panes' हा पर्याय कोणत्या टॅबमध्ये असतो?",
    options: ["Home", "View", "Page Layout", "Data"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 68,
    question: "इच्छित अंतिम निकाल मिळवण्यासाठी इनपुट व्हॅल्यू शोधणाऱ्या टूलला काय म्हणतात?",
    options: ["Solver", "Goal Seek", "Scenario Manager", "Data Table"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 69,
    question: "'Goal Seek' हा पर्याय Data टॅबमधील कोणत्या ग्रुपमध्ये असतो?",
    options: ["Sort & Filter", "What-If Analysis", "Data Tools", "Forecast"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 70,
    question: "मोठ्या प्रमाणातील डेटाचा सारांश (Summary) आणि विश्लेषण करण्यासाठी कोणते फिचर वापरतात?",
    options: ["PivotTable", "SmartArt", "Macros", "Sparklines"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 71,
    question: "'PivotTable' हा पर्याय कोणत्या टॅबमध्ये असतो?",
    options: ["Data", "Insert", "View", "Home"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 72,
    question: "एकाच सेलमध्ये ट्रेंड दाखवणाऱ्या छोट्या आलेखांना (Mini Charts) काय म्हणतात?",
    options: ["Cell Charts", "Sparklines", "Mini Plots", "Trendlines"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 73,
    question: "स्वतंत्र नवीन शीटवर डिफॉल्ट चार्ट तयार करण्यासाठी कोणती फंक्शन की वापरतात?",
    options: ["F11", "Alt + F1", "F7", "Shift + F11"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 74,
    question: "चालू शीटवरच एम्बेडेड चार्ट तयार करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + F1", "F11", "Ctrl + F1", "Shift + F1"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 75,
    question: "एकूण प्रमाणातील टक्केवारीचे भाग दाखवण्यासाठी कोणता चार्ट प्रकार सर्वोत्तम मानला जातो?",
    options: ["Bar Chart", "Line Chart", "Pie Chart", "Scatter Chart"],
    correctAnswer: 2,
    category: "MS Excel"
  },

  // --- भाग ४: प्रगत फंक्शन्स, नेव्हिगेशन आणि व्ह्यूज (७६ ते १००) ---
  {
    id: 76,
    question: "कालांतराने बदलणारा ट्रेंड (Trend over time) दाखवण्यासाठी कोणता चार्ट वापरतात?",
    options: ["Pie Chart", "Line Chart", "Radar Chart", "Doughnut Chart"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 77,
    question: "उभ्या कॉलममध्ये (Vertical Column) डेटा शोधण्यासाठी कोणते फंक्शन वापरले जाते?",
    options: ["=VLOOKUP()", "=HLOOKUP()", "=INDEX()", "=MATCH()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 78,
    question: "आडव्या रोमध्ये (Horizontal Row) डेटा शोधण्यासाठी कोणते फंक्शन वापरले जाते?",
    options: ["=HLOOKUP()", "=VLOOKUP()", "=LOOKUP()", "=SEARCH()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 79,
    question: "VLOOKUP मध्ये अचूक जुळणी (Exact Match) शोधण्यासाठी शेवटी कोणते मूल्य देतात?",
    options: ["TRUE (किंवा 1)", "FALSE (किंवा 0)", "-1", "2"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 80,
    question: "रेंजमधील शोधलेल्या मूल्याचे स्थान (Index/Position) सांगणारे फंक्शन कोणते?",
    options: ["=MATCH()", "=INDEX()", "=FIND()", "=SEARCH()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 81,
    question: "विशिष्ट रो आणि कॉलमच्या छेदनबिंदूवरील सेलचे मूल्य दर्शवणारे फंक्शन कोणते?",
    options: ["=INDEX()", "=MATCH()", "=LOOKUP()", "=OFFSET()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 82,
    question: "निवडलेला कॉलम लपवण्यासाठी (Hide Column) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + 0", "Ctrl + 9", "Ctrl + Shift + 0", "Alt + 0"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 83,
    question: "निवडलेली रो लपवण्यासाठी (Hide Row) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + 9", "Ctrl + 0", "Ctrl + Shift + 9", "Alt + 9"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 84,
    question: "लपवलेली रो पुन्हा दाखवण्यासाठी (Unhide Row) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + ( (Ctrl + Shift + 9)", "Ctrl + Shift + )", "Alt + Shift + 9", "Ctrl + 9"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 85,
    question: "लपवलेला कॉलम पुन्हा दाखवण्यासाठी (Unhide Column) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + ) (Ctrl + Shift + 0)", "Ctrl + Shift + (", "Alt + Shift + 0", "Ctrl + 0"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 86,
    question: "पुढील वर्कशीटवर जाण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Page Down", "Ctrl + Page Up", "Alt + Page Down", "Shift + Page Down"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 87,
    question: "मागील वर्कशीटवर जाण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Page Up", "Ctrl + Page Down", "Alt + Page Up", "Shift + Page Up"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 88,
    question: "मूल्यांऐवजी थेट फॉर्म्युला दाखवण्यासाठी (Toggle Formulas) कोणती की वापरतात?",
    options: ["Ctrl + ` (Tilde)", "Ctrl + Shift + `", "Ctrl + F9", "Alt + `"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 89,
    question: "सर्व वर्कबुक्समधील फॉर्म्युला पुन्हा मोजण्यासाठी (Recalculate) कोणती की वापरतात?",
    options: ["F9", "Shift + F9", "Ctrl + Alt + F9", "F5"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 90,
    question: "'Insert Function' चा डायलॉग बॉक्स उघडण्यासाठी कोणती शॉर्टकट की आहे?",
    options: ["Shift + F3", "Ctrl + F3", "Alt + F3", "F3"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 91,
    question: "रेंज नेम्स (Named Ranges) व्यवस्थापित करण्यासाठी Name Manager उघडण्याची की कोणती?",
    options: ["Ctrl + F3", "Shift + F3", "Alt + F3", "F3"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 92,
    question: "तयार केलेल्या रेंज नावांची यादी फॉर्म्युल्यात पेस्ट करण्यासाठी कोणती की वापरतात?",
    options: ["F3", "Shift + F3", "Ctrl + F3", "Alt + F3"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 93,
    question: "नवीन सेल, रो किंवा कॉलम जोडण्यासाठी (Insert Dialog) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + + (Ctrl + Plus)", "Ctrl + +", "Alt + I", "Ctrl + I"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 94,
    question: "निवडलेला सेल, रो किंवा कॉलम डिलीट करण्याची शॉर्टकट की कोणती आहे?",
    options: ["Ctrl + - (Ctrl + Minus)", "Delete", "Shift + Delete", "Alt + -"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 95,
    question: "मॅक्रो सुरू असलेल्या (Macro-Enabled) एक्सेल फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".xlsm", ".xlsx", ".xltm", ".xlsb"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 96,
    question: "MS Excel टेम्पलेट फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".xltx", ".xlsx", ".xltm", ".dotx"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 97,
    question: "MS Excel मध्ये जास्तीत जास्त किती झूम करता येते?",
    options: ["200%", "400%", "500%", "1000%"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 98,
    question: "MS Excel मध्ये कमीत कमी किती झूम करता येते?",
    options: ["10%", "20%", "5%", "1%"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 99,
    question: "प्रिंट करताना पाने कुठून कापली जातील हे पाहण्यासाठी आणि ॲडजस्ट करण्यासाठी कोणता व्ह्यू वापरतात?",
    options: ["Page Break Preview", "Page Layout View", "Custom View", "Normal View"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 100,
    question: "सध्या चालू असलेले वर्कबुक बंद करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + W", "Ctrl + F4", "A आणि B दोन्ही", "Alt + F4"],
    correctAnswer: 2,
    category: "MS Excel"
  }
];