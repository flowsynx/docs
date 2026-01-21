# GenoFlow documentation and blog

[![License: MIT][mit-badge]][mit-url]

[mit-badge]: https://img.shields.io/github/license/flowsynx/docs?style=flat&label=License&logo=github
[mit-url]: https://github.com/genoflow/docs/blob/master/LICENSE

If you are looking to explore the GenoFlow documentation, please go to the documentation website:

https://genoflow.io

This repo contains the markdown files which generate the above website. See below for guidance on running with a local environment to contribute to the docs.

## Overview
The GenoFlow docs and blog are built using **Docusaurus**, hosted on an Github page.

The genoflow docs directory contains the docusaurus project, markdown files, and theme configurations.

## Setup on local machine

### Pre-requisites
* Node.js

### Environment setup
1. Ensure pre-requisites are installed.
2. [Fork](https://github.com/genoflow/docs/fork) and clone this repository.
3. Go to the cloned repository directory.
4. Open the forked repository in VS Code
```
  code .
```

5. Install npm packages:
 ```
 npm install --global docusaurus-init
 ```

 ```
 npm install
```

## Running the development server
1. Make sure you're in the root directory.
2. Run
```
npm run start
```
By default, a browser window will open at http://localhost:3000.