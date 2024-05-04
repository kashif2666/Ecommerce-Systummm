import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Home;
