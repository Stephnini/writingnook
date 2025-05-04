document.addEventListener("DOMContentLoaded", function () {
  // HIDE LOADING SCREEN
  setTimeout(function () {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
    }
  }, 500);

  // FOOTER SHOW ON SCROLL
  window.addEventListener("scroll", function () {
    const footer = document.querySelector("footer");
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.body.offsetHeight;

    if (footer && scrollPosition >= pageHeight - 50) {
      footer.classList.add("show");
    } else if (footer) {
      footer.classList.remove("show");
    }
  });

  // QUOTE OF THE DAY
  const quotes = [
    {
      text: "“The beauty you see in the world is a reflection of you”",
      author: "Jalaluddin Rumi",
    },
    {
      text: "“the world is better because you are in it”",
      author: "Unknown",
    },
    {
      text: "“There is no greater agony than bearing an untold story inside you.”",
      author: "Maya Angelou",
    },
    {
      text: "“Start writing, no matter what. The water does not flow until the faucet is turned on.”",
      author: "Louis L’Amour",
    },
    {
      text: "“Talk to yourself like you would to someone you love.”",
      author: "Brené Brown",
    },
    {
      text: "“A word after a word after a word is power.”",
      author: "Margaret Atwood",
    },
    {
      text: "“Write what disturbs you, what you fear, what you have not been willing to speak about. Be willing to be split open.”",
      author: "Natalie Goldberg",
    },
  ];

  const today = new Date().getDay();
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");

  if (quoteText && quoteAuthor) {
    quoteText.textContent = quotes[today].text;
    quoteAuthor.textContent = `– ${quotes[today].author}`;
  }

  // STORY DROPDOWN ACCORDION
  const items = document.querySelectorAll(".project-item");

  items.forEach(item => {
    const title = item.querySelector(".project-title");
    const content = item.querySelector(".project-content");

    title.addEventListener("click", function () {
      const isOpen = content.classList.contains("open");

      document.querySelectorAll(".project-content").forEach(c => c.classList.remove("open"));
      document.querySelectorAll(".project-title").forEach(t => t.classList.remove("active"));

      if (!isOpen) {
        content.classList.add("open");
        title.classList.add("active");
      }
    });
  });
});

// SPARKLE PARTICLES ON CLICK
    document.addEventListener("click", function(e) {
        for (let i = 0; i < 5; i++) { // Create 5 sparkles per click
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            document.body.appendChild(sparkle);

            sparkle.style.left = `${e.pageX + (Math.random() * 40 - 20)}px`;
            sparkle.style.top = `${e.pageY + (Math.random() * 40 - 20)}px`;

            sparkle.addEventListener('animationend', () => {
                sparkle.remove();
            });
        }
    });