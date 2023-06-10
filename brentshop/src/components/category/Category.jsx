import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="max-h-screen w-[20%] bg-gray-100 gap-10 flex flex-col items-center">
      <h3 className="pb-1 px-2 mt-4 text-2xl text-center font-bold">
        Categories
      </h3>
      {categories?.map((category, index) => (
        <div
          onClick={() => {
            setCategory(category);
          }}
          key={index}
          className=" uppercase text-lg cursor-pointer hover:bg-gray-200 p-2"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
