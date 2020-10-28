const PageState = function () {
	let currentState = new homeState(this);

	this.init = function () {
		this.change(new homeState());
	};

	this.change = function (state) {
		currentState = state;
	};
};

// Home State
const homeState = function (page) {
	document.querySelector('#content').innerHTML = `
    <h3 class="breadcrumb">Main 
		<i class="fas fa-chevron-right"></i>
        Home
    </h3>
    <div class="about">
		<h1>Roeh Lewit</h1>
		<h3>
			Welcome! I am a career Chef turned Front-end Web
			Developer. In my professional career I have had years
			of experience working in high-stress, fast-paced,
			deadline-oriented environments. In this new career, I
			plan to deliver an excellent web experience using my
			skills of time management, creativty, thoughtful
			design, and dedicated hard work.
		</h3>
		<h3>
			I moved from student to management in my previous career
			because of my ability to learn quickly, collaborate
			with a team, utilize my rescourcefulness, and employ
			my strong work ethic. I am self-motvated and have
			trained myself in web development since late July,
			2020 learning several tools to create web pages and
			experiences. I appreciate your time to view my
			portfolio, and I look forward to discussing future
			opportunities.
		</h3>
	</div>
  `;
};

// Resume State
const resumeState = function (page) {
	document.querySelector('#content').innerHTML = `
    <h3 class="breadcrumb">Main 
		<i class="fas fa-chevron-right"></i>
        Resume
    </h3>
    <div class="resume-imgs">
        <img src="../dist/img/resume-pg1.png" alt="resume page 1">
        <img src="../dist/img/resume-pg2.png" alt="resume page 1">
        <img src="../dist/img/resume-pg3.png" alt="resume page 1">
    </div>
    `;
};

// Projects State
const projectState = function (page) {
	document.querySelector('#content').innerHTML = `
    <h3 class="breadcrumb">Main 
		<i class="fas fa-chevron-right"></i>
        Projects
    </h3>
    <div class="project-wrapper">
    <h1 class="p-title">Projects</h1>
    <div class="project-item">
        <div class="project-imgs">
            <img src="../dist/img/magnolia_2.png" alt="Magnolia website image" title="magnolia website"/>
            <img src="../dist/img/magnolia_resume.png" alt="Magnolia website responsive images" title="Magnolia website responsive images" />
        </div>
        <div class="description">
            <h3>Magnolia Remodel and Woodworks</h3>
            <h4>
                Mock-up website for local carpentry business in
                Portland, OR.
            </h4>
        </div>
        <div class="tools-used">
            <h5>HTML, CSS, Flex-box, JS</h5>
        </div>
        <div class="view-project">
            <a href="https://roehlewit.github.io/MagnoliaPDX/" target="_blank"> <i class="far fa-eye"></i> Website</a>
            <a href="https://github.com/roehlewit/MagnoliaPDX" target="_blank"> <i class="fab fa-github"></i> Code</a>
        </div>
    </div>
    <div class="project-item">
        <div class="project-imgs">
            <img src="../dist/img/meanqueen_screen.png" alt="Mean Queen website image" title="Mean Queen website image"/>
            <img src="../dist/img/meanqueen-resume.png" alt="Mean Queen website responsive images" title="Mean Queen website responsive images"/>
        </div>
        <div class="description">
            <h3>Mean Queen</h3>
            <h4>
                Landing page to promote new
                album for local band in Athens, GA.
            </h4>
        </div>
        <div class="tools-used">
            <h5>HTML, CSS, Flex-box, Grid</h5>
        </div>
        <div class="view-project">
            <a href="https://meanqueenband.com/" target="_blank"> <i class="far fa-eye"></i> Website</a>
            <a href="https://github.com/roehlewit/mean-queen-landing" target="_blank"> <i class="fab fa-github"></i> Code</a>
        </div>
    </div>
    <div class="project-item">
    <div class="project-imgs">
        <img src="../dist/img/movie-finder-dsktp.png" alt="Movie Finder website image" title="Movie Finder website image"/>
        <img src="../dist/img/movie_finder_portfolio.png" alt="Movie finder website responsive images" title="Movie finder website responsive images"/>
    </div>
    <div class="description">
        <h3>Movie Finder</h3>
        <h4>
            Application used to search for quick movie searches and now playing using The Movie Data Base.
        </h4>
    </div>
    <div class="tools-used">
        <h5>HTML, CSS, JS</h5>
    </div>
    <div class="view-project">
        <a href="https://roehlewit.github.io/movie_finder/"> <i class="far fa-eye"></i> Website</a>
        <a href="https://github.com/roehlewit/movie_finder"> <i class="fab fa-github"></i> Code</a>
    </div>
</div>
    <div class="project-item">
        <div class="project-imgs">
            <img src="../dist/img/resume_webpage_screen.png" alt="Portfolio website image" title="Portfolio website image" height=200/>
            <img src="../dist/img/resume_webpage.png" alt="Portfolio website responsive images" title="Portfolio website responsive images"/>
        </div>
        <div class="description">
            <h3>Resume</h3>
            <h4>
                My first portfolio page.
            </h4>
        </div>
        <div class="tools-used">
            <h5>HTML, CSS, JS</h5>
        </div>
        <div class="view-project">
            <a href="https://.roehlewitweb.com"> <i class="far fa-eye"></i> Website</a>
            <a href="https://github.com/roehlewit/resume"> <i class="fab fa-github"></i> Code</a>
        </div>
    </div>
 </div>
</div>
    `;
};

// Instantiate page states
const page = new PageState();

//Init first state
page.init();

// UI Variables

const home = document.getElementById('home'),
	resume = document.getElementById('resume'),
	projects = document.getElementById('projects');

// Event Listeners

//Home / About Us
home.addEventListener('click', (e) => {
	page.change(new homeState());

	e.preventDefault();
});

// Resume
resume.addEventListener('click', (e) => {
	page.change(new resumeState());

	e.preventDefault();
});

// Projects
projects.addEventListener('click', (e) => {
	page.change(new projectState());

	e.preventDefault();
});
