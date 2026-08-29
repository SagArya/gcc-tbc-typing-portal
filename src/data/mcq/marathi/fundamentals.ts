// src/data/mcq/marathi/fundamentals.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const COMPUTER_FUNDAMENTALS_MARATHI_MCQ: MCQQuestion[] = [
  // --- भाग १: हार्डवेअर, सीपीयू आणि मेमरी युनिट्स (१ ते २५) ---
  {
    id: 1,
    question: "कॉम्प्युटरचा मेंदू (Brain of Computer) म्हणून कोणाला ओळखले जाते?",
    options: ["मॉनिटर (Monitor)", "सेंट्रल प्रोसेसिंग युनिट (CPU)", "हार्ड डिस्क (Hard Disk)", "रॅम (RAM)"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 2,
    question: "CPU मधील कोणता घटक सर्व गणितीय क्रिया आणि तार्किक तुलना (Logical Comparisons) करतो?",
    options: ["कंट्रोल युनिट (CU)", "अरिथमेटिक लॉजिक युनिट (ALU)", "मेमरी युनिट (MU)", "कॅश (Cache)"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 3,
    question: "कॉम्प्युटरच्या सर्व भागांच्या कार्याचे नियंत्रण आणि समन्वय ठेवणारा CPU मधील भाग कोणता?",
    options: ["कंट्रोल युनिट (CU)", "अरिथमेटिक लॉजिक युनिट (ALU)", "रजिस्टर्स (Registers)", "रॉम (ROM)"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 4,
    question: "लाईट किंवा वीज बंद झाल्यावर ज्या मेमरीमधील सर्व डेटा नष्ट होतो (Volatile Memory) ती कोणती?",
    options: ["ROM", "हार्ड डिस्क (HDD)", "RAM (Random Access Memory)", "एसएसडी (SSD)"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 5,
    question: "कॉम्प्युटर सुरू करण्यासाठी लागणाऱ्या सूचना (BIOS / फर्मवेअर) कायमस्वरूपी साठवणारी मेमरी कोणती?",
    options: ["RAM", "ROM (Read Only Memory)", "कॅश मेमरी", "व्हर्च्युअल मेमरी"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 6,
    question: "१ बाइट (1 Byte) म्हणजे किती बिट्स (Bits)?",
    options: ["४ बिट्स", "८ बिट्स", "१६ बिट्स", "३२ बिट्स"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 7,
    question: "४ बिट्सच्या (4 Bits) समूहाला काय म्हणतात?",
    options: ["निबल (Nibble)", "बाइट (Byte)", "वर्ड (Word)", "ब्लॉक (Block)"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 8,
    question: "१ किलोबाइट (1 KB) म्हणजे किती बाइट्स?",
    options: ["१००० बाइट्स", "१०२४ बाइट्स", "१०४८ बाइट्स", "५१२ बाइट्स"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 9,
    question: "१ मेगाबाइट (1 MB) म्हणजे किती किलोबाइट्स (KB)?",
    options: ["१०२४ KB", "१००० KB", "१०२४ Bytes", "१०२४ GB"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 10,
    question: "१ गिगाबाइट (1 GB) म्हणजे किती मेगाबाइट्स (MB)?",
    options: ["१०२४ MB", "१००० MB", "१०२४ TB", "१०२४ KB"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 11,
    question: "१ टेराबाइट (1 TB) म्हणजे किती गिगाबाइट्स (GB)?",
    options: ["१०२४ GB", "१००० GB", "१०२४ MB", "१०२४ PB"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 12,
    question: "CPU च्या सर्वात जवळ असणारी आणि सर्वात वेगवान मेमरी कोणती आहे?",
    options: ["दुय्यम मेमरी (Secondary Storage)", "कॅश मेमरी आणि रजिस्टर्स", "ऑप्टिकल डिस्क", "रॅम (RAM)"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 13,
    question: "खालीलपैकी कोणते केवळ इनपुट डिव्हाइस (Input Device) आहे?",
    options: ["मॉनिटर", "प्लॉटर", "स्कॅनर (Scanner)", "स्पीकर"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 14,
    question: "उत्पादनांवरील छापील बारकोड वाचण्यासाठी कोणत्या उपकरणाचा वापर केला जातो?",
    options: ["OMR", "OCR", "बारकोड रीडर (Barcode Reader)", "MICR"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 15,
    question: "बँकेमध्ये धनादेशांवरील (Cheques) चुंबकीय शाईचा कोड वाचण्यासाठी कोणते तंत्रज्ञान वापरले जाते?",
    options: ["MICR (Magnetic Ink Character Recognition)", "OCR", "OMR", "बारकोड"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 16,
    question: "स्पर्धा परीक्षांच्या वस्तुनिष्ठ उत्तरपत्रिका तपासण्यासाठी कोणते उपकरण वापरले जाते?",
    options: ["OMR (Optical Mark Reader)", "OCR", "MICR", "डिजिटायझर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 17,
    question: "छापील किंवा हस्तलिखित कागदपत्रांचे संपादनक्षम (Editable) मजकुरात रूपांतर करणारे तंत्रज्ञान कोणते?",
    options: ["OCR (Optical Character Recognition)", "OMR", "MICR", "प्लॉटर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 18,
    question: "इंजिनिअरिंग नकाशे, डिझाईन्स आणि मोठे फ्लेक्स प्रिंट करण्यासाठी कोणते आउटपुट डिव्हाइस वापरतात?",
    options: ["डॉट मॅट्रिक्स प्रिंटर", "लेझर प्रिंटर", "प्लॉटर (Plotter)", "इंकजेट प्रिंटर"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 19,
    question: "रिबनवर आघात करून (Impact Printer) अक्षरे छापणारा प्रिंटर कोणता?",
    options: ["लेझर प्रिंटर", "डॉट मॅट्रिक्स प्रिंटर (Dot Matrix Printer)", "इंकजेट प्रिंटर", "थर्मल प्रिंटर"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 20,
    question: "प्रिंटरच्या छपाईचा दर्जा आणि रिझोल्यूशन (Resolution) कशामध्ये मोजले जाते?",
    options: ["PPM", "DPI (Dots Per Inch)", "CPS", "LPM"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 21,
    question: "प्रिंटरचा छपाईचा वेग (Print Speed) कशामध्ये मोजला जातो?",
    options: ["DPI", "PPM (Pages Per Minute)", "BPS", "RPM"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 22,
    question: "एका सामान्य कॉम्पॅक्ट डिस्कची (CD-ROM) साठवणूक क्षमता किती असते?",
    options: ["१.४४ MB", "७०० MB", "४.७ GB", "२५ GB"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 23,
    question: "एका सामान्य डिजिटल व्हर्साटाईल डिस्कची (DVD) साठवणूक क्षमता किती असते?",
    options: ["७०० MB", "४.७ GB", "८.५ GB", "२५ GB"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 24,
    question: "एका सिंगल लेयर ब्ल्यू-रे डिस्कची (Blu-ray Disc) साठवणूक क्षमता किती असते?",
    options: ["४.७ GB", "८.५ GB", "२५ GB", "५० GB"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 25,
    question: "जुना ३.५ इंची फ्लॉपी डिस्कची (Floppy Disk) क्षमता किती असायची?",
    options: ["१.४४ MB", "७२० KB", "२.८८ MB", "१० MB"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },

  // --- भाग २: कॉम्प्युटर पिढ्या, सॉफ्टवेअर आणि सिस्टीम बेसिक्स (२६ ते ५०) ---
  {
    id: 26,
    question: "पहिल्या पिढीतील (First Generation) संगणकांमध्ये कोणत्या मुख्य इलेक्ट्रॉनिक घटकाचा वापर केला गेला?",
    options: ["ट्रान्झिस्टर्स", "व्हॅक्यूम ट्यूब्स (Vacuum Tubes)", "इंटिग्रेटेड सर्किट्स (ICs)", "मायक्रोप्रोसेसर"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 27,
    question: "दुसऱ्या पिढीतील (Second Generation) संगणकांमध्ये व्हॅक्यूम ट्यूब्सऐवजी काय वापरले गेले?",
    options: ["ट्रान्झिस्टर्स (Transistors)", "इंटिग्रेटेड सर्किट्स", "मायक्रोप्रोसेसर", "VLSI"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 28,
    question: "तिसऱ्या पिढीतील (Third Generation) संगणकांमध्ये कोणत्या तंत्रज्ञानाचा वापर सुरू झाला?",
    options: ["व्हॅक्यूम ट्यूब्स", "इंटिग्रेटेड सर्किट्स (ICs - Integrated Circuits)", "ट्रान्झिस्टर्स", "आर्टिफिशिअल इंटेलिजन्स"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 29,
    question: "चौथ्या पिढीतील संगणकांमध्ये कोणत्या मुख्य घटकाचा शोध लागून क्रांती झाली?",
    options: ["मायक्रोप्रोसेसर (Microprocessor - VLSI/ULSI)", "व्हॅक्यूम ट्यूब्स", "ट्रान्झिस्टर्स", "मॅग्नेटिक ड्रम्स"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 30,
    question: "पाचव्या पिढीतील संगणक मुख्यत्वे कोणत्या प्रगत तंत्रज्ञानावर आधारित आहेत?",
    options: ["कृत्रिम बुद्धिमत्ता (AI) आणि क्वांटम कॉम्प्युटिंग", "व्हॅक्यूम ट्यूब्स", "यांत्रिक स्विचेस", "ट्रान्झिस्टर्स"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 31,
    question: "संगणकाचे जनक (Father of Computer) म्हणून कोणाला ओळखले जाते?",
    options: ["ॲलन ट्युरिंग", "चार्ल्स बॅबेज (Charles Babbage)", "जॉन व्हॉन न्यूमन", "ब्लेज पास्कल"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 32,
    question: "जगातील पहिल्या महिला कॉम्प्युटर प्रोग्रॅमर म्हणून कोणाला ओळखले जाते?",
    options: ["लेडी एडा लव्हलेस (Ada Lovelace)", "ग्रेस हॉपर", "मॅरी क्युरी", "ॲनी बेझंट"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 33,
    question: "कॉम्प्युटर सुरू होताना रॉममधील कोणता मूलभूत प्रोग्रॅम सर्वात आधी कार्यरत होतो?",
    options: ["BIOS (Basic Input/Output System)", "कंपायलर", "डिव्हाइस ड्रायव्हर", "इंटरप्रिटर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 34,
    question: "संगणक सुरू होताना हार्डवेअर सुरक्षिततेची तपासणी करणाऱ्या चाचणीला काय म्हणतात?",
    options: ["POST (Power-On Self-Test)", "बूटस्ट्रॅपिंग", "स्कॅनडिस्क", "सॉफ्ट बूट"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 35,
    question: "सुरू असलेला कॉम्प्युटर पुन्हा सुरू करण्याच्या प्रक्रियेला (Restart) काय म्हणतात?",
    options: ["कोल्ड बूटिंग", "वॉर्म बूटिंग (Warm Booting)", "हार्ड बूटिंग", "पोस्ट"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 36,
    question: "पूर्णपणे बंद असलेला संगणक पहिल्यांदा बटण दाबून सुरू करण्याला काय म्हणतात?",
    options: ["वॉर्म बूटिंग", "कोल्ड बूटिंग (Cold Booting)", "रीबूटिंग", "स्लीप मोड"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 37,
    question: "खालीलपैकी कोणते सिस्टीम सॉफ्टवेअर (System Software) आहे?",
    options: ["MS Word", "ऑपरेटिंग सिस्टीम (Windows, Linux)", "फोटोशॉप", "गुगल क्रोम"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 38,
    question: "संपूर्ण हाय-लेव्हल प्रोग्रॅमचे एकाच वेळी मशीन भाषेत रूपांतर करणाऱ्या सॉफ्टवेअरला काय म्हणतात?",
    options: ["कंपायलर (Compiler)", "इंटरप्रिटर (Interpreter)", "असेम्बलर", "लिंकर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 39,
    question: "प्रोग्रॅममधील कोडिंगचे ओळीनुसार (Line by Line) भाषांतर करणाऱ्या सॉफ्टवेअरला काय म्हणतात?",
    options: ["इंटरप्रिटर (Interpreter)", "कंपायलर", "लोडर", "असेम्बलर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 40,
    question: "असेम्बली भाषेतील सांकेतिक शब्दांचे मशीन भाषेत रूपांतर कोण करते?",
    options: ["असेम्बलर (Assembler)", "कंपायलर", "इंटरप्रिटर", "डीबगर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 41,
    question: "वापरकर्त्याच्या विशिष्ट कामांसाठी तयार केलेल्या सॉफ्टवेअरला (उदा. वर्ड, एक्सेल) काय म्हणतात?",
    options: ["सिस्टीम सॉफ्टवेअर", "ॲप्लिकेशन सॉफ्टवेअर (Application Software)", "फर्मवेअर", "डिव्हाइस ड्रायव्हर"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 42,
    question: "अँटीव्हायरस, डिस्क क्लीनअप आणि बॅकअप टूल्स हे कोणत्या सॉफ्टवेअर प्रकारात मोडतात?",
    options: ["युटिलिटी सॉफ्टवेअर (Utility Software)", "ऑपरेटिंग सिस्टीम", "ॲप्लिकेशन सूट", "फर्मवेअर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 43,
    question: "ज्याचा सोर्स कोड सर्वांसाठी विनामूल्य पाहण्यासाठी आणि सुधारण्यासाठी उपलब्ध असतो त्या सॉफ्टवेअरला काय म्हणतात?",
    options: ["ओपन सोर्स सॉफ्टवेअर (उदा. Linux)", "प्रोपायटरी सॉफ्टवेअर", "फ्रीवेअर", "शेअरवेअर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 44,
    question: "काही काळासाठी चाचणी म्हणून मोफत मिळणाऱ्या व नंतर विकत घ्याव्या लागणाऱ्या सॉफ्टवेअरला काय म्हणतात?",
    options: ["शेअरवेअर (Shareware)", "फ्रीवेअर", "ओपन सोर्स", "पब्लिक डोमेन"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 45,
    question: "GUI चे पूर्ण रूप काय आहे?",
    options: ["Graphical User Interface", "Global User Interaction", "General Utility Interface", "Graphic Universal Index"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 46,
    question: "CLI चे पूर्ण रूप काय आहे?",
    options: ["Command Line Interface", "Common Language Interaction", "Central Logic Interface", "Computer Layout Index"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 47,
    question: "इंग्रजी अक्षरे आणि अंकांचे बायनरी कोडिंग करण्यासाठी वापरला जाणारा ७-बिट स्टँडर्ड कोड कोणता?",
    options: ["ASCII (American Standard Code for Information Interchange)", "युनिकोड", "EBCDIC", "BCD"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 48,
    question: "जगातील सर्व भाषांचे फॉन्ट आणि चिन्हे अचूक दाखवणारा आंतरराष्ट्रीय कोडिंग स्टँडर्ड कोणता?",
    options: ["युनिकोड (Unicode - UTF-8 / UTF-16)", "ASCII", "ANSI", "EBCDIC"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 49,
    question: "बायनरी (Binary) संख्या पद्धतीचा पाया (Base) किती असतो?",
    options: ["२ (फक्त 0 आणि 1 अंक)", "८", "१०", "१६"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 50,
    question: "हेक्झाडेसिमल (Hexadecimal) संख्या पद्धतीचा पाया किती असतो?",
    options: ["१६ (0 ते 9 अंक आणि A ते F अक्षरे)", "८", "१०", "२"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },

  // --- भाग ३: विंडोज ऑपरेटिंग सिस्टीम बेसिक्स आणि शॉर्टकट्स (५१ ते ७५) ---
  {
    id: 51,
    question: "Windows सुरू झाल्यावर स्क्रीनवर दिसणाऱ्या मुख्य पार्श्वभूमीला काय म्हणतात?",
    options: ["डेस्कटॉप (Desktop)", "टास्कबार", "कंट्रोल पॅनेल", "फाईल एक्सप्लोरर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 52,
    question: "डेस्कटॉपच्या सर्वात तळाशी असणाऱ्या आडव्या पट्टीला काय म्हणतात?",
    options: ["टास्कबार (Taskbar)", "टायटल बार", "मेन्यू बार", "स्टेटस बार"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 53,
    question: "टास्कबारच्या उजव्या कोपऱ्यात घड्याळ, आवाज व नोटिफिकेशन्स दर्शवणाऱ्या भागाला काय म्हणतात?",
    options: ["सिस्टीम ट्रे (System Tray / Notification Area)", "क्विक लाँच", "स्टार्ट मेन्यू", "पिन केलेले ॲप्स"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 54,
    question: "डिलीट केलेल्या फाईल्स व फोल्डर्स तात्पुरत्या स्वरूपात कुठे साठवले जातात?",
    options: ["रिसायकल बिन (Recycle Bin)", "स्पॅम फोल्डर", "टेम्प स्टोरेज", "ट्रॅश मास्टर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 55,
    question: "फाईल रिसायकल बिनमध्ये न पाठवता कायमस्वरूपी डिलीट करण्याची शॉर्टकट की कोणती?",
    options: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 56,
    question: "Windows Start मेन्यू उघडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Windows Key (किंवा Ctrl + Esc)", "Alt + Esc", "Ctrl + Tab", "Shift + Esc"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 57,
    question: "Windows मध्ये File Explorer उघडण्यासाठी कोणती शॉर्टकट की वापरली जाते?",
    options: ["Windows Key + E", "Windows Key + F", "Ctrl + E", "Alt + E"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 58,
    question: "'Run' चा डायलॉग बॉक्स उघडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Windows Key + R", "Ctrl + R", "Alt + R", "Windows Key + X"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 59,
    question: "Windows कॉम्प्युटर त्वरित लॉक (Lock Screen) करण्यासाठी कोणती शॉर्टकट की आहे?",
    options: ["Windows Key + L", "Ctrl + L", "Alt + L", "Windows Key + K"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 60,
    question: "सर्व उघड्या विंडोज एकाच वेळी मिनिमाईज करून डेस्कटॉप पाहण्यासाठी कोणती की वापरतात?",
    options: ["Windows Key + D (किंवा Win + M)", "Ctrl + D", "Alt + D", "Shift + D"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 61,
    question: "उघड्या असलेल्या ॲप्लिकेशन्समध्ये अदलाबदल (Switch between apps) करण्यासाठी काय वापरतात?",
    options: ["Alt + Tab", "Ctrl + Tab", "Windows Key + Tab", "A आणि C दोन्ही"],
    correctAnswer: 3,
    category: "Computer Fundamentals"
  },
  {
    id: 62,
    question: "Windows 10/11 मध्ये Task View (व्हर्च्युअल डेस्कटॉप) उघडण्यासाठी कोणती की वापरतात?",
    options: ["Windows Key + Tab", "Alt + Tab", "Ctrl + Tab", "Windows Key + V"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 63,
    question: "Windows Task Manager थेट उघडण्याची शॉर्टकट की कोणती?",
    options: ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Windows Key + X", "Alt + F4"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 64,
    question: "सध्या चालू असलेले ॲप्लिकेशन विंडो बंद करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Alt + F4", "Ctrl + F4", "Ctrl + W", "Alt + W"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 65,
    question: "Windows Settings ॲप उघडण्यासाठी कोणती शॉर्टकट की वापरली जाते?",
    options: ["Windows Key + I", "Windows Key + S", "Ctrl + I", "Alt + I"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 66,
    question: "Windows मध्ये शोध घेण्यासाठी (Search) कोणती शॉर्टकट की वापरतात?",
    options: ["Windows Key + S", "Windows Key + Q", "A आणि B दोन्ही", "Ctrl + F"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 67,
    question: "Windows 10/11 मध्ये Clipboard History (मागील कॉपी केलेला डेटा) पाहण्यासाठी कोणती की वापरतात?",
    options: ["Windows Key + V", "Ctrl + V", "Alt + V", "Shift + V"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 68,
    question: "स्क्रीनचा हवा तेवढा भाग क्रॉप करून स्क्रीनशॉट काढण्यासाठी कोणती की वापरतात?",
    options: ["Windows Key + Shift + S (Snipping Tool)", "PrtScn", "Alt + PrtScn", "Ctrl + Shift + S"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 69,
    question: "फक्त सध्या ॲक्टिव्ह असणाऱ्या विंडोचा स्क्रीनशॉट क्लिपबोर्डवर घेण्यासाठी कोणती की दाबतात?",
    options: ["Alt + Print Screen", "Print Screen", "Windows Key + Print Screen", "Ctrl + Print Screen"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 70,
    question: "संपूर्ण स्क्रीनचा फोटो काढून आपोआप Pictures फोल्डरमध्ये सेव्ह करण्यासाठी काय दाबतात?",
    options: ["Windows Key + Print Screen", "Print Screen", "Alt + Print Screen", "Ctrl + Shift + S"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 71,
    question: "निवडलेल्या फाईल किंवा फोल्डरचे नाव बदलण्यासाठी (Rename) कोणती की वापरतात?",
    options: ["F2", "F3", "F4", "F6"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 72,
    question: "नवीन फोल्डर तयार करण्यासाठी (New Folder) कोणती शॉर्टकट की वापरली जाते?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Alt + Shift + N", "F10"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 73,
    question: "निवडलेल्या फाईल किंवा फोल्डरचा Properties डायलॉग बॉक्स उघडण्यासाठी कोणती की वापरतात?",
    options: ["Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Alt + P"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 74,
    question: "डेस्कटॉप किंवा फाईल एक्सप्लोरर रिफ्रेश (Refresh) करण्यासाठी कोणती की वापरतात?",
    options: ["F5", "F2", "F7", "F9"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 75,
    question: "कॉम्प्युटरमधील सर्व हार्डवेअर, ॲप्स अनइन्स्टॉल आणि सेटिंग्ज व्यवस्थापित करण्याचे मुख्य केंद्र कोणते?",
    options: ["कंट्रोल पॅनेल (Control Panel)", "टास्क मॅनेजर", "फाईल एक्सप्लोरर", "डिव्हाइस मॅनेजर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },

  // --- भाग ४: फाईल सिस्टीम्स, युटिलिटीज आणि सिक्युरिटी (७६ ते १००) ---
  {
    id: 76,
    question: "कॉम्प्युटरला जोडलेले सर्व हार्डवेअर डिव्हाइसेस आणि त्यांचे ड्रायव्हर्स तपासण्यासाठी काय वापरतात?",
    options: ["डिव्हाइस मॅनेजर (Device Manager)", "टास्क मॅनेजर", "डिस्क मॅनेजमेंट", "इव्हेंट व्ह्यूअर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 77,
    question: "सध्या सुरू असलेले प्रोग्रॅम्स, सीपीयू व रॅमचा वापर दर्शवणारे Windows टूल कोणते?",
    options: ["टास्क मॅनेजर (Task Manager)", "कंट्रोल पॅनेल", "रिसोर्स मॉनिटर", "डिव्हाइस मॅनेजर"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 78,
    question: "हार्ड डिस्कचे पार्टिशन्स मॅनेज करण्यासाठी Run बॉक्समध्ये कोणती कमांड टाईप करतात?",
    options: ["diskmgmt.msc", "devmgmt.msc", "taskmgr", "regedit"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 79,
    question: "Windows Registry Editor उघडण्यासाठी Run बॉक्समध्ये कोणती कमांड टाईप करतात?",
    options: ["regedit", "registry", "regconfig", "mscedit"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 80,
    question: "कॉम्प्युटरची संपूर्ण हार्डवेअर व सॉफ्टवेअर माहिती (System Info) पाहण्याची कमांड कोणती?",
    options: ["msinfo32", "sysinfo", "wininfo", "dxdiag"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 81,
    question: "Windows मध्ये हार्ड डिस्क आणि SSD साठी वापरली जाणारी मुख्य आधुनिक फाईल सिस्टीम कोणती?",
    options: ["NTFS (New Technology File System)", "FAT32", "exFAT", "ext4"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 82,
    question: "जुन्या FAT32 फाईल सिस्टीममध्ये एका फाईलची कमाल साईझ मर्यादा किती असते?",
    options: ["२ GB", "४ GB", "८ GB", "१६ GB"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 83,
    question: "पेनड्राइव्ह आणि मेमरी कार्ड्ससाठी ४ जीबी मर्यादेशिवाय वापरली जाणारी फाईल सिस्टीम कोणती?",
    options: ["exFAT", "FAT16", "FAT32", "NTFS"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 84,
    question: "Windows मध्ये फाईल किंवा फोल्डरच्या नावात खालीलपैकी कोणती चिन्हे वापरण्यास पूर्ण बंदी असते?",
    options: ["/ \\ : * ? \" < > |", "@ $ %", "! # &", "( ) [ ]"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 85,
    question: "अनावश्यक तात्पुरत्या (Temp) फाईल्स डिलीट करून हार्ड डिस्कची जागा मोकळी करणारे टूल कोणते?",
    options: ["Disk Cleanup", "Disk Defragmenter", "ScanDisk", "System Restore"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 86,
    question: "हार्ड डिस्कवरील विखुरलेला डेटा एकत्र करून कॉम्प्युटरचा वेग वाढवणाऱ्या टूलला काय म्हणतात?",
    options: ["Defragment and Optimize Drives", "Disk Cleanup", "Check Disk", "Format Utility"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 87,
    question: "सिस्टीममध्ये बिघाड झाल्यास कॉम्प्युटरला मागील सुरक्षित स्थितीवर नेण्यासाठी काय वापरतात?",
    options: ["System Restore Point", "Backup and Restore", "File History", "Reset This PC"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 88,
    question: "Windows 10/11 मधील अंगभूत (In-built) मोफत अँटीव्हायरस सॉफ्टवेअर कोणते आहे?",
    options: ["Microsoft Defender Antivirus (Windows Security)", "Windows Firewall", "BitLocker", "Security Center"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 89,
    question: "अनाधिकृत नेटवर्क ट्रॅफिक आणि हॅकर्सपासून कॉम्प्युटरचे संरक्षण करणारी डिजिटल सुरक्षा भिंत कोणती?",
    options: ["Windows Firewall", "Device Guard", "Credential Manager", "BitLocker"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 90,
    question: "लॅपटॉप चोरीला गेल्यास त्यातील हार्ड डिस्कचा डेटा एनक्रिप्ट करून सुरक्षित ठेवणारे Windows फिचर कोणते?",
    options: ["BitLocker Drive Encryption", "File Lock", "Secure Boot", "EFS"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 91,
    question: "कॉम्प्युटरमधील गंभीर त्रुटी शोधण्यासाठी केवळ अत्यावश्यक ड्रायव्हर्ससह सुरू होणाऱ्या मोडला काय म्हणतात?",
    options: ["Safe Mode", "Debugging Mode", "Clean Boot", "Recovery Mode"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 92,
    question: "Windows ऑपरेटिंग सिस्टीममधील मुख्य सॉफ्टवेअर इन्स्टॉलेशन / एक्झिक्युटेबल फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".exe", ".bat", ".com", ".msi"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 93,
    question: "Notepad मध्ये तयार केलेल्या साध्या टेक्स्ट फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".txt", ".rtf", ".doc", ".pdf"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 94,
    question: "कंप्रेस (आकार कमी केलेल्या) केलेल्या झिप फोल्डरचे डिफॉल्ट एक्स्टेंशन कोणते असते?",
    options: [".zip", ".rar", ".7z", ".tar"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 95,
    question: "Windows बॅच कमांड स्क्रिप्ट फाईलचे एक्स्टेंशन कोणते असते?",
    options: [".bat", ".sh", ".cmd", ".ps1"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 96,
    question: "चालू विंडो स्क्रीनच्या डाव्या अर्ध्या भागावर लावण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Windows Key + Left Arrow", "Ctrl + Left Arrow", "Alt + Left Arrow", "Shift + Left Arrow"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 97,
    question: "चालू विंडो स्क्रीनच्या उजव्या अर्ध्या भागावर लावण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Windows Key + Right Arrow", "Ctrl + Right Arrow", "Alt + Right Arrow", "Shift + Right Arrow"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 98,
    question: "चालू विंडो संपूर्ण स्क्रीनभर मोठी (Maximize) करण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Windows Key + Up Arrow", "Ctrl + Up Arrow", "Alt + Up Arrow", "F11"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 99,
    question: "Windows मधील पॉवर युझर मेन्यू (Quick Link Menu) उघडण्याची शॉर्टकट की कोणती?",
    options: ["Windows Key + X", "Windows Key + P", "Ctrl + Shift + Esc", "Alt + X"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 100,
    question: "प्रोजेक्टर किंवा ड्युअल स्क्रीन डिस्प्ले मेन्यू उघडण्यासाठी कोणती शॉर्टकट की वापरतात?",
    options: ["Windows Key + P", "Windows Key + D", "Alt + P", "Ctrl + P"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  }
];