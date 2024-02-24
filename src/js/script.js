// accordion

let accordionBtn=Array.from(document.getElementsByClassName('accordionBtn'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
  })
})
// menu

let btn = Array.from(document.querySelectorAll('.viza'));
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));
let dropdownBtn =Array.from(document.getElementsByClassName('dropdownBtn'));
let dropdownBtn2 =Array.from(document.getElementsByClassName('dropdownBtn2'));
let hamIcon = document.getElementById('hamIcon');


dropdownBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('.arrowSvg').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
dropdownBtn2.forEach((item)=>{
  item.addEventListener('click', function () {
    item.querySelector('.arrowSvg').classList.toggle('active');
    item.nextElementSibling.nextElementSibling.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})

btn.forEach((item) => {
  item.addEventListener('mouseover', function () {
    btn.forEach((items) => {items.classList.remove('active')});
    item.classList.add('active');
    let tabId = item.dataset.id;
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

hamIcon.addEventListener('click', function () {
  hamIcon.classList.toggle('active');
  document.querySelector('.mobileMenu').classList.toggle('active');
})


// swiper
var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 180,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var aboutBanner = new Swiper(".aboutBanner", {
  slidesPerView: 1,
  loop:true,
  spaceBetween: 0,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var singleDeparteman = new Swiper(".singleDeparteman", {
  slidesPerView: 1,
  spaceBetween: 180,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
  spaceBetween: 19,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,

    },
    992: {
      slidesPerView: 3,
      spaceBetween: 41,
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
var statistics= new Swiper(".statistics", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
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
var groupSwiper= new Swiper(".groupSwiper", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
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
var departemanCmment = new Swiper(".departeman-comment", {
  slidesPerView: 1,
  spaceBetween: 180,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var lawyer2 = new Swiper(".lawyer2", {
  loop: true,
  spaceBetween: 28,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      spaceBetween: 48,
    },
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
  slidesPerView: 1.6,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1300: {
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
var customers = new Swiper(".customers", {
  loop: true,
  spaceBetween: 26,
  slidesPerView: 1.7,
  breakpoints: {
    576: {
      slidesPerView: 2,

    },
    992: {
      slidesPerView: 3,
      spaceBetween: 41,
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
var comment = new Swiper(".comment", {
  loop: true,
  spaceBetween:49,
  slidesPerView: 1,
  breakpoints: {
    992: {
      slidesPerView: 2,
    },
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
// radio input

let addressItem=Array.from(document.getElementsByClassName('addressItem'));

addressItem.forEach((item)=>{
  item.addEventListener('click',function () {
    addressItem.forEach((items)=>{items.classList.remove('active')});
    item.classList.add('active');
  })
})

// video player
const playerVideo = document.getElementById("player-video");
const playerbutton = document.getElementById("player-button");

playerbutton.addEventListener("click", () => {
  playerVideo.play();
    playerVideo.setAttribute("controls", "");
});

playerVideo.addEventListener("play", () => {
  playerbutton.style.visibility = "hidden";
  playerbutton.style.opacity = "0";
});

playerVideo.addEventListener("pause", () => {
  playerbutton.style.visibility = "visible";
  playerbutton.style.opacity = "1";
});

// scroll

(function($){
  $(window).on("load",function(){
    
    /* all available option parameters with their default values */
    $(".content").mCustomScrollbar({
      setWidth:false,
      setHeight:false,
      setTop:0,
      setLeft:0,
      axis:"y",
      scrollbarPosition:"inside",
      scrollInertia:950,
      autoDraggerLength:true,
      autoHideScrollbar:false,
      autoExpandScrollbar:false,
      alwaysShowScrollbar:0,
      snapAmount:null,
      snapOffset:0,
      mouseWheel:{
        enable:true,
        scrollAmount:"auto",
        axis:"y",
        preventDefault:false,
        deltaFactor:"auto",
        normalizeDelta:false,
        invert:false,
        disableOver:["select","option","keygen","datalist","textarea"]
      },
      scrollButtons:{
        enable:false,
        scrollType:"stepless",
        scrollAmount:"auto"
      },
      keyboard:{
        enable:true,
        scrollType:"stepless",
        scrollAmount:"auto"
      },
      contentTouchScroll:25,
      advanced:{
        autoExpandHorizontalScroll:false,
        autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
        updateOnContentResize:true,
        updateOnImageLoad:true,
        updateOnSelectorChange:false,
        releaseDraggableSelectors:false
      },
      theme:"light",
      callbacks:{
        onInit:false,
        onScrollStart:false,
        onScroll:false,
        onTotalScroll:false,
        onTotalScrollBack:false,
        whileScrolling:false,
        onTotalScrollOffset:0,
        onTotalScrollBackOffset:0,
        alwaysTriggerOffsets:true,
        onOverflowY:false,
        onOverflowX:false,
        onOverflowYNone:false,
        onOverflowXNone:false
      },
      live:false,
      liveSelector:null
    });
    
  });
})(jQuery);