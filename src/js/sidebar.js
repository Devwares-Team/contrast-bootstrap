export function Sidebar(element) {
  const color = element.getAttribute('color');
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
  function makeSmall() {
    if (window.innerWidth < 768) {
      element.classList.add('sidebar--mobile');
      element.querySelector('.sidebar-brand')
        .classList.add('sidebar-brand-none');
    } else {
      element.classList.remove('sidebar--mobile');
      element.querySelector('.sidebar-brand')
        .classList.remove('sidebar-brand-none');
    }
  }

  const route = window.location.href;
  function activeRoute(link) {
    element.querySelectorAll(link).forEach(item => {
      const to = item.href;
      if(to){
        if(to === route){
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      }
    })
  }

  window.addEventListener('DOMContentLoaded', makeSmall);
  window.addEventListener('resize', makeSmall);

  activeRoute('.sidebar-item');
  activeRoute('.sub-menu-item');
}
