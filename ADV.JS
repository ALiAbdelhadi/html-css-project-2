
let nums = document.querySelectorAll( ".stats .number" );
let statsSection = document.querySelector( ".stats" );
let started = false; //Function Stated ? NO

window.onscroll = function () {
  if ( window.scrollY >= statsSection.offsetTop ) {
    if ( !started ) {
      nums.forEach( ( num ) => startCount( num ) );
    }
    started = true;
  }
};

function startCount ( el ) {
  let goal = el.dataset.goal;
  let count = setInterval( () => {
    el.textContent++;
    if ( el.textContent == goal ) {
      clearInterval( count );
    }
  }, 1100 / goal );
}

