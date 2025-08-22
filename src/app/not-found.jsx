import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-blue-300 px-4">
            <h1 className="text-7xl font-extrabold mb-4 drop-shadow-lg">404</h1>
            <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
            <p className="mb-8 text-blue-400 text-center max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className="inline-block px-6 md:px-8 py-2 md:py-3 rounded-lg bg-blue-500 text-gray-900 font-semibold shadow-lg hover:bg-blue-400 transition-colors md:text-lg">
                Go Home
            </Link>
        </div>
    );
}
