import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components//ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShikshanikVikas from "./pages/ShikshanikVikas";
import LatestUpdates from "./pages/LatestUpdates"; // Import the new page

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollRestoration />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/shikshanik-vikas",
        element: <ShikshanikVikas />,
      },
      {
        path: "/latest-updates", // Add the new route here
        element: <LatestUpdates />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;