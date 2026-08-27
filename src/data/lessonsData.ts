// src/data/lessonsData.ts

export interface LessonItem {
  id: string;
  title: string;
  marathiTitle: string;
  tier: number;
  tierName: string;
  targetWpm: number;
  minAccuracy: number;
  description: string;
  keysTaught: string[];
  text: string;
}

export const marathiLessons: LessonItem[] = [
  // ==========================================
  // TIER 1: ROW FOUNDATION & BASIC KEYS (धडा १ ते १०)
  // ==========================================
  {
    id: "mr-1",
    title: "Home Row - Right Hand (र, ा, स, य)",
    marathiTitle: "होम रो - उजवा हात (र, ा, स, य)",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 15,
    minAccuracy: 90,
    description: "j, k, l, ; कीजचा मूलभूत बोटांचा सराव.",
    keysTaught: ["j", "k", "l", ";"],
    text: "र ा स य रस साय राय सरा सारा यारा सय रसारा रयास सयरा सायरा सारास"
  },
  {
    id: "mr-2",
    title: "Home Row - Left Hand (ं, े, क, ि, ह)",
    marathiTitle: "होम रो - डावा हात (ं, े, क, ि, ह)",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 15,
    minAccuracy: 90,
    description: "a, s, d, f, g कीजचा मूलभूत सराव.",
    keysTaught: ["a", "s", "d", "f", "g"],
    text: "क ह के हे कं हं कि हि कह हक केक हकक केह हके कहक हंक कंके"
  },
  {
    id: "mr-3",
    title: "Home Row - Full Integration",
    marathiTitle: "होम रो - दोन्ही हात एकत्रीकरण",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 18,
    minAccuracy: 90,
    description: "होम रो वरील दोन्ही हातांचे साधे शब्द.",
    keysTaught: ["a", "s", "d", "f", "g", "j", "k", "l", ";"],
    text: "करा कसा रहा सही सेक सायका सारा हरी कारे सारे हारे केका हिरवे सहीस"
  },
  {
    id: "mr-4",
    title: "Top Row - Left Reach (ु, ू, म, त, ज)",
    marathiTitle: "टॉप रो - डावा हात (ु, ू, म, त, ज)",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 18,
    minAccuracy: 90,
    description: "q, w, e, r, t कीजचा सराव.",
    keysTaught: ["q", "w", "e", "r", "t"],
    text: "म त ज मु मू तु तू जु जू मत मज तम जम जमत मतम ताज मात जात"
  },
  {
    id: "mr-5",
    title: "Top Row - Right Reach (ल, न, प, व, च, ख)",
    marathiTitle: "टॉप रो - उजवा हात (ल, न, प, व, च, ख)",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 18,
    minAccuracy: 90,
    description: "y, u, i, o, p, [ कीजचा सराव.",
    keysTaught: ["y", "u", "i", "o", "p", "["],
    text: "ल न प व च ख लन नव पव चव खव लप नप चप वन पचन पवन लवन खत पान"
  },
  {
    id: "mr-6",
    title: "Home + Top Row Combined",
    marathiTitle: "होम व टॉप रो साधे शब्द",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 20,
    minAccuracy: 90,
    description: "दोन ओळींचे विना-मात्रा शब्द.",
    keysTaught: ["e", "r", "t", "y", "u", "i", "o", "p", "d", "g", "j", "l"],
    text: "मन जन वतन पचन मदन मदत कसरत जतन नमन करवत वचन चमन जनक वचक"
  },
  {
    id: "mr-7",
    title: "Bottom Row - Left Hand (्र, ग, ब, अ, इ)",
    marathiTitle: "बॉटम रो - डावा हात (्र, ग, ब, अ, इ)",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 18,
    minAccuracy: 90,
    description: "z, x, c, v, b कीजचा सराव.",
    keysTaught: ["z", "x", "c", "v", "b"],
    text: "ग ब अ इ गब बद बग अगर इकडे बदल गगन बकबक बात बाग"
  },
  {
    id: "mr-8",
    title: "Bottom Row - Right Hand (द, उ, ए, ण्, ध्)",
    marathiTitle: "बॉटम रो - उजवा हात (द, उ, ए, ण्, ध्)",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 18,
    minAccuracy: 90,
    description: "n, m, ,, ., / कीजचा सराव.",
    keysTaught: ["n", "m", ",", ".", "/"],
    text: "द उ ए दण धन उदय एक एकद एका दमन दहन दगड वजन वरण"
  },
  {
    id: "mr-9",
    title: "All Rows Integration",
    marathiTitle: "तिन्ही ओळींचा संगम",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 20,
    minAccuracy: 92,
    description: "तिन्ही ओळींवरील मुळाक्षरांचे सोपे शब्द.",
    keysTaught: ["all-basic"],
    text: "कमळ गगन भरत चमन वतन शरद बदल दगड नगर समय वजन भजन कसरत मगर"
  },
  {
    id: "mr-10",
    title: "Tier 1 Assessment Test",
    marathiTitle: "टप्पा १ - मूलभूत कौशल्य चाचणी",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 20,
    minAccuracy: 92,
    description: "सर्व मूलभूत अक्षरांचा वेग व अचूकता पडताळणी चाचणी.",
    keysTaught: ["assessment-1"],
    text: "शरद जलद चल. मदन कसरत कर. नमन नमन कर. भरत बचत कर. गगन वतन बघ."
  },

  // ==========================================
  // TIER 2: MATRAS, VOWELS & SPEED FLOW (धडा ११ ते २०)
  // ==========================================
  {
    id: "mr-11",
    title: "Kana (ा) Practice",
    marathiTitle: "काना (k = ा) सराव",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 20,
    minAccuracy: 92,
    description: "काका, मामा, बाबा, दादा सारख्या काना शब्दांचा सराव.",
    keysTaught: ["k"],
    text: "काका मामा बाबा दादा नाना राजा वाघा सारा चारा तारा गाणारा वाजणारा"
  },
  {
    id: "mr-12",
    title: "Matra (े व ै) Practice",
    marathiTitle: "एक व दोन मात्रा (s व Shift+S) सराव",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 20,
    minAccuracy: 92,
    description: "s (े) व S (ै) चे शब्द.",
    keysTaught: ["s", "S"],
    text: "केले गेले आले पाले तारे वारे बैल पैसे कैरी थैली मैदान सैनिक"
  },
  {
    id: "mr-13",
    title: "Velanti 1 (ि) - र्‍हस्व पहिली वेलांटी",
    marathiTitle: "पहिली वेलांटी (f = ि) सराव",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 22,
    minAccuracy: 92,
    description: "f की चा अचूक क्रम सराव.",
    keysTaught: ["f"],
    text: "दिन रवी कवी मित्र चित्र दिवस विकास किरण विजय विनय विचार"
  },
  {
    id: "mr-14",
    title: "Velanti 2 (ी) - दीर्घ दुसरी वेलांटी",
    marathiTitle: "दुसरी वेलांटी (h = ी) सराव",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 22,
    minAccuracy: 92,
    description: "h की चा दीर्घ वेलांटी सराव.",
    keysTaught: ["h"],
    text: "पाणी गाडी साडी नदी मीठ बी बियाणे श्रीमंत गरीब जीवन शरीर"
  },
  {
    id: "mr-15",
    title: "Ukar (ु व ू) - पहिला व दुसरा उकार",
    marathiTitle: "उकार (q व w) सराव",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 22,
    minAccuracy: 92,
    description: "q (ु) व w (ू) उकारांचे शब्द.",
    keysTaught: ["q", "w"],
    text: "गुरु सुरू मुले फुले दूध पूज सुख दुख सुंदर चतुर मुलगा कुमार कुलूप"
  },
  {
    id: "mr-16",
    title: "Anuswar (ं) & Visarga (ः)",
    marathiTitle: "अनुस्वार व विसर्ग (a व #) सराव",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 22,
    minAccuracy: 92,
    description: "a (ं) व Shift+3 (ः) चा वापर.",
    keysTaught: ["a", "#"],
    text: "गंगा रंग संग पतंग आनंद शांत संत अंतःकरण स्वतः क्रमशः नमः मंगल"
  },
  {
    id: "mr-17",
    title: "R-Rushi (ृ) & Can-Matra (ो व ौ)",
    marathiTitle: "ऋकार (ृ) आणि ओ/औ कार सराव",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 22,
    minAccuracy: 92,
    description: "= (ृ) आणि काना-मात्रा जोड्या.",
    keysTaught: ["=", "a", "s"],
    text: "कृपा वृक्ष पृथ्वी गृह मोर चोर सोय औषध गौरव दौलत नौका"
  },
  {
    id: "mr-18",
    title: "High Frequency Connectors",
    marathiTitle: "दैनिक जोडणारे शब्द",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 25,
    minAccuracy: 93,
    description: "आहे, आणि, पण, तर, सर्व, कारण प्रवाह.",
    keysTaught: ["connectors"],
    text: "आहे आणि पण तर मग सर्व कारण म्हणून जेव्हा तेव्हा तसेच अशा प्रकारे"
  },
  {
    id: "mr-19",
    title: "Short Sentences & Full Stops",
    marathiTitle: "लहान वाक्ये व पूर्णविराम (\\)",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 25,
    minAccuracy: 93,
    description: "फुलस्टॉपसह नियमित लहान वाक्ये.",
    keysTaught: ["\\", "sentences"],
    text: "भारत माझा देश आहे. सर्व भारतीय माझे बांधव आहेत. मला माझ्या देशाचा अभिमान आहे."
  },
  {
    id: "mr-20",
    title: "Tier 2 Speed Benchmark (28 WPM)",
    marathiTitle: "टप्पा २ गती चाचणी (२८ WPM)",
    tier: 2,
    tierName: "Tier 2: Matras & Flow",
    targetWpm: 28,
    minAccuracy: 94,
    description: "२८ WPM बेंचमार्क परीक्षा.",
    keysTaught: ["benchmark-2"],
    text: "वेळेचे नियोजन करणे यशाची गुरुकिल्ली आहे. नियमित सराव केल्याने टायपिंगचा वेग आणि अचूकता दोन्ही वाढतात."
  },

  // ==========================================
  // TIER 3: SHIFT KEYS, HALANT & LIGATURES (धडा २१ ते ३०)
  // ==========================================
  {
    id: "mr-21",
    title: "Shift Consonants 1 (थ्, ळ, भ्, स्)",
    marathiTitle: "शिफ्ट अक्षरे १ (थ्, ळ, भ्, स्)",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 22,
    minAccuracy: 92,
    description: "Shift + F, G, H, L कीज.",
    keysTaught: ["F", "G", "H", "L"],
    text: "स्थान बाळ भारत भात शाळा स्थळ फळ भव्य भास्कर भाग्य स्थान स्नेह"
  },
  {
    id: "mr-22",
    title: "Shift Consonants 2 (फ, ॅ, रू, ष्)",
    marathiTitle: "शिफ्ट अक्षरे २ (फ, ॅ, रू, ष्)",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 22,
    minAccuracy: 92,
    description: "Shift + Q, W, ;, ' कीज.",
    keysTaught: ["Q", "W", ":", "\""],
    text: "फळ फायदा रूप रूपरेषा विशेष भाषा पुरुष धनुष्य कृषी कल्पक बँक बॅट"
  },
  {
    id: "mr-23",
    title: "Shift Bottom Keys (ट, ठ, छ, ड, ढ, झ, घ्)",
    marathiTitle: "शिफ्ट बॉटम अक्षरे (ट, ठ, छ, ड, ढ, झ, घ्)",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 22,
    minAccuracy: 92,
    description: "Shift + V, B, N, M, <, >, ? कीज.",
    keysTaught: ["V", "B", "N", "M", "<", ">", "?"],
    text: "टपाल ठसा छत्री डबा ढग झाड घर घंटा घड्याळ ठाम छळ झोपाळा"
  },
  {
    id: "mr-24",
    title: "Halant (+) and Half Letters",
    marathiTitle: "हलंत (+) व जोडाक्षरे सराव",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 22,
    minAccuracy: 92,
    description: "+ (्) की वापरून जोडलेली अक्षरे.",
    keysTaught: ["+"],
    text: "सत्य वाक्य न्याय मुख्य भव्य सभ्य कल्प सत्यता तथ्य कन्या"
  },
  {
    id: "mr-25",
    title: "R-Kar (z = ्र) सराव",
    marathiTitle: "खालील रकार (z = ्र) सराव",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 24,
    minAccuracy: 92,
    description: "प्र, ब्र, ग्र, क्र, त्र अक्षरांचा प्रवाह.",
    keysTaught: ["z"],
    text: "प्रमोद प्रकाश प्रथम प्रगती क्रम ग्राम ग्रंथ प्रयोग प्रमाण प्रत्यक्ष"
  },
  {
    id: "mr-26",
    title: "R-Phaar (Shift+Z = र्) सराव",
    marathiTitle: "वरचा रफार (Shift+Z = र्) सराव",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 24,
    minAccuracy: 92,
    description: "सूर्य, सर्व, कार्य, गर्व, धर्म.",
    keysTaught: ["Z"],
    text: "सूर्य कार्य धर्म गर्व सर्व वर्ष पूर्व स्पर्धा मार्ग दर्शक निष्कर्ष"
  },
  {
    id: "mr-27",
    title: "Special Ligatures (श्र, ज्ञ, क्ष, द्व, द्ध, त्र)",
    marathiTitle: "विशेष संयुक्त जोडाक्षरे सराव",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 24,
    minAccuracy: 92,
    description: "Shift + J, K, {, }, *, ( कीज.",
    keysTaught: ["J", "K", "{", "}", "*", "("],
    text: "श्रम ज्ञानी विज्ञान क्षत्रिय विद्वान प्रसिद्ध शुद्ध बुद्ध वृद्ध श्रद्धा त्रिकोण"
  },
  {
    id: "mr-28",
    title: "Marathi Numerals (१ ते ०)",
    marathiTitle: "मराठी अंक ओळ (१ ते ०) सराव",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 20,
    minAccuracy: 95,
    description: "१, २, ३, ४, ५, ६, ७, ८, ९, ० अंक ओळ.",
    keysTaught: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    text: "दिनांक १५/०८/१९४७ रोजी भारत देश स्वतंत्र झाला. एकूण १०० पैकी ९५ गुण मिळाले. वर्ष २०२६."
  },
  {
    id: "mr-29",
    title: "Office Terminology Drill",
    marathiTitle: "कार्यालयीन पदनामे व शब्दसंग्रह",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 26,
    minAccuracy: 94,
    description: "मंत्रालय, जिल्हाधिकारी, आयुक्त, संचालक, स्वाक्षरी, नोंदवही.",
    keysTaught: ["gov-terms"],
    text: "विभागीय आयुक्त, जिल्हाधिकारी कार्यालय, मुख्य कार्यकारी अधिकारी, गट विकास अधिकारी, सह संचालक."
  },
  {
    id: "mr-30",
    title: "Tier 3 Master Speed Test",
    marathiTitle: "टप्पा ३ - प्रगत जोडाक्षर वेग परीक्षा",
    tier: 3,
    tierName: "Tier 3: Shift & Ligatures",
    targetWpm: 28,
    minAccuracy: 95,
    description: "सर्व जोडाक्षरे व अंकांचा सर्वसमावेशक परिच्छेद.",
    keysTaught: ["benchmark-3"],
    text: "प्रशासकीय कामकाजात अचूकता आणि शिस्त राखण्यासाठी संगणकीय प्रणालीवर प्रभुत्व मिळवणे अत्यंत आवश्यक आहे."
  },

  // ==========================================
  // TIER 4: OFFICIAL SPEED EXAMS & GCC-TBC (धडा ३१ ते ४०)
  // ==========================================
  {
    id: "mr-31",
    title: "Speed Builder 30 WPM (Flow 1)",
    marathiTitle: "गती वाढवणारा परिच्छेद १ (३० WPM)",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 30,
    minAccuracy: 95,
    description: "३० शब्द प्रति मिनिट नियमित सराव.",
    keysTaught: ["speed-30"],
    text: "मानवी जीवनात शिक्षणाला अनन्यसाधारण महत्त्व आहे. शिक्षणाने माणसाचा सर्वांगीण विकास होतो आणि विचारांना नवी दिशा मिळते."
  },
  {
    id: "mr-32",
    title: "Government Circular 30 WPM",
    marathiTitle: "शासकीय परिपत्रक उतारा (३० WPM)",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 30,
    minAccuracy: 95,
    description: "शासकीय निर्णय व परिपत्रक फॉरमॅट.",
    keysTaught: ["exam-flow"],
    text: "शासकीय कामात पारदर्शकता आणि गतिमानता आणण्यासाठी ई-गव्हर्नन्स प्रणालीचा प्रभावी वापर करणे अनिवार्य करण्यात आले आहे."
  },
  {
    id: "mr-33",
    title: "Public Health Notification",
    marathiTitle: "सार्वजनिक आरोग्य व स्वच्छता अधिसूचना",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 32,
    minAccuracy: 95,
    description: "महानगरपालिका व आरोग्य विषयक उतारा.",
    keysTaught: ["exam-flow"],
    text: "सर्व नागरिकांना सूचित करण्यात येते की, कचरा वर्गीकरण नियमांचे काटेकोरपणे पालन करावे आणि पर्यावरणाचे रक्षण करावे."
  },
  {
    id: "mr-34",
    title: "Citizen Charter 32 WPM",
    marathiTitle: "नागरिक सनद उतारा (३२ WPM)",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 32,
    minAccuracy: 95,
    description: "लोकसेवा हक्क अधिनियम परिच्छेद.",
    keysTaught: ["exam-flow"],
    text: "लोकसेवा हक्क अधिनियमानुसार प्रत्येक नागरिकाला विहित मुदतीत गुणवत्तापूर्ण शासकीय सेवा मिळण्याचा कायदेशीर हक्क प्राप्त झाला आहे."
  },
  {
    id: "mr-35",
    title: "Financial & Audit Standard (35 WPM)",
    marathiTitle: "लेखापरीक्षण व वित्त परिच्छेद (३५ WPM)",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 35,
    minAccuracy: 95,
    description: "वित्तीय तरतूद व लेखापरीक्षण अहवाल.",
    keysTaught: ["exam-flow"],
    text: "चालू आर्थिक वर्षातील जमा व खर्चाचा सविस्तर ताळेबंद सक्षम प्राधिकरणासमोर लेखापरीक्षणासाठी वेळेत सादर करण्यात यावा."
  },
  {
    id: "mr-36",
    title: "Speed Endurance 36 WPM",
    marathiTitle: "सहनशक्ती वेग सराव (३६ WPM)",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 36,
    minAccuracy: 95,
    description: "लांब वाक्ये आणि वेग स्थिरता सराव.",
    keysTaught: ["exam-flow"],
    text: "कठीण परिश्रमाला योग्य तंत्रज्ञानाची जोड दिल्यास कोणतीही परीक्षा सहजतेने उत्तीर्ण होता येते. अचूकता राखणे हाच यशाचा मूलमंत्र आहे."
  },
  {
    id: "mr-37",
    title: "GCC-TBC 30 WPM Final Mock",
    marathiTitle: "GCC-TBC ३० WPM अंतिम मॉक टेस्ट",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 30,
    minAccuracy: 96,
    description: "अधिकृत ३० WPM परीक्षा पॅटर्न.",
    keysTaught: ["exam-flow"],
    text: "उद्योग आणि व्यापार क्षेत्रातील प्रगतीमुळे राज्याच्या महसुलात भरीव वाढ होत असून युवकांसाठी रोजगाराच्या नवीन संधी निर्माण होत आहेत."
  },
  {
    id: "mr-38",
    title: "High Speed Sprint (38 WPM)",
    marathiTitle: "उच्च गती स्प्रिंट (३८ WPM)",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 38,
    minAccuracy: 96,
    description: "४० WPM वेगाकडे वाटचाल.",
    keysTaught: ["exam-flow"],
    text: "संगणकीय टायपिंगमध्ये बोटांची लवचिकता आणि मनाची एकाग्रता राखल्यास चुका न होता उच्चांकी वेग गाठणे शक्य होते."
  },
  {
    id: "mr-39",
    title: "Official Exam 40 WPM Standard",
    marathiTitle: "अधिकृत शासकीय ४० WPM परीक्षा",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 40,
    minAccuracy: 96,
    description: "महाराष्ट्र शासन GCC-TBC ४० WPM परिच्छेद.",
    keysTaught: ["exam-flow"],
    text: "महाराष्ट्रातील औद्योगिक व कृषी क्षेत्राच्या शाश्वत विकासासाठी पायाभूत सुविधांचे जाळे अधिक भक्कम करण्यात येत असून रोजगार निर्मितीला सर्वोच्च प्राधान्य दिले आहे."
  },
  {
    id: "mr-40",
    title: "Grand GCC-TBC Master Certificate Exam",
    marathiTitle: "अंतिम GCC-TBC पदविका महापरीक्षा",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 40,
    minAccuracy: 98,
    description: "सर्व निकषांसह अंतिम मराठी टायपिंग प्राविण्य चाचणी.",
    keysTaught: ["all-master"],
    text: "महाराष्ट्र राज्य परीक्षा परिषद, पुणे यांच्या मानकांनुसार तयार करण्यात आलेली ही अंतिम प्राविण्य चाचणी यशस्वीरीत्या पूर्ण करून आपले प्रमाणपत्र निश्चित करा."
  }
];

