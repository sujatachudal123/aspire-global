import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PreparationClass from './pages/Preparationclass';
import CareerCounselling from './pages/services/carrercounselling';
import VisaGuidance from './pages/services/visa-guidance';
import TestPreparation from './pages/services/Testpreparation';
import StudyAbroad from './pages/services/studyabroad';
import AdmissionGuide from './pages/services/Admissionguide';
import Insurance from './pages/services/Insurance';

import PTEClass from './pages/services/pteclass';
import IELTS from './pages/services/ielts';
import TOEFL from './pages/services/toefl';
import GRE from './pages/services/gre';
import SAT from './pages/services/sat';
import GMAT from './pages/services/gmat';
import StudyAbroadCountries from './pages/study-abroad/StudyAbroadCountries';
import UKStudyAbroad from './pages/study-abroad/UK';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Gallery from './pages/Gallery';
import SuccessStories from './pages/SuccessStories';


// Root component that applies the layout
const Root = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

// Create router with error boundary
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "preparation class",
        element: <PreparationClass />,
      },
      // Add routes for individual test preparation classes
      {
        path: "services/pte",
        element: <PTEClass />,
      },
      {
        path: "services/toefl",
        element: <TOEFL />,
      },
      {
        path: "services/ielts",
        element: <IELTS />,
      },
      {
        path: "services/gre",
        element: <GRE />,
      },
      {
        path: "services/sat",
        element: <SAT />,
      },
      {
        path: "services/gmat",
        element: <GMAT />,
      },
      {
        path: "services/carrercounselling",
        element: <CareerCounselling />,
      },
      {
        path: "services/visa-guidance",
        element: <VisaGuidance />,
      },
      {
        path: "services/test-preparation",
        element: <TestPreparation />,
      },
      {
        path: "services/study-abroad",
        element: <StudyAbroad />,
      },
      {
        path: "services/admission-guide",
        element: <AdmissionGuide />,
      },
      {
        path: "services/insurance",
        element: <Insurance />,
      },
      {
        path: "study-abroad",
        element: <StudyAbroadCountries />,
      },
      {
        path: "study-abroad/uk",
        element: <UKStudyAbroad />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogPost />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "success-stories",
        element: <SuccessStories />,
      },

    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



















