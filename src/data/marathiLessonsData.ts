// src/data/marathiLessonsData.ts

export interface LessonStep {
  stepNumber: number;
  instruction: string;
  targetText: string;
}

export interface LessonItem {
  id: string;
  language: "marathi" | "english";
  tier: "beginner" | "intermediate" | "advanced";
  lessonNumber: number;
  title: string;
  marathiTitle: string;
  description: string;
  totalSteps: number;
  steps: LessonStep[];
}

export const MARATHI_BEGINNER_LESSONS: LessonItem[] = [
  // --- Lesson 1: क, र, स, य + काना (k), मात्रा (s) ---
  {
    id: "mr-lesson-1",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 1,
    title: "Root Letters & Matras (क, र, स, य, ा, े)",
    marathiTitle: "१. मूल अक्षर आणि मात्रा (क, र, स, य, ा, े)",
    description: "फक्त होम रो वरील अक्षरे (d, j, l, ;) आणि काना (k), मात्रा (s).",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "होम रो अक्षरांचा सराव: क, र, स, य",
        targetText: "क क क क र र र र स स स स य य य य क र स य क र स य क क र र स स य य",
      },
      {
        stepNumber: 2,
        instruction: "काना आणि मात्रा सह सराव करा.",
        targetText: "का का का रा रा रा सा सा सा या या या के के रे रे से से ये ये का रा सा या",
      },
      {
        stepNumber: 3,
        instruction: "फक्त क, र, स, य असणारे २ व ३ अक्षरी शब्द.",
        targetText: "कर रस कस सर कास काय काया सारा सारा काया रास काक सार सरे कार केस",
      },
      {
        stepNumber: 4,
        instruction: "फक्त शिकलेल्या अक्षरांचा सलग प्रवाह.",
        targetText: "कर रस कस सर काय सारा काया रास काक सार सरे कार केस सारा काया कर रस",
      },
    ],
  },

  // --- Lesson 2: क, र, स, य + वेलांटी (ि, ी) ---
  {
    id: "mr-lesson-2",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 2,
    title: "Velanti with Home Row (ि, ी)",
    marathiTitle: "२. पहिली व दुसरी वेलांटी (ि, ी)",
    description: "फक्त क, र, स, य अक्षरांना पहिली व दुसरी वेलांटी जोडणे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "कि, की, सि, सी, रि, री, यि, यी",
        targetText: "कि कि की की सि सि सी सी रि रि री री यि यि यी यी कि की सि सी रि री",
      },
      {
        stepNumber: 2,
        instruction: "फक्त क, र, स, य ची वेलांटी असणारे शब्द.",
        targetText: "रवि रवी सीमा कीर सीर रीस काकी साकी करी सरी सारी यारी कीस रीस",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द (फक्त क, र, स, य).",
        targetText: "रसिका सारिका कसरी कासारी सरकारी करारी सारीका रसिक कसरी सारी",
      },
      {
        stepNumber: 4,
        instruction: "फक्त क, र, स, य ची वाक्ये.",
        targetText: "सीमा रस कर काकी सारी कर रसिका सारी आण रवी कार कर सीमा काकी सारी",
      },
    ],
  },

  // --- Lesson 3: 'ह' (g), 'म' (e), 'त' (r) अनलॉक ---
  {
    id: "mr-lesson-3",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 3,
    title: "Consonants (ह, म, त)",
    marathiTitle: "३. नवीन अक्षरे (ह, म, त)",
    description: "आता ह (g), म (e), त (r) शिकून मागील क, र, स, य शी जोडणे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "ह, म, त अक्षरांचा सराव.",
        targetText: "ह ह ह ह म म म म त त त त ह म त ह म त ह ह म म त त ह म त",
      },
      {
        stepNumber: 2,
        instruction: "शिकलेल्या अक्षरांच्या जोड्या (क, र, स, य, ह, म, त).",
        targetText: "हम तम मत मह तर हर मर रत हक मक तक हात मात तात हार मार",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द (फक्त क, र, स, य, ह, म, त).",
        targetText: "मकर तरस हरम तसम महत हरकत मस्तक हमाल तमाशा माती हाती समत",
      },
      {
        stepNumber: 4,
        instruction: "शिकलेल्या अक्षरांची वाक्ये.",
        targetText: "मकर हात वर कर तारा काम कर हात मार हरकत करू नको सीमा काम कर",
      },
    ],
  },

  // --- Lesson 4: क, र, स, य, ह, म, त चा मिश्र सराव ---
  {
    id: "mr-lesson-4",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 4,
    title: "Unlocked Keys Flow (क, र, स, य, ह, म, त)",
    marathiTitle: "४. शिकलेल्या अक्षरांचा सराव",
    description: "नवीन अक्षर न घेता बोटांची गती वाढवणे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "अक्षरांची वेगवान अदलाबदल.",
        targetText: "कम रस मत हर सक यम तक मर सह तम यस कर मय तस हत कत मत सत",
      },
      {
        stepNumber: 2,
        instruction: "काना-मात्रा शब्द.",
        targetText: "सकाम मकार ताकती हरवत समता ममता सरिता हसता मारता करता सामा",
      },
      {
        stepNumber: 3,
        instruction: "३ व ४ अक्षरी शब्द (क, र, स, य, ह, म, त).",
        targetText: "सरकार सहकार समरसता सतर्कता करामत तातडीने मारहाण समता",
      },
      {
        stepNumber: 4,
        instruction: "सलग वाक्ये.",
        targetText: "सरकार काम करत आहे सहकार करा ममता मदत कर सतर्क रहा तातडीने कर",
      },
    ],
  },

  // --- Lesson 5: शिकलेल्या अक्षरांची रिदम प्रॅक्टिस ---
  {
    id: "mr-lesson-5",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 5,
    title: "Word Repetition & Rhythm",
    marathiTitle: "५. शब्द पुनरावृत्ती आणि लय",
    description: "क, र, स, य, ह, म, त या अक्षरांचा लयबद्ध सराव.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "२ अक्षरी पुनरावृत्ती.",
        targetText: "सरसर थरथर करकर मरमर तरतर कटकट सरसर करकर तरतर मरमर",
      },
      {
        stepNumber: 2,
        instruction: "काना असलेले पुनरावृत्ती शब्द.",
        targetText: "कामाकाम सारासार मारामार तारातार सारासारी कारागीर कारभार",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द.",
        targetText: "करवती सरबती हरकती तरकती मारकती समकती तमकती कसकती",
      },
      {
        stepNumber: 4,
        instruction: "सलग वाक्य प्रवाह.",
        targetText: "भरभर काम कर सरसर पुढे चल कारभार नीट कर सारासार विचार कर",
      },
    ],
  },

  // --- Lesson 6: स्वर 'अ' (v) आणि 'आ' (vk) अनलॉक ---
  {
    id: "mr-lesson-6",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 6,
    title: "Vowels 'अ' & 'आ'",
    marathiTitle: "६. स्वर 'अ' आणि 'आ' (v, vk)",
    description: "फक्त क, र, स, य, ह, म, त सोबत 'अ' व 'आ' जोडणे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "अ (v) आणि आ (vk) चा सराव.",
        targetText: "अ अ अ अ आ आ आ आ अ आ अ आ अ अ आ आ अ आ अ आ अ आ अ आ",
      },
      {
        stepNumber: 2,
        instruction: "अ आणि आ चे शब्द (फक्त अनलॉक अक्षरे).",
        targetText: "अमर आज आकार अमर आधार आहार आकाश आवाज आदर आशा असा",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द.",
        targetText: "अमरता आकारात आरामात आवाजात आधारे आहारात असमात",
      },
      {
        stepNumber: 4,
        instruction: "वाक्य सराव.",
        targetText: "अमर आज आला आधार कर आकाश स्वच्छ आहे आदर राख आवाज करू नको",
      },
    ],
  },

  // --- Lesson 7: अनुस्वार (ं - A/x) अनलॉक ---
  {
    id: "mr-lesson-7",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 7,
    title: "Anuswar / Bindu (ं)",
    marathiTitle: "७. अनुस्वार (बिंदू - ं)",
    description: "फक्त शिकलेल्या अक्षरांवर (क, र, स, य, ह, म, त, अ) अनुस्वार देणे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "अनुस्वार अक्षरे: कं, रं, सं, यं, मं, तं, हं, अं",
        targetText: "कं कं रं रं सं सं यं यं मं मं तं तं हं हं कं रं सं यं मं तं हं",
      },
      {
        stepNumber: 2,
        instruction: "२ अक्षरी अनुस्वार शब्द (फक्त अनलॉक अक्षरे).",
        targetText: "रंग संग अंग तंग कंद मंद संत अंत हंस दंत मंत्र यंत्र तंत्र",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द.",
        targetText: "संकट संसार संगीत अंतरंग तरंग आनंद संमती संतास संथ",
      },
      {
        stepNumber: 4,
        instruction: "अनुस्वार वाक्ये.",
        targetText: "संसार सुखी करा संगीत ऐका आनंद माना संकट दूर करा संत वंदन करा",
      },
    ],
  },

  // --- Lesson 8: धडे १ ते ७ ची शुद्ध उजळणी ---
  {
    id: "mr-lesson-8",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 8,
    title: "Review Drill (धडे १ ते ७ उजळणी)",
    marathiTitle: "८. मागील सर्व अक्षरांची उजळणी",
    description: "फक्त क, र, स, य, ह, म, त, अ, आ आणि काना, मात्रा, वेलांटी, अनुस्वार.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "अक्षरांची उजळणी.",
        targetText: "कर रस मत हर अमर आज रंग संग काकी सीमा हात संगीत",
      },
      {
        stepNumber: 2,
        instruction: "शिकलेल्या अक्षरांचे शब्द.",
        targetText: "सकाम मकार सरकार सहकार सतर्कता तातडीने आनंदमय संगीतमय",
      },
      {
        stepNumber: 3,
        instruction: "३ व ४ अक्षरी शब्द.",
        targetText: "समरसता करामात रसिका सारिका सरकारी करारी सारीका रसिक",
      },
      {
        stepNumber: 4,
        instruction: "सलग परिच्छेद (फक्त अनलॉक अक्षरे).",
        targetText: "अमर आज सकाळी आला. त्याने संगीत ऐकले. काकीने मदत केली. सर्वांना आनंद झाला.",
      },
    ],
  },

  // --- Lesson 9: Top Row 'प' (i), 'न' (u), 'व' (o), 'ल' (n) अनलॉक ---
  {
    id: "mr-lesson-9",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 9,
    title: "Consonants (प, न, व, ल)",
    marathiTitle: "९. नवीन अक्षरे (प, न, व, ल)",
    description: "प (i), न (u), व (o), ल (n) अक्षरांची जोडणी.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "प, न, व, ल अक्षरे.",
        targetText: "प प प प न न न न व व व व ल ल ल ल प न व ल प न व ल",
      },
      {
        stepNumber: 2,
        instruction: "नवीन अक्षरांचे २ अक्षरी साधे शब्द.",
        targetText: "पन नव वल लप पवन वतन नवल लपन पालन वाचन नयन पावन",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द (फक्त शिकलेली अक्षरे).",
        targetText: "पालक वाचक नमन वलय पटल नमन विलास नवीन ललना वनवास",
      },
      {
        stepNumber: 4,
        instruction: "वाक्य सराव.",
        targetText: "पवन नवीन पुस्तक आण वाचन नियमित कर वजन योग्य ठेव विलास काम कर",
      },
    ],
  },

  // --- Lesson 10: सोपी जोडाक्षरे (स्त, त्य, न्य, ल्य, म्य, प्य) ---
  {
    id: "mr-lesson-10",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 10,
    title: "Basic Joint Letters (स्त, त्य, न्य, ल्य)",
    marathiTitle: "१०. सोपी जोडाक्षरे (स्त, त्य, न्य, ल्य)",
    description: "शिकलेल्या अक्षरांचे हलंत (्) जोडून जोडाक्षरे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "अर्धी अक्षरे: स्त, त्य, न्य, ल्य, म्य, प्य",
        targetText: "स्त स्त त्य त्य न्य न्य ल्य ल्य म्य म्य प्य प्य स्त त्य न्य ल्य",
      },
      {
        stepNumber: 2,
        instruction: "सोपे जोडाक्षर शब्द.",
        targetText: "रस्ता सत्य धन्य मूल्य नास्तिक कृत्य मान्य जास्त स्वस्त नात्यात",
      },
      {
        stepNumber: 3,
        instruction: "३ व ४ अक्षरी शब्द.",
        targetText: "वक्तव्य धन्यता अमूल्य स्वास्थ्य अस्तित्व सत्यता मान्यता",
      },
      {
        stepNumber: 4,
        instruction: "सलग वाक्ये.",
        targetText: "सत्य नेहमी बोला रस्ता स्वच्छ ठेवा वेळेचे मूल्य ओळखा कल्याण करा",
      },
    ],
  },

  // --- Lesson 11: अर्धा 'क' (क्) & 'रू' अनलॉक ---
  {
    id: "mr-lesson-11",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 11,
    title: "Half 'क' (क्) & 'रू'",
    marathiTitle: "११. अर्धा 'क' (क्) आणि 'रू'",
    description: "क् आणि रू अक्षरांचा अचूक वापर.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "क् आणि रू अक्षरे.",
        targetText: "क् क् क् क् रू रू रू रू क्या क्या रू रू क् क्या रू क् क्या रू",
      },
      {
        stepNumber: 2,
        instruction: "क् आणि रू चे शब्द.",
        targetText: "क्य क्या रूप रूपरेषा रुबाब रूपवान पक्का धक्का चक्का रक्कम",
      },
      {
        stepNumber: 3,
        instruction: "शब्द सराव.",
        targetText: "रक्कम जमा करा सुंदर रूप आहे पक्का निर्णय घ्या धक्का बसला",
      },
      {
        stepNumber: 4,
        instruction: "सलग वाक्ये.",
        targetText: "पूर्ण रक्कम जमा करा पक्का रस्ता तयार झाला रूपरेषा निश्चित करा",
      },
    ],
  },

  // --- Lesson 12: 'ऐ' (ै) & 'श', 'ष' अनलॉक ---
  {
    id: "mr-lesson-12",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 12,
    title: "'ऐ' Matra (ै) & 'श', 'ष'",
    marathiTitle: "१२. दोन मात्रे (ै) आणि 'श', 'ष'",
    description: "दोन मात्रे (ै) आणि श ('), ष (Shift+') अक्षरे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "दोन मात्रे आणि श, ष: कै, सै, रै, मै, पै, श, ष",
        targetText: "कै कै सै सै रै रै मै मै पै पै श श ष ष कै सै रै मै श ष",
      },
      {
        stepNumber: 2,
        instruction: "दोन मात्रे असलेले शब्द.",
        targetText: "पैसे कैरी सैनिक मैदान थैली वैमानिक दैनिक नैतिक पैदास",
      },
      {
        stepNumber: 3,
        instruction: "श आणि ष चे शब्द.",
        targetText: "शहर शतक शपथ षटकार विशेष भाषण भाषा शिक्षण मनुष्य",
      },
      {
        stepNumber: 4,
        instruction: "सलग वाक्ये.",
        targetText: "सैनिक देशाचे रक्षण करतात मैदानावर चला विशेष भाषा वापरा पैसे सांभाळा",
      },
    ],
  },

  // --- Lesson 13: पूर्ण विराम (।) अनलॉक ---
  {
    id: "mr-lesson-13",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 13,
    title: "Purna Viram (।) with Short Sentences",
    marathiTitle: "१३. पूर्ण विराम (।) चा सराव",
    description: "वाक्य समाप्तीसाठी पूर्ण विराम (।) वापरणे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "पूर्ण विराम चिन्ह (।)",
        targetText: "। । । । सं सं मं मं पं पं । सं मं पं । । सं मं पं ।",
      },
      {
        stepNumber: 2,
        instruction: "सोपी वाक्ये पूर्ण विरामासह.",
        targetText: "राम घरी आला। सीमा काम कर। दिवस संपला। पाऊस पडत आहे।",
      },
      {
        stepNumber: 3,
        instruction: "अनुस्वारयुक्त वाक्ये.",
        targetText: "संसार चांगला आहे। संगीत गोड आहे। पतंग वर गेला। आनंद झाला।",
      },
      {
        stepNumber: 4,
        instruction: "सलग परिच्छेद.",
        targetText: "भारत आपला देश आहे। आपण सर्व भारतीय आहोत। आपल्या देशाचा आदर करावा।",
      },
    ],
  },

  // --- Lesson 14: जोडाक्षरांची सलग वाक्ये ---
  {
    id: "mr-lesson-14",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 14,
    title: "Sentences with Joint Letters",
    marathiTitle: "१४. जोडाक्षरांची वाक्ये",
    description: "शिकलेली जोडाक्षरे आणि पूर्ण विराम.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "जोडाक्षरे: स्त, त्य, न्य, ल्य, क्य, म्य",
        targetText: "स्त त्य न्य ल्य क्य म्य स्त त्य न्य ल्य क्य म्य रस्ता सत्य",
      },
      {
        stepNumber: 2,
        instruction: "जोडाक्षरांची वाक्ये.",
        targetText: "सत्यमेव जयते। रस्त्याने सावकाश चाला। नियमांचे पालन करा।",
      },
      {
        stepNumber: 3,
        instruction: "मध्यम वाक्ये.",
        targetText: "आपले शहर स्वच्छ ठेवा। सर्वांनी स्वच्छता बाळगावी।",
      },
      {
        stepNumber: 4,
        instruction: "सलग परिच्छेद.",
        targetText: "नियमित अभ्यास केल्याने यश मिळते। वेळेचे महत्त्व ओळखून काम करा।",
      },
    ],
  },

  // --- Lesson 15: उकार (ु, ू) अनलॉक ---
  {
    id: "mr-lesson-15",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 15,
    title: "'उ' (ु) & 'ऊ' (ू) Matras",
    marathiTitle: "१५. पहिला उकार (ु) आणि दुसरा उकार (ू)",
    description: "पहिला उकार (q) आणि दुसरा उकार (Shift+q) चे शब्द.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "उकार अक्षरे: कु, कू, पु, पू, मु, मू, तु, तू, सु, सू, रु, रू",
        targetText: "कु कू पु पू मु मू तु तू सु सू रु रू कु कू पु पू मु मू",
      },
      {
        stepNumber: 2,
        instruction: "उकार शब्द.",
        targetText: "पूर दूध फूल सुंदर मूल सूत सुमन पूजा धूप सुरस मुलूख",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द.",
        targetText: "सुगंधित अनुकुल प्रतिकूल मुकुंद कुलदीप सुमनताई",
      },
      {
        stepNumber: 4,
        instruction: "उकार वाक्ये.",
        targetText: "सुमन सुंदर गाणे गाते। पूजा वेळेवर सुरू झाली। बागेत सुंदर फुले आहेत।",
      },
    ],
  },

  // --- Lesson 16: 'ज' (t) अनलॉक ---
  {
    id: "mr-lesson-16",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 16,
    title: "Consonant 'ज' (t) Flow",
    marathiTitle: "१६. नवीन अक्षर 'ज' (t) आणि प्रवाह",
    description: "ज (t) अक्षर जोडून नवीन शब्द तयार करणे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "ज (t) अक्षराचा सराव.",
        targetText: "ज ज ज ज जा जा जी जी जु जू जे जै जं ज जा जी जु",
      },
      {
        stepNumber: 2,
        instruction: "ज चे शब्द.",
        targetText: "जल जन जम जग जनक जतन मजूर ताज राजा जमीन जकात",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द.",
        targetText: "मजकूर जनता जमीन जकात तराजू महसूल जामीन ताजमहाल",
      },
      {
        stepNumber: 4,
        instruction: "सलग वाक्य प्रवाह.",
        targetText: "जनतेची सेवा करा। जमिनीचा महसूल वेळेवर भरा। तराजू बरोबर ठेवा।",
      },
    ],
  },

  // --- Lesson 17: 'च' (p) & 'ब' (c) अनलॉक ---
  {
    id: "mr-lesson-17",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 17,
    title: "Consonants 'च' (p) & 'ब' (c)",
    marathiTitle: "१७. नवीन अक्षरे 'च' (p) आणि 'ब' (c)",
    description: "च आणि ब अक्षरांची जोडणी.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "च (p) आणि ब (c) अक्षरे.",
        targetText: "च च च च ब ब ब ब चा बा ची बी चे बे च ब चा बा",
      },
      {
        stepNumber: 2,
        instruction: "च आणि ब चे शब्द.",
        targetText: "चल चव चहा बाद बकरा बाजार चमन बचत बातमी बचाव",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द.",
        targetText: "चमचा बादाम बाजरी चपाती बचाव बराबर विचार बारकाई",
      },
      {
        stepNumber: 4,
        instruction: "वाक्य सराव.",
        targetText: "बाजारात जाऊन सामान आणा। पैशांची बचत करा। चांगला विचार ठेवा।",
      },
    ],
  },

  // --- Lesson 18: 'द' (n) & 'ग' (x) अनलॉक ---
  {
    id: "mr-lesson-18",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 18,
    title: "Consonants 'द' (n) & 'ग' (x)",
    marathiTitle: "१८. नवीन अक्षरे 'द' (n) आणि 'ग' (x)",
    description: "द आणि ग अक्षरांचा बॉटम रो सराव.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "द (n) आणि ग (x) अक्षरे.",
        targetText: "द द द द ग ग ग ग दा गा दी गी दे गे द ग दा गा",
      },
      {
        stepNumber: 2,
        instruction: "द आणि ग चे शब्द.",
        targetText: "दगदग गगन दिवस दिवा गाणे गाय देश दार गाजर गवत",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द.",
        targetText: "दरवाजा गणित गारवा दिशाभूल दस्तऐवज गरिबी गुलाब",
      },
      {
        stepNumber: 4,
        instruction: "वाक्य सराव.",
        targetText: "गरिबांना मदत करा। गणिताचा नियमित सराव करा। दिवा तेवत ठेवा।",
      },
    ],
  },

  // --- Lesson 19: 'ख' ([) अनलॉक ---
  {
    id: "mr-lesson-19",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 19,
    title: "Consonant 'ख' ([)",
    marathiTitle: "१९. नवीन अक्षर 'ख' ([)",
    description: "ख अक्षराचे शब्द आणि वाक्ये.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "ख ([) अक्षराचा सराव.",
        targetText: "ख ख ख ख खा खा खी खी खु खू खे खै खं ख खा खी",
      },
      {
        stepNumber: 2,
        instruction: "ख चे शब्द.",
        targetText: "खत खडक खिडकी खजिना खलबता खरोखर खेळ खास खसखस",
      },
      {
        stepNumber: 3,
        instruction: "३ अक्षरी शब्द.",
        targetText: "खात्री खरेदी खटला खिडकीतून खळाळ खेळणी खापर",
      },
      {
        stepNumber: 4,
        instruction: "वाक्य सराव.",
        targetText: "खिडकी उघडी ठेवा। बाजारातून नवीन खेळणी खरेदी करा। खरोखर छान काम केले।",
      },
    ],
  },

  // --- Lesson 20: स्वल्पविराम (,) अनलॉक ---
  {
    id: "mr-lesson-20",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 20,
    title: "Comma (,) & Listing Words",
    marathiTitle: "२०. स्वल्पविराम (,) चा योग्य सराव",
    description: "नावे आणि यादीसाठी स्वल्पविराम (,) वापरणे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "स्वल्पविराम (,) की चा सराव.",
        targetText: ", , , , , , , , , , राम, शाम, रवी, सीमा, मीना, राजू,",
      },
      {
        stepNumber: 2,
        instruction: "नावे आणि शहरे स्वल्पविरामासह.",
        targetText: "पुणे, मुंबई, नाशिक, नागपूर, सातारा, कोल्हापूर, सोलापूर,",
      },
      {
        stepNumber: 3,
        instruction: "वस्तूंची यादी.",
        targetText: "वही, पेन, पुस्तक, कागद, पेन्सिल, दप्तर, पट्टी, पाटी,",
      },
      {
        stepNumber: 4,
        instruction: "सलग वाक्ये.",
        targetText: "राम, शाम आणि गणेश एकत्र आले। वही, पेन आणि पुस्तक सोबत घ्या।",
      },
    ],
  },

  // --- Lesson 21: प्रश्नचिन्ह (?) अनलॉक (Beginner Final) ---
  {
    id: "mr-lesson-21",
    language: "marathi",
    tier: "beginner",
    lessonNumber: 21,
    title: "Question Mark (?) - Beginner Mastery",
    marathiTitle: "२१. प्रश्नचिन्ह (?) - प्राथमिक स्तर पूर्ण",
    description: "Beginner स्तराचा शेवटचा सराव: प्रश्नचिन्ह (?) आणि सर्व अनलॉक अक्षरे.",
    totalSteps: 4,
    steps: [
      {
        stepNumber: 1,
        instruction: "प्रश्नचिन्ह (?) चा सराव (Shift+/ / ?)",
        targetText: "? ? ? ? ? ? काय? का? कधी? कोठे? कसे? किती? कोणाचे?",
      },
      {
        stepNumber: 2,
        instruction: "सोपी प्रश्नार्थक वाक्ये.",
        targetText: "तुमचे नाव काय आहे? तुम्ही कोठे राहता? आज कोणती तारीख आहे? पाऊस पडेल का?",
      },
      {
        stepNumber: 3,
        instruction: "सविस्तर प्रश्न.",
        targetText: "शाळेत कधी जाणार आहात? नवीन पुस्तक वाचले का? वेळेवर काम पूर्ण झाले का?",
      },
      {
        stepNumber: 4,
        instruction: "Beginner लेव्हल अंतिम मास्टर परिच्छेद.",
        targetText: "आपण दररोज नियमित सराव करता का? होय, नियमित सरावाने टायपिंगचा वेग नक्कीच वाढतो। आता आपण पुढील Intermediate स्तरावर जाण्यासाठी सज्ज आहात!",
      },
    ],
  },
];