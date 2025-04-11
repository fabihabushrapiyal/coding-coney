const cardWrapper = document.querySelector('.card-wrapper');
const showHideBtn = document.querySelector('.show-hide-btn');

showHideBtn.addEventListener('click', () => {
  cardWrapper.classList.toggle('show-details');

  if (!cardWrapper.classList.contains('show-details')) {
    cardWrapper.classList.add('hide-details');
    showHideBtn.innerHTML = '<i class="fa-solid fa-greater-than"></i>';
  } else {
    cardWrapper.classList.remove('hide-details');
    showHideBtn.innerHTML = '<i class="fa-solid fa-less-than"></i>';
  }
});

// HTML
//  <h4>skills</h4>
//           <div class="skill">
//             <h6><i class="fa-brands fa-html5"></i> html5</h6>
//             <div class="bar html">
//               <p>95%</p>
//             </div>
//           </div>
//           <div class="skill">
//             <h6><i class="fa-brands fa-css3-alt"></i> css3</h6>
//             <div class="bar css">
//               <p>90%</p>
//             </div>
//           </div>
//           <div class="skill">
//             <h6><i class="fa-brands fa-js"></i> javascript</h6>
//             <div class="bar js">
//               <p>75%</p>
//             </div>
//           </div>

{
  /*  */
}
