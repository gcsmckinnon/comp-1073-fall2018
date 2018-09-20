// The output function
HTMLElement.prototype.output = function (value) {
  if (value instanceof Element) {
    this.appendChild(value);
  } else {
    let p = document.createElement('p');
    p.textContent = value;
    this.appendChild(p);
  }
}