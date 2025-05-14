import { useState, useEffect } from "react";
import Layout from "../components/Layout";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  createdAt: string;
}

export default function MyProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    try {
      const storedProducts = JSON.parse(
        localStorage.getItem("products") || "[]"
      );
      setProducts(storedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const updatedProducts = products.filter((product) => product.id !== id);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
        alert("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product");
      }
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">My Products</h1>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative group"
              >
                {product.imageUrl && (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <button
                      onClick={() => handleDelete(product.id)}
                      style={{ backgroundColor: "#dc2626" }}
                      className="text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-all duration-300 flex items-center gap-2 text-base font-bold shadow-lg border-2 border-red-800 hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <span style={{ color: "#ffffff" }}>Delete</span>
                    </button>
                  </div>
                  <p className="text-gray-600 mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-700">{product.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Added on {new Date(product.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center text-gray-500">No products found</div>
        )}
      </div>
    </Layout>
  );
}
