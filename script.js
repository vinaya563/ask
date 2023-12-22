const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseDiv = document.getElementById('response');

yesBtn.addEventListener('click', () => {
    clearResponses();
    displayResponse('Happy-Dance-GIF-by-kirun-unscreen.gif', 'YAAAAAAAAAAAAAAAAYYYYYY');
});

noBtn.addEventListener('click', () => {
    clearResponses();
    displayResponse('Sad-Aww-GIF-by-The-Comedy-Bar-unscreen.gif', 'Peeeeeeechhhhhhh');
});

function clearResponses() {
    const previousResponse = responseDiv.querySelector('.response-content');
    if (previousResponse) {
        previousResponse.remove();
    }
}

function displayResponse(imageSrc, message) {
    const responseContent = document.createElement('div');
    responseContent.classList.add('response-content');
    responseContent.innerHTML = `
    <img src="${imageSrc}" alt="Response Image">
    <p>${message}</p>
  `;
    responseDiv.appendChild(responseContent);
}


