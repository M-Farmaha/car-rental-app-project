import { AppBar } from "./components/AppBar/AppBar";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";

function App() {
  return (
    <>
      <AppBar />
      <main>
        <CatalogPage />
      </main>
    </>
  );
}

export default App;
