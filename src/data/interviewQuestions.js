/**
 * SKILLONIK Interview Preparation Question Bank
 * 10 Domains x 3 Levels (Beginner, Intermediate, Advance) x 10 Questions each = 300 Questions
 */

export const DOMAINS = [
  {
    id: 'python',
    name: 'Python',
    shortName: 'Python',
    icon: 'Terminal',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 text-blue-600 border-blue-200',
    description: 'Data types, OOP, generators, decorators, memory management, GIL, and concurrency.',
    tags: ['Core Syntax', 'OOP', 'Decorators', 'GIL', 'AsyncIO']
  },
  {
    id: 'sql',
    name: 'SQL',
    shortName: 'SQL',
    icon: 'Database',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50 text-amber-600 border-amber-200',
    description: 'Relational databases, queries, JOINs, indexing, transactions, window functions, and query optimization.',
    tags: ['DML/DDL', 'JOINs', 'Indexing', 'ACID', 'Window Functions']
  },
  {
    id: 'aiml',
    name: 'AI / Machine Learning',
    shortName: 'AI / ML',
    icon: 'Brain',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-purple-50 text-purple-600 border-purple-200',
    description: 'Supervised/unsupervised learning, metrics, feature engineering, ensemble models, and hyperparameter tuning.',
    tags: ['Algorithms', 'Loss Functions', 'Metrics', 'Ensemble', 'Cross-Validation']
  },
  {
    id: 'deep_learning',
    name: 'Deep Learning',
    shortName: 'Deep Learning',
    icon: 'Cpu',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50 text-rose-600 border-rose-200',
    description: 'Neural networks, backpropagation, CNNs, RNNs, Transformers, attention mechanisms, and optimization.',
    tags: ['CNN', 'RNN', 'Transformers', 'Backprop', 'PyTorch/TensorFlow']
  },
  {
    id: 'cloud_computing',
    name: 'Cloud Computing',
    shortName: 'Cloud',
    icon: 'Cloud',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-50 text-sky-600 border-sky-200',
    description: 'AWS/Azure/GCP fundamentals, serverless, microservices, container orchestration, IAM, and high availability.',
    tags: ['AWS/Azure', 'Kubernetes', 'Serverless', 'IAM', 'VPC/Networking']
  },
  {
    id: 'java',
    name: 'Java',
    shortName: 'Java',
    icon: 'Coffee',
    color: 'from-red-500 to-amber-600',
    bgColor: 'bg-red-50 text-red-600 border-red-200',
    description: 'JVM architecture, garbage collection, multithreading, collections, streams, and Spring Boot.',
    tags: ['JVM Internals', 'Collections', 'Multithreading', 'Streams', 'Memory Model']
  },
  {
    id: 'cpp',
    name: 'C++',
    shortName: 'C++',
    icon: 'Code2',
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50 text-teal-600 border-teal-200',
    description: 'Pointers, memory management, STL containers, modern C++ (C++11/17/20), virtual functions, and RAII.',
    tags: ['Pointers/RAII', 'STL', 'Templates', 'Virtual Tables', 'Smart Pointers']
  },
  {
    id: 'linux',
    name: 'Linux',
    shortName: 'Linux',
    icon: 'HardDrive',
    color: 'from-slate-700 to-slate-900',
    bgColor: 'bg-slate-100 text-slate-700 border-slate-300',
    description: 'Shell scripting, file permissions, process management, systemd, networking tools, and kernel basics.',
    tags: ['Bash', 'Permissions', 'Process Mgmt', 'Networking', 'Storage/VFS']
  },
  {
    id: 'data_analytics',
    name: 'Data Analytics',
    shortName: 'Data Analytics',
    icon: 'BarChart3',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    description: 'Pandas, NumPy, statistical distributions, hypothesis testing, EDA, data cleaning, and BI reporting.',
    tags: ['Pandas/NumPy', 'Statistics', 'Data Cleaning', 'Visualization', 'A/B Testing']
  },
  {
    id: 'computer_networks',
    name: 'Computer Networks',
    shortName: 'Networks',
    icon: 'Network',
    color: 'from-violet-500 to-fuchsia-600',
    bgColor: 'bg-violet-50 text-violet-600 border-violet-200',
    description: 'OSI & TCP/IP models, routing protocols, DNS, TLS/SSL, HTTP/2 & HTTP/3, sockets, and subnetting.',
    tags: ['OSI / TCP-IP', 'DNS / HTTP', 'Subnetting', 'TLS/Security', 'Socket IO']
  }
];

export const DIFFICULTY_LEVELS = [
  {
    id: 'beginner',
    label: 'Beginner',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    description: 'Core concepts, fundamental syntax, definitions, and standard use-cases.',
    targetXP: 50,
    timeDefaultSeconds: 600 // 10 minutes
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-300',
    description: 'Applied problems, code debugging, design patterns, and performance considerations.',
    targetXP: 100,
    timeDefaultSeconds: 600 // 10 minutes
  },
  {
    id: 'advance',
    label: 'Advance',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-300',
    description: 'System internals, edge cases, distributed architecture, memory optimization, and concurrency.',
    targetXP: 150,
    timeDefaultSeconds: 600 // 10 minutes
  }
];

export const BADGE_REWARDS = [
  {
    id: 'perfect_ace',
    title: '🏆 Legendary Ace',
    condition: 'Score 10/10 in any category',
    description: 'Demonstrated complete mastery and flawless technical understanding.',
    xpBonus: 100,
    tier: 'gold'
  },
  {
    id: 'speed_demon',
    title: '⚡ Speed Demon',
    condition: 'Complete a round in under 3 minutes with >= 80% accuracy',
    description: 'Fast analytical thinking and lightning-fast problem resolution.',
    xpBonus: 60,
    tier: 'gold'
  },
  {
    id: 'silver_pro',
    title: '🥈 Certified Specialist',
    condition: 'Score 8 or 9 out of 10 in any category',
    description: 'Ready for technical interview rounds at top tier companies.',
    xpBonus: 50,
    tier: 'silver'
  },
  {
    id: 'bronze_achiever',
    title: '🥉 Technical Achiever',
    condition: 'Score 6 or 7 out of 10 in any category',
    description: 'Solid foundation with minor areas for revision.',
    xpBonus: 30,
    tier: 'bronze'
  }
];

/**
 * 300 QUESTIONS: 10 Domains x 3 Levels x 10 Questions
 */
