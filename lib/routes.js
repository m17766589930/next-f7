const routes = [
  {
    path: "/",
    asyncComponent: () => import("@/app/page"),
  },
  {
    path: "/about",
    asyncComponent: () => import("@/app/about/page"),
  },
];

export default routes;
