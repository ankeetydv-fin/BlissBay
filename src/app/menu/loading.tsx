export default function Loading() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header loading skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-96 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>

        {/* Juice cards loading skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden h-96 animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-6 w-32 bg-gray-200 rounded"></div>
                  <div className="h-6 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="h-4 w-full bg-gray-200 rounded mt-4 mb-4"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 