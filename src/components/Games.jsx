import React from "react";

const Games = ({
  img,
  name,
  released,
  ratings,
  suggestion,
  review,
  ratings_count,
  updated,
  genres,
}) => {
  return (
    <div class="card card-compact mb-5 w-72 bg-base-100 shadow-2xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center justify-end">
        <h2 class="card-title">{name}</h2>
        {/* <h2 className="text-md ">
          Released: <span className="text-primary">{released}</span>
        </h2> */}
        <div className="flex flex-row">
          <div class="badge badge-ghost mr-2 mb-1">
            <div class="rating rating-sm flex flex-row items-center">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <span className=" font-bold">
                <span className="pl-1 pr-1">:</span>
                <span className=" text-primary">{ratings}</span>
              </span>
            </div>
          </div>
          <div>
            {genres?.slice(0, 2).map((item) => (
              <div className="badge badge-ghost font-bold mr-1 mb-1">
                {item.name}
              </div>
            ))}
          </div>
        </div>
        {/* <div class="stats shadow">
          <div class="stat">
            <div class="stat-title">Popularity:</div>
            <div class="stat-value">
              <progress
                class="progress progress-error w-56"
                value={ratings}
                max="5"
              ></progress>
            </div>
          </div>
        </div> */}
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <div class="stat">
            <div class="stat-title">Downloads</div>
            <div class="stat-value">1{ratings_count}K</div>
            <div class="stat-desc">
              Released: <span className=" font-bold">{released}</span>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title">New Users</div>
            <div class="stat-value">{suggestion}0</div>
            <div class="stat-desc">↗︎ ({review}%)</div>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Games;
