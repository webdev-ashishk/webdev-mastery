const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-20 border-2 m-2 ">
      <div className="flex justify-center h-screen">
        <h1>SUMAN MALAKAR @{currentYear}</h1>
      </div>
    </footer>
  );
};

export default Footer;
