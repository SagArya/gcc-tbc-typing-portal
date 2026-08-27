// src/data/lessonsData.ts

export interface LessonStep {
  stepNumber: number;
  instruction: string;
  targetText: string;
}

export interface LessonItem {
  id: string;
  title: string;
  marathiTitle: string;
  description: string;
  tier: "beginner" | "common_words" | "intermediate" | "advanced";
  language: "marathi" | "english";
  totalSteps: number;
  steps: LessonStep[];
}

export const LESSONS_DATA: LessonItem[] = [
  // =========================================================================
  // 🇮🇳 MARATHI (REMINGTON GAIL) CURRICULUM
  // =========================================================================

  // --- TIER 1: BEGINNER (मूलभूत अक्षरे व रो सराव) ---
  {
    id: "mr-beg-1",
    title: "Home Row - Left Hand (क, म, त, न)",
    marathiTitle: "होम रो - डावा हात (क, म, त, न)",
    description: "डाव्या हाताची बोटे क, म, त, न या अक्षरांवर स्थिर करून सराव करा.",
    tier: "beginner",
    language: "marathi",
    totalSteps: 4,
    steps: [
      { stepNumber: 1, instruction: "क आणि म या अक्षरांचा सराव करा.", targetText: "क म क म कक मम कक मम कम कम मक मक कमकम मकमक" },
      { stepNumber: 2, instruction: "त आणि न ही अक्षरे जोडा.", targetText: "त न त न तत नन तत नन तन तन नत नत तनतन नतनत" },
      { stepNumber: 3, instruction: "डाव्या हाताची चारही अक्षरे एकत्र टाईप करा.", targetText: "क म त न कम तन मत नक कत मन नम तक कतन मतन नकम" },
      { stepNumber: 4, instruction: "शब्द सराव करा.", targetText: "मन तन मत नमक कनक नमन कसम तरक मकर कतन" },
    ],
  },
  {
    id: "mr-beg-2",
    title: "Home Row - Right Hand (स, य, ल, व, र, ह)",
    marathiTitle: "होम रो - उजवा हात (स, य, ल, व, र, ह)",
    description: "उजव्या हाताची बोटे स, य, ल, व, र, ह या अक्षरांवर चालवा.",
    tier: "beginner",
    language: "marathi",
    totalSteps: 4,
    steps: [
      { stepNumber: 1, instruction: "स, य, ल अक्षरांचा सराव करा.", targetText: "स य ल स य ल सस यय लल सय यल लस सययल लसय" },
      { stepNumber: 2, instruction: "व, र, ह अक्षरांचा सराव करा.", targetText: "व र ह व र ह वव रर हह वर रह रव वररह रहवर" },
      { stepNumber: 3, instruction: "उजव्या हाताची सर्व अक्षरे एकत्र टाईप करा.", targetText: "स य ल व र ह सय लव रह सरल वरह लहर रसल" },
      { stepNumber: 4, instruction: "उजव्या हाताचे शब्द बनवा.", targetText: "सरल वरस लस रस लय वय रहस लवर लहर रसस" },
    ],
  },
  {
    id: "mr-beg-3",
    title: "Complete Home Row Master Drill",
    marathiTitle: "होम रो - संपूर्ण सराव",
    description: "दोन्ही हातांनी संपूर्ण होम रो मधील शब्द व वाक्ये बनवा.",
    tier: "beginner",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "दोन्ही हातांची अक्षरे सलग टाईप करा.", targetText: "क म त न स य ल व र ह क म त न स य ल व र ह कक मम तत नन सस यय लल वव रर हह" },
      { stepNumber: 2, instruction: "होम रो चे लहान शब्द बनवा.", targetText: "कर सर तर वर नर मन तन वन सत कत रस लस नस लय वय समय" },
      { stepNumber: 3, instruction: "होम रो चे लांब शब्द व कसरत सराव करा.", targetText: "करवत तरस कसरत नवरस सरवत समरस वतन तरक मकर नमक हरवत समय" },
    ],
  },
  {
    id: "mr-beg-4",
    title: "Top Row (ज, ड, ण, च, प, ट, ठ, ग, ब, द)",
    marathiTitle: "वरची ओळ (ज, ड, ण, च, प, ट, ठ, ग, ब, द)",
    description: "वरच्या ओळीवरील अक्षरांची मसल मेमरी पक्की करा.",
    tier: "beginner",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "वरच्या ओळीची अक्षरे टाईप करा.", targetText: "ज ड ण च प ट ठ ग ब द जज डड णण चच पप टट ठठ गग बब दद" },
      { stepNumber: 2, instruction: "Top Row चे लहान शब्द बनवा.", targetText: "पट चट तट गट दड जड ठग बड चण पड पटपट चटचट गडबड दगड" },
      { stepNumber: 3, instruction: "Home + Top Row चे एकत्र शब्द.", targetText: "कपट गमन तपन नगर चमन पदक मदत जनक पतन कदम गगन पवन जगत" },
    ],
  },
  {
    id: "mr-beg-5",
    title: "Bottom Row (झ, ढ, ध, फ, भ, घ, ळ, श, ष)",
    marathiTitle: "खालची ओळ (झ, ढ, ध, फ, भ, घ, ळ, श, ष)",
    description: "खालच्या ओळीवरील अक्षरांची मसल मेमरी तयार करा.",
    tier: "beginner",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "खालच्या ओळीची अक्षरे टाईप करा.", targetText: "झ ढ ध फ भ घ ळ श ष झझ ढढ धध फफ भभ घघ ळळ शश षष" },
      { stepNumber: 2, instruction: "खालच्या ओळीचे शब्द सराव करा.", targetText: "धड फळ भट घट झट ढग फणस भडक धडक झडक घमघम झळझळ" },
      { stepNumber: 3, instruction: "तिन्ही ओळींची अक्षरे एकत्र सराव करा.", targetText: "भाषण घोषणा ढकल भरण घडण धन घट भर फळ शपथ नगर मदत" },
    ],
  },

  // --- TIER 2: COMMON WORDS (दैनिक उच्च-वारंवारता शब्द) ---
  {
    id: "mr-cw-1",
    title: "High-Frequency Connectors (दैनिक मूलभूत जोडशब्द)",
    marathiTitle: "दैनिक वापराचे मूलभूत शब्द",
    description: "मराठीतील सर्वाधिक वापरले जाणारे साधे शब्द व जोडशब्द.",
    tier: "common_words",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "साधे जोडशब्द टाईप करा.", targetText: "आहे आणि या त्या पण तर मग सर्व काय कधी कुठे कसे नेहमी असे तसे" },
      { stepNumber: 2, instruction: "दैनिक व्यवहारातील शब्द.", targetText: "काम लोक देश गाव शहर शाळा घर पाणी पुस्तक रस्ता झाड फूल फळ दिवस" },
      { stepNumber: 3, instruction: "सलग वाहणारा शब्द सराव.", targetText: "आपण आपले सर्वांचे विचार चांगले ठेवावे नेहमी अभ्यास करून प्रगती करावी" },
    ],
  },
  {
    id: "mr-cw-2",
    title: "General & Office Common Words (सामान्य व कार्यालयीन शब्द)",
    marathiTitle: "सामान्य व व्यावहारिक शब्दसंग्रह",
    description: "दैनिक व्यवहार आणि कार्यालयात वारंवार येणारे शब्द.",
    tier: "common_words",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "कार्यालयीन मूलभूत शब्द.", targetText: "नाव अर्ज दिनांक पत्ता फोन सही पत्र नोंद काम वेळ मुदत क्रमांक" },
      { stepNumber: 2, instruction: "सामाजिक व व्यवहार शब्द.", targetText: "समाज सुधारणा शिक्षण विकास प्रगती कुटुंब मित्र सहकार्य नियोजन संस्था" },
      { stepNumber: 3, instruction: "वाक्यप्रवाह सराव.", targetText: "प्रत्येक नागरिकाने आपल्या हक्कांसोबत कर्तव्याची जाणीव ठेवून कार्य केले पाहिजे" },
    ],
  },

  // --- TIER 3: INTERMEDIATE (स्वरचिन्हे, जोडाक्षरे व अंक) ---
  {
    id: "mr-int-1",
    title: "काना व मात्रा सराव (ा, े, ै)",
    marathiTitle: "काना व मात्रा सराव (ा, े, ै)",
    description: "अक्षरांना काना (ा) आणि मात्रा (े, ै) जोडण्याचा सराव.",
    tier: "intermediate",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "काना आणि मात्रांचा मूलभूत सराव करा.", targetText: "का के कै मा मे मै ता ते तै ना ने नै सा से सै रा रे रै" },
      { stepNumber: 2, instruction: "काना व मात्रांचे शब्द बनवा.", targetText: "काम केस बैल मान देश पैसा नाव मेल मैदान कान खेळ सैनिक" },
      { stepNumber: 3, instruction: "सोपी वाक्ये टाईप करा.", targetText: "रमेश गावाला गेला सुरेशने बैलगाडी पाहिली मैदानात मुले खेळत आहेत" },
    ],
  },
  {
    id: "mr-int-2",
    title: "वेलांटी व उकार सराव (ि, ी, ु, ू)",
    marathiTitle: "वेलांटी व उकार सराव (ि, ी, ु, ू)",
    description: "र्‍हस्व-दीर्घ वेलांटी (ि, ी) आणि र्‍हस्व-दीर्घ उकार (ु, ू) सराव.",
    tier: "intermediate",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "वेलांटी व उकारांची अक्षरे टाईप करा.", targetText: "कि की कु कू मि मी मु मू ति ती तु तू दि दी दु दू शि शी शु शू" },
      { stepNumber: 2, instruction: "वेलांटी व उकार असलेले शब्द.", targetText: "किरण कीटक कुलूप दूध दिवस दीपक मुलगा फूल विचार जीवन पाऊस" },
      { stepNumber: 3, instruction: "वाक्य सराव करा.", targetText: "नितीन रोज सकाळी दूध पितो दिपकने सुंदर चित्र काढले जीवनात सुख आहे" },
    ],
  },
  {
    id: "mr-int-3",
    title: "Shift Keys & जोडाक्षरे (हलंत सराव)",
    marathiTitle: "शिफ्ट कीज व जोडाक्षरे (हलंत सराव)",
    description: "Shift की आणि हलंत (्) वापरून अचूक जोडाक्षरे तयार करा.",
    tier: "intermediate",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "Shift अक्षरे (ख, थ, ध, फ, भ, घ, ळ, श, ष).", targetText: "ख थ ध फ भ घ ळ श ष ज्ञ त्र क्ष ऱ्ह खथ धफ भघ ळश षज्ञ" },
      { stepNumber: 2, instruction: "हलंत जोडून मूलभूत जोडाक्षरे बनवा.", targetText: "क्य स्त प्र त्र ष्ट न्य म्य ल्य व्य त्य द्य च्य प्य" },
      { stepNumber: 3, instruction: "जोडाक्षरांचे शब्द सराव करा.", targetText: "सत्य न्याय राष्ट्र प्रत्यक्ष कर्तव्य अभ्यास स्पष्ट मुख्य पुस्तक विद्यार्थी" },
    ],
  },
  {
    id: "mr-int-4",
    title: "अंक व विरामचिन्हे (१-० / ।, ?, !)",
    marathiTitle: "अंक व विरामचिन्हे (१-० / ।, ?, !)",
    description: "Number row वरील मराठी अंक आणि मराठी विरामचिन्हांचा सराव.",
    tier: "intermediate",
    language: "marathi",
    totalSteps: 2,
    steps: [
      { stepNumber: 1, instruction: "मराठी अंकांचा सराव करा.", targetText: "१ २ ३ ४ ५ ६ ७ ८ ९ ० १२ ३४ ५६ ७८ ९० १२० ३४५ ६७८ ९००" },
      { stepNumber: 2, instruction: "दिनांक व चिन्हांसह वाक्ये.", targetText: "दिनांक १५ ऑगस्ट १९४७ रोजी भारत स्वतंत्र झाला । परिपत्रक क्र १२४५ अन्वये आदेश दिला ।" },
    ],
  },

  // --- TIER 4: ADVANCED (शासकीय परिपत्रके व वेग परीक्षा) ---
  {
    id: "mr-adv-1",
    title: "शासकीय कार्यालयीन शब्दसंग्रह (Administrative Vocab)",
    marathiTitle: "शासकीय कार्यालयीन शब्दसंग्रह",
    description: "GCC-TBC परीक्षेत वारंवार येणारे शासकीय शब्द.",
    tier: "advanced",
    language: "marathi",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "पदनामे व विभाग टाईप करा.", targetText: "मंत्रालय संचालक आयुक्त जिल्हाधिकारी तहसीलदार मुख्याधिकारी अधीक्षक लिपिक" },
      { stepNumber: 2, instruction: "कार्यालयीन कामकाजाचे शब्द.", targetText: "परिपत्रक अधिसूचना मंजुरी प्रति स्वाक्षरी संदर्भ प्रस्ताव सादर अवलोकन" },
      { stepNumber: 3, instruction: "आर्थिक व सेवाविषयक शब्द.", targetText: "अर्थसंकल्प लेखापरीक्षण वित्तीय मान्यता पदोन्नती ज्येष्ठता सेवापुस्तिका रजाअर्ज" },
    ],
  },
  {
    id: "mr-adv-2",
    title: "शासकीय परिपत्रक वेग सराव (३० WPM Circular)",
    marathiTitle: "शासकीय परिपत्रक वेग सराव (३० WPM)",
    description: "३० WPM परीक्षेच्या मानकांनुसार शासकीय परिपत्रकाचा सलग सराव.",
    tier: "advanced",
    language: "marathi",
    totalSteps: 2,
    steps: [
      { stepNumber: 1, instruction: "परिपत्रकाचा पूर्वार्ध टाईप करा.", targetText: "शासकीय सेवेतील सर्व अधिकारी व कर्मचारी यांनी कार्यालयीन वेळेत वेळेवर उपस्थित राहणे अनिवार्य करण्यात आले आहे ।" },
      { stepNumber: 2, instruction: "परिपत्रकाचा उत्तरार्ध टाईप करा.", targetText: "संगणकीय प्रणालीद्वारे दैनंदिन उपस्थितीची नोंद वेळेवर पूर्ण करून नागरिकांची प्रलंबित कामे त्वरित निकाली काढावीत ।" },
    ],
  },
  {
    id: "mr-adv-3",
    title: "शासकीय टायपिंग ४० WPM मास्टर पॅसेज (Speed Exam)",
    marathiTitle: "शासकीय टायपिंग ४० WPM मास्टर पॅसेज",
    description: "४० WPM परीक्षेतील १००% अचूकता आणि गती मिळवण्यासाठीचा लांब परिच्छेद.",
    tier: "advanced",
    language: "marathi",
    totalSteps: 2,
    steps: [
      { stepNumber: 1, instruction: "कामाच्या गुणवत्तेबाबतचा शासकीय उतारा टाईप करा.", targetText: "प्रशासकीय कामकाजात पारदर्शकता आणि गतिमानता आणण्यासाठी आधुनिक संगणकीय प्रणालीचा प्रभावी वापर करणे अत्यंत आवश्यक आहे ।" },
      { stepNumber: 2, instruction: "नागरिक सनद उतारा टाईप करा.", targetText: "नागरिक सनदेनुसार सर्व सेवा विहित मुदतीत उपलब्ध करून देणे हे प्रत्येक शासकीय कर्मचाऱ्याचे कर्तव्य असून कामात हलगर्जीपणा चालणार नाही ।" },
    ],
  },

  // =========================================================================
  // 🇬🇧 ENGLISH (QWERTY) CURRICULUM
  // =========================================================================

  // --- TIER 1: BEGINNER ---
  {
    id: "en-beg-1",
    title: "Home Row Keys (ASDF JKL;)",
    marathiTitle: "होम रो कीज (ASDF JKL;)",
    description: "Master the foundation of touch typing across the home row.",
    tier: "beginner",
    language: "english",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "Practice left hand keys.", targetText: "asdf asdf aa ss dd ff as df sa fd asdf fdsa" },
      { stepNumber: 2, instruction: "Practice right hand keys.", targetText: "jkl; jkl; jj kk ll ;; jk l; kj ;l jkl; ;lkj" },
      { stepNumber: 3, instruction: "Combine both hands.", targetText: "asdf jkl; asdf jkl; aadd ssff jjkk ll;; asdf jkl;" },
    ],
  },
  {
    id: "en-beg-2",
    title: "Top Row Keys (QWERTY UIOP)",
    marathiTitle: "वरची ओळ (QWERTY UIOP)",
    description: "Reach upward smoothly to master Q, W, E, R, T and Y, U, I, O, P.",
    tier: "beginner",
    language: "english",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "Practice upward reaches.", targetText: "qwer tyui op qwer tyui op qq ww ee rr tt yy uu ii oo pp" },
      { stepNumber: 2, instruction: "Build top row words.", targetText: "type write power quiet poetry require tower root pure pour tree trip" },
      { stepNumber: 3, instruction: "Home + Top Row words.", targetText: "there their where great trade quiet write state order water letter" },
    ],
  },
  {
    id: "en-beg-3",
    title: "Bottom Row Keys (ZXCVBNM)",
    marathiTitle: "खालची ओळ (ZXCVBNM)",
    description: "Reach downward cleanly to master Z, X, C, V, B, N, M.",
    tier: "beginner",
    language: "english",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "Bottom row reaches.", targetText: "zxcv bnm zxcv bnm zz xx cc vv bb nn mm zxc vbn mnb vcx" },
      { stepNumber: 2, instruction: "Bottom row words.", targetText: "man can ban van cab mob zinc exam comb cabin civic bomb mimic" },
      { stepNumber: 3, instruction: "All rows mixed pangram.", targetText: "the quick brown fox jumps over the lazy dog pack my box with five dozen jugs" },
    ],
  },

  // --- TIER 2: COMMON WORDS ---
  {
    id: "en-cw-1",
    title: "Top 100 English Common Words",
    marathiTitle: "इंग्रजी सर्वाधिक वापरले जाणारे १०० शब्द",
    description: "Build effortless muscle memory with the most frequent English words.",
    tier: "common_words",
    language: "english",
    totalSteps: 3,
    steps: [
      { stepNumber: 1, instruction: "Type short common words.", targetText: "the of and to a in is you that it he was for on are as with his they" },
      { stepNumber: 2, instruction: "Type connector words.", targetText: "at be this have from or one had by word but not what all were we when your can" },
      { stepNumber: 3, instruction: "High-speed sentence flow.", targetText: "there were many people who wanted to improve their typing skills every single day" },
    ],
  },
  {
    id: "en-cw-2",
    title: "High-Frequency Business & Daily Words",
    marathiTitle: "व्यावसायिक व दैनिक महत्त्वाचे शब्द",
    description: "High-frequency words used in exams and professional typing.",
    tier: "common_words",
    language: "english",
    totalSteps: 2,
    steps: [
      { stepNumber: 1, instruction: "Business & office words.", targetText: "about after again below could every first great house large might never other place right small" },
      { stepNumber: 2, instruction: "Continuous sentence practice.", targetText: "good communication and rapid typing accuracy ensure great professional productivity at work" },
    ],
  },

  // --- TIER 3: INTERMEDIATE ---
  {
    id: "en-int-1",
    title: "Shift Keys & Capitalization",
    marathiTitle: "कॅपिटलायझेशन व शिफ्ट कीज",
    description: "Master opposite Pinky shift coordination for capital letters.",
    tier: "intermediate",
    language: "english",
    totalSteps: 2,
    steps: [
      { stepNumber: 1, instruction: "Capitalized words.", targetText: "Asdf Jkl; Qwer Uiop Zxcv Bnm Mumbai Pune Maharashtra India Delhi London" },
      { stepNumber: 2, instruction: "Sentences with proper nouns.", targetText: "The Government of Maharashtra conducts GCC-TBC examinations in various centers." },
    ],
  },
  {
    id: "en-int-2",
    title: "Number Row & Numerical Drills (1-0)",
    marathiTitle: "नंबर रो व संख्या सराव (1-0)",
    description: "Reach accurately to the top number row without looking down.",
    tier: "intermediate",
    language: "english",
    totalSteps: 2,
    steps: [
      { stepNumber: 1, instruction: "Number reaches.", targetText: "1 2 3 4 5 6 7 8 9 0 12 34 56 78 90 100 250 500 1000 2026" },
      { stepNumber: 2, instruction: "Dates & references.", targetText: "Order No 4589 dated 15th August 1947 was processed under Section 12B on 2026." },
    ],
  },

  // --- TIER 4: ADVANCED ---
  {
    id: "en-adv-1",
    title: "High-Frequency Speed Bursts (30 WPM Builder)",
    marathiTitle: "हाय-फ्रिक्वेन्सी स्पीड बस्ट्स (30 WPM)",
    description: "Build rapid muscle memory with high-speed word flow.",
    tier: "advanced",
    language: "english",
    totalSteps: 2,
    steps: [
      { stepNumber: 1, instruction: "Common fast combinations.", targetText: "about after again below could every first great house large might never other place right small there under water where world" },
      { stepNumber: 2, instruction: "Continuous paragraph flow.", targetText: "Continuous practice and proper finger placement are the key factors for achieving higher typing speed and accurate keystrokes." },
    ],
  },
  {
    id: "en-adv-2",
    title: "Official Correspondence Flow (40 WPM Exam Passages)",
    marathiTitle: "शासकीय कार्यालयीन पत्रव्यवहार (40 WPM)",
    description: "Official government correspondence and business memo typing standard.",
    tier: "advanced",
    language: "english",
    totalSteps: 2,
    steps: [
      { stepNumber: 1, instruction: "Official government directive.", targetText: "In accordance with official government directives, all departmental heads are hereby instructed to submit their monthly progress reports on time." },
      { stepNumber: 2, instruction: "Speed examination paragraph.", targetText: "Computerized examination systems ensure complete transparency, fair assessment, and immediate generation of candidate performance records." },
    ],
  },
];