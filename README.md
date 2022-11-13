![image](https://user-images.githubusercontent.com/31235308/201514264-80aeaa07-515c-4549-9f50-abc6b309e945.png)

<h1 align="center">Expenses</h1>

<p align="center" margin-top="25px" >
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/viniciusanchieta/expenses?color=blueviolet">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/viniciusanchieta/expenses?color=blueviolet">

  <img alt="GitHub" src="https://img.shields.io/github/license/viniciusanchieta/expenses?color=blueviolet">
</p>

## About

This project is a simple expenses manager, where you can add, edit and delete expenses.

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

## Getting started

Clone the project and access the folder.

```bash
$ cd expenses
```

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

## Contributors

[![](https://contrib.rocks/image?repo=viniciusanchieta/generate-component-and-style)](https://github.com/viniciusanchieta/generate-component-and-style/graphs/contributors)

## License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
