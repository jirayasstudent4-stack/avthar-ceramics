export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Access Denied
        </h1>

        <p className="text-gray-500">
          You do not have permission
          to access this page.
        </p>
      </div>
    </div>
  );
}