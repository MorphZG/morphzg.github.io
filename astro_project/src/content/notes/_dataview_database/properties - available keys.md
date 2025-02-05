---
tags:
  - dataview
  - index
title: List available properties
---

# List available properties

```dataviewjs
let pages = dv.pages().where(p => p.file.frontmatter);
let propertySet = new Set();

// Loop through all pages and extract frontmatter properties
for (let page of pages) {
    let frontmatter = page.file.frontmatter;
    for (let prop in frontmatter) {
        // Collect only unique frontmatter properties
        propertySet.add(prop);
    }
}

// Convert the set into an array for easy iteration
let allProperties = Array.from(propertySet);

// Display all unique frontmatter properties
dv.header(5, "Frontmatter properties");
dv.list(allProperties);

```

```dataviewjs
let pages = dv.pages();
let systemPropertySet = new Set([
    "file.name", "file.path", "file.folder", "file.cday", "file.mtime", "file.ctime", "file.size", "file.etag"
]);

// Loop through all pages to ensure every system property is collected
for (let page of pages) {
    for (let prop in page.file) {
        // Collect system properties from the file object
        systemPropertySet.add("file." + prop);
    }
}

// Convert the set into an array for easy iteration
let allSystemProperties = Array.from(systemPropertySet);

// Display all unique system properties
dv.header(5, "System properties");
dv.list(allSystemProperties);

```
