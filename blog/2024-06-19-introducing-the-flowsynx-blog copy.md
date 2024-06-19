---
slug: flowsynx-v0.2.0-is-now-available
title: FlowSynx v0.2.0 is now available
authors: maintainers
tags: [Release]
---

We are super excited to announce the latest release of FlowSynx, v0.2.0! This post covers the highlights of the new features and enhancements in FlowSynx v0.2.0.

## Release highlights
If you’re new to FlowSynx, familiarize yourself by visiting the [getting started](/docs/category/getting-started) page.

### FlowSynx
- [ADDED] Add Microsoft Azure Blob storage plugin [1](https://github.com/flowsynx/flowsynx/issues/1)
- [ADDED] Add OpenAPI specifications to the flowsynx [4](https://github.com/flowsynx/flowsynx/issues/4)
- [ADDED] Pushing FlowSynx to the Docker hub
- [FIXED] Refactoring **SpecificationsParser** class in order to check require member's value [7](https://github.com/flowsynx/flowsynx/issues/7)
- [FIXED] Change throw exception to logging message for DeleteAsync method in plugins #11 [12](https://github.com/flowsynx/flowsynx/issues/12)
- [FIXED] Add ContentType to the ReadAsync API endpoint [13](https://github.com/flowsynx/flowsynx/issues/13)
- [FIXED] Make CopyFile, CopyDirectory, MoveFile, and  MoveDirectory methods in EntityCopier and EntityMover as asynchronous [14](https://github.com/flowsynx/flowsynx/issues/14), [15](https://github.com/flowsynx/flowsynx/issues/15)
- [FIXED] Fix issue regarding FlowSynx build and publish workflow action [16](https://github.com/flowsynx/flowsynx/issues/16)
- [FIXED] Fix warning messages in FlowSynx.Plugin.Storage.Azure.Blobs plugin [18](https://github.com/flowsynx/flowsynx/issues/18) 

### FlowSynx CLI
- [ADDED] Add OpenApi option to the run arguments for running FlowSynx [3](https://github.com/flowsynx/cli/issues/3)

### FlowSynx Dashboard
- [ADDED] Pushing FlowSynx Dashboard to the Docker hub

### FlowSynx C# SDK
- [ADDED] Adding License to the SDK NuGet package [1](https://github.com/flowsynx/csharp-sdk/issues/1)