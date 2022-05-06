import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  let img;
  if (location.state.article.media) {
    img = (
      <img
        className=" ml-5 max-w-[300px] max-h-[300px] flex-1 float-left"
        src={location.state.article.media}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/no-image-icon.png";
          currentTarget.classList.add("max-w-[100px]");
          currentTarget.classList.remove("max-w-[150px]");
          currentTarget.classList.add("max-h-[100px]");
          currentTarget.classList.remove("max-h-[150px]");
        }}
        alt="image de l'article"
      />
    );
  } else {
    img = (
      <img
        className=" ml-5 max-w-[100px] max-h-[100px] flex-1 float-left"
        src="/no-image-icon.png"
        alt="aucune image disponible"
      />
    );
  }
  return (
    <div>
      <Link to="/">
        <section className="fixed top-0 bg-slate-800 text-center w-screen h-20 z-10 cursor-pointer">
          <h1 className="text-white text-center p-5 text-4xl">📰 ReactNews</h1>
        </section>
      </Link>

      <div className="rounded-xl bg-white text-black my-3 mt-20 py-8  mx-7 flex flex-col justify-center items-center">
        {img}
        <h1 className=" font-bold p-5 py-9 flex-auto float-right text-center">
          {location.state.article.title}
        </h1>

        <p className=" text-center px-12 pb-8">
          {location.state.article.excerpt}
        </p>

        <div className="flex content-center justify-center">
          <a
            href={location.state.article.link}
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="text-white bg-gray-800 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-28 h-16 sm:h-12 sm:w-64"
            >
              Voir le site
            </button>
          </a>

          <button
            type="button"
            className="text-white bg-gray-800 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-28 h-16 sm:h-12 sm:w-64"
            onClick={() => history.back()}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
