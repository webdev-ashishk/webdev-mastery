const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-20 border-2">
      footer
      <div className="flex justify-center h-screen">
        <h1>SUMAN MALAKAR @{currentYear}</h1>
      </div>
    </div>
  );
};

export default Footer;
