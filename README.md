<br />
<p align="center">
  <h3 align="center">React Components Collection</h3>

  <p align="center">
    Collection of react components build from ground up :smile:
    <br />
    <br />
    <br />
    <br />
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

Basic structure:

-   Collection of components written in ReactJS
-   Using StroyBook lib for presentation
-   Function based React, knowledge of Hooks is required
-   Grid system based on Bootstrap framework
-   Normalize copied from Bootstrap
-   Typscript for typing. AirBnb convention
-   All components made from scratch
-   Using linter and prettier for code consistency
-   Using [react-icons](https://react-icons.github.io/react-icons/) lib for icons (default in project is [Material](https://react-icons.github.io/react-icons/icons?name=md))

### Built With

-   [ReactJS](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Bootstrap](https://getbootstrap.com)
-   [StoryBook](https://storybook.js.org/)

<!-- GETTING STARTED -->

## Getting Started

First, to discuss structure and typing in app.

-   files are sorted per usage. (alphabetically)
-   inside component folder you should have 2 files
    -   .component (`*.component.tsx`) and Storybook for showing component (`*.stories.js`)
    -   stylings go to scss folder (name it after component and import inside `App.scss`)
-   use `npm run build` to create build for testing (build process in run trough GitHub Actions)
-   use `npm run lint` to run linter with --fix param
-   use `npm run prettier` to run prettier

### Installation

1. Clone the repo
    ```sh
    https://github.com/markoarthofer22/react-components
    ```
2. Install NPM packages
    ```sh
    npm install
    ```

<!-- USAGE EXAMPLES -->

### Storybook

The project includes a [Storybook](https://storybook.js.org/) for developing and testing components in isolation.

To add a story for your component create a `*.stories.js` file. Preferably inside component you are creating

You can also manually add stories using the Storybook [`storiesOf` API](https://storybook.js.org/docs/formats/storiesof-api/)

## Usage

For starting Storybook on your localhost use

```sh
  npm run storybook
```

### Components to do

These are some of the components that we have in mind. Will be populated over time with new ones. :smile:

1. Container (flex, bootstrap)
2. Alerts Box/Bar
3. Checkbox Input
4. Radio Input
5. Slider Bar
6. Switch button
7. List Wrapper (wrapper for passed children)
8. Content Card
9. Accordion
10. Avatar Icon
11. Badges

<!-- PUBLISH -->

## Publish

If you want to contribute to this project create your own branch and do your work there. When you are satasfied with what you did push your branch and create a PR.

We use GitHub Actions for running automated process, and husky for pre-commiting. If your code doesn't meet the requirements it will block you commit.

All upadates will regularly be pushed to npm package

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Marko Arthofer - [GIT](https://github.com/markoarthofer22)

Project Link: [https://github.com/markoarthofer22/react-components](https://github.com/markoarthofer22/react-components)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [axios](https://www.webpagefx.com/tools/emoji-cheat-sheet)
-   [swiperJS](https://swiperjs.com/)
-   [lodash](https://lodash.com/)
-   [sweetalert2](https://sweetalert2.github.io/)
-   [typescript](https://www.typescriptlang.org/)
-   [storybook](https://storybook.js.org/)
-   [react-icons](https://react-icons.github.io/react-icons/)
