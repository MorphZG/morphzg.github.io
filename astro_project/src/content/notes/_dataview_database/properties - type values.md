---
tags:
  - dataview
  - index
title: List of all values for type property
---

# List of all values for type property

```dataviewjs

dv.header(3, "Types and their count");

let types = {};
for (let file of dv.pages()) {
    if (file.type) {
        types[file.type] = (types[file.type] || 0) + 1;
    }
}

dv.table(["Type", "Count"], 
    Object.entries(types).map(([type, count]) => [type, count])
);

```

```dataviewjs

dv.header(3, "available types");

let typeSet = new Set(); // Create a Set to store unique type values

// Loop through all pages (notes) in the vault
for (let page of dv.pages()) {
    // Check if the page has a 'type' property
    if (page.tags) {
        // If the 'type' property is an array (common with tags), add each tag to the Set
        if (Array.isArray(page.type)) {
            page.type.forEach(tag => typeSet.add(tag));
        } else {
            // If 'type' is a single value, just add it to the Set
            typeSet.add(page.type);
        }
    }
}
// display the list of type values
dv.list([...typeSet].sort());
```
