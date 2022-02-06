<br />
<p align="center">
  <h3 align="center">React Components Collection </h3>

  <p align="center">
    Collection of react components built from ground up :smile:
    <br />
    <br />
    <br />
    <br />
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Basic structure:

-   Collection of components written in ReactJS
-   Monorepo created with [Lerna](https://lerna.js.org/)
-   Using StroyBook lib for presentation
-   Function based React, knowledge of Hooks is required
-   Normalize from [Infinum](https://github.com/infinum/emotion-normalize) :heart:
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

-   inside component folder you should have 2 files
    -   .component (`*.component.tsx`) and Storybook for showing component (`*.stories.tsx`)
    -   stylings go to scss folder (name it after component and import inside `App.scss`) => **legacy**
    -   Changed from css to JSS (emotion)
    -   stylings now go to `styles.ts`, styles are now scoped to component
-   use `npm run build` to create build for testing (build process in run trough GitHub Actions)
-   use `npm run lint` to run linter with --fix param
-   use `npm run prettier` to run prettier

### Development

All commands can be run from individual packages, but it is not necessary to do so.

-   Run `npm run prepare:local` at the project root to install the dev dependencies and link them to each other.

On some systems, `npx lerna bootstrap` may fail with an error `Unexpected end of JSON input while parsing near '...-imports":"^7.7.0","@'` - in this case, try running `npm cache clean --force`

To run storybook locally `npm start`.

To add a new element, copy the template to the src/elements directory, update the package.json with the name and add your source code.

### Styling

~~For `.scss` files please use [BEM convention](http://getbem.com/). This keeps it readable, neat and understandable to other devs :smile:~~

For styling we now use JSS ([emotion](https://emotion.sh/docs/introduction)). Each style is scoped to its own component.

Global styles are added to themes folder, where you can find `<GlobalThemeProvider/>` component. Variables are inside _theme/styles.js_

#### Important

Every component and model has `className` prop which you can add. This prop will rename base of every class inside component.

If you set `className` to "select-new" output will be as follows (select component):

```jsx
<div
    // default is 'select'
    css={SelectStyles(theme)}
    className='select-new'
    ref={mainInput}
>
    <div
        className={`select-new--header ${
            isOpen ? `select-new--header-open` : ''
        } `}
        onClick={(e) => {
            toggleDropdown(e);
        }}
    >
        ...
    </div>
</div>
```

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
            fill: theme.colors.black;
            transform: rotateX(0deg);
            transition: all 0.4s ease;
        }

        &-open {
            svg {
                transform: rotateX(180deg);
                fill: theme.colors.blue;
            }
        }
    }
}
```

### `Typings`

For Typescript types use interfaces. Respect naming convention. All of your types should start with a capital "I". Also, if you are creating interface for component props they should end with "Props"

<b>Good Example</b>

```ts
interface IComponentProps {
    propOne: string,
    propTwo: number
    ...
}
```

### `Linter and prettier`

Prettier uses common rules to keep indent and other structural features clean. More on [Prettier package](https://prettier.io/)

Linter is used for enforcing code style. Here we use lightly modified [Airb'n'b convention](https://github.com/airbnb/javascript/tree/master/react) with @typescript-eslint rules

### `Component writing`

All of the components/models/pages are typed, so use `.tsx` extension when adding new.
Also we enforce functional coding.

Here is a good example of how to add a new component/model/page

```jsx
    // dont forget to add, so you can use emotion css prop
    /** @jsxImportSource @emotion/react */
    // import packages
    import React, {useEffect, useState} from "react";
    import { useTheme } from "emotion"

    import { stylesObj } from "./styles"

    // define prop types
    interface IComponentProps {
        propOne: string,
        propTwo: number
    }

    // add named export for storybook support (for args table)
    export const Component: React.FC<IComponentProps> = (props): JSX.Element => {
        // define theme hook
        const theme = useTheme()

        // define your state
        const [stateObj, setStateObj] = useState<type T>(initial value)

        // define your const
        const a = val

        // define functions
        const function = (): returnType | any | void => {
            // do something
        }

        // add lifecycle hook
        useEffect(()=>{
            // do something
        },[])

        return <div>Some markup</div>
    }

    export default Component

```

### `Precommiting`

We use [Husky](https://github.com/typicode/husky) for precommit, so you don't need to worry about your code before review

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

To add a story for your component create a `sandbox.stories.tsx` file. You can create file in `stories/` folder in a root of a package.

~~Additionaly you can add `knobs` (more on [knobs](https://storybook.js.org/addons/storybook-addon-knobs-color-options)) for adding props trough storybook UI.

You can also manually add stories using the Storybook [`storiesOf` API](https://storybook.js.org/docs/formats/storiesof-api/).~~

**THIS IS DEPRECATED**

After updating to Storybook 6.4 we are using [`controls` API](https://storybook.js.org/docs/react/essentials/controls) and [`args` API](https://storybook.js.org/docs/react/writing-stories/args)

For easier development and maintenance **you must add** `development.mdx` file where you will describe your component. For templating you can copy stories and docs from other packages! [SEE DOCS](https://storybook.js.org/docs/react/writing-docs/docs-page#with-mdx-documentation) and [MDX USAGE](https://storybook.js.org/docs/react/writing-docs/mdx)

## Usage

For starting Storybook on your localhost use

```sh
    npm start
```

### List of components

These are some of the components that we have in mind. Will be populated over time with new ones. :smile:

#### Components

1.  Buttons :white_check_mark:
2.  Breadcrumbs :white_check_mark:
3.  Dropdown :white_check_mark:
4.  Input (default, phone, checkbox, radio) :white_check_mark:
5.  Global loader - removed
6.  Popup :white_check_mark:
7.  Select :white_check_mark:
8.  Tooltip :white_check_mark:
9.  Alerts Box/Bar :soon:
10. Slider Bar :white_check_mark:
11. Switch Button :white_check_mark:
12. Avatar :white_check_mark:
13. Badges :white_check_mark:
14. Google Analyitcs Wrapper :white_check_mark:
15. Hamburger :white_check_mark:
16. Jump to top :white_check_mark:
17. Input (quantity) :white_check_mark:
18. Modal :white_check_mark:
19. Table - In planning
20. Grid :white_check_mark:

#### Models

1.  Dialog :white_check_mark:
2.  Hero Box :white_check_mark:
3.  Notification Box :white_check_mark:
4.  Swiper - removed
5.  Container :soon:
6.  List (wrapper for passed children) :soon:
7.  Social Network Cards (facebook | instagram | custom) - :white_check_mark:
8.  Accordion :soon:
9.  Share Socials - In planning
10. Side Navigation :soon:

<!-- PUBLISH -->

## Publishing

**Do not do this until you are ready to merge and your PR has been approved!** Justification below.

To preview which packages have changed, you can run `npx lerna changed` without publishing.

Once happy with the code changes, run `npx lerna version` and bump the versions accordingly.

Lerna will generate a publish commit. Push that commit to your remote branch and once it gets merged to master, CI will publish the new versions to `npm`.

## Build test

If you want to build locally just run `npm run build`

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
-   [emotion](https://emotion.sh/docs/introduction)
-   [emotion/normalize](https://github.com/infinum/emotion-normalize)
