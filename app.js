const resumeButton = document.querySelector('.resume-btn');
const resumeOverlay = document.querySelector('.resume-overlay');
const modalContainer = document.querySelector('.resume-modal');
const modalClose = document.querySelector('.resume-close');
const grayBackground = document.querySelector('.resume-overlay-gray')

resumeButton.addEventListener ('click', e => {
    resumeOverlay.classList.remove('resume-hidden');
    grayBackground.classList.remove('resume-hidden');
})

 modalClose.addEventListener('click', e => {
    resumeOverlay.classList.add('resume-hidden');
    grayBackground.classList.add('resume-hidden');
  })