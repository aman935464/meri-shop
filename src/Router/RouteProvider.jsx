import {createBrowserRouter} from 'react-router-dom'
import Layout from './Layout';
import Cart from '../Components/CartComponents/Cart';
import ProfilePage from "../Components/ProfileComponents/Profile"
import ProductPage from "../Components/DescriptionComponents/Description.jsx"
import { lazy, Suspense } from 'react';
import HomeSkeleton from '../Skeleton/HomeSkeleton.jsx';
const Home  = lazy(() => import("../Components/HomeComponent/Home.jsx"))
const Router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [
    {
      index: true,
      element: (
      <Suspense fallback={<HomeSkeleton/>}>
        <Home />
      </Suspense>
      ),
    },{
      path: "cart",
      element: <Cart />
    },{
      path: "profile",
      element: <ProfilePage />
    },{
      path: "product/:id",
      element: <ProductPage/>
    },{
      path: '*',
      element: 'Page Not Found'
    }
  ]
}])

export default Router;