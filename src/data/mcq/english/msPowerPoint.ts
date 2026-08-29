// src/data/mcq/english/msPowerPoint.ts

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  category: string;
}

export const MS_POWERPOINT_ENGLISH_MCQ: MCQQuestion[] = [
  // --- PART 1: BASICS, EXTENSIONS & SLIDE BASICS (1-25) ---
  {
    id: 1,
    question: "What is the default file extension for an MS PowerPoint presentation in 2013 and later versions?",
    options: [".ppt", ".pptx", ".ppsx", ".potx"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 2,
    question: "What is the file extension used for PowerPoint Slide Shows that automatically open directly in presentation mode?",
    options: [".ppsx", ".pptx", ".potx", ".pptm"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 3,
    question: "What is the file extension used for PowerPoint Templates?",
    options: [".potx", ".pptx", ".ppsx", ".dotx"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 4,
    question: "What is the default slide orientation in MS PowerPoint 2013/2016/2019?",
    options: ["Portrait", "Landscape (16:9 Widescreen)", "Square", "Custom"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 5,
    question: "What is the shortcut key to insert a New Slide into the current presentation?",
    options: ["Ctrl + N", "Ctrl + M", "Ctrl + S", "Alt + N"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 6,
    question: "What is the shortcut key to create a brand New Blank Presentation?",
    options: ["Ctrl + M", "Ctrl + N", "Ctrl + P", "Ctrl + Shift + N"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 7,
    question: "What is the shortcut key to Duplicate a selected slide in MS PowerPoint?",
    options: ["Ctrl + D", "Ctrl + Shift + D", "Ctrl + C", "Alt + D"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 8,
    question: "Which function key is used to start the Slide Show from the very first slide?",
    options: ["F1", "F5", "Shift + F5", "F7"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 9,
    question: "Which shortcut key combination starts the Slide Show from the Currently Active Slide?",
    options: ["Shift + F5", "Ctrl + F5", "Alt + F5", "F5"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 10,
    question: "Which key is pressed on the keyboard to exit or stop an ongoing Slide Show?",
    options: ["Backspace", "Esc (Escape)", "Spacebar", "Ctrl + Q"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 11,
    question: "What is the maximum zoom percentage available in MS PowerPoint?",
    options: ["200%", "400%", "500%", "1000%"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 12,
    question: "What is the minimum zoom percentage available in MS PowerPoint?",
    options: ["10%", "20%", "5%", "1%"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 13,
    question: "What are the dotted rectangular boxes on a slide used to hold titles, body text, or objects called?",
    options: ["Text Holders", "Placeholders", "Bounding Boxes", "Containers"],
    correctAnswer: 1,
    category: "MS PowerPoint"
  },
  {
    id: 14,
    question: "Which view in MS PowerPoint is the main editing view used to write and design presentations?",
    options: ["Normal View", "Slide Sorter View", "Reading View", "Slide Master View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 15,
    question: "Which view displays all slides as miniature thumbnails to easily rearrange or delete them?",
    options: ["Slide Sorter View", "Normal View", "Notes Page View", "Outline View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 16,
    question: "Which view displays only the text content (titles and main body points) without graphical elements?",
    options: ["Outline View", "Slide Sorter View", "Slide Master", "Reading View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 17,
    question: "Which view allows the presenter to add speaker notes that appear below each slide?",
    options: ["Notes Page View", "Slide Sorter View", "Reading View", "Master View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 18,
    question: "Which feature allows the speaker to see upcoming slides, elapsed time, and speaker notes on a secondary screen while the audience sees full slides?",
    options: ["Presenter View", "Audience Mode", "Split View", "Master View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 19,
    question: "What is the top-level slide in a presentation hierarchy that controls the theme, fonts, background, and layouts for all slides called?",
    options: ["Slide Master", "Title Master", "Theme Controller", "Parent Slide"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 20,
    question: "In which ribbon tab is the 'Slide Master' button located?",
    options: ["Insert", "Design", "View", "Review"],
    correctAnswer: 2,
    category: "MS PowerPoint"
  },
  {
    id: 21,
    question: "Which master view controls the layout, headers, footers, and look of printed presentation handouts?",
    options: ["Handout Master", "Slide Master", "Notes Master", "Print Master"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 22,
    question: "Which master view controls the layout and styling of printed speaker notes pages?",
    options: ["Notes Master", "Slide Master", "Handout Master", "Page Master"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 23,
    question: "What is the maximum number of slides that can be printed on a single handout page in MS PowerPoint?",
    options: ["3 slides", "6 slides", "9 slides", "12 slides"],
    correctAnswer: 2,
    category: "MS PowerPoint"
  },
  {
    id: 24,
    question: "Which handout option prints 3 slides per page along with blank lines next to each slide for handwritten audience notes?",
    options: ["3 Slides Handout", "2 Slides Handout", "6 Slides Handout", "Outline Layout"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 25,
    question: "Which feature in MS PowerPoint allows you to group multiple shapes or objects into a single object?",
    options: ["Group (Ctrl + G)", "Combine", "Merge", "Attach"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },

  // --- PART 2: ANIMATIONS, TRANSITIONS & MEDIA (26-50) ---
  {
    id: 26,
    question: "What is the shortcut key to Group selected objects in PowerPoint?",
    options: ["Ctrl + G", "Ctrl + Shift + G", "Alt + G", "Ctrl + Alt + G"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 27,
    question: "What is the shortcut key to Ungroup a previously grouped set of objects?",
    options: ["Ctrl + Shift + G", "Ctrl + Alt + G", "Ctrl + U", "Alt + Shift + G"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 28,
    question: "What is the visual motion effect that occurs when moving from one slide to the next during a slide show called?",
    options: ["Slide Transition", "Animation", "Motion Path", "Morph Effect"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 29,
    question: "What are the visual and sound effects applied to individual text boxes, images, and shapes on a single slide called?",
    options: ["Custom Animations", "Slide Transitions", "Transformations", "SmartArt"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 30,
    question: "Which animation category determines how an object enters or appears onto a slide?",
    options: ["Entrance Effects", "Emphasis Effects", "Exit Effects", "Motion Paths"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 31,
    question: "Which animation category draws attention to an object that is already visible on the slide (e.g., Grow/Shrink, Spin)?",
    options: ["Emphasis Effects", "Entrance Effects", "Exit Effects", "Motion Paths"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 32,
    question: "Which animation category controls how an object leaves or disappears from the slide?",
    options: ["Exit Effects", "Entrance Effects", "Emphasis Effects", "Motion Paths"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 33,
    question: "Which animation category allows an object to follow a custom drawn line, curve, or path on a slide?",
    options: ["Motion Paths", "Entrance Effects", "Slide Transitions", "Emphasis Effects"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 34,
    question: "Which pane is used to view, reorder, adjust timing, and manage all animations applied on the active slide?",
    options: ["Animation Pane", "Selection Pane", "Timeline Pane", "Format Shape Pane"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 35,
    question: "Which tool allows you to copy animation effects from one object and apply them to another object quickly?",
    options: ["Animation Painter", "Format Painter", "Motion Copier", "Effect Duplicator"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 36,
    question: "Which trigger option starts an animation automatically at the exact same moment the previous event begins?",
    options: ["With Previous", "On Click", "After Previous", "By Delay"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 37,
    question: "Which trigger option starts an animation automatically immediately after the previous animation finishes playing?",
    options: ["After Previous", "With Previous", "On Click", "On Double Click"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 38,
    question: "Which feature allows you to practice your presentation delivery while automatically recording the time spent on each slide?",
    options: ["Rehearse Timings", "Record Slide Show", "Set Slide Timer", "Broadcast Show"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 39,
    question: "Which feature allows you to create a presentation that plays repeatedly in a loop at an unattended kiosk?",
    options: ["Set Up Slide Show -> Browsed at a kiosk", "Loop Continuous Mode", "Auto-run Show", "Kiosk Broadcast"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 40,
    question: "Which option allows you to create a personalized presentation containing only specific selected slides from a larger presentation?",
    options: ["Custom Slide Show", "Selective Show", "Slide Filter", "Hide Slide"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 41,
    question: "Which feature allows you to hide a slide during a presentation without deleting it from the presentation file?",
    options: ["Hide Slide", "Mask Slide", "Disable Slide", "Archive Slide"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 42,
    question: "What key is pressed during a live slide show to turn the screen completely Black?",
    options: ["B (or . Period)", "W", "K", "Esc"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 43,
    question: "What key is pressed during a live slide show to turn the screen completely White?",
    options: ["W (or , Comma)", "B", "C", "Shift + W"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 44,
    question: "Which shortcut key changes the mouse pointer to a drawing Pen tool during a slide show?",
    options: ["Ctrl + P", "Ctrl + A", "Ctrl + H", "Ctrl + E"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 45,
    question: "Which shortcut key changes the mouse pointer to a Highlighter tool during a slide show?",
    options: ["Ctrl + I", "Ctrl + H", "Ctrl + P", "Ctrl + L"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 46,
    question: "Which shortcut key turns the mouse pointer back into an Arrow cursor during a slide show?",
    options: ["Ctrl + A", "Ctrl + P", "Ctrl + U", "Ctrl + E"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 47,
    question: "Which shortcut key erases all ink markings and drawings made on the current slide during a slide show?",
    options: ["E", "Ctrl + E", "Delete", "Backspace"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 48,
    question: "Which shortcut key hides the mouse pointer and navigation buttons immediately during a slide show?",
    options: ["Ctrl + H", "Ctrl + U", "Ctrl + A", "Alt + H"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 49,
    question: "Which built-in shapes can be inserted on slides to perform hyperlinked navigation actions (such as Next, Previous, Home)?",
    options: ["Action Buttons", "Smart Buttons", "Navigation Arrows", "Link Icons"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 50,
    question: "In which ribbon tab are 'Action Buttons' and 'Hyperlinks' located in MS PowerPoint?",
    options: ["Insert", "Design", "Slide Show", "View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },

  // --- PART 3: FORMATTING, DESIGN & SMARTART (51-75) ---
  {
    id: 51,
    question: "What is a coordinated set of colors, fonts, and graphical effects that give an entire presentation a consistent look called?",
    options: ["Theme", "Template", "Layout", "Style Guide"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 52,
    question: "In which ribbon tab are Presentation Themes and Background Styles located?",
    options: ["Design", "Insert", "Home", "View"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 53,
    question: "Which feature converts plain bulleted text lists into attractive visual diagrams and flowcharts automatically?",
    options: ["Convert to SmartArt", "WordArt", "Shape Formatter", "Visual Chart"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 54,
    question: "Which SmartArt layout category is best suited for showing a chronological sequence of steps or a timeline?",
    options: ["Process", "Hierarchy", "Relationship", "Matrix"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 55,
    question: "Which SmartArt layout category is best suited for showing an organizational company hierarchy chart?",
    options: ["Hierarchy", "Pyramid", "Cycle", "List"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 56,
    question: "Which feature allows you to capture an image of any open program or active desktop window and insert it directly onto a slide?",
    options: ["Screenshot (Screen Clipping)", "Snipping Tool", "Print Screen", "Smart Clip"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 57,
    question: "Which feature allows you to record on-screen video actions and audio directly from within MS PowerPoint?",
    options: ["Screen Recording", "Capture Video", "Slide Cam", "Screen Stream"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 58,
    question: "In which ribbon tab is the 'Screen Recording' feature located in MS PowerPoint?",
    options: ["Insert", "Record", "View", "Developer"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 59,
    question: "Which tool allows you to trim the starting and ending points of an inserted video or audio file directly on a slide?",
    options: ["Trim Video / Trim Audio", "Cut Media", "Crop Video", "Split Track"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 60,
    question: "Which option makes an inserted audio background song play continuously across all slides throughout the entire presentation?",
    options: ["Play in Background (Play Across Slides)", "Loop Track", "Audio Master", "Continuous Sound"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 61,
    question: "Which option allows an inserted audio or video clip to restart automatically once it reaches the end?",
    options: ["Loop until Stopped", "Rewind after Playing", "Repeat Continuously", "Auto Restart"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 62,
    question: "What is the shortcut key to Insert a Hyperlink in MS PowerPoint?",
    options: ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + Shift + K"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 63,
    question: "What is the shortcut key to Align text to the Center in a PowerPoint text box?",
    options: ["Ctrl + E", "Ctrl + C", "Ctrl + J", "Ctrl + Shift + C"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 64,
    question: "What is the shortcut key to Justify text alignment in a PowerPoint text box?",
    options: ["Ctrl + J", "Ctrl + E", "Ctrl + R", "Ctrl + Shift + J"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 65,
    question: "Which key combination is used to constrain a drawn shape to a perfect circle or square?",
    options: ["Hold Shift while dragging", "Hold Ctrl while dragging", "Hold Alt while dragging", "Hold Tab"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 66,
    question: "Which key combination resizes an object proportionally outward from its center point?",
    options: ["Ctrl + Shift + Drag corner", "Alt + Shift + Drag", "Shift + Drag", "Ctrl + Drag"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 67,
    question: "Which command brings a selected shape or image one level forward in the layering stack?",
    options: ["Bring Forward", "Bring to Front", "Send Backward", "Align Front"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 68,
    question: "Which command moves a selected shape or image directly to the very top of all overlapping objects?",
    options: ["Bring to Front", "Bring Forward", "Move Up", "Top Layer"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 69,
    question: "Which pane lists all objects on the active slide and allows you to hide, show, or rename individual layers?",
    options: ["Selection Pane", "Animation Pane", "Layer Manager", "Object Inspector"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 70,
    question: "What is the shortcut key to open the 'Selection Pane' in PowerPoint?",
    options: ["Alt + F10", "Ctrl + F10", "Shift + F10", "Alt + Shift + S"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 71,
    question: "Which alignment tool distributes multiple selected shapes evenly across equal horizontal or vertical spacing?",
    options: ["Distribute Horizontally / Vertically", "Align Center", "Snap to Grid", "Auto Space"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 72,
    question: "Which feature allows you to organize slides into logical categories or groups within the presentation slide deck?",
    options: ["Sections (Add Section)", "Folders", "Slide Bundles", "Categories"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 73,
    question: "Which transition effect creates smooth movement and transforms objects from one slide seamlessly into the next slide?",
    options: ["Morph Transition", "Fade", "Push", "Wipe"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 74,
    question: "Which feature automatically generates modern, professional slide layout design suggestions based on added content?",
    options: ["Designer (Design Ideas)", "AutoTheme", "Smart Layouts", "Quick Styles"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 75,
    question: "What is the shortcut key to check Spelling in an MS PowerPoint presentation?",
    options: ["F7", "F5", "Shift + F7", "F9"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },

  // --- PART 4: ADVANCED TOOLS, SHORTCUTS & EXPORTS (76-100) ---
  {
    id: 76,
    question: "What is the shortcut key to open the 'Thesaurus' pane for synonyms in PowerPoint?",
    options: ["Shift + F7", "Ctrl + F7", "Alt + F7", "F7"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 77,
    question: "Which shortcut key is used to Increase Font Size of selected text?",
    options: ["Ctrl + Shift + >", "Ctrl + ]", "Both A and B", "Alt + Shift + >"],
    correctAnswer: 2,
    category: "MS PowerPoint"
  },
  {
    id: 78,
    question: "Which shortcut key is used to Decrease Font Size of selected text?",
    options: ["Ctrl + Shift + <", "Ctrl + [", "Both A and B", "Alt + Shift + <"],
    correctAnswer: 2,
    category: "MS PowerPoint"
  },
  {
    id: 79,
    question: "Which shortcut key changes the letter case (Uppercase, Lowercase, Title Case) of selected text?",
    options: ["Shift + F3", "Ctrl + F3", "Alt + F3", "Ctrl + Shift + C"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 80,
    question: "Which shortcut key is used to Copy Formatting from one shape/text using Format Painter?",
    options: ["Ctrl + Shift + C", "Ctrl + C", "Alt + Shift + C", "Ctrl + Alt + C"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 81,
    question: "Which shortcut key is used to Paste Copied Formatting using Format Painter?",
    options: ["Ctrl + Shift + V", "Ctrl + V", "Alt + Shift + V", "Ctrl + Alt + V"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 82,
    question: "Which feature allows you to bundle an entire presentation, fonts, and linked media files into a CD or folder for portability?",
    options: ["Package for CD", "Export Archive", "Compress Presentation", "Media Bundler"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 83,
    question: "Which file format can PowerPoint directly export presentations to as a video file?",
    options: ["MP4 (MPEG-4 Video) & WMV", "AVI only", "MKV only", "FLV only"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 84,
    question: "Which file format exports each slide as a standalone static image file?",
    options: ["JPEG / PNG", "GIF", "TIFF", "All of the above"],
    correctAnswer: 3,
    category: "MS PowerPoint"
  },
  {
    id: 85,
    question: "What is the shortcut key to open the 'Find' dialog in MS PowerPoint?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Alt + F"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 86,
    question: "What is the shortcut key to open the 'Replace' dialog in MS PowerPoint?",
    options: ["Ctrl + H", "Ctrl + R", "Ctrl + F", "Ctrl + Shift + H"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 87,
    question: "Which shortcut key allows you to jump directly to a specific slide number during a live slide show?",
    options: ["Type Slide Number + Enter", "Ctrl + G", "Shift + Slide Number", "Alt + Slide Number"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 88,
    question: "What is the shortcut key to display the list of all Slide Show keyboard shortcuts during a presentation?",
    options: ["F1 (or ? Question mark)", "Shift + F1", "Ctrl + F1", "Esc"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 89,
    question: "Which shortcut key displays a grid view of all slides (Zoom Out) during a live slide show to easily jump to any slide?",
    options: ["Ctrl + - (or G key)", "Ctrl + S", "Tab", "Shift + Tab"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 90,
    question: "What is the shortcut key to toggle Subtitles / Live Captions on and off during a presentation?",
    options: ["J key", "S key", "C key", "Ctrl + Shift + S"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 91,
    question: "Which feature allows you to replace a specific font across the entire presentation with another font in one click?",
    options: ["Replace Fonts", "Font Changer", "Global Format", "Theme Adjuster"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 92,
    question: "In which menu is the 'Replace Fonts' tool located?",
    options: ["Home -> Replace dropdown", "Design -> Fonts", "View -> Master", "Review -> Proofing"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 93,
    question: "What is the shortcut key to show or hide the alignment Guides on a slide?",
    options: ["Alt + F9", "Shift + F9", "Ctrl + F9", "F9"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 94,
    question: "What is the shortcut key to show or hide the Gridlines on a slide?",
    options: ["Shift + F9", "Alt + F9", "Ctrl + F9", "F9"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 95,
    question: "What is the shortcut key to show or hide the Ruler in PowerPoint?",
    options: ["Shift + Alt + F9", "Ctrl + R", "Alt + Shift + R", "Shift + F8"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 96,
    question: "Which tool removes unwanted areas or changes the visible proportions of an inserted photo?",
    options: ["Crop Tool", "Trim Tool", "Cut Picture", "Slice Image"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 97,
    question: "Which feature automatically detects and removes the solid background behind a person or object in an image?",
    options: ["Remove Background", "Color Transparency", "Mask Tool", "Alpha Cut"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 98,
    question: "What is the file extension used for Macro-Enabled PowerPoint Presentations?",
    options: [".pptm", ".pptx", ".potm", ".ppsm"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 99,
    question: "What is the shortcut key to open the 'Save As' dialog box in MS PowerPoint?",
    options: ["F12", "Ctrl + S", "Shift + F12", "Alt + F12"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  },
  {
    id: 100,
    question: "Which shortcut key is used to close the active presentation window in MS PowerPoint?",
    options: ["Ctrl + W (or Ctrl + F4)", "Alt + F4", "Esc", "Ctrl + Q"],
    correctAnswer: 0,
    category: "MS PowerPoint"
  }
];