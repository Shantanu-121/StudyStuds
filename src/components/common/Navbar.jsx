import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";
import { ImCross } from "react-icons/im";
import SmallScreenNavbar from "./SmallScreenNavbar";
import toast from "react-hot-toast";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const navigate = useNavigate();
  const [subLinks, setSubLinks] = useState([]);
  const [isClose, setIsClose] = useState(false);

  const [loading, setLoading] = useState(false);

  const fetchCatalog = async () => {
    setLoading(true);
    try {
      const res = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(res?.data?.data);

      console.log(res);
      localStorage.setItem("sublinks", JSON.stringify(res.data.data));
      console.log(subLinks);
    } catch (error) {
      console.log("Could not fetch Categories.", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatalog();
  }, []);

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const handleCrossButton = () => {
    isClose = isClose ? setIsClose(false) : setIsClose(true);
    // smallScreen = smallScreen ? setSmallScreen(false) : setSmallScreen(true);
  };

  // to={/catalog/${subLink.name
  //                                   .split(" ")
  //                                   .join("-")
  //                                   .toLowerCase()}}

  return (
    <div
      className={`flex h-16 items-center justify-center border-b-[2px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks?.length > 0 ? (
                          <>
                            {subLinks
                              // ?.filter(
                              //   (subLink) => subLink?.courses?.length > 0
                              // )
                              ?.map((subLink, i) => (
                                <button
                                  onClick={() => {
                                    if (subLink?.courses?.length > 0)
                                      navigate(
                                        "/catalog/" +
                                          subLink.name
                                            .split(" ")
                                            .join("-")
                                            .toLowerCase()
                                      );
                                    else
                                      toast.error(
                                        "We apologize, but there are currently no courses available under this category."
                                      );
                                  }}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </button>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Categories Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              }
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        {isClose === false ? (
          <button className="mr-4 md:hidden" onClick={handleCrossButton}>
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          </button>
        ) : (
          <button className="mr-4 md:hidden" onClick={handleCrossButton}>
            <ImCross fontSize={24} fill="#AFB2BF" />
          </button>
        )}
        {isClose && (
          <SmallScreenNavbar
            isClose={isClose}
            // setIsClose={setIsClose}
            handleCrossButton={handleCrossButton}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
