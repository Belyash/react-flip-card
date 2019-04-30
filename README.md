# Overview

This component is designed to render an awesome flip card component.

See [demo](https://belyash.github.io/react-flip-card/)

## Basic Usage

First of all, remember to import the component.

```jsx
import React from "react"

import { FlipCard } from "react-flip-card"

function Application() {

  return (
    <FlipCard caption="Flip card caption" height={300} width={200}>
      Text on the back of the card.
    </FlipCard>
  );

}
```