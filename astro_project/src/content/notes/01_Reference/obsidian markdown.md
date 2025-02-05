---
tags:
  - obsidian
  - markdown
title: Obsidian markdown
---

# Obsidian markdown

Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. While Markdown’s syntax has been influenced by several existing text-to-HTML filters, the single biggest source of inspiration for Markdown’s syntax is the format of plain text email.

There are multiple flavours of markdown but all of them have a lot in common, if you learn one, you will know all the others. Differences come from different publishing platforms where some of them implement few additional syntax styles. In a world of web developers and other similar breeds, you will most likely follow the github flavoured markdown which is used by a same platform for open source collaboration and code sharing.

Today i will learn more about Obsidian version. Will not go into much detail since 90% of all markdown follows the same formatting style. I will cover only Obsidian specific syntax or something i found useful to write down as a future reference. With that in mind i must add that Obsidian supports [CommonMark](https://commonmark.org/), [Github flavoured markdown](https://github.github.com/gfm/) and something mostly used in scientific circles, [LaTeX](https://www.latex-project.org/).

>By using a community plugin **importer**, it is possible to import an HTML web page or notes from another note taking app, convert it to markdown and save it in your Obsidian vault. Just browse the community plugins and search for "importer". Here is a link to [github.com/repository](https://github.com/obsidianmd/obsidian-importer).

## Internal and Outgoing links

Obsidian uses wiki style linking for internal links between notes in a local vault by enveloping the link between double brackets `[[ ]]`, by adding a pipe symbol `|` as a separator you can change the display text `[[ | ]]`, by adding `#` you can link to specific heading or subtitle in a note.

Outgoing links to external sources are written with `[display_text](http://link_to_webpage.com)`

```markdown
wiki style link for internal linking
[[link_to_file | alternative diplay text]]

link to heading
[[#heading_title]]

external link:
[search engine](https://google.com)
```

>Obsidian will automatically update the links if you move files from one location to another

## Embed files

Create a dedicated folder for assets like images or other files you would like to embed into your notes. I like to prefix  such "special" directories with underline, like `_assets`, `_templates`, `_calendar`...

To embed an image, pdf file, another note or even an audio file, add exclamation mark in front of standard internal link: `![[ link_to_file ]]`. As soon as you open the brackets and start typing, obsidian will try to find the file you are looking for, no need to remember everything, only a single word is enough to find what you are looking for. Uses fuzzy find method so you don't have to type exact file name.

```wiki
![[_assets/image_diagram.png]]          - embed image
![[_assets/image_diagram.png|640x480]]  - change height x width
![[_assets/image_diagram.png|480]]      - keep original aspect ratio by changing the width

![[Document.pdf]]                       - embed .pdf file
![[Document.pdf#page=3]]                - open a specific page in the .pdf
![[Document.pdf#height=400]]            - specify max height for the embedded pdf viewer
```

## Heading and block links

A block is a unit of text in your note, such as paragraph, block quote or list item. You can link to a block by adding ^ at the end of link destination followed by a block identifier. You don't need to know the ID, when you type the caret ^, you can select the block from a drop down list.

Open the double brackets and start typing the note name, when you find the note in a drop down insert the caret ^ and another list will show up with a list of available text blocks. To link a particular header type the hash # instead of a header.

>[!info]-
>Every time you open the double brackets and you see a list of available links, at the bottom of a list will be listed possible options:
> - "Type # to link heading"
> - "Type ^ to link blocks"
> - "Type | to change display text"

## Footnotes

You can add footnotes[^1] using the following syntax: ^55fc59

```
This is a simple footnote[^1].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.
```

^3002a2

## Task list

- [+] Completed
- [ ] Todo
- [x] Canceled

## Callouts

>[!basic callout]+
These are called Callouts, you can read more about how to format them by following the link: [help.obsidian.md/callouts](https://help.obsidian.md/Editing+and+formatting/Callouts). To see the formatting, switch to edit source mode.

>[!tip]-
I can modify the type of a callout by changing the keyword inside a brackets.

>[!faq]-
Callouts can be foldable, like this one.

>>[!todo]- Todo, click to show more
But can also be nested by adding additional greater than symbol ">"

>>>[!example]+
Callouts can be expanded by default, just add plus symbol "+" instead of "-".

>[!example]+ Example callout with custom title
After a callout keyword between brackets, you can add custom title separated by whitespace for every type of callout. Basic blue callouts displays custom title by default.

>[!abstract]+
>For more information on how to format different callouts, check out the official documentation at:
>[help.obsidian.md/callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)

>it is also possible to add highlight blocks like this one

>[!danger]-
>For more information on how to format different callouts, check out the official documentation at:
>[help.obsidian.md/callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)

>[!warning]-
>For more information on how to format different callouts, check out the official documentation at:
>[help.obsidian.md/callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)

>[!quote]-
>For more information on how to format different callouts, check out the official documentation at:
>[help.obsidian.md/callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)

### Customise callouts

[CSS snippets](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) and community plugins can define custom callouts or even overwrite the default configuration. To define a custom callout, create the following CSS block:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

- The value of the `data-callout` attribute is the type identifier you want to use, for example `[!custom-question-type]`.
- `--callout-color` defines the background color using numbers (0-255) for red, green and blue.
- `--callout-icon` can be an icon ID from [lucide.dev](https://lucide.dev/), or an SVG element `--callout-icon: '<svg>...custom svg...</svg>';`

### References

- [publish.obsidian.md/community_hub](https://publish.obsidian.md/hub/00+-+Start+here) - Community guides, workflows and courses. Downloadable vault
- [help.obsidian.md](https://help.obsidian.md/Home) - "Official Obsidian help site"
- [daringfireball.net/article](https://daringfireball.net/projects/markdown/) - "Full documentation of Markdown's syntax and configuration options."
- [docs.github/documentation](https://docs.github.com/en/get-started/writing-on-github) - "Writing on Github with github flavored markdown"
- [youtube.com/channel](https://www.youtube.com/@linkingyourthinking) - Linking your thinking
- [github.com/awesome_obsidian](https://github.com/kmaasrud/awesome-obsidian) - Curated list of awesome themes and plugins
- [youtube.com/playlist by Effective](https://www.youtube.com/playlist?list=PLrI2d6gSaO9BCd8HjgkSY1yd50nyfxYpN)

[^1]: This is a footnote. It is positioned just below the following codeblock. In reading mode it will be visible at the bottom of a page. If you switch to edit, you can see the syntax and it's original location.
