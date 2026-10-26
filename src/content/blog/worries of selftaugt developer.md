---
title: 'Worries of selftaugt developer'
description: ''
pubDate: '2026-10-21'
heroImage: ''
thumbnail: '/src/assets/thumbnails/impostor_syndrome.webp'
tags: []
draft: true
---

*You don't need a computer science degree or years of professional experience to become a developer. But you do need a way to demonstrate what you can do, how you think, and why someone should trust you with their code.*

## The Problem With Learning to Code

Learning web development has never been more accessible. There are free courses, excellent documentation, YouTube tutorials, open-source projects, and AI tools that can explain almost any programming concept.

You can learn HTML in a few days, build your first React application in a weekend, and deploy a website before the end of the month.

And yet, after months of learning, many self-taught developers find themselves asking the same question:

**Am I actually ready to get a job?**

You might understand JavaScript, know your way around React, and have several projects on GitHub. You might even be able to build a small application without following a tutorial from beginning to end.

But when you look at job advertisements, the requirements seem endless. TypeScript, REST APIs, databases, authentication, testing, deployment, cloud platforms, CI/CD, and sometimes a list of technologies that feels longer than the description of the actual job.

It becomes difficult to know what to learn next.

So you start another course. You discover another framework. You rewrite an old project using a new library. You watch someone build an impressive application in twenty minutes and wonder why your own progress feels so slow.

The problem is not necessarily a lack of knowledge. Sometimes, the problem is that learning has become an end goal in itself. If your goal is to become employable, eventually you need to move beyond collecting knowledge and start demonstrating that you can use it.

That is where a portfolio becomes important.

Not because every employer will carefully examine every repository you publish, but because building real projects gives you something much more valuable than a list of technologies on your resume.

## Stop Trying to Learn Everything

When I think about the path from self-taught developer to professional developer, I keep coming back to one principle: depth matters more than the number of technologies you can name. You do not need to master every popular framework before applying for your first job. You need a solid foundation, a practical set of skills, and enough experience building software to understand how its pieces fit together.

For someone interested in web development, a reasonable path is to begin with JavaScript, build interfaces with React, learn about network, how HTTP and REST APIs work. Along the way, you should become comfortable with Git, debugging, deployment... This does not mean you must learn every one of these subjects before writing an application. In fact, that would probably lead you to frustrations or giving up eventualy.

Start small. When you create a form, you learn about validation. When you send data to an API, you encounter HTTP requests and error handling. When you store that data in a database, you begin to understand relationships, models, schemas, queries... When you deploy the application, you discover that software running on your machine and software running in production are not always the same thing.

Each step along the way brings new riddles to solve. Instead of spending months thinking what to build, build something small and let the work reveal what you need to learn next.

The goal is not to avoid theory. It is to connect theory with practice.

## Your Portfolio Is More Than a Collection of Projects

Imagine that a recruiter or hiring manager opens your GitHub profile. They see five repositories. One contains a calculator, another contains a weather application, and the rest are variations of tutorial projects. There is nothing wrong with these projects. They are useful for learning, and every developer starts somewhere. But they may not tell a convincing story about your ability to stand out from the crowd.

Now imagine a different portfolio.

The first project is a personal website where you explain who you are, share technical articles, and document what you are learning. The second is a task management application with a real database, user authentication, and tests. The third solves a specific business problem, such as managing customer support tickets or tracking inventory.

These projects demonstrate different levels of responsibility.

One shows that you can create a polished web experience. Another shows that you understand the connection between frontend, backend, and database. The third shows that you can translate business requirements into working software.

More importantly, they give you something meaningful to discuss during an interview.

You can explain why you chose a particular architecture, how you modelled your data, what went wrong during development, and how you tested your solution.

That is the difference between a portfolio that merely displays code and a portfolio that communicates engineering ability.

You do not need ten projects to tell this story. Two or three carefully chosen projects can be enough to demonstrate substantial progress, especially when you can explain the decisions behind them.

## Start With Your Own Website

A personal website is a natural first project because it serves two purposes at once.

It is an application you can improve as a developer, and it is a place where you can present yourself to potential employers.

Using Astro is a good choice for a content-focused website. Its architecture is well suited to pages that are mostly rendered on the server or generated at build time, without requiring a large client-side JavaScript application for every interaction.

The website should introduce you clearly. Visitors should be able to understand what kind of developer you are, what you are interested in, and where they can find your work.

Your recent articles and projects should be easy to discover. Your GitHub profile and contact information should be accessible without making someone search for them.

But the real value comes from treating the website as a product rather than a digital business card.

