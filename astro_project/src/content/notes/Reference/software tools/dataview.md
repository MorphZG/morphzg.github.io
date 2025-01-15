---
date: 
source: documentation
tags:
  - dataview
  - obsidian
  - plugin
title: Dataview plugin
type: reference
URL: https://blacksmithgu.github.io/obsidian-dataview/
status: useful
---

# Dataview plugin

## Overview

Dataview is a live **index and query engine**. You can add metadata to notes and query them with the **Dataview Query Language (DQL)**, you can list, filter, sort or group your data without affecting the actual notes. It keeps the queries up to date and always shows the updated data, no need to re-run the query.

Some of many possible use cases:
- Track your sleep by recording it in daily notes and automatically create weekly tables of your sleep schedule.
- Automatically collect links to books in your notes and render them all sorted by rating.
- Automatically collect pages associated with today's date and show them in your daily note.
- Find pages with no tags for follow-up, or show pretty views of specifically tagged pages.
- Create dynamic views which show upcoming birthdays or events recorded in your notes
- Much more...

>Dataview gives you a fast way to search, display and operate on indexed data in your vault. With high performance, it can scale up to hundreds of thousands of annotated notes without issue.

If the built in query language is insufficient for your purpose, you can run arbitrary `Javascript` against the [dataview API](https://blacksmithgu.github.io/obsidian-dataview/api/intro/), check out the online API reference.

>[!Dataview is about displaying, not editing]-
Dataview is meant for displaying and calculating data. It is not meant to edit your notes/metadata and will always leave them untouched.

## How to use Dataview

### Metadata and data indexing

- [Adding metadata](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/)
- [Data types](https://blacksmithgu.github.io/obsidian-dataview/annotation/types-of-metadata/)
- [Metadata on pages](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/)
- [Metadata on tasks and lists](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-tasks/)

Operates on metadata in your markdown files. Cannot read everything from the vault, only specific data from the [[01_Reference/software tools/YAML|YAML frontmatter]] or from the [inline fields](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/#inline-fields) via `[key::value]` syntax.

>Dataview will index information like tags, lists, data from the frontmatter and inline `[key::value]` fields. Only indexed data is available in a dataview query.

After [adding useful metadata](https://blacksmithgu.github.io/obsidian-dataview/annotation/add-metadata/) to markdown files, you will want to display it and operate on it. If your files and data changes, returned data will live-reload, printing relevant and updated information.

## Writing queries with DQL, inlines and javascript

REFERENCE (delete later) - https://blacksmithgu.github.io/obsidian-dataview/queries/dql-js-inline/

There are few different ways you can write a query. Using the **Dataview Query Language (DQL)** written as a codeblock or inline DQL statement. There is also most flexible but most complex way by utilising a **Javascript Query** and [Javascript API](https://blacksmithgu.github.io/obsidian-dataview/api/intro/). Each style requires different annotation.

>[!example]- Click to show more
>- DQL code blocks are separated from rest of the content. Opens with three backticks followed by a dataview annotation that will set a type of codeblock *```dataview*. Codeblock is closed with three backticks *```*
>- Inline DQL statement can be inserted into rest of the content with a single backtick followed by a equal sign prefix. Inline code to print the filename: *`= this.file.name`*, print the tag list *`= this.tags`*. Prefix can be configured to another token like `dv:` or `~` by changing the dataview settings under "Codeblock settings" > "Inline Query Prefix"
>- Javascript Query and Javascript API gives you the full power of Javascript allowing you to create arbitrarily complex queries and views. Dataview JS blocks are annotated as a *```dataviewjs* codeblock

### Dataview query language (DQL)

Similar to SQL language. Read about [differences to SQL](https://blacksmithgu.github.io/obsidian-dataview/queries/differences-to-sql/) to avoid confusion.

DQL query is created inside a codeblock that uses `dataview` as a type. It supports four different `query types` to produce different outputs. `LIST`, `TABLE`, `TASK` and `CALENDAR`.

>[!example]- Click to show more
>The following example is a `TABLE` query, showing `type` and `url` property values for all files with `#personal` tag. Switch to edit mode to preview the syntax.
>
> ```dataview
TABLE type AS "type", url AS "url" FROM #personal
SORT rating DESC
> ```

### Inline DQL statement

A Inline DQL uses a inline block format instead of a code block. If i type three backticks i will start the code block
```bash
# this is bash code block opened with a three ```backticks
export VARIBALE=value
```
Inline DQL statement is marked with a single backtick followed by an equal sign `=
You can reconfigure the settings to another token instead of equal sign under "Codeblock settings" - "Inline Query Prefix"

Switch to edit mode to preview the syntax of inline example
example: Today is `= date(today)` 

>[!example]- Click to show more
>Switch to edit mode to preview the syntax of inline example.
>The following example is an inline statement showing the properties of `this` object.
>
>The filename is `= this.file.name`
>Last modified time `= this.file.mtime`
>Current tags are `= this.tags`
>Value of type property is `= this.type`
>Value of source property is `= this.source`

You can either access the properties of the current note via `this` object `this.file.name`, or access different note via `[[link_to_note]].file.name`. Switch to edit mode to view the syntax:

example: `=[[_workflow]].file.name` is last modified `=[[_workflow]].file.mtime`

## Query language reference

- [Structure of a query](https://blacksmithgu.github.io/obsidian-dataview/queries/structure/)
- [Query types](https://blacksmithgu.github.io/obsidian-dataview/queries/query-types/)
- [Data commands](https://blacksmithgu.github.io/obsidian-dataview/queries/data-commands/)
- [Differences to SQL](https://blacksmithgu.github.io/obsidian-dataview/queries/differences-to-sql/)
- [Sources](https://blacksmithgu.github.io/obsidian-dataview/reference/sources/)
- [Expressions](https://blacksmithgu.github.io/obsidian-dataview/reference/expressions/)
- [Literals](https://blacksmithgu.github.io/obsidian-dataview/reference/literals/)
- [Functions](https://blacksmithgu.github.io/obsidian-dataview/reference/functions/)

## Javascript reference

- [Overview](https://blacksmithgu.github.io/obsidian-dataview/api/intro/)
- [Data arrays](https://blacksmithgu.github.io/obsidian-dataview/api/data-array/)
- [Codeblock reference](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/)
- [Codeblock examples](https://blacksmithgu.github.io/obsidian-dataview/api/code-examples/)

## Reference

- [[_dataview_database/index|dataview - index page]] - personal note
- [blacksmithgu.github/documentation](https://blacksmithgu.github.io/obsidian-dataview/) - official documentation
- [blacksmithgu.github/resources](https://blacksmithgu.github.io/obsidian-dataview/resources/resources-and-support/) - community resources
- [publish.obsidian.md/hub](https://publish.obsidian.md/hub/00+-+Start+here) - "Obsidian hub", community guides, workflows and courses
- [publish.obsidian.md/community_guides](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Community+Talks/YT+-+An+Introduction+to+Dataview) - "SkepticMystic's introduction to Dataview, video guide"
- [publish.obsidian.md/community_guides](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/An+Introduction+to+Dataview) - "SkepticMystic's introduction to Dataview, textual guide"
