import dragndropStore from "./dragndrop";
import { get } from "svelte/store";

function getElementData(e: MouseEvent) {
  const element = e.currentTarget as HTMLElement;
  return {
    element,
    id: element.getAttribute("id"),
    x: e.clientX,
    y: e.clientY,
  };
}

function handleDragStart(e: MouseEvent) {
  const { element, id, x, y } = getElementData(e);

  element.classList.add("hide");

  dragndropStore.nodeId.set(id);
  dragndropStore.startCordinations.set({ x, y });
  dragndropStore.dragging.set(true);
}

function handleDragEnd(e: MouseEvent) {
  const dragging = get(dragndropStore.dragging);
  if (dragging) {
    const { element, x, y } = getElementData(e);

    element.classList.remove("hide");

    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
  }

  dragndropStore.dragging.set(false);
  dragndropStore.startCordinations.set({ x: 0, y: 0 });
  dragndropStore.nodeId.set("");
}

function handleMouseLeave() {
  dragndropStore.dragging.set(false);
  dragndropStore.nodeId.set("");
  dragndropStore.startCordinations.set({ x: 0, y: 0 });
  dragndropStore.currentCordinations.set({ x: 0, y: 0 });
}

function handleMouseMove(e: MouseEvent) {
  dragndropStore.currentCordinations.set({ x: e.clientX, y: e.clientY });
}

export default {
  handleMouseLeave,
  handleDragStart,
  handleDragEnd,
  handleMouseMove,
};
