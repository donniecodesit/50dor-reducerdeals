import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./state/context";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Navbar />
        <CartContainer />
      </div>
    );
  }
}

export default App;
