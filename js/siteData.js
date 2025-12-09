// Global Site Data to remove "loading" state
window.siteData = {
  "siteInfo": {
    "title": "Dart From Zero to Hero",
    "vision": "To simplify Dart for everyone, together.",
    "developer": "Joliana"
  },
  "landingPage": {
    "hero": {
      "title": "Welcome to the <span class=\"text-accent-orange\">Collaborative Dart Workshop!</span>",
      "description": "Hi, I'm Joliana, your community lead! I'm a Flutter developer using Dart for 2 years, and I'm passionate about helping everyone learn Dart from zero to hero. Let's build amazing things together!",
      "ctaText": "Start Collaborating!"
    },
    "activityFeed": [
      { "user": "@AliceD", "action": "just asked:", "text": "Best way to handle async operations in Dart?" },
      { "user": "@BobF", "action": "completed", "text": "Dart Basics: Variables & Types lesson!" },
      { "user": "@CharlieG", "action": "shared a solution for the", "text": "List manipulation challenge." },
      { "user": "@JolianaSafwat", "action": "posted a new", "text": "Weekly Flutter UI Challenge!" },
      { "user": "@DianaP", "action": "upvoted a discussion on", "text": "State Management in Flutter" }
    ],
    "features": [
      {
        "icon": "chat",
        "iconColorClass": "text-primary",
        "title": "Ask Joliana Anything",
        "description": "Got burning questions about Dart or Flutter? Reach out directly to Joliana, your community lead, for personalized insights and guidance.",
        "buttonText": "Ask Now",
        "link": "#"
      },
      {
        "icon": "code_blocks",
        "iconColorClass": "text-primary",
        "title": "Latest Flutter/Dart Challenges",
        "description": "Sharpen your skills with weekly coding challenges. Tackle real-world problems and share your solutions with the community for feedback.",
        "buttonText": "View Challenges",
        "link": "examples.html"
      },
      {
        "icon": "trophy",
        "iconColorClass": "text-primary",
        "title": "Challenge Your Knowledge",
        "description": "Test your knowledge with weekly coding challenges. Sharpen your skills and share your solutions with the community for feedback.",
        "buttonText": "Take the Quiz",
        "link": "quiz.html"
      },
      {
        "icon": "book_online",
        "iconColorClass": "text-primary",
        "title": "Resources & Guides",
        "description": "Access a curated collection of learning materials, cheat sheets, and in-depth guides to support your Dart and Flutter journey from beginner to expert.",
        "buttonText": "Browse Resources",
        "link": "lessons.html"
      }
    ],
    "contact": {
      "title": "Connect with Joliana & the Team",
      "description": "Your feedback and questions are invaluable! Drop us a message, and let's make this workshop the best it can be."
    }
  },
  "concepts": [
    {
      "id": "variables_datatypes",
      "title": "Variables and Data Types in Dart",
      "description": "Dart is type-safe and fully object-oriented. In Dart, everything is an object, including numbers, functions, and `null`.</br></br><strong>Core Data Types:</strong></br><ul class='list-disc pl-5 text-slate-400'><li><strong>Numbers:</strong> `int` (integers) and `double` (floating-point numbers).</li><li><strong>Strings:</strong> `String` represents a sequence of characters.</li><li><strong>Booleans:</strong> `bool` represents `true` or `false`.</li><li><strong>Lists:</strong> Ordered group of objects (arrays).</li><li><strong>Maps:</strong> Key-value pairs.</li></ul></br><strong class='list-disc text-slate-400'>Variables:</strong></br><P class='list-disc pl-5 text-slate-400'> You can declare variables using an explicit type (e.g., `String name`) or use type inference with `var`. Constants can be created using `final` (runtime constant) or `const` (compile-time constant).</p>",
      "codeExample": "void main() {\n  // 1. Basic Data Types\n  int age = 25;\n  double height = 5.9;\n  String name = 'Joliana';\n  bool isLearning = true;\n\n  // 2. Type Inference (var)\n  var city = 'New York'; // Inferred as String\n  // city = 100; // Error: A value of type 'int' can't be assigned to a variable of type 'String'.\n\n  // 3. Dynamic Type (Accepts any type)\n  dynamic flexibleVar = 'Hello';\n  print('Dynamic 1: $flexibleVar');\n  flexibleVar = 100; // This is allowed\n  print('Dynamic 2: $flexibleVar');\n\n  // 4. Final vs Const\n  final DateTime now = DateTime.now(); // Runtime constant\n  const double pi = 3.14159; // Compile-time constant\n\n  // 5. Lists and Maps\n  List<String> fruits = ['Apple', 'Banana', 'Orange'];\n  Map<String, int> scores = {'Alice': 90, 'Bob': 85};\n\n  print('User: $name, Age: $age');\n  print('Fruits: $fruits');\n  print('Scores: $scores');\n}",
      "quiz": [
        {
          "question": "Which keyword is used for type inference?",
          "options": ["int", "var", "dynamic", "String"],
          "answer": 1
        },
        {
          "question": "What type represents a sequence of characters?",
          "options": ["char", "Text", "String", "var"],
          "answer": 2
        },
        {
          "question": "Which of these is NOT a built-in type?",
          "options": ["int", "float", "double", "bool"],
          "answer": 1
        },
        {
          "question": "Which keyword creates a compile-time constant?",
          "options": ["final", "const", "static", "var"],
          "answer": 1
        }
      ]
    },
    {
      "id": "operators",
      "title": "Operators in Dart",
      "description": "Dart supports a comprehensive set of operators for manipulating variables and values.</br></br><strong>Types of Operators:</strong></br><ul class='list-disc pl-5 text-slate-400'><li><strong>Arithmetic:</strong> `+`, `-`, `*`, `/` (double division), `~/` (integer division), `%` (modulo).</li><li><strong>Relational:</strong> `==`, `!=`, `>`, `<`, `>=`, `<=`.</li><li><strong>Type Test:</strong> `is` (check type), `as` (typecast).</li><li><strong>Logical:</strong> `&&` (AND), `||` (OR), `!` (NOT).</li><li><strong>Assignment:</strong> `=`, `+=`, `-=`, `*=`, `??=` (assign if null).</li></ul>",
      "codeExample": "void main() {\n  int a = 10;\n  int b = 3;\n\n  // 1. Arithmetic Operators\n  print('Add: ${a + b}');       // 13\n  print('Div: ${a / b}');       // 3.333...\n  print('Int Div: ${a ~/ b}');  // 3\n  print('Modulo: ${a % b}');    // 1\n\n  // 2. Relational & Logical\n  bool isGreater = a > b;\n  bool check = (a > 5) && (b < 5);\n  print('Is a > b? $isGreater');\n  print('Check (a>5 AND b<5): $check');\n\n  // 3. Increment & Decrement\n  int count = 0;\n  print('Count: ${count++}'); // Prints 0, then increments to 1\n  print('Count: ${++count}'); // Increments to 2, then prints 2\n\n  // 4. Type Test Operators\n  dynamic x = 'Hello';\n  if (x is String) {\n    print('x is a String');\n  }\n\n  // 5. Null-aware Assignment\n  String? nullableName;\n  nullableName ??= 'Guest'; // Assign 'Guest' only if nullableName is null\n  print('Name: $nullableName');\n}",
      "quiz": [
        {
          "question": "What is the logical AND operator?",
          "options": ["&", "&&", "and", "||"],
          "answer": 1
        },
        {
          "question": "What does `~/` do?",
          "options": ["Division", "Integer Division", "Modulo", "Nothing"],
          "answer": 1
        },
        {
          "question": "What operator checks if an object is a specific type?",
          "options": ["as", "==", "is", "check"],
          "answer": 2
        }
      ]
    },
    {
      "id": "conditions",
      "title": "Conditional Statements in Dart",
      "description": "Control flow statements allow you to execute different code blocks based on conditions.</br></br><strong>Supported Structures:</strong></br><ul class='list-disc pl-5 text-slate-400'><li><strong>if / else if / else:</strong> The standard conditional block.</li><li><strong>Switch Case:</strong> Great for checking a variable against multiple distinct values. Dart 3 introduces simpler switch expressions too!</li><li><strong>Ternary Operator:</strong> A shorthand for `if-else` (condition ? true : false).</li></ul>",
      "codeExample": "void main() {\n  int score = 85;\n\n  // 1. If-Else Statement\n  if (score >= 90) {\n    print('Grade: A');\n  } else if (score >= 80) {\n    print('Grade: B');\n  } else {\n    print('Grade: C');\n  }\n\n  // 2. Switch Statement\n  String command = 'OPEN';\n  switch (command) {\n    case 'OPEN':\n      print('Opening...');\n      break;\n    case 'CLOSE':\n      print('Closing...');\n      break;\n    default:\n      print('Unknown command');\n  }\n\n  // 3. Ternary Operator\n  String status = score >= 50 ? 'Passed' : 'Failed';\n  print('Status: $status');\n}",
      "quiz": [
        {
          "question": "A switch statement evaluates...",
          "options": ["A boolean", "A condition", "An expression/Value", "A loop"],
          "answer": 2
        },
        {
          "question": "Which logic is correct for ternary operators?",
          "options": ["condition : true ? false", "condition ? true : false", "condition ? false : true", "if ? true : false"],
          "answer": 1
        },
        {
          "question": "If/else checks for:",
          "options": ["int values", "String matches", "Boolean true/false", "Null"],
          "answer": 2
        }
      ]
    },
    {
      "id": "loops",
      "title": "Control Flow: Loops",
      "description": "Loops allow you to repeat a block of code multiple times. Dart provides standard loops found in most C-style languages.</br></br><strong>Loop Types:</strong></br><ul class='list-disc pl-5 text-slate-400'><li><strong>for loop:</strong> Run code a specific number of times.</li><li><strong>for-in loop:</strong> Iterate over items in a collection (List, Set).</li><li><strong>while loop:</strong> Run while a condition is true.</li><li><strong>do-while loop:</strong> Run at least once, then repeat while true.</li></ul></br><p>You can control loops using `break` (exit loop) and `continue` (skip current iteration).</p>",
      "codeExample": "void main() {\n  // 1. Standard For Loop\n  print('--- For Loop ---');\n  for (int i = 1; i <= 3; i++) {\n    print('Count: $i');\n  }\n\n  // 2. For-in Loop (Best for Lists)\n  print('\\n--- For-in Loop ---');\n  List<String> heroes = ['Batman', 'Superman', 'Wonder Woman'];\n  for (var hero in heroes) {\n    print('Hero: $hero');\n  }\n\n  // 3. While Loop\n  print('\\n--- While Loop ---');\n  int j = 0;\n  while (j < 3) {\n    print('While: $j');\n    j++;\n  }\n\n  // 4. Do-While Loop\n  print('\\n--- Do-While Loop ---');\n  int k = 0;\n  do {\n    print('Do-While: $k');\n    k++;\n  } while (k < 1);\n\n  // 5. Break and Continue\n  print('\\n--- Break & Continue ---');\n  for (int i = 0; i < 5; i++) {\n    if (i == 2) continue; // Skip 2\n    if (i == 4) break;    // Stop at 4\n    print('Num: $i');\n  }\n}",
      "quiz": [
        {
          "question": "Which loop guarantees at least one execution?",
          "options": ["for", "while", "do-while", "foreach"],
          "answer": 2
        },
        {
          "question": "Which is best for iterating over a simple list?",
          "options": ["while", "for-in", "do-while", "infinite loop"],
          "answer": 1
        },
        {
          "question": "What keyword stops the loop completely?",
          "options": ["stop", "return", "continue", "break"],
          "answer": 3
        }
      ]
    },
    {
      "id": "output",
      "title": "Displaying Output & String Manipulation",
      "description": "The standard way to display output in Dart is the `print()` function.</br></br><strong>String Interpolation:</strong></br>Instead of concatenating with `+`, Dart allows you to embed variables directly using `$` (e.g., `$name`) or expressions using `${}` (e.g., `${x + y}`).</br></br><strong>Useful String Methods:</strong></br>`toUpperCase()`, `toLowerCase()`, `contains()`, `startsWith()`, `length`, etc.",
      "codeExample": "void main() {\n  String firstName = 'Dart';\n  String lastName = 'Lang';\n  int users = 1000;\n\n  // 1. Basic Print\n  print('Hello, World!');\n\n  // 2. String Interpolation\n  print('Language: $firstName $lastName');\n  print('Next Year Users: ${users * 2}'); // Expression inside ${}\n\n  // 3. String Methods\n  String message = '  Welcome to Dart  ';\n  print('Original: \"$message\"');\n  print('Trimmed: \"${message.trim()}\"');\n  print('Uppercase: \"${message.trim().toUpperCase()}\"');\n  \n  // 4. Multi-line Strings\n  String multi = '''\nThis is a\nmulti-line string\nin Dart.\n''';\n  print(multi);\n}",
      "quiz": [
        {
          "question": "Which symbol is used for variable interpolation?",
          "options": ["&", "%", "$", "@"],
          "answer": 2
        },
        {
          "question": "How do you print expressions like (2+2)?",
          "options": ["$2+2", "${2+2}", "#{2+2}", "%(2+2)"],
          "answer": 1
        },
        {
          "question": "Which method removes whitespace from ends?",
          "options": ["strip()", "clean()", "trim()", "cut()"],
          "answer": 2
        }
      ]
    }
  ]
};
