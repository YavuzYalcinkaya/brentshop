const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 mt-5 p-2 xl:p-5 flex items-center justify-center xl:justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-white py-3 px-5"
        name=""
        id=""
      >
        <option value="">Filter by Price</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
