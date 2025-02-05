---
tags:
  - dataview
  - index
title: ""
---

## List of all values for source property

```dataviewjs

let sources = {};
for (let file of dv.pages()) {
    if (file.type) {
        sources[file.source] = (sources[file.source] || 0) + 1;
    }
}

dv.table(["source", "count"],
        Object.entries(sources).map(([source, count]) => [source, count])
        );
```

```dataviewjs

dv.header(2, "source");

let tagSet = new Set(); // Create a Set to store unique tag values

// Loop through all pages (notes) in the vault
for (let page of dv.pages()) {
    // Check if the page has a 'tags' property
    if (page.source) {
        if (Array.isArray(page.source)) {
            page.source.forEach(tag => tagSet.add(tag));
        } else {
            tagSet.add(page.source);
        }
    }
}

// Display the unique sorted tags
dv.list([...tagSet].sort());

```
