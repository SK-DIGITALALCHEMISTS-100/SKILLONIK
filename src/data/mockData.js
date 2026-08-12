export const INITIAL_SUGGESTIONS = [
  {
    id: 'mern',
    title: 'Build a MERN Project',
    badge: 'FULL STACK',
    icon: 'code_blocks',
    prompt: 'Can you give me a complete architectural breakdown and starter code for a production MERN Stack SaaS application with Authentication and Payment integration?'
  },
  {
    id: 'fastapi',
    title: 'Learn FastAPI & Async',
    badge: 'BACKEND',
    icon: 'api',
    prompt: 'Explain FastAPI dependency injection, async database connections with SQLModel, and OpenAPI schema generation with code examples.'
  },
  {
    id: 'tcs',
    title: 'Prepare for Tech Interviews',
    badge: 'PLACEMENT',
    icon: 'work',
    prompt: 'Give me the top 5 coding and system design interview questions asked at TCS, Infosys, and Product Companies with step-by-step solutions.'
  },
  {
    id: 'rag',
    title: 'Explain RAG Architecture',
    badge: 'AI/ML',
    icon: 'schema',
    prompt: 'Explain Retrieval-Augmented Generation (RAG) using LangChain/LlamaIndex, Vector Databases (Pinecone/ChromaDB), and embeddings in detail.'
  },
  {
    id: 'resume',
    title: 'Improve my Resume',
    badge: 'CAREER',
    icon: 'description',
    prompt: 'What are the key ATS resume keywords and bullet point formulas for a Computer Science Engineering student applying for Software Engineer roles?'
  },
  {
    id: 'roadmap',
    title: 'Generate Semester Roadmap',
    badge: 'PLANNING',
    icon: 'route',
    prompt: 'Create a 12-week study and project roadmap for mastering Data Structures, Algorithms, and System Design before placement season.'
  }
];

export const MOCK_ROADMAPS = [
  {
    id: 'fullstack',
    title: 'Full Stack MERN Mastery',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '8 Weeks',
    icon: 'code',
    progress: 60,
    nodes: [
      { id: 'n1', title: 'JS Fundamentals & ES6+', status: 'completed', description: 'Closures, Promises, Async/Await, Array Methods' },
      { id: 'n2', title: 'React Context API & State', status: 'in-progress', description: 'Global state management, useReducer, custom hooks' },
      { id: 'n3', title: 'Express Routing & Middleware', status: 'upcoming', description: 'REST APIs, JWT authentication, error handling' },
      { id: 'n4', title: 'MongoDB Atlas & Aggregations', status: 'upcoming', description: 'Schema design, indexes, pipeline aggregations' }
    ]
  },
  {
    id: 'aiml',
    title: 'AI & Data Engineering',
    category: 'Artificial Intelligence',
    level: 'Advanced',
    duration: '10 Weeks',
    icon: 'psychology',
    progress: 35,
    nodes: [
      { id: 'a1', title: 'Python & NumPy / Pandas', status: 'completed', description: 'Data structures, vectorization, dataframe operations' },
      { id: 'a2', title: 'PyTorch Model Training', status: 'in-progress', description: 'Neural networks, loss functions, optimizers' },
      { id: 'a3', title: 'LLM Fine-Tuning & Quantization', status: 'upcoming', description: 'LoRA, QLoRA, HuggingFace transformers' },
      { id: 'a4', title: 'Vector DBs & RAG Pipelines', status: 'upcoming', description: 'ChromaDB, Pinecone, Hybrid retrieval' }
    ]
  },
  {
    id: 'systemdesign',
    title: 'System Design & Backend',
    category: 'Architecture',
    level: 'Advanced',
    duration: '6 Weeks',
    icon: 'dns',
    progress: 20,
    nodes: [
      { id: 's1', title: 'Load Balancing & Caching', status: 'completed', description: 'Nginx, Redis eviction policies, CDN caching' },
      { id: 's2', title: 'Database Sharding & Replication', status: 'upcoming', description: 'Read replicas, consistent hashing, CAP theorem' },
      { id: 's3', title: 'Message Queues (Kafka / RabbitMQ)', status: 'upcoming', description: 'Pub/Sub models, event-driven architecture' }
    ]
  }
];

export const MOCK_PROJECTS = [
  {
    id: 'p1',
    title: 'SKILLONIK AI Code Mentor SaaS',
    tag: 'Full Stack + AI',
    difficulty: 'Advanced',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'OpenAI API'],
    description: 'An AI-powered tutoring web application that analyzes code snippets, detects bugs, generates test cases, and provides real-time voice feedback.',
    features: [
      'Multi-modal prompt handling for code & error logs',
      'Real-time streaming response simulation',
      'User authentication with JWT and Google OAuth',
      'Stripe subscription tier for Pro Mentorship'
    ],
    starterCode: `// Server entry point (server.js)
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/ai/analyze', async (req, res) => {
  const { code, language } = req.body;
  // AI analysis logic
  res.json({ success: true, advice: "Code looks optimal with O(N) complexity!" });
});

app.listen(5000, () => console.log('SKILLONIK backend active on 5000'));`
  },
  {
    id: 'p2',
    title: 'Distributed Rate Limiter Service',
    tag: 'Backend Infrastructure',
    difficulty: 'Hard',
    tech: ['Go / Node.js', 'Redis', 'Docker', 'REST API'],
    description: 'High-throughput API Rate Limiter using Sliding Window Counter and Token Bucket algorithms powered by Redis atomic scripts.',
    features: [
      'Token Bucket and Leaky Bucket algorithm implementations',
      'Redis Lua scripts for race-condition prevention',
      'Configurable IP and User API key rate caps',
      'Prometheus metrics dashboard integration'
    ],
    starterCode: `// Redis Token Bucket Middleware Example
const redis = require('./redisClient');

async function rateLimiter(req, res, next) {
  const ip = req.ip;
  const requests = await redis.incr(ip);
  if (requests === 1) {
    await redis.expire(ip, 60); // 1 minute window
  }
  if (requests > 100) {
    return res.status(429).json({ error: 'Too many requests. Limit: 100/min.' });
  }
  next();
}`
  },
  {
    id: 'p3',
    title: 'Smart Resume & ATS Parser Engine',
    tag: 'AI & Data Processing',
    difficulty: 'Intermediate',
    tech: ['Python', 'FastAPI', 'spaCy', 'React', 'PDFPlumber'],
    description: 'Upload candidate resumes in PDF format to extract skills, calculate job description relevance score, and flag formatting errors.',
    features: [
      'PDF text extraction & section classification',
      'Keyword match vector similarity calculation',
      'Export detailed analysis reports in PDF/JSON'
    ],
    starterCode: `from fastapi import FastAPI, UploadFile, File
import pdfplumber

app = FastAPI()

@app.post("/analyze-resume")
async def analyze_resume(file: UploadFile = File(...)):
    with pdfplumber.open(file.file) as pdf:
        text = "".join([page.extract_text() for page in pdf.pages])
    
    # Calculate score based on target keywords
    keywords = ["React", "Node.js", "Python", "Data Structures"]
    found = [k for k in keywords if k.lower() in text.lower()]
    score = int((len(found) / len(keywords)) * 100)
    
    return {"matched_skills": found, "ats_score": score}`
  }
];
