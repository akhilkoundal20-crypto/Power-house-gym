import React from 'react';
import { useCraft } from '../../context/CraftContext';
import { PRODUCTS } from '../../data/craftData';
import { X, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WishlistDrawer = () => {
  const { wishlist, toggleWishlist, isWishlistOpen, setIsWishlistOpen, addToCart } = useCraft();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#DDD1C0] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#ECE3D6] flex items-center justify-between bg-[#FFFFFF]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FAEEF1] flex items-center justify-center text-[#852233]">
                <Heart className="w-4 h-4 fill-[#852233]" />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-[#23201D]">My Craft Wishlist</h3>
                <p className="text-xs text-[#766D64]">{wishlistProducts.length} saved treasures</p>
              </div>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-[#766D64] hover:text-[#23201D] rounded-md hover:bg-[#F4EFE7] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FAEEF1] flex items-center justify-center mx-auto mb-4 text-[#852233]">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg text-[#23201D]">Your Wishlist is Empty</h4>
                <p className="text-xs text-[#766D64] mt-1 max-w-xs mx-auto">
                  Explore our handcrafted Dehra artwork, milestone boards, and festive decor to save your favorites.
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsWishlistOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#2C4A3E] text-[#FAF7F2] text-xs font-semibold rounded-lg hover:bg-[#1E352C] transition-colors"
                >
                  Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 bg-[#FFFFFF] border border-[#ECE3D6] rounded-xl relative group shadow-craft-sm hover:border-[#D49B35] transition-all"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg border border-[#E4DCD2] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#2C4A3E] bg-[#EAF1ED] px-2 py-0.5 rounded">
                      {product.categoryLabel}
                    </span>
                    <Link
                      to={`/product/${product.slug}`}
                      onClick={() => setIsWishlistOpen(false)}
                      className="block text-sm font-medium text-[#23201D] hover:text-[#2C4A3E] truncate mt-1"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs font-semibold text-[#852233] mt-1">
                      ₹{product.price.toLocaleString('en-IN')}{' '}
                      <span className="text-[11px] text-[#9A9085] line-through font-normal">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#2C4A3E] hover:bg-[#1E352C] text-[#FAF7F2] text-xs font-medium rounded-md transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                      </button>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="p-1.5 text-[#9A9085] hover:text-[#852233] rounded hover:bg-[#FAEEF1] transition-colors"
                        title="Remove from wishlist"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-4 bg-[#F4EFE7] border-t border-[#ECE3D6]">
              <Link
                to="/shop"
                onClick={() => setIsWishlistOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FAF7F2] border border-[#DDD1C0] hover:border-[#D49B35] text-[#23201D] text-xs font-semibold rounded-lg transition-colors"
              >
                Continue Shopping Crafts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistDrawer;
