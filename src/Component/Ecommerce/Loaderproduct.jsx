
import React from 'react';

const ProductCardSkeleton = () => (
  <div className="border border-gray-300 p-4 rounded-md  w-[270px] animate-pulse">
    <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
  </div>
);

export default ProductCardSkeleton;

export const Loaderproduct = () => {
  return (
    <div className="grid grid-cols-3 gap-2 w-[1000px]">
      {[...Array(9)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}
