import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Dashboard} />
  </BrowserRouter>
);
