document.getElementById('messageButton').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = 'none';
});