Think about the experience of someone reading an article. Can they navigate comfortably on a phone? Is the typography readable? Does the page have a clear hierarchy? Can they find related content? Are images optimised? Does the site load quickly? Can someone navigate it using a keyboard?

These are not decorative details. They are part of building a usable web application.

Your publishing workflow deserves the same attention.

Article metadata should be validated rather than accepted blindly. Dates should be displayed consistently. Drafts should not accidentally appear as published content. Images should have appropriate alternative text, and each article should have useful page metadata.

As the site grows, you can add tags, an RSS feed, search, pagination, syntax highlighting, and a table of contents where these features improve the reading experience.

You should also consider a sitemap, canonical URLs, and appropriate social sharing metadata.

The important thing is to build these features because they serve a clear purpose, not simply because they appear on a checklist.

For example, tags make it easier for readers to discover related articles. An RSS feed allows readers to follow new posts using their preferred feed reader. Good metadata helps search engines and social platforms understand your content.

Each feature should make the site more useful.

Your blog also gives you an opportunity to demonstrate another important developer skill: communication.

Write about things you have learned. Explain concepts that confused you when you were a beginner. Document a difficult bug and describe how you found its cause. Compare two approaches you tried and explain why you preferred one.

You do not need to present yourself as an expert.

A thoughtful explanation of a problem you recently solved can be more convincing than a generic article claiming to explain an entire technology.

Over time, the website becomes evidence of both your technical growth and your ability to communicate ideas.

And because you own the project, you can keep improving it as your skills develop.

## Build Something That Actually Stores Data

Once your personal website is in good shape, the next step is to build an application that requires more than displaying content.

A task management application is a useful choice because the underlying problem is familiar, but the implementation introduces several important engineering challenges.

Imagine a small development team working on a website redesign. The team has tasks to complete, deadlines to meet, and people responsible for different pieces of work.

They need a place to organise their projects and understand what still needs to be done.

Your application could provide that place.

A user creates a project, adds tasks, assigns responsibilities, sets deadlines, and tracks progress. Tasks can be filtered by status, sorted by due date, and updated as work progresses.

At first, the application might look simple.

Then you start considering what happens when someone refreshes the page.

Where does the data live?

This question leads you to the backend and database.

You might build the frontend with React and TypeScript, expose a REST API using Node.js and Express, and store persistent data in PostgreSQL. A database library or ORM can help you manage queries and schema migrations.

Now you have to think about the relationships between users, projects, and tasks.

A task belongs to a project. A project may have several members. A user may participate in multiple projects. A deadline must be represented consistently, and a task status should only accept valid values.

These decisions influence the entire application.

You also need to consider what happens when a request fails. What if the database is unavailable? What if a user submits invalid data? What if someone tries to update a task that does not exist?

A good application does not assume that every request succeeds.

It communicates errors clearly and handles unexpected situations without exposing sensitive information or leaving the user confused.

Authentication introduces another layer of responsibility.

Users need a secure way to sign in, but signing in is only part of the problem. The application must also determine what each user is allowed to access.

If one user changes a task identifier in an API request, they should not suddenly gain access to another person's private project.

That means authorisation must be enforced by the backend, not merely by hiding buttons in the interface.

These are the kinds of details that distinguish a convincing full-stack project from a demonstration with a few forms and a dashboard.

You do not need to implement every possible feature immediately. Start with creating and managing projects and tasks. Add authentication and access control, then improve filtering, validation, testing, and deployment.

A simple, reliable application is a stronger foundation than a complicated application full of unfinished features.

## The Uncomfortable Part: Testing and Deployment

Many developers enjoy building interfaces and implementing new features. Testing and deployment can feel less exciting, especially when you are working alone.

But this is precisely where a portfolio project can become much more valuable.

Suppose you have built a task manager that appears to work correctly. You can create a task, update its status, and delete it.

How do you know that the application behaves correctly when someone submits invalid input?

How do you know that a user cannot access another user's tasks?

How do you know that your database constraints work as expected?

You need tests.

You do not have to achieve perfect test coverage, and you do not need to introduce a complicated testing architecture. Start by testing the behaviour that matters most.

Test whether invalid task data is rejected. Test whether unauthenticated requests to protected endpoints are denied. Test whether users can access only the projects they are permitted to use. Test the most important API operations and the rules that protect your data.

For interactive interfaces, you can add browser tests for critical user journeys.

Testing forces you to think about behaviour rather than relying on the fact that something worked once while you were developing it.

Deployment teaches another set of lessons.

Environment variables must be configured correctly. Secrets must stay out of source control. Database migrations must run reliably. Production errors need to be understandable without exposing internal details.

A public demo also gives employers a convenient way to explore your work without cloning a repository and configuring their own environment.

