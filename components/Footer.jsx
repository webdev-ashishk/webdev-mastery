const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      // style={{ position: "relative", bottom: 0, width: "98%" }}
      className="h-20 border-2 m-2 "
    >
      <div className="flex justify-center">
        <h1>SUMAN MALAKAR @{currentYear}</h1>
      </div>
    </div>
  );
};

export default Footer;
