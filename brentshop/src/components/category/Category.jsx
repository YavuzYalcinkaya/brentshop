import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-2/6 bg-gray-100 p-4 flex flex-col justify-center items-center">
      <h3 className="pb-1 px-2 text-2xl text-center font-bold">Categories</h3>
      {categories?.map((category, index) => (
        <div
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