The project should have a clear README that explains its purpose, architecture, technology choices, setup instructions, environment variables, and testing process.

Screenshots and a short demonstration can help visitors understand what they are looking at.

Most importantly, be honest about the project's limitations. If a feature is incomplete, say so. If the application uses sample data, explain that. If you made a trade-off to keep the scope manageable, describe the reasoning.

Professionalism is not the absence of limitations. It is understanding and communicating them.

## A Third Project Should Solve a Different Problem

After completing a full-stack application, you might feel tempted to build something even more impressive.

Before doing that, ask yourself whether another project will demonstrate a new skill or simply repeat the work you have already done.

If your task manager already includes CRUD operations, authentication, permissions, database relationships, and API testing, another generic CRUD application may add little value.

A better choice is to explore a different business problem.

For example, you could build a customer support ticket system.

Imagine a small company receiving requests from customers. Support agents need to assign tickets, respond to messages, prioritise urgent issues, and track whether a problem has been resolved.

The application could model tickets moving through different states, maintain a history of changes, and provide reports on unresolved requests.

This introduces useful questions about business rules.

Can a closed ticket be reopened? Who can change the priority? Should every status change be recorded? How should the system calculate the average time needed to resolve a request?

These questions require you to model a process, not just create database records.

Alternatively, you could build an inventory management system.

A small business needs to know which products it has, which suppliers provide them, and when stock is running low. It needs to record stock arriving and leaving, rather than simply displaying a number that someone can edit.

This creates an interesting data integrity problem.

If two operations attempt to reduce the same stock balance at nearly the same time, how do you prevent the application from recording an impossible result? How can you ensure that updating the stock and recording the corresponding movement happen together?

Database transactions and concurrency control become relevant because the business problem requires them.

You do not need to build both applications.

Choose the one that interests you and complements your existing work. Keep the scope focused enough that you can finish, test, document, and deploy it.

A portfolio is not a competition to see who can build the largest number of applications.

It is a demonstration of how well you can solve problems.

## Can You Use AI to Build Your Portfolio?

There is another question that many developers are now asking: is it acceptable to use AI when building portfolio projects?

My answer is yes, provided that you use it as a tool rather than as a substitute for understanding.

Software developers have always relied on tools. We use documentation, search engines, code editors, linters, debuggers, libraries, and advice from other developers.

AI can be another useful part of that process.

You can ask it to explain an unfamiliar concept, review a database schema, suggest test cases, identify potential security problems, or help you understand an error message.

You can use it to generate a starting point for a component or explore alternative implementations.

The important question is what happens next.

If AI generates an authentication system, do you understand how it handles passwords and sessions? If it writes a database query, can you explain what the query returns and why the query is safe? If it suggests a solution to a bug, have you tested that solution?

Code that compiles is not necessarily code that is correct.

Code that appears to work is not necessarily secure.

And code that you cannot explain is difficult to maintain when requirements change.

For that reason, I would treat every significant AI-generated contribution as something to investigate and verify.

Read the code. Compare it with reliable documentation. Test its behaviour. Check edge cases. Ask questions until you understand the implementation well enough to modify it yourself.

You should also be able to explain your project's architecture and the important decisions you made without depending on an AI assistant to answer for you.

There is no need to hide the fact that you used AI. What matters is whether you take responsibility for the software you produce.

A developer who uses AI thoughtfully can work efficiently while continuing to learn. A developer who accepts every generated answer without understanding it may accumulate code faster than they accumulate engineering skills.

Your goal should be the first.

## The Job Search Is Part of the Project

It is easy to spend so much time improving your portfolio that you postpone applying for jobs.

You tell yourself that you will start when the blog is perfect, when the task manager has one more feature, or when you have finished another course.

There is always another improvement to make.

But a portfolio does not have to be perfect before it can help you find work.

Once your website presents you clearly and you have a credible project to demonstrate, begin applying while continuing to improve your skills.

Look for junior frontend, junior full-stack, and general web development positions that match your current abilities. Read the requirements carefully, but do not assume that every item in a job advertisement is an absolute prerequisite.

Some requirements describe essential responsibilities. Others describe a candidate the company would ideally like to find.

Use job advertisements to identify recurring skills and gaps in your knowledge. If many relevant positions expect TypeScript, strengthen your TypeScript skills. If they repeatedly mention SQL, make sure you can explain joins, relationships, indexes, and transactions at an appropriate level.

Your CV should connect your abilities to concrete evidence.

Instead of claiming to be an expert in every technology you have touched, explain what you built with it.

Describe the task manager as an application with a React and TypeScript frontend, a REST API, persistent PostgreSQL storage, and automated tests only if those features are actually implemented.

Explain what you learned, what problem the application solves, and what technical decisions you made.

