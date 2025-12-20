function onClickOutside(
  element: HTMLElement,
  callback: () => void
) {
  function handler(event: MouseEvent) {
    if (element.contains(event.target as Node)) return;
    callback();
  }

  document.addEventListener("click", handler);

  return () => {
    document.removeEventListener("click", handler);
  };
}

export {
  onClickOutside
}