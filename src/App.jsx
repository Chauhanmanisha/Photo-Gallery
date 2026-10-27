import { useCallback, useMemo, useState } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";
import useFavourites from "./hooks/useFavourites";
import PhotoCard from "./components/PhotoCard";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const { photos, loading, error } = useFetchPhotos();
  const { favourites, toggleFavourite } = useFavourites();
  const [searchTerm, setSearchTerm] = useState("");

  
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);


  const filteredPhotos = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return photos;

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(normalizedSearch)
    );
  }, [photos, searchTerm]);

  return (
    <main className="min-h-screen bg-[#faf8fc]">
      <header className="bg-gradient-to-r from-purple-800 via-purple-700 to-violet-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wide text-purple-100">PHOTO GALLERY</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Discover moments.</h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-purple-100 sm:text-base">
              Explore beautiful photography and save the pictures you love.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Explore photos</h2>
            <p className="mt-1 text-sm text-gray-500">
              {loading ? "Fetching the latest photos..." : `${filteredPhotos.length} ${filteredPhotos.length === 1 ? "photo" : "photos"} found`}
            </p>
          </div>
          <div className="relative w-full sm:max-w-sm">
            <label htmlFor="photo-search" className="mb-2 block text-sm font-medium text-gray-700">
              Search by author
            </label>
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-[42px] h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 4.5 4.5" />
            </svg>
            <input
              id="photo-search"
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Try an author name..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-800 shadow-sm transition placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-100"
            />
          </div>
        </div>

        {!loading && !error && (
          <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
            <span className="inline-block h-2 w-2 rounded-full bg-purple-500" />
            <span>{favourites.length} {favourites.length === 1 ? "favourite" : "favourites"} saved</span>
          </div>
        )}

        {loading && <LoadingSpinner />}

        {!loading && error && (
          <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-5 py-6 text-center">
            <p className="font-semibold text-red-800">We couldn't load the photos.</p>
            <p className="mt-2 text-sm text-red-700">{error}</p>
            <p className="mt-2 text-sm text-red-700">Please check your internet connection and refresh the page.</p>
          </div>
        )}

        {!loading && !error && filteredPhotos.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isFavourite={favourites.includes(photo.id)}
                onToggleFavourite={toggleFavourite}
              />
            ))}
          </div>
        )}

        {!loading && !error && filteredPhotos.length === 0 && (
          <div className="rounded-2xl border border-dashed border-purple-200 bg-white px-5 py-14 text-center">
            <p className="font-semibold text-gray-800">No photos found</p>
            <p className="mt-2 text-sm text-gray-500">Try searching with a different author name.</p>
          </div>
        )}

        <footer className="mt-12 border-t border-purple-100 py-6 text-center text-xs text-gray-500">
          Photos provided by Picsum Photos
        </footer>
      </section>
    </main>
  );
}