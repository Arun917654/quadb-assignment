import { Link, useSearchParams } from "react-router-dom";
import StarRating from "../ui/StarRating";

export default function Card({ data }) {
  const { id, language, type, genres, rating, name } = data;
  if (data.image === null) return null;
  //   const { medium, original } = image;
  //   console.log(image);

  return (
    <div
      className="w-90 m-8  flex grid-cols-3 flex-row rounded-[16px] bg-slate-300
      hover:bg-slate-400 "
    >
      <img
        className="w-22 h-fit rounded-[16px]"
        src={data.image && data.image.medium}
        alt={name}
      />
      <div className="ml-4 flex w-80 flex-col gap-3 border-2 border-none pt-4">
        <h1 className=" text-xl font-bold ">{name}</h1>
        <h1 className="text-base font-bold "> language-{language}</h1>
        <p className="text-base font-bold ">
          generes-
          {genres.join(", ")}
        </p>
        <p className="text-base font-bold ">Type-{type}</p>
        {rating.average && (
          <h1 className="text-base font-bold ">
            {/* <StarRating
              size={16}
              defaultRating={rating.average}
              maxRating={10}
            /> */}
            ⭐{rating.average}/10
          </h1>
        )}

        <Link to={`details/${id}`}>
          {" "}
          <button className="inline-block w-28 rounded-full bg-yellow-600 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-500 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed">
            Summary
          </button>
        </Link>
      </div>
    </div>
  );
}
