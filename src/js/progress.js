export function Progress(element) {
  const progressBar = element.querySelector('.progress-bar');

  const setWidthValue = e => {
    const max = element.getAttribute('max');
    const min = element.getAttribute('min');
    const value = element.getAttribute('value');
    const height = element.getAttribute('height');
    const percent = ((value - min) / (max - min)) * 100;
    max && min && value
      ? (progressBar.style.width = `${percent}%`)
      : (progressBar.style.width = '0%');
    height
      ? (element.style.height = `${height}px`)
      : (element.style.height = '10px');
  };
  setWidthValue();
}
