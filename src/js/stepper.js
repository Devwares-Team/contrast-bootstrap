export function Stepper(element) {
  // define stepper type(vertical || horizontal)
  // const stepperType = "horizontal";

  // define defualt styles and classNames on document load
  function setClassNamesAndStyles() {
    element.style.height = element.getAttribute("height") || "100%";
    const steps = element.querySelectorAll(".step");
    for (let i = 0; i < steps.length; i++) {
      steps[i].getAttribute("id") == 1 && steps[i].classList.add("active");
      const stepIndicator = document.createElement("div");
      const stepIcon = steps[i].getAttribute("icon");
      stepIndicator.classList.add("step-indicator");
      if (i == steps.length - 1) {
        stepIndicator.innerHTML += `<div class="step-node"><i class="${stepIcon}"></i></div>`;
      } else {
        stepIndicator.innerHTML += `<div class="step-node"><i class="${stepIcon}"></i></div><div class="step-divider"><span></span><span></span></div>`;
      }
      steps[i].appendChild(stepIndicator);
    }
    element.querySelector(".stepper-content").classList.add("show");
  }

  // define styles based on active stepper item
  function setActiveStep(id) {
    element.querySelectorAll(".step").forEach((step) => {
      const stepId = step.getAttribute("id");
      if (stepId < id) {
        step.classList.remove("active");
        step.classList.add("prev");
      } else if (stepId == id) {
        step.classList.remove("prev");
        step.classList.add("active");
      } else {
        step.classList.remove("prev");
        step.classList.remove("active");
      }
    });
    element.querySelectorAll(".stepper-content").forEach((stepperContent) => {
      const stepperLabel = stepperContent.getAttribute("stepper-label");
      if (stepperLabel == id) {
        stepperContent.classList.add("show");
      } else {
        stepperContent.classList.remove("show");
      }
    });
  }

  // define eventlisteners on stepper components
  function addEvents() {
    element.querySelectorAll(".step").forEach((step) => {
      step
        .querySelector(".step-node")
        .addEventListener("click", () =>
          setActiveStep(step.getAttribute("id"))
        );
    });
  }

  // prototype chain
  Stepper.prototype.steps = () => {
    return element.querySelectorAll(".steps");
  };
  Stepper.prototype.navigate = (id) => {
    setActiveStep(id);
  };

  // call functions
  setClassNamesAndStyles();
  addEvents();
}
