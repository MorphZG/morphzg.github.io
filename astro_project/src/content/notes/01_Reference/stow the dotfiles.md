---
tags:
  - dotfiles
  - linux
  - utility
title: Understanding stow
---

# Understanding stow

GNU Stow can be described as a symlink farm manager, it can mirror the structure of one directory into another by creating symbolic links back to the original files. ^ef3b67

This is extremely useful when you have a directory full of configuration files that is managed by git and you want to send all of those configuration files to where they belong in your home directory.

Few important concepts to understand. Can find them in Terminology documentation.

- a package is a folder containing related dotfiles. (vim, bash, git...)
- a stow directory is a folder containing one or more packages.
- target directory is the location in which a package's contents will be symlinked. (usually $HOME directory)

**This is how it looks in practice:**

```sh
target-directory
    stow-directory
        package-1
            .dotfile1
        package-2
            .dotfile2
            .dotfile3

$HOME           --->    (target-directory)
    dotfiles    --->    (stow-directory)
        bash    --->    (package)
            .bashrc     (dotfile)
            .bash_aliases
        git
            .gitconfig
```

>By default stow ignores some files and directories but you can set your own rules by creating the `.stow-local-ignore` file

## read more

- [systemcrafters.net/blogpost](https://systemcrafters.net/managing-your-dotfiles/using-gnu-stow/) "Using GNU Stow to manage symbolic links"
- [gnu.org/manual](https://www.gnu.org/software/stow/manual/) GNU stow manual
- [youtube.com/video](https://www.youtube.com/watch?v=y6XCebnB9gs) "Stow has forever changed the way i manage my dotfiles" by Dreams of autonomy
- [youtube.com/video](https://www.youtube.com/watch?v=FHuwzbpTTo0) "Manage your dotfiles like a superhero" by Jake Wiesler
- [jakewiesler.com/blogpost](https://www.jakewiesler.com/blog/managing-dotfiles) Understanding stow
- [youtube.com/video](https://www.youtube.com/watch?v=CFzEuBGPPPg) "Sync your .dotfiles with git and GNU Stow like a pro" by DevInsideYou
- [youtube.com/video](https://www.youtube.com/watch?v=CxAT1u8G7is) "Give your dotfiles a home with GNU stow" by System crafters
