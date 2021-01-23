export function Rating(element) {
  let currentRating = element.getAttribute('data-rating');
  const stars = element.querySelectorAll('.star');
  const setRating = e => {
    element.setAttribute(
      'data-rating',
      e.currentTarget.getAttribute('data-value'),
    );
  };
  const ratingHover = e => {
    const currentHover = e.currentTarget.getAttribute('data-value');
    highlightStars(currentHover);
    stars.forEach(star => {
      star.childNodes[1].style.opacity =
        currentHover == star.getAttribute('data-value') ? 1 : 0;
    });
  };
  const resetRating = e => {
    const currentRating = element.getAttribute('data-rating');
    highlightStars(currentRating);
    stars.forEach(star => {
      star.childNodes[1].style.opacity = 0;
    });
  };

  const highlightStars = rating => {
    stars.forEach(star => {
      star.style.color =
        rating >= star.getAttribute('data-value') ? 'yellow' : 'gray';
    });
  };
  resetRating();
  stars.forEach(star => {
    star.addEventListener('click', setRating);
    star.addEventListener('mouseover', ratingHover);
  });
  element.addEventListener('mouseout', resetRating);
}
