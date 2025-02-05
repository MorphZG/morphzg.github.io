---
tags:
  - webdev
  - programming
  - react
title: Modern Full-Stack React Projects
---

# Modern Full-Stack React Projects

## Build, maintain, and deploy modern web apps using MongoDB, Express, React, and Node.js

---
>[!abstract]- book metadata
Title: Modern Full-Stack React Projects
Author: Daniel Bugl
Pub date: June 2024
Publisher: Pact Publishing Ltd.
ISBN: 978-1-83763-795-9
Language: English
Pages: 763
Weight:
Height:
Width:
Cover: ![](https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718913756i/209933892.jpg)

## Table of Contents

1. Part 1: Getting started with full-stack development
- [[#Preparing for full-stack development]]
- [[#Getting to know Node.js and MongoDB]]

1. Part 2: Building and deploying our first full-stack application with REST API*
- [[#Implementing a backend using Express, Mongoose ODM, and Jest]]
- [[#Integrating a frontend using React and TanStack query]]
- [[#Deploying the application with Docker and CI/CD]]

1. Part 3: Practicing development of full-stack web applications
- [[#Adding authentication with JWT]]
- [[#Improving the load time using server-side rendering]]
- [[#Making sure customers find you with search engine optimization]]
- [[#Implementing end-to-end tests using Playwright]]
- [[#Aggregating and visualizing statistics using MongoDB and Victory]]
- [[#Building a backend with a GraphQL API]]
- [[#Interfacing with GraphQL on the front using Apollo client]]

1. Part 4: Exploring an event-based full-stack architecture
- [[#Building an event-based backend using Express and Socket.IO]]
- [[#Creating a frontend to consume and send events]]
- [[#Adding persistence to Socket.IO using MongoDB]]

1. Part 5: Advancing to enterprise-ready full-stack applications
- [[#Getting started with Next.js]]
- [[#Introducing React server components]]
- [[#Advanced Next.js concepts and optimizations]]
- [[#Deploying a Next.js app]]
- [[#Diving deeper into full-stack development]]

---

## Preparing for full-stack development

### Key concepts

- Technical requirements, software used in the book. While different version should not be an issue, note that some steps might work differently with different versions.
  - Node.js v20.10.0
  - Git v2.43.0
  - Visual studio code v184.2
- Motivation to become a fullstack dev
  - Companies try to reduce the gap between frontend and the backend. Using technologies such as server-side rendering frontend devs are becoming deeply integrated with the backend.
- Getting the most out of this book.
  - Tryout the technologies introduced in this book so you can follow the instructions but do not hesitate to learn the alternative tech stacks on later. Web is forever changing and you should be able to adapt and learn new tools and concepts if you are to become proficient and versatile web developer.
- Setting up the dev environment.
  - Install VS Code and following extensions:
	- Docker (by Microsoft)
	- ESLint (by Microsoft)
	- Prettier (by Prettier)
	- MongoDB for VS Code (by MongoDB)
  - Setup a project with Vite v5.0.0 (book version)
  - Setup ESLint and Prettier to enforce the best practices and code style
  - Setup Husky to make sure we commit proper code

### Personal thoughts

### Examples or code snippets

- Code for this chapter can be found on Github:
  - [github.com/PacktPublishing](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch1)
- Code in action video for this chapter can be found on Youtube:
  - [youtube.com/video](https://youtu.be/dyf3nECvKAE)

```bash
# create and change into chapter directory
mkdir -p "book modern_fullstack_react/ch1"
cd "book modern_fullstack_react/ch1"
# create project in current chapter dir
# select React and vanilla Javascript
npm create vite@5.0.0 .
# install dependancies
npm install
npm install --save-dev prettier@3.1.0 eslint@8.54.0 eslint-plugin-react@7.33.2 eslint-config-prettier@9.0.0 eslint-plugin-jsx-a11y@6.8.0
```

### Questions

### Summary

Related to environment setup. There are few more steps author wants me to follow but those are mostly related to Prettier and ESLint configuration. To save myself some time i would waste on typing. I will just read through without noting the exact configuration. If future reader is interested you can find config files inside the github repository by following the [link to github repository for ch1](https://github.com/PacktPublishing/Modern-Full-Stack-React-Projects/tree/main/ch1).

### Reference or additional reading

- `[[ ... ]]` - Internal links
- `[source_material.com/article_name](https://www.source_material.com)` - Outbound link

## Getting to know Node.js and MongoDB

### Key concepts

### Personal thoughts

### Examples or code snippets

### Questions

### Summary

### Reference or additional reading
