export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Cloudflare Worker Rating</title>
  <style>
    /* Default Light Mode */
    body {
      background-color: white;
      color: black;
      font-family: Arial, sans-serif;
    }

    /* Dark Mode */
    body.dark-mode {
      background-color: #333;
      color: white;
    }

    /* Blue Tint Mode */
    body.blue-tint {
      background-color: #001f3d;
      color: lightblue;
    }

    /* Yellow Tint Mode */
    body.yellow-tint {
      background-color: #f1e68e;
      color: black;
    }

    /* Space/Tech Mode */
    body.space-tech-mode {
      background-color: #0a0f15;
      color: #58a6ff;
      font-family: 'Courier New', Courier, monospace;
    }

    /* Button Styling */
    button {
      padding: 10px;
      margin: 5px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }

    button:hover {
      opacity: 0.8;
    }

    /* Star Rating */
    .star {
      font-size: 30px;
      cursor: pointer;
      color: gray;
    }
    .star {
      cursor: pointer;
      font-size: 24px;
      color: gray;
    }
    
    .star.selected {
      color: gold;
    }
    

    /* Search Bar */
    #searchBar {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      font-size: 16px;
    }

    /* Resource Section */
    .rating-section {
      margin-bottom: 20px;
    }

    .submit-btn {
      margin-top: 10px;
      padding: 5px 10px;
      cursor: pointer;
    }

    /* Average Rating */
    .average-rating {
      font-size: 14px;
      margin-top: 5px;
    }
  </style>
</head>

<body>
  <div>
    <button id="whiteModeBtn">White Mode</button>
    <button id="darkModeBtn">Dark Mode</button>
    <button id="blueTintBtn">Blue Tint</button>
    <button id="yellowTintBtn">Yellow Tint</button>
    <button id="spaceTechModeBtn">Space/Tech Mode</button>
  </div>

  <p id="datetime" style="font-weight: bold; font-size: 16px;"></p>
  
  <input type="text" id="searchBar" placeholder="Search resources..." style="width: 100%; padding: 10px; margin-bottom: 20px; font-size: 16px;" />

  <h1>Successfully Launched Rating Database D2</h1>

  <!-- Resource Sections -->
  ${generateResourceSection("Astronomy.com", "https://astronomy.com")}
  ${generateResourceSection("MIT OpenCourseWare", "https://ocw.mit.edu")}
  ${generateResourceSection("NASA", "https://www.nasa.gov")}
  ${generateResourceSection("Stanford Encyclopedia of Philosophy", "https://plato.stanford.edu")}
  ${generateResourceSection("arXiv", "https://arxiv.org")}
  ${generateResourceSection("Nature", "https://www.nature.com")}
  ${generateResourceSection("ScienceDirect", "https://www.sciencedirect.com")}
  ${generateResourceSection("Springer", "https://link.springer.com")}
  ${generateResourceSection("Wolfram MathWorld", "https://mathworld.wolfram.com")}
  ${generateResourceSection("Wikipedia", "https://www.wikipedia.org")}
  ${generateResourceSection("National Science Foundation", "https://www.nsf.gov")}
  ${generateResourceSection("CERN", "https://home.cern")}
  ${generateResourceSection("Physics LibreTexts", "https://phys.libretexts.org")}
  ${generateResourceSection("Royal Society", "https://royalsociety.org")}
  ${generateResourceSection("JSTOR", "https://www.jstor.org")}
  ${generateResourceSection("PubMed", "https://pubmed.ncbi.nlm.nih.gov")}
  ${generateResourceSection("American Physical Society", "https://www.aps.org")}
  ${generateResourceSection("European Space Agency", "https://www.esa.int")}
  ${generateResourceSection("IEEE Xplore", "https://ieeexplore.ieee.org")}
  ${generateResourceSection("Science Magazine", "https://www.sciencemag.org")}
  ${generateResourceSection("Cambridge University Press", "https://www.cambridge.org")}
  ${generateResourceSection("Oxford Academic", "https://academic.oup.com")}
  ${generateResourceSection("PLOS ONE", "https://journals.plos.org/plosone/")}
  ${generateResourceSection("National Geographic", "https://www.nationalgeographic.com")}
  ${generateResourceSection("NASA ADS", "https://ui.adsabs.harvard.edu")}
  ${generateResourceSection("Quanta Magazine", "https://www.quantamagazine.org")}
  ${generateResourceSection("Sci-Hub", "https://sci-hub.se")}
  ${generateResourceSection("University of California Press", "https://online.ucpress.edu")}
  ${generateResourceSection("Berkeley Lab", "https://www.lbl.gov")}
  ${generateResourceSection("Los Alamos National Lab", "https://www.lanl.gov")}
  ${generateResourceSection("Fermilab", "https://www.fnal.gov")}
  ${generateResourceSection("NASA EarthData", "https://earthdata.nasa.gov")}
  ${generateResourceSection("Perimeter Institute", "https://www.perimeterinstitute.ca")}
  ${generateResourceSection("HubbleSite", "https://hubblesite.org")}
  ${generateResourceSection("Spitzer Space Telescope", "https://www.spitzer.caltech.edu")}
  ${generateResourceSection("James Webb Space Telescope", "https://www.jwst.nasa.gov")}
  ${generateResourceSection("SLAC National Accelerator Laboratory", "https://www6.slac.stanford.edu")}
  ${generateResourceSection("DOE Office of Science", "https://science.osti.gov")}
  ${generateResourceSection("OpenStax", "https://openstax.org")}
  ${generateResourceSection("Brookhaven National Laboratory", "https://www.bnl.gov")}

  <script>
  document.addEventListener("DOMContentLoaded", function () {
    // Update DateTime Function
    function updateDateTime() {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      document.getElementById("datetime").textContent = now.toLocaleString("en-US", options);
    }

    // Update every second
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Search Functionality
    document.getElementById("searchBar").addEventListener("input", function () {
      const query = this.value.toLowerCase();
      document.querySelectorAll(".rating-section").forEach(section => {
        const title = section.querySelector("a").innerText.toLowerCase();
        section.style.display = title.includes(query) ? "block" : "none";
      });
    });

    // Button Click Event Listeners for Mode Change
    document.getElementById("whiteModeBtn").addEventListener("click", function () {
      document.body.className = '';  // Reset any mode classes
    });

    document.getElementById("darkModeBtn").addEventListener("click", function () {
      document.body.className = 'dark-mode';
    });

    document.getElementById("blueTintBtn").addEventListener("click", function () {
      document.body.className = 'blue-tint';
    });

    document.getElementById("yellowTintBtn").addEventListener("click", function () {
      document.body.className = 'yellow-tint';
    });

    document.getElementById("spaceTechModeBtn").addEventListener("click", function () {
      document.body.className = 'space-tech-mode';
    });
  });
</script>
  </body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};

function generateResourceSection(name, url) {
  const key = name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase(); // Safe key for localStorage
  return `
    <div class="rating-section" data-key="${key}">
      <p><a href="${url}" target="_blank">${name}</a></p>
      <div>
        <h3>Rate This Resource:</h3>
        <div class="stars">
          <span class="star" data-value="1">&#9733;</span>
          <span class="star" data-value="2">&#9733;</span>
          <span class="star" data-value="3">&#9733;</span>
          <span class="star" data-value="4">&#9733;</span>
          <span class="star" data-value="5">&#9733;</span>
        </div>
        <button class="submit-btn">Submit Rating</button>
        <p class="average-rating">Average Rating: Not yet rated</p>
      </div>
    </div>
    <hr />
  `;
}
