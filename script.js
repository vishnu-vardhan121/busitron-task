function loadPosts() {
  const image = "https://random-image-pepebigotes.vercel.app/api/random-image";

  const feedContainer = document.getElementById("feed-container");

  for (let i = 0; i < 3; i++) {
    const newItem = document.createElement("div");
    newItem.className = "feed-item";
    newItem.innerHTML = `
        <img src="${image}" alt="random-image" loading="lazy">
        <h2> Post Title <span class="like">❤️ 💬 ➤</span></h2>
      `;
    setTimeout(() => {
      feedContainer.appendChild(newItem);
    }, 1500);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadPosts();
    }
  },
  { threshold: 1.0 }
);

const loadingIndicator = document.getElementById("loading-indicator");

observer.observe(loadingIndicator);
