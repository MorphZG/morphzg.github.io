---
tags:
  - dataview
  - index
title: ""
---

## List of all values for tags property

```dataviewjs
dv.header(3, "Tags and their Count");

let tagMap = new Map(); // Create a Map to store tags and their counts

// Loop through all pages (notes) in the vault
for (let page of dv.pages()) {
    // Check if the page has a 'tags' property
    if (page.tags) {
        // If 'tags' is an array (common for multiple tags), add each tag to the map
        if (Array.isArray(page.tags)) {
            page.tags.forEach(tag => {
                // Increment the count for this tag in the map
                tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
            });
        } else {
            // If 'tags' is a single value, increment its count in the map
            tagMap.set(page.tags, (tagMap.get(page.tags) || 0) + 1);
        }
    }
}

// Convert the Map to an array of rows and display as a table
dv.table(
    ["Tag", "Count"], // Table headers
    [...tagMap.entries()].sort().map(([tag, count]) => [tag, count]) // Table rows
);

```

```dataviewjs

dv.header(3, "available tags");

let tagSet = new Set(); // Create a Set to store unique tag values

// Loop through all pages (notes) in the vault
for (let page of dv.pages()) {
    // Check if the page has a 'tags' property
    if (page.tags) {
        // If the 'tags' property is an array (common with tags), add each tag to the Set
        if (Array.isArray(page.tags)) {
            page.tags.forEach(tag => tagSet.add(tag));
        } else {
            // If 'tags' is a single value, just add it to the Set
            tagSet.add(page.tags);
        }
    }
}

// Display the list of unique tags
dv.list([...tagSet].sort());
```
