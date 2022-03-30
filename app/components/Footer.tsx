const Footer = () => {
  return (
    <footer className="h-32 border-t bg-gray-50 py-12">
      <div className="mx-auto flex max-w-5xl justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/react-bricks-icon.svg"
            alt="React Bricks"
            className="w-8"
          />
          <div className="text-sm uppercase tracking-wider">
            Remix Website starter
          </div>
        </div>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()}{' '}
          <a href="https://reactbricks.com" className="hover:text-pink-600">
            React Bricks
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
