import { url } from "inspector";

const routes = [
  {
    path: "/",
    url: "http://192.168.10.5:3000",
  },
  {
    path: "/about",
    url: "http://192.168.10.5:3000/about",
  },
  {
    path: "/blog/:postID",
    url: "http://192.168.10.5:3000/blog/{{postID}}",
  },
];

export default routes;
