document.addEventListener("DOMContentLoaded", function() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const thumbnail = document.querySelector("img");
  const thumbnailPath = thumbnail.getAttribute("src");
  const fullsizePath = thumbnail.getAttribute("data-fullsize");
  console.log(thumbnailPath);
  console.log(fullsizePath);

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      if (thumbnail.classList.contains("expanded")) {
        // If the thumbnail is already expanded, revert it to its original size
        thumbnail.style.width = "300px";
        thumbnail.style.height = "200px";
      } else {
        // If the thumbnail is not expanded, set it to full size
        const fullsizeUrl = thumbnail.dataset.fullsize;
        thumbnail.src = fullsizeUrl;
        thumbnail.style.width = "80vw";
        thumbnail.style.height = "auto";
      }
        // Toggle the 'expanded' class on the thumbnail
      thumbnail.classList.toggle("expanded");
    });
  });
});