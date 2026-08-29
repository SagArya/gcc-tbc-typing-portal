// src/data/mcq/english/internetEmail.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const INTERNET_EMAIL_ENGLISH_MCQ: MCQQuestion[] = [
  // --- PART 1: INTERNET BASICS, NETWORKING & PROTOCOLS (1-25) ---
  {
    id: 1,
    question: "What is the global worldwide interconnection of computer networks called?",
    options: ["Internet", "Intranet", "Extranet", "LAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 2,
    question: "What is the full form of WWW?",
    options: ["World Wide Web", "World Wide Webpage", "World Wide Wire", "World Wireless Web"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 3,
    question: "Who is recognized as the inventor of the World Wide Web (WWW)?",
    options: ["Tim Berners-Lee", "Vint Cerf", "Bill Gates", "Charles Babbage"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 4,
    question: "Who is widely acknowledged as the 'Father of the Internet' for co-designing TCP/IP?",
    options: ["Vint Cerf", "Tim Berners-Lee", "Ray Tomlinson", "Alan Turing"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 5,
    question: "What was the name of the world's first operational computer packet-switching network (precursor to Internet)?",
    options: ["ARPANET", "NSFNET", "INTRANET", "ETHERNET"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 6,
    question: "What is the full form of URL?",
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
    question: "What is the full form of IP in computer networking?",
    options: ["Internet Protocol", "Internal Protocol", "Internet Provider", "Interface Port"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 8,
    question: "What is the standard address length of an IPv4 address?",
    options: ["32 bits (4 Bytes)", "64 bits", "128 bits", "16 bits"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 9,
    question: "What is the address length of an IPv6 address?",
    options: ["128 bits (16 Bytes)", "32 bits", "64 bits", "256 bits"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 10,
    question: "What is the full form of ISP?",
    options: ["Internet Service Provider", "Internet Server Protocol", "International Service Provider", "Internal System Provider"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 11,
    question: "What is the primary protocol used for transferring web pages over the World Wide Web?",
    options: ["HTTP (Hypertext Transfer Protocol)", "FTP", "SMTP", "POP3"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 12,
    question: "What does the 'S' stand for in HTTPS?",
    options: ["Secure", "Simple", "Standard", "Server"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 13,
    question: "Which default port number is used for standard unencrypted HTTP web traffic?",
    options: ["Port 80", "Port 443", "Port 21", "Port 25"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 14,
    question: "Which default port number is used for secure encrypted HTTPS web traffic?",
    options: ["Port 443", "Port 80", "Port 22", "Port 110"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 15,
    question: "Which system translates human-readable domain names (e.g., google.com) into numerical IP addresses?",
    options: ["DNS (Domain Name System)", "DHCP", "FTP", "WINS"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 16,
    question: "What is the full form of FTP?",
    options: ["File Transfer Protocol", "Fast Transfer Protocol", "File Transmission Program", "Folder Transfer Path"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 17,
    question: "What type of network is confined to a single room, home, or office building?",
    options: ["LAN (Local Area Network)", "MAN", "WAN", "PAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 18,
    question: "What type of network covers an entire city or metropolitan region?",
    options: ["MAN (Metropolitan Area Network)", "LAN", "PAN", "WAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 19,
    question: "What type of network spans broad geographic areas across countries and continents (e.g., The Internet)?",
    options: ["WAN (Wide Area Network)", "LAN", "MAN", "CAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 20,
    question: "What type of personal short-range network connects personal devices like Bluetooth headphones and smartwatches?",
    options: ["PAN (Personal Area Network)", "LAN", "WAN", "SAN"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 21,
    question: "What hardware device connects multiple computers within a local network and forwards data packets between networks (to the ISP)?",
    options: ["Router", "Repeater", "Hub", "NIC"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 22,
    question: "What device modulates digital computer signals into analog signals for transmission over telephone lines and vice versa?",
    options: ["Modem (Modulator-Demodulator)", "Switch", "Router", "Bridge"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 23,
    question: "What is the unique physical 48-bit hardware address permanently assigned to a Network Interface Card (NIC) called?",
    options: ["MAC Address (Media Access Control)", "IP Address", "Port Number", "Host ID"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 24,
    question: "What is the full form of Wi-Fi?",
    options: ["Wireless Fidelity", "Wireless Field", "Wide Frequency", "Wireless Finding"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 25,
    question: "What top-level domain (TLD) is designated exclusively for accredited educational institutions?",
    options: [".edu", ".org", ".com", ".gov"],
    correctAnswer: 0,
    category: "Internet & Email"
  },

  // --- PART 2: WEB BROWSERS & SEARCH ENGINES (26-50) ---
  {
    id: 26,
    question: "What top-level domain (TLD) is designated for government agencies and departments?",
    options: [".gov", ".com", ".net", ".edu"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 27,
    question: "What top-level domain (TLD) is designated for non-profit organizations?",
    options: [".org", ".com", ".mil", ".gov"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 28,
    question: "What is the country code top-level domain (ccTLD) for India?",
    options: [".in", ".ind", ".ia", ".co"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 29,
    question: "Which software application is used to access, retrieve, and view web pages on the Internet?",
    options: ["Web Browser", "Search Engine", "Web Server", "Operating System"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 30,
    question: "Which of the following is a Web Browser application?",
    options: ["Google Chrome", "Google Search", "Yahoo Search", "Bing"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 31,
    question: "Which web browser is built-in by default in Microsoft Windows 10/11?",
    options: ["Microsoft Edge", "Internet Explorer", "Safari", "Opera"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 32,
    question: "Which of the following is a Web Search Engine (not a browser)?",
    options: ["Google", "Safari", "Firefox", "Opera"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 33,
    question: "What is the initial or main starting page of a website called?",
    options: ["Home Page", "Landing Portal", "Index File", "Master Page"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 34,
    question: "What is the standard authoring markup language used to structure web pages?",
    options: ["HTML (Hypertext Markup Language)", "HTTP", "XML", "PHP"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 35,
    question: "What language is used to style and format the visual layout and colors of HTML web pages?",
    options: ["CSS (Cascading Style Sheets)", "JavaScript", "SQL", "Python"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 36,
    question: "What is the shortcut key to open a New Tab in modern web browsers (Chrome/Edge/Firefox)?",
    options: ["Ctrl + T", "Ctrl + N", "Ctrl + Shift + T", "Ctrl + W"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 37,
    question: "What is the shortcut key to Reopen the most recently closed browser tab?",
    options: ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + Shift + N", "Alt + T"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 38,
    question: "What is the shortcut key to open a New Incognito (Private Browsing) Window in Google Chrome?",
    options: ["Ctrl + Shift + N", "Ctrl + Shift + P", "Ctrl + N", "Alt + Shift + N"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 39,
    question: "What is the shortcut key to open a New InPrivate Window in Microsoft Edge / Firefox?",
    options: ["Ctrl + Shift + P", "Ctrl + Shift + N", "Ctrl + P", "Alt + P"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 40,
    question: "What is the shortcut key to Bookmark the current webpage in your browser?",
    options: ["Ctrl + D", "Ctrl + B", "Ctrl + Shift + D", "Alt + D"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 41,
    question: "What is the shortcut key to open the Web Browsing History list in Chrome/Edge?",
    options: ["Ctrl + H", "Ctrl + Shift + H", "Alt + H", "Ctrl + Y"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 42,
    question: "What is the shortcut key to open the Downloads page in web browsers?",
    options: ["Ctrl + J", "Ctrl + D", "Ctrl + Shift + J", "Alt + J"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 43,
    question: "What is the shortcut key to Hard Reload / Refresh the current web page, clearing cache?",
    options: ["Ctrl + F5 (or Ctrl + Shift + R)", "F5", "Ctrl + R", "Alt + F5"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 44,
    question: "What is the shortcut key to toggle Full Screen view on and off in a web browser?",
    options: ["F11", "F12", "Ctrl + F11", "Shift + F11"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 45,
    question: "What are small text files stored by websites on your computer to remember login sessions, site preferences, and shopping carts called?",
    options: ["Cookies", "Cache", "Tokens", "Applets"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 46,
    question: "What is the shortcut key to open the 'Clear Browsing Data' dialog in Google Chrome and Microsoft Edge?",
    options: ["Ctrl + Shift + Delete", "Ctrl + Delete", "Alt + Shift + Delete", "Ctrl + Alt + Delete"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 47,
    question: "What is the shortcut key to focus the browser's Address Bar (Omnibox) directly?",
    options: ["Ctrl + L (or Alt + D, F6)", "Ctrl + E", "Ctrl + A", "Alt + A"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 48,
    question: "What is the shortcut key to close the current active tab in a web browser?",
    options: ["Ctrl + W (or Ctrl + F4)", "Ctrl + Q", "Alt + W", "Esc"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 49,
    question: "What are automated software programs sent by search engines to systematically crawl and index web pages across the internet called?",
    options: ["Web Crawlers (Spiders / Bots)", "Browsers", "Routers", "Proxies"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 50,
    question: "Which search operator is used in search engines to search for an Exact Word or Phrase?",
    options: ["\"Double Quotes\"", "+ Plus sign", "site: filter", "filetype: filter"],
    correctAnswer: 0,
    category: "Internet & Email"
  },

  // --- PART 3: ELECTRONIC MAIL (EMAIL) ARCHITECTURE (51-75) ---
  {
    id: 51,
    question: "What is the full form of Email?",
    options: ["Electronic Mail", "Electrical Mail", "Engineered Mail", "Express Mail"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 52,
    question: "Who sent the world's first network email in 1971 and introduced the '@' symbol for email addresses?",
    options: ["Ray Tomlinson", "Tim Berners-Lee", "Vint Cerf", "Sabeer Bhatia"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 53,
    question: "Who co-founded the world's first free web-based email service, Hotmail, in 1996?",
    options: ["Sabeer Bhatia & Jack Smith", "Sundar Pichai", "Satya Nadella", "Vint Cerf"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 54,
    question: "Which special character separates the username from the domain name in an email address (e.g., user@domain.com)?",
    options: ["@ (At the rate)", "#", "$", "&"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 55,
    question: "Which of the following characters is strictly NOT ALLOWED in standard email address usernames?",
    options: ["Spaces ( )", "Dots (.)", "Hyphens (-)", "Underscores (_)"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 56,
    question: "Which standard networking protocol is used for SENDING and transferring outgoing emails across the Internet?",
    options: ["SMTP (Simple Mail Transfer Protocol)", "POP3", "IMAP", "HTTP"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 57,
    question: "Which standard protocol downloads emails from a mail server to a local client and typically deletes them from the server?",
    options: ["POP3 (Post Office Protocol version 3)", "SMTP", "SNMP", "FTP"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 58,
    question: "Which modern email protocol keeps emails synchronized across multiple devices (phone, laptop, web) on the mail server?",
    options: ["IMAP (Internet Message Access Protocol)", "POP3", "SMTP", "TELNET"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 59,
    question: "In an email header, what does 'CC' stand for?",
    options: ["Carbon Copy", "Central Copy", "Computer Copy", "Common Communication"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 60,
    question: "In an email header, what does 'BCC' stand for?",
    options: ["Blind Carbon Copy", "Black Carbon Copy", "Back Carbon Copy", "Business Carbon Copy"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 61,
    question: "Which email recipient field hides recipient email addresses so other recipients cannot see who received the message?",
    options: ["BCC (Blind Carbon Copy)", "CC", "To", "Subject"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 62,
    question: "What is the short headline summarizing the topic or purpose of an email called?",
    options: ["Subject Line", "Header Title", "Abstract", "Body"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 63,
    question: "Which icon in an email client is universally used to represent the 'Attach File' feature?",
    options: ["Paperclip Icon", "Envelope Icon", "Lock Icon", "Gear Icon"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 64,
    question: "What is the standard maximum file attachment size limit supported directly in Gmail?",
    options: ["25 MB", "10 MB", "50 MB", "100 MB"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 65,
    question: "What is unsolicited, bulk, unwanted promotional or phishing advertising email commonly known as?",
    options: ["Spam (Junk Mail)", "Draft", "Archive", "Malware"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 66,
    question: "Where are unfinished, unsent composed emails automatically saved in an email account?",
    options: ["Drafts Folder", "Outbox", "Sent Mail", "Trash"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 67,
    question: "Which folder holds outgoing emails temporarily while they are in the process of transmitting over the network?",
    options: ["Outbox", "Sent", "Drafts", "Archive"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 68,
    question: "Where are successfully transmitted and delivered email messages stored permanently?",
    options: ["Sent Folder", "Outbox", "Inbox", "Drafts"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 69,
    question: "Where are deleted email messages held temporarily before being permanently purged?",
    options: ["Trash / Bin Folder", "Spam", "Archive", "Outbox"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 70,
    question: "For how many days are deleted emails and spam typically retained in Gmail's Trash before automatic permanent deletion?",
    options: ["30 Days", "15 Days", "60 Days", "90 Days"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 71,
    question: "Which command is used to reply ONLY to the original sender of an email message?",
    options: ["Reply", "Reply All", "Forward", "Redirect"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 72,
    question: "Which command is used to send an email reply to the sender AND all other users listed in the To and CC fields?",
    options: ["Reply All", "Reply", "Forward", "Broadcast"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 73,
    question: "Which command is used to send a copy of an already received email message to a completely new third party?",
    options: ["Forward", "Reply", "Reply All", "Share"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 74,
    question: "What is a predefined block of text containing your name, job title, and contact details appended to the bottom of outgoing emails called?",
    options: ["Email Signature", "Watermark", "Header Stamp", "Salutation"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 75,
    question: "What protocol extension allows email messages to support non-ASCII text, attachments, audio, video, and formatted HTML?",
    options: ["MIME (Multipurpose Internet Mail Extensions)", "SMTP", "POP", "SNMP"],
    correctAnswer: 0,
    category: "Internet & Email"
  },

  // --- PART 4: CYBER SECURITY, CLOUD & DIGITAL SERVICES (76-100) ---
  {
    id: 76,
    question: "What is a fraudulent attempt to steal sensitive user data such as passwords and credit cards by posing as a trustworthy organization called?",
    options: ["Phishing", "Spamming", "Spoofing", "Hacking"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 77,
    question: "What type of malicious software encrypts a victim's files and demands a monetary ransom payment to decrypt them?",
    options: ["Ransomware", "Adware", "Spyware", "Trojan Horse"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 78,
    question: "What type of malware appears to be legitimate or useful software but executes hidden malicious payloads in the background?",
    options: ["Trojan Horse", "Worm", "Virus", "Rootkit"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 79,
    question: "What type of standalone self-replicating malware spreads across networks to consume bandwidth without requiring user intervention?",
    options: ["Worm", "Virus", "Trojan", "Adware"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 80,
    question: "What type of malware secretly tracks keystrokes, browsing habits, and credentials to send them to unauthorized third parties?",
    options: ["Spyware / Keylogger", "Adware", "Spam", "Firewall"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 81,
    question: "What security mechanism requires two different authentication factors (e.g., Password + OTP / Fingerprint) to verify user identity?",
    options: ["2FA (Two-Factor Authentication / MFA)", "Single Sign-On", "SSL Certificate", "Captcha"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 82,
    question: "What is the full form of OTP in secure online transactions?",
    options: ["One Time Password", "Only True Password", "One Time Provider", "Online Transaction Pin"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 83,
    question: "What is the full form of CAPTCHA?",
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
    question: "What is the full form of VPN in Internet networking?",
    options: ["Virtual Private Network", "Visual Public Network", "Variable Private Node", "Virtual Port Network"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 85,
    question: "What does the padlock icon in the browser address bar next to the website URL indicate?",
    options: [
      "The connection is encrypted using SSL/TLS",
      "The website is completely immune to hacking",
      "The site belongs to government",
      "The computer is locked"
    ],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 86,
    question: "What is the full form of SSL?",
    options: ["Secure Sockets Layer", "Standard Sockets Link", "System Secure Language", "Simple Security Level"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 87,
    question: "Which cyber attack floods a target web server with overwhelming traffic from multiple systems to make it crash and unavailable?",
    options: ["DDoS (Distributed Denial of Service)", "Phishing", "Man-in-the-Middle", "SQL Injection"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 88,
    question: "What is the delivery of computing services—including servers, storage, databases, networking, and software—over the Internet called?",
    options: ["Cloud Computing", "Grid Computing", "Edge Computing", "Local Hosting"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 89,
    question: "Which of the following is a prominent Cloud Storage service provider?",
    options: ["Google Drive / Microsoft OneDrive", "Notepad", "Paint", "VLC Player"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 90,
    question: "What is the total free cloud storage allocated to each standard personal Google account (shared across Gmail, Drive & Photos)?",
    options: ["15 GB", "5 GB", "25 GB", "50 GB"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 91,
    question: "What is the free cloud storage quota provided by Microsoft OneDrive for free personal accounts?",
    options: ["5 GB", "15 GB", "25 GB", "50 GB"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 92,
    question: "What is the full form of SaaS in cloud computing?",
    options: ["Software as a Service", "System as a Server", "Storage as a System", "Security as a Service"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 93,
    question: "What is the full form of UPI in digital banking transactions in India?",
    options: ["Unified Payments Interface", "Universal Payment Index", "Uniform Provider Interface", "United Public Interface"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 94,
    question: "Which national organization developed and operates UPI and RuPay in India?",
    options: ["NPCI (National Payments Corporation of India)", "RBI", "SEBI", "NITI Aayog"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 95,
    question: "What is the full form of QR Code?",
    options: ["Quick Response Code", "Quality Ratio Code", "Quick Record Code", "Quantum Read Code"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 96,
    question: "What is the full form of eCommerce?",
    options: ["Electronic Commerce", "Electric Commerce", "Express Commerce", "Engineered Commerce"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 97,
    question: "Transactions between two individual consumers on online portals like OLX or eBay fall under which business model?",
    options: ["C2C (Consumer to Consumer)", "B2B", "B2C", "G2C"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 98,
    question: "Online retail shopping where businesses sell directly to individual consumers (like Amazon, Flipkart) is called:",
    options: ["B2C (Business to Consumer)", "B2B", "C2B", "C2C"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 99,
    question: "What is the primary landmark cyber law legislation enacted in India for cyber security and electronic commerce?",
    options: ["Information Technology Act, 2000 (IT Act)", "Cyber Security Law 2010", "Digital India Act 2015", "Telecom Regulatory Act"],
    correctAnswer: 0,
    category: "Internet & Email"
  },
  {
    id: 100,
    question: "What is the set of social guidelines and polite behavior rules for respectful online communication on the Internet called?",
    options: ["Netiquette (Network Etiquette)", "Cyber Ethics", "Web Protocols", "Online Morals"],
    correctAnswer: 0,
    category: "Internet & Email"
  }
];