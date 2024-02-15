const usersCommentCont = document.querySelector("#usersComment");

let commentsInfo = {
  showComments: 5,
  startIndex: 0,
  comments: [
    { hasCommentsAnswer: true },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: true },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: true },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: true },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: true },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: true },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
    { hasCommentsAnswer: false },
  ],
};
function createComment(hasAnser) {
  const parentDivs = document.createElement("div");
  const parentDiv = document.createElement("div");

  const parentDiv_div1 = document.createElement("div");
  const parentDiv_div1_img = document.createElement("img");
  const parentDiv_div1_div = document.createElement("div");
  const parentDiv_div1_div_p1 = document.createElement("p");
  const parentDiv_div1_div_p2 = document.createElement("p");

  const parentDiv_div2 = document.createElement("div");
  const parentDiv_div2_div = document.createElement("div");
  const parentDiv_div2_div_svg = `  
<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6775 9.46642H7.72684L8.94017 8.26242C9.11592 8.08667 9.21466 7.8483 9.21466 7.59975C9.21466 7.3512 9.11592 7.11283 8.94017 6.93708C8.76442 6.76133 8.52606 6.6626 8.27751 6.6626C8.02896 6.6626 7.79059 6.76133 7.61484 6.93708L4.81484 9.73708C4.72987 9.82585 4.66326 9.93052 4.61884 10.0451C4.52549 10.2723 4.52549 10.5272 4.61884 10.7544C4.66326 10.869 4.72987 10.9737 4.81484 11.0624L7.61484 13.8624C7.70161 13.9499 7.80483 14.0193 7.91857 14.0667C8.0323 14.1141 8.1543 14.1385 8.27751 14.1385C8.40072 14.1385 8.52271 14.1141 8.63645 14.0667C8.75018 14.0193 8.85341 13.9499 8.94017 13.8624C9.02765 13.7757 9.09709 13.6724 9.14447 13.5587C9.19186 13.445 9.21625 13.323 9.21625 13.1997C9.21625 13.0765 9.19186 12.9545 9.14447 12.8408C9.09709 12.7271 9.02765 12.6238 8.94017 12.5371L7.72684 11.3331H16.6775C16.925 11.3331 17.1624 11.4314 17.3375 11.6065C17.5125 11.7815 17.6108 12.0189 17.6108 12.2664V15.9997C17.6108 16.2473 17.7092 16.4847 17.8842 16.6597C18.0592 16.8348 18.2966 16.9331 18.5442 16.9331C18.7917 16.9331 19.0291 16.8348 19.2041 16.6597C19.3792 16.4847 19.4775 16.2473 19.4775 15.9997V12.2664C19.4775 11.5238 19.1825 10.8116 18.6574 10.2865C18.1323 9.76142 17.4201 9.46642 16.6775 9.46642Z" fill="#F76B16"></path>
</svg>
`;
  const parentDiv_div2_div_p = document.createElement("p");
  const parentDiv_div2_p = document.createElement("p");
  let answerComment = `
<div class="bg-[#485368] shadow-15 rounded-2xl relative ltr:rounded-l-[40px] ltr:rounded-r-2xl rounded-r-[40px] p-5 lg:p-[7px] lg:pl-4 flex items-center justify-between flex-wrap md:flex-nowrap gap-5 mb-5 ml-6 lg:mr-[110px]">
<img alt="arrow" src="../img/arrow3.png" class="absolute ltr:left-20 ltr:right-auto right-20 -top-4">

<div class="flex items-center flex-wrap sm:flex-nowrap gap-[18px]">
    <div class="flex items-center justify-center mx-auto w-[60px] h-[60px] rounded-full bg-white flex-shrink-0">
        <svg class="shadow-20" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4993 11.25C15.9845 11.25 17.9993 9.23528 17.9993 6.75C17.9993 4.26472 15.9845 2.25 13.4993 2.25C11.014 2.25 8.99927 4.26472 8.99927 6.75C8.99927 9.23528 11.014 11.25 13.4993 11.25Z" fill="#F76B16"/>
            <path opacity="0.5" d="M22.4993 19.6875C22.4993 22.4831 22.4993 24.75 13.4993 24.75C4.49927 24.75 4.49927 22.4831 4.49927 19.6875C4.49927 16.8919 8.52902 14.625 13.4993 14.625C18.4695 14.625 22.4993 16.8919 22.4993 19.6875Z" fill="#F76B16"/>
        </svg>
    </div>
    <div>
        <p class="text-sm font-black font-rokh text-white text-center sm:text-right ltr:sm:text-left">
            مدیریت</p>
        <p class="text-white text-xs opacity-50 mt-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
    </div>
</div>
<div class="flex-shrink-0 flex-grow md:flex-grow-0">
    <div class="flex items-center justify-end gap-1 cursor-pointer">
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6775 9.46642H7.72684L8.94017 8.26242C9.11592 8.08667 9.21466 7.8483 9.21466 7.59975C9.21466 7.3512 9.11592 7.11283 8.94017 6.93708C8.76442 6.76133 8.52606 6.6626 8.27751 6.6626C8.02896 6.6626 7.79059 6.76133 7.61484 6.93708L4.81484 9.73708C4.72987 9.82585 4.66326 9.93052 4.61884 10.0451C4.52549 10.2723 4.52549 10.5272 4.61884 10.7544C4.66326 10.869 4.72987 10.9737 4.81484 11.0624L7.61484 13.8624C7.70161 13.9499 7.80483 14.0193 7.91857 14.0667C8.0323 14.1141 8.1543 14.1385 8.27751 14.1385C8.40072 14.1385 8.52271 14.1141 8.63645 14.0667C8.75018 14.0193 8.85341 13.9499 8.94017 13.8624C9.02765 13.7757 9.09709 13.6724 9.14447 13.5587C9.19186 13.445 9.21625 13.323 9.21625 13.1997C9.21625 13.0765 9.19186 12.9545 9.14447 12.8408C9.09709 12.7271 9.02765 12.6238 8.94017 12.5371L7.72684 11.3331H16.6775C16.925 11.3331 17.1624 11.4314 17.3375 11.6065C17.5125 11.7815 17.6108 12.0189 17.6108 12.2664V15.9997C17.6108 16.2473 17.7092 16.4847 17.8842 16.6597C18.0592 16.8348 18.2966 16.9331 18.5442 16.9331C18.7917 16.9331 19.0291 16.8348 19.2041 16.6597C19.3792 16.4847 19.4775 16.2473 19.4775 15.9997V12.2664C19.4775 11.5238 19.1825 10.8116 18.6574 10.2865C18.1323 9.76142 17.4201 9.46642 16.6775 9.46642Z" fill="#F76B16"></path>
        </svg>
        <p class="text-xs text-white font-extrabold">پاسخ</p>
    </div>
    <p class="text-xs text-white opacity-30 mt-2 text-left ltr:text-right">۱۴۰۱/۱۲/۱۲ /
        ۲۳:۱۶</p>
</div>
</div>
`;
  parentDiv.className =
    "bg-[#F0F3F5] shadow-15 rounded-2xl ltr:rounded-l-[40px] ltr:rounded-r-2xl rounded-r-[40px] p-5 lg:p-[7px] lg:pl-4 flex items-center justify-between flex-wrap md:flex-nowrap gap-5 mb-5";

  parentDiv_div1.className =
    "flex items-center flex-wrap sm:flex-nowrap gap-[18px]";
  parentDiv_div1_img.alt = "avatar";
  parentDiv_div1_img.src = "../img/avatar.png";
  parentDiv_div1_img.className =
    "w-[60px] h-[60px] rounded-full block shadow-20 mx-auto flex-shrink-0";
  parentDiv_div1_div_p1.className =
    "text-sm font-black font-rokh text-secondary text-center sm:text-right ltr:sm:text-left";
  parentDiv_div1_div_p1.textContent = "عطا حیدری";
  parentDiv_div1_div_p2.className = "text-secondary text-xs opacity-50 mt-3";
  parentDiv_div1_div_p2.textContent =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.";

  parentDiv_div2.className = "flex-shrink-0 flex-grow md:flex-grow-0";
  parentDiv_div2_div.className =
    "flex items-center justify-end gap-1 cursor-pointer";
  parentDiv_div2_div_p.className = "text-xs text-secondary font-extrabold";
  parentDiv_div2_div_p.textContent = "پاسخ";
  parentDiv_div2_p.className =
    "text-xs opacity-30 mt-2 text-left ltr:text-right";
  parentDiv_div2_p.textContent = `۱۴۰۱/۱۲/۱۲ /
۲۳:۱۶`;

  parentDiv_div1.appendChild(parentDiv_div1_img);
  parentDiv_div1.appendChild(parentDiv_div1_div);
  parentDiv_div1_div.appendChild(parentDiv_div1_div_p1);
  parentDiv_div1_div.appendChild(parentDiv_div1_div_p2);

  parentDiv_div2.appendChild(parentDiv_div2_div);
  parentDiv_div2_div.innerHTML = parentDiv_div2_div_svg;
  parentDiv_div2_div.appendChild(parentDiv_div2_div_p);
  parentDiv_div2.appendChild(parentDiv_div2_p);

  parentDiv.appendChild(parentDiv_div1);
  parentDiv.appendChild(parentDiv_div2);
  parentDivs.appendChild(parentDiv);
  if (hasAnser) parentDivs.innerHTML += answerComment;
  usersCommentCont.appendChild(parentDivs);
}
function setComments() {
  let showCommentArr = commentsInfo.comments.slice(
    commentsInfo.startIndex,
    commentsInfo.showComments
  );
  showCommentArr.forEach((item, index) => {
    createComment(commentsInfo.comments[index].hasCommentsAnswer);
  });
}
setComments();
function setCommentsEfect() {
  if (!commentsInfo.comments[commentsInfo.showComments]) return;
  createComment(
    commentsInfo.comments[commentsInfo.showComments].hasCommentsAnswer
  );
  usersCommentCont.lastChild.classList.add("add");
  usersCommentCont.lastChild.onanimationend = () => {
    usersCommentCont.lastChild.classList.remove("add");
  };
  usersCommentCont.children[0].classList.add("remove");
  usersCommentCont.classList.add("active");
  usersCommentCont.children[0].onanimationend = () => {
    usersCommentCont.children[0].remove();
    usersCommentCont.classList.remove("active");
  };
  commentsInfo.showComments++;
}

setInterval(() => {
  setCommentsEfect();
}, 6000);