export function filterKeyEnter(handler) {
  return e => {
    if (e.keyCode === 13) {
      handler(e)
    }
  }
}

export function accessibleOnClick(handler) {
  return {
    role: "button",
    tabIndex: "0",
    onKeyDown: filterKeyEnter(handler),
    onMouseEnter: handler,
  }
}
