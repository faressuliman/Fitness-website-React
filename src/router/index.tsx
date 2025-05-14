import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages";
import Layout from "../pages/Layout";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/Aboutus/AboutUs";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Exercise from "../pages/Exercise";
import ExerciseDetail from "../pages/ExerciseDetail";
import Dashboard from "../pages/Dashboard/Dashboard";
import ResetPass from "../pages/Forget&ResetPass/ResetPass";
import ForgetPass from "../pages/Forget&ResetPass/ForgetPass";
import ProtectedRoute from "../auth/ProtectedRoute";
import Calories from "../pages/Calories";
import PrivacyPolicy from "../pages/Privacy_Policy";
import CookiesPolicy from "../pages/cookies_policy";
import FAQ from "../pages/FAQ";
import Blogg from "../pages/blog";
import TermsConditions from "../pages/Terms_Conditions";

const storageKey = "loggedInUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="ResetPass" element={<ResetPass />} />
        <Route path="ForgetPass" element={<ForgetPass />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="blog" element={<Blogg />} />
        <Route path="cookies-policy" element={<CookiesPolicy />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        
        {/* Protected Routes */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute
              isAllowed={!!userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="calories"
          element={
            <ProtectedRoute
              isAllowed={!!userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Calories />
            </ProtectedRoute>
          }
        />
        <Route
          path="exercises"
          element={
            <ProtectedRoute
              isAllowed={!!userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <Exercise />
            </ProtectedRoute>
          }
        />
        <Route
          path="exercise/:id"
          element={
            <ProtectedRoute
              isAllowed={!!userData?.jwt}
              redirectPath="/login"
              data={userData}
            >
              <ExerciseDetail />
            </ProtectedRoute>
          }
        />
      </Route>
    </>
  )
);

export default router;
