import "./css/styles.css";
import { GalleryPage } from "./ts/containers/GalleryPage";
import { LandingPage } from "./ts/containers/LandingPage";
import galleryPage from "./ts/pages/galleryPage";
import landingPage from "./ts/pages/landingPage";

const pathname = window.location.pathname;
const hash = window.location.hash;
const APP = document.getElementById("app");

const worker = new Worker(
  new URL("./ts/workers/product-worker.ts", import.meta.url),
);
worker.postMessage({
  question: "Would you give me the products?",
});
worker.onmessage = ({ data: { answer } }) => {
  console.log("answer => ", answer);
};

const routes = {
  home: {
    path: "/",
    component: landingPage(),
  },
  gallery: {
    path: "#gallery",
    component: galleryPage(),
  },
};

declare global {
  interface Window {
    onNavigate: (path: string, hash:string) => void;
  }
}

window.onNavigate = (path: string,hash:string) => {
  router(false, path, hash);
};

function router(automatic: boolean, path: string, hash: string) {
  console.log("path", path);
  if (path == routes.home.path && !hash) {
    APP.innerHTML = routes.home.component;
    new LandingPage(window.onNavigate);
  }

  if (hash == "#gallery") {
    APP.innerHTML = routes.gallery.component;
    new GalleryPage(window.onNavigate);
  }
}

window.onpopstate = () => {
  console.log("a state is popping");
  const location = window.location;
  router(true, location.pathname, location.hash);
};

router(true, pathname, hash);
