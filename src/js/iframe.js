export function IFrame(element) {
  /*   const ratio = element.getAttribute('ratio')
    ? `ratio-${element.getAttribute('ratio')}`
    : 'ratio-16x9';
  element.classList.add('ratio');
  element.classList.add(ratio); */

  const iFrameAttributes = {
    src: element.getAttribute("src") || null,
    frameBorder: element.getAttribute("frameBorder") || "0",
    allowFullScreen: element.getAttribute("allowFullScreen") || true,
    id: element.getAttribute("id") || false,
    height: element.getAttribute("height") || "100%",
    width: element.getAttribute("width") || "100%",
    title: element.getAttribute("title") || null,
    style: element.getAttribute("style") || undefined,
  };
  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  function setIFrame() {
    const iFrame = document.createElement("iframe");
    element.appendChild(iFrame);
    setAttributes(iFrame, iFrameAttributes);
  }
  setIFrame();
}
