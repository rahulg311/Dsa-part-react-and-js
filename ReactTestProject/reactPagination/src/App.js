import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "../src/styles/style.css";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { Helmet } from "react-helmet"; // Import Helmet

import NotFound from "./NotFound";
import LoginUser from "./Pages/LoginUser";
import axios from "axios";
import { baseUrl } from "./Constant/constant";
import { MethodNames } from "./Constant/methodNames";

// import Feedback from "./Pages/Feedback";

import VideoPlayer from "./Pages/VideoPlayer";
import Dashboard from "./Pages/Dashboard";
import PaginatedList from "./Pages/pegination";
import DragAndDrop from "./Pages/drangAndDrop";
import LazyLoad from "./Pages/LazyLoad";
import FeedbackRating from "./Pages/FeedbackRating";
import TodoList from "./Pages/TodoList";
import TodoObjectdata from "./Pages/TodoObjectdata";
import ChekboxAddData from "./Pages/ChekboxAddData";
import Checkbox from "./Pages/checkbox";
import StudentRegistrationJourney from "./Pages/demo";

function App() {
  return (
    <Routes>
      <Route path="/Videos" element={<VideoPlayer />} />
      <Route path="/PaginatedList" element={<PaginatedList />} />
      <Route path="/" element={<DragAndDrop/>} />
      <Route path="/LazyLoad" element={<LazyLoad/>} />
      <Route path="/FeedbackRating" element={<FeedbackRating/>} />
      <Route path="/TodoList" element={<TodoList/>} />
      <Route path="/TodoObjectdata" element={<TodoObjectdata/>} />
      <Route path="/ChekboxAddData" element={<ChekboxAddData/>} />
      <Route path="/checkbox" element={<Checkbox/>} />
      <Route path="/StudentRegistrationJourney" element={<StudentRegistrationJourney/>} />
      
      
      
      
      
      
      
      
      {/* JiwaDetails */}

      <Route path="*" element={<NotFound />} />

      {/* <Route
        path="Reports"
        element={hg
          <>
            <Helmet>
              <title>Reports</title>
            </Helmet>
            <ProtectedRoute user={user}>
              <Reports />
            </ProtectedRoute>
          </>
        }
      /> */}
    </Routes>
  );
}

export default App;
