// src/data/mcq/english/fundamentals.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const COMPUTER_FUNDAMENTALS_ENGLISH_MCQ: MCQQuestion[] = [
  // --- PART 1: HARDWARE, CPU & MEMORY UNITS (1-25) ---
  {
    id: 1,
    question: "What is known as the 'Brain' of a computer system?",
    options: ["Monitor", "Central Processing Unit (CPU)", "Hard Disk", "RAM"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 2,
    question: "Which component of the CPU performs all mathematical calculations and logical comparisons?",
    options: ["Control Unit (CU)", "Arithmetic Logic Unit (ALU)", "Memory Unit (MU)", "Cache"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 3,
    question: "Which component of the CPU coordinates and directs all operations of the computer system?",
    options: ["Control Unit (CU)", "Arithmetic Logic Unit (ALU)", "Registers", "ROM"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 4,
    question: "Which type of computer memory is Volatile (loses data when power is turned off)?",
    options: ["ROM", "Hard Disk Drive (HDD)", "RAM (Random Access Memory)", "Solid State Drive (SSD)"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 5,
    question: "Which type of memory contains permanent startup instructions (BIOS / Firmware) and is Non-Volatile?",
    options: ["RAM", "ROM (Read Only Memory)", "Cache Memory", "Virtual Memory"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 6,
    question: "1 Byte is composed of how many bits?",
    options: ["4 bits", "8 bits", "16 bits", "32 bits"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 7,
    question: "A group of 4 bits is known as a:",
    options: ["Nibble", "Byte", "Word", "Block"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 8,
    question: "1 Kilobyte (KB) is equal to how many Bytes?",
    options: ["1000 Bytes", "1024 Bytes", "1048 Bytes", "512 Bytes"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 9,
    question: "1 Megabyte (MB) is equal to:",
    options: ["1024 Kilobytes (KB)", "1000 Kilobytes (KB)", "1024 Bytes", "1024 Gigabytes (GB)"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 10,
    question: "1 Gigabyte (GB) is equal to:",
    options: ["1024 Megabytes (MB)", "1000 Megabytes (MB)", "1024 Terabytes (TB)", "1024 Kilobytes (KB)"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 11,
    question: "1 Terabyte (TB) is equal to:",
    options: ["1024 Gigabytes (GB)", "1000 Gigabytes (GB)", "1024 Megabytes (MB)", "1024 Petabytes (PB)"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 12,
    question: "Which of the following is the fastest memory located directly inside/near the CPU chip?",
    options: ["Secondary Storage", "Cache Memory & Registers", "Optical Disc", "RAM"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 13,
    question: "Which of the following is strictly an Input Device?",
    options: ["Monitor", "Plotter", "Scanner", "Speaker"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 14,
    question: "Which input device is commonly used to read printed barcodes on consumer products?",
    options: ["OMR", "OCR", "Barcode Reader (BCR)", "MICR"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 15,
    question: "Which input technology is widely used by banks to process paper bank cheques?",
    options: ["MICR (Magnetic Ink Character Recognition)", "OCR", "OMR", "Bar Code"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 16,
    question: "Which input device is used to evaluate multiple-choice objective answer sheets in exams?",
    options: ["OMR (Optical Mark Reader)", "OCR", "MICR", "Digitizer"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 17,
    question: "Which input technology converts printed or handwritten text images into editable machine text?",
    options: ["OCR (Optical Character Recognition)", "OMR", "MICR", "Plotter"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 18,
    question: "Which output device is used for printing large architectural blueprints and high-precision engineering drawings?",
    options: ["Dot Matrix Printer", "Laser Printer", "Plotter", "Inkjet Printer"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 19,
    question: "Which printer type strikes inked ribbons against paper (Impact Printer)?",
    options: ["Laser Printer", "Dot Matrix Printer", "Inkjet Printer", "Thermal Printer"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 20,
    question: "What is the standard standard unit used to measure the print resolution and output quality of a printer?",
    options: ["PPM (Pages Per Minute)", "DPI (Dots Per Inch)", "CPS (Characters Per Second)", "LPM"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 21,
    question: "What is printer printing speed measured in?",
    options: ["DPI", "PPM (Pages Per Minute)", "BPS", "RPM"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 22,
    question: "What is the standard storage capacity of a single-layer standard CD-ROM?",
    options: ["1.44 MB", "700 MB", "4.7 GB", "25 GB"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 23,
    question: "What is the standard storage capacity of a single-layer standard DVD?",
    options: ["700 MB", "4.7 GB", "8.5 GB", "25 GB"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 24,
    question: "What is the standard storage capacity of a single-layer Blu-ray Disc (BD)?",
    options: ["4.7 GB", "8.5 GB", "25 GB", "50 GB"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 25,
    question: "What was the storage capacity of a standard 3.5-inch floppy disk?",
    options: ["1.44 MB", "720 KB", "2.88 MB", "10 MB"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },

  // --- PART 2: GENERATIONS, ARCHITECTURE & SOFTWARE (26-50) ---
  {
    id: 26,
    question: "Which electronic component was used in First Generation computers (1940-1956)?",
    options: ["Transistors", "Vacuum Tubes", "Integrated Circuits (ICs)", "Microprocessors"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 27,
    question: "Which electronic component replaced vacuum tubes in Second Generation computers (1956-1963)?",
    options: ["Transistors", "Integrated Circuits", "Microprocessors", "VLSI"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 28,
    question: "Which technology was introduced in Third Generation computers (1964-1971)?",
    options: ["Vacuum Tubes", "Integrated Circuits (ICs)", "Transistors", "Artificial Intelligence"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 29,
    question: "Fourth Generation computers are powered by which key technology?",
    options: ["Microprocessors (VLSI & ULSI chips)", "Vacuum Tubes", "Transistors", "Magnetic Drums"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 30,
    question: "Fifth Generation computing systems focus primarily on which technology?",
    options: ["Artificial Intelligence (AI) & Quantum Computing", "Vacuum Tubes", "Mechanical Relays", "Transistors"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 31,
    question: "Who is widely recognized as the 'Father of the Computer'?",
    options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Blaise Pascal"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 32,
    question: "Who is considered the world's first computer programmer for writing algorithms for the Analytical Engine?",
    options: ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Charles Babbage"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 33,
    question: "What is the core low-level program that runs during system bootup called?",
    options: ["BIOS (Basic Input/Output System)", "Compiler", "Device Driver", "Interpreter"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 34,
    question: "What is the initial hardware diagnostic test performed by BIOS during computer startup called?",
    options: ["POST (Power-On Self-Test)", "Bootstrapping", "ScanDisk", "Warm Boot"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 35,
    question: "What is the process of restarting a computer that is already running called?",
    options: ["Cold Booting", "Warm Booting (Soft Boot)", "Hard Booting", "POST"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 36,
    question: "What is the process of powering on a computer from a completely shut down state called?",
    options: ["Warm Booting", "Cold Booting", "Rebooting", "Sleep Mode"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 37,
    question: "Which of the following is System Software that manages hardware and software resources?",
    options: ["MS Word", "Operating System (e.g., Windows, Linux)", "Adobe Photoshop", "Google Chrome"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 38,
    question: "Which software translates an entire high-level source code program into machine code at once before execution?",
    options: ["Compiler", "Interpreter", "Assembler", "Linker"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 39,
    question: "Which software translates high-level code line-by-line during runtime?",
    options: ["Interpreter", "Compiler", "Loader", "Assembler"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 40,
    question: "Which software translates assembly language mnemonics into machine language code?",
    options: ["Assembler", "Compiler", "Interpreter", "Debugger"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 41,
    question: "Which type of software is designed to perform specific user tasks like word processing, spreadsheets, or games?",
    options: ["System Software", "Application Software", "Firmware", "Device Drivers"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 42,
    question: "Which software category includes antivirus utilities, disk defragmenters, and backup tools?",
    options: ["Utility Software", "Operating Systems", "Application Suites", "Firmware"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 43,
    question: "What is software whose source code is freely available for anyone to inspect, modify, and enhance called?",
    options: ["Open Source Software (e.g., Linux)", "Proprietary Software", "Freeware", "Shareware"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 44,
    question: "What is software provided free of charge for a trial period before requiring payment called?",
    options: ["Shareware", "Freeware", "Open Source", "Public Domain"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 45,
    question: "What is the full form of GUI?",
    options: ["Graphical User Interface", "Global User Interaction", "General Utility Interface", "Graphic Universal Index"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 46,
    question: "What is the full form of CLI?",
    options: ["Command Line Interface", "Common Language Interaction", "Central Logic Interface", "Computer Layout Index"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 47,
    question: "Which character encoding scheme represents characters using 7 bits (up to 128 characters)?",
    options: ["ASCII (American Standard Code for Information Interchange)", "Unicode", "EBCDIC", "BCD"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 48,
    question: "Which universal character encoding standard supports text and characters for almost all languages in the world?",
    options: ["Unicode (e.g., UTF-8 / UTF-16)", "ASCII", "ANSI", "EBCDIC"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 49,
    question: "What is the base of the Binary number system?",
    options: ["Base 2 (digits 0 and 1)", "Base 8", "Base 10", "Base 16"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 50,
    question: "What is the base of the Hexadecimal number system?",
    options: ["Base 16 (digits 0-9 and letters A-F)", "Base 8", "Base 10", "Base 2"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },

  // --- PART 3: WINDOWS OPERATING SYSTEM BASICS (51-75) ---
  {
    id: 51,
    question: "What is the primary main background screen displayed after logging into Windows called?",
    options: ["Desktop", "Taskbar", "Control Panel", "File Explorer"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 52,
    question: "What is the horizontal bar located at the bottom of the Windows desktop screen by default called?",
    options: ["Taskbar", "Title Bar", "Menu Bar", "Status Bar"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 53,
    question: "Which area on the right end of the Windows Taskbar displays the clock, volume icon, and background notifications?",
    options: ["System Tray (Notification Area)", "Quick Launch", "Start Menu", "Pinned Apps"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 54,
    question: "What is the temporary holding area in Windows where deleted files and folders are stored before permanent erasure?",
    options: ["Recycle Bin", "Spam Folder", "Temp Storage", "Trash Master"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 55,
    question: "Which shortcut key combination permanently deletes a file or folder without sending it to the Recycle Bin?",
    options: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 56,
    question: "What is the shortcut key to open the Windows Start Menu?",
    options: ["Windows Key (or Ctrl + Esc)", "Alt + Esc", "Ctrl + Tab", "Shift + Esc"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 57,
    question: "What is the shortcut key to open File Explorer in Windows?",
    options: ["Windows Key + E", "Windows Key + F", "Ctrl + E", "Alt + E"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 58,
    question: "What is the shortcut key to open the Run Dialog Box in Windows?",
    options: ["Windows Key + R", "Ctrl + R", "Alt + R", "Windows Key + X"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 59,
    question: "What is the shortcut key to Lock your Windows computer immediately?",
    options: ["Windows Key + L", "Ctrl + L", "Alt + L", "Windows Key + K"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 60,
    question: "What is the shortcut key to Minimize all open windows and show the Desktop directly?",
    options: ["Windows Key + D (or Windows Key + M)", "Ctrl + D", "Alt + D", "Shift + D"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 61,
    question: "What is the shortcut key to switch or toggle between open applications in Windows?",
    options: ["Alt + Tab", "Ctrl + Tab", "Windows Key + Tab", "Both A and C"],
    correctAnswer: 3,
    category: "Computer Fundamentals"
  },
  {
    id: 62,
    question: "What is the shortcut key to open Task View (Virtual Desktops) in Windows 10/11?",
    options: ["Windows Key + Tab", "Alt + Tab", "Ctrl + Tab", "Windows Key + V"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 63,
    question: "What is the shortcut key to open the Windows Task Manager directly?",
    options: ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Windows Key + X", "Alt + F4"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 64,
    question: "What is the shortcut key to close the currently active application window?",
    options: ["Alt + F4", "Ctrl + F4", "Ctrl + W", "Alt + W"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 65,
    question: "What is the shortcut key to open the Windows Settings app?",
    options: ["Windows Key + I", "Windows Key + S", "Ctrl + I", "Alt + I"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 66,
    question: "What is the shortcut key to open Windows Search?",
    options: ["Windows Key + S", "Windows Key + Q", "Both A and B", "Ctrl + F"],
    correctAnswer: 2,
    category: "Computer Fundamentals"
  },
  {
    id: 67,
    question: "What is the shortcut key to open Clipboard History in Windows 10/11?",
    options: ["Windows Key + V", "Ctrl + V", "Alt + V", "Shift + V"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 68,
    question: "What is the shortcut key to capture a customizable screen snip using Snipping Tool in Windows?",
    options: ["Windows Key + Shift + S", "PrtScn", "Alt + PrtScn", "Ctrl + Shift + S"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 69,
    question: "Which key combination captures an image of ONLY the currently active window to the clipboard?",
    options: ["Alt + Print Screen", "Print Screen", "Windows Key + Print Screen", "Ctrl + Print Screen"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 70,
    question: "Which key combination captures the entire screen and saves it automatically to the Pictures -> Screenshots folder?",
    options: ["Windows Key + Print Screen", "Print Screen", "Alt + Print Screen", "Ctrl + Shift + S"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 71,
    question: "What is the shortcut key to Rename a selected file or folder in Windows?",
    options: ["F2", "F3", "F4", "F6"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 72,
    question: "What is the shortcut key to create a New Folder in File Explorer?",
    options: ["Ctrl + Shift + N", "Ctrl + N", "Alt + Shift + N", "F10"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 73,
    question: "What is the shortcut key to open the Properties dialog of a selected file or folder?",
    options: ["Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Alt + P"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 74,
    question: "What is the shortcut key to Refresh the active desktop or file explorer window?",
    options: ["F5", "F2", "F7", "F9"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 75,
    question: "Which centralized control module in Windows allows users to adjust system hardware settings, uninstall programs, and configure devices?",
    options: ["Control Panel", "Task Manager", "File Explorer", "Device Manager"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },

  // --- PART 4: FILE SYSTEMS, UTILITIES & SECURITY (76-100) ---
  {
    id: 76,
    question: "Which Windows utility is used to manage and configure all connected hardware hardware devices and update drivers?",
    options: ["Device Manager", "Task Manager", "Disk Management", "Event Viewer"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 77,
    question: "Which tool in Windows shows running processes, CPU usage, memory utilization, and startup applications?",
    options: ["Task Manager", "Control Panel", "Resource Monitor", "Device Manager"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 78,
    question: "What command is typed in the Run dialog to launch the Microsoft Management Console for Disk Partitioning?",
    options: ["diskmgmt.msc", "devmgmt.msc", "taskmgr", "regedit"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 79,
    question: "What command is typed in the Run dialog to open the Windows Registry Editor?",
    options: ["regedit", "registry", "regconfig", "mscedit"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 80,
    question: "What command is typed in the Run dialog to open the Windows System Information tool?",
    options: ["msinfo32", "sysinfo", "wininfo", "dxdiag"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 81,
    question: "What is the default modern file system used by Windows OS for hard drives and SSDs?",
    options: ["NTFS (New Technology File System)", "FAT32", "exFAT", "ext4"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 82,
    question: "What is the maximum individual single file size limit supported by the older FAT32 file system?",
    options: ["2 GB", "4 GB", "8 GB", "16 GB"],
    correctAnswer: 1,
    category: "Computer Fundamentals"
  },
  {
    id: 83,
    question: "Which file system is specifically optimized for cross-platform flash drives and SD cards without the 4GB file size limit?",
    options: ["exFAT", "FAT16", "FAT32", "NTFS"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 84,
    question: "Which character is strictly FORBIDDEN in Windows file and folder names?",
    options: ["/ \\ : * ? \" < > |", "@ $ %", "! # &", "( ) [ ]"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 85,
    question: "Which built-in Windows utility frees up disk space by deleting temporary files, system caches, and emptying the Recycle Bin?",
    options: ["Disk Cleanup", "Disk Defragmenter", "ScanDisk", "System Restore"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 86,
    question: "Which utility reorganizes fragmented files on mechanical hard drives to improve file access speed?",
    options: ["Defragment and Optimize Drives", "Disk Cleanup", "Check Disk", "Format Utility"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 87,
    question: "Which Windows feature allows you to revert system files, registry keys, and installed drivers back to a previous point in time?",
    options: ["System Restore Point", "Backup and Restore", "File History", "Reset This PC"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 88,
    question: "What is the built-in antivirus and security suite in Windows 10/11 called?",
    options: ["Microsoft Defender Antivirus (Windows Security)", "Windows Firewall", "BitLocker", "Security Center"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 89,
    question: "Which Windows security tool monitors and filters incoming and outgoing network traffic to block unauthorized network access?",
    options: ["Windows Defender Firewall", "Device Guard", "Credential Manager", "BitLocker"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 90,
    question: "Which Windows feature provides full-volume drive encryption to protect sensitive data on stolen or lost laptops?",
    options: ["BitLocker Drive Encryption", "File Lock", "Secure Boot", "EFS"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 91,
    question: "Which Windows special startup diagnostic mode starts the OS with only essential drivers and services to troubleshoot errors?",
    options: ["Safe Mode", "Debugging Mode", "Clean Boot", "Recovery Mode"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 92,
    question: "What is the standard file extension used for Windows Executable Program files?",
    options: [".exe", ".bat", ".com", ".msi"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 93,
    question: "What is the file extension used for simple plain text files created in Notepad?",
    options: [".txt", ".rtf", ".doc", ".pdf"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 94,
    question: "What is the default file extension for compressed archive folders in Windows?",
    options: [".zip", ".rar", ".7z", ".tar"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 95,
    question: "What is the file extension used for Windows Batch command script files?",
    options: [".bat", ".sh", ".cmd", ".ps1"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 96,
    question: "What is the shortcut key in Windows to snap the active window to the left half of the screen?",
    options: ["Windows Key + Left Arrow", "Ctrl + Left Arrow", "Alt + Left Arrow", "Shift + Left Arrow"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 97,
    question: "What is the shortcut key in Windows to snap the active window to the right half of the screen?",
    options: ["Windows Key + Right Arrow", "Ctrl + Right Arrow", "Alt + Right Arrow", "Shift + Right Arrow"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 98,
    question: "What is the shortcut key to Maximize the active window in Windows?",
    options: ["Windows Key + Up Arrow", "Ctrl + Up Arrow", "Alt + Up Arrow", "F11"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 99,
    question: "What is the shortcut key to open the Windows Quick Link (Power User) Menu?",
    options: ["Windows Key + X", "Windows Key + P", "Ctrl + Shift + Esc", "Alt + X"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  },
  {
    id: 100,
    question: "What is the shortcut key to open the Project (Display Screen Mirroring / Dual Monitor) menu in Windows?",
    options: ["Windows Key + P", "Windows Key + D", "Alt + P", "Ctrl + P"],
    correctAnswer: 0,
    category: "Computer Fundamentals"
  }
];