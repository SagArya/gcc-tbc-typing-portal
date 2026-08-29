// src/data/mcq/marathi/internetEmail.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const INTERNET_EMAIL_MARATHI_MCQ: MCQQuestion[] = [
  // --- भाग १: इंटरनेट मूलभूत संकल्पना, नेटवर्किंग आणि प्रोटोकॉल्स (१ ते २५) ---
  {
    id: 1,
    question: "जगभरातील संगणक जाळ्यांच्या जागतिक महाजालाला काय म्हणतात?",
    options: ["इंटरनेट (Internet)", "इंट्रानेट", "एक्स्ट्रानेट", "लॅन (LAN)"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 2,
    question: "WWW चे पूर्ण रूप काय आहे?",
    options: ["World Wide Web", "World Wide Webpage", "World Wide Wire", "World Wireless Web"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 3,
    question: "वर्ल्ड वाइड वेब (WWW) चा शोध कोणी लावला?",
    options: ["टिम बर्नर्स-ली (Tim Berners-Lee)", "विंट सर्फ", "बिल गेट्स", "चार्ल्स बॅबेज"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 4,
    question: "इंटरनेटचे जनक (Father of Internet) म्हणून कोणाला ओळखले जाते?",
    options: ["विंट सर्फ (Vint Cerf)", "टिम बर्नर्स-ली", "रे टॉमलिन्सन", "ॲलन ट्युरिंग"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 5,
    question: "इंटरनेटची सुरुवात मानल्या गेलेल्या जगातील पहिल्या कॉम्प्युटर नेटवर्कचे नाव काय होते?",
    options: ["ARPANET", "NSFNET", "INTRANET", "ETHERNET"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 6,
    question: "URL चे पूर्ण रूप काय आहे?",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Link",
      "Uniform Resource Link",
      "Universal Registered Locator"
    ],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 7,
    question: "संगणक नेटवर्किंगमध्ये IP चे पूर्ण रूप काय आहे?",
    options: ["Internet Protocol", "Internal Protocol", "Internet Provider", "Interface Port"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 8,
    question: "IPv4 पत्त्याची (IP Address) साईझ किती बिट्स असते?",
    options: ["३२ बिट्स (4 Bytes)", "६४ बिट्स", "१२८ बिट्स", "१६ बिट्स"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 9,
    question: "IPv6 पत्त्याची साईझ किती बिट्स असते?",
    options: ["१२८ बिट्स (16 Bytes)", "३२ बिट्स", "६४ बिट्स", "२५६ बिट्स"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 10,
    question: "ISP चे पूर्ण रूप काय आहे?",
    options: ["Internet Service Provider", "Internet Server Protocol", "International Service Provider", "Internal System Provider"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 11,
    question: "वेबसाइट्सची वेबपेजेस ट्रान्सफर करण्यासाठी वापरला जाणारा मुख्य प्रोटोकॉल कोणता?",
    options: ["HTTP (Hypertext Transfer Protocol)", "FTP", "SMTP", "POP3"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 12,
    question: "HTTPS मधील 'S' या अक्षराचा अर्थ काय होतो?",
    options: ["Secure", "Simple", "Standard", "Server"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 13,
    question: "सामान्य HTTP वेब ट्रॅफिकसाठी डिफॉल्ट स्वरूपात कोणता पोर्ट नंबर वापरला जातो?",
    options: ["पोर्ट ८० (Port 80)", "पोर्ट ४४३", "पोर्ट २१", "पोर्ट २५"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 14,
    question: "सुरक्षित HTTPS वेब ट्रॅफिकसाठी कोणता पोर्ट नंबर वापरला जातो?",
    options: ["पोर्ट ४४३ (Port 443)", "पोर्ट ८०", "पोर्ट २२", "पोर्ट ११०"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 15,
    question: "डोमेन नावांचे (उदा. google.com) संख्यात्मक IP ॲड्रेसमध्ये रूपांतर करणारी सिस्टीम कोणती?",
    options: ["DNS (Domain Name System)", "DHCP", "FTP", "WINS"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 16,
    question: "FTP चे पूर्ण रूप काय आहे?",
    options: ["File Transfer Protocol", "Fast Transfer Protocol", "File Transmission Program", "Folder Transfer Path"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 17,
    question: "एकाच खोली, घर किंवा कार्यालयापुरते मर्यादित असणाऱ्या संगणक जाळ्याला काय म्हणतात?",
    options: ["LAN (Local Area Network)", "MAN", "WAN", "PAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 18,
    question: "एका संपूर्ण शहरापुरते पसरलेल्या संगणक जाळ्याला काय म्हणतात?",
    options: ["MAN (Metropolitan Area Network)", "LAN", "PAN", "WAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 19,
    question: "देश आणि खंड अशा जगभर विस्तारलेल्या जागतिक नेटवर्कला (उदा. इंटरनेट) काय म्हणतात?",
    options: ["WAN (Wide Area Network)", "LAN", "MAN", "CAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 20,
    question: "ब्लूटूथ, स्मार्टवॉच यांसारख्या वैयक्तिक उपकरणांमधील लहान अंतराच्या नेटवर्कला काय म्हणतात?",
    options: ["PAN (Personal Area Network)", "LAN", "WAN", "SAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 21,
    question: "स्थानिक नेटवर्कमधील कॉम्प्युटर्सना इंटरनेटशी जोडणाऱ्या आणि डेटा पॅकेट्स पाठवणाऱ्या उपकरणाला काय म्हणतात?",
    options: ["राऊटर (Router)", "रिपीटर", "हब", "एनआयसी"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 22,
    question: "डिजिटल सिग्नल्सचे ॲनालॉगमध्ये व ॲनालॉग सिग्नल्सचे डिजिटलमध्ये रूपांतर करणारे उपकरण कोणते?",
    options: ["मॉडेम (Modem - Modulator Demodulator)", "स्विच", "राऊटर", "ब्रिज"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 23,
    question: "नेटवर्क कार्डला (NIC) कायमस्वरूपी दिलेला युनिक ४८-बिट भौतिक पत्ता कोणता?",
    options: ["MAC Address (Media Access Control)", "IP Address", "Port Number", "Host ID"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 24,
    question: "Wi-Fi चे पूर्ण रूप काय आहे?",
    options: ["Wireless Fidelity", "Wireless Field", "Wide Frequency", "Wireless Finding"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 25,
    question: "फक्त शैक्षणिक संस्थांसाठी (Educational Institutions) राखीव असणारे डोमेन कोणते?",
    options: [".edu", ".org", ".com", ".gov"],
    correctAnswer: 0,
    category: "Internet & Email"
  },

  // --- भाग २: वेब ब्राउझर्स, सर्च इंजिन्स आणि वेब पेजेस (२६ ते ५०) ---
  {
    id: 26,
    question: "सरकारी विभाग आणि मंत्रालयांच्या अधिकृत वेबसाइट्ससाठी कोणते डोमेन वापरले जाते?",
    options: [".gov", ".com", ".net", ".edu"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 27,
    question: "अशासकीय किंवा बिगर-नफा संस्थांसाठी (Non-profit Organizations) कोणते डोमेन असते?",
    options: [".org", ".com", ".mil", ".gov"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 28,
    question: "भारतासाठी वापरले जाणारे कंट्री कोड टॉप-लेव्हल डोमेन (ccTLD) कोणते?",
    options: [".in", ".ind", ".ia", ".co"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 29,
    question: "इंटरनेटवरील वेबपेजेस पाहण्यासाठी वापरल्या जाणाऱ्या सॉफ्टवेअरला काय म्हणतात?",
    options: ["वेब ब्राउझर (Web Browser)", "सर्च इंजिन", "वेब सर्व्हर", "ऑपरेटिंग सिस्टीम"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 30,
    question: "खालीलपैकी कोणता एक वेब ब्राउझर आहे?",
    options: ["Google Chrome", "Google Search", "Yahoo Search", "Bing"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 31,
    question: "Windows 10/11 मध्ये डिफॉल्ट स्वरूपात उपलब्ध असणारा मायक्रोसॉफ्टचा वेब ब्राउझर कोणता?",
    options: ["Microsoft Edge", "Internet Explorer", "Safari", "Opera"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 32,
    question: "खालीलपैकी कोणते एक सर्च इंजिन (Search Engine) आहे?",
    options: ["Google", "Safari", "Firefox", "Opera"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 33,
    question: "कोणत्याही वेबसाइटच्या सुरुवातीच्या मुख्य पानाला (First Page) काय म्हणतात?",
    options: ["होम पेज (Home Page)", "लँडिंग पोर्टल", "इंडेक्स फाईल", "मास्टर पेज"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 34,
    question: "वेबपेजेस तयार करण्यासाठी वापरली जाणारी मुख्य मार्कअप लँग्वेज कोणती?",
    options: ["HTML (Hypertext Markup Language)", "HTTP", "XML", "PHP"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 35,
    question: "HTML वेबपेजेसची रचना आणि रंगसंगती आकर्षक करण्यासाठी काय वापरले जाते?",
    options: ["CSS (Cascading Style Sheets)", "JavaScript", "SQL", "Python"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 36,
    question: "वेब ब्राउझरमध्ये नवीन टॅब (New Tab) उघडण्याची शॉर्टकट की कोणती आहे?",
    options: ["Ctrl + T", "Ctrl + N", "Ctrl + Shift + T", "Ctrl + W"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 37,
    question: "चुकून बंद झालेला ब्राउझर टॅब पुन्हा पूर्ववत उघडण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + Shift + N", "Alt + T"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 38,
    question: "गुगल क्रोममध्ये गुप्त ब्राउझिंगसाठी Incognito विंडो उघडण्याची की कोणती?",
    options: ["Ctrl + Shift + N", "Ctrl + Shift + P", "Ctrl + N", "Alt + Shift + N"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 39,
    question: "Microsoft Edge / Firefox मध्ये InPrivate विंडो उघडण्याची शॉर्टकट की कोणती?",
    options: ["Ctrl + Shift + P", "Ctrl + Shift + N", "Ctrl + P", "Alt + P"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 40,
    question: "चालू वेबपेज बुकमार्क (Bookmark) करून सेव्ह करण्याची शॉर्टकट की कोणती?",
    options: ["Ctrl + D", "Ctrl + B", "Ctrl + Shift + D", "Alt + D"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 41,
    question: "ब्राउझरमध्ये शोधलेली मागील सर्व माहिती पाहण्यासाठी (Browsing History) कोणती की वापरतात?",
    options: ["Ctrl + H", "Ctrl + Shift + H", "Alt + H", "Ctrl + Y"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 42,
    question: "ब्राउझरमध्ये डाऊनलोड केलेली यादी (Downloads Page) उघडण्याची शॉर्टकट की कोणती?",
    options: ["Ctrl + J", "Ctrl + D", "Ctrl + Shift + J", "Alt + J"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 43,
    question: "कॅश क्लिअर करून वेबपेज पूर्णपणे नव्याने रिफ्रेश (Hard Reload) करण्याची की कोणती?",
    options: ["Ctrl + F5 (किंवा Ctrl + Shift + R)", "F5", "Ctrl + R", "Alt + F5"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 44,
    question: "ब्राउझर पूर्ण स्क्रीनवर (Full Screen) पाहण्यासाठी कोणती की वापरली जाते?",
    options: ["F11", "F12", "Ctrl + F11", "Shift + F11"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 45,
    question: "वेबसाइट्स वापरकर्त्याची पसंती आणि लॉगिन माहिती कॉम्प्युटरवर ज्या टेक्स्ट फाईलमध्ये साठवतात तिला काय म्हणतात?",
    options: ["कुकीज (Cookies)", "कॅश (Cache)", "टोकन्स", "ॲपलेट्स"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 46,
    question: "ब्राउझरमधील हिस्ट्री व कुकीज डिलीट करण्यासाठी (Clear Browsing Data) कोणती की वापरतात?",
    options: ["Ctrl + Shift + Delete", "Ctrl + Delete", "Alt + Shift + Delete", "Ctrl + Alt + Delete"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 47,
    question: "ब्राउझरच्या ॲड्रेस बारवर (Address Bar) थेट कर्सर नेण्यासाठी कोणती की वापरतात?",
    options: ["Ctrl + L (किंवा Alt + D, F6)", "Ctrl + E", "Ctrl + A", "Alt + A"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 48,
    question: "ब्राउझरचा चालू ॲक्टिव्ह टॅब बंद करण्याची शॉर्टकट की कोणती आहे?",
    options: ["Ctrl + W (किंवा Ctrl + F4)", "Ctrl + Q", "Alt + W", "Esc"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 49,
    question: "सर्च इंजिन्सद्वारे इंटरनेटवरील नवीन वेबपेजेस शोधून अनुक्रमणिका बनवणाऱ्या स्वयंचलित बॉट्सना काय म्हणतात?",
    options: ["वेब क्रॉलर्स (Web Crawlers / Spiders)", "ब्राउझर्स", "राऊटर्स", "प्रॉक्सीज"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 50,
    question: "सर्च इंजिनमध्ये अचूक तोच शब्द किंवा वाक्य शोधण्यासाठी कोणता ऑपरेटर वापरतात?",
    options: ["\"दुहेरी अवतरण चिन्ह (Quotes)\"", "+ चिन्ह", "site: फिल्टर", "filetype: फिल्टर"],
    correctAnswer: 0,
    category: "Internet & Email"
  },

  // --- भाग ३: इलेक्ट्रॉनिक मेल (Email) संकल्पना आणि कार्यपद्धती (५१ ते ७५) ---
  {
    id: 51,
    question: "Email चे पूर्ण रूप काय आहे?",
    options: ["Electronic Mail", "Electrical Mail", "Engineered Mail", "Express Mail"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 52,
    question: "१९७१ मध्ये पहिला ईमेल पाठवणारे आणि ईमेल पत्त्यात '@' चिन्हाचा वापर सुरू करणारे कोण?",
    options: ["रे टॉमलिन्सन (Ray Tomlinson)", "टिम बर्नर्स-ली", "विंट सर्फ", "सबिर भाटिया"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 53,
    question: "१९९६ मध्ये जगातील पहिली मोफत वेब-आधारित ईमेल सेवा 'Hotmail' कोणी सुरू केली?",
    options: ["सबिर भाटिया आणि जॅक स्मिथ", "सुंदर पिचाई", "सत्य नडेला", "विंट सर्फ"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 54,
    question: "ईमेल पत्त्यामध्ये युझरनेम आणि डोमेन नेम यांना वेगळे करण्यासाठी कोणते चिन्ह वापरले जाते?",
    options: ["@ (At the rate)", "#", "$", "&"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 55,
    question: "ईमेल आयडी तयार करताना खालीलपैकी काय वापरण्यास पूर्णपणे मनाई असते?",
    options: ["स्पेस / रिकामी जागा (Spaces)", "पूर्णविराम (.)", "हायफन (-)", "अंडरस्कोअर (_)"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 56,
    question: "इंटरनेटवर ईमेल पाठवण्यासाठी (Sending Outgoing Mail) कोणता प्रोटोकॉल वापरला जातो?",
    options: ["SMTP (Simple Mail Transfer Protocol)", "POP3", "IMAP", "HTTP"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 57,
    question: "सर्व्हरवरून ईमेल कॉम्प्युटरवर डाऊनलोड करून सर्व्हरवरून डिलीट करणारा जुना प्रोटोकॉल कोणता?",
    options: ["POP3 (Post Office Protocol version 3)", "SMTP", "SNMP", "FTP"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 58,
    question: "मोबाईल, लॅपटॉप अशा सर्व उपकरणांवर ईमेल सतत सिंक (Synchronize) ठेवणारा आधुनिक प्रोटोकॉल कोणता?",
    options: ["IMAP (Internet Message Access Protocol)", "POP3", "SMTP", "TELNET"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 59,
    question: "ईमेल हेडरमध्ये CC चे पूर्ण रूप काय आहे?",
    options: ["Carbon Copy", "Central Copy", "Computer Copy", "Common Communication"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 60,
    question: "ईमेल हेडरमध्ये BCC चे पूर्ण रूप काय आहे?",
    options: ["Blind Carbon Copy", "Black Carbon Copy", "Back Carbon Copy", "Business Carbon Copy"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 61,
    question: "इतर प्राप्तकर्त्यांना (Recipients) पत्ता दिसू नये म्हणून गुप्तपणे ईमेल पाठवण्यासाठी काय वापरतात?",
    options: ["BCC (Blind Carbon Copy)", "CC", "To", "Subject"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 62,
    question: "ईमेलचा मुख्य विषय किंवा सारांश ज्या ओळीवर लिहितात तिला काय म्हणतात?",
    options: ["सब्जेक्ट लाईन (Subject Line)", "हेडर टायटल", "ॲब्स्ट्रॅक्ट", "बॉडी"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 63,
    question: "ईमेलमध्ये फाईल, फोटो किंवा डॉक्युमेंट जोडण्यासाठी (Attach File) कोणते आयकॉन असते?",
    options: ["पेपरक्लिप आयकॉन (Paperclip)", "पाकीट आयकॉन", "कुलूप आयकॉन", "गिअर आयकॉन"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 64,
    question: "Gmail द्वारे थेट जोडल्या जाणाऱ्या फाईल अटॅचमेंटची कमाल मर्यादा किती असते?",
    options: ["२५ MB", "१० MB", "५० MB", "१०० MB"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 65,
    question: "अनाहुतपणे येणाऱ्या, न मागितलेल्या जाहिरातींच्या किंवा फसव्या बल्क ईमेल्सना काय म्हणतात?",
    options: ["स्पॅम (Spam / Junk Mail)", "ड्राफ्ट", "आर्काइव्ह", "मालवेअर"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 66,
    question: "टाईप केलेले पण अद्याप न पाठवलेले अपूर्ण ईमेल आपोआप कुठे सेव्ह होतात?",
    options: ["Drafts फोल्डर", "Outbox", "Sent Mail", "Trash"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 67,
    question: "पाठवलेला ईमेल प्रत्यक्षात डिलिव्हर होईपर्यंत तात्पुरता कोणत्या फोल्डरमध्ये अडकून राहतो?",
    options: ["Outbox", "Sent", "Drafts", "Archive"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 68,
    question: "यशस्वीरीत्या पाठवलेले सर्व ईमेल्स कायमस्वरूपी कोणत्या फोल्डरमध्ये साठवले जातात?",
    options: ["Sent फोल्डर", "Outbox", "Inbox", "Drafts"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 69,
    question: "डिलीट केलेले ईमेल्स तात्पुरत्या स्वरूपात कोणत्या फोल्डरमध्ये जातात?",
    options: ["Trash / Bin फोल्डर", "Spam", "Archive", "Outbox"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 70,
    question: "Gmail च्या Trash आणि Spam फोल्डरमधील ईमेल्स किती दिवसांनी आपोआप कायमचे नष्ट होतात?",
    options: ["३० दिवस", "१५ दिवस", "६० दिवस", "९० दिवस"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 71,
    question: "केवळ मूळ पाठवणाऱ्या व्यक्तीलाच उत्तर देण्यासाठी कोणता पर्याय निवडतात?",
    options: ["Reply", "Reply All", "Forward", "Redirect"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 72,
    question: "ईमेल पाठवणारा आणि CC मधील सर्व व्यक्तींना एकाच वेळी उत्तर पाठवण्यासाठी काय वापरतात?",
    options: ["Reply All", "Reply", "Forward", "Broadcast"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 73,
    question: "आलेला ईमेल जसाच्या तसा तिसऱ्याच नवीन व्यक्तीला पाठवण्यासाठी कोणता पर्याय वापरतात?",
    options: ["Forward", "Reply", "Reply All", "Share"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 74,
    question: "प्रत्येक पाठवल्या जाणाऱ्या ईमेलच्या तळाशी आपले नाव, पद व फोन नंबर आपोआप जोडणाऱ्या मजकुराला काय म्हणतात?",
    options: ["Email Signature", "Watermark", "Header Stamp", "Salutation"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 75,
    question: "ईमेलमध्ये टेक्स्टव्यतिरिक्त चित्रे, ऑडिओ, व्हिडिओ जोडण्यास परवानगी देणारा एक्स्टेंशन प्रोटोकॉल कोणता?",
    options: ["MIME (Multipurpose Internet Mail Extensions)", "SMTP", "POP", "SNMP"],
    correctAnswer: 0,
    category: "Internet & Email"
  },

  // --- भाग ४: सायबर सुरक्षा, क्लाउड आणि डिजिटल सेवा (७६ ते १००) ---
  {
    id: 76,
    question: "बँक किंवा नामांकित संस्थेच्या खोट्या ईमेलद्वारे पासवर्ड व क्रेडिट कार्ड माहिती चोरण्याच्या प्रकाराला काय म्हणतात?",
    options: ["फिशिंग (Phishing)", "स्पॅमिंग", "स्पूफिंग", "हॅकिंग"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 77,
    question: "कॉम्प्युटरमधील फाईल्स लॉक/एनक्रिप्ट करून त्या सोडवण्यासाठी पैशांची खंडणी मागणारा व्हायरस कोणता?",
    options: ["रॅन्समवेअर (Ransomware)", "ॲडवेअर", "स्पायवेअर", "ट्रोजन हॉर्स"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 78,
    question: "उपयुक्त वाटणाऱ्या सॉफ्टवेअरच्या आड लपून कॉम्प्युटरमध्ये प्रवेश करणारा घातक प्रोग्रॅम कोणता?",
    options: ["ट्रोजन हॉर्स (Trojan Horse)", "वॉर्म", "व्हायरस", "रूटकिट"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 79,
    question: "कोणत्याही मानवी हस्तक्षेपाशिवाय नेटवर्कद्वारे स्वतःच्या प्रती तयार करून बँडविड्थ संपवणारा मालवेअर कोणता?",
    options: ["वॉर्म (Worm)", "व्हायरस", "ट्रोजन", "ॲडवेअर"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 80,
    question: "युझरने कीबोर्डवर टाईप केलेले पासवर्ड्स आणि गोपनीय माहिती चोरून हॅकरला पाठवणारे सॉफ्टवेअर कोणते?",
    options: ["स्पायवेअर / कीलॉगर (Keylogger)", "ॲडवेअर", "स्पॅम", "फायरवॉल"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 81,
    question: "पासवर्डव्यतिरिक्त मोबाईलवर OTP किंवा फिंगरप्रिंट मागणाऱ्या दुहेरी सुरक्षा पद्धतीला काय म्हणतात?",
    options: ["2FA (Two-Factor Authentication / MFA)", "Single Sign-On", "SSL Certificate", "Captcha"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 82,
    question: "सुरक्षित व्यवहारांसाठी वापरल्या जाणाऱ्या OTP चे पूर्ण रूप काय आहे?",
    options: ["One Time Password", "Only True Password", "One Time Provider", "Online Transaction Pin"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 83,
    question: "CAPTCHA चे पूर्ण रूप काय आहे?",
    options: [
      "Completely Automated Public Turing test to tell Computers and Humans Apart",
      "Computer Authenticated Public Turing Character Handler",
      "Common Automated Process to Check Human Actions",
      "Central Algorithm Protocol to Capture Humans Activity"
    ],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 84,
    question: "VPN चे पूर्ण रूप काय आहे?",
    options: ["Virtual Private Network", "Visual Public Network", "Variable Private Node", "Virtual Port Network"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 85,
    question: "ब्राउझर ॲड्रेस बारमधील कुलूपाचे चिन्ह (Padlock) काय दर्शवते?",
    options: [
      "संकेतस्थळाचे कनेक्शन SSL/TLS ने सुरक्षित आणि एनक्रिप्टेड आहे",
      "वेबसाइट कधीही हॅक होऊ शकत नाही",
      "वेबसाइट सरकारी आहे",
      "कॉम्प्युटर लॉक आहे"
    ],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 86,
    question: "SSL चे पूर्ण रूप काय आहे?",
    options: ["Secure Sockets Layer", "Standard Sockets Link", "System Secure Language", "Simple Security Level"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 87,
    question: "अनेक संगणकांवरून एकाच वेळी प्रचंड खोटे ट्रॅफिक पाठवून वेबसाइट ठप्प पाडणाऱ्या हल्ल्याला काय म्हणतात?",
    options: ["DDoS (Distributed Denial of Service)", "फिशिंग", "मॅन-इन-द-मिडल", "एसक्यूएल इंजेक्शन"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 88,
    question: "इंटरनेटच्या माध्यमातून सर्व्हर, स्टोरेज, डेटाबेस आणि सॉफ्टवेअर सेवा पुरवण्याला काय म्हणतात?",
    options: ["क्लाउड कॉम्प्युटिंग (Cloud Computing)", "ग्रीड कॉम्प्युटिंग", "एज कॉम्प्युटिंग", "लोकल होस्टिंग"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 89,
    question: "खालीलपैकी कोणती एक प्रमुख क्लाउड स्टोरेज (Cloud Storage) सेवा आहे?",
    options: ["Google Drive / Microsoft OneDrive", "Notepad", "MS Paint", "VLC Player"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 90,
    question: "प्रत्येक वैयक्तिक गुगल खात्याला (Gmail + Drive + Photos) एकूण किती मोफत क्लाउड स्टोरेज मिळते?",
    options: ["१५ GB", "५ GB", "२५ GB", "५० GB"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 91,
    question: "Microsoft OneDrive द्वारे मोफत खात्यासाठी किती स्टोरेज दिले जाते?",
    options: ["५ GB", "१५ GB", "२५ GB", "५० GB"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 92,
    question: "क्लाउड कॉम्प्युटिंगमध्ये SaaS चे पूर्ण रूप काय आहे?",
    options: ["Software as a Service", "System as a Server", "Storage as a System", "Security as a Service"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 93,
    question: "भारतातील डिजिटल बँक व्यवहारांसाठी वापरल्या जाणाऱ्या UPI चे पूर्ण रूप काय आहे?",
    options: ["Unified Payments Interface", "Universal Payment Index", "Uniform Provider Interface", "United Public Interface"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 94,
    question: "भारतात UPI आणि RuPay प्रणाली कोणी विकसित केली आणि चालवली आहे?",
    options: ["NPCI (National Payments Corporation of India)", "RBI", "SEBI", "नीती आयोग"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 95,
    question: "QR Code चे पूर्ण रूप काय आहे?",
    options: ["Quick Response Code", "Quality Ratio Code", "Quick Record Code", "Quantum Read Code"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 96,
    question: "eCommerce चे पूर्ण रूप काय आहे?",
    options: ["Electronic Commerce", "Electric Commerce", "Express Commerce", "Engineered Commerce"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 97,
    question: "OLX किंवा Quikr वर दोन सामान्य नागरिकांमध्ये जुन्या वस्तूंची खरेदी-विक्री कोणत्या मॉडेलमध्ये मोडते?",
    options: ["C2C (Consumer to Consumer)", "B2B", "B2C", "G2C"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 98,
    question: "Amazon किंवा Flipkart वरून ग्राहकांनी थेट वस्तू खरेदी करणे कोणत्या मॉडेलमध्ये मोडते?",
    options: ["B2C (Business to Consumer)", "B2B", "C2B", "C2C"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 99,
    question: "भारतात सायबर गुन्हे आणि डिजिटल व्यवहारांसाठी लागू असलेला मुख्य ऐतिहासिक कायदा कोणता?",
    options: ["माहिती तंत्रज्ञान कायदा, २००० (IT Act, 2000)", "सायबर सुरक्षा कायदा २०१०", "डिजिटल इंडिया कायदा २०१५", "टेलिकॉम ॲक्ट"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 100,
    question: "इंटरनेटवर वावरताना आणि संवाद साधताना पाळल्या जाणाऱ्या सभ्य वर्तणुकीच्या नियमांना काय म्हणतात?",
    options: ["नेटिकेट (Netiquette / Network Etiquette)", "सायबर एथिक्स", "वेब प्रोटोकॉल्स", "ऑनलाइन मॉडेल"],
    correctAnswer: 0,
    category: "Internet & Email"
  }
];