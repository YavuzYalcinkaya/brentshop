const PageContainers = ({ children }) => {
  return (
    <div className=" bg-lime-300 h-screen max-w-full  flex flex-col">
      {children}
    </div>
  );
};

export default PageContainers;
