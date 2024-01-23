// menu

let btn = Array.from(document.querySelectorAll('.viza'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let dropdownBtn=Array.from(document.getElementsByClassName('dropdownBtn'));
let dropdown=Array.from(document.getElementsByClassName('dropdown'));
let linkmenu=Array.from(document.getElementsByClassName('linkmenu'));

dropdownBtn.forEach((item)=>{
  item.addEventListener('mouseenter',function () {
    item.querySelector('.dropdown').style.display='grid';
    linkmenu.forEach((link)=>{
      link.addEventListener('mouseenter', function () {
        item.querySelector('.dropdown').style.display='none';
      })
    })
  })
})
dropdown.forEach((item)=>{
  item.addEventListener('mouseleave',function () {
    item.style.display='none';
  })
})
document.addEventListener('mousemove', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdown.forEach((item)=>{
      
    })
  }
})
btn.forEach((item) => {
  item.addEventListener('mouseover', function () {
    btn.forEach((items) => {items.classList.remove('active')});
    let tabId = item.dataset.id;
    item.classList.add('active');
    tabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('grid');
        content.classList.remove('hidden');
      } else {
        content.classList.remove('grid');
        content.classList.add('hidden');
      }
    })
  })
});

// dropdownBtn.addEventListener('click', function () {
//   this.querySelector('svg').classList.toggle('active');
//   this.nextElementSibling.classList.toggle('active');
// })

// hamIcon.addEventListener('click', function () {
//   mobileMenu.classList.add('active');
// })

// document.getElementById('closemenu').addEventListener('click', function () {
//   mobileMenu.classList.remove('active');
// })

// serviceLink.addEventListener('mouseenter', function () {
//   dropdown.classList.add('active');
//   langDropdown.forEach((item) => {
//     item.classList.remove('active');
//   })
// })


// swiper
var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 180,
  // autoplay: true,
});
var category = new Swiper(".category", {
  slidesPerView: 1.3,
  spaceBetween: 20,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 3,
    }
  },
});
var ourServices = new Swiper(".ourServices", {
  loop: true,
  spaceBetween: 36,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
var lawyer2 = new Swiper(".lawyer2", {
  loop: true,
  spaceBetween: 48,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var lawyer = new Swiper(".lawyer", {
  loop: true,
  spaceBetween: 26,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
var services = new Swiper(".services", {
  loop: true,
  spaceBetween: 26,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

// change language

let langItems = Array.from(document.querySelectorAll('.langDropdown > div'));
let languageLink = Array.from(document.querySelectorAll('.language-link'));
let langDropdown = Array.from(document.querySelectorAll('.langDropdown'));
let langIcons = Array.from(document.querySelectorAll('.langIcon'));
let swiper = Array.from(document.querySelectorAll('.swiper'));

languageLink.forEach((item) => {
  item.addEventListener('click', function () {
    langDropdown.forEach((item) => {
      item.classList.toggle('active');
    })
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.langDropdown') && !event.target.closest('.language-link')) {
        langDropdown.forEach((item) => {
          item.classList.remove('active');
        })
      }
    })
  })
})

langItems.forEach((item) => {
  item.addEventListener('click', function () {
    let langIcon = item.querySelector('img').src;
    langIcons.forEach((item) => [
      item.src = langIcon
    ])
    langDropdown.forEach((item) => {
      item.classList.remove('active');
    })
    let tabId = item.dataset.id;
    if (tabId == 1) {
      document.getElementById('langText').textContent = 'ENG';
      document.documentElement.dir = 'ltr';
      swiper.forEach((item)=>{
        item.dir='ltr';
      })
    }
    if (tabId == 2) {
      document.getElementById('langText').textContent = 'FA';
      document.documentElement.dir = 'rtl';
    }
  })
});

// radio input

let addressItem=Array.from(document.getElementsByClassName('addressItem'));

addressItem.forEach((item)=>{
  item.addEventListener('click',function () {
    addressItem.forEach((items)=>{items.classList.remove('active')});
    item.classList.add('active');
  })
})