const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="m-2 mt-9">
      <div className="text-blue-500  px-2 py-2 border-t-2 w-full text-center">
        SUMAN MALAKAR @{currentYear}
      </div>
    </div>
  );
};

export default Footer;
