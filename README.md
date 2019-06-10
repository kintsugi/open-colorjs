# @engyn/open-colorjs

![banner](https://yeun.github.io/open-color/asset/images/open-color.svg)

> Javascript wrapper of open-color

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [License](#license)

## Background

Open color is an open-source color scheme optimized for UI like font, background, border, etc.
This is a wrapper that exposes the color scheme through easy to use variables such as `colors.red0`

Useful if you want to use `open-color` with `styled-components`.

## Install

### Yarn

```
yarn add @engyn/open-colorjs
```

### NPM

```
npm install --save @engyn/open-colorjs
```

## Usage

```typescript
import OpenColor from "@engyn/open-colorjs";
import styled from "styled-components";

const colors = OpenColor();

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.blue5};
  color: ${colors.red2};
  margin: 0 1em;
  padding: 0.25em 1em;
`;
```

## Maintainers

[@engyn](https://github.com/engyn)

## License

MIT © 2019 Kyle Salter
