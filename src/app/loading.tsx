export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Simple Logo */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Loading Sisu Speak</h2>

        {/* Simple Spinner */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>

        {/* language greeting */}
        <p className="text-sm text-gray-500">Tervetuloa!</p>
      </div>
    </div>
  );
}
