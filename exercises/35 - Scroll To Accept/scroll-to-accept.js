const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.wrapper button.accept');
// add event lister on scroll NOPE

// add intersection observer
function obCallback(payload) {
  if (payload[0].isIntersecting) {
    button.disabled = false;
    console.log(payload[0].intersectionRatio);
    // ob.unobserve(terms.lastElementChild);
  }
}
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});
ob.observe(terms.lastElementChild);
