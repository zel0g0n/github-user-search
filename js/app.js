"use strict";
const reqName = document.querySelector("input"),
  searchBtn = document.querySelector("button"),
  form = document.querySelector("form"),
  userName = document.querySelector(".user-name"),
  userBio = document.querySelector(".user-bio"),
  userNickname = document.querySelector(".user-nickname"),
  avatar = document.querySelector(".user-avatar"),
  userDate = document.querySelector(".user-join-date"),
  repos = document.querySelector(".user__repos-num"),
  fallowing = document.querySelector(".user__fallowing-num"),
  fallower = document.querySelector(".user__fallower-num"),
  country = document.querySelector(".country"),
  office = document.querySelector(".office"),
  twit = document.querySelector(".twit"),
  link = document.querySelector(".link"),
  datas = document.querySelectorAll(".user__activity-item i");
let userDefault = {
  login: "zel0g0n",
  id: 113173002,
  node_id: "U_kgDOBr7iCg",
  avatar_url: "https://avatars.githubusercontent.com/u/113173002?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/zel0g0n",
  html_url: "https://github.com/zel0g0n",
  followers_url: "https://api.github.com/users/zel0g0n/followers",
  following_url: "https://api.github.com/users/zel0g0n/following{/other_user}",
  gists_url: "https://api.github.com/users/zel0g0n/gists{/gist_id}",
  starred_url: "https://api.github.com/users/zel0g0n/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/zel0g0n/subscriptions",
  organizations_url: "https://api.github.com/users/zel0g0n/orgs",
  repos_url: "https://api.github.com/users/zel0g0n/repos",
  events_url: "https://api.github.com/users/zel0g0n/events{/privacy}",
  received_events_url: "https://api.github.com/users/zel0g0n/received_events",
  type: "User",
  site_admin: false,
  name: "Alisher",
  company: null,
  blog: "",
  location: "Uzbekistan",
  email: null,
  hireable: null,
  bio: "I am not robot\r\n",
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2022-09-09T08:52:54Z",
  updated_at: "2023-07-15T02:07:37Z",
};

function setNoutFoundValue(elem, response, value) {
  if (response) {
    elem.innerHTML = response;
    elem.style.color = "#fff";
  } else {
    elem.innerHTML = value;
    elem.style.color = "rgba(255,255,255,0.456)";
  }
}

function setUserData(jsonApi) {
  setNoutFoundValue(userName, jsonApi.name, "No name");
  userNickname.innerHTML = "@" + jsonApi.login;
  userNickname.href = jsonApi.html_url;
  setNoutFoundValue(userBio, jsonApi.bio, "Bio is not fount");
  userDate.innerHTML =
    "Joined " + new Date(jsonApi.created_at).toDateString().slice(4);
  avatar.src = jsonApi.avatar_url;
  setNoutFoundValue(link, jsonApi.blog, "No blog");
  setNoutFoundValue(country, jsonApi.location, "No location");
  setNoutFoundValue(office, jsonApi.company, "No company");
  setNoutFoundValue(twit, jsonApi.twitter_username, "No data");
  fallower.innerHTML = jsonApi.followers;
  fallowing.innerHTML = jsonApi.following;
  repos.innerHTML = jsonApi.public_repos;
}
setUserData(userDefault);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`https://api.github.com/users/${reqName.value}`)
    .then((res) => res.json())
    .then((json) => {
      if (json.message != "Not Found") {
        setUserData(json);
        document.querySelector(".search__section").style.border = 0;
      } else {
        document.querySelector(".search__section").style.border =
          "3px red solid";
      }
    })
    .finally(() => {
      reqName.value = "";
    });
});
