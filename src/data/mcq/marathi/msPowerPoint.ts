// src/data/mcq/marathi/msPowerPoint.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const MS_POWERPOINT_MARATHI_MCQ: MCQQuestion[] = [
  // --- भाग १: बेसिक, फाईल एक्स्टेंशन आणि स्लाईड रचना (१ ते २५) ---
  {
    id: 1,
    question: "MS PowerPoint 2013 आणि त्यापुढील आवृत्तीत प्रेझेंटेशन फाईलचे डिफॉल्ट एक्स्टेंशन कोणते असते?",
    options: [".ppt", ".pptx", ".ppsx", ".potx"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 2,
    question: "डबल क्लिक केल्यावर थेट स्लाईड शो सुरू होणाऱ्या फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".ppsx", ".pptx", ".potx", ".pptm"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 3,
    question: "PowerPoint टेम्पलेट फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".potx", ".pptx", ".ppsx", ".dotx"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 4,
    question: "PowerPoint मध्ये स्लाईडचे डिफॉल्ट ओरिएंटेशन (Slide Orientation) कोणते असते?",
    options: ["Portrait", "Landscape (16:9 Widescreen)", "Square", "Custom"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 5,
    question: "चालू प्रेझेंटेशनमध्ये नवीन स्लाईड (New Slide) जोडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + N", "Ctrl + M", "Ctrl + S", "Alt + N"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 6,
    question: "नवीन कोरे प्रेझेंटेशन (New Blank Presentation) उघडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + M", "Ctrl + N", "Ctrl + P", "Ctrl + Shift + N"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 7,
    question: "निवडलेल्या स्लाईडची हुबेहूब दुसरी प्रत (Duplicate Slide) तयार करण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Ctrl + C", "Alt + D"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 8,
    question: "पहिल्या स्लाईडपासून स्लाईड शो (Slide Show) सुरू करण्यासाठी कोणती फंक्शन की वापरतात?",
    options: ["F1", "F5", "Shift + F5", "F7"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 9,
    question: "सध्या चालू असलेल्या स्लाईडपासून (Current Slide) स्लाईड शो सुरू करण्यासाठी कोणती की वापरतात?",
    options: ["Shift + F5", "Ctrl + F5", "Alt + F5", "F5"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 10,
    question: "चालू असलेला स्लाईड शो मधेच थांबवण्यासाठी किंवा बाहेर पडण्यासाठी कोणती की दाबतात?",
    options: ["Backspace", "Esc (Escape)", "Spacebar", "Ctrl + Q"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 11,
    question: "MS PowerPoint मध्ये जास्तीत जास्त किती झूम करता येते?",
    options: ["200%", "400%", "500%", "1000%"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 12,
    question: "MS PowerPoint मध्ये कमीत कमी किती झूम करता येते?",
    options: ["10%", "20%", "5%", "1%"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 13,
    question: "स्लाईडवर मजकूर, चित्रे किंवा तक्ते ठेवण्यासाठी असलेल्या तुटक रेषेच्या चौकोनांना काय म्हणतात?",
    options: ["Text Holders", "Placeholders", "Bounding Boxes", "Containers"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 14,
    question: "स्लाईड तयार आणि डिझाईन करण्यासाठी मुख्य संपादन व्ह्यू (Main Editing View) कोणता असतो?",
    options: ["Normal View", "Slide Sorter View", "Reading View", "Slide Master View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 15,
    question: "सर्व स्लाईड्स एकाच वेळी लहान थंबनेल्स स्वरूपात पाहण्यासाठी आणि क्रम बदलण्यासाठी कोणता व्ह्यू वापरतात?",
    options: ["Slide Sorter View", "Normal View", "Notes Page View", "Outline View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 16,
    question: "चित्रांशिवाय फक्त स्लाईड्सवरील मजकूर (Titles & Text) पाहण्यासाठी आणि संपादित करण्यासाठी कोणता व्ह्यू वापरतात?",
    options: ["Outline View", "Slide Sorter View", "Slide Master", "Reading View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 17,
    question: "वक्त्याला स्वतःच्या संदर्भासाठी स्लाईडखाली महत्त्वाच्या टीपा (Speaker Notes) लिहिण्यासाठी कोणता व्ह्यू वापरतात?",
    options: ["Notes Page View", "Slide Sorter View", "Reading View", "Master View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 18,
    question: "वक्त्याला स्वतःच्या लॅपटॉपवर पुढील स्लाईड, नोट्स आणि वेळ दिसणे व प्रेक्षकांना फक्त मुख्य स्लाईड दिसणे या फिचरला काय म्हणतात?",
    options: ["Presenter View", "Audience Mode", "Split View", "Master View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 19,
    question: "सर्व स्लाईड्सचे फॉन्ट, पार्श्वभूमी, लोगो आणि लेआउट नियंत्रित करणाऱ्या मुख्य स्लाईडला काय म्हणतात?",
    options: ["Slide Master", "Title Master", "Theme Controller", "Parent Slide"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 20,
    question: "'Slide Master' हा पर्याय कोणत्या टॅबमध्ये असतो?",
    options: ["Insert", "Design", "View", "Review"],
    correctAnswer: 2,
    category: "MS PowerPoint"
  },
  {
    id: 21,
    question: "प्रेक्षकांसाठी प्रिंट केल्या जाणाऱ्या हँडआऊट्सचे (Handouts) डिझाईन नियंत्रित करण्यासाठी काय वापरतात?",
    options: ["Handout Master", "Slide Master", "Notes Master", "Print Master"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 22,
    question: "स्पीकर नोट्स प्रिंट करण्याचे लेआउट नियंत्रित करण्यासाठी कोणता मास्टर व्ह्यू वापरला जातो?",
    options: ["Notes Master", "Slide Master", "Handout Master", "Page Master"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 23,
    question: "एकाच पानावर हँडआऊट म्हणून जास्तीत जास्त किती स्लाईड्स प्रिंट करता येतात?",
    options: ["३ स्लाईड्स", "६ स्लाईड्स", "९ स्लाईड्स", "१२ स्लाईड्स"],
    correctAnswer: 2,
    category: "MS PowerPoint"
  },
  {
    id: 24,
    question: "पानावर ३ स्लाईड्स आणि उजव्या बाजूला प्रेक्षकांना नोंदी घेण्यासाठी रेषा प्रिंट करणारा पर्याय कोणता?",
    options: ["3 Slides Handout", "2 Slides Handout", "6 Slides Handout", "Outline Layout"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 25,
    question: "स्लाईडवरील अनेक वेगवेगळ्या आकारांना एकत्र जोडून एकच ऑब्जेक्ट बनवण्यासाठी काय वापरतात?",
    options: ["Group (Ctrl + G)", "Combine", "Merge", "Attach"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },

  // --- भाग २: ॲनिमेशन, ट्रान्झिशन आणि मल्टीमीडिया (२६ ते ५०) ---
  {
    id: 26,
    question: "निवडलेल्या ऑब्जेक्ट्सचा गट (Group) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Alt + G", "Ctrl + Alt + G"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 27,
    question: "तयार केलेला ऑब्जेक्ट्सचा गट वेगळा (Ungroup) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + G", "Ctrl + Alt + G", "Ctrl + U", "Alt + Shift + G"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 28,
    question: "एका स्लाईडवरून दुसऱ्या स्लाईडवर जाताना होणाऱ्या हालचालींच्या प्रभावाला काय म्हणतात?",
    options: ["Slide Transition", "Animation", "Motion Path", "Morph Effect"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 29,
    question: "स्लाईडवरील वैयक्तिक मजकूर, चित्रे किंवा आकारांवर लागू केलेल्या हालचालींच्या प्रभावाला काय म्हणतात?",
    options: ["Custom Animations", "Slide Transitions", "Transformations", "SmartArt"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 30,
    question: "स्लाईडवर एखादा ऑब्जेक्ट कसा प्रवेश करेल हे ठरवणारा ॲनिमेशनचा प्रकार कोणता?",
    options: ["Entrance Effects", "Emphasis Effects", "Exit Effects", "Motion Paths"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 31,
    question: "स्लाईडवर आधीपासून असलेल्या घटकाकडे लक्ष वेधून घेण्यासाठी (उदा. Spin/Grow) कोणता प्रभाव वापरतात?",
    options: ["Emphasis Effects", "Entrance Effects", "Exit Effects", "Motion Paths"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 32,
    question: "स्लाईडवरून एखादा ऑब्जेक्ट कसा नाहीसा किंवा बाहेर जाईल हे ठरवणारा प्रभाव कोणता?",
    options: ["Exit Effects", "Entrance Effects", "Emphasis Effects", "Motion Paths"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 33,
    question: "ऑब्जेक्टला स्लाईडवर विशिष्ट मार्गाने (रेषा किंवा वळणावर) फिरवण्यासाठी कोणते ॲनिमेशन वापरतात?",
    options: ["Motion Paths", "Entrance Effects", "Slide Transitions", "Emphasis Effects"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 34,
    question: "स्लाईडवरील सर्व ॲनिमेशन्सचा क्रम आणि वेळ व्यवस्थापित करण्यासाठी कोणता पेन वापरतात?",
    options: ["Animation Pane", "Selection Pane", "Timeline Pane", "Format Shape Pane"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 35,
    question: "एका ऑब्जेक्टचे ॲनिमेशन दुसऱ्या ऑब्जेक्टवर कॉपी करून लागू करण्यासाठी काय वापरतात?",
    options: ["Animation Painter", "Format Painter", "Motion Copier", "Effect Duplicator"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 36,
    question: "मागील ॲनिमेशन सुरू होताच त्याच क्षणी आपोआप पुढील ॲनिमेशन सुरू करणारा पर्याय कोणता?",
    options: ["With Previous", "On Click", "After Previous", "By Delay"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 37,
    question: "मागील ॲनिमेशन पूर्ण संपल्यानंतर लगेच पुढील ॲनिमेशन आपोआप सुरू करणारा पर्याय कोणता?",
    options: ["After Previous", "With Previous", "On Click", "On Double Click"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 38,
    question: "प्रत्येक स्लाईडला लागणारा वेळ मोजून आपोआप टाईम सेट करण्यासाठी कोणते टूल वापरतात?",
    options: ["Rehearse Timings", "Record Slide Show", "Set Slide Timer", "Broadcast Show"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 39,
    question: "कोणत्याही मानवी हस्तक्षेपाशिवाय अविरतपणे चालणारे (Loop Continuously) प्रेझेंटेशन कसे सेट करतात?",
    options: ["Set Up Slide Show -> Browsed at a kiosk", "Loop Continuous Mode", "Auto-run Show", "Kiosk Broadcast"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 40,
    question: "संपूर्ण प्रेझेंटेशनमधून फक्त ठराविक निवडक स्लाईड्स दाखवण्यासाठी काय तयार केले जाते?",
    options: ["Custom Slide Show", "Selective Show", "Slide Filter", "Hide Slide"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 41,
    question: "स्लाईड फाईलमधून डिलीट न करता शो दरम्यान तात्पुरती लपवण्यासाठी काय वापरतात?",
    options: ["Hide Slide", "Mask Slide", "Disable Slide", "Archive Slide"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 42,
    question: "स्लाईड शो चालू असताना स्क्रीन पूर्ण काळी (Black Screen) करण्यासाठी कोणती की दाबतात?",
    options: ["B (किंवा . Period)", "W", "K", "Esc"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 43,
    question: "स्लाईड शो चालू असताना स्क्रीन पूर्ण पांढरी (White Screen) करण्यासाठी कोणती की दाबतात?",
    options: ["W (किंवा , Comma)", "B", "C", "Shift + W"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 44,
    question: "शो दरम्यान माउस पॉइंटरचे रूपांतर पेनमध्ये (Pen Tool) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + P", "Ctrl + A", "Ctrl + H", "Ctrl + E"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 45,
    question: "शो दरम्यान माउस पॉइंटर हायलाइटर (Highlighter) बनवण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + I", "Ctrl + H", "Ctrl + P", "Ctrl + L"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 46,
    question: "पेन किंवा हायलाइटर काढून पुन्हा सामान्य ॲरो कर्सर (Arrow) आणण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + A", "Ctrl + P", "Ctrl + U", "Ctrl + E"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 47,
    question: "स्लाईडवर पेनने केलेले सर्व रेखाटन किंवा खुणा एकाच वेळी पुसून टाकण्यासाठी कोणती की दाबतात?",
    options: ["E", "Ctrl + E", "Delete", "Backspace"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 48,
    question: "स्लाईड शो दरम्यान माउस पॉइंटर आणि नियंत्रणे लगेच लपवण्यासाठी (Hide Cursor) कोणती की वापरतात?",
    options: ["Ctrl + H", "Ctrl + U", "Ctrl + A", "Alt + H"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 49,
    question: "स्लाईडवर पुढील, मागील किंवा होम स्लाईडवर उडी मारण्यासाठी तयार बटणांना काय म्हणतात?",
    options: ["Action Buttons", "Smart Buttons", "Navigation Arrows", "Link Icons"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 50,
    question: "'Action Buttons' आणि 'Hyperlinks' हे पर्याय कोणत्या टॅबमध्ये असतात?",
    options: ["Insert", "Design", "Slide Show", "View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },

  // --- भाग ३: डिझाईन, फॉरमॅटिंग आणि स्मार्टआर्ट (५१ ते ७५) ---
  {
    id: 51,
    question: "प्रेझेंटेशनला एकसंध आणि व्यावसायिक लूक देणाऱ्या रंग, फॉन्ट आणि इफेक्ट्सच्या संचाला काय म्हणतात?",
    options: ["Theme", "Template", "Layout", "Style Guide"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 52,
    question: "Themes आणि Background Styles हे पर्याय कोणत्या टॅबमध्ये उपलब्ध असतात?",
    options: ["Design", "Insert", "Home", "View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 53,
    question: "सामान्य बुलेट यादीचे रूपांतर आकर्षक ग्राफिकल चार्ट आणि आकृत्यांमध्ये करणारे टूल कोणते?",
    options: ["Convert to SmartArt", "WordArt", "Shape Formatter", "Visual Chart"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 54,
    question: "एखाद्या कामाची कालक्रमानुसार पायऱ्यांची प्रक्रिया (Timeline) दाखवण्यासाठी कोणता SmartArt प्रकार योग्य आहे?",
    options: ["Process", "Hierarchy", "Relationship", "Matrix"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 55,
    question: "कंपनीची पदरचना किंवा संस्थात्मक तक्ता दाखवण्यासाठी कोणता SmartArt प्रकार वापरतात?",
    options: ["Hierarchy", "Pyramid", "Cycle", "List"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 56,
    question: "कॉम्प्युटर स्क्रीनवरील कोणत्याही उघड्या ॲपचा थेट फोटो काढून स्लाईडवर टाकण्यासाठी काय वापरतात?",
    options: ["Screenshot (Screen Clipping)", "Snipping Tool", "Print Screen", "Smart Clip"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 57,
    question: "PowerPoint मधून थेट कॉम्प्युटर स्क्रीनचा व्हिडिओ आणि ऑडिओ रेकॉर्ड करण्याचे फिचर कोणते?",
    options: ["Screen Recording", "Capture Video", "Slide Cam", "Screen Stream"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 58,
    question: "'Screen Recording' हे फिचर कोणत्या टॅबमध्ये उपलब्ध असते?",
    options: ["Insert (किंवा Record)", "View", "Developer", "Home"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 59,
    question: "इन्सर्ट केलेल्या व्हिडिओ किंवा ऑडिओचा नको असलेला सुरुवातीचा/शेवटचा भाग कापण्यासाठी काय वापरतात?",
    options: ["Trim Video / Trim Audio", "Cut Media", "Crop Video", "Split Track"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 60,
    question: "इन्सर्ट केलेले गाणे संपूर्ण प्रेझेंटेशन चालू असेपर्यंत सलग वाजत राहण्यासाठी कोणता पर्याय निवडतात?",
    options: ["Play in Background (Play Across Slides)", "Loop Track", "Audio Master", "Continuous Sound"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 61,
    question: "ऑडिओ किंवा व्हिडिओ संपल्यावर आपोआप पुन्हा सुरुवातीपासून वाजत राहण्यासाठी काय निवडतात?",
    options: ["Loop until Stopped", "Rewind after Playing", "Repeat Continuously", "Auto Restart"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 62,
    question: "PowerPoint मध्ये हायपरलिंक (Hyperlink) जोडण्याची शॉर्टकट की कोणती आहे?",
    options: ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + Shift + K"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 63,
    question: "टेक्स्ट बॉक्समधील मजकूर मध्यभागी (Center Align) घेण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + E", "Ctrl + C", "Ctrl + J", "Ctrl + Shift + C"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 64,
    question: "टेक्स्ट बॉक्समधील मजकूर दोन्ही बाजूंना समान (Justify) करण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + J", "Ctrl + E", "Ctrl + R", "Ctrl + Shift + J"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 65,
    question: "स्लाईडवर अचूक गोल (Circle) किंवा चौरस (Square) काढण्यासाठी माउससोबत कोणती की दाबून धरावी लागते?",
    options: ["Shift की", "Ctrl की", "Alt की", "Tab की"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 66,
    question: "एखाद्या ऑब्जेक्टचा आकार त्याच्या मध्यबिंदूपासून चारी बाजूंना समप्रमाणात मोठा/लहान करण्यासाठी काय दाबतात?",
    options: ["Ctrl + Shift + Drag corner", "Alt + Shift + Drag", "Shift + Drag", "Ctrl + Drag"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 67,
    question: "मागे असलेल्या ऑब्जेक्टला एका थराने (One Level) पुढे आणण्यासाठी कोणता पर्याय वापरतात?",
    options: ["Bring Forward", "Bring to Front", "Send Backward", "Align Front"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 68,
    question: "सर्वात मागे असलेल्या ऑब्जेक्टला थेट सर्व घटकांच्या वर (Top Layer) आणण्यासाठी काय वापरतात?",
    options: ["Bring to Front", "Bring Forward", "Move Up", "Top Layer"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 69,
    question: "स्लाईडवरील सर्व ऑब्जेक्ट्सची यादी पाहणे, लपवणे किंवा दाखवण्यासाठी कोणता पेन वापरतात?",
    options: ["Selection Pane", "Animation Pane", "Layer Manager", "Object Inspector"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 70,
    question: "Selection Pane उघडण्यासाठी कोणती शॉर्टकट की वापरली जाते?",
    options: ["Alt + F10", "Ctrl + F10", "Shift + F10", "Alt + Shift + S"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 71,
    question: "अनेक निवडलेल्या आकारांमध्ये समसमान अंतर (Equal Spacing) ठेवण्यासाठी कोणता पर्याय वापरतात?",
    options: ["Distribute Horizontally / Vertically", "Align Center", "Snap to Grid", "Auto Space"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 72,
    question: "मोठ्या प्रेझेंटेशनमधील स्लाईड्सचे विषयानुसार विभाग पाडण्यासाठी काय वापरतात?",
    options: ["Sections (Add Section)", "Folders", "Slide Bundles", "Categories"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 73,
    question: "एका स्लाईडवरील ऑब्जेक्ट्सचे दुसऱ्या स्लाईडवर जाताना अतिशय गुळगुळीत आणि सलग रूपांतर करणारा ट्रान्झिशन कोणता?",
    options: ["Morph Transition", "Fade", "Push", "Wipe"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 74,
    question: "टाकलेल्या मजकूर व चित्रांनुसार आधुनिक व सुंदर स्लाईड डिझाईन्स आपोआप सुचवणाऱ्या टूलला काय म्हणतात?",
    options: ["Designer (Design Ideas)", "AutoTheme", "Smart Layouts", "Quick Styles"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 75,
    question: "प्रेझेंटेशनमधील स्पेलिंग तपासण्यासाठी (Spell Check) कोणती फंक्शन की वापरतात?",
    options: ["F7", "F5", "Shift + F7", "F9"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },

  // --- भाग ४: प्रगत टूल्स, शॉर्टकट्स आणि एक्सपोर्ट (७६ ते १००) ---
  {
    id: 76,
    question: "समानार्थी शब्द शोधण्यासाठी (Thesaurus) कोणती शॉर्टकट की वापरतात?",
    options: ["Shift + F7", "Ctrl + F7", "Alt + F7", "F7"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 77,
    question: "निवडलेल्या मजकुराचा फॉन्ट आकार वाढवण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + >", "Ctrl + ]", "A आणि B दोन्ही", "Alt + Shift + >"],
    correctAnswer: 2,
    category: "MS PowerPoint"
  },
  {
    id: 78,
    question: "निवडलेल्या मजकुराचा फॉन्ट आकार कमी करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + Shift + <", "Ctrl + [", "A आणि B दोन्ही", "Alt + Shift + <"],
    correctAnswer: 2,
    category: "MS PowerPoint"
  },
  {
    id: 79,
    question: "अक्षरांचा केस बदलण्यासाठी (Change Case - Upper/Lower/Sentence) कोणती की वापरतात?",
    options: ["Shift + F3", "Ctrl + F3", "Alt + F3", "Ctrl + Shift + C"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 80,
    question: "ऑब्जेक्टचे फॉरमॅटिंग कॉपी करण्यासाठी (Format Painter) कोणती की वापरतात?",
    options: ["Ctrl + Shift + C", "Ctrl + C", "Alt + Shift + C", "Ctrl + Alt + C"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 81,
    question: "कॉपी केलेले फॉरमॅटिंग लागू करण्यासाठी (Paste Formatting) कोणती की वापरतात?",
    options: ["Ctrl + Shift + V", "Ctrl + V", "Alt + Shift + V", "Ctrl + Alt + V"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 82,
    question: "सर्व ऑडिओ, व्हिडिओ, फॉन्ट आणि प्रेझेंटेशन फाईल पेनड्राइव्ह किंवा सीडीमध्ये एकत्र बांधून सुरक्षित नेण्यासाठी काय वापरतात?",
    options: ["Package for CD", "Export Archive", "Compress Presentation", "Media Bundler"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 83,
    question: "PowerPoint प्रेझेंटेशन थेट कोणत्या व्हिडिओ फॉरमॅटमध्ये रूपांतरित (Export Video) करता येते?",
    options: ["MP4 (MPEG-4) आणि WMV", "फक्त AVI", "फक्त MKV", "फक्त FLV"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 84,
    question: "प्रत्येक स्लाईडचा स्वतंत्र फोटो (Image File) म्हणून एक्सपोर्ट करण्यासाठी कोणते फॉरमॅट्स वापरले जातात?",
    options: ["JPEG / PNG", "GIF", "TIFF", "वरील सर्व"],
    correctAnswer: 3,
    category: "MS PowerPoint"
  },
  {
    id: 85,
    question: "विशिष्ट शब्द शोधण्यासाठी (Find) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Alt + F"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 86,
    question: "शब्द बदलण्यासाठी (Replace) कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + H", "Ctrl + R", "Ctrl + F", "Ctrl + Shift + H"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 87,
    question: "स्लाईड शो चालू असताना थेट विशिष्ट स्लाईड नंबरवर उडी मारण्यासाठी काय करतात?",
    options: ["स्लाईड नंबर टाईप करून Enter दाबणे", "Ctrl + G", "Shift + स्लाईड नंबर", "Alt + स्लाईड नंबर"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 88,
    question: "स्लाईड शो दरम्यान सर्व शॉर्टकट कीजची यादी पाहण्यासाठी कोणती की दाबतात?",
    options: ["F1 (किंवा ? चिन्ह)", "Shift + F1", "Ctrl + F1", "Esc"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 89,
    question: "स्लाईड शो दरम्यान सर्व स्लाईड्सची ग्रिड (Zoom Out View) पाहण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + - (किंवा G की)", "Ctrl + S", "Tab", "Shift + Tab"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 90,
    question: "स्लाईड शो दरम्यान थेट बोललेले शब्द कॅप्शन म्हणून चालू/बंद करण्याची शॉर्टकट की कोणती?",
    options: ["J की", "S की", "C की", "Ctrl + Shift + S"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 91,
    question: "संपूर्ण प्रेझेंटेशनमधील एखादा फॉन्ट एकाच क्लिकवर दुसऱ्या फॉन्टमध्ये बदलण्यासाठी काय वापरतात?",
    options: ["Replace Fonts", "Font Changer", "Global Format", "Theme Adjuster"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 92,
    question: "'Replace Fonts' हा पर्याय कोणत्या मेन्यूमध्ये असतो?",
    options: ["Home -> Replace ड्रॉपडाउन", "Design -> Fonts", "View -> Master", "Review -> Proofing"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 93,
    question: "स्लाईडवर अलाइनमेंटसाठी असणाऱ्या मार्गदर्शक रेषा (Guides) दाखवणे किंवा लपवण्याची शॉर्टकट की कोणती?",
    options: ["Alt + F9", "Shift + F9", "Ctrl + F9", "F9"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 94,
    question: "स्लाईडवरील ग्रिडलाईन्स (Gridlines) दाखवणे किंवा लपवण्याची शॉर्टकट की कोणती आहे?",
    options: ["Shift + F9", "Alt + F9", "Ctrl + F9", "F9"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 95,
    question: "रूलर पट्टी (Ruler) दाखवणे किंवा लपवण्याची शॉर्टकट की कोणती आहे?",
    options: ["Shift + Alt + F9", "Ctrl + R", "Alt + Shift + R", "Shift + F8"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 96,
    question: "इन्सर्ट केलेल्या चित्राचा नको असलेला भाग कापून टाकण्यासाठी कोणते टूल वापरतात?",
    options: ["Crop Tool", "Trim Tool", "Cut Picture", "Slice Image"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 97,
    question: "चित्राच्या मागील एकरंगी पार्श्वभूमी काढून पारदर्शक (Transparent) करण्यासाठी काय वापरतात?",
    options: ["Remove Background", "Color Transparency", "Mask Tool", "Alpha Cut"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 98,
    question: "मॅक्रो सुरू असलेल्या (Macro-Enabled) PowerPoint फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".pptm", ".pptx", ".potm", ".ppsm"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 99,
    question: "'Save As' डायलॉग बॉक्स उघडण्याची शॉर्टकट की कोणती आहे?",
    options: ["F12", "Ctrl + S", "Shift + F12", "Alt + F12"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 100,
    question: "सध्या चालू असलेले PowerPoint प्रेझेंटेशन बंद करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Ctrl + W (किंवा Ctrl + F4)", "Alt + F4", "Esc", "Ctrl + Q"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  }
];