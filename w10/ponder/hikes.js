const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions: "Take Highway 20 north to Ashton. Turn right into the town and continue to Cave Falls Road.",
    trailhead: [44.14437, -110.99781],
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions: "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road.",
    trailhead: [43.75567, -110.91521],
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions: "Take Highway 20 north to Ashton. Turn right into the town and continue toward Cave Falls Road.",
    trailhead: [44.14974, -111.04564],
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions: "Take Highway 20 north to Island Park. Continue almost to Mack's Inn.",
    trailhead: [44.49035, -111.36619],
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road.",
    trailhead: [43.78555, -111.98996],
  },
];

const hikeContainer = document.querySelector("#hike-container");
const button = document.querySelector("button");

button.addEventListener("click", search);

function search() {
  const hikeQuery = document.querySelector("#search").value.toLowerCase();

  const filterHikes = hikes.filter(function (hike) {
    return (
      hike.name.toLowerCase().includes(hikeQuery) ||
      hike.description.toLowerCase().includes(hikeQuery) ||
      hike.tags.find((tag) => tag.toLowerCase().includes(hikeQuery))
    );
  });

  const sortedHikes = filterHikes.sort(compareHikes);
  renderHike(sortedHikes);
}

function compareHikes(a, b) {
  if (a.difficulty < b.difficulty) {
    return -1;
  } else if (a.difficulty > b.difficulty) {
    return 1;
  }

  return 0;
}

function tagTemplate(tags) {
  return tags.map((tag) => `<button>${tag}</button>`).join(" ");
}

function difficultyTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5"
  >Difficulty: `;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-boot">🥾</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-empty">◽</span>`;
    }
  }

  html += `</span>`;
  return html;
}

function hikesTemplate(hike) {
  return `<div class="hike-card">
    <div class="hike-content">
      <h2>${hike.name}</h2>
      <div class="hike-tags">
        ${tagTemplate(hike.tags)}
      </div>
      <p>${hike.description}</p>
      <p>${difficultyTemplate(hike.difficulty)}</p>
    </div>
  </div>`;
}

function renderHike(hikes) {
  hikeContainer.innerHTML = hikes.map(hikesTemplate).join("");
}

const randomNum = Math.floor(Math.random() * hikes.length);
renderHike([hikes[randomNum]]);