export const QUESTION_BANK = {
  // ==========================================
  // 1. PYTHON
  // ==========================================
  python: {
    beginner: [
      {
        id: 'py-b-1',
        question: 'Which of the following data types in Python is IMMUTABLE?',
        options: ['List', 'Dictionary', 'Tuple', 'Set'],
        correctIndex: 2,
        explanation: 'Tuples, strings, integers, and floats are immutable in Python, meaning their state cannot be modified after creation.',
        topic: 'Data Types'
      },
      {
        id: 'py-b-2',
        question: 'What is the output of `bool([])` and `bool([0])` in Python?',
        options: ['True, True', 'False, True', 'False, False', 'True, False'],
        correctIndex: 1,
        explanation: 'An empty list `[]` evaluates to False (falsy value), while a list with elements `[0]` has length 1 and evaluates to True (truthy).',
        topic: 'Booleans & Truthiness'
      },
      {
        id: 'py-b-3',
        question: 'Which keyword is used to define an anonymous or inline function in Python?',
        options: ['def', 'lambda', 'func', 'anonymous'],
        correctIndex: 1,
        explanation: 'The `lambda` keyword creates anonymous one-line functions in Python, e.g., `square = lambda x: x * x`.',
        topic: 'Functions'
      },
      {
        id: 'py-b-4',
        question: 'What is the correct way to handle exceptions in Python?',
        options: ['try / catch', 'try / except', 'do / catch', 'attempt / rescue'],
        correctIndex: 1,
        explanation: 'Python uses the `try ... except ... else ... finally` construct to catch and handle exceptions.',
        topic: 'Error Handling'
      },
      {
        id: 'py-b-5',
        question: 'What will `print("Python"[1:4])` output?',
        options: ['Pyt', 'yth', 'ytho', 'Pyt'],
        correctIndex: 1,
        explanation: 'String slicing `[1:4]` starts at index 1 ("y") and stops before index 4 ("o"), giving "yth".',
        topic: 'Slicing'
      },
      {
        id: 'py-b-6',
        question: 'How do you check if a key exists in a dictionary `d` without throwing a KeyError?',
        options: ['key.exists(d)', 'd.has(key)', 'key in d', 'd.contains(key)'],
        correctIndex: 2,
        explanation: 'The `key in d` expression checks key existence in O(1) average time. Alternatively, `d.get(key)` returns None instead of KeyError.',
        topic: 'Dictionaries'
      },
      {
        id: 'py-b-7',
        question: 'What is the result of `3 * [1, 2]` in Python?',
        options: ['[3, 6]', '[1, 2, 1, 2, 1, 2]', '[[1, 2], [1, 2], [1, 2]]', 'TypeError: can\'t multiply sequence'],
        correctIndex: 1,
        explanation: 'Multiplying a list by an integer `n` replicates its elements `n` times to create a new concatenated list.',
        topic: 'Lists'
      },
      {
        id: 'py-b-8',
        question: 'Which built-in function returns both the index and value when iterating over a sequence?',
        options: ['zip()', 'range()', 'enumerate()', 'map()'],
        correctIndex: 2,
        explanation: '`enumerate(iterable)` yields pairs of `(index, item)`, allowing clean iteration with indices.',
        topic: 'Iterators'
      },
      {
        id: 'py-b-9',
        question: 'What is PEP 8 in the Python ecosystem?',
        options: ['The standard package manager for Python', 'The official Python style guide for code formatting', 'The compiler specification for CPython', 'The Python debugger specification'],
        correctIndex: 1,
        explanation: 'PEP 8 (Python Enhancement Proposal 8) is the standard style guide for writing readable and idiomatic Python code.',
        topic: 'Standards'
      },
      {
        id: 'py-b-10',
        question: 'What does the `pass` statement do in Python?',
        options: ['Terminates the current loop', 'Skips to the next iteration of the loop', 'Acts as a null placeholder statement where code is syntactically required', 'Returns from the enclosing function with None'],
        correctIndex: 2,
        explanation: '`pass` is a null statement used as a placeholder when syntax requires a block but no action is needed.',
        topic: 'Control Flow'
      }
    ],
    intermediate: [
      {
        id: 'py-i-1',
        question: 'What is the difference between `is` and `==` in Python?',
        options: [
          '`is` checks value equality; `==` checks object identity',
          '`is` checks memory/identity equality (same id); `==` checks value equality',
          'They are identical in Python 3',
          '`is` is only used for strings and integers; `==` is for objects'
        ],
        correctIndex: 1,
        explanation: '`==` compares values (via `__eq__`), whereas `is` checks whether two variables point to the exact same object in memory (compares `id()`).',
        topic: 'Identity vs Equality'
      },
      {
        id: 'py-i-2',
        question: 'What happens when a default argument in a function is a mutable object like a list `def append_to(item, target=[])`?',
        options: [
          'A new empty list is created on every function call',
          'The default list is created once at function definition and shared across all calls',
          'Python raises a SyntaxError at runtime',
          'The list is automatically cleared upon returning'
        ],
        correctIndex: 1,
        explanation: 'Default arguments are evaluated once when the function is defined, not per invocation. Mutable defaults persist modifications across subsequent calls.',
        topic: 'Default Arguments'
      },
      {
        id: 'py-i-3',
        question: 'What does the `*args` and `**kwargs` syntax in a function definition allow?',
        options: [
          'Pass by pointer and pass by reference',
          'Arbitrary positional arguments (as a tuple) and arbitrary keyword arguments (as a dictionary)',
          'Multithreaded argument dispatching',
          'Type casting of parameters'
        ],
        correctIndex: 1,
        explanation: '`*args` collects extra positional arguments into a tuple, while `**kwargs` collects extra named keyword arguments into a dict.',
        topic: 'Function Arguments'
      },
      {
        id: 'py-i-4',
        question: 'What does the `yield` keyword do inside a function?',
        options: [
          'Immediately terminates the function and raises StopIteration',
          'Pauses function execution and returns a value, turning the function into a generator iterator',
          'Yields control to the OS thread scheduler',
          'Converts the function output into an asynchronous Promise'
        ],
        correctIndex: 1,
        explanation: '`yield` turns a normal function into a generator. When called, it yields a value and pauses its state until `next()` is invoked.',
        topic: 'Generators'
      },
      {
        id: 'py-i-5',
        question: 'How do Python decorators work under the hood?',
        options: [
          'They modify the AST at compile time',
          'They are higher-order functions that take a function as an argument and return a modified wrapper function',
          'They are classes that inherit from `abc.Decorator`',
          'They are C extensions compiled into bytecode'
        ],
        correctIndex: 1,
        explanation: 'Decorators wrap another function to extend its behavior without permanently modifying it (`@dec` is syntactic sugar for `fn = dec(fn)`).',
        topic: 'Decorators'
      },
      {
        id: 'py-i-6',
        question: 'What is the purpose of `__slots__` in a Python class?',
        options: [
          'To define abstract methods in interfaces',
          'To restrict attribute creation and prevent dynamic `__dict__` overhead, saving substantial memory',
          'To enable automatic serialization to JSON',
          'To synchronize multithreaded access to class instances'
        ],
        correctIndex: 1,
        explanation: '`__slots__` tells Python not to use a dynamic `__dict__` per instance, preventing arbitrary attributes and drastically reducing memory consumption.',
        topic: 'Memory Optimization'
      },
      {
        id: 'py-i-7',
        question: 'What is the time complexity of looking up a key in a Python dictionary with `n` elements (average case)?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correctIndex: 0,
        explanation: 'Python dictionaries are implemented as open-addressing hash tables with perturbation-based collision resolution, giving O(1) average lookup.',
        topic: 'Data Structures'
      },
      {
        id: 'py-i-8',
        question: 'What is the role of the `with` statement and context managers in Python?',
        options: [
          'To create localized scope variables',
          'To guarantee proper resource acquisition and release (via `__enter__` and `__exit__`), even if exceptions occur',
          'To execute code asynchronously in a separate sub-process',
          'To benchmark execution time'
        ],
        correctIndex: 1,
        explanation: 'Context managers use `__enter__` and `__exit__` methods to guarantee cleanup (closing files, releasing locks, terminating connections) deterministically.',
        topic: 'Context Managers'
      },
      {
        id: 'py-i-9',
        question: 'In Python OOP, what is Method Resolution Order (MRO) and which algorithm does Python use for it?',
        options: [
          'Depth-First Search (DFS)',
          'C3 Linearization Algorithm',
          'Breadth-First Search (BFS)',
          'Dijkstra Shortest Path'
        ],
        correctIndex: 1,
        explanation: 'Python uses the C3 Linearization algorithm to determine the order in which base classes are searched when resolving a method in multiple inheritance.',
        topic: 'OOP & MRO'
      },
      {
        id: 'py-i-10',
        question: 'What does `copy.deepcopy()` do compared to `copy.copy()`?',
        options: [
          '`copy()` is for primitives; `deepcopy()` is for objects',
          '`deepcopy()` recursively copies all nested objects, while `copy()` creates a shallow reference to nested structures',
          '`deepcopy()` converts objects to strings',
          '`copy()` performs byte-level binary cloning'
        ],
        correctIndex: 1,
        explanation: 'Shallow copy constructs a new compound object and inserts references to original children; deep copy recursively copies all nested objects.',
        topic: 'Copying Objects'
      }
    ],
    advance: [
      {
        id: 'py-a-1',
        question: 'What is Python\'s Global Interpreter Lock (GIL) and what is its primary effect on multi-threaded CPU-bound programs in CPython?',
        options: [
          'It speeds up multi-threaded calculations across multiple CPU cores',
          'It is a mutex that prevents multiple native threads from executing Python bytecodes simultaneously, limiting CPU-bound tasks to a single core',
          'It locks file I/O operations to prevent race conditions',
          'It automatically converts synchronous functions into coroutines'
        ],
        correctIndex: 1,
        explanation: 'The GIL protects CPython memory management and reference counts. For CPU-bound tasks, only one thread runs bytecode at a time regardless of core count.',
        topic: 'GIL & Concurrency'
      },
      {
        id: 'py-a-2',
        question: 'How does Python\'s generational Garbage Collector handle cyclic references?',
        options: [
          'Reference counting alone resolves all cycles',
          'It groups objects into 3 generations (Gen 0, 1, 2) and periodically detects unreachable reference cycles using a doubly linked list traversal',
          'It reboots the interpreter when memory reaches 90%',
          'Cyclic references always leak memory in Python'
        ],
        correctIndex: 1,
        explanation: 'While reference counting frees objects immediately when count reaches 0, the cyclic GC tracks 3 generations to detect and break isolated reference cycles.',
        topic: 'Garbage Collection'
      },
      {
        id: 'py-a-3',
        question: 'What is a metaclass in Python and when is `__metaclass__` / `metaclass=...` evaluated?',
        options: [
          'A class that inherits from multiple base classes',
          'A class of a class that defines how classes themselves are constructed, evaluated when the class definition block is executed',
          'A decorator applied strictly to static methods',
          'A C-level binding for ctypes'
        ],
        correctIndex: 1,
        explanation: 'In Python, classes are instances of metaclasses (`type` is the default). Metaclasses intercept class creation to validate, register, or modify class attributes.',
        topic: 'Metaclasses'
      },
      {
        id: 'py-a-4',
        question: 'What is the key mechanical difference between `threading.Thread` and `multiprocessing.Process` in Python?',
        options: [
          'Threads have separate memory address spaces; Processes share the same memory heap',
          'Processes have independent memory address spaces and bypass the GIL, whereas Threads share memory but are constrained by the GIL for CPU tasks',
          'Threads cannot be used for network I/O',
          'Processes run only on Unix-like operating systems'
        ],
        correctIndex: 1,
        explanation: '`multiprocessing` spawns distinct OS processes with independent memory heaps and Python interpreters, allowing true multi-core CPU parallelism.',
        topic: 'Multiprocessing'
      },
      {
        id: 'py-a-5',
        question: 'In `asyncio`, how does the Event Loop manage asynchronous tasks without using multiple OS threads?',
        options: [
          'It uses hardware interrupts at the CPU register level',
          'It runs a single-threaded loop that multiplexes non-blocking I/O multiplexers (like epoll/kqueue) and resumes paused coroutines when data is ready',
          'It spawns a daemon thread for every single `await` keyword',
          'It forks the main process on each async function call'
        ],
        correctIndex: 1,
        explanation: '`asyncio` uses an event loop with non-blocking OS I/O (epoll/kqueue/IOCP). When a coroutine awaits I/O, control yields to the loop to run other ready tasks.',
        topic: 'AsyncIO & Event Loop'
      },
      {
        id: 'py-a-6',
        question: 'What is the Python Descriptor Protocol, and which dunder methods constitute it?',
        options: [
          '`__init__`, `__repr__`, `__str__`',
          '`__get__`, `__set__`, and `__delete__`',
          '`__enter__`, `__exit__`',
          '`__iter__`, `__next__`'
        ],
        correctIndex: 1,
        explanation: 'Descriptors customize attribute access. If an object defines `__get__`, `__set__`, or `__delete__`, it overrides default dictionary lookup (used by `@property`).',
        topic: 'Descriptors'
      },
      {
        id: 'py-a-7',
        question: 'What is the difference between `__new__` and `__init__` in Python class instantiation?',
        options: [
          '`__new__` is called after `__init__` to clean up memory',
          '`__new__` is a static method that creates and returns the new object instance; `__init__` initializes the newly created instance',
          '`__init__` allocates memory; `__new__` defines variable types',
          'They are synonymous and can be used interchangeably'
        ],
        correctIndex: 1,
        explanation: '`__new__` is the actual creator of the instance (returns `self`), while `__init__` is the initializer that configures attributes on that instance.',
        topic: 'Class Internals'
      },
      {
        id: 'py-a-8',
        question: 'How does PyPy achieve significant speedups over standard CPython for long-running compute workloads?',
        options: [
          'By converting all Python code to pure Assembly ahead of time',
          'By using a Just-In-Time (JIT) compiler with tracing that translates frequently executed bytecode loops into optimized machine code at runtime',
          'By disabling the GIL entirely for all operations',
          'By eliminating object polymorphism'
        ],
        correctIndex: 1,
        explanation: 'PyPy uses a Tracing JIT compiler that monitors running code, identifies hot code paths ("traces"), and compiles them directly into native machine instructions.',
        topic: 'JIT & PyPy'
      },
      {
        id: 'py-a-9',
        question: 'What is the purpose of `sys.settrace()` in advanced Python tooling?',
        options: [
          'To set the maximum recursion limit',
          'To register a global trace function for profiling, code coverage (coverage.py), and interactive debugging (pdb)',
          'To enable hardware virtualization',
          'To trace network packet headers'
        ],
        correctIndex: 1,
        explanation: '`sys.settrace()` registers a hook that is called on every line, function call, exception, and return, forming the foundation of profilers and debuggers.',
        topic: 'Profiling & Debugging'
      },
      {
        id: 'py-a-10',
        question: 'What is the behavior of the `mmap` module in Python for processing massive multi-gigabyte files?',
        options: [
          'It splits the file into multiple compressed zip files',
          'It maps the file directly into virtual memory address space, allowing byte-level access without reading the entire file into RAM',
          'It streams the file over a local socket to another thread',
          'It loads the file into GPU VRAM'
        ],
        correctIndex: 1,
        explanation: '`mmap` creates memory-mapped files via the OS virtual memory subsystem, enabling demand-paged disk access with high performance and minimal memory footprint.',
        topic: 'Memory Mapping & IO'
      }
    ]
  },

  // ==========================================
  // 2. SQL
  // ==========================================
  sql: {
    beginner: [
      {
        id: 'sql-b-1',
        question: 'Which SQL clause is used to filter rows BEFORE aggregation?',
        options: ['HAVING', 'WHERE', 'ORDER BY', 'GROUP BY'],
        correctIndex: 1,
        explanation: '`WHERE` filters individual rows before grouping/aggregation, whereas `HAVING` filters aggregated groups.',
        topic: 'Filtering'
      },
      {
        id: 'sql-b-2',
        question: 'What is the default sort order of the `ORDER BY` clause in SQL?',
        options: ['DESCENDING (DESC)', 'ASCENDING (ASC)', 'Alphabetical strictly', 'Insertion order'],
        correctIndex: 1,
        explanation: 'By default, `ORDER BY column_name` sorts data in ASCENDING (ASC) order (smallest to largest / A to Z).',
        topic: 'Sorting'
      },
      {
        id: 'sql-b-3',
        question: 'Which of the following represents a SQL command to eliminate duplicate rows from query results?',
        options: ['SELECT UNIQUE', 'SELECT DISTINCT', 'SELECT NO_REPEAT', 'SELECT UNIQUE_ROWS'],
        correctIndex: 1,
        explanation: '`SELECT DISTINCT column` removes duplicate rows from the final result set.',
        topic: 'DML'
      },
      {
        id: 'sql-b-4',
        question: 'What does a `LEFT JOIN` (or LEFT OUTER JOIN) return?',
        options: [
          'Only matching records between both tables',
          'All records from the left table, plus matched records from the right table (with NULLs if no match exists)',
          'All records from both tables combined',
          'Only non-matching records from the left table'
        ],
        correctIndex: 1,
        explanation: 'A `LEFT JOIN` returns all rows from the left table and matching rows from the right table. If no match is found, NULL values are returned for right table columns.',
        topic: 'JOINs'
      },
      {
        id: 'sql-b-5',
        question: 'Which SQL aggregate function calculates the total number of rows meeting a condition?',
        options: ['SUM()', 'COUNT()', 'TOTAL()', 'ROWS()'],
        correctIndex: 1,
        explanation: '`COUNT(*)` or `COUNT(column)` returns the total count of rows satisfying the query criteria.',
        topic: 'Aggregate Functions'
      },
      {
        id: 'sql-b-6',
        question: 'What is the purpose of a PRIMARY KEY in a relational database table?',
        options: [
          'To speed up calculations in math queries',
          'To uniquely identify each record in a table and ensure non-null integrity',
          'To link records to external third-party tables only',
          'To encrypt sensitive password columns'
        ],
        correctIndex: 1,
        explanation: 'A PRIMARY KEY constraint uniquely identifies each record in a table. It must contain unique values and cannot contain NULL.',
        topic: 'Constraints'
      },
      {
        id: 'sql-b-7',
        question: 'Which SQL keyword is used to add a new row of data into an existing database table?',
        options: ['ADD ROW', 'INSERT INTO', 'UPDATE', 'CREATE ROW'],
        correctIndex: 1,
        explanation: '`INSERT INTO table_name (columns) VALUES (values);` inserts new data rows into a table.',
        topic: 'DML'
      },
      {
        id: 'sql-b-8',
        question: 'How do you check for missing or unassigned values in a SQL column?',
        options: ['WHERE column = NULL', 'WHERE column == NULL', 'WHERE column IS NULL', 'WHERE column IS EMPTY'],
        correctIndex: 2,
        explanation: 'In SQL, NULL represents unknown value; comparisons using `=` evaluate to UNKNOWN/FALSE. The correct syntax is `IS NULL` or `IS NOT NULL`.',
        topic: 'NULL Handling'
      },
      {
        id: 'sql-b-9',
        question: 'Which DDL command is used to delete an entire table schema and all its records permanently?',
        options: ['DELETE TABLE', 'DROP TABLE', 'TRUNCATE SCHEMA', 'REMOVE TABLE'],
        correctIndex: 1,
        explanation: '`DROP TABLE table_name;` destroys the table structure, metadata, indexes, and all stored rows permanently.',
        topic: 'DDL'
      },
      {
        id: 'sql-b-10',
        question: 'Which operator allows matching against a list of specified values in a `WHERE` clause?',
        options: ['EXISTS', 'IN', 'BETWEEN', 'MATCHES'],
        correctIndex: 1,
        explanation: 'The `IN` operator allows you to specify multiple values in a `WHERE` clause, e.g. `WHERE country IN (\'US\', \'UK\', \'IN\')`.',
        topic: 'Operators'
      }
    ],
    intermediate: [
      {
        id: 'sql-i-1',
        question: 'What is the key difference between `DELETE`, `TRUNCATE`, and `DROP` in relational databases?',
        options: [
          '`DELETE` removes table structure; `TRUNCATE` deletes columns; `DROP` deletes rows',
          '`DELETE` is a logged DML operation (can be rolled back with WHERE); `TRUNCATE` is a faster DDL operation that resets high water mark; `DROP` removes table and schema completely',
          '`TRUNCATE` cannot be used if table has more than 1,000 rows',
          '`DELETE` is always faster than `TRUNCATE`'
        ],
        correctIndex: 1,
        explanation: '`DELETE` deletes rows with row-by-row transaction logging. `TRUNCATE` deallocates data pages (DDL), making it much faster. `DROP` removes table definition and storage.',
        topic: 'Data Manipulation vs DDL'
      },
      {
        id: 'sql-i-2',
        question: 'What are the 4 ACID properties that guarantee reliable database transactions?',
        options: [
          'Access, Consistency, Integrity, Durability',
          'Atomicity, Consistency, Isolation, Durability',
          'Availability, Concurrency, Indexing, Data',
          'Asynchronous, Clustering, Isolation, Distribution'
        ],
        correctIndex: 1,
        explanation: 'ACID stands for Atomicity (all or nothing), Consistency (preserves rules/constraints), Isolation (concurrent execution independence), and Durability (committed changes persist).',
        topic: 'ACID Properties'
      },
      {
        id: 'sql-i-3',
        question: 'What is the purpose of a Database Index (e.g., B-Tree Index)?',
        options: [
          'To compress the database on disk to save storage',
          'To speed up data retrieval operations (SELECT) at the cost of additional storage and slower writes (INSERT/UPDATE)',
          'To encrypt sensitive customer data',
          'To enforce foreign key relationships automatically'
        ],
        correctIndex: 1,
        explanation: 'Indexes create an auxiliary search data structure (like B+ Tree) that enables logarithmic search time for queries, but adds write overhead during inserts and updates.',
        topic: 'Indexing'
      },
      {
        id: 'sql-i-4',
        question: 'What is the difference between `UNION` and `UNION ALL`?',
        options: [
          '`UNION` combines all rows with duplicates; `UNION ALL` eliminates duplicates',
          '`UNION` removes duplicate rows by running an implicit sort/unique pass; `UNION ALL` concatenates result sets directly, preserving duplicates and executing faster',
          '`UNION` only works on numbers; `UNION ALL` works on text',
          '`UNION` is for relational DBs; `UNION ALL` is for NoSQL'
        ],
        correctIndex: 1,
        explanation: '`UNION` performs a distinct sorting step to discard duplicate records. `UNION ALL` simply appends rows without checking for uniqueness, making it significantly faster.',
        topic: 'Set Operations'
      },
      {
        id: 'sql-i-5',
        question: 'What does a Common Table Expression (CTE) defined with `WITH` clause provide?',
        options: [
          'A permanent table stored on physical disk',
          'A temporary, named result set that exists only within the execution scope of a single SQL statement, improving readability and enabling recursion',
          'An encrypted cache for user passwords',
          'A database trigger that runs on schedule'
        ],
        correctIndex: 1,
        explanation: 'CTEs (`WITH cte_name AS (...)`) create temporary named result sets that simplify complex joins/subqueries and allow recursive queries.',
        topic: 'CTEs'
      },
      {
        id: 'sql-i-6',
        question: 'What is the difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()` window functions when handling ties?',
        options: [
          '`ROW_NUMBER()` produces unique sequential numbers; `RANK()` leaves gaps in ranking after ties; `DENSE_RANK()` does not leave gaps after ties',
          '`RANK()` never allows ties; `DENSE_RANK()` randomly breaks ties',
          '`ROW_NUMBER()` only works on dates',
          'They all produce identical outputs in modern SQL'
        ],
        correctIndex: 0,
        explanation: 'For scores [100, 100, 90]: `ROW_NUMBER()` gives 1, 2, 3; `RANK()` gives 1, 1, 3 (gap); `DENSE_RANK()` gives 1, 1, 2 (no gap).',
        topic: 'Window Functions'
      },
      {
        id: 'sql-i-7',
        question: 'What is an INNER JOIN vs a CROSS JOIN in SQL?',
        options: [
          'INNER JOIN pairs rows matching a join condition; CROSS JOIN produces the Cartesian product (every row of Table A with every row of Table B)',
          'CROSS JOIN is faster than INNER JOIN for 1-to-1 relationships',
          'INNER JOIN deletes unmatched records from the disk',
          'CROSS JOIN is only supported in MySQL'
        ],
        correctIndex: 0,
        explanation: '`INNER JOIN` filters rows based on an `ON` predicate. `CROSS JOIN` produces the Cartesian product of `N x M` rows with no join condition.',
        topic: 'JOIN Mechanics'
      },
      {
        id: 'sql-i-8',
        question: 'What is Database Normalization and what is the primary objective of 3rd Normal Form (3NF)?',
        options: [
          'To merge all tables into one wide table for maximum speed',
          'To organize relational schemas to minimize redundancy and prevent anomalies by ensuring every non-key attribute is non-transitively dependent on the primary key',
          'To convert SQL databases into JSON document stores',
          'To automatically replicate data across cluster nodes'
        ],
        correctIndex: 1,
        explanation: '3NF ensures that all columns in a table depend directly on the primary key ("the key, the whole key, and nothing but the key"), eliminating transitive dependencies.',
        topic: 'Database Design'
      },
      {
        id: 'sql-i-9',
        question: 'What is the function of a SQL `VIEW`?',
        options: [
          'A physical copy of the database stored on a client machine',
          'A virtual table based on the result-set of a pre-defined SQL statement, offering security encapsulation and abstraction',
          'A hardware graphics component for database rendering',
          'A backup snapshot generated every midnight'
        ],
        correctIndex: 1,
        explanation: 'A VIEW is a virtual table that executes an underlying query dynamically, allowing access control restriction and simplified complex queries without duplicating data.',
        topic: 'Views'
      },
      {
        id: 'sql-i-10',
        question: 'What does `EXPLAIN` or `EXPLAIN ANALYZE` do when placed before a SQL query?',
        options: [
          'It translates SQL queries into Python code',
          'It displays the Query Execution Plan generated by the query optimizer, detailing index usage, table scans, and cost/execution time',
          'It repairs corrupted table indexes',
          'It runs query syntax validation without connecting to the DB'
        ],
        correctIndex: 1,
        explanation: '`EXPLAIN` shows the execution plan (sequential scans, index scans, hash joins, cost estimates) used by the database query optimizer.',
        topic: 'Query Optimization'
      }
    ],
    advance: [
      {
        id: 'sql-a-1',
        question: 'What are the 4 ANSI SQL Transaction Isolation Levels in increasing order of strictness?',
        options: [
          'Read Uncommitted < Read Committed < Repeatable Read < Serializable',
          'Read Committed < Read Uncommitted < Serializable < Snapshot',
          'Non-Locking < Shared < Exclusive < Strict',
          'Snapshot < Read Committed < Repeatable Read < Atomic'
        ],
        correctIndex: 0,
        explanation: 'From lowest to highest isolation: Read Uncommitted (allows dirty reads) -> Read Committed -> Repeatable Read (prevents non-repeatable reads) -> Serializable (prevents phantom reads via range locks or SSI).',
        topic: 'Isolation Levels'
      },
      {
        id: 'sql-a-2',
        question: 'What is Multi-Version Concurrency Control (MVCC) used in PostgreSQL and MySQL (InnoDB)?',
        options: [
          'A file system backup utility',
          'A concurrency control mechanism where readers do not block writers and writers do not block readers by maintaining multiple snapshots of data rows with transaction IDs (xmin/xmax)',
          'A method to run queries across multiple database versions simultaneously',
          'A clustering protocol for distributed Raft consensus'
        ],
        correctIndex: 1,
        explanation: 'MVCC provides point-in-time snapshots for transactions. Read queries read older committed versions without acquiring shared read locks, avoiding blocking writes.',
        topic: 'MVCC Internals'
      },
      {
        id: 'sql-a-3',
        question: 'Why does a `B+ Tree` index preferred over a standard binary search tree or B-Tree for relational database storage engines?',
        options: [
          'B+ Trees store all actual record pointers/data exclusively in leaf nodes linked as a doubly-linked list, allowing high fan-out and rapid range scans with minimal disk I/O',
          'B+ Trees require zero disk storage overhead',
          'B+ Trees are entirely in-memory and do not write to disk',
          'Binary search trees cannot handle text data'
        ],
        correctIndex: 0,
        explanation: 'In B+ Trees, internal nodes only store keys (high fan-out = shallow depth = few disk page reads), and all leaf nodes are sequentially linked, making range queries (`BETWEEN`, `>`, `<`) extremely fast.',
        topic: 'Storage Engines & B+ Trees'
      },
      {
        id: 'sql-a-4',
        question: 'What is a "Covering Index" in database optimization?',
        options: [
          'An index that covers the entire hard drive volume',
          'An index that contains all the columns referenced in a query (SELECT, WHERE, JOIN, ORDER BY), allowing the DB engine to satisfy the query entirely from index leaf pages without fetching table heap pages (Index-Only Scan)',
          'An index created on foreign keys only',
          'An encrypted index for GDPR compliance'
        ],
        correctIndex: 1,
        explanation: 'A covering index includes all queried columns. The query engine performs an "Index-Only Scan", bypassing expensive random I/O table lookups (heap fetches).',
        topic: 'Index Optimization'
      },
      {
        id: 'sql-a-5',
        question: 'What is the N+1 query problem in ORM frameworks (e.g., Hibernate, SQLAlchemy, Prisma) and how is it resolved?',
        options: [
          'A syntax error when querying more than N rows; resolved by adding LIMIT 1',
          'Executing 1 query to fetch a parent list and then executing N additional queries for child relationships; resolved by eager loading with JOINs (`JOIN FETCH` or `selectinload`)',
          'A memory leak in SQL connection pools; resolved by increasing pool size',
          'A distributed deadlock between N nodes; resolved by two-phase locking'
        ],
        correctIndex: 1,
        explanation: 'N+1 occurs when lazy loading executes 1 initial query followed by N individual sub-queries for associated entities. It is resolved using eager loading (`JOIN FETCH` / `include`).',
        topic: 'ORMs & Query Performance'
      },
      {
        id: 'sql-a-6',
        question: 'What is the purpose of Database Sharding versus Database Partitioning?',
        options: [
          'Partitioning distributes data across multiple independent database servers/nodes; Sharding splits a single table within one database instance',
          'Partitioning splits large tables into smaller logical parts on a single database instance (range/list/hash); Sharding horizontally distributes data across multiple physical database instances',
          'They are identical terms in modern cloud computing',
          'Sharding is strictly for NoSQL; Partitioning is strictly for SQL'
        ],
        correctIndex: 1,
        explanation: 'Table partitioning divides a huge table into smaller segments on the same database server, while horizontal sharding distributes shards across separate database cluster nodes.',
        topic: 'Scaling & Sharding'
      },
      {
        id: 'sql-a-7',
        question: 'What is a Deadlock in relational databases and how do modern engines handle it?',
        options: [
          'A hard disk failure; resolved by switching to backup power',
          'A situation where two or more transactions hold locks that the other transactions need to proceed, creating a cycle; resolved by the engine\'s deadlock detector aborting/rolling back one transaction (the victim)',
          'A corrupted index tree; resolved by re-indexing',
          'When database connection pool runs out of sockets'
        ],
        correctIndex: 1,
        explanation: 'Deadlocks occur when circular lock dependencies arise (e.g., T1 holds Lock A, wants Lock B; T2 holds Lock B, wants Lock A). The engine uses wait-for graphs to detect cycles and aborts one transaction.',
        topic: 'Concurrency & Deadlocks'
      },
      {
        id: 'sql-a-8',
        question: 'What is the Write-Ahead Log (WAL) or Redo Log in database management systems?',
        options: [
          'A log of user queries for billing and analytics',
          'An append-only log on non-volatile disk where transaction changes are recorded BEFORE they are written to data pages, ensuring Durability (crash recovery) and high-speed sequential writes',
          'A security audit trail for unauthorized logins',
          'A temporary cache stored in CPU L1 cache'
        ],
        correctIndex: 1,
        explanation: 'WAL ensures ACID durability. Sequential append-only logging ensures committed data can be recovered during unexpected power outages before dirty memory buffers are flushed to disk.',
        topic: 'WAL & Crash Recovery'
      },
      {
        id: 'sql-a-9',
        question: 'What is the difference between Optimistic Concurrency Control (OCC) and Pessimistic Concurrency Control (PCC)?',
        options: [
          'OCC uses exclusive row locks (`SELECT FOR UPDATE`); PCC assumes no conflicts and checks version timestamps on commit',
          'PCC acquires locks upfront assuming conflicts are frequent; OCC assumes conflicts are rare, allows uninhibited reads/writes, and validates version numbers before committing (aborting on conflict)',
          'OCC is only for read-only databases; PCC is for write-only databases',
          'PCC runs in memory; OCC writes directly to disk'
        ],
        correctIndex: 1,
        explanation: 'Pessimistic locking locks records ahead of time (preventing concurrency). Optimistic locking uses version columns (`version = version + 1`) and rolls back if another transaction modified the row concurrently.',
        topic: 'Concurrency Control'
      },
      {
        id: 'sql-a-10',
        question: 'In distributed databases, what is Two-Phase Commit (2PC)?',
        options: [
          'A protocol that verifies user credentials with two passwords',
          'An atomic commitment protocol where a coordinator asks all participating nodes to Prepare (Phase 1) and then instructs them to Commit or Abort (Phase 2) to ensure distributed atomicity',
          'Running a query twice to ensure caching consistency',
          'A replication mechanism where data is sent to two secondary replicas'
        ],
        correctIndex: 1,
        explanation: '2PC ensures distributed atomicity across multiple nodes. Phase 1 (Prepare): all nodes vote YES/NO and lock resources. Phase 2 (Commit/Rollback): coordinator commits if all voted YES, otherwise aborts.',
        topic: 'Distributed Transactions'
      }
    ]
  },

  // ==========================================
  // 3. AI / MACHINE LEARNING
  // ==========================================
  aiml: {
    beginner: [
      {
        id: 'ml-b-1',
        question: 'What is the fundamental difference between Supervised and Unsupervised Learning?',
        options: [
          'Supervised learning uses labeled training data with target outputs; Unsupervised learning discovers hidden patterns in unlabeled data',
          'Supervised learning does not use algorithms; Unsupervised learning uses neural networks only',
          'Supervised learning is only used for image recognition; Unsupervised is for text',
          'Supervised learning never suffers from overfitting'
        ],
        correctIndex: 0,
        explanation: 'Supervised learning trains on pairs of `(features, label)` to predict outcomes. Unsupervised learning finds intrinsic groupings/patterns without predefined ground-truth labels.',
        topic: 'ML Paradigms'
      },
      {
        id: 'ml-b-2',
        question: 'Which metric is best suited for evaluating a highly imbalanced classification dataset (e.g., 99% negative, 1% fraud)?',
        options: ['Raw Accuracy', 'Precision, Recall, and F1-Score (or PR-AUC)', 'Mean Squared Error', 'R-Squared Score'],
        correctIndex: 1,
        explanation: 'Raw accuracy is misleading on imbalanced datasets (predicting all negative gives 99% accuracy). Precision, Recall, F1-Score, and PR-AUC measure true positive detection rates effectively.',
        topic: 'Evaluation Metrics'
      },
      {
        id: 'ml-b-3',
        question: 'What is "Overfitting" in machine learning models?',
        options: [
          'When a model performs poorly on both training and test data',
          'When a model learns the training data and noise too well, achieving high training accuracy but failing to generalize to unseen test data',
          'When a dataset contains too many missing values',
          'When the learning rate is set too low'
        ],
        correctIndex: 1,
        explanation: 'Overfitting occurs when a model memorizes peculiarities and noise in training data instead of learning the underlying generalizable pattern.',
        topic: 'Overfitting & Generalization'
      },
      {
        id: 'ml-b-4',
        question: 'What is the purpose of splitting data into Train, Validation, and Test sets?',
        options: [
          'To reduce the size of the dataset to save memory',
          'Train: fit model parameters; Validation: tune hyperparameters and prevent overfitting; Test: unbiased final evaluation on unseen data',
          'To convert categorical data into numerical formats',
          'To generate synthetic augmented samples'
        ],
        correctIndex: 1,
        explanation: 'Train set learns model weights; Validation set evaluates architectures and tunes hyperparameters; Test set provides unbiased estimate of final model generalization.',
        topic: 'Validation Strategy'
      },
      {
        id: 'ml-b-5',
        question: 'Which of the following is an Unsupervised Learning algorithm?',
        options: ['Linear Regression', 'Support Vector Machines (SVM)', 'K-Means Clustering', 'Random Forest Classifier'],
        correctIndex: 2,
        explanation: 'K-Means is a classic unsupervised clustering algorithm that partitions unlabeled data points into `K` distinct clusters based on Euclidean distance to centroids.',
        topic: 'Clustering'
      },
      {
        id: 'ml-b-6',
        question: 'What is the primary purpose of One-Hot Encoding in data preprocessing?',
        options: [
          'To normalize numerical values between 0 and 1',
          'To convert categorical variables into binary dummy vectors without introducing artificial ordinal relationships',
          'To compress image files before feeding into neural networks',
          'To remove outliers from normal distributions'
        ],
        correctIndex: 1,
        explanation: 'One-hot encoding converts categorical labels (e.g., Red, Green, Blue) into binary columns `[1, 0, 0]`, preventing algorithms from assuming mathematical ordering (1 < 2 < 3).',
        topic: 'Feature Engineering'
      },
      {
        id: 'ml-b-7',
        question: 'What does the Confusion Matrix depict in binary classification?',
        options: [
          'CPU and memory usage during training',
          'Counts of True Positives, True Negatives, False Positives, and False Negatives',
          'The correlation coefficients between input features',
          'The gradient descent trajectory across epochs'
        ],
        correctIndex: 1,
        explanation: 'A confusion matrix compares actual target classes against predicted classes: True Positive (TP), True Negative (TN), False Positive (FP), and False Negative (FN).',
        topic: 'Classification Metrics'
      },
      {
        id: 'ml-b-8',
        question: 'What is the output range of the standard Sigmoid activation function \(\sigma(z) = \frac{1}{1 + e^{-z}}\)?',
        options: ['[-1, 1]', '[0, 1]', '(-\infty, +\infty)', '[0, +\infty)'],
        correctIndex: 1,
        explanation: 'The Sigmoid function maps any real-valued number to the interval (0, 1), making it ideal for interpreting outputs as probabilities.',
        topic: 'Activation Functions'
      },
      {
        id: 'ml-b-9',
        question: 'What is K-Fold Cross-Validation?',
        options: [
          'Multiplying data points by `K` to balance datasets',
          'Splitting data into `K` equal subsets, training on `K-1` folds and testing on the remaining fold, repeating `K` times to obtain robust performance estimates',
          'Running `K` different algorithms on the same dataset simultaneously',
          'Dropping `K` random features during preprocessing'
        ],
        correctIndex: 1,
        explanation: 'K-Fold Cross-Validation ensures every data point gets tested exactly once and used in training `K-1` times, reducing bias associated with random single train-test splits.',
        topic: 'Model Validation'
      },
      {
        id: 'ml-b-10',
        question: 'Which loss function is standard for Linear Regression models?',
        options: ['Binary Cross-Entropy', 'Mean Squared Error (MSE) / L2 Loss', 'Categorical Cross-Entropy', 'Hinge Loss'],
        correctIndex: 1,
        explanation: 'Mean Squared Error (MSE), which computes the average squared difference between predictions and true continuous values, is the standard loss for regression.',
        topic: 'Loss Functions'
      }
    ],
    intermediate: [
      {
        id: 'ml-i-1',
        question: 'What is the Bias-Variance Tradeoff in Machine Learning?',
        options: [
          'High Bias leads to Overfitting; High Variance leads to Underfitting',
          'High Bias causes Underfitting (oversimplified model missing true patterns); High Variance causes Overfitting (excessive sensitivity to small fluctuations in training data)',
          'Bias measures training time; Variance measures test execution speed',
          'Bias applies only to neural networks; Variance applies only to decision trees'
        ],
        correctIndex: 1,
        explanation: 'Total Error = Bias^2 + Variance + Irreducible Error. High bias indicates underfitting (model too rigid), while high variance indicates overfitting (model memorizes training noise).',
        topic: 'Bias-Variance Tradeoff'
      },
      {
        id: 'ml-i-2',
        question: 'What is the difference between Bagging (e.g., Random Forest) and Boosting (e.g., XGBoost, LightGBM)?',
        options: [
          'Bagging trains models sequentially to correct past errors; Boosting trains models in parallel',
          'Bagging trains multiple independent models in parallel on bootstrap samples to reduce variance; Boosting trains models sequentially, where each new model focuses on errors made by previous models to reduce bias',
          'Bagging is only for classification; Boosting is only for regression',
          'Bagging uses neural networks; Boosting uses linear models'
        ],
        correctIndex: 1,
        explanation: 'Bagging (Bootstrap Aggregation) aggregates parallel independent trees to reduce variance. Boosting fits sequential weak learners on residuals/weighted errors to reduce bias.',
        topic: 'Ensemble Learning'
      },
      {
        id: 'ml-i-3',
        question: 'What is the distinction between L1 Regularization (Lasso) and L2 Regularization (Ridge)?',
        options: [
          'L1 adds squared weights; L2 adds absolute weights',
          'L1 adds absolute value penalty \((\lambda \sum |w_i|)\) leading to sparse feature selection (coefficients driven to zero); L2 adds squared penalty \((\lambda \sum w_i^2)\) shrinking weights smoothly without setting them strictly to zero',
          'L1 is used for clustering; L2 is for classification',
          'L2 causes more extreme overfitting than no regularization'
        ],
        correctIndex: 1,
        explanation: 'Lasso (L1) creates sparse models by forcing unimportant feature weights exactly to 0 (acting as automatic feature selector). Ridge (L2) shrinks all weights toward 0 without eliminating them.',
        topic: 'Regularization'
      },
      {
        id: 'ml-i-4',
        question: 'How does Principal Component Analysis (PCA) reduce data dimensionality?',
        options: [
          'By removing random rows with missing values',
          'By finding orthogonal axes (eigenvectors of the covariance matrix) that maximize the variance of the projected data points',
          'By training a non-linear deep autoencoder with backprop',
          'By converting numerical values to ordinal ranks'
        ],
        correctIndex: 1,
        explanation: 'PCA performs eigendecomposition on the feature covariance matrix (or SVD), rotating data onto orthogonal principal components ordered by explained variance.',
        topic: 'Dimensionality Reduction'
      },
      {
        id: 'ml-i-5',
        question: 'What does the ROC-AUC score measure in classification?',
        options: [
          'The average training loss across epochs',
          'The area under the True Positive Rate vs False Positive Rate curve across all possible classification probability thresholds',
          'The computational complexity of the model in Big-O',
          'The ratio of true positive features to total dataset size'
        ],
        correctIndex: 1,
        explanation: 'ROC-AUC evaluates how well a classifier ranks positive samples higher than negative samples across all threshold cutoffs (1.0 = perfect, 0.5 = random guess).',
        topic: 'Model Evaluation'
      },
      {
        id: 'ml-i-6',
        question: 'What is the Kernel Trick in Support Vector Machines (SVM)?',
        options: [
          'A technique to speed up CPU GPU memory transfer',
          'A mathematical method that implicitly computes dot products in a high-dimensional feature space without explicitly mapping data points into that higher dimension',
          'A method to remove outliers from linear boundaries',
          'A trick to convert supervised models into unsupervised clusters'
        ],
        correctIndex: 1,
        explanation: 'The kernel trick (e.g. RBF/Polynomial kernel) enables linear separators in high/infinite dimensional Hilbert spaces by calculating inner products in input space directly.',
        topic: 'Support Vector Machines'
      },
      {
        id: 'ml-i-7',
        question: 'What is the difference between Gradient Descent, Stochastic Gradient Descent (SGD), and Mini-Batch Gradient Descent?',
        options: [
          'Gradient Descent computes loss on the entire dataset per update; SGD updates weights using 1 sample at a time; Mini-Batch updates using small batches (e.g., 32-256 samples)',
          'SGD is always slower than Batch Gradient Descent',
          'Mini-Batch cannot be accelerated on GPUs',
          'Batch Gradient Descent cannot reach global minima for convex loss'
        ],
        correctIndex: 0,
        explanation: 'Batch GD uses the full dataset per step (slow, smooth). SGD uses 1 sample (noisy, fast). Mini-Batch balances vectorization efficiency with stochastic gradient noise.',
        topic: 'Optimization'
      },
      {
        id: 'ml-i-8',
        question: 'Why is Feature Scaling (Standardization/Min-Max Scaling) critical for distance-based algorithms like KNN, SVM, and Gradient Descent?',
        options: [
          'It is required by the Python interpreter to compile code',
          'Features with larger numerical ranges will dominate distance calculations and gradient updates regardless of their actual predictive importance',
          'It prevents dataset rows from being deleted',
          'It automatically converts non-linear patterns into straight lines'
        ],
        correctIndex: 1,
        explanation: 'Distance metrics (Euclidean) and gradient descent step sizes are sensitive to magnitude. Unscaled features with large scales overpower smaller, equally significant features.',
        topic: 'Feature Scaling'
      },
      {
        id: 'ml-i-9',
        question: 'What is Data Leakage in a Machine Learning pipeline?',
        options: [
          'A database breach where user passwords are exposed',
          'When information from the target variable or test/validation set inadvertently leaks into the training pipeline (e.g., scaling before train-test split)',
          'When GPU RAM overflows into disk swap space',
          'When a decision tree creates more than 100 leaf nodes'
        ],
        correctIndex: 1,
        explanation: 'Data leakage occurs when test/future data influences feature extraction or model training, causing unrealistically optimistic validation metrics that collapse in production.',
        topic: 'ML Engineering & Leakage'
      },
      {
        id: 'ml-i-10',
        question: 'What is SHAP (SHapley Additive exPlanations) used for in Machine Learning interpretability?',
        options: [
          'To compress model weights for mobile devices',
          'To explain individual model predictions by computing the fair marginal contribution of each feature based on cooperative Game Theory',
          'To automatically tune hyperparameters using genetic algorithms',
          'To impute missing data in pandas DataFrames'
        ],
        correctIndex: 1,
        explanation: 'SHAP calculates Shapley values from game theory to quantify how much each input feature contributed positively or negatively to an individual prediction.',
        topic: 'Explainable AI (XAI)'
      }
    ],
    advance: [
      {
        id: 'ml-a-1',
        question: 'In XGBoost, how is the optimal split for a continuous feature found and regularized?',
        options: [
          'By randomly selecting a threshold with no loss evaluation',
          'By computing exact or approximate greedy quantile sketches using the first (gradient \(g_i\)) and second-order (Hessian \(h_i\)) Taylor expansions of the loss function, penalized by tree complexity \(\gamma T + \frac{1}{2}\lambda \sum w^2\)',
          'By running K-Means clustering on the residuals',
          'By performing full backpropagation across all decision trees'
        ],
        correctIndex: 1,
        explanation: 'XGBoost uses a 2nd-order Taylor approximation of the loss function (gradient + hessian) to analytically score candidate split gain while incorporating L1/L2 tree regularization.',
        topic: 'XGBoost Internals'
      },
      {
        id: 'ml-a-2',
        question: 'What is the distinction between Concept Drift and Covariate Shift in production ML systems?',
        options: [
          'Concept Drift is change in input feature distribution \(P(X)\); Covariate Shift is change in target distribution \(P(Y)\)',
          'Covariate Shift occurs when the input distribution \(P(X)\) changes while \(P(Y|X)\) remains constant; Concept Drift occurs when the conditional relationship between features and target \(P(Y|X)\) fundamentally changes over time',
          'They refer to the exact same phenomenon in statistics',
          'Concept Drift only happens in supervised NLP models'
        ],
        correctIndex: 1,
        explanation: 'Covariate Shift: features change (e.g. younger demographic joins) but underlying behavior per demographic is stable. Concept Drift: the fundamental relationship changes (e.g. consumer spending behavior changes during a pandemic).',
        topic: 'MLOps & Drift'
      },
      {
        id: 'ml-a-3',
        question: 'What is the mathematical rationale behind using Bayesian Optimization over Random Search or Grid Search for hyperparameter tuning?',
        options: [
          'Bayesian optimization tests every combination in parallel in O(1) time',
          'It constructs a probabilistic surrogate model (e.g., Gaussian Process) of the objective function and uses an Acquisition Function (e.g., Expected Improvement) to intelligently balance exploration and exploitation',
          'It guarantees zero variance on validation sets',
          'It converts non-convex loss functions into convex parabolas'
        ],
        correctIndex: 1,
        explanation: 'Bayesian Optimization models the unknown objective function as a Gaussian Process and queries hyperparameters where expected improvement is highest, finding optima in far fewer iterations.',
        topic: 'Hyperparameter Optimization'
      },
      {
        id: 'ml-a-4',
        question: 'What is the Isolation Forest algorithm and how does it detect anomalies in multidimensional datasets?',
        options: [
          'By clustering data into spherical hyperspheres and checking radii',
          'By recursively partitioning features with random splits; anomalies require significantly fewer splits to isolate (shorter average tree path length) than normal dense points',
          'By calculating the inverse matrix of the covariance tensor',
          'By training a supervised convolutional neural network'
        ],
        correctIndex: 1,
        explanation: 'Isolation Forest isolates anomalies instead of profiling normal points. Because anomalies are sparse and distinct, they have significantly shorter path lengths in random partition trees.',
        topic: 'Anomaly Detection'
      },
      {
        id: 'ml-a-5',
        question: 'What is the difference between Contrastive Loss and Triplet Loss in self-supervised metric learning?',
        options: [
          'Contrastive Loss takes pairs of samples (positive/negative); Triplet Loss takes 3 samples simultaneously (Anchor, Positive, Negative) and minimizes \(\max(0, d(a,p) - d(a,n) + \alpha)\)',
          'Contrastive loss is used only for text; Triplet loss is used only for audio',
          'Triplet loss does not use Euclidean distance',
          'Contrastive loss does not require embeddings'
        ],
        correctIndex: 0,
        explanation: 'Contrastive loss pulls pairs together or pushes them apart. Triplet loss compares an Anchor to both a Positive and Negative simultaneously, enforcing a margin \(\alpha\).',
        topic: 'Metric Learning & Embeddings'
      },
      {
        id: 'ml-a-6',
        question: 'Why does the Expectation-Maximization (EM) algorithm guarantee monotonic convergence to a local maximum of the data log-likelihood in Gaussian Mixture Models (GMM)?',
        options: [
          'Because it uses Newton-Raphson second derivatives on each step',
          'Because the E-step constructs a tight lower bound (via Jensen\'s Inequality on KL divergence), and the M-step maximizes this surrogate lower bound',
          'Because all Gaussian mixtures have strictly convex global surfaces',
          'Because it eliminates latent variables before running'
        ],
        correctIndex: 1,
        explanation: 'EM maximizes the Evidence Lower Bound (ELBO). The E-step finds the tightest lower bound at current parameter estimates; the M-step maximizes it, guaranteeing monotonic likelihood growth.',
        topic: 'Probabilistic Graphical Models'
      },
      {
        id: 'ml-a-7',
        question: 'What is the purpose of Vector Quantization and Hierarchical Navigable Small World (HNSW) graphs in Vector Databases (e.g., Pinecone, Milvus, Chroma)?',
        options: [
          'To compress SQL table columns to 8-bit integers',
          'To enable Approximate Nearest Neighbor (ANN) search across millions of high-dimensional embedding vectors with sub-linear \(O(\log N)\) query latency',
          'To encrypt vector embeddings for transmission over HTTPS',
          'To replace Transformer self-attention layers'
        ],
        correctIndex: 1,
        explanation: 'HNSW graphs and quantization allow sub-linear Approximate Nearest Neighbor (ANN) search over massive embedding spaces, powering modern semantic search and RAG architectures.',
        topic: 'Vector DBs & ANN Search'
      },
      {
        id: 'ml-a-8',
        question: 'What is the curse of dimensionality and how does it affect distance metrics in high-dimensional spaces \((d > 1000)\)?',
        options: [
          'Distances become zero for all points',
          'The volume of space grows exponentially, data becomes extremely sparse, and the distance between the nearest and farthest neighbor approaches zero relative to the average distance (distance metric concentration)',
          'Algorithms run out of memory due to 64-bit integer overflows',
          'Features automatically become collinearly correlated'
        ],
        correctIndex: 1,
        explanation: 'In high dimensions, volume grows exponentially, making all data points appear roughly equidistant from one another, degrading the discriminative power of Euclidean distance metrics.',
        topic: 'Curse of Dimensionality'
      },
      {
        id: 'ml-a-9',
        question: 'What is the Thompson Sampling algorithm in Multi-Armed Bandits / Reinforcement Learning?',
        options: [
          'A greedy strategy that always pulls the current best-performing arm',
          'A Bayesian randomized probability matching algorithm that samples from the posterior distribution of each arm\'s reward and chooses the arm with highest sampled value, organically balancing exploration and exploitation',
          'A supervised neural network with two hidden layers',
          'A deterministic round-robin queue'
        ],
        correctIndex: 1,
        explanation: 'Thompson Sampling maintains posterior distributions for each action and samples from them to pick actions, naturally exploring uncertain options and exploiting proven winners.',
        topic: 'Bandits & RL'
      },
      {
        id: 'ml-a-10',
        question: 'How does Quantization-Aware Training (QAT) differ from Post-Training Quantization (PTQ) when deploying models to edge devices (e.g. INT8)?',
        options: [
          'PTQ requires retraining the entire model from scratch; QAT does not',
          'QAT models low-precision rounding errors during training forward passes (using straight-through estimators for backprop), allowing the model to adapt and preserve accuracy better than PTQ',
          'PTQ is only used for float64 precision',
          'QAT converts floating point numbers to ASCII strings'
        ],
        correctIndex: 1,
        explanation: 'QAT simulates INT8 quantization during training so weights adjust to quantization error, yielding significantly higher accuracy than blindly quantizing weights after training (PTQ).',
        topic: 'Model Compression & Edge AI'
      }
    ]
  },

  // ==========================================
  // 4. DEEP LEARNING
  // ==========================================
  deep_learning: {
    beginner: [
      {
        id: 'dl-b-1',
        question: 'What is an Artificial Neural Network (ANN) primarily composed of?',
        options: [
          'Relational tables and primary keys',
          'Layers of interconnected artificial neurons (nodes), weights, biases, and activation functions',
          'Binary search trees and hash tables',
          'Microprocessors and physical resistors'
        ],
        correctIndex: 1,
        explanation: 'An ANN consists of an input layer, hidden layers of neurons with learnable weights and biases, non-linear activation functions, and an output layer.',
        topic: 'Neural Network Basics'
      },
      {
        id: 'dl-b-2',
        question: 'What is the purpose of an Activation Function in a neural network?',
        options: [
          'To reset weights to zero before each epoch',
          'To introduce non-linearity into the network, enabling it to learn complex non-linear patterns',
          'To compress the model weights for storage',
          'To prevent the computer CPU from overheating'
        ],
        correctIndex: 1,
        explanation: 'Without non-linear activation functions, stacking multiple dense layers would simply collapse mathematically into a single linear transformation \((W_2(W_1 x + b_1) + b_2 = W_{comb} x + b_{comb})\).',
        topic: 'Activation Functions'
      },
      {
        id: 'dl-b-3',
        question: 'What does the Backpropagation algorithm compute in deep neural networks?',
        options: [
          'The forward inference predictions for test images',
          'The gradients of the loss function with respect to every learnable weight and bias using the mathematical Chain Rule of calculus',
          'The number of layers required for a dataset',
          'The optimal learning rate automatically'
        ],
        correctIndex: 1,
        explanation: 'Backpropagation applies the calculus chain rule backwards from output loss to input layer, calculating partial derivatives \(\frac{\partial L}{\partial W}\) to guide gradient descent.',
        topic: 'Backpropagation'
      },
      {
        id: 'dl-b-4',
        question: 'Which activation function is defined as \(f(x) = \max(0, x)\)?',
        options: ['Sigmoid', 'Tanh', 'ReLU (Rectified Linear Unit)', 'Softmax'],
        correctIndex: 2,
        explanation: 'ReLU outputs \(x\) for positive values and 0 for negative values. It is widely used because it avoids vanishing gradients for positive inputs and computes very fast.',
        topic: 'ReLU'
      },
      {
        id: 'dl-b-5',
        question: 'What is the primary role of a Convolutional Neural Network (CNN)?',
        options: [
          'Sorting text files alphabetically',
          'Processing spatial grid-structured data like images by applying convolutional filters (kernels) to extract local features',
          'Running database transactions in parallel',
          'Translating audio to text without neural layers'
        ],
        correctIndex: 1,
        explanation: 'CNNs use parameter-sharing 2D/3D filters (kernels) to capture spatial hierarchies and translation-invariant features (edges, textures, shapes) in images.',
        topic: 'CNNs'
      },
      {
        id: 'dl-b-6',
        question: 'What is "Epoch" in deep learning terminology?',
        options: [
          'The time it takes to process one single batch of data',
          'One complete pass of the entire training dataset through the neural network',
          'The total number of parameters in the model',
          'The learning rate multiplier'
        ],
        correctIndex: 1,
        explanation: 'An epoch represents one full cycle where every training sample has been seen once in the forward and backward passes.',
        topic: 'Training Terminology'
      },
      {
        id: 'dl-b-7',
        question: 'What is Dropout in neural network regularization?',
        options: [
          'Removing corrupted samples from the dataset',
          'Randomly setting a fraction of neuron outputs to zero during each training forward pass to prevent co-adaptation',
          'Terminating training early if validation loss increases',
          'Dropping the last classification layer of the model'
        ],
        correctIndex: 1,
        explanation: 'Dropout randomly deactivates a percentage of neurons during training, forcing the network to learn redundant, robust representations instead of relying on specific neurons.',
        topic: 'Regularization'
      },
      {
        id: 'dl-b-8',
        question: 'Which loss function is commonly used for multi-class classification problems with one-hot encoded targets?',
        options: ['Mean Squared Error', 'Categorical Cross-Entropy', 'Binary Cross-Entropy', 'Cosine Similarity Loss'],
        correctIndex: 1,
        explanation: 'Categorical Cross-Entropy measures the performance of a classification model whose output is a probability distribution generated by a Softmax layer.',
        topic: 'Loss Functions'
      },
      {
        id: 'dl-b-9',
        question: 'What is the purpose of Pooling layers (e.g., MaxPooling) in CNN architectures?',
        options: [
          'To increase the number of trainable weights',
          'To downsample spatial dimensions (height/width), reducing computational load and providing translation invariance',
          'To normalize color channels across RGB images',
          'To double the resolution of images'
        ],
        correctIndex: 1,
        explanation: 'Pooling reduces feature map resolution by selecting the maximum or average value in small regions, saving memory and providing robustness to minor shifts.',
        topic: 'CNN Architecture'
      },
      {
        id: 'dl-b-10',
        question: 'What is Learning Rate in deep learning optimization?',
        options: [
          'The speed at which the GPU fan spins during training',
          'A hyperparameter that controls the step size taken in the direction of the negative gradient during weight updates',
          'The number of epochs required for convergence',
          'The accuracy improvement per hour'
        ],
        correctIndex: 1,
        explanation: 'Learning rate \(\eta\) determines how much weights change in response to estimated error gradient: \(W_{new} = W_{old} - \eta \nabla L\).',
        topic: 'Optimizers'
      }
    ],
    intermediate: [
      {
        id: 'dl-i-1',
        question: 'What causes the Vanishing Gradient problem in deep networks using Sigmoid or Tanh activations?',
        options: [
          'Weights becoming infinitely large',
          'The derivative of Sigmoid/Tanh is strictly \(\le 0.25\); repeatedly multiplying small decimals across many layers during backpropagation causes gradients to exponentially decay toward zero',
          'The learning rate being set to infinity',
          'Division by zero during loss computation'
        ],
        correctIndex: 1,
        explanation: 'Since \(\sigma\'(z) \le 0.25\), chain rule multiplication across deep layers causes gradients to vanish, preventing early layers from updating their weights.',
        topic: 'Vanishing Gradients'
      },
      {
        id: 'dl-i-2',
        question: 'What is the core architectural innovation of Residual Networks (ResNet)?',
        options: [
          'Removing all convolutional layers in favor of dense layers',
          'Introducing "Skip / Shortcut Connections" that bypass one or more layers \((y = F(x) + x)\), allowing gradients to flow unimpeded directly through the network',
          'Using recurrent feedback loops in vision models',
          'Training on unlabeled image data only'
        ],
        correctIndex: 1,
        explanation: 'ResNet introduces identity shortcut connections (\(y = F(x) + x\)) allowing gradient signals to propagate directly back through hundreds of layers without vanishing.',
        topic: 'ResNet & Architecture'
      },
      {
        id: 'dl-i-3',
        question: 'How does Batch Normalization (BatchNorm) accelerate training and improve stability?',
        options: [
          'By increasing the learning rate to 10.0',
          'By normalizing layer inputs across the mini-batch to have zero mean and unit variance, followed by learnable scale (\(\gamma\)) and shift (\(\beta\)) parameters, reducing internal covariate shift',
          'By sorting inputs alphabetically',
          'By converting weights to 8-bit integers'
        ],
        correctIndex: 1,
        explanation: 'BatchNorm standardizes intermediate activations across each mini-batch, smoothing the optimization landscape and allowing higher learning rates with less sensitivity to weight initialization.',
        topic: 'Normalization Techniques'
      },
      {
        id: 'dl-i-4',
        question: 'What is the key advantage of the Adam (Adaptive Moment Estimation) optimizer over standard SGD?',
        options: [
          'It does not require calculating loss derivatives',
          'It combines the advantages of Momentum (first moment: exponentially decaying average of past gradients) and RMSprop (second moment: exponentially decaying average of squared gradients) for adaptive per-parameter learning rates',
          'It eliminates the need for a validation set',
          'It works without backpropagation'
        ],
        correctIndex: 1,
        explanation: 'Adam computes individual adaptive learning rates for different parameters by estimating the first (mean) and second (uncentered variance) moments of the gradients.',
        topic: 'Optimizers'
      },
      {
        id: 'dl-i-5',
        question: 'Why do Recurrent Neural Networks (RNNs) struggle with long-term sequence dependencies, and how do LSTMs solve this?',
        options: [
          'RNNs cannot process text; LSTMs convert text to images',
          'Standard RNNs suffer from vanishing/exploding gradients over time steps; LSTMs introduce a Constant Error Carousel (Cell State) regulated by Forget, Input, and Output Gates',
          'LSTMs eliminate all matrix multiplications',
          'RNNs only support forward passes with no training'
        ],
        correctIndex: 1,
        explanation: 'LSTMs protect gradient flow over long time horizons using an additive Cell State controlled by gating mechanisms (Forget, Input, Output gates).',
        topic: 'LSTMs & RNNs'
      },
      {
        id: 'dl-i-6',
        question: 'What is Transfer Learning in deep learning and what are its primary benefits?',
        options: [
          'Transferring code from Python to C++',
          'Taking a model pre-trained on a massive dataset (e.g., ImageNet, WebText) and fine-tuning it on a smaller target domain dataset, dramatically reducing training time and data requirements',
          'Copying weights from CPU RAM to GPU VRAM',
          'Sending training checkpoints over a network socket'
        ],
        correctIndex: 1,
        explanation: 'Transfer learning leverages features learned from large-scale pre-training (e.g., visual edge detectors or linguistic grammar) to achieve high accuracy on specialized target tasks with limited data.',
        topic: 'Transfer Learning'
      },
      {
        id: 'dl-i-7',
        question: 'What is the difference between Early Stopping and Weight Decay?',
        options: [
          'Early Stopping stops training when validation metric stops improving; Weight Decay adds an L2 penalty to the loss function to shrink weights',
          'Weight decay terminates epochs early; Early stopping shrinks weights',
          'They are two names for the exact same algorithm',
          'Weight decay only works on decision trees'
        ],
        correctIndex: 0,
        explanation: 'Early Stopping halts optimization when validation loss starts degrading. Weight Decay is L2 regularization that penalizes large weight magnitudes.',
        topic: 'Regularization'
      },
      {
        id: 'dl-i-8',
        question: 'What is the purpose of Autoencoders in deep learning?',
        options: [
          'To generate automatic Python code documentation',
          'To learn efficient compressed representations (latent space) of data by training an encoder to compress input and a decoder to reconstruct it',
          'To encode passwords for cloud storage',
          'To replace convolutional layers in object detection'
        ],
        correctIndex: 1,
        explanation: 'Autoencoders are self-supervised networks trained to reconstruct their input \(x \approx \text{Decoder}(\text{Encoder}(x))\), forcing the bottleneck layer to capture the most salient features.',
        topic: 'Autoencoders'
      },
      {
        id: 'dl-i-9',
        question: 'How do Generative Adversarial Networks (GANs) operate during training?',
        options: [
          'A single network is trained using supervised regression labels',
          'Two neural networks compete in a zero-sum game: a Generator creates synthetic candidates and a Discriminator tries to distinguish real data from generated fakes',
          'Two networks share identical weights to compute cosine distance',
          'A classifier predicts next tokens in a sequence autoregressively'
        ],
        correctIndex: 1,
        explanation: 'GANs pit a Generator (which learns to synthesize realistic data) against a Discriminator (which learns to classify real vs fake), driving both to improve via minimax optimization.',
        topic: 'GANs'
      },
      {
        id: 'dl-i-10',
        question: 'What is Xavier (Glorot) and He (Kaiming) Weight Initialization designed to prevent?',
        options: [
          'Overheating of memory chips',
          'Vanishing or exploding activations and gradients in initial forward/backward passes by scaling initial random weights based on fan-in and fan-out layer sizes',
          'Data leakage between train and test sets',
          'Syntax errors in deep learning frameworks'
        ],
        correctIndex: 1,
        explanation: 'He/Xavier initialization scales variance of initial random weights relative to input/output dimensions, ensuring activations maintain roughly consistent variance across layers.',
        topic: 'Weight Initialization'
      }
    ],
    advance: [
      {
        id: 'dl-a-1',
        question: 'What is the mathematical formulation of Scaled Dot-Product Attention in Transformer architectures?',
        options: [
          '\(\text{Attention}(Q, K, V) = \text{ReLU}(Q \cdot K^T) \cdot V\)',
          '\(\text{Attention}(Q, K, V) = \text{Softmax}\left(\frac{Q K^T}{\sqrt{d_k}}\right) V\)',
          '\(\text{Attention}(Q, K, V) = \text{Sigmoid}(Q + K + V)\)',
          '\(\text{Attention}(Q, K, V) = \frac{Q \cdot V}{K}\)'
        ],
        correctIndex: 1,
        explanation: 'Scaled Dot-Product Attention calculates query-key similarity matrices, scales by \(\frac{1}{\sqrt{d_k}}\) to prevent large magnitude values that push Softmax into vanishing gradient regions, and multiplies by Values.',
        topic: 'Transformers & Attention'
      },
      {
        id: 'dl-a-2',
        question: 'Why is FlashAttention significantly faster than standard PyTorch Multi-Head Attention despite computing the exact same mathematical result?',
        options: [
          'It quantizes all weights to binary 1-bit representations',
          'It reorganizes attention computation into tiled blocks utilizing GPU SRAM (fast on-chip memory), avoiding materializing the full \(N \times N\) attention matrix into slow high-bandwidth GPU HBM memory (IO-awareness)',
          'It removes the Softmax layer entirely',
          'It runs on CPU instead of GPU'
        ],
        correctIndex: 1,
        explanation: 'FlashAttention is an IO-aware algorithm that tiles computation to compute exact softmax incrementally in GPU SRAM without writing the \(O(N^2)\) intermediate attention matrix to slow HBM.',
        topic: 'FlashAttention & GPU IO'
      },
      {
        id: 'dl-a-3',
        question: 'What is LoRA (Low-Rank Adaptation) for Parameter-Efficient Fine-Tuning (PEFT) of Large Language Models?',
        options: [
          'Deleting 90% of model layers to run on mobile phones',
          'Freezing original pre-trained weights \(W_0 \in \mathbb{R}^{d \times k}\) and injecting trainable rank-decomposition matrices \(\Delta W = B \cdot A\) where \(B \in \mathbb{R}^{d \times r}, A \in \mathbb{R}^{r \times k}\) with \(r \ll \min(d, k)\)',
          'Training language models strictly on low-resolution image tokens',
          'Replacing self-attention with recurrent convolutional layers'
        ],
        correctIndex: 1,
        explanation: 'LoRA freezes base model weights and decomposes weight updates into two low-rank matrices \(A\) and \(B\), reducing trainable parameters by 99%+ with virtually no performance loss.',
        topic: 'PEFT & LoRA'
      },
      {
        id: 'dl-a-4',
        question: 'What is the difference between Rotary Position Embedding (RoPE) and standard Absolute Sinusoidal Positional Encoding in Transformers?',
        options: [
          'RoPE encodes absolute token indices as static vectors added to embeddings',
          'RoPE applies a rotation matrix to Query and Key vectors in the complex plane, naturally incorporating relative position information into their dot product \(\langle R_m q, R_n k \rangle = f(q, k, m - n)\)',
          'RoPE eliminates the need for token embeddings entirely',
          'Sinusoidal encoding works only for images'
        ],
        correctIndex: 1,
        explanation: 'RoPE rotates queries and keys in 2D chunks of embedding space by an angle proportional to position, ensuring the inner product depends strictly on relative token distance \((m - n)\).',
        topic: 'Positional Encodings'
      },
      {
        id: 'dl-a-5',
        question: 'What is the fundamental mechanism of Denoising Diffusion Probabilistic Models (DDPM) in generative AI?',
        options: [
          'A Discriminator and Generator playing a minimax game',
          'A forward process that gradually corrupts data with Gaussian noise across \(T\) timesteps, and a learned reverse neural network (U-Net) that predicts and subtracts the noise to synthesize clean data from pure noise',
          'An autoencoder trained strictly on black-and-white photos',
          'A Markov decision process using Q-learning'
        ],
        correctIndex: 1,
        explanation: 'Diffusion models train a network to reverse a discrete or continuous Markov forward noise process, iteratively denoising random Gaussian noise into high-fidelity images or audio.',
        topic: 'Diffusion Models'
      },
      {
        id: 'dl-a-6',
        question: 'In distributed model training, what is the difference between ZeRO-1, ZeRO-2, and ZeRO-3 (Zero Redundancy Optimizer in DeepSpeed)?',
        options: [
          'ZeRO-1 shards optimizer states; ZeRO-2 shards optimizer states + gradients; ZeRO-3 shards optimizer states + gradients + model parameters across data-parallel GPUs',
          'ZeRO-3 runs on a single CPU; ZeRO-1 runs on a supercomputer',
          'ZeRO-1 is for vision; ZeRO-3 is for audio',
          'ZeRO-2 duplicates all weights on all GPUs to eliminate communication'
        ],
        correctIndex: 0,
        explanation: 'ZeRO eliminates memory redundancy across data-parallel ranks by sharding: ZeRO Stage 1 shards 16-bit optimizer states; Stage 2 shards gradients; Stage 3 shards model parameters.',
        topic: 'Distributed Training & ZeRO'
      },
      {
        id: 'dl-a-7',
        question: 'What is the role of the KV Cache in Transformer autoregressive text generation during inference?',
        options: [
          'It caches user passwords in Redis',
          'It stores previously computed Key and Value projection tensors for preceding tokens so they do not need to be recomputed for every newly generated token, reducing inference from \(O(N^2)\) to \(O(N)\) per step',
          'It compresses vocabulary tokens into Huffman codes',
          'It caches GPU memory allocations to prevent fragmentation'
        ],
        correctIndex: 1,
        explanation: 'During autoregressive decoding, past tokens do not change. Caching their Key and Value vectors prevents redundant re-computation of the entire context window on each generation step.',
        topic: 'LLM Inference & KV Cache'
      },
      {
        id: 'dl-a-8',
        question: 'What is Mixture of Experts (MoE) architecture (e.g. Mixtral 8x7B, DeepSeek-V3)?',
        options: [
          'A model trained by multiple human software engineers simultaneously',
          'Replacing dense feedforward layers with multiple parallel "expert" sub-networks, using a learnable gating router to conditionally activate only top-K experts per token, increasing parameter capacity with constant compute FLOPs',
          'An ensemble of random forest models combined with an SVM',
          'A network where all weights are shared across all layers'
        ],
        correctIndex: 1,
        explanation: 'MoE routes each token dynamically to a sparse subset of expert feedforward networks (e.g. top-2 of 8), allowing massive parameter scale while keeping FLOPs per token low.',
        topic: 'Mixture of Experts'
      },
      {
        id: 'dl-a-9',
        question: 'What is Direct Preference Optimization (DPO) compared to traditional RLHF with PPO?',
        options: [
          'DPO requires training a separate reward model and running policy gradient reinforcement learning',
          'DPO mathematically reparameterizes the reward function directly into the policy loss, training directly on paired preferred/dispreferred responses with binary cross-entropy without needing a separate reward model or RL loop',
          'DPO is strictly used for computer vision tasks',
          'DPO requires human annotators to score tokens in real-time during training'
        ],
        correctIndex: 1,
        explanation: 'DPO shows that the language model policy itself implicitly defines the reward function, enabling stable, closed-form preference optimization directly on dataset preferences without PPO instability.',
        topic: 'Alignment & DPO'
      },
      {
        id: 'dl-a-10',
        question: 'What is Speculative Decoding in LLM acceleration?',
        options: [
          'Guessing prompts before the user submits them',
          'Using a smaller, fast draft model to generate \(K\) candidate tokens speculatively, then verifying all \(K\) tokens in a single parallel forward pass of the large target model, boosting inference throughput',
          'Quantizing models based on financial market speculation',
          'Training models on synthetic data exclusively'
        ],
        correctIndex: 1,
        explanation: 'Speculative decoding uses a small draft model to generate tokens cheaply and checks them simultaneously in 1 forward pass of the main model, achieving 2-3x speedup with exact output equivalence.',
        topic: 'Inference Acceleration'
      }
    ]
  },

  // ==========================================
  // 5. CLOUD COMPUTING
  // ==========================================
  cloud_computing: {
    beginner: [
      {
        id: 'cc-b-1',
        question: 'What are the 3 primary cloud computing service models?',
        options: [
          'IaaS (Infrastructure as a Service), PaaS (Platform as a Service), SaaS (Software as a Service)',
          'Public, Private, Hybrid',
          'AWS, Azure, GCP',
          'Compute, Storage, Networking'
        ],
        correctIndex: 0,
        explanation: 'IaaS provides raw infrastructure (VMs, storage); PaaS provides runtime environments without server management; SaaS provides fully managed end-user software (e.g., Google Workspace).',
        topic: 'Cloud Models'
      },
      {
        id: 'cc-b-2',
        question: 'What is the difference between Public, Private, and Hybrid Clouds?',
        options: [
          'Public cloud is shared multi-tenant infrastructure owned by providers; Private cloud is dedicated exclusively to one organization; Hybrid combines on-premise/private and public clouds',
          'Public cloud is free; Private cloud is paid',
          'Hybrid cloud cannot connect to the internet',
          'Private cloud only runs on mobile devices'
        ],
        correctIndex: 0,
        explanation: 'Public cloud offers multi-tenant shared infrastructure; Private cloud offers dedicated private infrastructure; Hybrid connects private data centers to public cloud providers.',
        topic: 'Deployment Models'
      },
      {
        id: 'cc-b-3',
        question: 'What is an AWS EC2 (Elastic Compute Cloud) instance?',
        options: [
          'A managed SQL relational database',
          'A resizable virtual server in the cloud that provides scalable compute capacity',
          'A DNS routing system',
          'A file storage bucket'
        ],
        correctIndex: 1,
        explanation: 'EC2 provides virtual machines (compute instances) on AWS with configurable CPU, RAM, OS, and networking.',
        topic: 'Compute Services'
      },
      {
        id: 'cc-b-4',
        question: 'What type of storage is Amazon S3 (Simple Storage Service)?',
        options: ['Block Storage (like a hard drive)', 'Object Storage (key-value storage for unstructured files)', 'Relational Database Table', 'In-memory Cache'],
        correctIndex: 1,
        explanation: 'Amazon S3 is a highly scalable, durable object storage service designed for storing and retrieving any amount of unstructured data (images, videos, backups).',
        topic: 'Storage'
      },
      {
        id: 'cc-b-5',
        question: 'What is "Serverless Computing" (e.g., AWS Lambda, Google Cloud Functions)?',
        options: [
          'Computing without any physical servers in the universe',
          'An execution model where the cloud provider dynamically manages server allocation and provisioning, charging only for the exact execution time and resources consumed',
          'Hosting websites on local desktop computers',
          'Running servers without operating systems'
        ],
        correctIndex: 1,
        explanation: 'In serverless, servers exist but are abstracted away from developers. You write event-driven code and pay only for actual execution duration (down to millisecond granularity).',
        topic: 'Serverless'
      },
      {
        id: 'cc-b-6',
        question: 'What does a Load Balancer do in cloud architecture?',
        options: [
          'Balances electricity consumption across data center generators',
          'Distributes incoming network traffic evenly across multiple backend instances to ensure high availability, fault tolerance, and responsiveness',
          'Backs up databases to external hard drives',
          'Encrypts files stored in cloud buckets'
        ],
        correctIndex: 1,
        explanation: 'A load balancer receives client traffic and routes it across healthy backend target servers, preventing individual servers from becoming bottlenecks.',
        topic: 'Networking & Availability'
      },
      {
        id: 'cc-b-7',
        question: 'What is an Availability Zone (AZ) in AWS / Azure cloud terminology?',
        options: [
          'A specific country or continent',
          'One or more discrete data centers with redundant power, networking, and connectivity within a geographic Region',
          'A software library for load balancing',
          'A backup tape drive in a warehouse'
        ],
        correctIndex: 1,
        explanation: 'An AWS Region contains multiple isolated Availability Zones (AZs). Each AZ has independent power and cooling, connected via low-latency fiber links.',
        topic: 'Global Infrastructure'
      },
      {
        id: 'cc-b-8',
        question: 'What is the purpose of AWS IAM (Identity and Access Management)?',
        options: [
          'Managing virtual machine operating system updates',
          'Securely controlling authentication (who can sign in) and authorization (what permissions and cloud resources they can access)',
          'Routing internet traffic to domain names',
          'Calculating monthly billing invoices'
        ],
        correctIndex: 1,
        explanation: 'IAM manages users, groups, roles, and fine-grained JSON permission policies that control access to cloud resources securely.',
        topic: 'Security & IAM'
      },
      {
        id: 'cc-b-9',
        question: 'What is Auto Scaling in cloud computing?',
        options: [
          'Automatically resizing computer monitor resolution',
          'Automatically adjusting the number of active compute resources up or down based on predefined metric thresholds (like CPU utilization or traffic volume)',
          'Automatically converting code into assembly language',
          'Automatically deleting old database tables'
        ],
        correctIndex: 1,
        explanation: 'Auto Scaling launches new instances during traffic surges to maintain performance and terminates idle instances during lulls to reduce costs.',
        topic: 'Elasticity'
      },
      {
        id: 'cc-b-10',
        question: 'Which cloud database service is a fully managed Relational Database engine on AWS?',
        options: ['Amazon DynamoDB', 'Amazon RDS (Relational Database Service)', 'Amazon S3', 'Amazon SQS'],
        correctIndex: 1,
        explanation: 'Amazon RDS manages relational database engines (PostgreSQL, MySQL, MariaDB, Oracle, SQL Server) with automated backups, patching, and multi-AZ failover.',
        topic: 'Databases'
      }
    ],
    intermediate: [
      {
        id: 'cc-i-1',
        question: 'What is a Virtual Private Cloud (VPC) and what is the function of a NAT Gateway?',
        options: [
          'A VPC is a public website; a NAT Gateway translates text to speech',
          'A VPC is an isolated virtual network dedicated to your cloud account; a NAT Gateway allows instances in private subnets to initiate outbound internet connections (for updates) while preventing inbound internet connections',
          'A VPC is a physical fiber cable; a NAT Gateway is a firewall hardware appliance',
          'A VPC only works with Docker containers'
        ],
        correctIndex: 1,
        explanation: 'A VPC is a logically isolated private network. A NAT Gateway allows backend instances in private subnets to reach the internet for patches without exposing them to incoming internet traffic.',
        topic: 'VPC & Networking'
      },
      {
        id: 'cc-i-2',
        question: 'What is Infrastructure as Code (IaC) and what are prominent tools used to implement it?',
        options: [
          'Writing software code directly on physical server motherboards',
          'Managing and provisioning cloud infrastructure through machine-readable definition files (declarative code) rather than manual console clicks, using tools like Terraform, AWS CloudFormation, and Pulumi',
          'Writing HTML code for cloud provider websites',
          'A tool for compiling C++ to WebAssembly'
        ],
        correctIndex: 1,
        explanation: 'IaC (Terraform, CloudFormation) treats infrastructure configurations as version-controlled code, enabling reproducible, automated, and auditable cloud deployments.',
        topic: 'IaC & DevOps'
      },
      {
        id: 'cc-i-3',
        question: 'What is the difference between Docker Containers and Virtual Machines (VMs)?',
        options: [
          'VMs share the host OS kernel; Containers have separate hypervisors and complete guest OS kernels',
          'VMs run on a Hypervisor and include full guest operating systems; Containers share the host OS kernel and isolate user spaces using cgroups/namespaces, making them much lighter and faster to start',
          'Containers cannot run on Linux',
          'VMs cannot run network applications'
        ],
        correctIndex: 1,
        explanation: 'Containers share the host operating system kernel and isolate applications via Linux namespaces and cgroups, requiring vastly less memory and startup overhead than full-blown VMs.',
        topic: 'Containers vs VMs'
      },
      {
        id: 'cc-i-4',
        question: 'What is Kubernetes (K8s) and what role does a Pod play within it?',
        options: [
          'A cloud billing dashboard; a Pod is a monthly payment invoice',
          'An open-source container orchestration platform; a Pod is the smallest deployable execution unit representing one or more tightly coupled containers sharing network and storage',
          'A programming language designed for microservices',
          'A database engine for storing JSON documents'
        ],
        correctIndex: 1,
        explanation: 'Kubernetes automates deployment, scaling, and management of containerized applications. A Pod is the smallest atomic unit in Kubernetes, wrapping one or more containers.',
        topic: 'Kubernetes'
      },
      {
        id: 'cc-i-5',
        question: 'What is a CDN (Content Delivery Network, e.g. Amazon CloudFront, Cloudflare)?',
        options: [
          'A database replication protocol',
          'A globally distributed network of Edge Locations / Point of Presence (PoP) servers that cache static and dynamic web content close to end-users to minimize latency',
          'A server that compiles backend code in the cloud',
          'A protocol for wireless mobile networks'
        ],
        correctIndex: 1,
        explanation: 'CDNs cache assets at edge locations worldwide, drastically reducing Round Trip Time (RTT) and origin server load by serving users from the closest geographic server.',
        topic: 'CDNs & Edge'
      },
      {
        id: 'cc-i-6',
        question: 'What is the Cloud Shared Responsibility Model in cloud security?',
        options: [
          'The customer is responsible for everything from hardware to software',
          'The cloud provider is responsible for security "OF" the cloud (hardware, facilities, hypervisors); the customer is responsible for security "IN" the cloud (customer data, IAM, OS patches, network firewalls)',
          'The cloud provider guarantees zero security breaches for customer data',
          'Both parties share liability equally for all software bugs'
        ],
        correctIndex: 1,
        explanation: 'Under the Shared Responsibility Model, cloud providers secure physical infrastructure and core virtualization, while users are responsible for securing their credentials, OS configurations, and data.',
        topic: 'Cloud Security'
      },
      {
        id: 'cc-i-7',
        question: 'What is the difference between Synchronous and Asynchronous microservice communication (e.g., REST vs Message Queues like AWS SQS / Kafka)?',
        options: [
          'REST calls block waiting for immediate responses, creating tight coupling; Message Queues decouple services by buffering messages, enabling fault tolerance and load smoothing',
          'REST is always faster than message queues in high-throughput pipelines',
          'Message queues only work if all microservices run on the same server',
          'Asynchronous communication is not supported in cloud environments'
        ],
        correctIndex: 0,
        explanation: 'Synchronous REST/gRPC requires real-time availability of downstream services. Message queues (SQS/Kafka) decouple services asynchronously, buffering traffic spikes and isolating outages.',
        topic: 'Microservices & Queues'
      },
      {
        id: 'cc-i-8',
        question: 'What is the difference between RTO (Recovery Time Objective) and RPO (Recovery Point Objective) in Disaster Recovery planning?',
        options: [
          'RTO measures data loss in time; RPO measures downtime duration',
          'RTO is the maximum acceptable downtime to restore operations; RPO is the maximum acceptable period of data loss measured in time (e.g., max 15 minutes of lost transactions)',
          'They measure cloud pricing discounts for reserved instances',
          'RTO is for databases; RPO is for frontend servers'
        ],
        correctIndex: 1,
        explanation: 'RTO defines how quickly you must recover systems after failure (downtime). RPO defines how much data loss your organization can tolerate (backup currency).',
        topic: 'Disaster Recovery'
      },
      {
        id: 'cc-i-9',
        question: 'What is Blue/Green Deployment in modern cloud CI/CD?',
        options: [
          'Deploying half the servers with green backgrounds and half with blue',
          'A release management strategy using two identical production environments (Blue = live, Green = idle/new); new code is tested on Green, and traffic router immediately switches to Green with zero downtime and instant rollback',
          'Deploying to test environments on Tuesdays and production on Fridays',
          'A deployment that complies with environmental energy standards'
        ],
        correctIndex: 1,
        explanation: 'Blue/Green deployment runs two identical environments. The router switches traffic from Blue to Green after verification, achieving zero-downtime releases and instant rollbacks.',
        topic: 'CI/CD & Deployments'
      },
      {
        id: 'cc-i-10',
        question: 'What is Amazon DynamoDB and how does it achieve single-digit millisecond latency at scale?',
        options: [
          'A relational SQL database running on hard drives',
          'A fully managed NoSQL key-value and document database that automatically partitions data across SSD-backed storage nodes based on partition key hashing',
          'An in-memory Redis cluster that loses data on restart',
          'A file sharing service for internal office networks'
        ],
        correctIndex: 1,
        explanation: 'DynamoDB uses hash-based partitioning across distributed SSD storage nodes to guarantee consistent single-digit millisecond performance regardless of table size or throughput scale.',
        topic: 'NoSQL & DynamoDB'
      }
    ],
    advance: [
      {
        id: 'cc-a-1',
        question: 'What is the CAP Theorem and how does it dictate distributed cloud database design choices?',
        options: [
          'A database can achieve Consistency, Availability, and Partition Tolerance simultaneously at 100%',
          'A distributed data store can guarantee at most two of the three properties simultaneously in the presence of a network partition: CP (Consistency + Partition Tolerance) or AP (Availability + Partition Tolerance)',
          'It states that CPU, Access, and Performance are directly proportional',
          'It applies only to single-node relational databases'
        ],
        correctIndex: 1,
        explanation: 'When network partitions occur in distributed systems, you must choose either Consistency (refuse stale reads/writes = CP) or Availability (accept writes/reads on isolated nodes = AP).',
        topic: 'CAP Theorem'
      },
      {
        id: 'cc-a-2',
        question: 'What is a Service Mesh (e.g. Istio, Linkerd) and how does the Sidecar Pattern operate within it?',
        options: [
          'A physical Ethernet mesh connecting racks of servers',
          'A dedicated infrastructure layer for service-to-service communication that injects lightweight sidecar proxy containers (Envoy) alongside application containers to handle mTLS encryption, traffic routing, circuit breaking, and telemetry transparently',
          'A software tool that merges all microservices back into a monolith',
          'A database synchronization tool for cross-cloud backups'
        ],
        correctIndex: 1,
        explanation: 'A Service Mesh uses sidecar proxies (like Envoy) running in every Pod to intercept and manage all inter-service network traffic, enforcing mTLS, observability, and circuit breaking without code changes.',
        topic: 'Service Mesh & Envoy'
      },
      {
        id: 'cc-a-3',
        question: 'What is the Circuit Breaker Pattern in distributed cloud microservices (e.g., Netflix Hystrix / Resilience4j)?',
        options: [
          'A physical breaker that cuts electricity to failing data centers',
          'A design pattern that monitors remote service calls; after failures exceed a threshold, the circuit trips to OPEN state, failing fast immediately without calling the failing downstream service to prevent cascading system collapse',
          'A security firewall that blocks DDoS attacks',
          'A method to auto-scale Kubernetes clusters'
        ],
        correctIndex: 1,
        explanation: 'The Circuit Breaker pattern prevents cascading failures across microservices by failing fast when a downstream dependency is degraded, giving the failing service time to recover.',
        topic: 'Resilience Patterns'
      },
      {
        id: 'cc-a-4',
        question: 'How does Multi-Cloud and Hybrid-Cloud networking establish secure high-bandwidth connections between on-premise data centers and AWS/Azure?',
        options: [
          'Using public FTP transfers over the open web',
          'Using dedicated physical fiber cross-connects (AWS Direct Connect / Azure ExpressRoute) coupled with IPSec VPN tunnels and BGP (Border Gateway Protocol) routing',
          'Using standard Wi-Fi mesh routers',
          'Sending encrypted physical hard drives via courier'
        ],
        correctIndex: 1,
        explanation: 'AWS Direct Connect and Azure ExpressRoute bypass the public internet with dedicated physical fiber connections to customer data centers, using BGP for dynamic multi-path routing.',
        topic: 'Hybrid Cloud Networking'
      },
      {
        id: 'cc-a-5',
        question: 'What is Chaos Engineering (e.g. Chaos Monkey, Gremlin) and what is its goal in cloud resilience testing?',
        options: [
          'Allowing developers to deploy code without code reviews',
          'The discipline of intentionally injecting turbulent failures (terminating instances, injecting network latency, severing AZ links) into production/staging systems to verify and harden fault-tolerance mechanisms',
          'Randomly scrambling database records to test encryption',
          'Testing the physical durability of server racks against earthquakes'
        ],
        correctIndex: 1,
        explanation: 'Chaos Engineering proactively injects real-world failures (node crashes, packet loss, region degradation) to uncover architectural weaknesses before they cause production outages.',
        topic: 'Chaos Engineering'
      },
      {
        id: 'cc-a-6',
        question: 'In Kubernetes internals, what are the primary responsibilities of the Control Plane components (kube-apiserver, etcd, kube-scheduler, kube-controller-manager)?',
        options: [
          'They only execute user container binaries and process web traffic',
          'kube-apiserver exposes the REST API; etcd is the distributed key-value store holding cluster state; kube-scheduler assigns unplaced Pods to worker nodes; kube-controller-manager runs control loops maintaining desired state',
          'They manage physical hardware power switches',
          'They run the Linux kernel on worker nodes'
        ],
        correctIndex: 1,
        explanation: 'The K8s control plane maintains cluster state. API server handles requests, etcd stores consistent cluster state via Raft, scheduler places pods, and controller manager enforces reconciliation loops.',
        topic: 'Kubernetes Architecture'
      },
      {
        id: 'cc-a-7',
        question: 'What is GitOps (e.g., ArgoCD, FluxCD) in modern cloud native deployment workflows?',
        options: [
          'A marketing term for using GitHub to host open source code',
          'An operational framework where Git repositories serve as the single source of truth for declarative infrastructure and application state, using automated software agents to continuously reconcile live cluster state with Git commits',
          'Running Git commands inside Python scripts',
          'Deploying code directly from developer laptops to production'
        ],
        correctIndex: 1,
        explanation: 'GitOps uses pull-based reconcilers (ArgoCD) inside clusters that continuously sync live infrastructure with declarative manifests tracked in a Git repository, ensuring auditability and zero drift.',
        topic: 'GitOps & ArgoCD'
      },
      {
        id: 'cc-a-8',
        question: 'What is the difference between AWS Global Accelerator and Amazon CloudFront?',
        options: [
          'CloudFront caches HTTP/HTTPS web content at edge locations; Global Accelerator uses AWS global fiber backbone to route non-HTTP (TCP/UDP) or uncached traffic to optimal regional endpoints using Anycast static IP addresses',
          'Global Accelerator is for mobile phones; CloudFront is for laptops',
          'They are identical services with different billing names',
          'CloudFront only works in North America'
        ],
        correctIndex: 0,
        explanation: 'CloudFront is a CDN designed for caching HTTP web content. Global Accelerator provides Anycast static IPs routing TCP/UDP traffic over AWS\'s private congestion-free global backbone.',
        topic: 'Global Traffic Management'
      },
      {
        id: 'cc-a-9',
        question: 'What is FinOps in enterprise cloud engineering?',
        options: [
          'A financial algorithm that invests company revenue in the stock market',
          'An operational framework and cultural practice that brings financial accountability to cloud spend, combining engineers, finance, and product teams to optimize unit economics, reservations, spot instances, and resource utilization',
          'The team responsible for printing physical receipts',
          'A specialized programming language for banking APIs'
        ],
        correctIndex: 1,
        explanation: 'FinOps bridges cloud engineering and finance, enabling real-time cost visibility, Rightsizing, Savings Plans/Reserved Instances allocation, and unit economics optimization.',
        topic: 'Cloud FinOps'
      },
      {
        id: 'cc-a-10',
        question: 'What is the Raft Consensus Algorithm used in distributed cloud systems like etcd and Consul?',
        options: [
          'A protocol for compressing video files on cloud storage',
          'A leader-based consensus algorithm designed to be understandable, managing replicated state machine logs across distributed nodes through leader election, log replication, and safety guarantees',
          'A security firewall for Kubernetes pods',
          'A database query optimization technique for PostgreSQL'
        ],
        correctIndex: 1,
        explanation: 'Raft manages state replication across distributed consensus nodes (etcd, Consul). Nodes exist as Leader, Follower, or Candidate, guaranteeing strong consistency across network partitions.',
        topic: 'Distributed Consensus & Raft'
      }
    ]
  },

  // ==========================================
  // 6. JAVA
  // ==========================================
  java: {
    beginner: [
      {
        id: 'jv-b-1',
        question: 'What does the JVM (Java Virtual Machine) do?',
        options: [
          'It compiles Java source code (.java) into bytecode (.class)',
          'It executes compiled Java bytecode (.class) on specific hardware and OS, providing platform independence ("Write Once, Run Anywhere")',
          'It acts as an interactive code editor',
          'It is a database management system'
        ],
        correctIndex: 1,
        explanation: 'The JVM is the runtime engine that interprets and JIT-compiles Java bytecode into native machine instructions on the host OS.',
        topic: 'JVM Basics'
      },
      {
        id: 'jv-b-2',
        question: 'What are the 4 fundamental principles of Object-Oriented Programming (OOP) in Java?',
        options: [
          'Compilation, Execution, Debugging, Deployment',
          'Encapsulation, Inheritance, Polymorphism, Abstraction',
          'Classes, Objects, Methods, Variables',
          'Public, Private, Protected, Default'
        ],
        correctIndex: 1,
        explanation: 'The 4 pillars of OOP are Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (multiple forms/overriding), and Abstraction (hiding implementation details).',
        topic: 'OOP Principles'
      },
      {
        id: 'jv-b-3',
        question: 'What is the difference between `==` and `.equals()` when comparing Java objects (like `String`)?',
        options: [
          '`==` compares object references (memory address); `.equals()` compares actual content/value equivalence',
          '`==` is for strings; `.equals()` is for integers',
          'They are identical in Java 17+',
          '`.equals()` compares memory addresses only'
        ],
        correctIndex: 0,
        explanation: '`==` checks if two reference variables point to the exact same memory location. The `.equals()` method is overridden in classes like `String` to compare actual textual content.',
        topic: 'String & Object Equality'
      },
      {
        id: 'jv-b-4',
        question: 'Which keyword in Java is used to prevent a class from being inherited, a method from being overridden, or a variable from being re-assigned?',
        options: ['static', 'final', 'const', 'sealed'],
        correctIndex: 1,
        explanation: '`final` on a class prevents inheritance; on a method prevents overriding; on a variable makes it a constant (cannot be reassigned).',
        topic: 'Keywords'
      },
      {
        id: 'jv-b-5',
        question: 'What is the default value of an uninitialized instance variable of type `int` and `boolean` in a Java class?',
        options: ['0 and false', 'null and null', 'undefined and undefined', '1 and true'],
        correctIndex: 0,
        explanation: 'In Java, numeric primitive instance variables default to `0` (or `0.0`), and boolean instance variables default to `false`.',
        topic: 'Primitives & Defaults'
      },
      {
        id: 'jv-b-6',
        question: 'Which of the following is a checked exception in Java (must be caught or declared with `throws`)?',
        options: ['NullPointerException', 'ArrayIndexOutOfBoundsException', 'IOException', 'ArithmeticException'],
        correctIndex: 2,
        explanation: '`IOException` extends `Exception` directly and is a checked exception. `NullPointerException`, `ArrayIndexOutOfBoundsException`, and `ArithmeticException` extend `RuntimeException` (unchecked).',
        topic: 'Exceptions'
      },
      {
        id: 'jv-b-7',
        question: 'What is the key difference between `ArrayList` and `LinkedList` in Java?',
        options: [
          '`ArrayList` is backed by a resizable dynamic array (O(1) random access); `LinkedList` is backed by a doubly-linked list (O(1) insertion/deletion at nodes, but O(N) random access)',
          '`LinkedList` cannot contain duplicate values',
          '`ArrayList` is synchronized by default; `LinkedList` is not',
          '`ArrayList` cannot hold custom objects'
        ],
        correctIndex: 0,
        explanation: '`ArrayList` uses contiguous memory for fast random index lookups (`get(i)` is O(1)). `LinkedList` uses node pointers, requiring traversal for index access (O(N)).',
        topic: 'Collections Framework'
      },
      {
        id: 'jv-b-8',
        question: 'What does the `static` keyword indicate when applied to a method or field in Java?',
        options: [
          'The method can only be called once',
          'The member belongs to the class itself rather than any individual instance, and can be accessed without instantiating the class',
          'The variable cannot be changed',
          'The method runs on a background daemon thread'
        ],
        correctIndex: 1,
        explanation: '`static` variables and methods are shared across all instances of a class and can be invoked directly on the class name (e.g. `Math.max()`).',
        topic: 'Static Members'
      },
      {
        id: 'jv-b-9',
        question: 'What is method Overloading vs method Overriding in Java?',
        options: [
          'Overloading is same method name with different parameters in the same class (compile-time polymorphism); Overriding is redefining a superclass method with identical signature in a subclass (runtime polymorphism)',
          'Overloading applies to interfaces; Overriding applies to abstract classes',
          'Overriding happens at compile time; Overloading happens at runtime',
          'They are identical concepts'
        ],
        correctIndex: 0,
        explanation: 'Overloading: same name, different parameter lists (compile-time). Overriding: subclass provides specific implementation of inherited superclass method with `@Override` (runtime dynamic dispatch).',
        topic: 'Polymorphism'
      },
      {
        id: 'jv-b-10',
        question: 'Which interface must a class implement to enable natural sorting via `Collections.sort()`?',
        options: ['Cloneable', 'Comparable', 'Serializable', 'Iterable'],
        correctIndex: 1,
        explanation: 'Implementing `Comparable<T>` requires defining `compareTo(T o)`, providing the natural ordering used by `Collections.sort()` and sorted collections (like `TreeSet`).',
        topic: 'Comparable vs Comparator'
      }
    ],
    intermediate: [
      {
        id: 'jv-i-1',
        question: 'How does the Java Garbage Collector manage memory across Heap generations (Young Gen, Old Gen)?',
        options: [
          'All objects live in one flat memory space and are never moved',
          'New objects are allocated in Eden space (Young Gen); surviving objects move to Survivor spaces and eventually promote to the Tenured (Old Gen) space after surviving multiple Minor GC cycles',
          'Objects are deleted immediately as soon as a method returns',
          'Garbage collection only runs when the computer shuts down'
        ],
        correctIndex: 1,
        explanation: 'Java uses generational hypothesis: most objects die young. Young Gen (Eden + Survivor) undergoes frequent, fast Minor GCs; long-lived objects promote to Old Gen.',
        topic: 'JVM Memory & GC'
      },
      {
        id: 'jv-i-2',
        question: 'What is the internal implementation of `HashMap` in Java 8+ when hash collisions occur in a bucket?',
        options: [
          'It throws a HashCollisionException and terminates',
          'It stores elements as a singly-linked list, but transforms the bucket into a Balanced Red-Black Tree when bucket size exceeds 8 (TREEIFY_THRESHOLD), reducing worst-case search from O(N) to O(log N)',
          'It overwrites the old key with the new key silently',
          'It doubles the array size on every collision'
        ],
        correctIndex: 1,
        explanation: 'Java 8 optimizes hash collisions: if a bucket exceeds 8 entries and total table capacity >= 64, it treeifies the bucket into a Red-Black Tree, improving lookup from O(N) to O(log N).',
        topic: 'HashMap Internals'
      },
      {
        id: 'jv-i-3',
        question: 'What is the difference between `synchronized` keyword and `ReentrantLock` in `java.util.concurrent`?',
        options: [
          '`synchronized` is an intrinsic monitor lock with implicit acquisition/release; `ReentrantLock` provides advanced capabilities like timed lock attempts (`tryLock()`), interruptible locking, and fairness policies',
          '`synchronized` is faster in all multithreaded scenarios',
          '`ReentrantLock` cannot be used with multiple threads',
          '`synchronized` is deprecated in Java 17'
        ],
        correctIndex: 0,
        explanation: '`ReentrantLock` offers explicit lock control with `tryLock(timeout)`, fair queuing, multiple Condition variables, and interruptible acquisition beyond standard `synchronized` blocks.',
        topic: 'Concurrency & Locks'
      },
      {
        id: 'jv-i-4',
        question: 'What is the purpose of the Java Streams API introduced in Java 8?',
        options: [
          'To stream video files over UDP sockets',
          'To process collections of data declaratively with functional operations (filter, map, reduce, collect) and easily leverage multi-core parallelism via `parallelStream()`',
          'To read files line by line from disk',
          'To replace traditional JDBC database drivers'
        ],
        correctIndex: 1,
        explanation: 'Java Streams provide functional-style declarative pipeline transformations on sequences of elements without mutating the underlying collection.',
        topic: 'Streams API'
      },
      {
        id: 'jv-i-5',
        question: 'What is the difference between String, StringBuilder, and StringBuffer in Java?',
        options: [
          'String is immutable; StringBuilder is mutable and not thread-safe (fastest); StringBuffer is mutable and thread-safe (synchronized methods)',
          'StringBuilder is immutable; String is mutable',
          'StringBuffer is deprecated and should never be used',
          'String is stored in Stack; StringBuilder is stored in CPU registers'
        ],
        correctIndex: 0,
        explanation: '`String` creates immutable objects in the String Pool. `StringBuilder` is mutable and preferred for single-threaded string concatenation. `StringBuffer` has synchronized methods for thread safety.',
        topic: 'String Mechanics'
      },
      {
        id: 'jv-i-6',
        question: 'What is the Java Memory Model (JMM) guarantee provided by the `volatile` keyword?',
        options: [
          'It prevents a variable from being modified',
          'It guarantees visibility of variable updates across threads (reads/writes go directly to main memory, preventing thread-local caching) and establishes happens-before memory barriers',
          'It makes compound operations like `count++` completely atomic',
          'It locks the entire class during access'
        ],
        correctIndex: 1,
        explanation: '`volatile` ensures changes made by one thread are immediately visible to other threads by bypassing CPU cache registers. Note: it does NOT make compound operations (`count++`) atomic.',
        topic: 'Volatile & JMM'
      },
      {
        id: 'jv-i-7',
        question: 'What does Spring Boot\'s `@Autowired` annotation do under the hood?',
        options: [
          'Compiles the class into machine code',
          'Injects dependent bean instances automatically into constructors, fields, or setter methods via Spring\'s Inversion of Control (IoC) Dependency Injection container',
          'Creates a new database table in MySQL',
          'Starts a background thread pool'
        ],
        correctIndex: 1,
        explanation: '`@Autowired` enables Spring Dependency Injection, resolving and injecting collaborating beans from the ApplicationContext container at runtime.',
        topic: 'Spring Framework'
      },
      {
        id: 'jv-i-8',
        question: 'What is the contract between `equals()` and `hashCode()` in Java?',
        options: [
          'If two objects have the same hashCode, they MUST be equal according to `equals()`',
          'If two objects are equal according to `equals()`, they MUST produce the exact same `hashCode()` integer value',
          'They have no relationship to each other',
          '`hashCode()` is only used for encryption'
        ],
        correctIndex: 1,
        explanation: 'The fundamental Java contract: if `a.equals(b)` is true, then `a.hashCode() == b.hashCode()` must strictly be true. The inverse is not required (hash collisions can happen).',
        topic: 'Equals & HashCode Contract'
      },
      {
        id: 'jv-i-9',
        question: 'What is the Fork/Join Framework in Java (`java.util.concurrent`)?',
        options: [
          'A framework for splitting strings into arrays',
          'An implementation of `ExecutorService` designed for divide-and-conquer recursive workloads that uses a work-stealing algorithm to maximize CPU utilization',
          'A Git version control client for Java IDEs',
          'A database connection pool manager'
        ],
        correctIndex: 1,
        explanation: 'The Fork/Join pool (underlying parallel streams) splits recursive tasks into sub-tasks, with idle worker threads "stealing" work from busy threads\' deques.',
        topic: 'Concurrency & ForkJoin'
      },
      {
        id: 'jv-i-10',
        question: 'What is Type Erasure in Java Generics?',
        options: [
          'Deleting unused Java classes from the hard drive',
          'The process where the Java compiler enforces type constraints at compile time and removes (erases) generic type parameters, replacing them with raw types or bounds (like `Object`) in bytecode for backward compatibility',
          'Converting reference types to primitives at runtime',
          'A security feature that hides database credentials'
        ],
        correctIndex: 1,
        explanation: 'Java Generics use compile-time type checking. At bytecode level, generic types (`List<String>`) are erased to raw types (`List`) with synthetic casts added, preserving binary compatibility.',
        topic: 'Generics & Type Erasure'
      }
    ],
    advance: [
      {
        id: 'jv-a-1',
        question: 'What are Virtual Threads (Project Loom) introduced in Java 21, and how do they differ from Platform (OS) Threads?',
        options: [
          'They are simulated threads that run only in unit tests',
          'They are lightweight user-mode threads managed directly by the JVM runtime rather than 1:1 OS kernel threads, allowing millions of concurrent threads with minimal memory overhead (KB vs MB) and non-blocking carrier thread unmounting',
          'They execute only on GPU cores',
          'They require writing asynchronous reactive code with callbacks'
        ],
        correctIndex: 1,
        explanation: 'Virtual Threads decouple Java threads from underlying OS kernel threads. When a virtual thread blocks on I/O, the JVM unmounts it from the carrier OS thread, allowing massive concurrency with synchronous code.',
        topic: 'Virtual Threads (Project Loom)'
      },
      {
        id: 'jv-a-2',
        question: 'What is the ZGC (Z Garbage Collector) in modern Java (Java 17/21)?',
        options: [
          'A batch garbage collector that stops the world for 10 seconds to maximize throughput',
          'A scalable, low-latency concurrent garbage collector that performs all expensive GC phases (marking, relocation, reference processing) concurrently with application threads, achieving sub-millisecond max pause times',
          'A garbage collector that writes deleted objects to compressed zip files',
          'A tool that eliminates the Java heap entirely'
        ],
        correctIndex: 1,
        explanation: 'ZGC uses colored pointers and load barriers to perform concurrent marking and relocation concurrently with mutator threads, maintaining sub-millisecond pauses even on multi-terabyte heaps.',
        topic: 'ZGC & Low-Latency GC'
      },
      {
        id: 'jv-a-3',
        question: 'What is JIT Compilation (Just-In-Time) and how do Tiered Compilation and Escape Analysis operate in HotSpot JVM?',
        options: [
          'JIT interprets code line by line without machine compilation',
          'HotSpot uses Tiered Compilation (C1 client compiler for fast startup, C2 server compiler for aggressive optimization); Escape Analysis determines if an object is thread-confined, allowing Scalar Replacement (allocating on stack/registers) and Lock Elision',
          'JIT compiles Java directly to C++ source files',
          'Escape Analysis prevents memory leaks by closing database sockets'
        ],
        correctIndex: 1,
        explanation: 'C1 provides fast initial compilation; C2 applies profiling optimizations. Escape analysis detects if object references escape method scope—if not, HotSpot allocates fields in registers/stack, bypassing heap GC overhead.',
        topic: 'JIT & Escape Analysis'
      },
      {
        id: 'jv-a-4',
        question: 'What is the LMAX Disruptor pattern and why is it faster than standard Java `BlockingQueue` for inter-thread messaging?',
        options: [
          'It uses an SQL database table for IPC',
          'It is a lock-free, cache-friendly ring buffer data structure that avoids garbage collection allocation and eliminates CPU cache line false sharing via memory padding and memory barriers',
          'It compresses messages into base64 strings',
          'It uses synchronous network sockets between threads'
        ],
        correctIndex: 1,
        explanation: 'The Disruptor uses a pre-allocated RingBuffer, sequence barriers, and CPU cache-line padding to prevent false sharing and contention, achieving millions of operations per second with microsecond latency.',
        topic: 'High Performance & LMAX Disruptor'
      },
      {
        id: 'jv-a-5',
        question: 'What is the purpose of `VarHandle` and `Unsafe` in advanced low-level Java programming?',
        options: [
          'To format dates and timestamps',
          'To perform fine-grained memory access operations (volatile, acquire/release, opaque), atomic Compare-And-Swap (CAS) primitives, and off-heap direct memory manipulation without JNI overhead',
          'To catch uncaught system errors',
          'To encrypt JVM class files on disk'
        ],
        correctIndex: 1,
        explanation: '`VarHandle` (Java 9+) provides safe, standardized low-level variable access modes and atomic memory fences, replacing proprietary and unsafe usages of `sun.misc.Unsafe`.',
        topic: 'Low-Level Memory & VarHandle'
      },
      {
        id: 'jv-a-6',
        question: 'What is Bytecode Instrumentation in Java (via `java.lang.instrument` and ASM / ByteBuddy)?',
        options: [
          'Playing audio frequencies based on CPU load',
          'The capability to dynamically inspect, transform, and modify compiled Java bytecode classes at load-time or runtime, powering APM profilers, mock frameworks, and AOP proxies',
          'Compressing .class files to save disk space',
          'Converting Java bytecode into JavaScript'
        ],
        correctIndex: 1,
        explanation: 'Java Agents use `ClassFileTransformer` and libraries like ByteBuddy/ASM to rewrite bytecode dynamically before execution, enabling tools like Datadog, New Relic, and Mockito.',
        topic: 'Bytecode & Instrumentation'
      },
      {
        id: 'jv-a-7',
        question: 'In the Java Memory Model (JMM), what does the "Happens-Before" relationship formally specify?',
        options: [
          'That instructions always execute in exact chronological clock order across all CPU cores',
          'A partial order over memory actions guaranteeing that memory writes by one thread are guaranteed to be visible to another thread\'s read operation',
          'That constructors must finish before static initializers',
          'That garbage collection happens before memory allocation'
        ],
        correctIndex: 1,
        explanation: 'The Happens-Before relationship defines memory visibility rules (e.g. monitor unlock happens-before subsequent lock, volatile write happens-before subsequent volatile read), preventing illegal reordering.',
        topic: 'Java Memory Model (JMM)'
      },
      {
        id: 'jv-a-8',
        question: 'What is GraalVM Native Image (AOT Compilation) and what are its performance tradeoffs compared to standard JIT?',
        options: [
          'It translates Java to Python for easier debugging',
          'Ahead-of-Time (AOT) compilation compiles Java into a standalone native executable with instant startup and tiny memory footprint, but loses dynamic runtime profile-guided peak throughput optimizations',
          'It requires 10x more RAM at runtime',
          'It eliminates all multithreading capabilities'
        ],
        correctIndex: 1,
        explanation: 'GraalVM Native Image compiles bytecode ahead-of-time under a closed-world assumption, yielding sub-10ms startup and low memory (ideal for serverless), but sacrifices peak JIT throughput.',
        topic: 'GraalVM & AOT'
      },
      {
        id: 'jv-a-9',
        question: 'What is Foreign Function & Memory API (Project Panama) in modern Java (Java 22)?',
        options: [
          'An API for translating foreign spoken languages',
          'A standardized, safe, and performant replacement for JNI that allows Java programs to seamlessly interoperate with native C libraries and allocate off-heap memory outside the JVM garbage collector',
          'A cloud backup service for international users',
          'A distributed message queue for banking'
        ],
        correctIndex: 1,
        explanation: 'Project Panama (FFM API) enables pure-Java bindings to native C/C++ libraries (`Linker`) and deterministic off-heap memory management (`Arena`, `MemorySegment`), eliminating fragile JNI C glue code.',
        topic: 'Project Panama (FFM API)'
      },
      {
        id: 'jv-a-10',
        question: 'What is False Sharing in multi-threaded Java applications and how is `@jdk.internal.vm.annotation.Contended` used to resolve it?',
        options: [
          'When two threads access different variables that reside on the same CPU cache line (64 bytes), causing constant invalidation and cache coherency traffic; `@Contended` pads the memory to isolate variables onto distinct cache lines',
          'When two threads share the same variable without synchronization',
          'When a thread lies about its execution status to the scheduler',
          'When memory is shared across separate physical machines'
        ],
        correctIndex: 0,
        explanation: 'False sharing occurs when independent variables share a 64-byte L1/L2 cache line. Updates to one variable invalidate the entire cache line for other cores. `@Contended` adds byte padding to prevent this.',
        topic: 'Cache Coherency & False Sharing'
      }
    ]
  },

  // ==========================================
  // 7. C++
  // ==========================================
  cpp: {
    beginner: [
      {
        id: 'cpp-b-1',
        question: 'What is the purpose of pointers in C++?',
        options: [
          'To format string outputs',
          'To store and directly manipulate memory addresses of other variables',
          'To define user interfaces',
          'To connect to remote databases'
        ],
        correctIndex: 1,
        explanation: 'A pointer is a variable that stores the direct physical/virtual memory address of another variable (`int* p = &x;`).',
        topic: 'Pointers'
      },
      {
        id: 'cpp-b-2',
        question: 'What is the difference between `malloc()`/`free()` and `new`/`delete` in C++?',
        options: [
          '`new` and `delete` call constructors and destructors for object lifecycle management and are type-safe; `malloc`/`free` only allocate raw byte buffers without calling constructors',
          '`malloc` is for objects; `new` is only for primitive integers',
          'They are identical in C++11',
          '`delete` cannot deallocate memory'
        ],
        correctIndex: 0,
        explanation: '`new` allocates memory and invokes object constructors. `delete` invokes object destructors and deallocates memory. `malloc/free` are C-level raw byte allocators.',
        topic: 'Memory Allocation'
      },
      {
        id: 'cpp-b-3',
        question: 'What does the `const` keyword signify when applied to a variable in C++?',
        options: [
          'The variable is stored on the GPU',
          'The value of the variable is read-only and cannot be modified after initialization',
          'The variable is available across all files without header inclusion',
          'The variable is allocated on the heap'
        ],
        correctIndex: 1,
        explanation: '`const` enforces compile-time immutability, preventing any code from mutating the variable\'s value.',
        topic: 'Const Correctness'
      },
      {
        id: 'cpp-b-4',
        question: 'What is a Reference (`&`) in C++ compared to a Pointer (`*`)?',
        options: [
          'A reference is an alias for an existing object that cannot be null and cannot be reseated to point to another object; a pointer is an independent variable that can be null and reassigned',
          'A reference allocates 16 bytes on the heap; a pointer uses 4 bytes on stack',
          'Pointers cannot be used with functions',
          'References only work with primitive types'
        ],
        correctIndex: 0,
        explanation: 'References are non-null aliases to existing objects. Pointers hold addresses and can be NULL/nullptr, uninitialized, or reassigned.',
        topic: 'References vs Pointers'
      },
      {
        id: 'cpp-b-5',
        question: 'What is the Standard Template Library (STL) in C++?',
        options: [
          'A graphic rendering engine for games',
          'A powerful collection of template classes and algorithms providing data structures (vector, list, map, set) and algorithms (sort, search)',
          'A hardware driver interface',
          'A C++ source code compiler'
        ],
        correctIndex: 1,
        explanation: 'The STL provides standardized, highly optimized generic containers (vector, map, set), iterators, and algorithms (sort, find).',
        topic: 'STL Basics'
      },
      {
        id: 'cpp-b-6',
        question: 'What is the default access specifier for members of a `class` versus a `struct` in C++?',
        options: [
          '`class` defaults to `private`; `struct` defaults to `public`',
          '`class` defaults to `public`; `struct` defaults to `private`',
          'Both default to `private`',
          'Both default to `protected`'
        ],
        correctIndex: 0,
        explanation: 'In C++, the only mechanical difference between `class` and `struct` is default member access (`private` for class, `public` for struct) and default inheritance.',
        topic: 'Classes & Structs'
      },
      {
        id: 'cpp-b-7',
        question: 'What is function overloading in C++?',
        options: [
          'Calling a function too many times in a loop',
          'Defining multiple functions with the same name but different parameter types or counts in the same scope',
          'Writing functions in header files only',
          'Inheriting functions from base classes'
        ],
        correctIndex: 1,
        explanation: 'Function overloading allows multiple functions with the same identifier to coexist as long as their parameter signatures differ.',
        topic: 'Functions'
      },
      {
        id: 'cpp-b-8',
        question: 'What is the output of `sizeof(char)` according to the C++ standard?',
        options: ['1 byte', '2 bytes', '4 bytes', 'Architecture dependent'],
        correctIndex: 0,
        explanation: 'By C++ standard specification, `sizeof(char)` is always strictly defined to be `1` (which represents one byte of at least 8 bits).',
        topic: 'Types & Sizes'
      },
      {
        id: 'cpp-b-9',
        question: 'What is a Destructor in a C++ class?',
        options: [
          'A method called to allocate heap memory',
          'A special member method (prefixed with `~`) invoked automatically when an object goes out of scope or is deleted, used for cleaning up resources',
          'A function that deletes source code files',
          'A compiler flag for optimizations'
        ],
        correctIndex: 1,
        explanation: 'Destructors (`~ClassName()`) clean up acquired resources (memory, file handles, sockets) when object lifetime ends.',
        topic: 'Constructors & Destructors'
      },
      {
        id: 'cpp-b-10',
        question: 'Which header file must be included to use standard input/output streams (`std::cout`, `std::cin`) in C++?',
        options: ['<stdio.h>', '<iostream>', '<string>', '<stdlib.h>'],
        correctIndex: 1,
        explanation: '`<iostream>` contains declarations for standard I/O stream objects (`std::cout`, `std::cin`, `std::cerr`).',
        topic: 'IOStream'
      }
    ],
    intermediate: [
      {
        id: 'cpp-i-1',
        question: 'What is RAII (Resource Acquisition Is Initialization) in C++ and why is it fundamental?',
        options: [
          'A rule requiring all variables to be initialized to 0',
          'An idiom where resource lifecycle is bound to object lifetime: resources are acquired in constructors and released deterministically in destructors, preventing resource leaks even during exceptions',
          'A method to auto-generate getter and setter functions',
          'A compiler flag for faster math'
        ],
        correctIndex: 1,
        explanation: 'RAII binds resource ownership (memory, mutex locks, file descriptors) to stack object lifetimes, guaranteeing cleanup via destructors during stack unwinding.',
        topic: 'RAII'
      },
      {
        id: 'cpp-i-2',
        question: 'What is the difference between `std::unique_ptr` and `std::shared_ptr` in modern C++ (C++11+)?',
        options: [
          '`unique_ptr` represents exclusive, non-copyable ownership of a heap resource (zero overhead); `shared_ptr` provides reference-counted shared ownership where the resource is deleted when count reaches 0',
          '`shared_ptr` is faster than raw pointers; `unique_ptr` uses a garbage collector',
          '`unique_ptr` cannot be moved',
          '`shared_ptr` cannot be used in multithreaded programs'
        ],
        correctIndex: 0,
        explanation: '`std::unique_ptr` maintains sole ownership (move-only, zero cost). `std::shared_ptr` maintains an atomic reference count control block for shared ownership.',
        topic: 'Smart Pointers'
      },
      {
        id: 'cpp-i-3',
        question: 'Why should a Base class destructor always be declared `virtual` if it has virtual methods or is used polymorphically?',
        options: [
          'To make the program compile faster',
          'To ensure that `delete basePtr` correctly invokes the Derived class destructor first, preventing resource leaks and undefined behavior',
          'To prevent the derived class from defining private members',
          'It is required by the C++20 standard for all classes'
        ],
        correctIndex: 1,
        explanation: 'Deleting a derived object through a base pointer without a virtual destructor causes undefined behavior: only the base destructor executes, leaking derived resources.',
        topic: 'Virtual Destructors'
      },
      {
        id: 'cpp-i-4',
        question: 'How do Virtual Functions work under the hood in C++ (vtable / vptr)?',
        options: [
          'They use string lookups in a hash map at runtime',
          'Each class with virtual functions has a static Virtual Method Table (vtable) of function pointers, and each object instance holds an internal pointer (vptr) to its class vtable for dynamic dispatch',
          'They are compiled into switch-case statements',
          'They require an external interpreter'
        ],
        correctIndex: 1,
        explanation: 'Compilers construct a `vtable` array of function pointers per polymorphic class. Objects contain a hidden `vptr` pointing to their respective vtable, enabling runtime dynamic dispatch.',
        topic: 'VTable Internals'
      },
      {
        id: 'cpp-i-5',
        question: 'What is Move Semantics and `std::move` in C++11?',
        options: [
          'A graphics function that moves pixels on the screen',
          'A feature enabling resource transfer from temporary rvalue objects without deep copying, where `std::move` unconditionally casts an lvalue to an rvalue reference (`T&&`) to trigger move constructors',
          'Moving files across disk partitions',
          'Deleting pointers from heap memory'
        ],
        correctIndex: 1,
        explanation: 'Move semantics transfer ownership of expensive internal buffers (e.g. heap pointers in `std::vector`) instead of allocating and deep-copying bytes. `std::move` casts to rvalue reference.',
        topic: 'Move Semantics'
      },
      {
        id: 'cpp-i-6',
        question: 'What is the difference between `std::vector` and `std::array` in the STL?',
        options: [
          '`std::array` has fixed compile-time size allocated on the stack (zero dynamic overhead); `std::vector` has dynamic runtime resizing allocated on the heap',
          '`std::vector` cannot be indexed with `[]`',
          '`std::array` is a linked list under the hood',
          '`std::vector` is strictly for integers'
        ],
        correctIndex: 0,
        explanation: '`std::array<T, N>` is a thin wrapper over a fixed stack array of size `N` known at compile time. `std::vector<T>` manages dynamic heap allocations.',
        topic: 'STL Containers'
      },
      {
        id: 'cpp-i-7',
        question: 'What is Template Metaprogramming (TMP) in C++?',
        options: [
          'Writing HTML templates in C++',
          'A technique where the C++ compiler executes computations and generates specialized code at compile time using templates, recursions, and `constexpr`',
          'Writing macros with `#define` only',
          'A tool for formatting code indentation'
        ],
        correctIndex: 1,
        explanation: 'C++ templates are Turing-complete. TMP allows complex calculations, type traits introspection, and code generation to execute entirely during compilation.',
        topic: 'Templates'
      },
      {
        id: 'cpp-i-8',
        question: 'What is a Memory Leak and how does AddressSanitizer (ASan) or Valgrind detect it?',
        options: [
          'Memory leaking out of the physical computer case',
          'When dynamically allocated heap memory (`new`/`malloc`) is no longer referenced but never freed; ASan instruments pointer memory boundaries and tracks allocations to detect un-freed buffers and buffer overflows',
          'A bug where stack frames exceed 1MB',
          'An invalid integer division by zero'
        ],
        correctIndex: 1,
        explanation: 'Memory leaks occur when heap allocations are lost without being deallocated. AddressSanitizer (ASan) injects shadow memory tracking at compile time to catch leaks and invalid accesses.',
        topic: 'Memory Profiling & ASan'
      },
      {
        id: 'cpp-i-9',
        question: 'What is the difference between `const` and `constexpr` in modern C++?',
        options: [
          '`const` means read-only (value may be computed at runtime); `constexpr` guarantees that the value or function can be evaluated at compile time and used in constant expressions',
          '`constexpr` is only for pointers',
          '`const` is deprecated in C++20',
          '`constexpr` variables can be modified inside functions'
        ],
        correctIndex: 0,
        explanation: '`const` variables guarantee they won\'t be mutated after initialization (which could happen at runtime). `constexpr` guarantees compile-time constant evaluation.',
        topic: 'Constexpr'
      },
      {
        id: 'cpp-i-10',
        question: 'What is the Rule of 5 in modern C++ resource management?',
        options: [
          'A class cannot have more than 5 member variables',
          'If a class manages resources and defines a custom Destructor, it should also explicitly define or delete: Copy Constructor, Copy Assignment, Move Constructor, and Move Assignment Operator',
          'A function can take at most 5 arguments',
          'Code must be compiled on 5 different operating systems'
        ],
        correctIndex: 1,
        explanation: 'Rule of 5 states that custom resource cleanup requires implementing: Destructor, Copy Constructor, Copy Assignment, Move Constructor, and Move Assignment operator.',
        topic: 'Rule of 5'
      }
    ],
    advance: [
      {
        id: 'cpp-a-1',
        question: 'What is Perfect Forwarding and Universal (Forwarding) References (`T&&` in template deduction) in C++11?',
        options: [
          'Forwarding network packets over TCP sockets without buffering',
          'A mechanism using forwarding references (`auto&&` or `T&&` with type deduction) and `std::forward<T>` to preserve the exact value category (lvalue vs rvalue) and const qualification of arguments passed into wrapper functions',
          'Automatically converting pointers into smart pointers',
          'A technique to eliminate header file compilation times'
        ],
        correctIndex: 1,
        explanation: 'Reference collapsing rules (\(T\& + \&\& \to T\&\)) combined with `std::forward<T>(arg)` allow functions to forward arguments preserving lvalueness or rvalueness perfectly.',
        topic: 'Perfect Forwarding'
      },
      {
        id: 'cpp-a-2',
        question: 'What are C++20 Concepts and Constraints, and how do they replace SFINAE (`std::enable_if`)?',
        options: [
          'They are high-level design documents written in markdown',
          'They provide expressive, readable compile-time predicates (`concept`, `requires` clauses) that constrain template arguments, yielding clear compiler error messages instead of cryptic template instantiation dumps',
          'They are runtime assertions executed in debug builds only',
          'They convert C++ templates into dynamic Java generics'
        ],
        correctIndex: 1,
        explanation: 'C++20 Concepts (`template<std::integral T>`) cleanly specify requirements on template types, eliminating complex SFINAE boilerplate and generating human-readable compiler errors.',
        topic: 'C++20 Concepts'
      },
      {
        id: 'cpp-a-3',
        question: 'What are the C++ Memory Models for Atomic Operations (`std::memory_order_relaxed`, `acquire`, `release`, `seq_cst`)?',
        options: [
          'Different sizes of RAM modules installed on the motherboard',
          'Formal synchronization specifications defining how memory operations are ordered and visible across CPU cores, from sequential consistency (default, full fence) to acquire-release semantics and relaxed operations (no ordering constraints)',
          'Operating system paging algorithms',
          'Garbage collection algorithms for C++'
        ],
        correctIndex: 1,
        explanation: '`memory_order` controls hardware memory barriers and compiler reorderings. `acquire`/`release` synchronizes threads without the heavy hardware bus lock penalty of full `seq_cst`.',
        topic: 'Atomics & Memory Orders'
      },
      {
        id: 'cpp-a-4',
        question: 'What are C++20 Coroutines and what are the three core keywords introduced for them?',
        options: [
          '`async`, `await`, `promise`',
          '`co_await`, `co_yield`, `co_return`',
          '`yield`, `resume`, `suspend`',
          '`fork`, `join`, `select`'
        ],
        correctIndex: 1,
        explanation: 'C++20 Coroutines are stackless functions that can suspend execution and resume later. They use `co_await` (suspend/await), `co_yield` (yield value), and `co_return` (complete).',
        topic: 'C++20 Coroutines'
      },
      {
        id: 'cpp-a-5',
        question: 'What is Small String Optimization (SSO) in `std::string` implementations (like libc++ / libstdc++)?',
        options: [
          'Compressing strings using gzip compression',
          'Storing short strings (typically \(\le 15\) or 22 characters) inside a local buffer within the `std::string` object itself, avoiding any dynamic heap allocation (`new`)',
          'Converting uppercase characters to lowercase',
          'Deleting strings smaller than 3 characters'
        ],
        correctIndex: 1,
        explanation: 'SSO uses a union inside the string class layout to store short strings directly on the stack inside the object, bypassing heap allocator overhead for common small strings.',
        topic: 'SSO & String Internals'
      },
      {
        id: 'cpp-a-6',
        question: 'What is Cache-Conscious Data Structure Design and why is `std::vector` almost always faster than `std::list` even for middle insertions on modern CPUs?',
        options: [
          '`std::list` uses more CPU registers than vector',
          '`std::vector` stores elements in contiguous memory, maximizing CPU L1/L2 cache line utilization and hardware prefetching, whereas `std::list` causes pointer chasing and cache misses on almost every node access',
          '`std::vector` is compiled into GPU machine code',
          '`std::list` is strictly forbidden in real-time systems'
        ],
        correctIndex: 1,
        explanation: 'Modern CPUs fetch 64-byte contiguous cache lines with hardware prefetchers. `std::vector` provides contiguous cache hits, easily beating `std::list` despite \(O(N)\) element shifting.',
        topic: 'Cache Locality & Hardware Prefetching'
      },
      {
        id: 'cpp-a-7',
        question: 'What is SFINAE (Substitution Failure Is Not An Error) in C++ template programming?',
        options: [
          'A compiler bug that ignores syntax errors',
          'A language rule stating that if a substitution of a deduced type into a template fails during overload resolution, the compiler simply discards that candidate overload without issuing a compilation error',
          'A macro for suppressing compiler warnings',
          'A tool for unit testing failed assertions'
        ],
        correctIndex: 1,
        explanation: 'SFINAE allows compile-time conditional function enablement (via `std::enable_if` / `void_t`) by letting invalid type substitutions silently fail overload resolution candidate selection.',
        topic: 'SFINAE'
      },
      {
        id: 'cpp-a-8',
        question: 'What is the difference between Return Value Optimization (RVO) and Named Return Value Optimization (NRVO) in C++ compilers?',
        options: [
          'RVO optimizes loops; NRVO optimizes conditional branches',
          'They are copy-elision optimizations where the compiler constructs the returned object directly in the memory allocated for the caller\'s destination variable, completely bypassing copy/move constructors',
          'They convert return values into pointers',
          'They are runtime JIT optimizations'
        ],
        correctIndex: 1,
        explanation: 'RVO/NRVO elides copy and move constructors by constructing the returned object directly in the caller\'s stack frame destination storage.',
        topic: 'Copy Elision & RVO'
      },
      {
        id: 'cpp-a-9',
        question: 'What is the purpose of the Curiously Recurring Template Pattern (CRTP) in C++?',
        options: [
          'To cause an infinite compiler recursion loop for stress testing',
          'To achieve static (compile-time) polymorphism without the runtime overhead of virtual function tables (vtable/vptr dynamic dispatch)',
          'To enable dynamic reflection in runtime classes',
          'To serialize classes to JSON format'
        ],
        correctIndex: 1,
        explanation: 'CRTP (`class Derived : public Base<Derived>`) allows base classes to invoke derived member methods at compile time via `static_cast<Derived*>(this)`, achieving zero-cost static polymorphism.',
        topic: 'CRTP Pattern'
      },
      {
        id: 'cpp-a-10',
        question: 'In low-latency systems programming, what is the purpose of Lock-Free programming using `std::atomic<T>` and Compare-And-Swap (CAS)?',
        options: [
          'To prevent any multithreading',
          'To ensure that threads make progress without acquiring operating system mutexes, eliminating thread context switching and lock contention overhead',
          'To allow unlimited heap memory growth',
          'To bypass the operating system kernel for file I/O'
        ],
        correctIndex: 1,
        explanation: 'Lock-free algorithms use atomic CAS (`compare_exchange_weak`/`strong`) loops to update data structures without blocking, avoiding kernel transitions and priority inversion.',
        topic: 'Lock-Free & CAS'
      }
    ]
  },

  // ==========================================
  // 8. LINUX
  // ==========================================
  linux: {
    beginner: [
      {
        id: 'lnx-b-1',
        question: 'Which Linux command is used to display the current working directory?',
        options: ['ls', 'pwd', 'cd', 'dir'],
        correctIndex: 1,
        explanation: '`pwd` stands for "Print Working Directory" and outputs the absolute path of the directory you are currently in.',
        topic: 'Basic Commands'
      },
      {
        id: 'lnx-b-2',
        question: 'What is the purpose of the `chmod` command in Linux?',
        options: [
          'To change file ownership',
          'To change file and directory access permissions (read, write, execute)',
          'To modify the computer system clock',
          'To create a new user account'
        ],
        correctIndex: 1,
        explanation: '`chmod` (change mode) modifies read (`r`), write (`w`), and execute (`x`) permissions for user, group, and others.',
        topic: 'Permissions'
      },
      {
        id: 'lnx-b-3',
        question: 'What do the permissions `755` represent in numerical octal notation on a Linux file?',
        options: [
          'Read-only for everyone',
          'Owner: Read/Write/Execute (7); Group: Read/Execute (5); Others: Read/Execute (5)',
          'Owner: Read/Write (6); Group: Read (4); Others: None (0)',
          'Full access for everyone'
        ],
        correctIndex: 1,
        explanation: '`7` = 4+2+1 (rwx for owner); `5` = 4+0+1 (r-x for group); `5` = 4+0+1 (r-x for others).',
        topic: 'Octal Permissions'
      },
      {
        id: 'lnx-b-4',
        question: 'Which command is used to view real-time dynamic running processes and system resource utilization?',
        options: ['ps', 'top / htop', 'grep', 'df'],
        correctIndex: 1,
        explanation: '`top` (and interactive `htop`) displays real-time CPU usage, memory consumption, load average, and active process threads.',
        topic: 'Process Monitoring'
      },
      {
        id: 'lnx-b-5',
        question: 'What does the `|` (pipe) operator do in a Linux shell pipeline?',
        options: [
          'Executes two commands concurrently in the background',
          'Redirects the standard output (stdout) of the command on the left into the standard input (stdin) of the command on the right',
          'Performs a logical OR operation between two text files',
          'Deletes output if an error occurs'
        ],
        correctIndex: 1,
        explanation: 'The shell pipe `|` connects the stdout stream of the preceding command directly into the stdin stream of the next command (e.g. `cat file.txt | grep "error"`).',
        topic: 'Piping & Redirection'
      },
      {
        id: 'lnx-b-6',
        question: 'What is the function of the `grep` command in Linux?',
        options: [
          'To compress directory archives',
          'To search for regular expression patterns within text files and standard input streams',
          'To compile C programs',
          'To check disk space usage'
        ],
        correctIndex: 1,
        explanation: '`grep` (Global Regular Expression Print) searches lines matching patterns and prints matching lines.',
        topic: 'Text Processing'
      },
      {
        id: 'lnx-b-7',
        question: 'Which directory in the Linux Filesystem Hierarchy contains configuration files for the entire system?',
        options: ['/bin', '/etc', '/var', '/usr'],
        correctIndex: 1,
        explanation: '`/etc` contains system-wide configuration files and shell scripts (e.g., `/etc/passwd`, `/etc/hosts`, `/etc/nginx/`).',
        topic: 'Filesystem Hierarchy'
      },
      {
        id: 'lnx-b-8',
        question: 'What does `sudo` stand for and what does it allow users to do?',
        options: [
          'System Universal Data Output; exports logs',
          'Superuser Do; allows permitted users to execute commands with elevated root/administrator privileges',
          'Software Update Driver Operation; updates packages',
          'Safe User Directory Option; locks private folders'
        ],
        correctIndex: 1,
        explanation: '`sudo` allows standard users listed in `/etc/sudoers` to run specific administrative commands as the root superuser.',
        topic: 'User Privileges'
      },
      {
        id: 'lnx-b-9',
        question: 'Which command displays available and used disk space on mounted filesystems in human-readable format?',
        options: ['free -m', 'df -h', 'du -sh', 'ls -la'],
        correctIndex: 1,
        explanation: '`df -h` (Disk Free, human-readable) displays filesystem disk usage, capacity, and mount points in GB/MB.',
        topic: 'Storage Commands'
      },
      {
        id: 'lnx-b-10',
        question: 'What is the difference between standard output redirection `>` and `>>` in Bash?',
        options: [
          '`>` overwrites the target file; `>>` appends to the end of the target file',
          '`>>` overwrites the target file; `>` appends to the target file',
          '`>` is for standard error; `>>` is for standard output',
          'They are identical'
        ],
        correctIndex: 0,
        explanation: '`>` redirects stdout and overwrites existing file content. `>>` appends output to the end of the file without overwriting.',
        topic: 'Redirection'
      }
    ],
    intermediate: [
      {
        id: 'lnx-i-1',
        question: 'What is systemd and what command is used to inspect and control system services?',
        options: [
          'A text editor; controlled with `nano`',
          'The standard Linux init system and service manager (PID 1); controlled with `systemctl` (e.g. `systemctl status nginx`)',
          'A network driver; controlled with `ifconfig`',
          'A package manager; controlled with `apt`'
        ],
        correctIndex: 1,
        explanation: '`systemd` is the init system that bootstraps user space and manages daemons. `systemctl` is the command-line utility used to start, stop, enable, and inspect services.',
        topic: 'Systemd & Services'
      },
      {
        id: 'lnx-i-2',
        question: 'What is the difference between a Hard Link and a Soft (Symbolic) Link in Linux?',
        options: [
          'Hard link is an alias pointing directly to the inode of the file data on the same filesystem; Soft link is a special file containing the path string to another target and can cross filesystem boundaries',
          'Soft links cannot be deleted; Hard links delete immediately',
          'Hard links only point to directories; Soft links only point to files',
          'They are identical'
        ],
        correctIndex: 0,
        explanation: 'A Hard link shares the exact same inode and data blocks as the original file. A Soft link (`ln -s`) is a distinct file holding a pointer path to the target.',
        topic: 'Inodes & Links'
      },
      {
        id: 'lnx-i-3',
        question: 'What is the difference between signals `SIGTERM` (15) and `SIGKILL` (9)?',
        options: [
          '`SIGTERM` requests a process to terminate gracefully, allowing it to execute cleanup handlers; `SIGKILL` cannot be caught, blocked, or ignored and is handled directly by the kernel to forcibly kill the process',
          '`SIGKILL` allows graceful shutdown; `SIGTERM` kills instantly',
          '`SIGTERM` only kills background processes',
          '`SIGKILL` restarts the entire operating system'
        ],
        correctIndex: 0,
        explanation: '`SIGTERM` (15) politely asks the process to exit, giving it time to save state. `SIGKILL` (9) forcefully and unconditionally aborts the process at the kernel level.',
        topic: 'Signals & Processes'
      },
      {
        id: 'lnx-i-4',
        question: 'What does the Linux Load Average metric (e.g., `0.50, 1.20, 2.10` shown in `uptime`) represent?',
        options: [
          'The percentage of hard drive space remaining',
          'The average number of processes in a runnable state (using CPU or waiting for CPU) and in uninterruptible sleep state (waiting for disk I/O) over 1, 5, and 15 minute intervals',
          'The network bandwidth in Megabits per second',
          'The number of logged-in users'
        ],
        correctIndex: 1,
        explanation: 'Load average measures system demand: processes actively computing or waiting in the run queue, plus processes blocked in uninterruptible disk I/O sleep (D state).',
        topic: 'System Load Average'
      },
      {
        id: 'lnx-i-5',
        question: 'What is the function of the `/proc` virtual filesystem in Linux?',
        options: [
          'A physical directory on disk where temporary log files are saved',
          'A pseudo-filesystem dynamically generated by the kernel that provides a window into kernel data structures, process statuses (`/proc/[pid]`), memory info, and hardware parameters',
          'A folder containing installed proprietary programs',
          'The swap space directory'
        ],
        correctIndex: 1,
        explanation: '`/proc` is a virtual filesystem in RAM providing real-time kernel and process information (`/proc/cpuinfo`, `/proc/meminfo`, `/proc/<pid>/cmdline`).',
        topic: 'Proc Filesystem'
      },
      {
        id: 'lnx-i-6',
        question: 'What is the purpose of `cron` and how is a cron expression `0 2 * * *` interpreted?',
        options: [
          'Runs a command every 2 minutes',
          'Runs a scheduled job every day at 02:00 AM (minute 0, hour 2, every day, every month, every day-of-week)',
          'Runs a command on February 2nd only',
          'Restarts the server after 2 hours of uptime'
        ],
        correctIndex: 1,
        explanation: 'Cron format is `[min] [hour] [day-of-month] [month] [day-of-week]`. `0 2 * * *` executes daily at 02:00 AM.',
        topic: 'Cron Scheduling'
      },
      {
        id: 'lnx-i-7',
        question: 'What tool is modernly used to inspect network sockets, listening ports, and TCP connections, replacing legacy `netstat`?',
        options: ['ss', 'ping', 'traceroute', 'curl'],
        correctIndex: 0,
        explanation: '`ss` (Socket Statistics, e.g. `ss -tulnp`) dumps socket statistics directly from kernel space much faster than legacy `netstat`.',
        topic: 'Networking Tools'
      },
      {
        id: 'lnx-i-8',
        question: 'What is the purpose of an SSH Key Pair (public and private key) and where is the public key saved on the remote server for passwordless login?',
        options: [
          'In `/etc/ssh/passwords.txt`',
          'In `~/.ssh/authorized_keys` of the target user\'s home directory',
          'In `/var/log/secure`',
          'In the `/tmp` folder'
        ],
        correctIndex: 1,
        explanation: 'Asymmetric SSH keys provide secure cryptographic authentication. The user keeps the private key secure locally and appends the public key to `~/.ssh/authorized_keys` on the server.',
        topic: 'SSH & Security'
      },
      {
        id: 'lnx-i-9',
        question: 'What does the `tar -czvf archive.tar.gz /path/to/dir` command do?',
        options: [
          'Extracts a zip file into a folder',
          'Creates a new archive (`-c`), compresses it using gzip (`-z`), displays progress verbosely (`-v`), with the specified filename (`-f`)',
          'Deletes the folder after verifying disk checksums',
          'Sends the directory over an FTP socket'
        ],
        correctIndex: 1,
        explanation: '`tar` flags: `-c` (create), `-z` (gzip compress), `-v` (verbose output), `-f` (output archive filename).',
        topic: 'Archiving & Compression'
      },
      {
        id: 'lnx-i-10',
        question: 'What is swap space in Linux memory management?',
        options: [
          'A folder for exchanging files with other users',
          'Dedicated disk space used as an overflow extension of physical RAM when RAM becomes constrained, swapping inactive memory pages out to disk',
          'A cache for GPU video textures',
          'A temporary buffer for network packets'
        ],
        correctIndex: 1,
        explanation: 'Swap space is a dedicated partition or file on disk where the kernel pages out inactive memory blocks when physical RAM is exhausted.',
        topic: 'Swap & Memory'
      }
    ],
    advance: [
      {
        id: 'lnx-a-1',
        question: 'What are Linux Namespaces and Control Groups (cgroups), and how do they form the foundation of Docker containers?',
        options: [
          'They are GUI window themes in X11',
          'Namespaces isolate what a process can SEE (PID, Mount, Network, IPC, UTS, User); cgroups meter and limit what resources a process can USE (CPU, Memory, Disk I/O, Network bandwidth)',
          'They are security passwords for root access',
          'They are filesystem backup snapshots'
        ],
        correctIndex: 1,
        explanation: 'Containers are Linux processes isolated by Namespaces (visibility boundaries) and constrained by cgroups (resource limits on CPU, RAM, and IOPS).',
        topic: 'Namespaces & Cgroups'
      },
      {
        id: 'lnx-a-2',
        question: 'What is eBPF (Extended Berkeley Packet Filter) in the modern Linux kernel?',
        options: [
          'A legacy printer driver',
          'A revolutionary technology allowing custom sandboxed bytecode programs to run directly inside the Linux kernel in response to kernel events/probes, enabling observability, security, and networking without kernel recompilation',
          'A hardware power management tool',
          'A package manager for Debian'
        ],
        correctIndex: 1,
        explanation: 'eBPF allows developers to write safe event-driven bytecode verified by the kernel verifier to run at native speed inside the kernel for tracing (Cilium, BCC), network routing, and security.',
        topic: 'eBPF'
      },
      {
        id: 'lnx-a-3',
        question: 'What is the difference between `epoll` and legacy `select`/`poll` system calls in high-performance network servers?',
        options: [
          '`select` is faster than `epoll` for 100,000 connections',
          '`select`/`poll` scan all `N` file descriptors linearly in \(O(N)\) time on every event loop iteration; `epoll` uses an event-driven callback mechanism returning only active descriptors in \(O(1)\) or \(O(k)\) time where \(k\) is active events',
          '`epoll` only works on UDP sockets',
          '`select` is supported only on 64-bit systems'
        ],
        correctIndex: 1,
        explanation: '`epoll` registers descriptors in a kernel red-black tree and uses ready-lists with callbacks, scaling to millions of open connections without the \(O(N)\) linear polling bottleneck of `select`.',
        topic: 'IO Multiplexing & Epoll'
      },
      {
        id: 'lnx-a-4',
        question: 'What is the Linux OOM (Out Of Memory) Killer and how does it determine which process to terminate?',
        options: [
          'It deletes random log files in `/var/log`',
          'When physical RAM and swap are completely exhausted, the kernel invokes the OOM killer, calculating a badness score (`/proc/[pid]/oom_score`) based on memory consumption and `oom_score_adj`, killing the highest-scoring process to preserve system stability',
          'It terminates the process with the smallest PID',
          'It reboots the machine immediately'
        ],
        correctIndex: 1,
        explanation: 'The OOM killer calculates `oom_badness` based on RSS and swap usage relative to total RAM and terminates the rogue memory-hungry process using `SIGKILL`.',
        topic: 'OOM Killer'
      },
      {
        id: 'lnx-a-5',
        question: 'What is the purpose of `strace` and `perf` in Linux system diagnostics?',
        options: [
          '`strace` formats string variables; `perf` measures typing speed',
          '`strace` intercepts and records system calls made by a process and the signals it receives; `perf` is a performance profiling tool that samples CPU hardware performance counters and kernel tracepoints',
          '`strace` deletes corrupted files; `perf` clears swap',
          '`strace` is an audio driver'
        ],
        correctIndex: 1,
        explanation: '`strace` traces user-space to kernel-space system calls (`open`, `read`, `write`). `perf` profiles CPU hotspots, cache misses, and flame graphs using hardware PMU counters.',
        topic: 'Profiling & Strace'
      },
      {
        id: 'lnx-a-6',
        question: 'What is the difference between Buffered I/O and Direct I/O (`O_DIRECT`) in Linux file operations?',
        options: [
          'Buffered I/O passes data through the Linux Page Cache in kernel memory; Direct I/O transfers data directly between user-space buffers and the block storage device, bypassing the Page Cache',
          'Direct I/O can only write 1 byte at a time',
          'Buffered I/O is for network sockets; Direct I/O is for text files',
          'They have identical performance characteristics'
        ],
        correctIndex: 0,
        explanation: 'Buffered I/O uses the Linux Page Cache to cache reads/writes in RAM. High-performance databases (like DBMS engines with their own buffer pool) use `O_DIRECT` to avoid double caching.',
        topic: 'Page Cache & Direct IO'
      },
      {
        id: 'lnx-a-7',
        question: 'What is the role of the Completely Fair Scheduler (CFS) in the Linux kernel?',
        options: [
          'To assign IP addresses to network interfaces',
          'The default CPU scheduler that tracks virtual runtime (`vruntime`) of processes in a time-ordered Red-Black tree to allocate CPU time proportional to process nice values',
          'To schedule disk defragmentation every night',
          'To balance internet bandwidth across users'
        ],
        correctIndex: 1,
        explanation: 'CFS models an ideal multitasking CPU on hardware. It maintains runnable tasks sorted by `vruntime` in a red-black tree, picking the leftmost task with least runtime for fairness.',
        topic: 'Kernel CPU Scheduling (CFS)'
      },
      {
        id: 'lnx-a-8',
        question: 'What is an Inode (index node) in the Linux ext4/xfs filesystem and what happens when a disk runs out of free inodes despite having free gigabytes of space?',
        options: [
          'The disk becomes faster',
          'An inode stores file metadata (permissions, ownership, size, block pointers); if all inodes are exhausted (e.g. millions of tiny 0-byte files), no new files can be created even with ample free disk space',
          'The OS automatically converts files to zip format',
          'All existing files become corrupted'
        ],
        correctIndex: 1,
        explanation: 'Inodes store metadata and block pointers. If a filesystem creates millions of small files, the inode table exhausts (`df -i` shows 100%), throwing "No space left on device" errors.',
        topic: 'Filesystem Internals & Inodes'
      },
      {
        id: 'lnx-a-9',
        question: 'What is `iptables` / `nftables` in Linux and what are the standard Netfilter packet filtering chains?',
        options: [
          'GUI desktop widgets in GNOME',
          'Kernel packet-filtering framework with chains: PREROUTING, INPUT, FORWARD, OUTPUT, and POSTROUTING for packet inspection, NAT, and firewall rules',
          'A tool to configure database schemas',
          'A protocol for wireless Bluetooth transfers'
        ],
        correctIndex: 1,
        explanation: 'Netfilter hooks packet lifecycles across 5 chains: PREROUTING (before routing decision), INPUT (bound for local process), FORWARD (routed to another host), OUTPUT (local process outbound), POSTROUTING (after routing/NAT).',
        topic: 'Netfilter & Firewalls'
      },
      {
        id: 'lnx-a-10',
        question: 'What is the Linux Virtual Memory subsystem\'s Translation Lookaside Buffer (TLB) and why are HugePages (2MB/1GB) used in high-performance databases?',
        options: [
          'To increase the font size of console terminals',
          'TLB is a fast hardware CPU cache for virtual-to-physical address translations; HugePages reduce the total number of page table entries, drastically reducing TLB cache misses for large memory workloads',
          'To prevent memory from being written to disk',
          'To eliminate the need for CPU L1 cache'
        ],
        correctIndex: 1,
        explanation: 'Standard page size is 4KB. For 100GB databases, traversing 4KB page tables causes severe TLB cache thrashing. Transparent HugePages (2MB/1GB) reduce page count by 500x, boosting TLB hits.',
        topic: 'Virtual Memory & HugePages'
      }
    ]
  },

  // ==========================================
  // 9. DATA ANALYTICS
  // ==========================================
  data_analytics: {
    beginner: [
      {
        id: 'da-b-1',
        question: 'What is the primary difference between Structured and Unstructured Data in analytics?',
        options: [
          'Structured data has a strict schema and tabular format (e.g. SQL tables, CSV); Unstructured data lacks predefined models (e.g. raw text, images, video)',
          'Structured data is free; Unstructured data is paid',
          'Structured data is only stored in RAM',
          'Unstructured data cannot be analyzed'
        ],
        correctIndex: 0,
        explanation: 'Structured data fits cleanly in relational tables with defined columns/types. Unstructured data (audio, PDFs, raw logs) requires parsing or NLP before tabular analysis.',
        topic: 'Data Types'
      },
      {
        id: 'da-b-2',
        question: 'What is the difference between Mean, Median, and Mode in descriptive statistics?',
        options: [
          'Mean is the average; Median is the middle value in a sorted dataset; Mode is the most frequently occurring value',
          'Mean is the highest number; Median is the lowest number; Mode is the count',
          'They are all identical in non-symmetric distributions',
          'Median only applies to categorical text'
        ],
        correctIndex: 0,
        explanation: 'Mean is the sum divided by count (sensitive to outliers). Median is the 50th percentile midpoint (robust to outliers). Mode is the most repeated value.',
        topic: 'Descriptive Statistics'
      },
      {
        id: 'da-b-3',
        question: 'In Python Pandas, what is the primary difference between a `Series` and a `DataFrame`?',
        options: [
          'A Series is a 1-dimensional labeled array; a DataFrame is a 2-dimensional labeled tabular data structure with columns of potentially different types',
          'A Series cannot hold numbers; DataFrames can',
          'DataFrames only work with CSV files',
          'A Series is an Excel file'
        ],
        correctIndex: 0,
        explanation: 'A Pandas `Series` represents a single column with an index (1D). A `DataFrame` is a full table composed of multiple aligned Series sharing an index (2D).',
        topic: 'Pandas Basics'
      },
      {
        id: 'da-b-4',
        question: 'What does a Box Plot (Box-and-Whisker plot) visualize?',
        options: [
          'Network packet routes across routers',
          'The 5-number summary of a distribution: Minimum, First Quartile (Q1), Median (Q2), Third Quartile (Q3), Maximum, and Outliers',
          'A 3D rendering of physical computer boxes',
          'The relationship between two categorical variables'
        ],
        correctIndex: 1,
        explanation: 'Box plots display median, interquartile range (IQR = Q3 - Q1), whiskers (1.5 * IQR), and individual outlier points beyond the whiskers.',
        topic: 'Data Visualization'
      },
      {
        id: 'da-b-5',
        question: 'What is the purpose of the `df.dropna()` and `df.fillna()` methods in Pandas?',
        options: [
          'To format column font sizes',
          '`df.dropna()` removes rows/columns containing missing values (NaN); `df.fillna()` replaces missing values with specified constants or imputed statistics (mean/median)',
          'To delete duplicate columns only',
          'To connect to external SQL databases'
        ],
        correctIndex: 1,
        explanation: '`dropna()` drops missing data rows/columns; `fillna()` imputes missing NaN entries with replacement values (like zero, forward-fill, or column mean).',
        topic: 'Data Cleaning'
      },
      {
        id: 'da-b-6',
        question: 'What is a Correlation Coefficient (Pearson\'s r) and what does a value of \(-1.0\) indicate?',
        options: [
          'Zero relationship between variables',
          'A perfect negative linear relationship: as one variable increases, the other variable decreases proportionally',
          'A calculation error in the dataset',
          'A non-linear quadratic relationship'
        ],
        correctIndex: 1,
        explanation: 'Pearson\'s \(r\) ranges from \(-1.0\) (perfect inverse linear correlation) to \(+1.0\) (perfect positive linear correlation), with \(0.0\) indicating no linear correlation.',
        topic: 'Correlation & Statistics'
      },
      {
        id: 'da-b-7',
        question: 'What does the `groupby()` operation do in data analytics workflows (Pandas / SQL)?',
        options: [
          'Deletes duplicate rows permanently',
          'Splits data into buckets based on key values, applies an aggregation function (sum, mean, count) to each bucket, and combines the results (Split-Apply-Combine)',
          'Sorts rows alphabetically without aggregating',
          'Converts numbers into percentages'
        ],
        correctIndex: 1,
        explanation: 'The Split-Apply-Combine paradigm groups records by distinct categorical keys and computes aggregate summary metrics per group.',
        topic: 'Aggregation'
      },
      {
        id: 'da-b-8',
        question: 'Which chart type is best suited for showing trends and changes in a continuous metric over time?',
        options: ['Pie Chart', 'Line Chart (Time-Series)', 'Scatter Plot', 'Treemap'],
        correctIndex: 1,
        explanation: 'Line charts are the standard choice for temporal data because the connected points visually communicate directional velocity and trends across time intervals.',
        topic: 'Visualization Choice'
      },
      {
        id: 'da-b-9',
        question: 'What is the difference between Qualitative (Categorical) and Quantitative (Numerical) data?',
        options: [
          'Qualitative data describes characteristics or labels (nominal/ordinal, e.g., Country, Tier); Quantitative data represents measurable numerical quantities (discrete/continuous, e.g., Revenue, Age)',
          'Qualitative data is always numerical; Quantitative data is always text',
          'They are synonyms in data analytics',
          'Quantitative data cannot be averaged'
        ],
        correctIndex: 0,
        explanation: 'Qualitative data represents non-numeric categories or ranks. Quantitative data represents countable or measurable numerical amounts on which arithmetic can be performed.',
        topic: 'Data Classification'
      },
      {
        id: 'da-b-10',
        question: 'What is a Pivot Table in spreadsheet and data analytics tools?',
        options: [
          'A table that rotates screen orientation by 90 degrees',
          'An interactive data summarization tool that aggregates, reorganizes, and cross-tabulates large datasets across customizable row and column dimensions',
          'A backup copy of a database',
          'A chart showing financial stock tickers'
        ],
        correctIndex: 1,
        explanation: 'Pivot tables reshape data by pivoting dimension columns into multi-dimensional summary grids with aggregated values.',
        topic: 'Pivot Tables'
      }
    ],
    intermediate: [
      {
        id: 'da-i-1',
        question: 'What is the difference between Type I Error (\(\alpha\)) and Type II Error (\(\beta\)) in hypothesis testing?',
        options: [
          'Type I is a False Positive (rejecting a true Null Hypothesis); Type II is a False Negative (failing to reject a false Null Hypothesis)',
          'Type I is a False Negative; Type II is a False Positive',
          'Type I applies to sample sizes under 30; Type II applies to samples over 1000',
          'They are identical errors'
        ],
        correctIndex: 0,
        explanation: 'Type I Error (\(\alpha\)): False Alarm / False Positive (claiming an effect exists when it doesn\'t). Type II Error (\(\beta\)): Missed Opportunity / False Negative (missing a real effect).',
        topic: 'Hypothesis Testing'
      },
      {
        id: 'da-i-2',
        question: 'What does a p-value represent in statistical hypothesis testing (e.g. \(p < 0.05\))?',
        options: [
          'The probability that the alternative hypothesis is 100% true',
          'The probability of observing sample results as extreme as, or more extreme than, the observed data assuming the Null Hypothesis is strictly true',
          'The percentage of error in the dataset',
          'The confidence interval width'
        ],
        correctIndex: 1,
        explanation: 'The p-value measures evidence against the null hypothesis: assuming no real difference exists, it is the probability of obtaining test statistics at least as extreme as observed.',
        topic: 'P-Values & Significance'
      },
      {
        id: 'da-i-3',
        question: 'What is the Central Limit Theorem (CLT) and why is it essential for statistical inference?',
        options: [
          'It states that all real-world datasets follow a uniform flat distribution',
          'It states that the distribution of sample means approaches a Normal (Gaussian) distribution as the sample size \(n\) increases (typically \(n \ge 30\)), regardless of the underlying population\'s distribution shape',
          'It proves that correlation implies causation',
          'It guarantees zero error in random sampling'
        ],
        correctIndex: 1,
        explanation: 'CLT guarantees that sample means will be normally distributed for sufficiently large samples, enabling parametric tests (Z-test, t-test) and confidence interval calculations.',
        topic: 'Central Limit Theorem'
      },
      {
        id: 'da-i-4',
        question: 'What is A/B Testing in product analytics and how is Statistical Power \((1 - \beta)\) defined?',
        options: [
          'Testing software on Apple vs Browser; Power is CPU speed',
          'A randomized controlled experiment comparing two variants (A vs B) to measure impact on a KPI; Statistical Power is the probability of correctly detecting a true treatment effect when one actually exists',
          'Testing databases using two different passwords',
          'A method to remove outliers from sales charts'
        ],
        correctIndex: 1,
        explanation: 'A/B testing evaluates variant performance using statistical hypothesis tests. Statistical Power (typically 80%) is the probability of avoiding Type II errors and detecting true lifts.',
        topic: 'A/B Testing'
      },
      {
        id: 'da-i-5',
        question: 'What is Simpson\'s Paradox in data analytics?',
        options: [
          'A software bug in spreadsheet formulas',
          'A statistical phenomenon where a clear trend or correlation appears within different sub-groups of data, but disappears or reverses when the groups are aggregated together due to confounding variables',
          'When the mean and median of a dataset are identical',
          'A paradox where bigger datasets are slower to query'
        ],
        correctIndex: 1,
        explanation: 'Simpson\'s paradox occurs when an apparent relationship in aggregate data reverses when conditioned on an unobserved confounding variable.',
        topic: 'Statistical Fallacies'
      },
      {
        id: 'da-i-6',
        question: 'What is the difference between Exploratory Data Analysis (EDA) and Confirmatory Data Analysis (CDA)?',
        options: [
          'EDA explores open-ended patterns, anomalies, and distributions without rigid prior hypotheses; CDA tests specific pre-formulated statistical hypotheses using rigorous significance testing',
          'EDA is done in Excel; CDA is done in Python',
          'EDA is for numbers; CDA is for text',
          'They are identical'
        ],
        correctIndex: 0,
        explanation: 'EDA uses visual and summary tools to discover structures and generate hypotheses. CDA tests those hypotheses with formal statistical models.',
        topic: 'EDA vs CDA'
      },
      {
        id: 'da-i-7',
        question: 'What is the difference between Star Schema and Snowflake Schema in Data Warehousing (e.g., Snowflake, BigQuery)?',
        options: [
          'Star Schema has normalized dimension tables; Snowflake has denormalized dimension tables',
          'Star Schema has a central Fact table connected directly to denormalized single-tier Dimension tables; Snowflake Schema normalizes dimension tables into multiple sub-tables, reducing redundancy but increasing join complexity',
          'Star schema is only for SQL; Snowflake is for NoSQL',
          'Snowflake schema cannot store numbers'
        ],
        correctIndex: 1,
        explanation: 'Star schema uses denormalized 1-hop dimension tables for faster analytical queries. Snowflake schema normalizes dimensions into hierarchies (saving space at the cost of joins).',
        topic: 'Data Warehousing Schemas'
      },
      {
        id: 'da-i-8',
        question: 'What are the 3 main types of Data Imputation for handling Missing Not At Random (MNAR) vs Missing Completely At Random (MCAR) data?',
        options: [
          'Deleting the database, resetting passwords, restart',
          'Mean/Median imputation (for numerical MCAR), Mode/Constant imputation (for categorical), and Advanced Model-based imputation (KNN, MICE, IterativeImputer)',
          'Converting all missing entries to the string "EMPTY"',
          'Multiplying existing data by 2'
        ],
        correctIndex: 1,
        explanation: 'MCAR data can be dropped or imputed with summary statistics; MAR/MNAR requires model-based methods (KNN, Multiple Imputation by Chained Equations - MICE) to preserve relationships.',
        topic: 'Missing Data Imputation'
      },
      {
        id: 'da-i-9',
        question: 'What is Cohort Analysis in customer retention and business intelligence?',
        options: [
          'Analyzing computer hardware components',
          'Tracking the behavioral metrics and retention of a specific group of users who share a common characteristic (e.g. signed up in the same month) over time across successive lifecycle intervals',
          'Calculating employee payroll bonuses',
          'Comparing website traffic against competitors'
        ],
        correctIndex: 1,
        explanation: 'Cohort analysis groups users by a starting event (acquisition cohort) to track retention decay, churn rates, and lifetime value over time.',
        topic: 'Cohort & Retention'
      },
      {
        id: 'da-i-10',
        question: 'What is the purpose of Resampling (Bootstrapping) in empirical data analysis?',
        options: [
          'Resizing images to fit on web pages',
          'Repeatedly drawing random samples with replacement from an existing dataset to estimate the sampling distribution and standard error of complex estimators without assuming parametric distributions',
          'Deleting half the rows to speed up calculations',
          'Compressing data into zip archives'
        ],
        correctIndex: 1,
        explanation: 'Bootstrapping draws repeated samples with replacement to empirically compute confidence intervals and standard errors without requiring strict normality assumptions.',
        topic: 'Bootstrapping'
      }
    ],
    advance: [
      {
        id: 'da-a-1',
        question: 'What is the Difference-in-Differences (DiD) quasi-experimental design in causal inference analytics?',
        options: [
          'Subtracting the mean from the standard deviation twice',
          'A statistical technique that estimates the causal effect of a treatment by comparing the pre-to-post change in outcomes of the treatment group against the pre-to-post change in outcomes of an untreated control group (under the Parallel Trends assumption)',
          'Calculating the variance between two SQL database tables',
          'An algorithm for clustering time series data'
        ],
        correctIndex: 1,
        explanation: 'DiD isolates causal treatment effects by subtracting counterfactual baseline trend differences between treatment and control cohorts over time, controlling for unobserved time-invariant confounders.',
        topic: 'Causal Inference & DiD'
      },
      {
        id: 'da-a-2',
        question: 'What is Survival Analysis (Kaplan-Meier estimator and Cox Proportional Hazards Model) used for in analytics?',
        options: [
          'Analyzing computer battery lifespan under extreme temperatures',
          'Modeling time-to-event data (e.g., customer churn, loan default, machine failure) while properly handling right-censored data (subjects who did not experience the event during the study period)',
          'Predicting financial stock market crashes with neural nets',
          'Calculating website page load times'
        ],
        correctIndex: 1,
        explanation: 'Survival analysis models the hazard rate and probability of an event occurring over time, solving the censoring problem where some entities have not churned/failed yet.',
        topic: 'Survival Analysis'
      },
      {
        id: 'da-a-3',
        question: 'What is Propensity Score Matching (PSM) and how does it reduce selection bias in observational data?',
        options: [
          'Matching customers by credit score for loan approvals',
          'Predicting the conditional probability of receiving treatment given observed covariates using logistic regression, and matching treated individuals with control individuals having identical propensity scores to emulate a randomized trial',
          'A scoring system for gaming leaderboards',
          'A method to cluster customers by purchase volume'
        ],
        correctIndex: 1,
        explanation: 'PSM reduces confounding in observational studies by matching treated units to control units with similar treatment propensity \(P(\text{Treatment} | X)\), balancing observed covariates.',
        topic: 'Propensity Score Matching'
      },
      {
        id: 'da-a-4',
        question: 'What is Multi-Touch Attribution (MTA) vs Last-Touch Attribution in marketing analytics and what does Shapley / Markov Chain attribution provide?',
        options: [
          'Last-touch gives all credit to the final touchpoint; Shapley/Markov attribution algorithmically distributes credit across all multi-channel marketing touchpoints based on their incremental marginal contribution or removal effect',
          'MTA only tracks email marketing campaigns',
          'Last-touch attribution is required by GDPR law',
          'Markov attribution is an unsupervised clustering algorithm'
        ],
        correctIndex: 0,
        explanation: 'Last-touch unfairly attributes 100% of conversion credit to the final ad clicked. Markov and Shapley attribution distribute credit proportionately based on removal effects across full customer journeys.',
        topic: 'Attribution Modeling'
      },
      {
        id: 'da-a-5',
        question: 'In Time-Series decomposition, what is the difference between Additive \((Y_t = T_t + S_t + R_t)\) and Multiplicative \((Y_t = T_t \times S_t \times R_t)\) models?',
        options: [
          'Additive is used when seasonal variations remain constant in magnitude regardless of overall trend; Multiplicative is used when seasonal swings scale proportionally with changes in the underlying trend level',
          'Multiplicative is only for financial stocks',
          'Additive cannot be computed on negative numbers',
          'They are identical'
        ],
        correctIndex: 0,
        explanation: 'Additive models assume constant seasonal oscillation amplitude. Multiplicative models assume seasonal fluctuations expand or contract as the baseline trend grows or shrinks.',
        topic: 'Time-Series Decomposition'
      },
      {
        id: 'da-a-6',
        question: 'What is the False Discovery Rate (FDR) and how does the Benjamini-Hochberg (BH) procedure control it when performing thousands of simultaneous hypothesis tests (A/B testing metrics)?',
        options: [
          'It drops 50% of the tested metrics randomly',
          'FDR is the expected proportion of false positives among all rejected null hypotheses; the BH procedure ranks p-values and controls FDR by setting adaptive significance thresholds \((p_{(i)} \le \frac{i}{m} Q)\), which is less conservative and more powerful than Bonferroni correction',
          'It replaces p-values with R-squared scores',
          'It multiplies all p-values by the sample size'
        ],
        correctIndex: 1,
        explanation: 'When testing hundreds of metrics simultaneously, standard \(\alpha = 0.05\) creates many false alarms. Benjamini-Hochberg controls the False Discovery Rate without the severe power loss of Bonferroni.',
        topic: 'Multiple Testing & FDR'
      },
      {
        id: 'da-a-7',
        question: 'What is the purpose of Data Vault 2.0 architecture in modern enterprise data warehousing?',
        options: [
          'An encrypted vault for storing database root passwords',
          'A hybrid data modeling methodology separating business keys (Hubs), relationships (Links), and context/history (Satellites), designed for massive parallel ingestion, traceability, and agile schema evolution',
          'A compression algorithm for Snowflake databases',
          'A tool for converting SQL queries into NoSQL JSON'
        ],
        correctIndex: 1,
        explanation: 'Data Vault 2.0 organizes data into Hubs (business keys), Links (transactions/associations), and Satellites (temporal context), allowing auditability, parallel loading, and agile schema expansion.',
        topic: 'Data Vault 2.0'
      },
      {
        id: 'da-a-8',
        question: 'What is the difference between Stationary and Non-Stationary time-series and how does the Augmented Dickey-Fuller (ADF) test evaluate stationarity?',
        options: [
          'Stationary data has constant mean, variance, and autocovariance over time; the ADF test tests the null hypothesis that a unit root is present (non-stationary); \(p < 0.05\) rejects unit root, confirming stationarity',
          'Stationary data cannot be plotted on a graph',
          'ADF test only checks if values are positive',
          'Non-stationary data has zero trend'
        ],
        correctIndex: 0,
        explanation: 'Time-series forecasting models (ARIMA) require stationarity (constant statistical properties over time). The ADF test detects unit roots to verify if differencing is needed.',
        topic: 'Time-Series & ADF Test'
      },
      {
        id: 'da-a-9',
        question: 'What is RFM (Recency, Frequency, Monetary) segmentation and how is it used in customer lifecycle analytics?',
        options: [
          'A radio frequency modulation technique',
          'A behavioral segmentation technique that scores customers on how recently they purchased, how frequently they purchase, and how much monetary value they spend, identifying champions, at-risk, and churned segments',
          'A database indexing algorithm',
          'A method to encrypt credit card transactions'
        ],
        correctIndex: 1,
        explanation: 'RFM quantiles score customers across Recency, Frequency, and Monetary value, creating actionable segments (Loyal Customers, Potential Loyalists, At Risk, Lost).',
        topic: 'Customer Segmentation (RFM)'
      },
      {
        id: 'da-a-10',
        question: 'What is the difference between Delta Lake / Apache Iceberg / Apache Hudi table formats on cloud object storage?',
        options: [
          'They are proprietary database hardware servers',
          'They are open-source table format layers on Parquet/S3 that provide ACID transactions, time travel (historical snapshot rollback), schema enforcement, partition evolution, and metadata-driven query optimization on Data Lakes (Lakehouse architecture)',
          'They are text editors for big data',
          'They only support single-threaded execution'
        ],
        correctIndex: 1,
        explanation: 'Lakehouse formats (Iceberg, Delta Lake, Hudi) add an ACID transaction log and metadata layer on top of raw Parquet files, enabling time-travel queries and concurrent writes on S3/GCS.',
        topic: 'Lakehouse & Table Formats'
      }
    ]
  },

  // ==========================================
  // 10. COMPUTER NETWORKS
  // ==========================================
  computer_networks: {
    beginner: [
      {
        id: 'cn-b-1',
        question: 'How many layers are in the standard OSI (Open Systems Interconnection) reference model?',
        options: ['4 Layers', '5 Layers', '7 Layers', '9 Layers'],
        correctIndex: 2,
        explanation: 'The 7 layers of OSI are: 1. Physical, 2. Data Link, 3. Network, 4. Transport, 5. Session, 6. Presentation, 7. Application.',
        topic: 'OSI Model'
      },
      {
        id: 'cn-b-2',
        question: 'What is the primary difference between TCP and UDP at the Transport Layer?',
        options: [
          'TCP is connection-oriented, reliable (guaranteed delivery via ACKs), and ordered; UDP is connectionless, lightweight, and unordered without delivery guarantees',
          'UDP is slower than TCP',
          'TCP is only used for video games; UDP is for web pages',
          'UDP uses 3-way handshakes; TCP does not'
        ],
        correctIndex: 0,
        explanation: 'TCP guarantees delivery and ordering with flow control. UDP sends datagrams without establishing a handshake or verifying receipt, making it faster for live video and gaming.',
        topic: 'TCP vs UDP'
      },
      {
        id: 'cn-b-3',
        question: 'What is the purpose of the Domain Name System (DNS)?',
        options: [
          'To encrypt user emails',
          'To translate human-readable domain names (e.g. `google.com`) into machine-routable IP addresses (e.g. `142.250.190.46`)',
          'To assign MAC addresses to network cards',
          'To boost Wi-Fi signal range'
        ],
        correctIndex: 1,
        explanation: 'DNS acts as the phonebook of the internet, resolving hostname domain strings into numerical IPv4/IPv6 addresses.',
        topic: 'DNS'
      },
      {
        id: 'cn-b-4',
        question: 'What is the length of an IPv4 address versus an IPv6 address in bits?',
        options: [
          'IPv4 is 32 bits; IPv6 is 128 bits',
          'IPv4 is 64 bits; IPv6 is 256 bits',
          'IPv4 is 16 bits; IPv6 is 32 bits',
          'Both are 128 bits'
        ],
        correctIndex: 0,
        explanation: 'IPv4 uses 32-bit addresses (approx 4.3 billion unique IPs). IPv6 uses 128-bit addresses (\(3.4 \times 10^{38}\) unique IPs), solving address exhaustion.',
        topic: 'IP Addressing'
      },
      {
        id: 'cn-b-5',
        question: 'Which protocol and port number is standard for secure web browsing over HTTPS?',
        options: ['HTTP over Port 80', 'HTTPS over Port 443', 'FTP over Port 21', 'SSH over Port 22'],
        correctIndex: 1,
        explanation: 'HTTPS runs HTTP encrypted over TLS/SSL on standard TCP Port 443 (plain HTTP uses Port 80).',
        topic: 'Protocols & Ports'
      },
      {
        id: 'cn-b-6',
        question: 'What is a MAC (Media Access Control) address and at which layer does it operate?',
        options: [
          'A software IP address; Network Layer (Layer 3)',
          'A unique physical hardware identifier burned into network interface cards (NIC); Data Link Layer (Layer 2)',
          'A domain name string; Application Layer (Layer 7)',
          'A transport port number; Transport Layer (Layer 4)'
        ],
        correctIndex: 1,
        explanation: 'A MAC address is a 48-bit physical identifier (e.g., `00:1A:2B:3C:4D:5E`) operating at the Data Link Layer (Layer 2) for local frame delivery on Ethernet/Wi-Fi.',
        topic: 'MAC Addresses & Layer 2'
      },
      {
        id: 'cn-b-7',
        question: 'What is the role of the DHCP (Dynamic Host Configuration Protocol)?',
        options: [
          'To compress web images on servers',
          'To automatically assign IP addresses, subnet masks, default gateways, and DNS servers to devices joining a network',
          'To route packets across international underwater cables',
          'To scan for computer viruses'
        ],
        correctIndex: 1,
        explanation: 'DHCP automates network configuration, dynamically leasing IP addresses and gateway settings to client devices using the DORA (Discover, Offer, Request, Acknowledge) process.',
        topic: 'DHCP'
      },
      {
        id: 'cn-b-8',
        question: 'What does the `ping` utility use under the hood to test reachability of a host?',
        options: ['TCP SYN packets', 'ICMP (Internet Control Message Protocol) Echo Request / Echo Reply', 'UDP datagrams', 'HTTP GET requests'],
        correctIndex: 1,
        explanation: '`ping` sends ICMP Echo Request messages and waits for ICMP Echo Reply packets to verify connectivity and measure round-trip time.',
        topic: 'ICMP & Ping'
      },
      {
        id: 'cn-b-9',
        question: 'What is a Router versus a Switch in networking?',
        options: [
          'A Switch forwards Ethernet frames within a local network (LAN) using MAC addresses (Layer 2); a Router connects different networks together and routes IP packets across subnets (Layer 3)',
          'A Router connects keyboards; a Switch connects monitors',
          'A Switch is only for wireless; a Router is for cables',
          'They perform identical functions'
        ],
        correctIndex: 0,
        explanation: 'Switches connect local devices in the same broadcast domain using MAC tables (Layer 2). Routers forward packets between distinct IP subnets and networks using routing tables (Layer 3).',
        topic: 'Network Devices'
      },
      {
        id: 'cn-b-10',
        question: 'What is the standard loopback IP address in IPv4 and IPv6?',
        options: ['`192.168.1.1` and `fe80::1`', '`127.0.0.1` and `::1`', '`10.0.0.1` and `2001::1`', '`255.255.255.255` and `ff02::1`'],
        correctIndex: 1,
        explanation: '`127.0.0.1` (`localhost`) in IPv4 and `::1` in IPv6 route network packets back to the local host machine without sending traffic onto physical network interfaces.',
        topic: 'Loopback Addressing'
      }
    ],
    intermediate: [
      {
        id: 'cn-i-1',
        question: 'What is the 3-Way Handshake process used by TCP to establish a reliable connection?',
        options: [
          'REQUEST -> ACCEPT -> ACK',
          'SYN -> SYN-ACK -> ACK',
          'HELLO -> CONNECT -> READY',
          'PING -> PONG -> OK'
        ],
        correctIndex: 1,
        explanation: '1. Client sends SYN (Synchronize sequence number). 2. Server responds with SYN-ACK (Synchronize + Acknowledge). 3. Client replies with ACK. The connection is established.',
        topic: 'TCP 3-Way Handshake'
      },
      {
        id: 'cn-i-2',
        question: 'How does ARP (Address Resolution Protocol) resolve an IP address to a MAC address?',
        options: [
          'By querying a central DNS cloud server',
          'By broadcasting an ARP Request frame to all devices on the local subnet (`FF:FF:FF:FF:FF:FF`) asking "Who has IP X?"; the owner device replies with a unicast ARP Reply containing its MAC address',
          'By scanning TCP port 80 on all machines',
          'By looking up the host in the local `/etc/hosts` file'
        ],
        correctIndex: 1,
        explanation: 'ARP broadcasts a Layer 2 frame to `FF:FF:FF:FF:FF:FF`. The device matching the target IP sends a unicast reply with its MAC address, caching it in the ARP table.',
        topic: 'ARP Protocol'
      },
      {
        id: 'cn-i-3',
        question: 'In CIDR notation, how many usable host IP addresses are in a `/24` subnet (e.g., `192.168.1.0/24`)?',
        options: ['256 addresses', '254 usable addresses (256 minus network address and broadcast address)', '512 addresses', '128 addresses'],
        correctIndex: 1,
        explanation: 'A `/24` has 8 host bits (\(2^8 = 256\) total IPs). Subtracting the Network address (`.0`) and Broadcast address (`.255`) yields 254 usable host addresses.',
        topic: 'Subnetting & CIDR'
      },
      {
        id: 'cn-i-4',
        question: 'What is NAT (Network Address Translation) and why is PAT (Port Address Translation / NAT Overload) widely used?',
        options: [
          'NAT translates text into binary code',
          'PAT allows multiple private IP devices on a local LAN to share a single public IPv4 address on the internet by mapping internal connections to unique ephemeral source port numbers',
          'NAT encrypts website passwords',
          'PAT is an authentication system for routers'
        ],
        correctIndex: 1,
        explanation: 'PAT (NAT Overload) translates private RFC 1918 IPs to one public IP by tracking source port numbers in a translation table, conserving scarce IPv4 addresses.',
        topic: 'NAT & PAT'
      },
      {
        id: 'cn-i-5',
        question: 'What is the purpose of TLS (Transport Layer Security) Handshake in HTTPS?',
        options: [
          'To assign IP addresses to clients',
          'To authenticate server identity using X.509 digital certificates and negotiate symmetric encryption keys (AES) using asymmetric key exchange (ECDHE) for secure, private communication',
          'To compress HTML files with gzip',
          'To format CSS styles on web browsers'
        ],
        correctIndex: 1,
        explanation: 'TLS uses asymmetric cryptography (RSA/ECC) to authenticate the server and securely exchange a symmetric session key (AES-GCM) for high-speed encrypted data transmission.',
        topic: 'TLS & Cryptography'
      },
      {
        id: 'cn-i-6',
        question: 'What are the main differences between HTTP/1.1 and HTTP/2?',
        options: [
          'HTTP/2 uses plain text headers; HTTP/1.1 uses binary frames',
          'HTTP/2 introduces binary framing, multiplexing multiple concurrent requests over a single TCP connection (eliminating head-of-line blocking at application layer), HPACK header compression, and server push',
          'HTTP/2 does not support HTTPS encryption',
          'HTTP/1.1 is faster than HTTP/2 on high latency networks'
        ],
        correctIndex: 1,
        explanation: 'HTTP/1.1 suffered from head-of-line blocking (1 request per TCP socket). HTTP/2 multiplexes interleaved binary streams over a single TCP connection with compressed headers (HPACK).',
        topic: 'HTTP Versions'
      },
      {
        id: 'cn-i-7',
        question: 'What is a VLAN (Virtual Local Area Network) and what does IEEE 802.1Q tagging accomplish?',
        options: [
          'A physical cable with 8 color strands',
          'A logical segmentation of a physical switch into multiple isolated broadcast domains; 802.1Q inserts a 4-byte tag into Ethernet headers to identify VLAN membership across trunk links',
          'A tool to boost Wi-Fi range across rooms',
          'A protocol for remote SSH terminal access'
        ],
        correctIndex: 1,
        explanation: 'VLANs divide physical switches into virtual networks for security and broadcast control. 802.1Q tags Ethernet frames on trunk lines so switches know which VLAN the frame belongs to.',
        topic: 'VLANs & 802.1Q'
      },
      {
        id: 'cn-i-8',
        question: 'How does TCP Flow Control differ from TCP Congestion Control?',
        options: [
          'Flow control prevents the sender from overwhelming the receiver\'s buffer (using TCP Sliding Window advertisement); Congestion control prevents the sender from overwhelming the intermediate network routers (using Congestion Window `cwnd`)',
          'Flow control is for UDP; Congestion control is for TCP',
          'They are two names for the same algorithm',
          'Congestion control is implemented strictly in hardware switches'
        ],
        correctIndex: 0,
        explanation: 'Flow Control manages receiver buffer capacity via `rwnd`. Congestion Control (Slow Start, Congestion Avoidance, Fast Retransmit) probes network capacity via `cwnd`.',
        topic: 'TCP Flow vs Congestion Control'
      },
      {
        id: 'cn-i-9',
        question: 'What is BGP (Border Gateway Protocol) and why is it called the routing protocol of the global internet?',
        options: [
          'A routing protocol used only inside home routers',
          'A Path-Vector routing protocol that manages routing decisions between independent Autonomous Systems (AS) across the global internet backbone using AS-Path attributes and routing policies',
          'A protocol for assigning DNS names to web servers',
          'A database replication protocol'
        ],
        correctIndex: 1,
        explanation: 'BGP is the exterior gateway protocol that interconnects internet service providers and tech giants (Autonomous Systems), exchanging prefix reachability via AS-Path vectors.',
        topic: 'BGP Routing'
      },
      {
        id: 'cn-i-10',
        question: 'What is the purpose of Spanning Tree Protocol (STP - IEEE 802.1D) in switched Ethernet networks?',
        options: [
          'To increase internet connection speed by 10x',
          'To detect and prevent broadcast storms and bridge loops in redundant Layer 2 switch topologies by logically disabling redundant links',
          'To assign IP addresses to servers',
          'To encrypt Wi-Fi passwords'
        ],
        correctIndex: 1,
        explanation: 'Without STP, redundant switch connections cause infinite loops of broadcast frames (broadcast storms) that crash networks. STP blocks redundant ports to maintain a loop-free tree.',
        topic: 'STP & Loop Prevention'
      }
    ],
    advance: [
      {
        id: 'cn-a-1',
        question: 'What is HTTP/3 and why does it use QUIC (built over UDP) instead of TCP?',
        options: [
          'HTTP/3 is an unencrypted legacy protocol',
          'HTTP/3 uses QUIC over UDP to solve TCP head-of-line blocking (where one lost packet stalls all multiplexed streams), provides zero-RTT connection resumption, and enables seamless connection migration across IP changes (e.g. Wi-Fi to 5G)',
          'HTTP/3 eliminates web browsers',
          'HTTP/3 only works on local LANs'
        ],
        correctIndex: 1,
        explanation: 'In HTTP/2 over TCP, a single lost packet blocks all multiplexed streams at the transport layer. QUIC operates over UDP, implementing independent streams, integrated TLS 1.3, and connection migration.',
        topic: 'HTTP/3 & QUIC'
      },
      {
        id: 'cn-a-2',
        question: 'What is Anycast Routing and how is it utilized in global DNS root servers and CDNs (e.g. Cloudflare)?',
        options: [
          'Broadcasting packets to every computer on Earth simultaneously',
          'A network addressing and routing methodology where the same single IP address is announced from multiple physical locations via BGP, routing client traffic to the topologically closest server location',
          'An algorithm for generating random encryption keys',
          'A protocol that bypasses fiber optic cables'
        ],
        correctIndex: 1,
        explanation: 'Anycast announces the same IP from hundreds of edge data centers. Internet routers automatically send users to the topologically nearest point of presence via standard BGP shortest path.',
        topic: 'Anycast Routing'
      },
      {
        id: 'cn-a-3',
        question: 'What is the difference between TCP BBR (Bottleneck Bandwidth and RTT) and loss-based congestion control algorithms (like CUBIC / Reno)?',
        options: [
          'CUBIC treats packet loss as the primary signal of congestion (leading to bufferbloat and performance degradation on high-speed lossy links); BBR actively measures real bottleneck bandwidth and minimum round-trip time to maximize throughput without filling buffers',
          'BBR only runs on dial-up internet connections',
          'CUBIC was developed for wireless 5G only',
          'BBR disables flow control completely'
        ],
        correctIndex: 0,
        explanation: 'Loss-based algorithms (CUBIC) inflate queues until buffers overflow and packets drop (causing bufferbloat). Google\'s BBR models the physical network pipe directly, maximizing throughput at minimum delay.',
        topic: 'TCP BBR & Congestion Control'
      },
      {
        id: 'cn-a-4',
        question: 'What is MPLS (Multiprotocol Label Switching) and how does it speed up traffic forwarding across ISP core networks?',
        options: [
          'It replaces IP addresses with user passwords',
          'It directs data from one network node to the next based on short 20-bit path labels rather than complex IP routing table lookups at each intermediate hop, enabling Traffic Engineering and Layer 2/3 VPNs',
          'It is a compression format for video streams',
          'It is an operating system for routers'
        ],
        correctIndex: 1,
        explanation: 'MPLS inserts 20-bit label headers (Layer 2.5) at ingress. Core Label Switch Routers (LSR) swap labels in hardware in O(1) time without performing deep IP routing table lookups.',
        topic: 'MPLS & Traffic Engineering'
      },
      {
        id: 'cn-a-5',
        question: 'What is a SYN Flood attack and how do SYN Cookies mitigate it without consuming server state memory?',
        options: [
          'Flooding a website with HTTP GET queries; mitigated by rate limiting',
          'An attacker floods a server with TCP SYN packets from spoofed IPs without replying to SYN-ACKs, exhausting the server\'s half-open connection backlog queue; SYN Cookies encode connection state into the initial sequence number (\(ISN\)), allocating no server memory until the final valid ACK is received',
          'An attack that cuts physical Ethernet cables',
          'A DNS poisoning technique'
        ],
        correctIndex: 1,
        explanation: 'SYN cookies avoid allocating state in the half-open backlog queue. The server derives the sequence number cryptographically from client IP, port, and timestamp, verifying it when the client sends the final ACK.',
        topic: 'SYN Flood & SYN Cookies'
      },
      {
        id: 'cn-a-6',
        question: 'What is Software-Defined Networking (SDN) and what is the primary architectural principle behind it (e.g. OpenFlow)?',
        options: [
          'Writing network code in JavaScript instead of C',
          'The decoupling and physical separation of the Network Control Plane (centralized routing intelligence/controller) from the Data Plane (forwarding hardware switches)',
          'Eliminating all routers and switches in favor of Wi-Fi',
          'A protocol for cloud billing'
        ],
        correctIndex: 1,
        explanation: 'SDN separates the Control Plane (which decides how packets should flow) from the Data Plane (which pushes packets). A centralized controller programs flow tables on switches via OpenFlow.',
        topic: 'Software-Defined Networking (SDN)'
      },
      {
        id: 'cn-a-7',
        question: 'What is DNSSEC (Domain Name System Security Extensions) and what vulnerabilities does it resolve?',
        options: [
          'It encrypts DNS query names so ISPs cannot see websites you visit',
          'It adds cryptographic digital signatures to DNS records (RRSIG, DNSKEY) using a hierarchical trust chain rooted at the DNS Root Zone, preventing DNS cache poisoning and spoofing attacks',
          'It speeds up DNS resolution by caching records forever',
          'It is a protocol for dynamic IP allocation'
        ],
        correctIndex: 1,
        explanation: 'DNSSEC signs DNS records cryptographically. DNS resolvers verify signatures through a chain of trust to guarantee that responses originate from the authentic domain owner and have not been spoofed.',
        topic: 'DNSSEC & Security'
      },
      {
        id: 'cn-a-8',
        question: 'What is the purpose of Equal-Cost Multi-Path (ECMP) routing in modern Leaf-Spine data center architectures?',
        options: [
          'Routing all traffic through a single primary switch until it breaks',
          'Distributing network traffic flows across multiple parallel, equal-cost paths using a hash of packet headers (5-tuple: source/dest IP, source/dest port, protocol) to maximize aggregate bisection bandwidth',
          'Calculating the monetary cost of electricity for routers',
          'Compressing packet headers across optical links'
        ],
        correctIndex: 1,
        explanation: 'In Clos / Leaf-Spine data center fabrics, ECMP hashes packet 5-tuples to distribute connections evenly across all spine switches, preventing hot-spots and maximizing throughput.',
        topic: 'ECMP & Data Center Fabrics'
      },
      {
        id: 'cn-a-9',
        question: 'What is MTU (Maximum Transmission Unit), Path MTU Discovery (PMTUD), and what happens when an IP packet exceeds MTU with the Don\'t Fragment (DF) bit set?',
        options: [
          'The packet is automatically compressed by the router',
          'The router drops the packet and returns an ICMP Type 3 Code 4 ("Destination Unreachable, Fragmentation Needed and DF set") error message containing the router\'s next-hop MTU to the sender',
          'The packet is split into 10 smaller UDP datagrams',
          'The router converts the packet into an IPv6 format'
        ],
        correctIndex: 1,
        explanation: 'Standard Ethernet MTU is 1500 bytes. If a packet exceeds a link\'s MTU with DF=1, the router drops it and sends an ICMP "Fragmentation Needed" message so the sender can adjust its MSS/PMTU.',
        topic: 'MTU & PMTUD'
      },
      {
        id: 'cn-a-10',
        question: 'What is the difference between BGP Route Reflection (RR) and Full Mesh iBGP in large transit provider networks?',
        options: [
          'Full mesh iBGP requires \(N(N-1)/2\) BGP peering sessions between all internal routers, which does not scale; Route Reflectors act as focal points that re-advertise learned iBGP routes to client peers, reducing peering sessions to \(O(N)\)',
          'Route reflectors only work on optical satellite links',
          'Full mesh iBGP is used only for home internet connections',
          'They have identical session scaling characteristics'
        ],
        correctIndex: 0,
        explanation: 'iBGP prohibits re-advertising routes learned from an iBGP peer to prevent loops, requiring an \(O(N^2)\) full mesh. Route Reflectors (RR) relax this rule with cluster IDs to scale to thousands of routers.',
        topic: 'BGP Route Reflectors'
      }
    ]
  }
};
