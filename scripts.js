function loadHtml(targetId, filePath) {
  fetch(filePath)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }
      return res.text();
    })
    .then(html => {
      const targetElement = document.getElementById(targetId);
      targetElement.innerHTML = html;

      // Now apply font scaling based on the aspect ratio
      adjustByAspectRatio();
    })
    .catch(err => {
      console.error(err);
    });
}
