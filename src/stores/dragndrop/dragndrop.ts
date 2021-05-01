import { writable } from "svelte/store";

import type { Coordinates } from "./types";

export const dragndropStore = {
  nodeId: writable<string>(""),
  startCordinations: writable<Coordinates>({ x: 0, y: 0 }),
  currentCordinations: writable<Coordinates>({ x: 0, y: 0 }),
  dragging: writable<boolean>(false),
};

export default dragndropStore;
