<template>
  <main>
    <div v-if="visible" v-click-outside="customMethod" class="box" @click="counter++">BOX {{ counter }}</div>
    <br />
    <p>Outside of the box</p>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { clickOutside } from "../src"

const vClickOutside = clickOutside

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
