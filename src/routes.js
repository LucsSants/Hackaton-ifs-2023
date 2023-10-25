import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import CadastroEndereco from "./pages/CadastroEndereco";
  
export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route path="cadastro" element={<CadastroEndereco />} />
        {/* ... etc. */}
      </Route>
    )
  );
  