// src/data/mcq/english/msExcel.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const MS_EXCEL_ENGLISH_MCQ: MCQQuestion[] = [
  // --- PART 1: BASICS & CELL ARCHITECTURE (1-25) ---
  {
    id: 1,
    question: "What is the default file extension for an MS Excel 2013/2016/2019 workbook?",
    options: [".xls", ".xlsx", ".xlsm", ".xltx"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 2,
    question: "What is the intersection of a row and a column in MS Excel called?",
    options: ["Block", "Cell", "Grid", "Box"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 3,
    question: "How are columns identified in an MS Excel worksheet?",
    options: ["Numbers (1, 2, 3...)", "Letters (A, B, C...)", "Roman Numerals", "Special Characters"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 4,
    question: "How are rows identified in an MS Excel worksheet?",
    options: ["Letters (A, B, C...)", "Numbers (1, 2, 3...)", "Alphanumeric codes", "Symbols"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 5,
    question: "What is the total number of rows in an MS Excel worksheet (2007 and later)?",
    options: ["65,536", "1,048,576", "524,288", "10,48,576"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 6,
    question: "What is the total number of columns in an MS Excel worksheet (2007 and later)?",
    options: ["256", "1,024", "16,384", "65,536"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 7,
    question: "What is the name of the last column in an MS Excel worksheet?",
    options: ["XFD", "ZZZ", "XFC", "AZD"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 8,
    question: "Which component displays the address of the currently active cell in MS Excel?",
    options: ["Formula Bar", "Name Box", "Status Bar", "Title Bar"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 9,
    question: "Which component displays the content or formula entered into the active cell?",
    options: ["Name Box", "Formula Bar", "Ribbon", "Quick Access Toolbar"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 10,
    question: "What is the default horizontal alignment of text entries in an Excel cell?",
    options: ["Right", "Center", "Left", "Justified"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 11,
    question: "What is the default horizontal alignment of numeric numbers in an Excel cell?",
    options: ["Left", "Center", "Right", "Bottom"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 12,
    question: "What is the default alignment of boolean values (TRUE/FALSE) in Excel?",
    options: ["Left", "Center", "Right", "Justify"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 13,
    question: "Every formula and function in MS Excel must begin with which character?",
    options: ["+", "=", "@", "#"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 14,
    question: "Which shortcut key is used to edit the active cell in MS Excel?",
    options: ["F2", "F4", "F7", "F12"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 15,
    question: "Which shortcut key is used to insert a new worksheet in MS Excel?",
    options: ["Shift + F11", "Alt + Shift + F1", "Ctrl + N", "Both A and B"],
    correctAnswer: 3,
    category: "MS Excel"
  },
  {
    id: 16,
    question: "What is the shortcut key to select the entire worksheet in MS Excel?",
    options: ["Ctrl + A", "Ctrl + Shift + Spacebar", "Both A and B", "Ctrl + Spacebar"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 17,
    question: "Which shortcut key is used to select the entire active column?",
    options: ["Ctrl + Spacebar", "Shift + Spacebar", "Alt + Spacebar", "Ctrl + Shift + C"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 18,
    question: "Which shortcut key is used to select the entire active row?",
    options: ["Ctrl + Spacebar", "Shift + Spacebar", "Alt + Spacebar", "Ctrl + Shift + R"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 19,
    question: "Which symbol is used to represent an absolute cell reference in MS Excel?",
    options: ["&", "#", "$", "%"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 20,
    question: "Which function key toggles between Relative, Absolute, and Mixed cell referencing?",
    options: ["F2", "F3", "F4", "F9"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 21,
    question: "What type of cell reference is `$A$1` in MS Excel?",
    options: ["Relative Reference", "Absolute Reference", "Mixed Reference", "Circular Reference"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 22,
    question: "What type of cell reference is `A$1` or `$A1` in MS Excel?",
    options: ["Absolute Reference", "Relative Reference", "Mixed Reference", "3D Reference"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 23,
    question: "Which error is displayed when a column is not wide enough to display numeric data?",
    options: ["#VALUE!", "######", "#REF!", "#NAME?"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 24,
    question: "Which error occurs when a formula attempts to divide a number by zero or an empty cell?",
    options: ["#DIV/0!", "#NULL!", "#N/A", "#NUM!"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 25,
    question: "Which error appears when Excel does not recognize text in a formula (e.g., misspelled function name)?",
    options: ["#NAME?", "#VALUE!", "#REF!", "#NULL!"],
    correctAnswer: 0,
    category: "MS Excel"
  },

  // --- PART 2: FORMULAS & MATHEMATICAL/STATISTICAL FUNCTIONS (26-50) ---
  {
    id: 26,
    question: "Which error code indicates that a referenced cell in a formula has been deleted or moved?",
    options: ["#REF!", "#VALUE!", "#NULL!", "#N/A"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 27,
    question: "Which function is used to add all numbers in a specified range of cells?",
    options: ["=ADD()", "=SUM()", "=TOTAL()", "=COUNT()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 28,
    question: "What is the shortcut key for the 'AutoSum' feature in MS Excel?",
    options: ["Alt + =", "Ctrl + =", "Shift + =", "Alt + Shift + S"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 29,
    question: "Which function calculates the arithmetic mean of a range of numbers?",
    options: ["=MEAN()", "=AVERAGE()", "=MEDIAN()", "=AVG()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 30,
    question: "Which function returns the highest/largest value in a given range?",
    options: ["=MAX()", "=LARGE()", "=TOP()", "=HIGHEST()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 31,
    question: "Which function returns the lowest/smallest value in a given range?",
    options: ["=MIN()", "=SMALL()", "=BOTTOM()", "=LEAST()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 32,
    question: "Which function counts only the cells that contain numeric values?",
    options: ["=COUNT()", "=COUNTA()", "=COUNTBLANK()", "=COUNTIF()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 33,
    question: "Which function counts all non-empty cells (numbers, text, symbols, errors)?",
    options: ["=COUNT()", "=COUNTA()", "=COUNTALL()", "=COUNTIF()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 34,
    question: "Which function counts the number of empty/blank cells in a specified range?",
    options: ["=COUNTEMPTY()", "=COUNTBLANK()", "=BLANK()", "=ISBLANK()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 35,
    question: "Which function counts cells that meet a specific criteria or condition?",
    options: ["=COUNTIF()", "=SUMIF()", "=IFCOUNT()", "=CHECKCOUNT()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 36,
    question: "Which function adds only those cells in a range that satisfy a given condition?",
    options: ["=SUMIF()", "=IFSUM()", "=TOTALIF()", "=ADDCITEMS()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 37,
    question: "Which logical function returns TRUE only if all specified conditions are true?",
    options: ["=OR()", "=AND()", "=NOT()", "=IF()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 38,
    question: "Which logical function returns TRUE if at least one of the conditions is true?",
    options: ["=AND()", "=OR()", "=XOR()", "=NOT()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 39,
    question: "Which function returns the current system Date only (without time)?",
    options: ["=NOW()", "=TODAY()", "=DATE()", "=CURRENTDATE()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 40,
    question: "Which function returns the current system Date AND Time?",
    options: ["=TODAY()", "=NOW()", "=DATETIME()", "=TIME()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 41,
    question: "What is the shortcut key to insert the Current Date into a cell in MS Excel?",
    options: ["Ctrl + ; (Semicolon)", "Ctrl + : (Colon)", "Ctrl + Shift + D", "Alt + Shift + D"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 42,
    question: "What is the shortcut key to insert the Current Time into a cell in MS Excel?",
    options: ["Ctrl + Shift + ; (Ctrl + :)", "Ctrl + ;", "Alt + Shift + T", "Ctrl + T"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 43,
    question: "Which function calculates the square root of a given number in Excel?",
    options: ["=SQR()", "=SQRT()", "=ROOT()", "=POWER()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 44,
    question: "Which function calculates the value of a number raised to a specific power?",
    options: ["=POW()", "=POWER()", "=EXP()", "=SQUARE()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 45,
    question: "What is the result of the formula `=5+3*2` in MS Excel?",
    options: ["16", "11", "13", "10"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 46,
    question: "Which function converts all letters in a text string to uppercase?",
    options: ["=UPPER()", "=CAPITAL()", "=UCASE()", "=TOUPPER()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 47,
    question: "Which function converts all letters in a text string to lowercase?",
    options: ["=LOWER()", "=SMALL()", "=LCASE()", "=TOLOWER()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 48,
    question: "Which function capitalizes the first letter of each word in a text string?",
    options: ["=CAPITALIZE()", "=PROPER()", "=TITLE()", "=INITCAP()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 49,
    question: "Which function counts the total number of characters in a text string?",
    options: ["=COUNT()", "=LEN()", "=LENGTH()", "=STRLEN()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 50,
    question: "Which operator is used to concatenate or join two or more text strings in Excel?",
    options: ["+", "&", "*", "@"],
    correctAnswer: 1,
    category: "MS Excel"
  },

  // --- PART 3: FORMATTING, DATA TOOLS & SHORTCUTS (51-75) ---
  {
    id: 51,
    question: "Which function joins several text strings into one single text string?",
    options: ["=JOIN()", "=CONCATENATE()", "=MERGETEXT()", "=COMBINE()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 52,
    question: "Which function removes all irregular leading and trailing spaces from text except single spaces between words?",
    options: ["=CLEAN()", "=TRIM()", "=REMOVE()", "=STRIP()"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 53,
    question: "Which feature combines multiple selected adjacent cells into a single larger cell and centers the text?",
    options: ["Wrap Text", "Merge & Center", "Combine Cells", "Center Across"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 54,
    question: "Which feature makes all text visible within a cell by displaying it on multiple lines?",
    options: ["Merge Cells", "Wrap Text", "Shrink to Fit", "AutoFit"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 55,
    question: "What is the shortcut key to enter a new line within the same Excel cell?",
    options: ["Enter", "Alt + Enter", "Ctrl + Enter", "Shift + Enter"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 56,
    question: "What is the small square box at the bottom-right corner of the active cell called?",
    options: ["Selection Handle", "Fill Handle", "Copy Handle", "Drag Box"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 57,
    question: "Which feature automatically fills a series of numbers, days of the week, or months when dragging the fill handle?",
    options: ["AutoFill", "AutoComplete", "AutoFormat", "Flash Fill"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 58,
    question: "What is the shortcut key for 'Flash Fill' in MS Excel (2013 and later)?",
    options: ["Ctrl + E", "Ctrl + F", "Ctrl + Shift + F", "Alt + E"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 59,
    question: "What is the shortcut key to open the 'Format Cells' dialog box in MS Excel?",
    options: ["Ctrl + 1", "Ctrl + F", "Ctrl + Shift + F", "Alt + 1"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 60,
    question: "What is the shortcut key to apply Currency formatting with two decimal places?",
    options: ["Ctrl + Shift + $ (Ctrl + Shift + 4)", "Ctrl + $", "Alt + Shift + $", "Ctrl + Shift + C"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 61,
    question: "What is the shortcut key to apply Percentage formatting without decimal places?",
    options: ["Ctrl + Shift + % (Ctrl + Shift + 5)", "Ctrl + %", "Alt + %", "Ctrl + Shift + P"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 62,
    question: "What is the shortcut key to create an official Excel Table from a selected dataset?",
    options: ["Ctrl + T", "Ctrl + L", "Both A and B", "Ctrl + Shift + T"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 63,
    question: "What is the shortcut key to toggle AutoFilter on and off on a data table?",
    options: ["Ctrl + Shift + L", "Alt + D + F + F", "Both A and B", "Ctrl + F"],
    correctAnswer: 2,
    category: "MS Excel"
  },
  {
    id: 64,
    question: "Which feature formats cells automatically based on specific rules (e.g., values greater than 100 in green)?",
    options: ["Format Painter", "Conditional Formatting", "Cell Styles", "Data Validation"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 65,
    question: "Which feature restricts the type or value of data users can enter into a cell (e.g., dropdown list or whole numbers)?",
    options: ["Data Validation", "Protect Sheet", "Conditional Formatting", "Goal Seek"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 66,
    question: "Which feature in MS Excel allows you to keep row or column headings visible while scrolling?",
    options: ["Split Panes", "Freeze Panes", "Lock Rows", "Hold Header"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 67,
    question: "In which tab is the 'Freeze Panes' command located?",
    options: ["Home", "View", "Page Layout", "Data"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 68,
    question: "Which feature is used to search for an input value needed to achieve a specific target formula result?",
    options: ["Solver", "Goal Seek", "Scenario Manager", "Data Table"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 69,
    question: "Under which group in the Data tab is 'Goal Seek' found?",
    options: ["Sort & Filter", "What-If Analysis", "Data Tools", "Forecast"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 70,
    question: "Which feature allows you to summarize, analyze, explore, and present summary data dynamically?",
    options: ["PivotTable", "SmartArt", "Macros", "Sparklines"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 71,
    question: "In which tab is the 'PivotTable' command located in MS Excel?",
    options: ["Data", "Insert", "View", "Home"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 72,
    question: "What are mini charts placed inside single individual cells to show visual trends called?",
    options: ["Cell Charts", "Sparklines", "Mini Plots", "Trendlines"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 73,
    question: "What is the shortcut key to automatically insert a Default Chart on a separate chart sheet?",
    options: ["F11", "Alt + F1", "F7", "Shift + F11"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 74,
    question: "What is the shortcut key to insert an embedded default chart directly in the current worksheet?",
    options: ["Alt + F1", "F11", "Ctrl + F1", "Shift + F1"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 75,
    question: "Which chart type in MS Excel is ideal for showing proportions or percentages of a whole?",
    options: ["Bar Chart", "Line Chart", "Pie Chart", "Scatter Chart"],
    correctAnswer: 2,
    category: "MS Excel"
  },

  // --- PART 4: ADVANCED LOOKUP, VIEWS & NAVIGATION (76-100) ---
  {
    id: 76,
    question: "Which chart type is best suited for illustrating trends in data over continuous time intervals?",
    options: ["Pie Chart", "Line Chart", "Radar Chart", "Doughnut Chart"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 77,
    question: "What does the function `=VLOOKUP()` stand for and do?",
    options: ["Vertical Lookup in the leftmost column", "Variable Lookup in rows", "Value Lookup in tables", "Vector Lookup"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 78,
    question: "What does the function `=HLOOKUP()` stand for and do?",
    options: ["Horizontal Lookup in the top row", "Header Lookup", "High-value Lookup", "Height Lookup"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 79,
    question: "In `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`, what value indicates an Exact Match?",
    options: ["TRUE (or 1)", "FALSE (or 0)", "-1", "2"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 80,
    question: "Which function returns the relative position of an item in a range that matches a specified value?",
    options: ["=MATCH()", "=INDEX()", "=FIND()", "=SEARCH()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 81,
    question: "Which function returns the value of a cell at the intersection of a specific row and column in a given range?",
    options: ["=INDEX()", "=MATCH()", "=LOOKUP()", "=OFFSET()"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 82,
    question: "Which shortcut key is used to hide the selected columns in MS Excel?",
    options: ["Ctrl + 0", "Ctrl + 9", "Ctrl + Shift + 0", "Alt + 0"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 83,
    question: "Which shortcut key is used to hide the selected rows in MS Excel?",
    options: ["Ctrl + 9", "Ctrl + 0", "Ctrl + Shift + 9", "Alt + 9"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 84,
    question: "Which shortcut key unhides previously hidden rows in MS Excel?",
    options: ["Ctrl + Shift + ( (Ctrl + Shift + 9)", "Ctrl + Shift + )", "Alt + Shift + 9", "Ctrl + 9"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 85,
    question: "Which shortcut key unhides previously hidden columns in MS Excel?",
    options: ["Ctrl + Shift + ) (Ctrl + Shift + 0)", "Ctrl + Shift + (", "Alt + Shift + 0", "Ctrl + 0"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 86,
    question: "Which shortcut key is used to move to the Next Sheet in a workbook?",
    options: ["Ctrl + Page Down", "Ctrl + Page Up", "Alt + Page Down", "Shift + Page Down"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 87,
    question: "Which shortcut key is used to move to the Previous Sheet in a workbook?",
    options: ["Ctrl + Page Up", "Ctrl + Page Down", "Alt + Page Up", "Shift + Page Up"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 88,
    question: "What is the shortcut key to toggle between displaying cell values and displaying the actual cell formulas?",
    options: ["Ctrl + ` (Grave Accent / Tilde)", "Ctrl + Shift + `", "Ctrl + F9", "Alt + `"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 89,
    question: "What is the shortcut key to calculate/refresh formulas across all open workbooks?",
    options: ["F9", "Shift + F9", "Ctrl + Alt + F9", "F5"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 90,
    question: "Which shortcut key is used to display the 'Insert Function' formula builder dialog?",
    options: ["Shift + F3", "Ctrl + F3", "Alt + F3", "F3"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 91,
    question: "What is the shortcut key to open the 'Name Manager' to create and edit named ranges?",
    options: ["Ctrl + F3", "Shift + F3", "Alt + F3", "F3"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 92,
    question: "Which shortcut key pastes a list of defined range names into a formula?",
    options: ["F3", "Shift + F3", "Ctrl + F3", "Alt + F3"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 93,
    question: "Which shortcut key is used to insert new cells, rows, or columns (opens Insert dialog)?",
    options: ["Ctrl + Shift + + (Ctrl + Plus)", "Ctrl + +", "Alt + I", "Ctrl + I"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 94,
    question: "Which shortcut key is used to delete selected cells, rows, or columns?",
    options: ["Ctrl + - (Ctrl + Minus)", "Delete", "Shift + Delete", "Alt + -"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 95,
    question: "What is the file extension used for Macro-Enabled Excel Workbooks?",
    options: [".xlsm", ".xlsx", ".xltm", ".xlsb"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 96,
    question: "What is the file extension used for Excel Templates?",
    options: [".xltx", ".xlsx", ".xltm", ".dotx"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 97,
    question: "What is the maximum zoom magnification percentage allowed in MS Excel?",
    options: ["200%", "400%", "500%", "1000%"],
    correctAnswer: 1,
    category: "MS Excel"
  },
  {
    id: 98,
    question: "What is the minimum zoom percentage allowed in MS Excel?",
    options: ["10%", "20%", "5%", "1%"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 99,
    question: "Which view allows you to see where page breaks will occur and adjust printable areas visually?",
    options: ["Page Break Preview", "Page Layout View", "Custom View", "Normal View"],
    correctAnswer: 0,
    category: "MS Excel"
  },
  {
    id: 100,
    question: "Which shortcut key closes the currently active Excel workbook window?",
    options: ["Ctrl + W", "Ctrl + F4", "Both A and B", "Alt + F4"],
    correctAnswer: 2,
    category: "MS Excel"
  }
];