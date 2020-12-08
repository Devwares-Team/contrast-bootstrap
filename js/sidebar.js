export function Sidebar(element) {
  const color = element.getAttribute('color');
  console.log(color);
  function addEvents() {
    if (color !== null) {
      element.classList.add('sidebar-white');
    }
    element
      .querySelectorAll('.sidebar-dropdown .sidebar-item')
      .forEach(item => {
        item.addEventListener('click', event => {
          item.classList.toggle('active');
        });
      });
    element.querySelector('.sidebar-toggler').addEventListener('click', () => {
      if (element.classList.contains('sidebar--mobile')) {
        element.classList.toggle('sidebar--mobile');
        element
          .querySelector('.sidebar-brand')
          .classList.toggle('sidebar-brand-none');
      } else {
        element
          .querySelector('.sidebar-brand')
          .classList.toggle('sidebar-brand-none');
        element.classList.toggle('sidebar--mobile');
      }
    });
  }
  addEvents();
  window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 768) {
      element.classList.add('sidebar--mobile');
    } else {
      element.classList.remove('sidebar--mobile');
    }
  });
}
