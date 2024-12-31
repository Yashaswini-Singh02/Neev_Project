export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between pt-6 px-10 font-semibold border-b pb-2 border-app-gray">
      <h1 className="text-3xl">Neev</h1>
      <div className="flex items-center space-x-4 text-xl">
        <a href="#">Twitter</a>
        <a>Carrers</a>
      </div>
    </nav>
  );
};
