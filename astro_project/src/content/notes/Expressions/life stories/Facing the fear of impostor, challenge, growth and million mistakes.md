---
date: 2024-11-17
source: 
tags:
  - webdev
  - writing
  - story
title: "Facing Impostor Syndrome: Challenges, Growth, and a Million Mistakes"
type: blog_post
URL: https://dev.to/morphzg/facing-the-fear-of-impostor-challenge-growth-and-million-mistakes-fi1
---

![[_assets/impostor_syndrome.webp]]

# Facing Impostor Syndrome: Challenges, Growth, and a Million Mistakes

When I decided to build my portfolio as a web developer, I wanted it to reflect more than just technical skills, I wanted it to showcase my passion for problem solving and dedication to creating meaningful solutions. Maybe "problem solving" already sounds like a cliche but if i try and solve a real world problem, no matter how small it is than i can show and prove that solving problems is my ultimate satisfaction. Most ideas I came up with were projects commonly found in every other developer’s portfolio. I need something different, quality over quantity. Piece of code that will help someone close to me.

As a member of a small team, working for a small business owner, I saw an opportunity to make a real impact. One of the challenges we faced was creating weekly work schedules, a time consuming, manual task that involved balancing each employee preferences and requests but also be fair to other team members. With fair working weekends and total working hours. I will build a full-stack application to automate this process.

The app I envisioned wouldn’t just generate weekly schedules. It would also calculate work hours, ensure fairness by rotating weekend shifts, and consider individual employee preferences. It was ambitious, complex, and outside my comfort zone and current skill level. That’s exactly why I wanted to build it. I will work on something meaningful, I don't know how i will do it and even if i am able to do it but i am sure i have all the needed resources at my disposal.

This blog post is a reflection of my journey, tackling the impostor syndrome we all face way to often, and the valuable lessons I learned through countless mistakes.

## Using Large Language Models

### The Project Structure

This was the project structure proposed by ChatGPT.

```bash  
backend/  
├── config/                # Environment and database setup  
├── controllers/           # Request handling logic  
├── models/                # Database schemas  
├── routes/                # API endpoints  
├── services/              # Core business logic  
├── utils/                 # Utilities like validation and error handling  
├── .env                   # Environment variables  
├── server.js              # Backend entry point  
└── package.json           # Backend dependencies  

frontend/  
├── public/                # Static files  
├── src/                   # Main application code  
│   ├── components/        # Reusable UI components  
│   ├── pages/             # Page-level React components  
│   ├── services/          # API interaction logic  
│   ├── utils/             # Helper functions  
│   ├── App.js             # Main React component  
│   └── index.js           # Entry point for React app  
├── .env                   # Frontend environment variables  
├── package.json           # Frontend dependencies  
└── tailwind.config.js     # Tailwind CSS configuration  
```  

At first glance, everything had sense and i started with small steps. Step by step. Starting with a backend and database configuration. I configured the `server.js` using Express and Node. Easy! Setup the `./config/database.js` using mongoose to connect the MongoDB database. Again with the help of my friendly advisor, ChatGPT, I modelled database schemas for each employee but also for general statistics and schedule. I really enjoyed modelling and experimenting with different properties. AI was more than helpful here. It helped me to see some details i didn't even think of.

## Embracing the Learning Curve

What I discovered, however, is that every developer no matter how experienced starts somewhere. Here’s how I began turning my fear into proud and joy.

Documentation is often viewed as tedious, but I approached it differently. It became my treasure map to navigating unfamiliar territories. Instead of feeling overwhelmed by what I didn't know, I treated the documentation as an adventure. Very often answers in official documentation are not 100% clear, consulting with different LLM's helped me to understand them and remember them. Now i can improvise and not only copy and paste code examples.

But i didn't only read documentation i was also writing it. If you take a look at my `/docs` directory you will see few markdown files where i was documenting all important details and concepts i wanted to learn and remember. Not everything was written by me, again i was asking AI to help me and make the process faster so i can focus on the actual code. We are often under the impression of productivity while actualy doing nothing of importance, writing and talking about something is not the same as doing it.

### The Limitations of AI

It’s tempting to copy-paste AI-generated solutions without fully understanding them. While this might solve immediate problems, it doesn’t build the foundational knowledge necessary for long-term growth. I learned that dissecting AI’s suggestions, asking why it works, and adapting it to my needs was critical.

AI’s knowledge can be outdated. For example, suggestions about frameworks or libraries sometimes referenced older versions, requiring me to cross-check against official documentation.

### Combining Both Worlds

By pairing the convenience of AI tools with the depth of official documentation, I began to make real progress. I’d use AI to get quick and simplified explanation of complex topics i found in official documentation.

I used AI to fill knowledge gaps and get quick explanations. I treated AI as a collaborator. If I needed boilerplate code or regex patterns, AI saved me time. But when building important features I was really trying to understand the code logic and adapted AI’s output around my understanding of concept.

## The Reality Check

Impostor syndrome often hits you when you start making progress, suddenly the whole new playing field is before you, Big boys start coming around you and suddenly you are smaller than you actually are. You are tiny... Can you feel it? That's it. You have two possible routes to go. Either play with big boys and grow stronger or quit and go home. Choice is yours. 
- Everyone Struggles: Even seasoned developers once stared blankly at project structures like these. Understand that impostor syndrome is common, especially in tech, where knowledge evolves rapidly.
- Mistakes Are Part of the Process: Every bug, error or even lack of solution will eventually lead to new knowledge.
- Progress Takes Time: Mastering a web development isn’t an overnight achievement. It’s a marathon, not a sprint.

## Practical Steps That Helped Me

To navigate the chaos, I adopted these strategies:
1. Write about desired result: What and why you want to create, how should it work?
2. Read documentation: When you have a clear plan learn your tools. Go through basic quick start guides and later you can reference the detailed API.
3. Use AI as a Guide: I used AI to clarify and explain but don't just copy and paste answers.
4. Focus on Small Wins: I started with simple tasks, like understanding a single route or component, build a database models...
5. Write about the process: It will help you see the bigger picture.

## Final words?

The path to becoming a better developer is paved with a million mistakes. Each misstep is an opportunity to learn, adapt, and improve. So, embrace the discomfort, trust the process, and keep building one line of code at a time.

*This post is based on real experiences working with a full-stack web application using Node.js, Express, React and MongoDB. See my progress at: https://github.com/MorphZG/work_schedule_app*
