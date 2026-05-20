# Luvi

Luvi is a closed-source Windows desktop workspace for project managers and small teams. The public repository exists only for the Luvi website and release downloads.

## Distribution

- Website: https://arish-devz.github.io/Luvi/
- Installer distribution is handled outside public GitHub Releases.

## What Luvi Does

Luvi brings projects, tasks, team chat, direct messages, file previews, goals, inbox requests, and settings into one desktop app. It is designed around a fast manager workflow: create a project, get a dedicated project chat room, assign work, track goals, and keep team requests inside the app.

## Release Policy

Application source code is not published in this repository.

This repository intentionally contains only:

- The public Luvi landing page in `docs/`
- A short README
- No app source code
- No installer committed to git

Installer files are not committed to git and are not published through GitHub Releases because GitHub automatically exposes source archives for every tagged release.

## Auto Updates

Luvi uses signed update metadata. The desktop app checks the configured update channel and installs newer signed builds automatically.

## Current Release

`v1.0.2`

This release includes ownership transfer cleanup, attachment previews, avatar rendering fixes, live chat refresh fixes, and a cleaner project context menu.
