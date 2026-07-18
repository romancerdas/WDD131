const seasons = [
  {
    number: 1,
    title: 'Borneo',
    location: 'Malaysia',
    era: 'Classic',
    winner: 'Richard Hatch',
    players: 16
  },
  {
    number: 2,
    title: 'The Australian Outback',
    location: 'Australia',
    era: 'Classic',
    winner: 'Tina Wesson',
    players: 16
  },
  {
    number: 3,
    title: 'Africa',
    location: 'Kenya',
    era: 'Classic',
    winner: 'Ethan Zohn',
    players: 16
  },
  {
    number: 4,
    title: 'Marquesas',
    location: 'French Polynesia',
    era: 'Classic',
    winner: 'Vecepia Towery',
    players: 16
  },
  {
    number: 5,
    title: 'Thailand',
    location: 'Thailand',
    era: 'Classic',
    winner: 'Brian Heidik',
    players: 16
  },
  {
    number: 6,
    title: 'The Amazon',
    location: 'Brazil',
    era: 'Classic',
    winner: 'Jenna Morasca',
    players: 16
  },
  {
    number: 7,
    title: 'Pearl Islands',
    location: 'Panama',
    era: 'Classic',
    winner: 'Sandra Diaz-Twine',
    players: 16
  },
  {
    number: 8,
    title: 'All-Stars',
    location: 'Panama',
    era: 'Classic',
    winner: 'Amber Brkich',
    players: 18
  },
  {
    number: 9,
    title: 'Vanuatu',
    location: 'Vanuatu',
    era: 'Classic',
    winner: 'Chris Daugherty',
    players: 18
  },
  {
    number: 10,
    title: 'Palau',
    location: 'Palau',
    era: 'Classic',
    winner: 'Tom Westman',
    players: 20
  },
  {
    number: 11,
    title: 'Guatemala',
    location: 'Guatemala',
    era: 'Middle',
    winner: 'Danni Boatwright',
    players: 18
  },
  {
    number: 12,
    title: 'Panama: Exile Island',
    location: 'Panama',
    era: 'Middle',
    winner: 'Aras Baskauskas',
    players: 16
  },
  {
    number: 13,
    title: 'Cook Islands',
    location: 'Cook Islands',
    era: 'Middle',
    winner: 'Yul Kwon',
    players: 20
  },
  {
    number: 14,
    title: 'Fiji',
    location: 'Fiji',
    era: 'Middle',
    winner: 'Earl Cole',
    players: 19
  },
  {
    number: 15,
    title: 'China',
    location: 'China',
    era: 'Middle',
    winner: 'Todd Herzog',
    players: 16
  },
  {
    number: 16,
    title: 'Micronesia: Fans vs. Favorites',
    location: 'Micronesia',
    era: 'Middle',
    winner: 'Parvati Shallow',
    players: 20
  },
  {
    number: 17,
    title: 'Gabon',
    location: 'Gabon',
    era: 'Middle',
    winner: 'Bob Crowley',
    players: 18
  },
  {
    number: 18,
    title: 'Tocantins',
    location: 'Brazil',
    era: 'Middle',
    winner: 'J.T. Thomas',
    players: 16
  },
  {
    number: 19,
    title: 'Samoa',
    location: 'Samoa',
    era: 'Middle',
    winner: 'Natalie White',
    players: 20
  },
  {
    number: 20,
    title: 'Heroes vs. Villains',
    location: 'Samoa',
    era: 'Middle',
    winner: 'Sandra Diaz-Twine',
    players: 20
  },
  {
    number: 21,
    title: 'Nicaragua',
    location: 'Nicaragua',
    era: 'Modern',
    winner: 'Jud "Fabio" Birza',
    players: 20
  },
  {
    number: 22,
    title: 'Redemption Island',
    location: 'Nicaragua',
    era: 'Modern',
    winner: 'Rob Mariano',
    players: 18
  },
  {
    number: 23,
    title: 'South Pacific',
    location: 'Samoa',
    era: 'Modern',
    winner: 'Sophie Clarke',
    players: 18
  },
  {
    number: 24,
    title: 'One World',
    location: 'Samoa',
    era: 'Modern',
    winner: 'Kim Spradlin',
    players: 18
  },
  {
    number: 25,
    title: 'Philippines',
    location: 'Philippines',
    era: 'Modern',
    winner: 'Denise Stapley',
    players: 18
  },
  {
    number: 26,
    title: 'Caramoan: Fans vs. Favorites',
    location: 'Philippines',
    era: 'Modern',
    winner: 'John Cochran',
    players: 20
  },
  {
    number: 27,
    title: 'Blood vs. Water',
    location: 'Philippines',
    era: 'Modern',
    winner: 'Tyson Apostol',
    players: 20
  },
  {
    number: 28,
    title: 'Cagayan',
    location: 'Philippines',
    era: 'Modern',
    winner: 'Tony Vlachos',
    players: 18
  },
  {
    number: 29,
    title: 'San Juan del Sur: Blood vs. Water',
    location: 'Nicaragua',
    era: 'Modern',
    winner: 'Natalie Anderson',
    players: 18
  },
  {
    number: 30,
    title: 'Worlds Apart',
    location: 'Nicaragua',
    era: 'Modern',
    winner: 'Mike Holloway',
    players: 18
  },
  {
    number: 31,
    title: 'Cambodia: Second Chance',
    location: 'Cambodia',
    era: 'Modern',
    winner: 'Jeremy Collins',
    players: 20
  },
  {
    number: 32,
    title: 'Kaoh Rong',
    location: 'Cambodia',
    era: 'Modern',
    winner: 'Michele Fitzgerald',
    players: 18
  },
  {
    number: 33,
    title: 'Millennials vs. Gen X',
    location: 'Fiji',
    era: 'Modern',
    winner: 'Adam Klein',
    players: 20
  },
  {
    number: 34,
    title: 'Game Changers',
    location: 'Fiji',
    era: 'Modern',
    winner: 'Sarah Lacina',
    players: 20
  },
  {
    number: 35,
    title: 'Heroes vs. Healers vs. Hustlers',
    location: 'Fiji',
    era: 'Modern',
    winner: 'Ben Driebergen',
    players: 18
  },
  {
    number: 36,
    title: 'Ghost Island',
    location: 'Fiji',
    era: 'Modern',
    winner: 'Wendell Holland',
    players: 20
  },
  {
    number: 37,
    title: 'David vs. Goliath',
    location: 'Fiji',
    era: 'Modern',
    winner: 'Nick Wilson',
    players: 20
  },
  {
    number: 38,
    title: 'Edge of Extinction',
    location: 'Fiji',
    era: 'Modern',
    winner: 'Chris Underwood',
    players: 18
  },
  {
    number: 39,
    title: 'Island of the Idols',
    location: 'Fiji',
    era: 'Modern',
    winner: 'Tommy Sheehan',
    players: 20
  },
  {
    number: 40,
    title: 'Winners at War',
    location: 'Fiji',
    era: 'Modern',
    winner: 'Tony Vlachos',
    players: 20
  },
  {
    number: 41,
    title: 'Survivor 41',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Erika Casupanan',
    players: 18
  },
  {
    number: 42,
    title: 'Survivor 42',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Maryanne Oketch',
    players: 18
  },
  {
    number: 43,
    title: 'Survivor 43',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Mike Gabler',
    players: 18
  },
  {
    number: 44,
    title: 'Survivor 44',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Yamil "Yam Yam" Arocho',
    players: 18
  },
  {
    number: 45,
    title: 'Survivor 45',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Dee Valladares',
    players: 18
  },
  {
    number: 46,
    title: 'Survivor 46',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Kenzie Petty',
    players: 18
  },
  {
    number: 47,
    title: 'Survivor 47',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Rachel LaMont',
    players: 18
  },
  {
    number: 48,
    title: 'Survivor 48',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Kyle Fraser',
    players: 18
  },
  {
    number: 49,
    title: 'Survivor 49',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Savannah Louie',
    players: 18
  },
  {
    number: 50,
    title: 'Survivor 50: In the Hands of the Fans',
    location: 'Fiji',
    era: 'New Era',
    winner: 'Aubry Bracco',
    players: 24
  }
];

