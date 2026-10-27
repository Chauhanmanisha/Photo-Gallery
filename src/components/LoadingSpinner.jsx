export default function LoadingSpinner() {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-4 py-20">
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-purple-100 border-t-purple-700" />
      <p className="text-sm font-medium text-gray-600">Loading photos...</p>
      <span className="sr-only">Please wait while photos load.</span>
    </div>
  );
}