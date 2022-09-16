import React, { createContext } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { Outlet, Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Content from './components/Content/Content';

declare global {
  interface Window {
    eb_map: any;
    eb_core: any;
    eb: any;
  }
}

export const EbContext = createContext({});

const eb_core = window.eb_core;
const eb_map = window.eb_map;
const font_description = "96px " + window.getComputedStyle(document.querySelector("body")!).fontFamily;
const coreInit = async () => {
  const eb = eb_core.eb_init();
  window.eb = eb;
  return eb;
}

const mapInit = async (eb: any, map: any) => {
  eb_map.map_engine_init(eb);
  await eb_map.map_start(eb, map, font_description);
}

const init = async () => {
  const eb = await coreInit();
  auth(eb);
  // const canvas = document.getElementById("map_area");
  // mapInit(eb, canvas);
  renderApp(eb);
}
const auth = async (eb: any) => {
  eb_core.eb_select_server(eb, "https://eu-api.empathicbuilding.com/v1");
  eb_core.eb_auth(eb, "5d0a7e30-9c41-486b-8041-9de3fdc71f81");
  eb_core.eb_add_hook(eb, "post_error", (eb: any, error: any) => console.log("error", error));
  eb_core.eb_add_hook(eb, "post_connection_status_change", (eb: any, status: any, previous_status: any) => console.log("status", status));
  await eb_core.eb_connect(eb);
  await eb_core.eb_load_organization(eb, eb_core.eb_get_current_user_organization_id(eb));
  await eb_core.eb_load_location(eb, eb.organization.locations[0]);
}

const renderApp = (eb: any) => {
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(<BrowserRouter>
    <EbContext.Provider value={eb}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="room/:roomId" element={<Content />} />
          <Route path="notfound" element={<h1>Room not found</h1>} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h2>Route not found!</h2>
              <Link to="/">Back home</Link>
            </div>
          }
        />
      </Routes>
    </EbContext.Provider>
  </BrowserRouter>);
}

init();
