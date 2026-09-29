const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-400 text-center">
          © {currentYear}{" "}
          <span className="text-white font-medium">Akbar</span>. All Rights Reserved.
        </span>
      </center>
    </footer>
  );
};

export default Footer;