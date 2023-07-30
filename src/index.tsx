import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import About from "./pages/AboutClub";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root")!);

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Main router, which help to jump from page to page */}
        <Route path="/" element={<Layout />}> 
          <Route index element={<App />} />
          <Route path="news" element={<News />} />
          <Route path="about_club" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
