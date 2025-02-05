---
tags:
  - git
  - workflow
  - devops
title: Git workflows
---

# Git workflows

There are several workflows related to git. `git flow` and `github flow` with slight variations are two most used workflows.

## Git flow

Create 2 starting branches, **main** and **development**. Main branch is the one in production while development is the one we are continuously working on. For every new feature we branch out of development branch into the **feature** branch. If we need some critical updates or hotfixes for production we will create **hotfix** branch from the main. Why not branch the hotfix from development? Because development probably have some changes we are still working on and not ready for commit. Hotfix will merge back to main but also merge to development branch as well.

![[_assets/git-flow-diagram.png]]

While working on a new features it is important to have separate branches for each feature.

## Read more

- [[00_Fleeting_inbox/git reference|git reference]] - Personal note
