document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll("header");

  headers.forEach((header) => {
    // Only apply to subpages (not index page)
    if (header.querySelector(".subpage-header-topic")) {
      header.classList.add("subpage-header");

      let isScrolled = false;
      let scrollTimeout;

      window.addEventListener("scroll", function () {
        // Clear existing timeout
        clearTimeout(scrollTimeout);

        // Throttle the scroll event
        scrollTimeout = setTimeout(function () {
          const shouldBeScrolled = window.scrollY > 4; // Reduced threshold for earlier shrinking

          if (shouldBeScrolled && !isScrolled) {
            header.classList.add("scrolled");
            isScrolled = true;
          } else if (!shouldBeScrolled && isScrolled) {
            header.classList.remove("scrolled");
            isScrolled = false;
          }
        }, 10); // Small delay to prevent rapid toggling
      });
    }
  });
});
