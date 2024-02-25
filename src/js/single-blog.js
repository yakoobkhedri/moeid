const usersCommentCont = document.querySelector("#usersComment");
const article_id = document.querySelector("#article-id");
async function getDataFromApi() {
  let data = await (
      await fetch(
         "http://admin.moeidgroup.com/site/comments?article_id=65c96848401a62e1660a4464"
      )
  ).json();
  return data;
}

let showComments = 6;
let isBlur = false;
let isTrueAdd = false;
function createComment(comments) {
  const parentDivs = document.createElement("div");
  const parentDiv = document.createElement("div");
  const parentDiv_div1 = document.createElement("div");
  let parentDiv_div1_img = ""
  const parentDiv_div1_div = document.createElement("div");
  const parentDiv_div1_div_p1 = document.createElement("p");
  const parentDiv_div1_div_p2 = document.createElement("p");

  const parentDiv_div2 = document.createElement("div");
  const parentDiv_div2_p = document.createElement("p");
  let answerComment = `
<div class="bg-[#485368] rounded-2xl relative ltr:rounded-l-[40px] ltr:rounded-r-2xl rounded-r-[40px] p-5 lg:p-[16px] lg:pl-4 flex items-center justify-between flex-wrap md:flex-nowrap gap-5 mb-5 ml-6 lg:mr-[110px]">

<svg style="position:absolute;top:-18px;right:60px;left:60px" class="class="ltr:left-20 ltr:right-auto right-20" width="44" height="33" viewBox="0 0 151 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M150.562 33.0001C144.333 33.0001 138.247 31.1229 133.099 27.6131L108.622 10.9241C88.3809 -2.87653 61.7178 -2.73322 41.6265 11.284L18.4922 27.424C13.2896 31.0538 7.09863 33.0001 0.754883 33.0001H150.562Z" fill="#485368"/>
</svg>
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
        <p class="text-white text-xs opacity-50 mt-3">${comments.adminResponse}</p>
    </div>
</div>
</div>
`;
  parentDiv.className =
      "bg-[#F0F3F5] rounded-2xl ltr:rounded-l-[40px] ltr:rounded-r-2xl rounded-r-[40px] p-5 lg:p-[16px] lg:pl-4 flex items-center justify-between flex-wrap md:flex-nowrap gap-5 mb-5";

  parentDiv_div1.className =
      "flex items-center flex-wrap sm:flex-nowrap gap-[18px]";
  parentDiv_div1_img=`
  <svg class="w-[45px] h-[45px] rounded-full block shadow-20 mx-auto flex-shrink-0" width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81828 5.27239C2.22012 5.17193 2.62732 5.41625 2.72778 5.81809L3.10975 7.34596C3.71957 9.78523 5.64125 11.6764 8.0847 12.25H16.0002C18.0912 12.25 19.8512 13.8151 20.0956 15.8918L20.745 21.4124C20.7934 21.8237 20.4992 22.1965 20.0878 22.2449C19.6764 22.2933 19.3037 21.999 19.2553 21.5876L18.6058 16.0671C18.4504 14.7458 17.3306 13.75 16.0002 13.75H7.91785L7.83748 13.7321C4.80227 13.0576 2.40864 10.7262 1.65454 7.70976L1.27257 6.1819C1.17211 5.78005 1.41643 5.37285 1.81828 5.27239Z" fill="#F76B16"/>
    <path opacity="0.5" d="M8 13.75V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13.75H8Z" fill="#F76B16"/>
    <circle cx="12" cy="6" r="4" fill="#F76B16"/>
</svg>
  `
  parentDiv_div1_div_p1.className =
      "text-sm font-black font-rokh text-secondary text-center sm:text-right ltr:sm:text-left";
  parentDiv_div1_div_p1.textContent = comments.fullName;
  parentDiv_div1_div_p2.className = "text-secondary text-xs opacity-50 mt-3";
  parentDiv_div1_div_p2.textContent = comments.comment;
  parentDiv_div2.className = "flex-shrink-0 flex-grow md:flex-grow-0";
  parentDiv_div2_p.className =
      "text-xs opacity-30 mt-2 text-left ltr:text-right";
  parentDiv_div2_p.textContent = comments.date;

  parentDiv_div1.innerHTML+= parentDiv_div1_img;
  parentDiv_div1.appendChild(parentDiv_div1_div);
  parentDiv_div1_div.appendChild(parentDiv_div1_div_p1);
  parentDiv_div1_div.appendChild(parentDiv_div1_div_p2);
  parentDiv_div2.appendChild(parentDiv_div2_p);
  parentDiv.appendChild(parentDiv_div1);
  parentDiv.appendChild(parentDiv_div2);

  parentDivs.appendChild(parentDiv);
  if (comments.adminResponse) parentDivs.innerHTML += answerComment;
  usersCommentCont.appendChild(parentDivs);
}
async function setComments() {
  let commentsInfo = await getDataFromApi();
  let showCommentArr = commentsInfo.slice(0, showComments);
  showCommentArr.forEach((item, index) => {
    createComment(commentsInfo[index]);
  });
}
setComments();
async function setCommentsEfect() {
  let commentsInfo = await getDataFromApi();
  if (commentsInfo.length - 1 < showComments) showComments = 0;
  createComment(commentsInfo[showComments]);
  usersCommentCont.lastChild.classList.add("add");
  usersCommentCont.lastChild.onanimationend = () => {
    usersCommentCont.lastChild.classList.remove("add");
  };
  usersCommentCont.children[0].classList.add("remove");
  isTrueAdd = false;
  usersCommentCont.children[0].onanimationend = () => {
    usersCommentCont.children[0].remove();
    isTrueAdd = true;
    setCommentsEfect();
  };
  usersCommentCont.children[0].onanimationcancel = () => {
    usersCommentCont.children[0].remove();
    isTrueAdd = true;
    setCommentsEfect();
  };
  onanimationiteration;
  showComments++;
}
setCommentsEfect();

onblur = () => (isBlur = true);

onfocus = () => (isBlur = false);
onfocus = () => (isBlur = false);