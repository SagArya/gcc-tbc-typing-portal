// src/data/commonWords.ts

export interface WordCategory {
  id: string;
  title: string;
  language: "marathi" | "english";
  description: string;
  words: string[];
}

export const COMMON_WORDS_DATA: WordCategory[] = [
  // ----------------------------------------
  // 🇮🇳 १. मराठी शब्दसंग्रह (Marathi Categories)
  // ----------------------------------------
  {
    id: "marathi-high-frequency",
    title: "मराठी सामान्य शब्द (High Frequency)",
    language: "marathi",
    description: "दैनंदिन वापरातील सर्वाधिक येणारे १००+ मूलभूत मराठी शब्द",
    words: [
      "आहे", "होती", "करतो", "आहेस", "आम्ही", "तुम्ही", "आहेत", "जातो", "होते", "केले",
      "करत", "जाणे", "दिले", "होतेस", "नाही", "का", "काही", "हवे", "कुठे", "आता",
      "तिथे", "येथे", "चालते", "काम", "परत", "तुमचे", "माझे", "त्याचे", "तिचे", "रोज",
      "सकाळी", "संध्याकाळी", "कधी", "आज", "उद्या", "काल", "पुढे", "मागे", "खूप", "थोडे",
      "भरपूर", "मोठे", "लहान", "नवीन", "जुने", "जवळ", "दूर", "उजवीकडे", "डावीकडे", "वर",
      "खाली", "समोर", "बाजार", "शाळा", "घरी", "बाहेर", "आत", "गाव", "शहर", "बस",
      "गाडी", "रस्ता", "पाणी", "अन्न", "खाणे", "प्यायचे", "भूक", "तहान", "साखर", "चहा",
      "दूध", "भात", "पोळी", "भाजी", "शेजारी", "मित्र", "शिक्षक", "विद्यार्थी", "आई", "वडील",
      "भाऊ", "बहीण", "आजी", "आजोबा", "रात्र", "दिवस", "आठवडा", "महिना", "वर्ष", "वेळ",
      "घड्याळ", "तास", "मिनिट", "सेकंद", "पुस्तक", "वही", "पेन", "पेन्सिल"
    ]
  },
  {
    id: "marathi-govt-office",
    title: "शासकीय व कार्यालयीन शब्द (Govt / Office)",
    language: "marathi",
    description: "GCC-TBC व शासकीय कामकाजात वारंवार वापरले जाणारे अधिकृत शब्द",
    words: [
      "शासन", "कार्यालय", "अर्ज", "मंजुरी", "आदेश", "प्रमाणपत्र", "तपशील", "नोंदणी", "नाव", "पत्ता",
      "ओळखपत्र", "कागदपत्र", "परवाना", "दिनांक", "सही", "ठिकाण", "वेळ", "स्वाक्षरी", "फॉर्म", "हजेरी",
      "अनुपस्थित", "उपस्थित", "सुटी", "मंजूर", "दस्तऐवज", "कार्यवाही", "माहिती", "यादी", "विभाग", "प्रमुख",
      "अधिकृत", "अधिकारी", "कर्मचारी", "सेवा", "निवृत्ती", "वेतन", "पगार", "वाढ", "कपात", "अहवाल",
      "निवेदन", "अर्जदार", "प्राप्त", "पाठविले", "तक्रार", "समाधान", "शिफारस", "पावती", "दस्त", "फाईल",
      "सूची", "नोंद", "जमा", "खर्च", "ताळेबंद", "अर्थसंकल्प", "हिशोब", "बँक", "चलन", "आयकर",
      "परतावा", "शासकीय", "खाजगी", "ठराव", "नियम", "परिपत्रक", "बैठक", "कार्यप्रणाली", "योजना", "धोरण",
      "विकास", "लाभार्थी", "लाभ", "नुकसान", "प्रकल्प", "कालावधी", "सेवा काल", "कर्मचारी क्रमांक", "विभाग प्रमुख", "विभागीय कार्यालय",
      "कार्यालयीन कामकाज", "संच", "अर्ज पत्र", "संदर्भ", "वैयक्तिक माहिती", "परवानगी", "तात्पुरती", "कायमस्वरूपी", "सेवा पुस्तिका", "रजा अर्ज",
      "पगार पत्रक", "अनुदान", "खर्च मंजुरी", "आदेश पत्रक", "वेळापत्रक", "निर्णय", "अहवाल लेखन", "वर्गवारी"
    ]
  },
  {
    id: "marathi-numbers-mixed",
    title: "संख्यात्मक व मिश्र शब्द (Numbers + Text)",
    language: "marathi",
    description: "मराठी आकडे, तारीख, वेळ, क्रमांक आणि शासकीय नोंदींचा सराव",
    words: [
      "१ विद्यार्थी", "२ शिक्षक", "३ कार्यालये", "४ अर्जदार", "५ दिवस", "६ महिन्यांचा अहवाल", "७ क्रमांकाचा फॉर्म", "८ वाजता सभा", "९ पानांचा दस्त", "१० शासकीय योजना",
      "११ नोंदणी क्रमांक", "१२ फायली", "१३ परवाने", "१४ दिवसांची सुटी", "१५ रुपयांचे शुल्क", "१६ अर्ज मंजूर", "१७ तासांचे प्रशिक्षण", "१८ पानांचा अभ्यास", "१९ अधिकारी अनुपस्थित", "२० योजना लागू",
      "२१ कार्यालयीन भेट", "२२ सुटीचे अर्ज", "२३ लाभार्थ्यांची यादी", "२४ तासांची सेवा", "२५ नंबरचा अर्ज", "२६ विभागीय बैठक", "२७ वेळापत्रक", "२८ अहवाल", "२९ दिवसांचा कालावधी", "३० हजार रुपयांचे अनुदान",
      "३१ मार्चची तारीख", "४० नवीन कागदपत्रे", "५० शासकीय कर्मचारी", "६० अर्ज तपासले", "७० योजना तयार", "८० परवाने वाटप", "९० लाभार्थी उपस्थित", "१०० अर्ज मंजूर", "क्रमांक १०१", "क्रमांक १०२",
      "क्रमांक १०३", "क्रमांक १०४", "क्रमांक १०५", "क्रमांक १०६", "क्रमांक १०७", "क्रमांक १०८", "क्रमांक ११०", "२०२४ ची योजना", "२०२५ ची माहिती", "१९५० पासून कार्यरत",
      "२००० नंतर बदल", "२०३० पर्यंत उद्दिष्ट", "१.०० तास", "२.३० वाजता", "३.४५ वाजता", "५.१५ ची सभा", "६.०० वाजता काम", "७.३० वाजता प्रस्थान", "८.०० ते ५.०० सेवा", "रु. १०० फीस",
      "रु. ५०० पगार", "रु. १००० अनुदान", "रु. २५० खर्च", "१ नंबरची फाईल", "२ नंबरचा अर्ज", "३ नंबरचा आदेश", "४ नंबरची नोंद", "५ नंबरचा तपास", "६ नंबरचा विभाग", "७ नंबरचा कर्मचारी"
    ]
  },
  {
    id: "marathi-practice-sentences",
    title: "मराठी सराव वाक्ये (Simple Practice Sentences)",
    language: "marathi",
    description: "पूर्ण विराम, जोडाक्षरे आणि वेलांटी-मात्रा यांचा अचूक सराव",
    words: [
      "माझे नाव राहुल आहे.", "मी शाळेत जातो.", "ती चांगली विद्यार्थिनी आहे.", "आपण वेळेवर पोहोचले पाहिजे.", "हे पुस्तक वाचा.",
      "आई स्वयंपाक करते.", "वडील ऑफिसला गेले.", "आम्ही बाजारात गेलो.", "उद्या सुट्टी आहे.", "तो अभ्यास करत आहे.",
      "पाऊस पडत आहे.", "मी भाजी आणली.", "मुलांनी खेळावे.", "तू नियमित शाळेत जा.", "हे पत्र वाचा आणि उत्तर द्या.",
      "अभ्यास मन लावून करा.", "संगणक वापरणे शिका.", "ऑफिसमध्ये शांतता ठेवा.", "मी वेळेवर आलो.", "त्याने मदत केली.",
      "ही नोंद लिहा.", "आमचा देश महान आहे.", "सर्व विद्यार्थ्यांनी उपस्थित राहावे.", "शाळेचे नियम पाळा.", "हे प्रकल्प पूर्ण करा.",
      "तो शिक्षक वर्गात आहे.", "खूप छान काम केलेस.", "वेळेचे नियोजन करा.", "आपले ध्येय ठरवा.", "अन्न व्यवस्थित खा.",
      "उद्या महत्त्वाचा दिवस आहे.", "त्यांनी मला बोलावले.", "हा संगणक नवा आहे.", "इंटरनेट चालू करा.", "प्रिंटर जोडलेला आहे.",
      "कृपया शांत राहा.", "मी तुमच्याशी सहमत आहे.", "आज मी सुट्टीवर आहे.", "त्या प्रकल्पाची तारीख उद्या आहे.", "संगणक कोर्स पूर्ण झाला."
    ]
  },

  // ----------------------------------------
  // 🇬🇧 २. इंग्रजी शब्दसंग्रह (English Categories)
  // ----------------------------------------
  {
    id: "english-high-frequency",
    title: "English High-Frequency Words",
    language: "english",
    description: "Top 100 most frequently used words in English typing exams",
    words: [
      "the", "of", "to", "and", "a", "in", "is", "it", "you", "that",
      "he", "was", "for", "on", "are", "with", "as", "his", "they", "be",
      "at", "one", "have", "this", "from", "or", "had", "by", "not", "but",
      "what", "all", "were", "we", "can", "your", "said", "there", "use", "an",
      "each", "which", "she", "do", "how", "their", "if", "will", "up", "other",
      "about", "out", "many", "then", "them", "these", "so", "some", "her", "would",
      "make", "like", "him", "into", "time", "has", "look", "two", "more", "write",
      "go", "see", "number", "no", "way", "could", "people", "my", "than", "first",
      "water", "been", "call", "who", "oil", "now", "find", "long", "down", "day",
      "did", "get", "come", "made", "may", "part", "over", "new", "sound", "take"
    ]
  },
  {
    id: "english-misspelled",
    title: "Commonly Misspelled Words",
    language: "english",
    description: "Tricky spellings that often cause typing mistakes in exams",
    words: [
      "accommodate", "separate", "receive", "friend", "government", "definitely", "occurred", "until", "beginning", "environment",
      "believe", "calendar", "tomorrow", "grammar", "necessary", "privilege", "restaurant", "sincerely", "committee", "experience",
      "principal", "license", "surprise", "weird", "knowledge", "argument", "embarrassment", "February", "maintenance", "opportunity",
      "conscious", "mischievous", "noticeable", "occasionally", "occurrence", "perseverance", "preferred", "questionnaire", "recommend", "referred",
      "relevant", "rhythm", "schedule", "threshold", "twelfth", "withhold", "yacht", "apparent", "awkward", "cemetery"
    ]
  },
  {
    id: "english-govt-office",
    title: "Office & Administrative Words",
    language: "english",
    description: "Formal correspondence, office terms and official words",
    words: [
      "application", "document", "department", "signature", "subject", "reference", "appointment", "certificate", "official", "register",
      "approval", "confirmation", "office", "employee", "section", "request", "notice", "circular", "transfer", "division",
      "annual", "records", "position", "notification", "joining", "memo", "leave", "attendance", "resignation", "receipt",
      "service", "pension", "identity", "verification", "form", "statement", "policy", "committee", "scheme", "sanction",
      "recruitment", "examination", "promotion", "training", "rules", "regulation", "procedure", "report", "result", "employment"
    ]
  },
  {
    id: "english-uppercase",
    title: "Uppercase & Capital Words Practice",
    language: "english",
    description: "Shift-key training with full capital technical and office words",
    words: [
      "HELLO", "WORLD", "COMPUTER", "KEYBOARD", "MOUSE", "MONITOR", "PRINTER", "INTERNET", "SOFTWARE", "HARDWARE",
      "PROGRAM", "LANGUAGE", "DATABASE", "NETWORK", "SECURITY", "PASSWORD", "EMAIL", "SYSTEM", "FILE", "FOLDER",
      "WINDOW", "ICON", "DOWNLOAD", "UPLOAD", "SAVE", "OPEN", "CLOSE", "EDIT", "COPY", "PASTE",
      "DELETE", "SEARCH", "HELP", "SETTINGS", "ADMIN", "USER", "LOGIN", "LOGOUT", "ACCESS", "CONTROL",
      "DISPLAY", "BACKUP", "RESTORE", "UPDATE", "INSTALL", "UNINSTALL", "DEVICE", "DRIVER", "MEMORY", "PROCESSOR"
    ]
  },
  {
    id: "english-number-mixed",
    title: "Number + Text Mixed Practice",
    language: "english",
    description: "Numbers, percentages, time intervals and unit abbreviations",
    words: [
      "24/7", "100%", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th",
      "9th", "10th", "2023", "2024", "50%", "75%", "1st quarter", "2nd half", "3rd party", "4G",
      "5-star", "6-pack", "7-day", "8-bit", "9-to-5", "10x", "12th grade", "24 hours", "365 days", "500ml",
      "1kg", "2kg", "3kg", "4kg", "5kg", "10km", "20km", "30km", "40km", "50km",
      "1MB", "2GB", "3TB", "4K", "5G", "1-hour", "2-hour", "3-hour", "1-minute", "5-minute"
    ]
  }
];