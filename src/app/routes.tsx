import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Testimonials } from "./pages/Testimonials";
import { Clients } from "./pages/Clients";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "projects", Component: Projects },
      { path: "clients", Component: Clients },
      { path: "gallery", Component: Gallery },
      { path: "testimonials", Component: Testimonials },
      { path: "contact", Component: Contact },
    ],
  },
]);
