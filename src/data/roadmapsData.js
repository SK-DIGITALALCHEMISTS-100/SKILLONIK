export const DOMAIN_ROADMAPS = [
  {
    id: 'python-dev',
    title: 'Python Developer',
    subtitle: 'From Core Syntax to High-Throughput Microservices & Async Architectures',
    category: 'Software Engineering',
    level: 'Beginner to Advanced',
    duration: '16-20 Weeks',
    icon: 'Terminal',
    badgeColor: 'from-blue-500 to-indigo-600',
    accentColor: 'blue',
    rating: '4.9',
    enrolledCount: '42.8k',
    salaryRange: '$85,000 - $155,000 / yr',
    topCompanies: ['Google', 'Meta', 'Netflix', 'Spotify', 'Uber'],
    certifications: ['PCAP (Certified Associate in Python)', 'PCPP (Certified Professional in Python)', 'AWS Certified Developer'],
    overview: 'Master Python 3.12+, asynchronous programming, FastAPI/Django web services, ORM optimization, testing pipelines, and Dockerized cloud deployment.',
    stages: [
      {
        stageNumber: '01',
        title: 'Python Core & Syntax Mastery',
        duration: '3 Weeks',
        description: 'Establish deep fluency with Python memory models, dynamic typing, and object-oriented paradigms.',
        skills: ['Variables & Memory Reference', 'Control Flow & Loops', 'Functions, *args & **kwargs', 'OOP (Classes, Inheritance, Dunder Methods)', 'Exception Handling', 'Modules & Virtual Envs'],
        tools: ['Python 3.12+', 'VS Code', 'uv / Poetry', 'IPython'],
        prompt: 'Give me an in-depth breakdown of Python dunder methods, object data model, and memory reference mechanisms with practical code examples.'
      },
      {
        stageNumber: '02',
        title: 'Advanced Python & Concurrency',
        duration: '3 Weeks',
        description: 'Write ultra-efficient, memory-conscious Python using advanced functional patterns and async I/O.',
        skills: ['Decorators & Closures', 'Generators & Iterators (yield)', 'Context Managers (with)', 'Multithreading vs Multiprocessing (GIL)', 'AsyncIO & Event Loop', 'Type Annotations & Mypy'],
        tools: ['Asyncio', 'Mypy', 'Ruff', 'cProfile'],
        prompt: 'Explain the difference between Python Multiprocessing, Multithreading, and AsyncIO event loops with benchmark comparison code.'
      },
      {
        stageNumber: '03',
        title: 'Modern Web Frameworks & APIs',
        duration: '4 Weeks',
        description: 'Architect scalable, high-throughput REST and GraphQL APIs with automatic validation and documentation.',
        skills: ['FastAPI Dependency Injection', 'Pydantic v2 Serialization', 'Django 5 & Django REST Framework', 'JWT Authentication & OAuth2', 'Middleware & CORS', 'WebSockets for Real-time'],
        tools: ['FastAPI', 'Django REST Framework', 'Uvicorn', 'Pydantic', 'Postman'],
        prompt: 'Create a production-ready FastAPI backend with JWT auth, Pydantic schemas, custom middleware, and OpenAPI documentation.'
      },
      {
        stageNumber: '04',
        title: 'Databases, ORMs & Caching',
        duration: '3 Weeks',
        description: 'Connect backends to relational and distributed caching databases with zero SQL injection risk and fast index execution.',
        skills: ['PostgreSQL & Connection Pooling', 'SQLAlchemy 2.0 (Async)', 'Alembic Database Migrations', 'Redis Caching & Session Store', 'MongoDB & Motor (Async NoSQL)', 'N+1 Query Optimization'],
        tools: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'DBeaver'],
        prompt: 'How do I configure Async SQLAlchemy 2.0 with PostgreSQL connection pooling and Alembic migrations in a production FastAPI app?'
      },
      {
        stageNumber: '05',
        title: 'Testing, Quality & CI/CD',
        duration: '2 Weeks',
        description: 'Implement rigorous automated test suites, mocking layers, and automated code quality gates.',
        skills: ['PyTest & Fixtures', 'Mocking & Patching', 'Coverage Analysis (pytest-cov)', 'Pre-commit Hooks & Linters', 'GitHub Actions CI/CD Pipeline', 'Security Auditing with Bandit'],
        tools: ['PyTest', 'Coverage.py', 'GitHub Actions', 'Ruff / Flake8'],
        prompt: 'Show me how to structure a complete PyTest test suite for an async REST API with database transaction rollbacks and mock services.'
      },
      {
        stageNumber: '06',
        title: 'Containerization, Cloud & Microservices',
        duration: '3 Weeks',
        description: 'Package applications into lightweight OCI containers and deploy them onto scalable cloud clusters.',
        skills: ['Multi-Stage Dockerfiles', 'Docker Compose Multi-service', 'Celery & Redis/RabbitMQ Async Task Queues', 'Gunicorn/Uvicorn Tuning', 'AWS ECS / GCP Cloud Run', 'Monitoring with Prometheus/Sentry'],
        tools: ['Docker', 'Celery', 'AWS / GCP', 'Sentry', 'Prometheus'],
        prompt: 'Provide a multi-stage Dockerfile and Docker Compose setup for a FastAPI + Celery + Redis + PostgreSQL application.'
      }
    ],
    capstoneProjects: [
      {
        title: 'Distributed Async Task Engine',
        tech: ['FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Docker'],
        desc: 'High-throughput background task processor capable of scheduling, executing, and monitoring thousands of queued jobs.'
      },
      {
        title: 'SaaS Multi-Tenant Analytics API',
        tech: ['Django REST', 'PostgreSQL Row-level Security', 'Redis', 'Stripe'],
        desc: 'Production-ready RESTful SaaS backend featuring sub-organization tenancy, JWT authentication, and rate-limiting.'
      }
    ]
  },
  {
    id: 'java-dev',
    title: 'Java Developer',
    subtitle: 'Enterprise-Grade Microservices with Spring Boot 3, JVM Internals & Cloud Native',
    category: 'Enterprise Engineering',
    level: 'Beginner to Advanced',
    duration: '18-22 Weeks',
    icon: 'Coffee',
    badgeColor: 'from-amber-600 to-red-600',
    accentColor: 'amber',
    rating: '4.9',
    enrolledCount: '38.4k',
    salaryRange: '$90,000 - $160,000 / yr',
    topCompanies: ['Amazon', 'Oracle', 'JPMorgan Chase', 'Netflix', 'Salesforce'],
    certifications: ['Oracle Certified Professional: Java SE', 'Spring Certified Professional', 'AWS Certified Developer'],
    overview: 'Master modern Java 21+ LTS, Spring Boot 3, Spring Cloud microservices, Hibernate/JPA, JVM memory profiling, and event-driven architecture.',
    stages: [
      {
        stageNumber: '01',
        title: 'Java 21+ Core & OOP Deep Dive',
        duration: '4 Weeks',
        description: 'Understand the JVM, memory layout (Heap vs Stack), OOP principles, and modern Java language syntax.',
        skills: ['JVM / JRE / JDK Architecture', 'Data Types & Control Structures', 'OOP (Polymorphism, Abstraction, Encapsulation)', 'Generics & Wildcards', 'Exception Handling & Custom Exceptions', 'Java 17/21 Features (Records, Pattern Matching, Sealed Classes)'],
        tools: ['JDK 21 LTS', 'IntelliJ IDEA', 'JShell', 'Maven'],
        prompt: 'Explain Java JVM memory layout (Heap, Metaspace, Stack) and garbage collection generational models with diagrams and examples.'
      },
      {
        stageNumber: '02',
        title: 'Collections, Streams & Concurrency',
        duration: '3 Weeks',
        description: 'Build fast data pipelines with functional Streams and manage thread-safe multi-threaded workloads.',
        skills: ['Collections Framework (List, Set, Map, Queue)', 'Java 8+ Streams API & Lambdas', 'CompletableFuture & Async', 'Virtual Threads (Project Loom)', 'Synchronized, Locks & Atomic Variables', 'Thread Pools & ExecutorService'],
        tools: ['JMH (Microbenchmark)', 'IntelliJ Profiler', 'VisualVM'],
        prompt: 'Show how Java 21 Virtual Threads (Project Loom) revolutionize concurrent server throughput compared to traditional OS Thread Pools.'
      },
      {
        stageNumber: '03',
        title: 'Spring Boot 3 & Enterprise Frameworks',
        duration: '4 Weeks',
        description: 'Develop enterprise-grade REST APIs using Spring Boot, Dependency Injection, and modern web modules.',
        skills: ['Spring Inversion of Control & DI', 'Spring Boot Autoconfiguration & Starters', 'Building RESTful Web Services', 'Spring Data JPA & Hibernate', 'Spring Security 6 & OAuth2/JWT', 'Bean Validation & Global Exception Handling'],
        tools: ['Spring Boot 3', 'Spring Initializr', 'Hibernate', 'Postman'],
        prompt: 'Provide a complete Spring Boot 3 REST controller with Spring Data JPA, custom repository query methods, and JWT security filters.'
      },
      {
        stageNumber: '04',
        title: 'Microservices & Event-Driven Systems',
        duration: '4 Weeks',
        description: 'Decompose monolithic backends into resilient, distributed microservices using event streaming.',
        skills: ['Microservice Architecture Patterns', 'API Gateway (Spring Cloud Gateway)', 'Service Discovery (Eureka / Consul)', 'Resilience4j (Circuit Breakers & Retries)', 'Apache Kafka / RabbitMQ Messaging', 'Distributed Tracing (OpenTelemetry & Micrometer)'],
        tools: ['Apache Kafka', 'Spring Cloud', 'RabbitMQ', 'Zipkin / Jaeger'],
        prompt: 'Design an event-driven microservices architecture using Spring Boot 3, Apache Kafka topics, and Saga pattern for distributed transactions.'
      },
      {
        stageNumber: '05',
        title: 'Build Systems, Testing & JVM Tuning',
        duration: '3 Weeks',
        description: 'Automate testing with JUnit 5 and optimize JVM garbage collection for ultra-low latency.',
        skills: ['Maven & Gradle Build Pipelines', 'JUnit 5 & AssertJ', 'Mockito & Testcontainers (Integration Testing)', 'JVM Garbage Collection (G1GC, ZGC) Tuning', 'Heap Dump & Thread Dump Analysis', 'SonarQube Quality Gate'],
        tools: ['JUnit 5', 'Mockito', 'Testcontainers', 'Gradle', 'SonarQube'],
        prompt: 'How do you write integration tests using Spring Boot Test and Testcontainers to spin up real PostgreSQL and Kafka Docker instances?'
      },
      {
        stageNumber: '06',
        title: 'Cloud-Native Java & Kubernetes Deployment',
        duration: '2 Weeks',
        description: 'Package Spring Boot apps with GraalVM Native Images and deploy onto Kubernetes clusters.',
        skills: ['GraalVM Native Image Compilation (AOT)', 'Spring Boot Actuator Health Checks', 'Dockerizing Spring Boot (Layered Jars)', 'Kubernetes Pods, Services & ConfigMaps', 'Helm Charts for Enterprise Apps', 'CI/CD with GitHub Actions'],
        tools: ['GraalVM', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD'],
        prompt: 'Explain how to build ultra-fast startup Spring Boot Native Images using GraalVM and deploy to Kubernetes with liveness/readiness probes.'
      }
    ],
    capstoneProjects: [
      {
        title: 'Cloud-Native Banking & Payment Engine',
        tech: ['Spring Boot 3', 'Kafka', 'PostgreSQL', 'Redis', 'Docker'],
        desc: 'Distributed fintech service handling account ledgers, idempotent fund transfers, and fraud detection stream processing.'
      },
      {
        title: 'High-Concurrency E-Commerce Order Microservice',
        tech: ['Spring Cloud', 'Resilience4j', 'Keycloak JWT', 'MongoDB', 'Kubernetes'],
        desc: 'Scalable e-commerce platform with flash-sale inventory locks, circuit-breaker fallback, and event-driven fulfillment.'
      }
    ]
  },
  {
    id: 'cpp-dev',
    title: 'C++ Developer',
    subtitle: 'Modern C++20/23, Low-Level Systems, Game Engines & High-Frequency Trading',
    category: 'Systems & High-Performance',
    level: 'Intermediate to Advanced',
    duration: '18-24 Weeks',
    icon: 'Cpu',
    badgeColor: 'from-cyan-600 to-blue-700',
    accentColor: 'cyan',
    rating: '4.8',
    enrolledCount: '29.1k',
    salaryRange: '$95,000 - $175,000 / yr',
    topCompanies: ['NVIDIA', 'Jane Street', 'Epic Games', 'Apple', 'Citadel', 'Microsoft'],
    certifications: ['Certified C++ Developer (C++ Institute)', 'Embedded Systems Certification'],
    overview: 'Master modern C++ (C++17/20/23), manual memory management, RAII, STL internals, cache optimization, multi-threading, and CMake build systems.',
    stages: [
      {
        stageNumber: '01',
        title: 'C++ Fundamentals & Memory Architecture',
        duration: '4 Weeks',
        description: 'Understand compiler pipelines, stack vs heap allocations, pointers, references, and fundamental syntax.',
        skills: ['Compilation Process (Preprocess, Compile, Assemble, Link)', 'Pointers, Double Pointers & Void Pointers', 'References vs Pointers', 'Dynamic Memory (new/delete, malloc/free)', 'Pass-by-value vs Pass-by-reference', 'Structs, Unions & Memory Alignment/Padding'],
        tools: ['GCC / Clang / MSVC', 'GDB / LLDB', 'VS Code / CLion'],
        prompt: 'Explain C++ memory alignment, struct padding, and how the CPU cache line affects memory access performance.'
      },
      {
        stageNumber: '02',
        title: 'Modern C++ (C++11 to C++20/23)',
        duration: '4 Weeks',
        description: 'Transition from legacy C++ to modern, safe, zero-cost abstractions with RAII and value semantics.',
        skills: ['RAII (Resource Acquisition Is Initialization)', 'Smart Pointers (unique_ptr, shared_ptr, weak_ptr)', 'Move Semantics & Rvalue References (std::move, std::forward)', 'Lambdas & Functors', 'constexpr & consteval', 'C++20 Concepts & Ranges', 'C++20 Coroutines'],
        tools: ['Compiler Explorer (Godbolt)', 'Clang-Tidy', 'Cppcheck'],
        prompt: 'Provide comprehensive code showing C++11/20 Move Semantics, perfect forwarding, and custom RAII wrapper implementation.'
      },
      {
        stageNumber: '03',
        title: 'Standard Template Library (STL) Mastery',
        duration: '3 Weeks',
        description: 'Master STL data structures, iterator categories, complexity guarantees, and custom allocators.',
        skills: ['Sequential Containers (vector, deque, list)', 'Associative Containers (map, set, unordered_map)', 'STL Algorithms & Predicates', 'Iterators & Iterator Invalidation Rules', 'Custom Comparators & Hash Functions', 'Custom Memory Allocators'],
        tools: ['STL Header Library', 'Google Benchmark', 'Valgrind'],
        prompt: 'Compare std::vector vs std::deque memory growth strategies, cache locality, and iterator invalidation conditions with code.'
      },
      {
        stageNumber: '04',
        title: 'High Performance & Multi-Threading',
        duration: '4 Weeks',
        description: 'Write lock-free algorithms, harness SIMD vectorization, and build concurrent low-latency engines.',
        skills: ['std::thread, std::jthread & std::async', 'std::mutex, std::unique_lock & Condition Variables', 'Atomic Operations & Memory Orders (std::atomic)', 'Lock-Free Queues & Ring Buffers', 'SIMD Vectorization (AVX2 / AVX-512)', 'Cache Locality & False Sharing Prevention'],
        tools: ['Intel VTune', 'Perf (Linux)', 'AddressSanitizer (ASan)', 'ThreadSanitizer (TSan)'],
        prompt: 'Write a lock-free Single Producer Single Consumer (SPSC) Ring Buffer in C++20 with atomic memory order acquire/release.'
      },
      {
        stageNumber: '05',
        title: 'Build Systems, Tooling & Testing',
        duration: '3 Weeks',
        description: 'Manage complex multi-module C++ projects with CMake, Conan/vcpkg, and automated test frameworks.',
        skills: ['Modern CMake (Target-based build configuration)', 'Package Managers (vcpkg / Conan)', 'Unit Testing with Google Test (GTest) & Catch2', 'Static Analysis & Sanitizers (ASan, UBSan, MSan)', 'Memory Leak Detection with Valgrind / Dr. Memory'],
        tools: ['CMake', 'vcpkg', 'Google Test', 'Valgrind', 'Ninja'],
        prompt: 'Create a modern CMakeLists.txt structure for a multi-target C++ project with external dependencies, unit tests, and compiler warnings enabled.'
      },
      {
        stageNumber: '06',
        title: 'Industry Specializations (HFT / Game Dev / Embedded)',
        duration: '3 Weeks',
        description: 'Apply high-performance C++ to game engines, embedded robotics, or ultra-fast financial exchanges.',
        skills: ['Low-Latency Socket Programming (epoll / io_uring)', 'Order Matching Engine Design', 'Game Engine Architecture (ECS - Entity Component System)', 'OpenGL / Vulkan 3D Graphics Basics', 'Embedded Microcontrollers (FreeRTOS, ARM Cortex)'],
        tools: ['Vulkan SDK', 'Unreal Engine', 'io_uring', 'Wireshark'],
        prompt: 'Explain the architectural principles of a sub-microsecond limit order book matching engine written in modern C++.'
      }
    ],
    capstoneProjects: [
      {
        title: 'High-Frequency Order Matching Engine',
        tech: ['Modern C++20', 'Lock-free Queues', 'CMake', 'Google Benchmark'],
        desc: 'Sub-microsecond limit order book with price-time priority matching, atomic order placement, and market data feeds.'
      },
      {
        title: 'Custom 2D/3D Rendering Game Engine',
        tech: ['C++20', 'OpenGL / Vulkan', 'GLM', 'ImGui', 'EnTT (ECS)'],
        desc: 'Lightweight graphics and physics engine featuring Entity-Component-System architecture, shader pipelines, and real-time inspector.'
      }
    ]
  },
  {
    id: 'sql-dev',
    title: 'SQL Developer',
    subtitle: 'Relational Database Architecture, Window Functions, Query Tuning & Enterprise Warehouses',
    category: 'Database Engineering',
    level: 'Beginner to Advanced',
    duration: '12-16 Weeks',
    icon: 'Database',
    badgeColor: 'from-blue-600 to-teal-600',
    accentColor: 'teal',
    rating: '4.9',
    enrolledCount: '34.6k',
    salaryRange: '$80,000 - $140,000 / yr',
    topCompanies: ['Oracle', 'Microsoft', 'Snowflake', 'Capital One', 'Stripe'],
    certifications: ['PostgreSQL Certified Professional', 'Oracle Database SQL Certified', 'Microsoft Azure Data Fundamentals'],
    overview: 'Master relational schema modeling, advanced window analytics, recursive CTEs, stored procedures, indexing algorithms, and query plan optimization.',
    stages: [
      {
        stageNumber: '01',
        title: 'Relational Modeling & Core DDL/DML',
        duration: '3 Weeks',
        description: 'Design robust normalized database schemas and master fundamental SQL queries and constraints.',
        skills: ['Relational Database Theory & ER Modeling', 'Normalization (1NF, 2NF, 3NF, BCNF) vs Denormalization', 'DDL (CREATE, ALTER, DROP, TRUNCATE)', 'DML (INSERT, UPDATE, DELETE, MERGE/UPSERT)', 'Primary Keys, Foreign Keys & Check Constraints', 'Transactions & ACID Properties'],
        tools: ['PostgreSQL 16', 'MySQL 8', 'DBeaver', 'pgAdmin'],
        prompt: 'Explain Database Normalization up to 3NF and BCNF with real-world table schemas and when deliberate denormalization is justified.'
      },
      {
        stageNumber: '02',
        title: 'Complex Queries, Multi-table Joins & Aggregations',
        duration: '3 Weeks',
        description: 'Extract multi-dimensional business insights across massive normalized tables.',
        skills: ['INNER, LEFT, RIGHT, FULL OUTER & CROSS JOINs', 'Self Joins & Non-Equi Joins', 'GROUP BY, HAVING & Multi-Level Aggregations', 'Subqueries (Correlated vs Non-correlated)', 'UNION, UNION ALL, INTERSECT, EXCEPT', 'Conditional Expressions (CASE WHEN, COALESCE, NULLIF)'],
        tools: ['PostgreSQL', 'SQL Server Management Studio (SSMS)'],
        prompt: 'Show complex SQL queries demonstrating correlated subqueries vs Common Table Expressions (CTEs) with query plan comparisons.'
      },
      {
        stageNumber: '03',
        title: 'Advanced Analytical SQL & Window Functions',
        duration: '3 Weeks',
        description: 'Calculate rolling averages, running totals, rankings, and lead/lag time-series calculations without self-joins.',
        skills: ['Window Functions (OVER, PARTITION BY, ORDER BY)', 'Ranking Functions (ROW_NUMBER, RANK, DENSE_RANK, NTILE)', 'Value Functions (LEAD, LAG, FIRST_VALUE, LAST_VALUE)', 'Common Table Expressions (CTEs) & Recursive Queries', 'Pivoting & Unpivoting Data (CROSSTAB / PIVOT)', 'Grouping Sets, ROLLUP & CUBE'],
        tools: ['PostgreSQL', 'Snowflake', 'BigQuery'],
        prompt: 'Write advanced SQL queries using ROW_NUMBER, DENSE_RANK, LAG/LEAD, and Recursive CTEs for hierarchical organizational trees.'
      },
      {
        stageNumber: '04',
        title: 'Programmability: Procedures, Functions & Triggers',
        duration: '3 Weeks',
        description: 'Implement complex server-side database logic, automated auditing triggers, and custom data processing routines.',
        skills: ['PL/pgSQL & T-SQL Syntax', 'Stored Procedures with Output Parameters', 'User Defined Scalar & Table Functions (UDFs)', 'Database Triggers (BEFORE, AFTER, INSTEAD OF)', 'Cursor Handling & Set-Based Operations', 'Dynamic SQL Execution & Injection Defense'],
        tools: ['PL/pgSQL', 'T-SQL', 'PL/SQL'],
        prompt: 'Provide a complete PL/pgSQL stored procedure and trigger system for automated financial ledger audit logging and balance recalculation.'
      },
      {
        stageNumber: '05',
        title: 'Indexing, Execution Plans & Query Tuning',
        duration: '3 Weeks',
        description: 'Diagnose slow database queries and accelerate execution speeds from seconds to milliseconds.',
        skills: ['B-Tree, Hash, GIN, GiST & BRIN Indexes', 'Clustered vs Non-Clustered Indexes', 'Reading EXPLAIN & EXPLAIN ANALYZE Plans', 'Sequential Scans vs Index Scans / Bitmap Scans', 'Join Optimization (Hash Join, Merge Join, Nested Loop)', 'Table Partitioning (Range, List, Hash Partitioning)'],
        tools: ['EXPLAIN ANALYZE', 'pg_stat_statements', 'Index Advisor', 'SolarWinds Database Performance'],
        prompt: 'How do you analyze a slow query using EXPLAIN ANALYZE in PostgreSQL and apply composite B-Tree/Partial indexing to optimize it?'
      },
      {
        stageNumber: '06',
        title: 'Enterprise Warehousing & Data Pipelines',
        duration: '2 Weeks',
        description: 'Model dimensional data warehouses using Star/Snowflake schemas for enterprise reporting and ETL.',
        skills: ['Data Warehousing (Star Schema, Snowflake Schema, Fact & Dimension Tables)', 'Slowly Changing Dimensions (SCD Type 1, 2, 3)', 'Modern Cloud Warehouses (Snowflake, BigQuery, Redshift)', 'dbt (Data Build Tool) for Transformations', 'CDC (Change Data Capture) & ETL Pipelines'],
        tools: ['Snowflake', 'dbt', 'BigQuery', 'Apache Airflow'],
        prompt: 'Explain Dimensional Modeling (Fact tables, Dimension tables, SCD Type 2) and how dbt orchestrates incremental SQL transformations.'
      }
    ],
    capstoneProjects: [
      {
        title: 'E-Commerce Enterprise Data Warehouse & Analytics Engine',
        tech: ['PostgreSQL / Snowflake', 'dbt', 'Recursive CTEs', 'Window Functions'],
        desc: 'Production dimensional model tracking millions of orders, customer lifetime value (CLV), cohort retention, and sales forecasting.'
      },
      {
        title: 'Automated Audit & Compliance Trigger Framework',
        tech: ['PL/pgSQL', 'Stored Procedures', 'Table Partitioning', 'Indexing'],
        desc: 'Zero-data-loss relational ledger with partitioned tables, automated triggers for tamper-evident change logs, and index optimization.'
      }
    ]
  },
  {
    id: 'aiml-dev',
    title: 'AI / ML Developer',
    subtitle: 'From Mathematics & Scikit-Learn to Deep Learning, LLMs, RAG & MLOps Deployment',
    category: 'Artificial Intelligence',
    level: 'Intermediate to Advanced',
    duration: '20-26 Weeks',
    icon: 'Brain',
    badgeColor: 'from-purple-600 to-pink-600',
    accentColor: 'purple',
    rating: '4.95',
    enrolledCount: '51.2k',
    salaryRange: '$110,000 - $190,000 / yr',
    topCompanies: ['OpenAI', 'Google DeepMind', 'Anthropic', 'Meta AI', 'Microsoft', 'NVIDIA'],
    certifications: ['AWS Certified Machine Learning - Specialty', 'Google Cloud Professional ML Engineer', 'DeepLearning.AI Specialization'],
    overview: 'Master statistical machine learning, PyTorch neural networks, Transformer architectures, Fine-tuning (LoRA/QLoRA), RAG pipelines, and production MLOps.',
    stages: [
      {
        stageNumber: '01',
        title: 'Math Foundations, Python & Data Preprocessing',
        duration: '4 Weeks',
        description: 'Build an intuitive mathematical foundation in linear algebra, multivariable calculus, probability, and vector operations.',
        skills: ['Linear Algebra (Vectors, Matrices, Eigenvalues, SVD)', 'Calculus & Gradient Descent Optimization', 'Probability Distributions, Bayes Theorem & Statistics', 'NumPy Vectorized Array Operations', 'Pandas DataFrame Manipulation', 'Data Cleaning, Imputation & Feature Scaling'],
        tools: ['Python', 'NumPy', 'Pandas', 'Matplotlib / Seaborn', 'Jupyter Lab'],
        prompt: 'Explain Gradient Descent mathematically (Loss functions, learning rate, partial derivatives) and implement it from scratch in NumPy.'
      },
      {
        stageNumber: '02',
        title: 'Classical Machine Learning with Scikit-Learn',
        duration: '4 Weeks',
        description: 'Train, evaluate, and tune supervised and unsupervised machine learning models on structured datasets.',
        skills: ['Linear & Logistic Regression', 'Decision Trees, Random Forests & Ensemble Methods', 'Gradient Boosting (XGBoost, LightGBM, CatBoost)', 'Unsupervised Learning (K-Means, PCA, DBSCAN)', 'Model Evaluation (Precision, Recall, F1, ROC-AUC)', 'Cross-Validation & Hyperparameter Tuning (Optuna / GridSearch)'],
        tools: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'Optuna'],
        prompt: 'Walk through an end-to-end Machine Learning pipeline in Scikit-Learn with data imputation, one-hot encoding, XGBoost, and Optuna tuning.'
      },
      {
        stageNumber: '03',
        title: 'Deep Learning & Neural Networks with PyTorch',
        duration: '5 Weeks',
        description: 'Architect deep neural networks, loss functions, backpropagation routines, and modern computer vision/sequence models.',
        skills: ['PyTorch Tensors, Autograd & nn.Module', 'Multi-Layer Perceptrons (MLP) & Activation Functions', 'Loss Functions & Optimizers (AdamW, SGD with Momentum)', 'Convolutional Neural Networks (CNNs) & Transfer Learning (ResNet)', 'Recurrent Networks & Attention Mechanism', 'GPU Acceleration & Mixed Precision (CUDA, FP16)'],
        tools: ['PyTorch', 'Torchvision', 'Weights & Biases (W&B)', 'CUDA / TensorRT'],
        prompt: 'Build a custom PyTorch training loop with dataset DataLoader, validation step, learning rate scheduler, and Weights & Biases logging.'
      },
      {
        stageNumber: '04',
        title: 'Transformers, Large Language Models & GenAI',
        duration: '5 Weeks',
        description: 'Master Transformer self-attention architecture, Hugging Face transformers, and parameter-efficient fine-tuning.',
        skills: ['Self-Attention & Multi-Head Attention Mechanisms', 'Transformer Encoder-Decoder Architecture', 'Hugging Face Transformers & Datasets Library', 'Prompt Engineering & Few-Shot In-Context Learning', 'PEFT Fine-Tuning (LoRA, QLoRA) on Custom Datasets', 'Quantization (GGUF, AWQ, GPTQ) & Tokenizers'],
        tools: ['Hugging Face', 'vLLM', 'Ollama', 'Unsloth', 'PyTorch'],
        prompt: 'Explain the Transformer Scaled Dot-Product Attention mechanism mathematically and show how to fine-tune an open LLM using QLoRA.'
      },
      {
        stageNumber: '05',
        title: 'RAG Systems & Vector Database Engineering',
        duration: '4 Weeks',
        description: 'Build enterprise knowledge retrieval engines combining semantic vector search, re-ranking, and context injection.',
        skills: ['Embedding Models & Cosine Similarity', 'Vector Databases (ChromaDB, Pinecone, Qdrant, Milvus)', 'Chunking Strategies & Hybrid Search (BM25 + Semantic)', 'Re-ranking with Cross-Encoders', 'LangChain & LlamaIndex Frameworks', 'Evaluation of RAG (Ragas metrics: Faithfulness, Context Relevancy)'],
        tools: ['ChromaDB', 'Pinecone', 'LangChain', 'LlamaIndex', 'Ragas'],
        prompt: 'Provide a production-ready RAG pipeline using LlamaIndex/LangChain with hybrid search, re-ranking, and vector embeddings in ChromaDB.'
      },
      {
        stageNumber: '06',
        title: 'MLOps, Model Serving & Deployment',
        duration: '3 Weeks',
        description: 'Package, monitor, and serve machine learning and LLM models at low latency in production cloud environments.',
        skills: ['FastAPI / TorchServe / Triton Model Ingestion', 'High-Throughput LLM Serving with vLLM & TGI', 'MLflow Experiment Tracking & Model Registry', 'Dockerizing ML Services & GPU Passthrough', 'Model Monitoring (Data Drift, Concept Drift with Evidently AI)', 'CI/CD Pipelines for ML (CML / GitHub Actions)'],
        tools: ['vLLM', 'FastAPI', 'MLflow', 'Docker', 'Evidently AI', 'Triton'],
        prompt: 'How do you architect a scalable, containerized LLM inference service using FastAPI and vLLM with streaming token responses?'
      }
    ],
    capstoneProjects: [
      {
        title: 'Autonomous Multi-Agent AI Research Assistant',
        tech: ['PyTorch', 'LangChain / LangGraph', 'ChromaDB', 'FastAPI', 'Llama-3'],
        desc: 'Multi-agent orchestration pipeline with web-search tools, document parsing, citation generation, and automated synthesis.'
      },
      {
        title: 'Real-time Medical Imaging Diagnostic Classifier',
        tech: ['PyTorch', 'Torchvision ResNet/ViT', 'MLflow', 'FastAPI', 'Docker'],
        desc: 'High-accuracy vision model pipeline for pathology scan classification with Grad-CAM explainability heatmaps.'
      }
    ]
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    subtitle: 'Multi-Cloud Architecture (AWS/Azure/GCP), Terraform IaC, Kubernetes & GitOps',
    category: 'Cloud & Infrastructure',
    level: 'Beginner to Advanced',
    duration: '16-20 Weeks',
    icon: 'Cloud',
    badgeColor: 'from-sky-500 to-indigo-600',
    accentColor: 'sky',
    rating: '4.9',
    enrolledCount: '36.9k',
    salaryRange: '$95,000 - $165,000 / yr',
    topCompanies: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'HashiCorp', 'Red Hat'],
    certifications: ['AWS Certified Solutions Architect - Associate', 'Certified Kubernetes Administrator (CKA)', 'HashiCorp Certified: Terraform Associate'],
    overview: 'Master enterprise networking, cloud primitives (AWS/Azure/GCP), Infrastructure as Code (Terraform), Docker/Kubernetes container orchestration, and CI/CD GitOps.',
    stages: [
      {
        stageNumber: '01',
        title: 'Linux Systems & Cloud Networking Foundations',
        duration: '3 Weeks',
        description: 'Master operating system internals, Bash automation, and enterprise networking protocols.',
        skills: ['Linux System Administration & Permissions', 'Bash Shell Scripting & Automation', 'TCP/IP, DNS, HTTP/HTTPS, SSL/TLS Certificates', 'CIDR Blocks, Subnetting, Route Tables & NAT Gateways', 'SSH Key Management & Security Groups / Firewalls', 'Packet Inspection with curl, dig, netstat, tcpdump'],
        tools: ['Ubuntu Linux', 'Bash', 'OpenSSL', 'Wireshark'],
        prompt: 'Explain subnetting, CIDR notation, Public vs Private Subnets, NAT Gateways, and Route Tables in cloud VPC architecture.'
      },
      {
        stageNumber: '02',
        title: 'Core Cloud Architecture (AWS / Azure / GCP)',
        duration: '4 Weeks',
        description: 'Design highly available, fault-tolerant, and secure cloud environments on major hyperscalers.',
        skills: ['Identity & Access Management (IAM Policies, Roles)', 'Compute (AWS EC2 / Azure VMs, Auto-Scaling Groups, ALB)', 'Object & Block Storage (S3, EBS, EFS)', 'Managed Databases (RDS, DynamoDB, Aurora)', 'Virtual Private Cloud (VPC Peering, Transit Gateway)', 'Serverless Foundations (AWS Lambda, API Gateway)'],
        tools: ['AWS Management Console & CLI', 'AWS Lambda', 'Amazon S3', 'Amazon RDS'],
        prompt: 'Provide an architecture blueprint for a multi-AZ highly available web tier with Auto-Scaling, ALB, and Multi-AZ RDS on AWS.'
      },
      {
        stageNumber: '03',
        title: 'Infrastructure as Code (IaC) with Terraform',
        duration: '4 Weeks',
        description: 'Declare, version-control, and automate cloud infrastructure using Terraform and Ansible.',
        skills: ['HCL (HashiCorp Configuration Language) Syntax', 'Terraform State Management (Remote Backends, S3 + DynamoDB locking)', 'Terraform Modules, Variables & Outputs', 'Terraform Workspaces & Environment Separation', 'Configuration Management with Ansible Playbooks', 'Policy as Code (Open Policy Agent / Sentinel)'],
        tools: ['Terraform 1.7+', 'Ansible', 'Terragrunt', 'AWS Provider'],
        prompt: 'Write clean, modular Terraform code to provision an AWS VPC with public/private subnets, NAT Gateways, and an ECS cluster.'
      },
      {
        stageNumber: '04',
        title: 'Containers & Kubernetes Orchestration (CKA Track)',
        duration: '4 Weeks',
        description: 'Package microservices into OCI containers and orchestrate deployments with production Kubernetes.',
        skills: ['Docker Multi-stage Builds & Security Best Practices', 'Kubernetes Architecture (Control Plane vs Worker Nodes)', 'Pods, Deployments, ReplicaSets & StatefulSets', 'Services (ClusterIP, NodePort, LoadBalancer) & Ingress Controllers', 'ConfigMaps, Secrets & Persistent Volumes (PVCs)', 'Helm 3 Package Management & Custom Charts'],
        tools: ['Docker', 'Kubernetes (kubectl, k9s)', 'Helm', 'Minikube / Kind'],
        prompt: 'Provide Kubernetes manifest YAMLs for a production Deployment with Rolling Updates, ConfigMaps, Secrets, Ingress, and HPA.'
      },
      {
        stageNumber: '05',
        title: 'CI/CD Automation & GitOps (ArgoCD)',
        duration: '3 Weeks',
        description: 'Automate build, test, scan, and continuous deployment pipelines using declarative GitOps.',
        skills: ['GitHub Actions Workflows & Reusable Actions', 'GitLab CI / Jenkins Pipelines', 'Container Image Scanning (Trivy / Snyk)', 'GitOps Principles & Declarative Continuous Delivery', 'ArgoCD Deployment Synchronization & Rollbacks', 'Canary & Blue/Green Deployments with Argo Rollouts'],
        tools: ['GitHub Actions', 'ArgoCD', 'Trivy', 'SonarCloud'],
        prompt: 'Show how to configure a GitHub Actions CI pipeline that builds a Docker image, scans it with Trivy, and triggers ArgoCD for deployment.'
      },
      {
        stageNumber: '06',
        title: 'Cloud Observability, Security & FinOps',
        duration: '2 Weeks',
        description: 'Monitor distributed system telemetry, enforce zero-trust security postures, and optimize cloud billing.',
        skills: ['Prometheus Metrics Collection & PromQL', 'Grafana Dashboard Creation & Alerting', 'Centralized Logging (ELK Stack / Loki)', 'Cloud Security Posture Management (CSPM)', 'AWS Cost Explorer & FinOps Tagging Strategies', 'Disaster Recovery (RTO & RPO Planning)'],
        tools: ['Prometheus', 'Grafana', 'Datadog', 'AWS CloudWatch', 'Karpenter'],
        prompt: 'Explain how to set up Prometheus and Grafana monitoring on a Kubernetes cluster with custom PromQL alert rules.'
      }
    ],
    capstoneProjects: [
      {
        title: 'Production Multi-Region Cloud Platform with Terraform & EKS',
        tech: ['Terraform', 'AWS EKS', 'ArgoCD', 'Helm', 'Prometheus', 'Grafana'],
        desc: 'End-to-end multi-environment infrastructure automated via Terraform, hosting containerized microservices managed by ArgoCD GitOps.'
      },
      {
        title: 'Serverless Event-Driven Data Processing Lakehouse',
        tech: ['AWS Lambda', 'S3', 'EventBridge', 'DynamoDB', 'Terraform'],
        desc: 'High-throughput serverless pipeline ingesting and transforming gigabytes of stream events with auto-scaling and zero idle cost.'
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    subtitle: 'From Advanced SQL & Power BI / Tableau Dashboards to Python EDA & Business Analytics',
    category: 'Data Analytics & BI',
    level: 'Beginner to Advanced',
    duration: '14-18 Weeks',
    icon: 'BarChart2',
    badgeColor: 'from-emerald-500 to-teal-600',
    accentColor: 'emerald',
    rating: '4.9',
    enrolledCount: '44.3k',
    salaryRange: '$75,000 - $130,000 / yr',
    topCompanies: ['Deloitte', 'Accenture', 'Microsoft', 'Uber', 'Target', 'McKinsey'],
    certifications: ['Microsoft Certified: Power BI Data Analyst (PL-300)', 'Tableau Certified Data Analyst', 'Google Data Analytics Professional'],
    overview: 'Transform messy raw data into actionable executive insights with advanced SQL, Power BI/Tableau data modeling, Python statistical analysis, and A/B testing.',
    stages: [
      {
        stageNumber: '01',
        title: 'Spreadsheets Mastery (Advanced Excel / Sheets)',
        duration: '2 Weeks',
        description: 'Build financial and operational analytical models with formulas, pivot tables, and scenario modeling.',
        skills: ['XLOOKUP, INDEX-MATCH & Dynamic Array Formulas', 'Multi-Variable Pivot Tables & Slicers', 'Data Cleaning & Power Query ETL in Excel', 'Conditional Formatting & Interactive Dashboarding', 'Statistical Functions & What-If Analysis (Goal Seek, Solver)'],
        tools: ['Microsoft Excel 365', 'Google Sheets', 'Power Query'],
        prompt: 'Demonstrate advanced Excel formulas (XLOOKUP, INDEX/MATCH, Dynamic Arrays) and Power Query data cleaning transformations.'
      },
      {
        stageNumber: '02',
        title: 'SQL for Data Analytics & Insights',
        duration: '4 Weeks',
        description: 'Extract, aggregate, and transform large datasets stored across relational enterprise databases.',
        skills: ['Data Aggregation (GROUP BY, HAVING, COUNT DISTINCT)', 'Multi-Table Joins & Data Unification', 'Window Functions (ROW_NUMBER, DENSE_RANK, NTILE)', 'Cohort & Retention Rate Calculations in SQL', 'Date/Time Functions & Trend Analysis', 'CTEs & Subqueries for Complex Business Logic'],
        tools: ['PostgreSQL', 'MySQL', 'BigQuery / Snowflake'],
        prompt: 'Write advanced SQL queries to calculate Monthly Active Users (MAU), Customer Churn Rate, and 30-Day Cohort Retention.'
      },
      {
        stageNumber: '03',
        title: 'Business Intelligence: Power BI & Tableau',
        duration: '4 Weeks',
        description: 'Model star schemas and construct dynamic, C-suite executive KPI dashboards with interactive filters.',
        skills: ['Star Schema & Dimensional Data Modeling (Relationships, Cardinality)', 'DAX Formulas (CALCULATE, FILTER, Time Intelligence: YTD, YoY Growth)', 'Tableau Calculated Fields & LOD (Level of Detail) Expressions', 'Visual Storytelling & Information Hierarchy', 'Row-Level Security (RLS) & Automated Refresh Schedules'],
        tools: ['Power BI Desktop', 'Tableau Desktop', 'Looker Studio'],
        prompt: 'Explain DAX CALCULATE function and write DAX measures for Year-over-Year (YoY) Sales Growth and Rolling 3-Month Moving Average.'
      },
      {
        stageNumber: '04',
        title: 'Python for Data Analysis & Visualization',
        duration: '3 Weeks',
        description: 'Perform exploratory data analysis (EDA), statistical tests, and custom interactive data visualizations.',
        skills: ['Pandas Data Cleaning & Wrangling (groupby, merge, melt, pivot_table)', 'NumPy Numerical Analysis', 'Static Visualizations with Matplotlib & Seaborn', 'Interactive Charts with Plotly', 'Handling Missing Values, Outliers & Skewness', 'Jupyter Notebook Presentation Standards'],
        tools: ['Python', 'Pandas', 'Seaborn', 'Plotly', 'Jupyter Lab'],
        prompt: 'Provide a complete Python Exploratory Data Analysis (EDA) notebook script with missing value handling, outlier detection, and Seaborn heatmaps.'
      },
      {
        stageNumber: '05',
        title: 'Applied Statistics, A/B Testing & Business Metrics',
        duration: '3 Weeks',
        description: 'Evaluate business hypotheses, design split tests, and quantify metric impact with statistical rigor.',
        skills: ['Descriptive & Inferential Statistics (Mean, Median, Std Dev, IQR)', 'Hypothesis Testing (t-test, Chi-Square, ANOVA)', 'A/B Testing Frameworks (Sample Size, p-values, Statistical Power)', 'Key Business Metrics (CAC, LTV, ROI, NPS, Conversion Rate)', 'Root Cause Analysis & Executive Presentation Storytelling'],
        tools: ['SciPy', 'Statsmodels', 'Google Analytics 4', 'PowerPoint'],
        prompt: 'Explain how to design and evaluate an A/B test for a checkout page conversion rate with sample size calculation and p-value validation.'
      },
      {
        stageNumber: '06',
        title: 'Modern Analytics Stack (dbt & Cloud Warehouses)',
        duration: '2 Weeks',
        description: 'Collaborate with data engineers to automate reporting pipelines with dbt and cloud data warehouses.',
        skills: ['Cloud Data Warehouses (Snowflake / BigQuery basics)', 'dbt (Data Build Tool) Modeling for Analysts', 'Automating Reports with Scheduled Queries & Alerts', 'Git Version Control for Analytics Projects', 'Building Data Catalogs & Dictionaries'],
        tools: ['Snowflake', 'dbt', 'BigQuery', 'GitHub'],
        prompt: 'How does an analyst use dbt to create reusable staging, intermediate, and mart models from raw warehouse data?'
      }
    ],
    capstoneProjects: [
      {
        title: 'Executive SaaS Revenue & Cohort Retention Dashboard',
        tech: ['Power BI', 'DAX', 'SQL', 'PostgreSQL'],
        desc: 'Interactive BI dashboard showcasing Monthly Recurring Revenue (MRR), Customer Churn, LTV:CAC ratio, and cohort retention.'
      },
      {
        title: 'Customer Churn Prediction & Statistical Insights Pipeline',
        tech: ['Python', 'Pandas', 'Plotly', 'Scipy', 'Scikit-Learn'],
        desc: 'Exploratory data analysis and feature importance analysis highlighting why customers cancel subscriptions with actionable recommendations.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Engineer',
    subtitle: 'From Network Defense & SOC Operations to Ethical Hacking, Cloud Security & Threat Hunting',
    category: 'Security & Forensics',
    level: 'Beginner to Advanced',
    duration: '18-24 Weeks',
    icon: 'Shield',
    badgeColor: 'from-red-600 to-rose-700',
    accentColor: 'red',
    rating: '4.95',
    enrolledCount: '35.8k',
    salaryRange: '$95,000 - $170,000 / yr',
    topCompanies: ['CrowdStrike', 'Palo Alto Networks', 'Mandiant', 'Cisco', 'Cloudflare', 'Lockheed Martin'],
    certifications: ['CompTIA Security+', 'Certified Information Systems Security Professional (CISSP)', 'Offensive Security Certified Professional (OSCP)', 'CEH'],
    overview: 'Protect enterprise infrastructure, analyze network traffic, audit vulnerabilities (OWASP Top 10), conduct penetration tests, and respond to cyber incidents.',
    stages: [
      {
        stageNumber: '01',
        title: 'Security Fundamentals, Networking & OS Internals',
        duration: '4 Weeks',
        description: 'Understand core CIA triad principles, deep TCP/IP protocols, Linux/Windows security architectures, and cryptography.',
        skills: ['CIA Triad (Confidentiality, Integrity, Availability)', 'OSI & TCP/IP Model Deep Dive (Packets, Ports, Handshakes)', 'Symmetric vs Asymmetric Cryptography (AES, RSA, ECC, Hashing)', 'Linux Permissions, Privileges & System Logging (/var/log)', 'Windows Active Directory Basics & Kerberos', 'Network Packet Analysis with Wireshark'],
        tools: ['Wireshark', 'Kali Linux', 'OpenSSL', 'Nmap', 'Sysinternals'],
        prompt: 'Explain the TCP 3-way handshake, TLS 1.3 handshake, and how packet sniffing with Wireshark detects anomalous network traffic.'
      },
      {
        stageNumber: '02',
        title: 'Defensive Security & SOC Operations (Blue Team)',
        duration: '4 Weeks',
        description: 'Monitor enterprise environments, analyze security events with SIEM platforms, and manage alerts.',
        skills: ['Security Operations Center (SOC) Workflows (Tier 1/2/3)', 'SIEM Platforms (Splunk, Elastic SIEM, Microsoft Sentinel)', 'Log Analysis & Writing Detection Rules (Sigma / YARA)', 'Endpoint Detection & Response (EDR / CrowdStrike / Defender)', 'Firewalls, IDS/IPS (Snort, Suricata) & WAF Configuration', 'MITRE ATT&CK Framework Mapping'],
        tools: ['Splunk', 'Suricata', 'Snort', 'Wazuh', 'Zeek'],
        prompt: 'How do you configure Splunk to ingest Windows Event Logs and create SPL alerts for unauthorized privilege escalation attempts?'
      },
      {
        stageNumber: '03',
        title: 'Offensive Security & Ethical Hacking (Red Team)',
        duration: '4 Weeks',
        description: 'Discover vulnerabilities, perform structured penetration testing, and write exploit proofs-of-concept.',
        skills: ['Reconnaissance & Footprinting (OSINT, Nmap, Shodan)', 'Vulnerability Scanning (Nessus, OpenVAS)', 'OWASP Top 10 Web Vulnerabilities (SQLi, XSS, SSRF, IDOR, CSRF)', 'Exploitation Frameworks (Metasploit, Burp Suite Professional)', 'Password Cracking & Hash Analysis (Hashcat, John the Ripper)', 'Privilege Escalation (Linux LinPEAS, Windows WinPEAS)'],
        tools: ['Burp Suite', 'Metasploit', 'Nmap', 'Hashcat', 'Hydra', 'Gobuster'],
        prompt: 'Explain how Server-Side Request Forgery (SSRF) and Insecure Direct Object References (IDOR) work with remediation code examples.'
      },
      {
        stageNumber: '04',
        title: 'Application Security & DevSecOps',
        duration: '3 Weeks',
        description: 'Integrate automated security gates and static/dynamic code analyzers into developer CI/CD pipelines.',
        skills: ['Static Application Security Testing (SAST - SonarQube, Semgrep)', 'Dynamic Application Security Testing (DAST - OWASP ZAP)', 'Software Composition Analysis (SCA - Snyk, Dependabot)', 'Secure API Design & OAuth2 / JWT Hardening', 'Secrets Management (HashiCorp Vault, AWS Secrets Manager)', 'Container Security & Image Hardening (Trivy, Docker Bench)'],
        tools: ['Semgrep', 'OWASP ZAP', 'Snyk', 'HashiCorp Vault', 'Trivy'],
        prompt: 'Show how to embed Semgrep and OWASP ZAP automated security scanning stages inside a GitHub Actions CI/CD workflow.'
      },
      {
        stageNumber: '05',
        title: 'Cloud Security (AWS / Azure / GCP)',
        duration: '3 Weeks',
        description: 'Secure cloud multi-tenant architectures, enforce zero-trust identity policies, and prevent cloud misconfigurations.',
        skills: ['Cloud IAM Least-Privilege & Role Assumption', 'Securing Cloud Storage (S3 Bucket Policies, KMS Encryption)', 'CloudTrail, CloudWatch & GuardDuty Threat Detection', 'Kubernetes Security & NetworkPolicies', 'Cloud Security Posture Management (CSPM - Wiz / Prisma Cloud)', 'Zero-Trust Architecture Principles'],
        tools: ['AWS GuardDuty', 'AWS KMS', 'Prowler', 'Falco', 'Prisma Cloud'],
        prompt: 'Explain how AWS GuardDuty detects compromised credentials and provide a zero-trust IAM policy template with MFA enforcement.'
      },
      {
        stageNumber: '06',
        title: 'Incident Response, Forensics & Compliance',
        duration: '2 Weeks',
        description: 'Conduct live malware forensics, isolate compromised systems, and ensure regulatory compliance.',
        skills: ['Incident Response Lifecycle (NIST SP 800-61 / SANS 6 Steps)', 'Digital Forensics (Memory Dump Analysis with Volatility)', 'Disk Imaging & Chain of Custody (Autopsy, FTK Imager)', 'Threat Hunting Techniques & IOC Analysis', 'Compliance Standards (ISO 27001, SOC 2, HIPAA, GDPR, PCI-DSS)'],
        tools: ['Volatility 3', 'Autopsy', 'FTK Imager', 'CyberChef', 'MISP'],
        prompt: 'Walk through the step-by-step incident response playbook for a suspected ransomware outbreak across an enterprise Windows domain.'
      }
    ],
    capstoneProjects: [
      {
        title: 'Enterprise SOC Detection Lab with Splunk & Suricata',
        tech: ['Splunk', 'Suricata IDS', 'Wazuh EDR', 'Kali Linux', 'Docker'],
        desc: 'Live virtual attack-defense simulation environment generating attacks, capturing telemetry, and automating SIEM threat containment.'
      },
      {
        title: 'Automated DevSecOps Security Pipeline with SAST & DAST',
        tech: ['GitHub Actions', 'Semgrep', 'OWASP ZAP', 'Trivy', 'HashiCorp Vault'],
        desc: 'Automated security pipeline that blocks vulnerable commits, scans container images for CVEs, and prevents secret leaks.'
      }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Designer',
    subtitle: 'From User Research & Wireframing to High-Fidelity Figma Systems & Design Tokens',
    category: 'Product & Design',
    level: 'Beginner to Advanced',
    duration: '14-18 Weeks',
    icon: 'Palette',
    badgeColor: 'from-pink-500 to-rose-600',
    accentColor: 'pink',
    rating: '4.9',
    enrolledCount: '39.7k',
    salaryRange: '$80,000 - $145,000 / yr',
    topCompanies: ['Apple', 'Airbnb', 'Figma', 'Stripe', 'Google', 'Spotify'],
    certifications: ['Google UX Design Professional Certificate', 'Nielsen Norman Group UX Master', 'Figma Certified Creator'],
    overview: 'Master design thinking, user persona research, wireframing, high-fidelity Figma auto-layout, design systems, micro-animations, and usability testing.',
    stages: [
      {
        stageNumber: '01',
        title: 'Design Foundations & Visual Hierarchy',
        duration: '3 Weeks',
        description: 'Master core aesthetic and functional visual principles that govern intuitive user interfaces.',
        skills: ['Visual Hierarchy & Scanning Patterns (F-Pattern, Z-Pattern)', 'Typography (Font Pairing, Scale, Line-Height, Tracking)', 'Color Theory, Contrast Ratios & 60-30-10 Rule', 'Grid Systems (8pt Grid, Responsive Columns, Spacing)', 'Iconography & Visual Balance', 'Accessibility Standards (WCAG 2.2 AA & AAA)'],
        tools: ['Figma', 'Coolors', 'Contrast Checker', 'Google Fonts'],
        prompt: 'Explain the 8-point grid system, typographic scale formulas, and WCAG 2.2 color contrast requirements for accessible UI design.'
      },
      {
        stageNumber: '02',
        title: 'UX Research, Empathy & Information Architecture',
        duration: '3 Weeks',
        description: 'Conduct qualitative and quantitative user research to discover pain points and map user journeys.',
        skills: ['User Interviews & Survey Methodology', 'User Personas & Empathy Maps', 'User Journey Mapping & Experience Maps', 'Card Sorting & Tree Testing', 'Information Architecture & Sitemap Creation', 'Heuristic Evaluation (Jakob Nielsen 10 Usability Heuristics)'],
        tools: ['FigJam', 'Miro', 'Optimal Workshop', 'Typeform'],
        prompt: 'How do you conduct a Heuristic Evaluation on an e-commerce checkout flow using Jakob Nielsen’s 10 Usability Heuristics?'
      },
      {
        stageNumber: '03',
        title: 'Wireframing, UX Flows & Low-Fidelity Prototyping',
        duration: '3 Weeks',
        description: 'Translate user journey requirements into clear layout blueprints and click-through wireframes.',
        skills: ['Sketches & Paper Prototyping', 'Low-Fidelity Wireframes in Figma', 'Task Flows & Screen State Flows (Empty, Loading, Error, Success)', 'Microcopy & UX Writing Basics', 'Click-through Prototype Validation'],
        tools: ['Figma Wireframing Kits', 'Whimsical', 'FigJam'],
        prompt: 'Create the screen state specifications and user flow for a SaaS onboarding wizard, including empty, error, and success states.'
      },
      {
        stageNumber: '04',
        title: 'Figma Mastery: Auto Layout, Components & Variables',
        duration: '4 Weeks',
        description: 'Build industrial-strength UI mockups using advanced component variants, boolean properties, and variables.',
        skills: ['Figma Auto Layout (Resizing, Hug, Fill, Min/Max Width)', 'Component Sets, Variants & Boolean Properties', 'Figma Variables (Color, Numbers, Booleans, Strings)', 'Interactive Components & State Variants (Hover, Pressed, Disabled)', 'Design Tokens (Color, Spacing, Typography Tokens)', 'Dark Mode & Multi-Theme Switching with Variables'],
        tools: ['Figma Desktop', 'Tokens Studio for Figma', 'Figma Plugins'],
        prompt: 'Explain how to set up Figma Variables and Design Tokens for multi-brand and dark-mode themes with Auto Layout.'
      },
      {
        stageNumber: '05',
        title: 'Design Systems & Developer Handoff',
        duration: '3 Weeks',
        description: 'Create scalable design systems (Atomic Design) and collaborate seamlessly with frontend engineers.',
        skills: ['Atomic Design Methodology (Atoms, Molecules, Organisms)', 'Building Comprehensive Design System Guidelines', 'Design Token Export (Style Dictionary, JSON Tokens)', 'Developer Handoff Best Practices (Dev Mode in Figma, Specs)', 'Component Alignment with React/Tailwind/CSS Libraries', 'Design System Versioning & Governance'],
        tools: ['Figma Dev Mode', 'Storybook', 'Zeroheight', 'GitHub'],
        prompt: 'How do you architect an enterprise Design System in Figma adhering to Atomic Design principles and export tokens for Tailwind CSS?'
      },
      {
        stageNumber: '06',
        title: 'Micro-Interactions, Usability Testing & Analytics',
        duration: '2 Weeks',
        description: 'Craft fluid animations and validate designs through moderated and unmoderated user testing.',
        skills: ['Smart Animate & Micro-Interactions in Figma', 'Motion Design Principles & Easing Curves', 'Usability Testing (Moderated vs Unmoderated)', 'SUS (System Usability Scale) & Task Completion Rate', 'Heatmaps & User Session Analysis (Hotjar, FullStory)', 'A/B Testing UI Iterations'],
        tools: ['Figma Smart Animate', 'Lottie / Rive', 'Maze', 'UserTesting', 'Hotjar'],
        prompt: 'Explain how to design high-fidelity micro-interactions with Figma Smart Animate and measure prototype usability using Maze.'
      }
    ],
    capstoneProjects: [
      {
        title: 'Fintech Mobile Banking App & Complete Design System',
        tech: ['Figma', 'Design Tokens', 'Auto Layout v5', 'Maze Usability Testing'],
        desc: 'End-to-end mobile financial app with interactive prototypes, dark/light variables, accessible micro-interactions, and developer specs.'
      },
      {
        title: 'Healthcare Patient Telemedicine Web Platform',
        tech: ['FigJam User Research', 'Figma Components', 'Design System Guidelines'],
        desc: 'Comprehensive patient portal with accessibility audit, appointment scheduling flows, doctor video consultation UI, and medical records.'
      }
    ]
  },
  {
    id: 'qa-testing',
    title: 'Software Testing / QA',
    subtitle: 'From Manual Testing & API Automation to Playwright, Cypress, Selenium & CI/CD Frameworks',
    category: 'Quality Assurance & Automation',
    level: 'Beginner to Advanced',
    duration: '14-18 Weeks',
    icon: 'CheckSquare',
    badgeColor: 'from-green-600 to-emerald-700',
    accentColor: 'green',
    rating: '4.85',
    enrolledCount: '33.5k',
    salaryRange: '$75,000 - $135,000 / yr',
    topCompanies: ['Microsoft', 'Amazon', 'Cisco', 'Cognizant', 'Infosys', 'Salesforce'],
    certifications: ['ISTQB Certified Tester Foundation Level (CTFL)', 'ISTQB Test Automation Engineer', 'Playwright / Selenium Automation Specialist'],
    overview: 'Master manual test design, API testing with Postman/RestAssured, modern UI automation with Playwright/Cypress, performance testing with JMeter/k6, and CI/CD test gates.',
    stages: [
      {
        stageNumber: '01',
        title: 'Software Testing Fundamentals & Manual QA',
        duration: '3 Weeks',
        description: 'Understand SDLC/STLC phases, test levels, black-box test design techniques, and bug lifecycle management.',
        skills: ['SDLC (Agile / Scrum) & STLC (Software Testing Life Cycle)', 'Test Levels: Unit, Integration, System, Acceptance (UAT)', 'Black-Box Techniques: Boundary Value Analysis (BVA), Equivalence Partitioning (EP), Decision Tables', 'Writing Comprehensive Test Plans & Test Cases', 'Defect / Bug Life Cycle & Severity vs Priority', 'Test Management Tools (Jira, Zephyr, TestRail)'],
        tools: ['Jira', 'TestRail', 'Zephyr', 'Chrome DevTools'],
        prompt: 'Explain Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP) with real test cases for an input form.'
      },
      {
        stageNumber: '02',
        title: 'API Testing & Automation (Postman & REST Assured)',
        duration: '3 Weeks',
        description: 'Verify backend REST and GraphQL endpoints for status codes, headers, schema validation, and auth tokens.',
        skills: ['HTTP Request Methods (GET, POST, PUT, PATCH, DELETE)', 'Status Codes (2xx, 3xx, 4xx, 5xx) & Header Validation', 'Postman Collections, Variables & Test Scripts (JavaScript)', 'Automated Postman CLI Runs with Newman', 'REST Assured (Java) / Requests + PyTest (Python) API Automation', 'JSON Schema Validation & Mock Servers'],
        tools: ['Postman', 'Newman', 'REST Assured', 'PyTest Requests', 'WireMock'],
        prompt: 'Show how to write automated REST API tests using Postman test scripts or REST Assured in Java with JSON schema assertion.'
      },
      {
        stageNumber: '03',
        title: 'Web UI Automation with Playwright & Cypress',
        duration: '4 Weeks',
        description: 'Build resilient, fast, modern end-to-end browser test suites with automatic waiting and network interception.',
        skills: ['Playwright (TypeScript / Python) Core Architecture', 'Selectors & Locators Best Practices (Role, Text, TestId)', 'Auto-waiting, Assertions & Actionability Checks', 'Cypress Framework & Test Runner', 'Page Object Model (POM) Design Pattern', 'Mocking Network APIs & Capturing Screenshots/Traces'],
        tools: ['Playwright', 'Cypress', 'TypeScript', 'Playwright Trace Viewer'],
        prompt: 'Provide a complete Playwright test suite using TypeScript with Page Object Model (POM), fixture setup, and API interception.'
      },
      {
        stageNumber: '04',
        title: 'Enterprise Selenium WebDriver & Test Frameworks',
        duration: '3 Weeks',
        description: 'Construct enterprise test frameworks utilizing Selenium 4, TestNG/JUnit, and multi-browser grids.',
        skills: ['Selenium WebDriver Architecture & Locators (XPath, CSS)', 'Explicit vs Implicit Waits (WebDriverWait)', 'TestNG Annotations, Data Providers & Parallel Execution', 'Handling Windows, Iframes, Alerts & Dynamic Elements', 'Data-Driven Testing with Apache POI (Excel)', 'Allure Reporting Integration'],
        tools: ['Selenium WebDriver 4', 'TestNG', 'Allure Reports', 'Maven'],
        prompt: 'How do you build a scalable Selenium WebDriver framework with TestNG data providers, Page Object Model, and Allure reports?'
      },
      {
        stageNumber: '05',
        title: 'Performance, Load & Security Testing',
        duration: '3 Weeks',
        description: 'Stress-test applications under high concurrent virtual user load and verify basic vulnerability safeguards.',
        skills: ['Performance Testing Metrics: Throughput, Response Time, Error Rate, Latency', 'Apache JMeter Test Plans, Thread Groups & Assertions', 'Modern Load Testing with k6 (JavaScript scripting)', 'Spike Testing, Stress Testing & Endurance Testing', 'Basic Security Testing (SQLi, XSS checks with OWASP ZAP)'],
        tools: ['Apache JMeter', 'k6', 'Locust', 'OWASP ZAP'],
        prompt: 'Write a k6 performance load test script in JavaScript simulating 500 concurrent virtual users with threshold pass/fail criteria.'
      },
      {
        stageNumber: '06',
        title: 'CI/CD Test Automation & Mobile Testing (Appium)',
        duration: '2 Weeks',
        description: 'Integrate automated test regression gates into CI/CD pipelines and automate mobile app testing.',
        skills: ['Mobile App Automation with Appium (iOS & Android)', 'Cross-Browser & Cloud Device Farms (BrowserStack, SauceLabs)', 'Integrating Automated Tests in GitHub Actions / Jenkins', 'Dockerized Test Execution (Selenium Grid / Playwright Container)', 'BDD (Behavior-Driven Development) with Cucumber & Gherkin'],
        tools: ['Appium', 'BrowserStack', 'GitHub Actions', 'Docker', 'Cucumber'],
        prompt: 'How do you integrate Playwright or Selenium automated test suites into a GitHub Actions CI pipeline with artifact video/report uploads?'
      }
    ],
    capstoneProjects: [
      {
        title: 'Enterprise E-Commerce E2E Test Suite with Playwright & CI/CD',
        tech: ['Playwright', 'TypeScript', 'GitHub Actions', 'Allure Reports', 'Docker'],
        desc: 'Production-ready automated test suite covering full user journeys (Auth, Search, Cart, Checkout) with parallel CI execution and trace reporting.'
      },
      {
        title: 'Distributed API & Load Testing Framework with k6 & REST Assured',
        tech: ['k6', 'REST Assured', 'Postman/Newman', 'Grafana', 'Jenkins'],
        desc: 'Comprehensive backend verification suite running automated contract tests, smoke tests, and 10,000 RPS load stress simulations.'
      }
    ]
  }
];
