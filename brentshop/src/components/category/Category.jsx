import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className=" mt-5 bg-gray-100 gap-3 lg:gap-5 flex flex-col xl:flex-row justify-center xl:justify-evenly items-center p-2 lg:p-4">
      {categories?.map((category, index) => (
        <div
          onClick={() => {
            setCategory(category);
          }}
          key={index}
          className=" uppercase text-lg xl:text-xl font-bold cursor-pointer hover:bg-gray-300 rounded-lg p-4"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
