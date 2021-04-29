const init = () => {
   /* Get the slider items */
   const sliderItems = document.getElementById('slider-text').children;
   const sliderIndicator = document.getElementById('slider-indicator');
   
   /* Function */
   const goHome = () => {
      sliderIndicator.style.top = '0';
      window.scroll(0, 0);
   };

   const goCruiser = () => {
      sliderIndicator.style.top = '3rem';
      window.scroll(0, 1156);
   };

   const goCarving = () => {
      sliderIndicator.style.top = '6rem';
      window.scroll(0, 1905);
   };

   const goDownHill = () => {
      sliderIndicator.style.top = '9rem';
      window.scroll(0, 2654);
   };

   /* Handler event on slider items */
   sliderItems[0].addEventListener('click', goHome);
   sliderItems[1].addEventListener('click', goCruiser);
   sliderItems[2].addEventListener('click', goCarving);
   sliderItems[3].addEventListener('click', goDownHill);
}

window.onload = init;