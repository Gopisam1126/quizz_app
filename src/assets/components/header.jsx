import { Link } from "react-router-dom";
import Navbar from "./navbar";

function Header() {
  const aot = [
    { name: "Mechanical", path: "/mechanical" },
    { name: "Electrical", path: "/electrical" },
    { name: "Computer Science", path: "/computer-science" },
    { name: "IC", path: "/ic" },
    { name: "Electronics", path: "/electronics" },
    { name: "Civil", path: "/civil" },
  ];

  return (
    <>
      <header>
        <div className="fixed top-8 left-20 right-20">
          <Navbar />
        </div>
        <div className="flex gap-10 px-2 py-2 mx-20 relative top-48">
          <div className="w-[40rem] h-96 text-blue-50 px-5 py-2">
            <h2 className="relative left-20 hero-heading special-font z-10 text-teal-700">
              Unle<b>a</b>sh your inner wisd<b>o</b>m
            </h2>
            <div className="relative w-full">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    src="\images\hero-blob.png"
                    alt="img"
                    className="object-contain pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40rem] h-96 text-blue-50 px-5 py-2 mt-16 ml-48">
            <p className="mb-4 text-lg">Choose your favourite topic</p>
            <div className="flex gap-6 flex-wrap w-[25rem]">
              {aot.map((item, i) => (
                <Link key={i} to={item.path}>
                  <div key={i} className="q-items hover:scale-110">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
