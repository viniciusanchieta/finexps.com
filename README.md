![image](https://user-images.githubusercontent.com/31235308/201514264-80aeaa07-515c-4549-9f50-abc6b309e945.png)

<h1 align="center">FINEXPS</h1>

<p align="center" margin-top="25px" >
  <img src="https://img.shields.io/badge/Status-Development-red" alt="Status: Development" />
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/viniciusanchieta/expenses?color=blueviolet">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/viniciusanchieta/expenses?color=blueviolet">

  <img alt="GitHub" src="https://img.shields.io/github/license/viniciusanchieta/expenses?color=blueviolet">
</p>

## About

This project is a simple expenses manager, where you can add, edit and delete expenses.

## Status

- [x] Create the project with Next.JS v.13
- [x] Create structure of the project
- [x] Create the components with styles
  - [x] Common components
    - [x] Create documentation of the components with Storybook
- [x] Create the pages
  - [x] Page account postings
  - [x] Page login
  - [x] Page register
- [ ] Create the routes
  - [x] Route of register
  - [ ] Route of login
  - [ ] Route of authentication
  - [ ] Route of account postings
- [ ] Create the email's template
  - [ ] Template activate account
- [ ] Deploy the project (beta version) on Vercel

## Structure

The structure of the project is based on the DDD (Domain Driven Design) pattern, where the domain is divided into layers, each with its own responsibility.
Layers:

- Application: responsible for the application's business rules.
- Domain: responsible for creating the domain entities.
- Infra: responsible for the data access layer.
- Main: responsible for the application's entry point.
- Presentation: responsible for the application's presentation layer.

## Technologies

This project was developed with the following technologies:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Yarn](https://yarnpkg.com) or [NPM](https://www.npmjs.com)
- [Husky](https://typicode.github.io/husky/#/)
- [Storybook](https://storybook.js.org)
- [React Email](https://react.email/)

## Getting started

Clone the project and access the folder.

```bash
$ cd finexps.com
```

Duplicate the `.env.example` file and rename it to `.env` and fill in the variables:

<!-- create table with variables -->

| Variable     | Description  | Example                                             |
| ------------ | ------------ | --------------------------------------------------- |
| DATABASE_URL | Database URL | postgres://postgres:postgres@localhost:5432/finexps |
| JWT_SECRET   | Secret key   | 123456                                              |

Follow the steps below:

```bash
# Install the dependencies
$ yarn install
# or
$ npm install
```

```bash
# Start the project
$ yarn dev
# or
$ npm run dev
```

Extra step for running tests:

```bash
# Run the tests
$ yarn test
# or
$ npm run test
```

Coverages:

```bash
# Run the tests
$ yarn test:ci
# or
$ npm run test:ci
```

Components documentation:

```bash
$ yarn storybook
# or
$ npm run storybook
```

Preview of emails with (React Email)[https://react.email/]:

```bash
$ yarn start:email
# or
$ npm run start:email
```

## Contributors

[![](https://contrib.rocks/image?repo=viniciusanchieta/generate-component-and-style)](https://github.com/viniciusanchieta/generate-component-and-style/graphs/contributors)

## License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
