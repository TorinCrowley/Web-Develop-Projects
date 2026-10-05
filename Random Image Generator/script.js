const button = document.querySelector("#fetch-btn");
const img = document.querySelector("#office-img");
const statusText = document.querySelector("#status");
const photographerText = document.querySelector("#photographer");

async function getOfficePhoto() {
  statusText.textContent = "Loading...";
  try {
    const response = await fetch("https://api.pexels.com/v1/search?query=office&per_page=80", {
      headers: {
        "Authorization": "m2hUGaAZ9DfrMssyvhblVZzY1ZRVDXbWWYEupBSki1JC4nYIIkNBoxG3"
      }
    });
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.photos.length);
    img.src = data.photos[randomIndex].src.medium;
    statusText.textContent = "";
    photographerText.textContent = `Photographer: ${data.photos[randomIndex].photographer}`;
  } catch (error) {
    statusText.textContent = "Couldn't fetch an office. Try again!";
    console.error(error);
  }
}

button.addEventListener("click", getOfficePhoto);