import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import IssueDetail from "./components/IssueDetail";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/issue/:userId",
    element: <IssueDetail/>
  }
])

export {router}