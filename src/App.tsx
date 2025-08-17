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

const queryClient = new QueryClient();

// This component sets up the main layout and includes the scroll restoration
const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollRestoration /> {/* This will now work correctly */}
        <Outlet /> {/* This renders the matched route (e.g., Index, ShikshanikVikas) */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Define all your application routes here
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;