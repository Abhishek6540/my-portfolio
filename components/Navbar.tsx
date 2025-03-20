"use client";
import Image from "next/image"
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    type navbarProps = {
        url: string;
        name: string;
    }

    const navbarItems: navbarProps[] = [
        {
            url: "#home",
            name: "Home"
        },
        {
            url: "#about-me",
            name: "About Me"
        },
        {
            url: "#testimonials",
            name: "Testimonials"
        },
        {
            url: "experience",
            name: "Experience"
        },
        {
            url: "skills",
            name: "Skills"
        },
        {
            url: "#projects",
            name: "Projects"
        },
        {
            url: "#achievements",
            name: "Achievements"
        },
        {
            url: "#social-media",
            name: "Social Media"
        },
        {
            url: "#contact-me",
            name: "Contact Me"
        },
        {
            url: "#portfolio-made-with",
            name: "Portfolio Made With"
        }

    ]


    return (
        <>
            <div className="w-full flex bg-transparent flex-col items-start z-50">
                <div className="main-container w-full flex flex-col lg:flex-row items-center text-4xl justify-between gap-6 py-4 lg:py-8 md:py-10">
                    <div className="w-full bg-white p-1 sm:p-2 rounded-full flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2 font-cursive">
                            <Image src="/images/User-Avatar.png" alt="logo" width={75} height={75} className="w-48 lg:w-[75px] h-[75px] rounded-full object-cover" loading="lazy" />
                            <h1 className="text-3xl font-medium">Abhishek <span className="text-3xl font-semibold">Rohtagi</span> </h1>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="aspect-square p-3 sm:p-4 cursor-pointer rounded-full bg-[#000000]">
                                <Image src="/images/dark.svg" alt="logo" width={42} height={42} className="w-6 sm:w-6 lg:w-auto" />
                            </div>

                            <div className="relative group">
                                <motion.div
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-6 text-white bg-black text-sm md:text-base xl:text-2xl lg:text-lg sm:pl-6 rounded-full h-full cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    <p>Menu</p>
                                    <motion.div
                                        variants={{
                                            open: { rotate: 180 },
                                            closed: { rotate: 0 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                        style={{ originY: 0.55 }} className="p-3 sm:p-4 cursor-pointer rounded-full bg-mainColor">
                                        <Image src="/images/menu.svg" alt="menu" width={36} height={36} className="w-6 sm:w-6 lg:w-auto" />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    animate={isMenuOpen ? "open" : "closed"}
                                    initial="closed"
                                    variants={{
                                        open: {
                                            opacity: 1,
                                            height: "auto",
                                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.7,
                                                delayChildren: 0.3,
                                                staggerChildren: 0.05
                                            }
                                        },
                                        closed: {
                                            opacity: 0,
                                            height: 0,
                                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                                            transition: {
                                                type: "spring",
                                                bounce: 0,
                                                duration: 0.3
                                            }
                                        }
                                    }}
                                    className="absolute bg-black text-white flex-col gap-6 rounded-[10px] w-max top-full cursor-pointer right-0 flex-1 mt-2 text-sm font-normal truncate border-[1px] border-[#f1f1f1]"
                                >
                                    <motion.ul>
                                        {navbarItems.map((item, index) => (
                                            <motion.li
                                                variants={itemVariants}
                                                key={index}
                                                className="px-4 pr-10 py-2 hover:bg-gray-100 hover:text-black"
                                            >
                                                <a href={item.url}>{item.name}</a>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
