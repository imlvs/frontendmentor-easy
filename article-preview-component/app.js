const button = document.getElementById('share');
const shareBox = document.getElementById('share-box')

button.addEventListener('click', () => {
    shareBox.classList.toggle('open-share');
    console.log(shareBox.classList)
});