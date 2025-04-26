var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });



// src/renderHtml.ts
function renderHtml(content) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D1 Database</title>
    <style>
      body 
      
      {
        transition: background-color 0.5s, color 0.5s;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
  
      #resourceList {
        padding: 20px;
      }
  
      .dark-mode {
        background-color: #121212;
        color: white;
      }
  
      .light-mode {
        background-color: #f4f4f4;
        color: #333;
      }
  
      .solar-mode {
        background-color: #fffae5;
        color: #4d4d00;
      }
  
      .tint-mode {
        background-color: #d6eaff;
        color: #004d99;
      }
  
      .bw-mode {
        background-color: #ffffff;
        color: black;
      }
  
      .space-tech-mode {
        background-color: #0d0d0d;
        color: #00ffcc;
      }
  
      .toggle-btn {
        padding: 10px 20px;
        margin: 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }
  
      .toggle-btn:hover {
        background-color: #0056b3;
      }
  
      section {
        margin-bottom: 20px;
      }
  
      input[type="text"] {
        width: 80%;
        padding: 10px;
        margin: 20px auto;
        display: block;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
      }
  
      a {
        text-decoration: none;
        color: inherit;
      }
  
      .blue {
        color: #007bff;
      }
    </style>
  </head>
  <body>
  <p id="demo"></p>

<script>
// Function to update the time every second
function updateClock() {
  const d = new Date();
  // Format the time in a readable way
  const timeString = d.toLocaleTimeString();
  
  // Update the inner HTML of the element with the current time
  document.getElementById("demo").innerHTML = timeString;
}

// Call updateClock every 1000 milliseconds (1 second) to keep the time updated
setInterval(updateClock, 1000);

// Initial call to display the time right away
updateClock();
</script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day of the Week</title>
</head>
<body>
   
<h2>Successfully launched Database D1:</h2>
    <p id="dayOfWeek"></p>

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

    
    </script>
    <p> <a href="https://playground-worker-mute-salad-f9e0.jldege31.workers.dev/"> check out the ratings <a/> </p>
