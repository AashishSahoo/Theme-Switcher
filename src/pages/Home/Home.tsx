import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../store/slices/productSlice';
import type { RootState, AppDispatch } from '../../store/store';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { listings: productListing, loading, error } = useSelector((state: RootState) => state.products);
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productListing.slice(indexOfFirstProduct, indexOfLastProduct);

  const renderProductListing = () => {
    if (currentTheme === 'dark') {
      return (
        <div
          className="overflow-x-auto bg-[var(--bg-section)]"

        >
          <table className="min-w-full bg-gray-800 text-white">
            <thead>
              <tr>
                <th className="px-4 py-2" style={{ fontSize: 'var(--font-size-subheading)' }}>Image</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Rating</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id} className="border-t border-gray-700">
                  <td className="px-4 py-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-16 w-16 object-contain"
                    />
                  </td>
                  <td className="px-4 py-2" style={{ fontSize: 'var(--font-size-base)' }}>{product.title}</td>
                  <td className="px-4 py-2">₹{Math.ceil(product.price)}</td>
                  <td className="px-4 py-2">{product.rating.rate} ⭐</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4 text-white">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="px-4 py-2 m-2 bg-gray-700 rounded disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {Math.ceil(productListing.length / productsPerPage)}
            </span>
            <button
              disabled={currentPage === Math.ceil(productListing.length / productsPerPage)}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="px-4 py-2 m-2 bg-gray-700 rounded disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {productListing.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm p-4 cursor-pointer transform transition-all duration-300 hover:scale-[1.03]"
              style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-card)",
                borderColor: "var(--border-card)",
              }}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-contain rounded"
                />
              </div>
              <div className="mt-4">
                <h5 className="font-semibold truncate" style={{ fontSize: 'var(--font-size-subheading)' }}>
                  {product.title}
                </h5>
                <p className="mt-1" style={{
                  fontSize: 'var(--font-size-base)',
                  color: "var(--text-section)"
                }}>
                  Rating: {product.rating.rate} ⭐
                </p>
                <p className="mt-2 font-bold" style={{
                  fontSize: 'var(--font-size-base)',
                  color: "var(--text-card)"
                }}>
                  ₹ {Math.round(product.price)}
                </p>

              </div>
            </div>


          ))}
        </div>


      );
    }
  };

  return (
    <>
      <section
        className="rounded-xl p-6 mb-8 transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-section)",
          color: "var(--text-section)",
        }}
      >
        <div className="max-w-screen-xl mx-auto" style={{ color: 'var(--text-section)' }}>
          <h2 className="mb-4 font-bold" style={{ fontSize: 'var(--font-size-heading)' }}>
            Explore Top Picks Across Every Category
          </h2>
          <p className="max-w-screen-lg" style={{ fontSize: 'var(--font-size-subheading)' }}>
            Discover a curated selection of products across electronics, fashion,
            home & kitchen, and more. Shop from trusted brands and get the best
            deals — all in one place.
          </p>
        </div>
      </section>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 max-w-screen-xl mx-auto">
          <div
            className="w-full h-100 rounded-lg animate-pulse"
            style={{ backgroundColor: 'var(--bg-skeleton)' }}
          />
        </div>
      )}

      {error && (
        <div className="text-red-600 text-center font-medium">
          Error: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="max-w-screen-xl mx-auto">
          <h2 className={`font-bold mb-6`} style={{
            fontSize: 'var(--font-size-heading)',
            color: currentTheme === 'dark' ? 'white' : 'var(--text-primary)'
          }}>
            Latest Products
          </h2>
          {renderProductListing()}
        </div>
      )}
    </>
  );
}