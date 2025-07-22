import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import DetailPage from "./pages/DetailPage"
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/search',
          element: <SearchPage />
        },
        {
          path: '/packages/:name',
          element: <DetailPage />
        }
      ]
    },

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App