const STORAGE_KEY = 'survivorTrackerWatched';

let watchedSeasons = loadWatchedSeasons();


function loadWatchedSeasons() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);

    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData.filter(seasonNumber =>
      Number.isInteger(seasonNumber) &&
      seasons.some(season => season.number === seasonNumber)
    );
  } catch (error) {
    console.error('Could not load watched seasons:', error);
    return [];
  }
}


function saveWatchedSeasons() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(watchedSeasons)
    );
  } catch (error) {
    console.error('Could not save watched seasons:', error);
  }
}


function isWatched(seasonNumber) {
  return watchedSeasons.includes(seasonNumber);
}


function toggleWatched(seasonNumber) {
  if (isWatched(seasonNumber)) {
    watchedSeasons = watchedSeasons.filter(
      number => number !== seasonNumber
    );
  } else {
    watchedSeasons.push(seasonNumber);
  }

  saveWatchedSeasons();
  updateAllProgress();
  renderSeasonGrid();
}


function getFilteredSeasons() {
  const searchInput = document.querySelector('#searchInput');
  const eraFilter = document.querySelector('#eraFilter');
  const statusFilter = document.querySelector('#statusFilter');
  const sortSelect = document.querySelector('#sortSelect');

  const search = searchInput
    ? searchInput.value.trim().toLowerCase()
    : '';

  const era = eraFilter
    ? eraFilter.value
    : 'all';

  const status = statusFilter
    ? statusFilter.value
    : 'all';

  const sort = sortSelect
    ? sortSelect.value
    : 'number-asc';

  const filteredSeasons = seasons.filter(season => {
    const searchableText = `
      ${season.number}
      ${season.title}
      ${season.location}
      ${season.era}
      ${season.winner}
      ${season.players}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(search);
    const matchesEra = era === 'all' || season.era === era;

    let matchesStatus = true;

    if (status === 'watched') {
      matchesStatus = isWatched(season.number);
    } else if (status === 'unwatched') {
      matchesStatus = !isWatched(season.number);
    }

    return matchesSearch && matchesEra && matchesStatus;
  });

  return filteredSeasons.sort((firstSeason, secondSeason) => {
    if (sort === 'number-desc') {
      return secondSeason.number - firstSeason.number;
    }

    if (sort === 'title-asc') {
      return firstSeason.title.localeCompare(secondSeason.title);
    }

    if (sort === 'title-desc') {
      return secondSeason.title.localeCompare(firstSeason.title);
    }

    if (sort === 'players-desc') {
      return (
        secondSeason.players - firstSeason.players ||
        firstSeason.number - secondSeason.number
      );
    }

    return firstSeason.number - secondSeason.number;
  });
}


function createSeasonCard(season) {
  const watched = isWatched(season.number);

  return `
    <article class="season-card ${watched ? 'watched' : ''}">
      <div
        class="card-art"
        role="img"
        aria-label="Decorative artwork for season ${season.number}"
      >
        <span>S${season.number}</span>
      </div>

      <div class="card-body">
        <p class="eyebrow">Season ${season.number}</p>

        <h2>${season.title}</h2>

        <div class="card-meta">
          <span class="tag">${season.era}</span>
          <span class="tag">${season.location}</span>
          <span class="tag">${season.players} players</span>
        </div>

        <p>
          <strong>Winner:</strong>
          ${season.winner}
        </p>

        <div class="card-actions">
          <button
            class="button primary watch-button
              ${watched ? 'is-watched' : ''}"
            type="button"
            data-season="${season.number}"
            aria-pressed="${watched}"
          >
            ${watched ? '✓ Watched' : 'Mark watched'}
          </button>
        </div>
      </div>
    </article>
  `;
}


function renderSeasonGrid() {
  const grid = document.querySelector('#seasonGrid');
  const resultsText = document.querySelector('#resultsText');

  if (!grid) {
    return;
  }

  const filteredSeasons = getFilteredSeasons();

  if (filteredSeasons.length > 0) {
    grid.innerHTML = filteredSeasons
      .map(createSeasonCard)
      .join('');
  } else {
    grid.innerHTML = `
      <div class="empty-state">
        <h2>No seasons found</h2>
        <p>Try changing your search or filters.</p>
      </div>
    `;
  }

  if (resultsText) {
    resultsText.textContent =
      `${filteredSeasons.length} result` +
      `${filteredSeasons.length === 1 ? '' : 's'}`;
  }

  const watchButtons = grid.querySelectorAll('.watch-button');

  watchButtons.forEach(button => {
    button.addEventListener('click', () => {
      const seasonNumber = Number(button.dataset.season);
      toggleWatched(seasonNumber);
    });
  });
}


function updateAllProgress() {
  const watchedCount = seasons.filter(season =>
    isWatched(season.number)
  ).length;

  const percent = seasons.length > 0
    ? (watchedCount / seasons.length) * 100
    : 0;

  const progressText = document.querySelector('#progressText');
  const progressBar = document.querySelector('#progressBar');
  const homeProgressText = document.querySelector('#homeProgressText');
  const homeProgressBar = document.querySelector('#homeProgressBar');

  if (progressText) {
    progressText.textContent =
      `${watchedCount} of ${seasons.length} watched`;
  }

  if (progressBar) {
    progressBar.style.width = `${percent}%`;

    const progressTrack = progressBar.parentElement;

    if (progressTrack) {
      progressTrack.setAttribute(
        'aria-valuemin',
        '0'
      );

      progressTrack.setAttribute(
        'aria-valuemax',
        String(seasons.length)
      );

      progressTrack.setAttribute(
        'aria-valuenow',
        String(watchedCount)
      );

      progressTrack.setAttribute(
        'aria-valuetext',
        `${watchedCount} of ${seasons.length} seasons watched`
      );
    }
  }

  if (homeProgressText) {
    homeProgressText.textContent =
      `${watchedCount} of ${seasons.length} seasons watched`;
  }

  if (homeProgressBar) {
    homeProgressBar.style.width = `${percent}%`;

    const homeProgressTrack = homeProgressBar.parentElement;

    if (homeProgressTrack) {
      homeProgressTrack.setAttribute(
        'aria-valuemin',
        '0'
      );

      homeProgressTrack.setAttribute(
        'aria-valuemax',
        String(seasons.length)
      );

      homeProgressTrack.setAttribute(
        'aria-valuenow',
        String(watchedCount)
      );

      homeProgressTrack.setAttribute(
        'aria-valuetext',
        `${watchedCount} of ${seasons.length} seasons watched`
      );
    }
  }
}


function chooseRandomUnwatched() {
  const unwatchedSeasons = seasons.filter(
    season => !isWatched(season.number)
  );

  if (unwatchedSeasons.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(
    Math.random() * unwatchedSeasons.length
  );

  return unwatchedSeasons[randomIndex];
}


function showRecommendation(context = 'home') {
  const season = chooseRandomUnwatched();

  const title = context === 'tracker'
    ? document.querySelector('#trackerRecommendationTitle')
    : document.querySelector('#recommendationTitle');

  const text = context === 'tracker'
    ? document.querySelector('#trackerRecommendationText')
    : document.querySelector('#recommendationText');

  const panel = context === 'tracker'
    ? document.querySelector('#trackerRecommendation')
    : document.querySelector('#recommendationPanel');

  if (!title || !text || !panel) {
    return;
  }

  panel.hidden = false;

  if (season) {
    title.textContent =
      `Season ${season.number}: ${season.title}`;

    text.textContent =
      `${season.location} • ` +
      `${season.era} era • ` +
      `${season.players} players`;
  } else {
    title.textContent = 'You have watched them all';

    text.textContent =
      'Unmark one or more seasons to receive another recommendation.';
  }
}


function initializeNavigation() {
  const button = document.querySelector('#menuButton');
  const nav = document.querySelector('#mainNav');

  if (!button || !nav) {
    return;
  }

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    button.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    button.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );

    button.textContent = isOpen ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation');
      button.textContent = '☰';
    });
  });
}


function initializeFooter() {
  const yearElements = document.querySelectorAll('#currentYear');
  const modifiedElements = document.querySelectorAll('#lastModified');

  yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  modifiedElements.forEach(element => {
    element.textContent = document.lastModified;
  });
}


function initializeTrackerControls() {
  const searchInput = document.querySelector('#searchInput');
  const eraFilter = document.querySelector('#eraFilter');
  const statusFilter = document.querySelector('#statusFilter');
  const sortSelect = document.querySelector('#sortSelect');
  const randomButton = document.querySelector('#randomButton');
  const homeRandomButton = document.querySelector('#homeRandomButton');

  if (searchInput) {
    searchInput.addEventListener('input', renderSeasonGrid);
  }

  if (eraFilter) {
    eraFilter.addEventListener('change', renderSeasonGrid);
  }

  if (statusFilter) {
    statusFilter.addEventListener('change', renderSeasonGrid);
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', renderSeasonGrid);
  }

  if (randomButton) {
    randomButton.addEventListener('click', () => {
      showRecommendation('tracker');
    });
  }

  if (homeRandomButton) {
    homeRandomButton.addEventListener('click', () => {
      showRecommendation('home');
    });
  }
}

initializeNavigation();
initializeFooter();
initializeTrackerControls();
updateAllProgress();
renderSeasonGrid();