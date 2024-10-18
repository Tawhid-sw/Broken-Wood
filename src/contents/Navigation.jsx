import { MdLiveTv } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

export const Navigation = [
  {
    lable: "Tv Shows",
    href: "/tv",
    icon: <MdLiveTv />,
  },
  {
    lable: "Movies",
    href: "/movies",
    icon: <BiSolidMoviePlay />,
  },
];

export const MobileNavigations = [
  {
    lable: "Home",
    href: "/",
    icon: <FaHome />,
  },
  ...Navigation,
];
