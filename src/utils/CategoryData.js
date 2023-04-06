import { FaMale , FaFemale, FaChild} from "react-icons/fa";
import { MdOutlineFace, MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiGemChain } from "react-icons/gi";
export const CategoryData = [
  {
    id: 1,
    img: "/images/male.jpg",
    title: "MEN",
    cat: "male",
    desc: "We are reliable",
    Icon: <FaMale/>,
  },
  {
    id: 2,
    img: "/images/female.jpg",
    title: "WOMEN",
    cat: "female",
    desc: "All you need at a spot",
    Icon: <FaFemale/>,
  },
  {
    id: 3,
    img: "/images/children.jpg",
    title: "CHILDREN",
    cat: "children",
    desc: "Shop quality products",
    Icon: <FaChild/>,
  },
  {
    id: 4,
    img: "/images/accessories.jpg",
    title: "ACCESSORIES",
    cat: "accessories",
    desc: "Finest in the Industry",
    Icon: <GiGemChain/>,
  },
  {
    id: 5,
    img: "/images/kitchen.jpg",
    title: "KICHEN",
    cat: "kitchen",
    desc: "Quality kitchen utensil",
    Icon: <MdOutlineEmojiFoodBeverage/>,
  },
  {
    id: 6,
    img: "/images/beauty.jpg",
    title: "BEAUTYCARE",
    cat: "beauty",
    desc: "Your skin our concern",
    Icon: <MdOutlineFace/>,
  },
];