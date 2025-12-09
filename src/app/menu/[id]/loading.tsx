export default function Loading() {
  return (
    <div className="pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back button loading */}
        <div className="inline-flex items-center mb-8">
          <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-2"></div>
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Product Details Section Loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image Loading */}
          <div className="relative h-96 rounded-xl overflow-hidden bg-gray-200 animate-pulse"></div>

          {/* Product Info Loading */}
          <div className="space-y-6">
            <div className="h-10 w-64 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
            </div>
            
            <div>
              <div className="h-6 w-36 bg-gray-200 rounded animate-pulse mb-3"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-start">
                    <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse mr-2 mt-1"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="h-6 w-36 bg-gray-200 rounded animate-pulse mb-3"></div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start">
                    <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse mr-2 mt-1"></div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-10 w-40 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Nutritional Information Loading */}
        <div className="mb-16">
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-6"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl p-6 animate-pulse h-24"></div>
            ))}
          </div>
        </div>

        {/* Blog Content Loading */}
        <div>
          <div className="h-8 w-80 bg-gray-200 rounded animate-pulse mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 