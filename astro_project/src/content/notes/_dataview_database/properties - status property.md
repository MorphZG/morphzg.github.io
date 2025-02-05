---
tags:
  - dataview
  - index
title: Status property
---

# Status property

Stage of maturity or completeness of a note. Available values: `draft`, `useful`, `detailed`, `master`

#### Status: draft

- Notes still in a form of a placeholder or not not really useful. Provides zero value.

>[!quote]- dataview query
>
> ```dataview
> TABLE
>   status
> WHERE status = "draft" 
> ```

#### Status: useful

- Notes providing enough value to be useful.

>[!quote]- dataview query
>
> ```dataview
> TABLE
>   status
> WHERE status = "useful" 
> ```

#### Status: detailed

- Very detailed notes with more than enough information.

>[!quote]- dataview query
>
> ```dataview
> TABLE
>   status
> WHERE status = "detailed" 
> ```

#### Status: master

- Notes with "detailed" status will become "master" notes after being reviewed and analysed more than once.

>[!quote]- dataview query
>
> ```dataview
> TABLE
>   status
> WHERE status = "master" 
> ```
