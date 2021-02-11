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

  const dropdown = element.querySelectorAll('.sidebar-dropdown');
        
  dropdown.forEach(item => {
    const button = item.querySelector('.sidebar-item');
    const tooltip = item.querySelector('.sidebar-sub-menu');
    let popperInstance = null;

    function create() {
      popperInstance = Popper.createPopper(button, tooltip, {
        placement: 'right',
        strategy: 'fixed',
        modifiers: [
          {
            name: 'computeStyles',
            options: {
              adaptive: false,
            },
          },
        ],
      });
    }

    function destroy() {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    }

    function show() {
      if (sidebar.offsetWidth < 100) {
        tooltip.setAttribute('data-show', '');
        create();
      }
    }

    function hide() {
      if (sidebar.offsetWidth < 100) {
        tooltip.removeAttribute('data-show');
        destroy();
      }
    }

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach(event => {
      button.addEventListener(event, show);
      tooltip.addEventListener(event, show);
    });

    hideEvents.forEach(event => {
      button.addEventListener(event, hide);
      tooltip.addEventListener(event, hide);
    });
  });
}
