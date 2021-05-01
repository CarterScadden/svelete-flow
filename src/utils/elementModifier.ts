type ElementTypes = "div";

import dragndropUtils from "../stores/dragndrop/utils";

const randomId = () => `${Date.now()}`;

export function createElement(type: ElementTypes) {
  const { body } = document;
  const element = document.createElement(type);
  element.setAttribute("id", randomId());
  element.style.top = "500px";
  element.style.left = "500px";
  element.draggable = true;
  element.classList.add("draggable");
  element.addEventListener("dragstart", dragndropUtils.handleDragStart);
  element.addEventListener("dragend", dragndropUtils.handleDragEnd);
  body.appendChild(element);
}
