---
date: 
source: 
tags:
  - webdev
  - coding
title: Single page application
type: knowledge
URL: 
status: useful
---

# Single page application

Since this is a SPA (Single page application), `index.html` is the main starting point where everything comes together. The entire app's code is organised in the `src/` directory but after user requsts the page, everything is rendered inside a single .html file. Everything at once. This HTML file contains a placeholder or "root" element that react uses as the mounting point, usually simple `<div id="root"></div>`. React dynamically injects and manages the app's components using JavaScript, creating a seamless user experience without the need to reload the entire page. This means that initial loading time is a bit longer.

Entire javascript bundle must be downloaded, parsed and executed before the app becomes interactive. However, there are several strategies to optimise the initial loading time. Code splitting, lazy loading, tree shaking (minimise the size of the javascript bundle by including only the code that is actually used), server-side rendering (SSR, render the initial html on the server and send it to the cient, allow users to see the content faster while in the background javascript loads and hydrates the app as needed)... There are many more optimisation strategies but the point is that single page applications (SPA) needs a bit more time after initial request and later the user experience is smooth and seamless even when user browse through different pages. There is no need to reload or refresh since everything is already loaded. Browsing through different pages is handled by the `React-router`.

## What happens after initial request by the user?

The process common for most single page applications allows the React app to provide fast user experience by handling routing and content updates entirely on the client side.

- **Initial request:** The browser requests the `index.html` file from the server.
- **HTML delivery:** The server responds by sending the `index.html` file. Once the client receives the html, browser reads and parses the file. When it finds a script tag with a reference to the requried javascript file another http request is triggered and javascript bundle is pulled from the server.
- **Javascript loading:** The browser loads and executes the javascript files referenced in the `index.html`, typically bundled together by a tool like Webpack.
- **React initialisation:** React initializes and takes over the `DOM`, targeting the root element.
- **Component rendering:** React renders the initial components of the application into the root element. It dynamically updates this content based on the app's state and user interactions without needing further full-page reloads.
