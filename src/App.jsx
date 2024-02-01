import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./components/Home";
import Summary from "./components/summary";

import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/details/:id",
        element: <Summary />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return (
    <ChakraProvider>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}
export default App;
