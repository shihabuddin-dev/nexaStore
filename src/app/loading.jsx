export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 px-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-opacity-50 mb-8"></div>
      <h2 className="text-xl font-semibold">Loading...</h2>
    </div>
  );
}