</body>
</html>

  <button class="toggle-btn" onclick="toggleMode()">Change Mode</button>
  
    <input type="text" id="searchInput" placeholder="Search the catalog..." oninput="filterCatalog()" />
  
    <div id="resourceList">
      <section>
        <h2>🪐 Space Science</h2>
        <ul id="spaceScience">
          <!-- Space Science resources will be dynamically generated here -->
        </ul>
      </section>
  
      <section>
        <h2>🧬 Bio / Chem / Medicine</h2>
        <ul id="bioChemMedicine">
          <!-- Bio resources will be dynamically generated here -->
        </ul>
      </section>
  
      <section>
        <h2>🧠 Physics & Math</h2>
        <ul id="physicsMath">
          <!-- Physics resources will be dynamically generated here -->
        </ul>
      </section>
  
      <section>
        <h2>🎓 Learning Platforms</h2>
        <ul id="learningPlatforms">
          <!-- Learning platforms will be dynamically generated here -->
        </ul>
      </section>
  
      <section>
        <h2>🔬 Research Tools</h2>
        <ul id="researchTools">
          <!-- Research tools will be dynamically generated here -->
        </ul>
      </section>
  
      <section>
        <h2>🛠️ Calculators & Writing Tools</h2>
        <ul id="calculatorsTools">
          <!-- Calculators & writing tools will be dynamically generated here -->
        </ul>
      </section>
  
      <section>
        <h2>🎥 Media & Video Resources</h2>
        <ul id="mediaVideo">
          <!-- Media & video resources will be dynamically generated here -->
        </ul>
      </section>
    </div>
  
    <small class="blue">
      <a target="_blank" href="https://dash.cloudflare.com/6640fb7942733c71516be43879c9b6cb/workers/services/view/data/production/metrics">Check our status for D1</a>
    </small>
  
    <script>
      // Modes array
      let currentMode = 0;
      const modes = ['light-mode', 'dark-mode', 'solar-mode', 'tint-mode', 'bw-mode', 'space-tech-mode'];
  
      // Resource Data
      const resources = {
        spaceScience: [
          
          { name: "NASA", url: "https://www.nasa.gov" },
          { name: "ESA – European Space Agency", url: "https://www.esa.int" },
          { name: "Space.com", url: "https://www.space.com" },
          { name: "Astronomy Picture of the Day", url: "https://apod.nasa.gov/apod/astropix.html" },
          { name: "Heavens-Above", url: "https://heavens-above.com" },
          { name: "NASA Exoplanet Archive", url: "https://exoplanetarchive.ipac.caltech.edu" },
          { name: "Astronomy.com", url: "https://astronomy.com" },
        ],
        bioChemMedicine: [
          { name: "bioRxiv", url: "https://www.biorxiv.org" },
          { name: "ChemRxiv", url: "https://chemrxiv.org" },
          { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov" },
          { name: "Royal Society of Chemistry", url: "https://www.rsc.org" },
          { name: "ACS Publications", url: "https://pubs.acs.org" }
        ],
        physicsMath: [
          { name: "PlanetMath", url: "https://planetmath.org" },
          { name: "nLab", url: "https://ncatlab.org/nlab/show/HomePage" },
          { name: "ProofWiki", url: "https://proofwiki.org" },
          { name: "CERN", url: "https://home.cern" },
          { name: "Perimeter Institute", url: "https://www.perimeterinstitute.ca" }
        ],
        learningPlatforms: [
          { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
          { name: "Khan Academy", url: "https://www.khanacademy.org" },
          { name: "Bc.b12", url: "https://bc.b12sites.com" },
          { name: "Coursera", url: "https://www.coursera.org" },
          { name: "Bellybutton.webnode", url: "https://bellybutton.webnode.page" }
        ],
        researchTools: [
          { name: "Google Scholar", url: "https://scholar.google.com" },
          { name: "Wikipedia", url: "https://www.wikipedia.org" },
          { name: "ResearchGate", url: "https://www.researchgate.net" },
          { name: "Open Science Framework", url: "https://osf.io" }
        ],
        calculatorsTools: [
          { name: "Desmos", url: "https://www.desmos.com" },
          { name: "Overleaf", url: "https://www.overleaf.com" },
          { name: "Symbolab", url: "https://www.symbolab.com" },
          { name: "Calculator-1", url: "https://calculator-1.com/" },
        ],
        mediaVideo: [
          { name: "Feynman Lectures", url: "https://www.feynmanlectures.caltech.edu" },
          { name: "Spacedock (Math)", url: "https://super-liquid-soccer.com/" },
          { name: "spacedock (scince)", url: "http://loungef2x.web.app/" },
          { name: "Spacedock (YouTube)", url: "https://www.youtube.com/c/Spacedock" }
        ]
      };
  
      // Function to render the resources dynamically
      function renderResources() {
        Object.keys(resources).forEach(category => {
          const list = document.getElementById(category);
          resources[category].forEach(resource => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = resource.url;
            link.target = "_blank";
            link.textContent = resource.name;
            listItem.appendChild(link);
            list.appendChild(listItem);
          });
        });
      }
  
      // Search functionality
      function filterCatalog() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        Object.keys(resources).forEach(category => {
          const list = document.getElementById(category);
          list.querySelectorAll('li').forEach(item => {
            const link = item.querySelector('a');
            if (link.textContent.toLowerCase().includes(searchInput)) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        });
      }
  
      // Toggle Mode function
      function toggleMode() {
        document.body.classList.remove(modes[currentMode]);
        currentMode = (currentMode + 1) % modes.length;
        document.body.classList.add(modes[currentMode]);
      }
  
      // Initialize resources on page load
      window.onload = renderResources;
    </script>
  </body>
  </html>
  
  

`;
}
__name(renderHtml, "renderHtml");

// src/index.ts
var index_default = {
  async fetch(request, env) {
    const stmt = env.DB.prepare("SELECT * FROM comments LIMIT 3");
    const { results } = await stmt.all();
    return new Response(renderHtml(JSON.stringify(results, null, 2)), {
      headers: {
        "content-type": "text/html"
      }
    });
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
