# v-click-outside-vue3

Directive for Vue 3 to run a method when clicking outside the bound element, WITH TYPESCRIPT.

![npm (tag)](https://img.shields.io/npm/v/v-click-outside-vue3/latest?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/v-click-outside-vue3)
![npm](https://img.shields.io/npm/dy/v-click-outside-vue3)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/v-click-outside-vue3/peer/vue)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/vinccool96/v-click-outside-vue3)
![NPM](https://img.shields.io/npm/l/v-click-outside-vue3)

## Installation

### npm

```
npm install --save v-click-outside-vue3
```

### yarn

```
yarn add v-click-outside-vue3
```

### pnpm

```
pnpm i v-click-outside-vue3
```

## How to use

### For a single component

#### Composition API

```vue
<template>
  <main>
    <div v-if="visible" v-click-outside="customMethod" class="box" @click="counter++">BOX {{ counter }}</div>
    <br />
    <p>Outside of the box</p>
  </main>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import { clickOutside as vClickOutside } from "v-click-outside-vue3"

  const visible = ref(true)
  const counter = ref(0)

  function customMethod() {
    visible.value = false
  }
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background-color: red;
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 2rem;
    font-weight: 800;
  }
</style>
```

#### Options API

```vue
<template>
  <main>
    <div v-click-out-side="customMethod" @click="clickInside" class="box">
      BOX
    </div>
    <br />
    <p>Outside of the box</p>
  </main>
</template>

<script lang="ts">
  import { clickOutside } from "v-click-outside-vue3"

  export default {
    directives: {
      clickOutside,
    },
    props: {
      msg: String,
    },
    methods: {
      customMethod() {
        alert("You clicked outside the box!");
      },
      clickInside() {
        alert("You clicked inside the box!");
      },
    },
  }
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background-color: red;
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 2rem;
    font-weight: 800;
  }
</style>
```

### For the entire app

In your `main.ts`:

```ts
import { createApp } from "vue"
import "./style.css"
import { clickOutSide } from "v-click-outside-vue3"

import App from "./App.vue"

const app = createApp(App)

app.directive("click-outside", clickOutSide)

app.mount("#app")
```

In your components:

```vue
<template>
  <main>
    <div v-click-out-side="customMethod" @click="clickInside" class="box">
      BOX
    </div>
    <br />
    <p>Outside of the box</p>
  </main>
</template>

<!--The rest doesn't matter, since there's no need to import anything-->

<script lang="ts">
  export default {
    props: {
      msg: String,
    },
    methods: {
      customMethod() {
        alert("You clicked outside the box!");
      },
      clickInside() {
        alert("You clicked inside the box!");
      },
    },
  }
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background-color: red;
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 2rem;
    font-weight: 800;
  }
</style>
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
