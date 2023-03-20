const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery");

function fetchImage() {
  const inputvalue = document.getElementById("input").value;
  if (inputvalue > 10 || inputvalue < 1) {
    // errorMessageEl.style.display = "block";
    return;
  }
  imgs = "";
  //   errorMessageEl.style.display = "none";
  fetch(
    `https://api.unsplash.com/photos?per_page=${inputvalue}&page=${Math.round(
      Math.random() * 1000
    )}&client_id=LJsqAZEku_VaXjF9JDhZZs9c2FBM7J30rXV37clX_yA`
  ).then((res) =>
    res.json().then((data) => {
      if (data) {
        data.forEach((element) => {
          imgs += `
            <img src=${element.urls.small} />
            `;
          galleryEl.innerHTML = imgs;
        });
      }
    })
  );
}
btnEl.addEventListener("click", fetchImage);
