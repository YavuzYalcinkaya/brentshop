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
    <div className=" w-full bg-gray-100 gap-5 flex justify-evenly items-center">
      {categories?.map((category, index) => (
        <div
          onClick={() => {
            setCategory(category);
          }}
          key={index}
          className=" uppercase text-xl font-bold cursor-pointer hover:bg-gray-200 p-3"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
