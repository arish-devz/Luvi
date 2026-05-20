# Luvi

Luvi is a closed-source Windows desktop workspace for project managers and small teams.

This public repository is website-only. It exists to host the Luvi product site through GitHub Pages and does not contain application source code, installer binaries, or release tags.

## Website

https://arish-devz.github.io/Luvi/

## Pages

- Home: product overview and app preview
- Features: boards, chat, inbox, goals, files, and settings
- Demo: interactive website-only walkthrough of key Luvi states
- Workflow: how a team moves through Luvi
- Security: closed-source and release policy
- Download: private installer access information

## Repository Rules

The Luvi app is closed-source. This repository must never contain:

- React source for the app
- Rust/Tauri source for the app
- Build configuration for the private app
- Installer binaries
- Release tags that generate public source archives

Installer distribution is handled outside public GitHub Releases because GitHub automatically displays source archives for every tagged release.

## Public Contents

This repository intentionally contains only:

- `docs/` static website files
- website logo asset
- this README
- `.gitignore`

## Current App Version

Luvi desktop app: `1.0.2`
