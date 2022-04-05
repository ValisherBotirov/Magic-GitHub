const searchInput = document.querySelector(".user__input");
const error = document.querySelector(".errorPage");
const head = document.querySelector(".head");
const main = document.querySelector(".main");

const gitHubUsers = async function (user) {
  // try {
  const dataJson = await fetch(
    `https://api.github.com/users/${user}?client_id=7a31f254ee765dbf1cc6&client_secret=aa6ffb6979ade93057e2f2aaa511b2205270b92d`
  );

  const data = await dataJson.json();
  // if (!data.ok) {
  //   throw new Error();
  // }
  let html = `
    <div class="box user__info">
    <div class="user__img">
      <img class="user-img" src="${data.avatar_url}" alt="" />
      <a href="${data.html_url}" class="btn">View Profile</a>
    </div>

    <div class="user__about">
      <div class="statistics">
        <p class="stat stat__1">Public Repos: ${data.public_repos}</p>
        <p class="stat stat__2">Public Gists: ${data.public_gists}</p>
        <p class="stat stat__3">Followers: ${data.followers}</p>
        <p class="stat stat__4">Following: ${data.following}</p>
      </div>
      <div class="infoo">
        <div class="table__info">
          <p class="about__text">Company: ${
            data.company == null ? "Yo`q" : data.company
          }</p>
          <p class="about__text">Website/Blog: ${data.blog}</p>
          <p class="about__text">Location: ${data.location}</p>
          <p class="about__text yes__border">Member Since: ${
            data.created_at
          }</p>
        </div>
      </div>
    </div>
  </div>
    `;
  // head.innerHTML = "";
  // head.insertAdjacentHTML("beforeend", html);
  head.innerHTML = html; //yoki

  // } catch (err) {
  //   error.style.display = "flex";
  //   // document.querySelector("body").style.overflow = "hiddin";
  // }
};

const getUserPro = async function (user) {
  const dataJson = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=created: asc&sort=5&client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797`
  );
  const data = await dataJson.json();
  console.log(data);
  // main.innerHTML = "";
  data.forEach(function (val) {
    let html = `
    <div class="box repo">
   <a href="${val.clone_url}" class="repo__name">${val.name}</a>
   <div class="report">
     <p class="stat stat__1">Starts:${val.stargazers_count}</p>
     <p class="stat stat__2">Watchers: ${val.watchers}</p>
     <p class="stat stat__3">Forks: ${val.forks}</p>
   </div>
 </div>
   `;
    main.insertAdjacentHTML("beforeend", html);
  });
};

searchInput.addEventListener("input", function () {
  gitHubUsers(searchInput.value);
  getUserPro(searchInput.value);
});
