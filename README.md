<br />
<p align="center">
  <h3 align="center">React Components Collection</h3>

  <p align="center">
    Collection of react components built from ground up :smile:
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
-   Typescript for typing. AirBnb convention
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

First, to discuss structure and typing in the app.

-   files are sorted per usage. (alphabetically)
-   inside component folder you should have 2 files
    -   .component (`*.component.tsx`) and Storybook for showing component (`*.stories.js`)
    -   stylings go to scss folder (name it after component and import inside `App.scss`)
-   use `npm run build` to create build for testing (build process in run trough GitHub Actions)
-   use `npm run lint` to run linter with --fix param
-   use `npm run prettier` to run prettier

### Styling

For `.scss` files please use [BEM convention](http://getbem.com/). This keeps it readable, neat and understandable to other devs :smile:

#### What is BEM?

According to creator definition of BEM is as follows:

"BEM is a highly useful, powerful, and simple naming convention that makes your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict."

<b>BEM structure</b>

```scss
.block {
    //usually a wrapper that containes component
    position: relative;
    width: 100%;

    &--element {
        //this is how we define element inside of a block
        opacity: 0;

        &-modifier {
            opacity: 1;
            //modifier, such as "open", "disabled" ect
        }
    }
}
```

<b>Example of BEM usage</b>

```scss
.select {
    position: relative;
    width: 100%;

    &--header {
        position: relative;
        cursor: pointer;

        svg {
            fill: $black;
            transform: rotateX(0deg);
            transition: all 0.4s ease;
        }

        &-open {
            svg {
                transform: rotateX(180deg);
                fill: $blue;
            }
        }
    }
}
```

### Installation

1. Clone the repo
    ```sh
    https://github.com/markoarthofer22/react-components
    ```
2. Install NPM packages
    ```sh
    npm install
    ```

### Install lib from NPM

`npm i @markoarthofer22/react-components`

<!-- USAGE EXAMPLES -->

### Storybook

The project includes a [Storybook](https://storybook.js.org/) for developing and testing components in isolation.

To add a story for your component create a `*.stories.js` file. Preferably inside component you are creating

Additionaly you can add `knobs` (more on [knobs](https://storybook.js.org/addons/storybook-addon-knobs-color-options)) for adding props trough storybook UI

You can also manually add stories using the Storybook [`storiesOf` API](https://storybook.js.org/docs/formats/storiesof-api/)

## Usage

For starting Storybook on your localhost use

```sh
  npm run storybook
```

### List of components

These are some of the components that we have in mind. Will be populated over time with new ones. :smile:

#### Components

1.  Buttons :white_check_mark:
2.  Breadcrumbs :soon:
3.  Dropdown :white_check_mark:
4.  Input (default, phone, checkbox, radio) :white_check_mark:
5.  Global loader :white_check_mark:
6.  Popup :white_check_mark:
7.  Select :white_check_mark:
8.  Tooltip :white_check_mark:
9.  Alerts Box/Bar :soon:
10. Slider Bar :soon:
11. Switch Button :soon:
12. Avatar :soon:
13. Badges :soon:
14. Google Analyitcs Wrapper :white_check_mark:
15. Hamburger :white_check_mark:
16. Jump to top :white_check_mark:
17. Input (quantity) :white_check_mark:

#### Models

1.  Dialog :white_check_mark:
2.  Hero Box :white_check_mark:
3.  Notification Box :white_check_mark:
4.  Swiper :white_check_mark:
5.  Container :soon:
6.  List (wrapper for passed children) :soon:
7.  Social Network Cards (facebook | instagram | custom) - :white_check_mark:
8.  Accordion :soon:
9.  Share Socials - In planning
10. Side Navigation :soon:

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
