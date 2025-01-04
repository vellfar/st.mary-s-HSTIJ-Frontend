import { useState } from 'react';
import { Product } from '@/types/product';

export const useProductDetails = (initialProduct: Product) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const incrementQuantity = () => {
    if (quantity < initialProduct.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    console.log(`Added ${quantity} ${initialProduct.name}(s) to cart`);
    // Implement actual cart functionality here
  };

  const addToWishlist = () => {
    console.log(`Added ${initialProduct.name} to wishlist`);
    // Implement actual wishlist functionality here
  };

  return {
    product: initialProduct,
    quantity,
    selectedImage,
    setSelectedImage,
    incrementQuantity,
    decrementQuantity,
    addToCart,
    addToWishlist,
  };
};

