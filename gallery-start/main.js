const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white pansies',
    'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg' : 'Large moth on a leaf'
  }


/* Looping through images */

imageFileNames.map(image => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  });

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    const buttonClasses = {
      'dark': {
        newClass: 'light',
        textContent: 'Lighten',
        overlayColor: 'rgba(0,0,0,0.5)'
      },
      'light': {
        newClass: 'dark',
        textContent: 'Darken',
        overlayColor: 'rgba(0,0,0,0)'
      }
    };
  
    const { newClass, textContent, overlayColor } = Object.values(buttonClasses)
      .filter(obj => obj.newClass !== btnClass)[0];
  
    btn.setAttribute('class', newClass);
    btn.textContent = textContent;
    overlay.style.backgroundColor = overlayColor;
  });
  
