---
tags:
  - webdev
title: Single page application
---

# Single page application

Single Page Applications (SPA) have become increasingly popular with first generation SPA frameworks like Angular, Ember, Knockout and Backbone. Using these frameworks made it easier to build a web applications that advanced beyond vanilla Javascript and jQuery. React, yet another solution for SPAs was released by Facebook later in 2013. All of them are used to create modern web applications in Javascript.

Before SPAs existed. In the past, websites and web applications were rendered from the server. A user visits a URL in a browser and requests one HTML file and all its associated HTML, CSS and Javascript files from a server. Every additional page transition would initiate this chain of events again. In this version from the past, essentially everything crucial is done by the server, whereas the client plays the minimal role by just rendering page by page. While barebones HTML and CSS were used to structure and style the application just a little javascript was thrown into the mix to make interactions or advanced styling possible. Popular library for this kind of work was jQuery.

In contrast, modern javascript shifted the focus from the server to the client. The most extreme version of it: A user visits a URL and requests one small HTML file and one larger javascript file. After some network delay, the user sees the HTML rendered by the javascript in the browser and starts to interact with it. Every additional page transition wouldn't request more files from the server, but would use the initially requested javascript to render the new page. Also, every additional interaction by the user is handled on the client too. In this modern version, the server delivers mainly javascript across the wire with one minimal HTML file. The HTML file than executes all the linked javascript from the files on the client-side to render the entire application with HTML and uses javascript for its interactions.

Essentially a SPA is one bulk of javascript which is neatly organised in directories and files, to create a whole application whereas the SPA frameworks gives you all the tools to architect it. This javascript focused application is delivered once over the network to your browser. From there, React or any other SPA framework, takes over for rendering.

Entire javascript bundle must be downloaded, parsed and executed before the app becomes interactive. However, there are several strategies to optimise the initial loading time. Code splitting, lazy loading, tree shaking (minimise the size of the javascript bundle by including only the code that is actually used)... server-side rendering renders the initial html on the server and sends it to the client, allowing users to see the content faster while in the background javascript loads and hydrates the app as needed. There are many more optimisation strategies but the point is that single page applications needs a bit more time after initial request and later the user experience is smooth and seamless even when user browse through different pages. There is no need to reload or refresh since everything is already loaded. Browsing through different pages is handled by different routers provided by the framework or included as a library.
