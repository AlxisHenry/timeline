<a name="readme-top"></a>

<div align="center">

  <img src="https://cdn.alexishenry.eu/shared/images/logo.png" alt="logo" width="220" height="auto" />
  <h1>Github Timeline</h1>
  
  <p>
    Github repositories timeline made with :heart:
  </p>

<a href="https://alxishenry.github.io/docs"><strong>Documentation »</strong></a>

<h4>
    <a href="https://timeline.alexishenry.eu">Go to the site</a>
  <span> · </span>
    <a href="https://github.com/AlxisHenry/timeline/issues">Report a bug</a>
  <span> · </span>
    <a href="https://github.com/AlxisHenry/timeline/issues">I have an idea</a>
  </h4>
</div>

<br />

# :notebook_with_decorative_cover: Summary

- [About the project](#star2-about-the-project)
  * [Techs](#space_invader-techs)
- [Getting Started](#toolbox-getting-started)
  * [:gear: Setup](#gear-setup)
  * [:gear: Configuration](#gear-config)
  * [:test\_tube: Tests](#test_tube-tests)
- [Contributors](#wave-authors)

## :star2: About the project

This project is built with React and Typescript. It uses the Github API to fetch the repositories of a user and display them in a timeline. It use **Vitest** for testing and **Vite** for building.

### :space_invader: Techs

[![Typescript](https://img.shields.io/badge/typescript%20-%23323330.svg?&style=for-the-badge&logo=typescript&logoColor=3178C6&color=gray)]()
[![React](https://img.shields.io/badge/react%20-%23323330.svg?&style=for-the-badge&logo=react&logoColor=61DAFB&color=gray)]()
[![Node.js](https://img.shields.io/badge/node.js%20-%23323330.svg?&style=for-the-badge&logo=node.js&logoColor=339933&color=gray)]()
[![Shell](https://img.shields.io/badge/bash%20-hotpink.svg?&style=for-the-badge&logo=gnu-bash&logoColor=4EAA25&color=gray)]()

## :toolbox: Getting Started

### :gear: Setup

**Clone the repository**

```bash
$ git clone https://github.com/AlxisHenry/timeline.git
```

### :gear: Configuration

**Configure github credentials**

```diff
- GH_TOKEN=<your_github_token>
- GH_USER=<your_github_username>
- GH_TEST_REPOSITORY=<your_github_test_repo>
+ GH_TOKEN=<your_github_token>
+ GH_USER=alxishenry
+ GH_TEST_REPOSITORY=alexishenry.eu
```

**Configure Github token in Timeline component**

*Go to src\components\Timeline.tsx and edit line 24.*

```diff
- "Authorization": `Token <your_github_token>`
+ "Authorization": `Token <your_github_token>`
```

### :test_tube: Tests

**Run tes tests using the following command :**

```bash
$ npm run tests || npx vitest
```

## :wave: Contributors

* **Alexis Henry** _alias_ [@AlxisHenry](https://github.com/AlxisHenry)

<!-- ## :page_with_curl: Liens utiles -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>
