import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { SiAdguard } from "react-icons/si";
import heroVideo from "../assets/hero-video.mp4";
import person1 from "../assets/images/person-1.jpg";
import person2 from "../assets/images/person-2.jpg";
import person3 from "../assets/images/person-3.jpg";
import person4 from "../assets/images/person-4.jpg";
import person5 from "../assets/images/person-5.jpg";

const craftCardElements = [
    {
        title: "Driven by Purpose",
        description:
            "We believe technology can dramatically improve the experience of managing health,and when crafted with empathy, intention,and expertise, impact lives at scale.",
        icon: IoDiamondOutline,
    },
    {
        title: "Custom Products",
        description:
            "We see a need and we develop a solution.Our proprietary technology is available to integrate with your systems, to license, or tocustomize to meet your needs.",
        icon: IoIosGitCompare,
    },
    {
        title: "Partnerships",
        description:
            "We partner with like-minded benefits providers, insurance, and health companies to create custom solutions and technology.",
        icon: FaHandshakeSimple,
    },
    {
        title: "Security and compliance",
        description:
            "Not just technology experts. Health experts.We are able to navigate both stringent regulatory environments and the complexities of technology and data.",
        icon: SiAdguard,
    },
];


export const assets = { heroVideo, person1, person2, person3, person4, person5 }
export const dataSets = { craftCardElements }