const searchInput = document.querySelector(".user__input");
const error = document.querySelector(".errorPage");
const head = document.querySelector(".head");

const gitHubUsers = async function (user) {
  // try {
  const dataJson = await fetch(
    `https://api.github.com/users/${user}?client_id=7a31f254ee765dbf1cc6&client_secret=aa6ffb6979ade93057e2f2aaa511b2205270b92d`
  );

  const data = await dataJson.json();
  // if (!data.ok) {
  //   throw new Error();
  // }
  console.log(data);
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
          <p class="about__text">Company: ${data.company}</p>
          <p class="about__text">Website/Blog: ${data.blog}</p>
          <p class="about__text">Location: ${data.location}</p>
          <p class="about__text yes__border">Member Since: ${data.created_at}</p>
        </div>
      </div>
    </div>
  </div>
    `;
  head.innerHTML = html;
  // } catch (err) {
  //   error.style.display = "flex";
  //   // document.querySelector("body").style.overflow = "hiddin";
  // }
};

searchInput.addEventListener("input", function () {
  gitHubUsers(searchInput.value);
});
