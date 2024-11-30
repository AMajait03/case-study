const readMoreBtn = document.querySelector('.read-more-btn');
const shortText = document.querySelector('.short-text');
const fullText = document.querySelector('.full-text');

readMoreBtn.addEventListener('click', () => {

    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        shortText.style.display = 'none';
        readMoreBtn.textContent = 'Read less...';
    } else {
        fullText.style.display = 'none';
        shortText.style.display = 'block';
        readMoreBtn.textContent = 'Read more...';
    }
});
