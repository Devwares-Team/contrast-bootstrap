(function () {
  const inputList = document.querySelectorAll(".cdb-input");
  inputList.forEach((inputContainer) => {
    // define nodes and attributes
    const input = inputContainer.querySelector("input");
    const textArea = inputContainer.querySelector("textarea");
    // const label = inputContainer.querySelector("label");

    // add default fontSize
    size = inputContainer.getAttribute("size") || "15px";
    input ? (input.style.fontSize = size) : null;
    textArea ? (textArea.style.fontSize = size) : null;
    // label.style.fontSize = size;

    // add default color
    const classList = [...inputContainer.classList];
    let colorValue = false;
    [
      "input-color-primary",
      "input-color-secondary",
      "input-color-success",
      "input-color-danger",
      "input-color-info",
      "input-color-warning",
      "input-color-dark",
    ].forEach((item) => {
      if (classList.includes(item)) {
        colorValue = true;
      }
    });
    console.log(inputContainer.children, colorValue);
    !colorValue && inputContainer.classList.add("input-color-dark");

    // add default placeholders
    const type = input.getAttribute("type") || "text";
    const placeholder = input.getAttribute("placeholder");

    if (!placeholder) {
      input.setAttribute("placeholder", `Enter a ${type} here`);
    }
  });
})();
