export default function Loading() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section Loading */}
        <div className="text-center mb-16">
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-64 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>

        {/* Story Section Loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-xl overflow-hidden bg-gray-200 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Values Section Loading */}
        <div className="text-center mb-12">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse mx-auto mb-4"></div>
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Team Section Loading */}
        <div className="mt-20 text-center">
          <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="h-6 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-8"></div>
          <div className="h-12 w-48 bg-gray-200 rounded-full animate-pulse mx-auto"></div>
        </div>
      </div>
    </div>
  );
} 