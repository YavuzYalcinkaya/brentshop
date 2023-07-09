import SliderComp from "../components/slider/SliderComp";
import Sorting from "../components/sorting/Sorting";
import Category from "../components/category/Category";
import Products from "../components/products/Products";
import { useState } from "react";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <>
      <SliderComp />
      <Sorting setSort={setSort} />

      <Category setCategory={setCategory} />
      <Products category={category} sort={sort} />
    </>
  );
};

export default Home;
