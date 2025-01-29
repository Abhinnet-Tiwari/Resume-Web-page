
// Swipper js code
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");
const svgIcon = document.getElementById('theme-icon');
const toggleColor = document.getElementById('toggleColor');
const body = document.body;
const iconColor = document.querySelectorAll(".iconColor")
const homeIcon = document.getElementById('homeIcon');
const formLabel = document.getElementById("formLabel");
const copyRight = document.getElementById("copyRight");
const savedTheme = localStorage.getItem('theme');
const scrollToTopBtn = document.getElementById("scrollToTop");

const aboutSection = document.getElementById("aboutSection");
const showBtn = document.getElementById("showBtn");
const closeBtn = document.getElementById("closeBtn");


if (savedTheme) {
    body.classList.add(savedTheme)
    updateSVGIcon(savedTheme);
}

lightBtn.addEventListener("click", () => {
    body.classList.toggle('light-mode');
    const currentTheme = body.classList.contains('light-mode' ? 'light-mode' : "");
    localStorage.setItem('theme', currentTheme);
    updateSVGIcon(currentTheme);
})


function updateSVGIcon(theme) {
    console.log(theme)
    if (theme == true) {
        svgIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class=" feather feather-moon hover:scale-110 transition duration-100 ease-in-out dark">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>` ;
        toggleColor.classList.add("text-#b0b2c3");
        homeIcon.classList.add("text-#b0b2c3");
        // formLabel.classList.add("text-gray-900");

        copyRight.classList.remove("text-gray-300");
        formLabel.classList.remove("dark:text-white");

        formLabel.classList.add("dark:text-black");

    } else if (theme == false) {

        svgIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-sun hover:scale-110 transition duration-100 ease-in-out light">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
        toggleColor.classList.remove("text-#b0b2c3");
        homeIcon.classList.remove("text-#b0b2c3");
        // formLabel.classList.remove("text-gray-900");
        formLabel.classList.add("dark:text-white");
        formLabel.classList.remove("dark:text-black");
        copyRight.classList.add("text-gray-300");


    }
}


// scoll page setup
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// About section all function
showBtn.addEventListener("click", () => {
    aboutSection.style.display = "flex";
})
closeBtn.addEventListener("click", () => {
    aboutSection.style.display = "none";
})

aboutSection.addEventListener("click", (e) => {
    if (e.target === aboutSection) {
        aboutSection.style.display = "none";
    }
})

// section scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Background-Music function
document.addEventListener("DOMContentLoaded", () => {
    const musicBtn = document.getElementById("musicBtn");
    const bgMusic = document.getElementById("bgMusic");
    const icon = document.getElementById("icon");
    const volumeSlider = document.getElementById("volumeSlider");

    // Automatically pause
    bgMusic.volume = volumeSlider.value;
    bgMusic.pause();

    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
        } else {
            bgMusic.pause();
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
        }
    })
    // Adjust volume using slider
    volumeSlider.addEventListener("input", () => {
        bgMusic.volume = volumeSlider.value;
    });
})