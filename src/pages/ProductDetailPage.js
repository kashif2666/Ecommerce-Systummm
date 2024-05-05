import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import ProductDetail from "../features/product/components/ProductDetail";

function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetail></ProductDetail>
      </Navbar>
      <Footer></Footer>
    </div>
  );
}

export default ProductDetailPage;
