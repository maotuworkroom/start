<script lang="ts" setup>
import { current, icons, set } from "@/assets/script/engine";
import { background } from "@/assets/script/config";
import { ref } from "vue";

const status = ref(false);
</script>

<template>
  <svg class="button" @click="status = true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <title>Settings</title>
    <path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="rgba(255,255,255,.9)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
  </svg>
  <div class="window" :class="{'active': status}">
    <h1 class="title">Settings</h1>
    <svg xmlns="http://www.w3.org/2000/svg" class="close" @click="status = false" viewBox="0 0 512 512">
      <title>Close Settings</title>
      <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/>
    </svg><br>
    <div class="row">
      <div class="column">
        <label>Background</label>
        <input type="url" v-model="background" placeholder="Input the background url.">
      </div>
      <div class="column"><label>Search Engine Preference</label></div>
      <div class="column">
        <div 
            class="engine" 
            v-for="(inner, name, index) in icons" 
            :class="{'selected': current === index}" 
            v-html="inner" 
            @click="set(index)"
        ></div> 
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
}

.button {
  position: absolute;
  cursor: pointer;
  padding: 4px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255,255,255,.2);
  backdrop-filter: blur(10px);
  top: 26px;
  right: 26px;
  transition: .45s;
}

.button:hover {
  rotate: 90deg;
}

.window {
  position: absolute;
  padding: 26px;
  top: 50%;
  left: 50%;
  transition: .5s;
  transform: translate(-50%, -50%);
  width: calc(100% - 52px);
  height: calc(100% - 52px);
  background: rgba(24,24,24,.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  max-width: 640px;
  z-index: -64;
  opacity: 0;
}

.window.active {
  z-index: 64;
  opacity: 1;
}

.window svg.close {
  position: absolute;
  padding: 2px;
  width: 26px;
  height: 26px;
  right: 8px;
  top: 12px;
  cursor: pointer;
  transition: .25s;
  border-radius: 50%;
  stroke: rgba(255,255,255,0.8);
}

.window svg.close:hover {
  background: rgba(0,0,0,.2);
  backdrop-filter: blur(10px);
  stroke: #fff;
}

.window * {
  color: #fff;
  user-select: none;
  font-family:  "Nunito", monospace;
}

.window .row {
  display: flex;
  gap: 16px;
  flex-direction: column;
}

.window .row .column {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 4px;
}

.window label {
  width: max-content;
  text-wrap: none;
  transform: translateY(14px);
}

.window input {
  background: #181818;
  margin: 10px 4px;
  border: none;
  padding: 16px;
  width: 100%;
  height: 36px;
  border-radius: 16px;
  outline: none;
  letter-spacing: 0.01cm;
}

.window .engine svg {
  padding: 6px;
  margin: 4px 6px;
  width: 34px;
  height: 34px;
  background: #fff;
  fill: #000;
  backdrop-filter: blur(2px);
  border-radius: 6px;
  transition: .25s;
}

.window .engine svg:hover {
  padding: 5px;
}

.window div.engine.selected svg {
  background: #000 !important;
  fill: #fff !important;
  width: 36px;
  height: 36px;
}
</style>