export const englishLessons: LessonItem[] = [
  // ==========================================
  // TIER 1: ROW FOUNDATION (Lessons 1 to 8)
  // ==========================================
  {
    id: "en-1",
    title: "Home Row - Left Hand",
    marathiTitle: "होम रो - डावा हात",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 20,
    minAccuracy: 90,
    description: "Learn A, S, D, F foundation keys.",
    keysTaught: ["a", "s", "d", "f"],
    text: "asdf asdf asdf fdsa fdsa aass ddff asdf sad fad dad daf fads dads"
  },
  {
    id: "en-2",
    title: "Home Row - Right Hand",
    marathiTitle: "होम रो - उजवा हात",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 20,
    minAccuracy: 90,
    description: "Learn J, K, L, ; keys.",
    keysTaught: ["j", "k", "l", ";"],
    text: "jkl; jkl; ;lkj ;lkj jjkk ll;; jkl; all fall lad lass flask salad"
  },
  {
    id: "en-3",
    title: "Home Row - Full Flow",
    marathiTitle: "होम रो - पूर्ण ओळ",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 22,
    minAccuracy: 90,
    description: "Integrating G and H index reaches.",
    keysTaught: ["g", "h"],
    text: "flag glad half dash flash glass shall gala slash hash glad flask"
  },
  {
    id: "en-4",
    title: "Top Row - Left Hand",
    marathiTitle: "टॉप रो - डावा हात",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 22,
    minAccuracy: 90,
    description: "Learn Q, W, E, R, T reaches.",
    keysTaught: ["q", "w", "e", "r", "t"],
    text: "qwert qwert tree wear water great raw wart rate tread water quart"
  },
  {
    id: "en-5",
    title: "Top Row - Right Hand",
    marathiTitle: "टॉप रो - उजवा हात",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 22,
    minAccuracy: 90,
    description: "Learn Y, U, I, O, P reaches.",
    keysTaught: ["y", "u", "i", "o", "p"],
    text: "yuiop yuiop your pour you pull pop pipe priority pure point output"
  },
  {
    id: "en-6",
    title: "Home + Top Row Combined",
    marathiTitle: "होम व टॉप रो संगम",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 25,
    minAccuracy: 92,
    description: "Smooth alternating hand movements.",
    keysTaught: ["top-home"],
    text: "power report letter writer please update street proper project paper"
  },
  {
    id: "en-7",
    title: "Bottom Row Mastery",
    marathiTitle: "बॉटम रो मुळाक्षरे",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 22,
    minAccuracy: 90,
    description: "Learn Z, X, C, V, B, N, M keys.",
    keysTaught: ["z", "x", "c", "v", "b", "n", "m"],
    text: "zxcvb nm zxcvb calm zinc back move next zone zero make voice banner"
  },
  {
    id: "en-8",
    title: "Complete Alphabet Pangrams",
    marathiTitle: "वर्णमाला परिपूर्ण सराव",
    tier: 1,
    tierName: "Tier 1: Row Foundation",
    targetWpm: 25,
    minAccuracy: 92,
    description: "Practice all 26 alphabets in single sentences.",
    keysTaught: ["alphabet"],
    text: "the quick brown fox jumps over the lazy dog and runs quickly away"
  },

  // ==========================================
  // TIER 2: HIGH-FREQUENCY COMMON WORDS (धडा ९ ते १५)
  // ==========================================
  {
    id: "en-9",
    title: "Top 50 Short Words",
    marathiTitle: "५० महत्त्वाचे लहान शब्द",
    tier: 2,
    tierName: "Tier 2: Common Words",
    targetWpm: 28,
    minAccuracy: 93,
    description: "High frequency 2-3 letter words.",
    keysTaught: ["short-words"],
    text: "the and for are but not you all any can had her was one our out day get"
  },
  {
    id: "en-10",
    title: "Medium Connectors",
    marathiTitle: "जोडणारे शब्द",
    tier: 2,
    tierName: "Tier 2: Common Words",
    targetWpm: 30,
    minAccuracy: 93,
    description: "Common sentence connectors.",
    keysTaught: ["connectors"],
    text: "there their about which would these other into some could them than"
  },
  {
    id: "en-11",
    title: "Workplace Vocabulary",
    marathiTitle: "कार्यालयीन शब्दसंग्रह",
    tier: 2,
    tierName: "Tier 2: Common Words",
    targetWpm: 32,
    minAccuracy: 93,
    description: "Business and corporate terms.",
    keysTaught: ["workplace"],
    text: "office system report meeting project notice urgent email client team work"
  },
  {
    id: "en-12",
    title: "Daily Communication",
    marathiTitle: "दैनिक संभाषण प्रवाह",
    tier: 2,
    tierName: "Tier 2: Common Words",
    targetWpm: 34,
    minAccuracy: 94,
    description: "Common conversational phrasing.",
    keysTaught: ["daily-flow"],
    text: "please find the attached document for your review and necessary approval"
  },
  {
    id: "en-13",
    title: "Rhythm & Alternating Hands",
    marathiTitle: "हात बदल लय सराव",
    tier: 2,
    tierName: "Tier 2: Common Words",
    targetWpm: 35,
    minAccuracy: 94,
    description: "Smooth typing cadence.",
    keysTaught: ["rhythm"],
    text: "authentic dynamic island problem visitor handle parallel suspend network"
  },
  {
    id: "en-14",
    title: "Speed Sprint 38 WPM",
    marathiTitle: "गती चाचणी ३८ श.प्र.मि.",
    tier: 2,
    tierName: "Tier 2: Common Words",
    targetWpm: 38,
    minAccuracy: 95,
    description: "Fast common word sequencing.",
    keysTaught: ["speed-drill"],
    text: "consistency is the foundation of high typing speed and long endurance"
  },
  {
    id: "en-15",
    title: "Tier 2 Master Benchmark",
    marathiTitle: "टप्पा २ बेंचमार्क चाचणी",
    tier: 2,
    tierName: "Tier 2: Common Words",
    targetWpm: 40,
    minAccuracy: 95,
    description: "40 WPM milestone test.",
    keysTaught: ["benchmark-2"],
    text: "learning touch typing requires patience and muscle memory to master all keys effortlessly"
  },

  // ==========================================
  // TIER 3: SHIFT, NUMBERS & PUNCTUATION (धडा १६ ते २२)
  // ==========================================
  {
    id: "en-16",
    title: "Left Pinky Shift Capitalization",
    marathiTitle: "डावी शिफ्ट व कॅपिटल अक्षरे",
    tier: 3,
    tierName: "Tier 3: Shift & Numbers",
    targetWpm: 30,
    minAccuracy: 94,
    description: "Capitalizing right-hand keys (J, K, L, U, I, O, P).",
    keysTaught: ["shift-left"],
    text: "John Kevin London India Japan Paris United Office Paper Knowledge"
  },
  {
    id: "en-17",
    title: "Right Pinky Shift Capitalization",
    marathiTitle: "उजवी शिफ्ट व कॅपिटल अक्षरे",
    tier: 3,
    tierName: "Tier 3: Shift & Numbers",
    targetWpm: 30,
    minAccuracy: 94,
    description: "Capitalizing left-hand keys (A, S, D, F, Q, W, E, R, T).",
    keysTaught: ["shift-right"],
    text: "America France Spain Germany Rome Texas Washington Daily Sunday"
  },
  {
    id: "en-18",
    title: "Number Row Drills",
    marathiTitle: "इंग्रजी अंक सराव",
    tier: 3,
    tierName: "Tier 3: Shift & Numbers",
    targetWpm: 25,
    minAccuracy: 95,
    description: "Numbers 1 to 0 reaches.",
    keysTaught: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    text: "order 1024 code 8593 date 28-08-2026 value 450 total 9870 items 365"
  },
  {
    id: "en-19",
    title: "Standard Punctuation",
    marathiTitle: "विरामचिन्हे सराव",
    tier: 3,
    tierName: "Tier 3: Shift & Numbers",
    targetWpm: 30,
    minAccuracy: 94,
    description: "Commas, periods, apostrophes, and question marks.",
    keysTaught: [",", ".", "'", "?"],
    text: "Hello, how are you today? It's a great opportunity, don't miss it."
  },
  {
    id: "en-20",
    title: "Special Symbols & Brackets",
    marathiTitle: "विशेष चिन्हे व कंस",
    tier: 3,
    tierName: "Tier 3: Shift & Numbers",
    targetWpm: 28,
    minAccuracy: 94,
    description: "Shift symbols (@, #, $, %, &, *, ()).",
    keysTaught: ["@", "#", "$", "%", "&", "(", ")"],
    text: "price ($50) discount (20%) contact (support@typeforge.pro) & code #404"
  },
  {
    id: "en-21",
    title: "Formal Quotations & Dialogues",
    marathiTitle: "उद्धरण व संवाद रचना",
    tier: 3,
    tierName: "Tier 3: Shift & Numbers",
    targetWpm: 32,
    minAccuracy: 95,
    description: "Double quotes and exclamation marks.",
    keysTaught: ["\"", "!"],
    text: "He said, \"Practice makes a person perfect!\" and continued his training."
  },
  {
    id: "en-22",
    title: "Mixed Numbers & Addresses",
    marathiTitle: "पत्ता व आकडेवारी सराव",
    tier: 3,
    tierName: "Tier 3: Shift & Numbers",
    targetWpm: 32,
    minAccuracy: 95,
    description: "Real-world data entry formatting.",
    keysTaught: ["data-entry"],
    text: "Flat No. 402, High-Tech Towers, Pune - 411033. Phone: +91-9876543210."
  },

  // ==========================================
  // TIER 4: ADVANCED PASSAGES & GCC-TBC (धडा २३ ते ३०)
  // ==========================================
  {
    id: "en-23",
    title: "Business Correspondence",
    marathiTitle: "व्यावसायिक पत्रव्यवहार",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 35,
    minAccuracy: 95,
    description: "Formal corporate memo passage.",
    keysTaught: ["exam-flow"],
    text: "Dear Team, Please be informed that our quarterly review conference is scheduled for the upcoming Monday at 10:00 AM in the central hall."
  },
  {
    id: "en-24",
    title: "Government Notification Standard",
    marathiTitle: "शासकीय अधिसूचना इंग्रजी",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 35,
    minAccuracy: 95,
    description: "Official public administrative circular.",
    keysTaught: ["exam-flow"],
    text: "The municipal administration invites sealed tenders from eligible contractors for the modernization of public infrastructure and digital facilities."
  },
  {
    id: "en-25",
    title: "Speed Endurance Drill 40 WPM",
    marathiTitle: "सहनशक्ती सराव ४० श.प्र.मि.",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 40,
    minAccuracy: 96,
    description: "40 WPM continuous steady flow.",
    keysTaught: ["exam-flow"],
    text: "Digital transformation is reshaping global industries by enhancing productivity, streamlining workflows, and delivering superior user experiences."
  },
  {
    id: "en-26",
    title: "GCC-TBC Official 40 WPM Passage",
    marathiTitle: "GCC-TBC अधिकृत ४० WPM परीक्षा",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 40,
    minAccuracy: 96,
    description: "Standard state board typing examination.",
    keysTaught: ["exam-flow"],
    text: "Education is the most powerful tool for empowering individuals and building a progressive nation based on knowledge, innovation, and strong ethics."
  },
  {
    id: "en-27",
    title: "Science & Technology Literature",
    marathiTitle: "विज्ञान व तंत्रज्ञान परिच्छेद",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 45,
    minAccuracy: 96,
    description: "Complex vocabulary and flow.",
    keysTaught: ["exam-flow"],
    text: "Artificial intelligence models analyze vast amounts of data to assist professionals in making informed decisions with remarkable speed and accuracy."
  },
  {
    id: "en-28",
    title: "High Speed Burst 50 WPM",
    marathiTitle: "उच्च गती स्प्रिंट ५० श.प्र.मि.",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 50,
    minAccuracy: 97,
    description: "Pushing limits towards 50 WPM.",
    keysTaught: ["exam-flow"],
    text: "Developing sharp focus and maintaining a relaxed posture are essential techniques for reaching high typing speeds without fatigue."
  },
  {
    id: "en-29",
    title: "Professional 60 WPM Master Sprint",
    marathiTitle: "मास्टर स्प्रिंट ६० श.प्र.मि.",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 60,
    minAccuracy: 98,
    description: "Elite level speed challenge.",
    keysTaught: ["exam-flow"],
    text: "Mastering the keyboard allows you to translate thoughts into text at the speed of thought, boosting career opportunities and digital productivity."
  },
  {
    id: "en-30",
    title: "Grand English Typing Certification",
    marathiTitle: "अंतिम इंग्रजी पदविका परीक्षा",
    tier: 4,
    tierName: "Tier 4: Exam & Speed",
    targetWpm: 40,
    minAccuracy: 98,
    description: "Final comprehensive speed and accuracy certificate exam.",
    keysTaught: ["all-master"],
    text: "Congratulations on reaching the final milestone of the typing curriculum. Complete this evaluation with excellence to earn your master credential."
  }
];

// // Backward compatibility साठी LESSONS_DATA एक्सपोर्ट
// export const LESSONS_DATA = {
//   marathi: marathiLessons,
//   english: englishLessons,
// };

export interface LessonStep {
  id: string;
  title: string;
  targetText: string;
  keysTaught: string[];
}

export const LESSONS_DATA = [
  ...marathiLessons.map((l) => ({
    ...l,
    language: "marathi" as const,
    tier:
      l.tier === 1
        ? "beginner"
        : l.tier === 2
        ? "common_words"
        : l.tier === 3
        ? "intermediate"
        : "advanced",
    steps: [
      {
        id: `${l.id}-step-1`,
        title: l.title,
        targetText: l.text,
        keysTaught: l.keysTaught,
      },
    ],
  })),
  ...englishLessons.map((l) => ({
    ...l,
    language: "english" as const,
    tier:
      l.tier === 1
        ? "beginner"
        : l.tier === 2
        ? "common_words"
        : l.tier === 3
        ? "intermediate"
        : "advanced",
    steps: [
      {
        id: `${l.id}-step-1`,
        title: l.title,
        targetText: l.text,
        keysTaught: l.keysTaught,
      },
    ],
  })),
];