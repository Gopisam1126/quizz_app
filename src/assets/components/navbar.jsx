function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center fixed top-8 left-20 right-20 px-10 py-2 bg-violet-600 shadow-lg rounded-lg">
        <div className="">
          <img src="images\logo.png" alt="logo" className="w-10 h-10 rounded-full" />
        </div>
        <ul className="flex gap-8 text-slate-100">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Feedback</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
