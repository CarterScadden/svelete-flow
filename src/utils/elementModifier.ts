type ElementTypes = "div";

import dragndropUtils from "../stores/dragndrop/utils";

const randomId = () => `${Date.now()}`;

export function createElement(type: ElementTypes) {
  const { body } = document;
  const element = document.createElement(type);
  element.setAttribute("id", randomId());
  element.style.top = "500px";
  element.style.left = "500px";
  element.style.border = '1px solid black';
  element.draggable = true;
  element.classList.add("draggable");
  element.addEventListener("dragstart", dragndropUtils.handleDragStart);
  element.addEventListener("dragend", dragndropUtils.handleDragEnd);


  const button = document.createElement('button');
  button.style.position = 'absolute';
  button.style.top = '0px';
  button.style.right = '0px';
  // add svg here, and an event listener to button that will remove this element.



  body.appendChild(element);
}
