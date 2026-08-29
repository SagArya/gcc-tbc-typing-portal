// src/data/mcq/english/msWord.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const MS_WORD_ENGLISH_MCQ: MCQQuestion[] = [
  // --- PART 1: BASICS, SHORTCUTS & FORMATTING (1-50) ---
  {
    id: 1,
    question: "What is the default file extension for documents created in MS Word 2013 and later versions?",
    options: [".doc", ".docx", ".dotx", ".txt"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 2,
    question: "Which shortcut key is used to save an existing document in MS Word?",
    options: ["Ctrl + S", "Ctrl + A", "Ctrl + V", "Ctrl + P"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 3,
    question: "Which shortcut key is used to open the 'Save As' dialog box?",
    options: ["F12", "Shift + F12", "Ctrl + F12", "Alt + F12"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 4,
    question: "What is the shortcut key for 'Center Alignment' of text in MS Word?",
    options: ["Ctrl + C", "Ctrl + E", "Ctrl + J", "Ctrl + L"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 5,
    question: "Which shortcut key is used for 'Justify Alignment' in MS Word?",
    options: ["Ctrl + J", "Ctrl + R", "Ctrl + E", "Ctrl + Shift + J"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 6,
    question: "Which key is pressed to check Spelling and Grammar in MS Word?",
    options: ["F5", "F7", "F9", "F11"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 7,
    question: "What is the shortcut key to open the 'Find and Replace' dialog box?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + R", "Ctrl + G"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 8,
    question: "Which feature in MS Word is used to send the same letter to multiple recipients?",
    options: ["Macro", "Mail Merge", "Template", "Hyperlink"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 9,
    question: "What is the default orientation of a page in MS Word?",
    options: ["Landscape", "Portrait", "Gutter", "Custom"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 10,
    question: "What is the maximum zoom percentage available in MS Word?",
    options: ["100%", "200%", "400%", "500%"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 11,
    question: "What is the minimum zoom percentage available in MS Word?",
    options: ["10%", "20%", "5%", "1%"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 12,
    question: "Which shortcut key is used for 'Subscript' formatting (e.g., H2O)?",
    options: ["Ctrl + =", "Ctrl + Shift + =", "Alt + Shift + =", "Ctrl + Alt + ="],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 13,
    question: "Which shortcut key is used for 'Superscript' formatting (e.g., X2)?",
    options: ["Ctrl + =", "Ctrl + Shift + =", "Alt + Ctrl + =", "Shift + F3"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 14,
    question: "Which shortcut key is used to change the case of selected text (Toggle / Upper / Lower)?",
    options: ["Ctrl + F3", "Shift + F3", "Alt + F3", "Ctrl + Shift + C"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 15,
    question: "Which shortcut key is used to insert a Page Break in MS Word?",
    options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Ctrl + Space"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 16,
    question: "Which key combination is used to insert a Line Break without starting a new paragraph?",
    options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Tab"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 17,
    question: "What is the shortcut key to increase the font size of selected text by one point?",
    options: ["Ctrl + ]", "Ctrl + [", "Ctrl + Shift + >", "Alt + ]"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 18,
    question: "What is the shortcut key to decrease the font size of selected text by one point?",
    options: ["Ctrl + [", "Ctrl + ]", "Ctrl + Shift + <", "Alt + ["],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 19,
    question: "In which tab is the 'Header and Footer' option located in MS Word?",
    options: ["Home", "Insert", "Page Layout", "References"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 20,
    question: "In which tab is the 'Watermark' option located in MS Word (2016/2019)?",
    options: ["Home", "Design", "View", "Review"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 21,
    question: "What is the extra space added to the binding side of a page called?",
    options: ["Header Margin", "Footer Margin", "Gutter Margin", "Mirror Margin"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 22,
    question: "Which shortcut key is used to Copy Formatting using Format Painter?",
    options: ["Ctrl + C", "Ctrl + Shift + C", "Alt + Shift + C", "Ctrl + Alt + C"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 23,
    question: "Which shortcut key is used to Paste Formatting copied by Format Painter?",
    options: ["Ctrl + V", "Ctrl + Shift + V", "Alt + Shift + V", "Ctrl + Alt + V"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 24,
    question: "A wavy red line under a word in MS Word indicates which error?",
    options: ["Grammar Error", "Spelling Error", "Formatting Error", "Contextual Error"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 25,
    question: "A wavy green or blue line under a word/sentence indicates which error?",
    options: ["Spelling Error", "Grammatical / Syntax Error", "Hyperlink", "Font Missing"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 26,
    question: "Which shortcut key is used to Insert a Hyperlink in MS Word?",
    options: ["Ctrl + H", "Ctrl + K", "Ctrl + L", "Ctrl + Shift + K"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 27,
    question: "What is the shortcut key to create a hanging indent?",
    options: ["Ctrl + T", "Ctrl + M", "Ctrl + H", "Ctrl + Shift + T"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 28,
    question: "What is the shortcut key to indent a paragraph from the left margin?",
    options: ["Ctrl + M", "Ctrl + I", "Ctrl + Tab", "Ctrl + Shift + M"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 29,
    question: "What is the shortcut key to remove paragraph indentation in MS Word?",
    options: ["Ctrl + Shift + M", "Ctrl + Q", "Ctrl + Shift + T", "Alt + Backspace"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 30,
    question: "Which key is used to open the 'Thesaurus' pane for finding synonyms?",
    options: ["Shift + F7", "Ctrl + F7", "Alt + F7", "F7"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 31,
    question: "Which option is used to display the first letter of a paragraph in a large capital font?",
    options: ["WordArt", "Drop Cap", "Clip Art", "SmartArt"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 32,
    question: "How many lines does a Drop Cap drop by default in MS Word?",
    options: ["2 lines", "3 lines", "4 lines", "5 lines"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 33,
    question: "What is the maximum number of lines a Drop Cap can be set to drop?",
    options: ["5", "10", "12", "15"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 34,
    question: "What is the shortcut key to Clear All Formatting from selected text?",
    options: ["Ctrl + Spacebar", "Ctrl + Shift + N", "Ctrl + Del", "Ctrl + Alt + C"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 35,
    question: "What is the shortcut key to open the Font Dialog Box in MS Word?",
    options: ["Ctrl + D", "Ctrl + F", "Ctrl + Shift + F", "Both A and C"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 36,
    question: "Which of the following is NOT a valid Font Style in MS Word?",
    options: ["Bold", "Italic", "Regular", "Superscript"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 37,
    question: "What is the default line spacing in MS Word 2016/2019?",
    options: ["1.0", "1.08", "1.15", "1.5"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 38,
    question: "What is the shortcut key for Single Line Spacing (1.0)?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 5", "Alt + 1"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 39,
    question: "What is the shortcut key for Double Line Spacing (2.0)?",
    options: ["Ctrl + 2", "Ctrl + D", "Ctrl + Shift + 2", "Alt + 2"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 40,
    question: "What is the shortcut key for 1.5 Line Spacing?",
    options: ["Ctrl + 5", "Ctrl + 1.5", "Shift + F5", "Alt + 5"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 41,
    question: "Which view in MS Word displays the document exactly as it will appear when printed?",
    options: ["Draft View", "Outline View", "Print Layout View", "Web Layout View"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 42,
    question: "Which feature is used to record a sequence of actions/keystrokes for automated execution?",
    options: ["Macro", "Template", "Mail Merge", "AutoText"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 43,
    question: "Which programming language is used behind MS Word Macros?",
    options: ["C++", "Python", "VBA (Visual Basic for Applications)", "Java"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 44,
    question: "In MS Word, where are Endnotes placed by default?",
    options: [
      "At the bottom of each page",
      "At the end of the document",
      "At the end of each section",
      "In the header area"
    ],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 45,
    question: "In MS Word, where are Footnotes placed by default?",
    options: [
      "At the bottom of the current page",
      "At the end of the document",
      "In the footer area",
      "At the beginning of the chapter"
    ],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 46,
    question: "What is the shortcut key to insert a Footnote in MS Word?",
    options: ["Alt + Ctrl + F", "Alt + Shift + F", "Ctrl + F", "Alt + F"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 47,
    question: "What is the shortcut key to insert an Endnote in MS Word?",
    options: ["Alt + Ctrl + D", "Alt + Shift + D", "Ctrl + E", "Alt + E"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 48,
    question: "Which button allows you to divide the document window into two separate panes?",
    options: ["Split Window", "Divide View", "Dual Screen", "Switch Window"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 49,
    question: "What is the maximum number of columns that can be inserted in a table in MS Word?",
    options: ["32", "45", "63", "100"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 50,
    question: "Which shortcut key is used to move to the next cell in a table?",
    options: ["Tab", "Enter", "Right Arrow", "Shift + Tab"],
    correctAnswer: 0,
    category: "MS Word"
  },

  // --- PART 2: TABLES, GRAPHICS, STYLES & ADVANCED (51-100) ---
  {
    id: 51,
    question: "Which shortcut key is used to move to the previous cell in a table in MS Word?",
    options: ["Shift + Tab", "Ctrl + Tab", "Alt + Tab", "Shift + Left Arrow"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 52,
    question: "Which key is used to insert a new row at the very end of a table in MS Word?",
    options: ["Enter", "Tab (in the last cell)", "Shift + Enter", "Ctrl + Enter"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 53,
    question: "What is the smallest and largest font size available in the Font Size dropdown menu on the Home ribbon?",
    options: ["6 and 72", "8 and 72", "8 and 96", "10 and 72"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 54,
    question: "What is the absolute maximum font size you can manually enter for text in MS Word?",
    options: ["500 pt", "1000 pt", "1638 pt", "2048 pt"],
    correctAnswer: 2,
    category: "MS Word"
  },
  {
    id: 55,
    question: "What is the minimum font size you can manually enter in MS Word?",
    options: ["0.5 pt", "1 pt", "2 pt", "4 pt"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 56,
    question: "Which shortcut key is used to align selected text to the Left Margin?",
    options: ["Ctrl + L", "Ctrl + Shift + L", "Alt + L", "Ctrl + Shift + Left"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 57,
    question: "Which shortcut key is used to align selected text to the Right Margin?",
    options: ["Ctrl + R", "Ctrl + Shift + R", "Alt + R", "Ctrl + Shift + Right"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 58,
    question: "Which feature automatically corrects common typing errors, misspelled words, and grammar mistakes as you type?",
    options: ["AutoCorrect", "AutoFormat", "SmartArt", "AutoText"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 59,
    question: "What is the shortcut key to insert the Current Date in an MS Word document?",
    options: ["Shift + Alt + D", "Ctrl + Shift + D", "Alt + Ctrl + D", "F5"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 60,
    question: "What is the shortcut key to insert the Current Time in an MS Word document?",
    options: ["Shift + Alt + T", "Ctrl + Shift + T", "Alt + Ctrl + T", "F9"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 61,
    question: "Which command in MS Word allows you to revert the last action performed?",
    options: ["Undo (Ctrl + Z)", "Redo (Ctrl + Y)", "Repeat (Ctrl + Y)", "Paste (Ctrl + V)"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 62,
    question: "Which shortcut key is used to Redo or Repeat the last undone action in MS Word?",
    options: ["Ctrl + Y", "Ctrl + R", "Ctrl + Shift + Z", "Both A and C"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 63,
    question: "Which shortcut key is used to select the entire document in MS Word?",
    options: ["Ctrl + A", "Ctrl + E", "Ctrl + Shift + A", "Alt + A"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 64,
    question: "What happens when you double-click on a word in MS Word?",
    options: ["It selects the whole paragraph", "It selects the entire word", "It opens the dictionary", "It deletes the word"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 65,
    question: "What happens when you triple-click anywhere inside a paragraph in MS Word?",
    options: ["It selects the entire paragraph", "It selects the single sentence", "It selects the entire document", "It highlights the line"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 66,
    question: "Which key combination selects text from the current cursor position to the beginning of the current line?",
    options: ["Shift + Home", "Ctrl + Home", "Alt + Home", "Shift + Up Arrow"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 67,
    question: "Which key combination selects text from the current cursor position to the end of the current line?",
    options: ["Shift + End", "Ctrl + End", "Alt + End", "Shift + Down Arrow"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 68,
    question: "Which shortcut key moves the cursor directly to the very beginning of the document?",
    options: ["Ctrl + Home", "Home", "Alt + Home", "Shift + Home"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 69,
    question: "Which shortcut key moves the cursor directly to the very end of the document?",
    options: ["Ctrl + End", "End", "Alt + End", "Shift + End"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 70,
    question: "Which feature is used to keep track of changes, edits, and comments made to a document by multiple reviewers?",
    options: ["Track Changes", "Document Compare", "Version History", "Protect Document"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 71,
    question: "What is the shortcut key to toggle 'Track Changes' on and off in MS Word?",
    options: ["Ctrl + Shift + E", "Ctrl + Alt + E", "Ctrl + Shift + T", "Alt + R"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 72,
    question: "In which tab is the 'Track Changes' and 'Compare Documents' feature located?",
    options: ["Review", "View", "References", "Insert"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 73,
    question: "Which option allows you to combine multiple cells into a single larger cell in a table?",
    options: ["Split Cells", "Merge Cells", "Combine Cells", "Unify Cells"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 74,
    question: "Which option is used to divide a single table cell into multiple rows or columns?",
    options: ["Split Cells", "Break Cell", "Divide Cell", "Distribute Rows"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 75,
    question: "What is the shortcut key to open the 'Go To' tab in the Find and Replace dialog?",
    options: ["Ctrl + G", "F5", "Ctrl + Shift + G", "Both A and B"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 76,
    question: "Which tab contains options for creating a Table of Contents in MS Word?",
    options: ["References", "Insert", "Page Layout", "Review"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 77,
    question: "Which feature is used to create pre-formatted, decorative text effects like 3D shapes, outlines, and glows?",
    options: ["WordArt", "SmartArt", "ClipArt", "TextBox"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 78,
    question: "Which feature is used to visually represent hierarchical diagrams, process workflows, and organizational charts?",
    options: ["SmartArt", "WordArt", "Charts", "Shapes"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 79,
    question: "Which shortcut key is used to insert a Copyright symbol (©) in MS Word?",
    options: ["Alt + Ctrl + C", "Ctrl + Shift + C", "Alt + Shift + C", "Ctrl + C"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 80,
    question: "Which shortcut key is used to insert a Registered Trademark symbol (®) in MS Word?",
    options: ["Alt + Ctrl + R", "Ctrl + Shift + R", "Alt + Shift + R", "Ctrl + R"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 81,
    question: "Which shortcut key is used to insert a Trademark symbol (™) in MS Word?",
    options: ["Alt + Ctrl + T", "Ctrl + Shift + T", "Alt + Shift + T", "Ctrl + T"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 82,
    question: "What is the default tab stop position in MS Word when pressing the Tab key?",
    options: ["0.25 inch", "0.5 inch", "0.75 inch", "1.0 inch"],
    correctAnswer: 1,
    category: "MS Word"
  },
  {
    id: 83,
    question: "Which tab stop type aligns numbers along a decimal point in MS Word?",
    options: ["Decimal Tab", "Bar Tab", "Center Tab", "Right Tab"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 84,
    question: "Which option allows text to flow smoothly around an inserted picture or object?",
    options: ["Wrap Text", "Align Text", "Position Image", "Format Shape"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 85,
    question: "Which wrap text option places an image behind the text so the text flows directly over it?",
    options: ["Behind Text", "In Front of Text", "Through", "Tight"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 86,
    question: "In MS Word, which section break type starts a new section on the same page?",
    options: ["Continuous", "Next Page", "Even Page", "Odd Page"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 87,
    question: "In MS Word, which section break type begins the next section on the immediate next page?",
    options: ["Next Page", "Continuous", "Even Page", "Odd Page"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 88,
    question: "Which shortcut key is used to display or hide non-printing characters (such as paragraph marks ¶ and spaces)?",
    options: ["Ctrl + Shift + 8 (Ctrl + *)", "Ctrl + Shift + P", "Ctrl + Alt + 8", "Alt + Shift + P"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 89,
    question: "Which shortcut key is used to open the Print Preview window in MS Word?",
    options: ["Ctrl + F2", "Ctrl + P", "Alt + Ctrl + I", "All of the above"],
    correctAnswer: 3,
    category: "MS Word"
  },
  {
    id: 90,
    question: "Which key combination deletes one entire word to the left of the cursor?",
    options: ["Ctrl + Backspace", "Backspace", "Ctrl + Delete", "Shift + Backspace"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 91,
    question: "Which key combination deletes one entire word to the right of the cursor?",
    options: ["Ctrl + Delete", "Delete", "Shift + Delete", "Alt + Delete"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 92,
    question: "What is the shortcut key to apply the 'Normal' style to selected text?",
    options: ["Ctrl + Shift + N", "Ctrl + Alt + N", "Ctrl + N", "Shift + N"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 93,
    question: "What is the shortcut key to apply Heading 1 style in MS Word?",
    options: ["Alt + Ctrl + 1", "Ctrl + 1", "Shift + Ctrl + 1", "Alt + 1"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 94,
    question: "What is the shortcut key to apply Heading 2 style in MS Word?",
    options: ["Alt + Ctrl + 2", "Ctrl + 2", "Shift + Ctrl + 2", "Alt + 2"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 95,
    question: "What is the shortcut key to apply Heading 3 style in MS Word?",
    options: ["Alt + Ctrl + 3", "Ctrl + 3", "Shift + Ctrl + 3", "Alt + 3"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 96,
    question: "Which feature in MS Word allows you to insert pre-built document parts, headers, footers, and text blocks?",
    options: ["Quick Parts", "WordArt", "Mail Merge", "Macro Library"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 97,
    question: "What is the file extension used for MS Word Templates?",
    options: [".dotx", ".docx", ".temx", ".docm"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 98,
    question: "What is the file extension used for MS Word Macro-Enabled Documents?",
    options: [".docm", ".dotm", ".docx", ".docb"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 99,
    question: "Which option is used to display two pages side-by-side on the screen in View tab?",
    options: ["Multiple Pages", "Side by Side View", "Split Screen", "Two Pages Layout"],
    correctAnswer: 0,
    category: "MS Word"
  },
  {
    id: 100,
    question: "Which shortcut key is used to close the active document in MS Word without closing the entire program?",
    options: ["Ctrl + W", "Ctrl + F4", "Alt + F4", "Both A and B"],
    correctAnswer: 3,
    category: "MS Word"
  }
];