---
tags:
  - obsidian
  - index
  - workflow
title: Literature notes - structure
---

# Literature notes - structure

## Prepare before reading

- Set a purpose, think about important concepts you hope to learn. It will help you focus on relevant information.
- Create a template, use consistent format and sections for each chapter:

>There are many different literature types so following the same format style in self improvement books and technical literature is not what we aim for. It is important that any single note have defined structure and format. When starting a literature note, define the style and format early on and stick to it.

### Technical literature, proposed structure

Every time new file is created under the `03_Literature_notes` directory, `Templater` plugin will use the following template to generate default file structure: [[_templates/literature_note_template|literature_note_template]]

```md
---
author: 
date: 
source: 
status: 
tags: []
title: Book title
type: literature_note
URL: 
---

# Book title

> [!abstract]- book metadata
Title:
Author:
Pub date:
Publisher:
ISBN:
Language:
Pages:
Weight:
Height:
Width:
Cover:

## First Chapter
### Key concepts
### Questions, concepts to explore
### Personal thoughts
### Examples or code snippets
### Chapter summary
### References or additional reading materials

## Second Chapter
(repeat the structure)
```

## Active reading during the session

- Highlight key points. Focus on important definitions, concepts and examples. Avoid highlighting too much.
- Write in your own words and summarise concepts instead of copy and paste.
- Note down questions that arise while reading.
- Capture examples, code snippets or important workflows. Technical literature often includes examples that clarify the concept. Note them together with annotations about why they work.
- Include questions to challenge yourself later:
  - What problem does this solve?
  - Why is this approach better than alternatives?
  - How can i apply this?

## After reading session

- Organise your notes and transfer raw notes into structured format with clear section headings, tags and rest of metadata.
- Link related ideas and concepts. Use backlinks or references to connect ideas across different notes.
- Write a summary using your own words.

## Review and iterate

- Technical books often require multiple passes. Skim through to get an overview. Try testing your understanding.
- Your notes also require periodical reviews. Include inbound links to connect with new notes or links to new outbound materials you found elsewhere.
- By combining tags, automation, spaced reviews and structured workflow, you can efficiently manage growing vault and ensure nothing gets forgotten or put aside for to long.

>Use metadata properties like `[tags: important]` or `[review: true]` to mark notes you would like to review later. `Dataview` query or just a regular search can return all such notes.

## Read more

- [[00_Fleeting_inbox/reading books|How to read books]] - personal note
- [[02_Ideas_and_projects/ideas/maps of content|Maps of content]] - personal note
- [[_workflow|Note taking workflow]] - personal note