Keep your GitHub repositories understandable. Give them descriptive names, provide setup instructions, remove unnecessary files, and make it easy for someone to explore the code.

You should also maintain a simple record of applications, interviews, and follow-ups. Over time, this helps you see whether your approach is working.

If you receive no responses, review your CV, the positions you are targeting, and how clearly your portfolio communicates your skills.

If you get interviews but struggle with technical questions, spend more time practising fundamentals and explaining your own code.

If you reach later interview stages but repeatedly struggle with system design or debugging exercises, work on those specific areas.

A job search is not simply a test of your worth as a developer. It is also a process of collecting feedback and adjusting your approach.

## Make the Plan Small Enough to Finish

When you are learning independently, time is one of your most important resources.

You might have a full-time job, family responsibilities, or other commitments. You cannot necessarily spend eight hours every day studying and building software.

That makes focus more important than ever.

If you can consistently dedicate fifteen to twenty hours per week, you can make meaningful progress without turning every evening into an exhausting marathon.

Spend part of that time building your projects, part strengthening the concepts you encounter, and part preparing for employment.

Give yourself room to solve problems without immediately searching for a complete solution. At the same time, do not spend three days stuck on a small issue when a documentation page or a well-targeted question could help you move forward.

Keep your projects deliberately small.

For the blog, the first milestone might be a polished homepage, a working article page, validated content metadata, and a reliable publishing workflow. Tags and RSS can follow once the core experience is solid.

For the task manager, begin with projects and tasks that persist in a database. Then introduce authentication, permissions, validation, and tests. Deploy a working version before adding optional features.

For the third project, wait until you have a reason to build it. You might discover that your first two projects already demonstrate enough breadth for the roles you want.

You do not need to follow an exact twelve-week schedule for the plan to work. Some parts will take longer than expected, while others will become easier as your experience grows.

The real milestone is not reaching a particular week.

It is being able to point to working software and explain why it was built the way it was.

## Become Someone Who Can Explain Their Decisions

Imagine sitting in an interview and being asked to walk through your favourite project.

You explain the problem you wanted to solve. You describe the architecture and the responsibilities of the frontend, backend, and database. You explain why you chose your data model and how the application protects private resources.

Then the interviewer asks what was difficult.

You describe a bug that allowed an invalid task status to reach the database. You explain how you reproduced it, traced the problem to missing server-side validation, added a test, and corrected the implementation.

Next, they ask what you would improve if you had another week.

You discuss a limitation you already understand, perhaps more comprehensive browser testing or better handling of concurrent updates.

You do not need to pretend that the project is flawless.

In fact, being able to identify a limitation and explain a sensible improvement is evidence that you understand the work.

This is why the development process matters as much as the final result.

Keep notes about decisions, mistakes, and discoveries. Write down why you chose one library over another. Document the trade-offs you made. Save examples of bugs that taught you something important.

Those notes can become articles for your blog, material for interview preparation, and a record of your progress.

The projects and the writing reinforce each other. Building gives you something real to discuss, and writing helps you understand what you have built.

Over time, your portfolio becomes a record of your development as an engineer.

## You Do Not Need Permission to Begin

The transition from self-taught developer to employed developer can feel like a gap that is impossible to cross.

You read job advertisements asking for experience, but you need an opportunity to gain experience. You compare your projects with software built by established teams and conclude that you are not ready.

It is understandable to feel that way.

But professional developers were not born knowing how to design reliable APIs, structure databases, or debug production failures. They learned those skills through study, experimentation, collaboration, and repeated exposure to real problems.

Your first projects will have limitations. Your early architectural decisions will not always be the best ones. You will encounter errors that take hours to understand and concepts that make sense only after you have used them several times.

That is normal.

What matters is whether you keep improving and whether you can demonstrate that improvement.

Build a personal website that communicates who you are. Create a full-stack application that handles real data and meaningful permissions. If it adds something new, build another project that solves a different business problem.

Test your software. Deploy it. Document it. Write about what you learned. Use AI to support your work, but understand the code you deliver.

And start applying before you convince yourself that you know everything.

There will never be a moment when every technology feels familiar and every job requirement matches your experience. Waiting for that moment can become another way of avoiding the uncertainty that comes with taking the next step.

You do not have to know everything to be useful.

You have to keep learning, solve problems carefully, and take responsibility for your work.

Your portfolio cannot guarantee you a job. The market, the available positions, your location, and the expectations of individual employers all matter.

But a portfolio built around thoughtful decisions, working software, and clear explanations gives you something tangible to bring to the conversation.

You stop saying only that you want to become a developer.

You start showing what you can build.

And that is a much stronger place from which to begin.
