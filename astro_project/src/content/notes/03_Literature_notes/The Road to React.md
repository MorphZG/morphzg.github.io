---
tags:
  - webdev
  - react
title: The Road To React
---

# The Road To React

---

# Foreword

## How to read the book

Every section in this book introduces you to a new topic. For the fast pace learners who do not want to go into much detail, it's possible to read from section to section. However, if learners want to dive deeper into certain topics, they can read more by following the footnotes.

### Take notes

Taking notes fortifies what you have learned and you can always come back to them. With every new learning, you will get better understanding the big picture and how the smaller pieces fit together, so it's a great exercise on the side to write down your learnings on a piece of paper.

### Code code code

Do not just copy paste code, instead type it yourself. Do not be satisfied when you just used the code from the book, instead experiment with it. See what breaks the code and how to fix it. See how certain changes affect the result. And see how you can extend or even improve the code by adding a few lines to it. That’s what coding is all about after all. It does not help you to rush through the book if you haven’t written a line of code once. So get your hands dirty and do more coding than reading!

### Anticipate

There will be many coding problems presented in this book. Often I will give you the option to solve things yourself before reading about the solution in the next paragraph or code snippet. However, it breaks the flow of reading repeating myself, so I keep these encouragements to a minimum. Instead I am hoping for your eagerness here to jump ahead. Try to solve things before I get the chance to present you the solution. Only by trying, failing, and solving a problem you will become a better developer.

### Take Breaks

Since every section introduces you to a new topic, it happens fast that you forget the learnings from the previous section. In addition to coding along with every section, I recommend you to take breaks between the sections which allow learnings to sink in. Read the section, code along the way, do the exercise afterwards, code even a bit more if you like, and then rest. Think about your learnings while taking a walk outside or speak with someone about what you have learned even though this other person is not into coding. After all, taking breaks is always essential if you want to learn something new.

---

# Fundamentals of React

## Hello React

[[00_Fleeting_inbox/single page application|Single Page Applications]] (SPA) have become increasingly popular with first generation SPA frameworks like Angular, Ember, Knockout and Backbone. Using these frameworks made it easier to build a web applications that advanced beyond vanilla Javascript and jQuery. React, yet another solution for SPAs was released by Facebook later in 2013. All of them are used to create modern web applications in Javascript.

Before SPAs existed. In the past, websites and web applications were rendered from the server. A user visits a URL in a browser and requests one HTML file and all its associated HTML, CSS and Javascript files from a server. Every additional page transition would initiate this chain of events again. In this version from the past, essentially everything crucial is done by the server, whereas the client plays the minimal role by just rendering page by page. While barebones HTML and CSS were used to structure and style the application just a little javascript was thrown into the mix to make interactions or advanced styling possible. Popular library for this kind of work was jQuery.

In contrast, modern javascript shifted the focus from the server to the client. The most extreme version of it: A user visits a URL and requests one small HTML file and one larger javascript file. After some network delay, the user sees the HTML rendered by the javascript in the browser and starts to interact with it. Every additional page transition wouldn't request more files from the server, but would use the initially requested javascript to render the new page. Also, every additional interaction by the user is handled on the client too. In this modern version, the server delivers mainly javascript across the wire with one minimal HTML file. The HTML file than executes all the linked javascript from the files on the client-side to render the entire application with HTML and uses javascript for its interactions.

React, among the other SPA solutions, makes this possible. Essentially  a SPA is one bulk of javascript which is neatly organised in directories and files, to create a whole application whereas the SPA frameworks gives you all the tools to architect it. This javascript focused application is delivered once over the network to your browser. From there, React or any other SPA framework, takes over for rendering.

### Additional reading

- [How we moved from websites to web applications](https://www.robinwieruch.de/web-applications/)
- [How to learn a framework](https://www.robinwieruch.de/how-to-learn-framework/)
- [How to learn React](https://www.robinwieruch.de/learn-react-js/)

## React JSX

JSX is a syntax extension to Javascript. Combination of HTML and Javascript. Some native HTML attributes differs from attributes we use in JSX. Caused by internal implementation details of React itself. React internally translates all HTML attributes to Javascript where certain words such as `class` or `for` are reserved javascript words. Therefore React came up with replacements such as `className` and `onClick` instead of `class` and `onclick` or `htmlFor` instead of `for`. Once the actual HTML is rendered for the browser, the attributes get translated back to their native variant.

While HTML (except for the attributes) can almost be used in its native way, everything in curly braces can be used to interpolate javascript.

```jsx
const title = "React"
function App() {
  return (
    <div>
      <h1>Hello { title }</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}
```

```jsx
const title = 'React';

// JSX ...
const myElement = <h1>Hello {title}</h1>;

// ... gets transpiled to JavaScript
const myElement = React.createElement('h1', null, `Hello ${title}`);

// ... gets rendered as HTML by React
<h1>Hello React</h1>
```

JSX enables developers to express what should be rendered by mixing up HTML with JavaScript. Whereas the previous way of thinking was to decouple markup from logic, React puts all of it together as one unit in a React component. As you can see from the last code snippet, React does not require you to use JSX at all, instead it’s possible to use methods like `createElement()`. However, most people find it more intuitive to use JSX for its declarative
nature instead of using JavaScript methods which only allow one to express the UI imperatively.

### Additional reading

- [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
