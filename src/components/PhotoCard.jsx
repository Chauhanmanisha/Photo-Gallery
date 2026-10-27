export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-purple-50">
        <img
          src={photo.download_url}
          alt={`Photograph by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={isFavourite ? `Remove ${photo.author} from favourites` : `Add ${photo.author} to favourites`}
          aria-pressed={isFavourite}
          title={isFavourite ? "Remove from favourites" : "Add to favourites"}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition hover:scale-105 focus-visible:outline-offset-2 ${
            isFavourite
              ? "bg-white text-rose-600"
              : "bg-white/95 text-gray-500 hover:text-rose-600"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="px-4 py-3">
        <p className="truncate text-sm font-semibold text-gray-800" title={photo.author}>
          {photo.author}
        </p>
        <p className="mt-1 text-xs text-gray-500">Photo ID: {photo.id}</p>
      </div>
    </article>
  );
}