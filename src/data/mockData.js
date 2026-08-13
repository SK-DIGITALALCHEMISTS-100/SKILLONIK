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

export const INITIAL_SAVED_CHATS = [
  {
    id: 'sc-1',
    title: 'MERN MongoDB Timeout Debugging',
    date: 'Aug 06, 2026',
    createdAt: 1785980000000,
    messageCount: 2,
    messages: [
      {
        id: 'msg-sc1-1',
        sender: 'user',
        text: 'My Node.js Express server is throwing a MongooseServerSelectionError: connection timed out when connecting to MongoDB Atlas on Render. How do I resolve this?',
        timestamp: '02:15 PM'
      },
      {
        id: 'msg-sc1-2',
        sender: 'ai',
        text: 'This timeout error almost always occurs due to MongoDB Atlas Network Access IP restrictions, missing DNS resolution, or aggressive timeout configurations.\n\n### Resolution Steps:\n1. **Network Access**: Go to MongoDB Atlas -> **Network Access** -> Ensure `0.0.0.0/0` (Allow Access from Anywhere) is active for cloud hosting platforms like Render/Vercel.\n2. **DNS & Connection String**: Ensure you are using the \`mongodb+srv://\` URI and proper URL encoding for special characters in your password.\n3. **Connection Options**: Configure \`serverSelectionTimeoutMS\` and connection retry handlers.',
        codeLanguage: 'javascript',
        codeSnippet: `const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      maxPoolSize: 10,
    });

    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`MongoDB Connection Error: \${error.message}\`);
    process.exit(1);
  }
};

module.exports = connectDB;`,
        confidence: 'High Confidence - Verified Engineering Knowledge',
        timestamp: '02:16 PM'
      }
    ]
  },
  {
    id: 'sc-2',
    title: 'FastAPI Async SQLModel Setup',
    date: 'Aug 04, 2026',
    createdAt: 1785800000000,
    messageCount: 2,
    messages: [
      {
        id: 'msg-sc2-1',
        sender: 'user',
        text: 'Explain FastAPI dependency injection, async database connections with SQLModel, and OpenAPI schema generation with code examples.',
        timestamp: '11:30 AM'
      },
      {
        id: 'msg-sc2-2',
        sender: 'ai',
        text: 'FastAPI combines Python type hints with Async Engine and SQLModel (which merges SQLAlchemy and Pydantic) for high-throughput asynchronous services.\n\n- **Async Session Generator**: Use an async generator with \`Depends()\` to inject scoped database sessions per request.\n- **Automatic OpenAPI Docs**: Pydantic models automatically produce Interactive Swagger UI documentation at \`/docs\`.',
        codeLanguage: 'python',
        codeSnippet: `from fastapi import FastAPI, Depends
from sqlmodel import SQLModel, Field, select
from sqlmodel.ext.asyncio.session import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from typing import AsyncGenerator

DATABASE_URL = "sqlite+aiosqlite:///./skillonik.db"
engine = create_async_engine(DATABASE_URL, echo=True)

class Project(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str
    tech_stack: str

async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSession(engine) as session:
        yield session

app = FastAPI(title="SKILLONIK Engine API")

@app.get("/projects", response_model=list[Project])
async def read_projects(session: AsyncSession = Depends(get_session)):
    result = await session.exec(select(Project))
    return result.all()`,
        confidence: 'High Confidence - Verified Engineering Knowledge',
        timestamp: '11:31 AM'
      }
    ]
  },
  {
    id: 'sc-3',
    title: 'TCS Digital Coding Solutions',
    date: 'Aug 01, 2026',
    createdAt: 1785500000000,
    messageCount: 2,
    messages: [
      {
        id: 'msg-sc3-1',
        sender: 'user',
        text: 'Give me the top technical problem and solution for TCS Digital & Infosys placement rounds on Binary Tree Traversals.',
        timestamp: '04:45 PM'
      },
      {
        id: 'msg-sc3-2',
        sender: 'ai',
        text: 'Here is a core algorithmic problem frequently evaluated in TCS Digital, Infosys SP/DSE, and top product hiring assessments:\n\n### Problem: Binary Tree Level Order Traversal (BFS)\n**Key Strategy**: Use a First-In-First-Out (FIFO) queue. Capture the current queue size before iterating to group each tree level into a sub-array.\n\n- **Time Complexity**: $\\mathcal{O}(N)$ where $N$ is the number of nodes.\n- **Space Complexity**: $\\mathcal{O}(N)$ for the maximum breadth level in the queue.',
        codeLanguage: 'javascript',
        codeSnippet: `function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}`,
        confidence: 'High Confidence - Verified Engineering Knowledge',
        timestamp: '04:46 PM'
      }
    ]
  }
];
