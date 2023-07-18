import Back from "../components/turn-back/Back";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  return (
    <div>
      <div>
        <Back />
      </div>
      <div>
        {favorites.map((favorite) => (
          <div key={favorite.id} className="flex flex-col">
            <img
              className="w-[50%] lg:w-3/12"
              src={favorite.image}
              alt={favorite.title}
            />
            <h3>{favorite.title}</h3>
            <p>{favorite.description}</p>
            <span>{favorite?.rating?.rate}</span>
            <span>{favorite?.rating?.count}</span>
            <span>{favorite.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
