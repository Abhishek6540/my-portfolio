import Image from "next/image";

type skillsProps = {
  id: number;
  name: string;
  image: string;
};

const skillsData: skillsProps[] = [
  { id: 1, name: "ReactJS", image: "/images/reactjs.svg" },
  { id: 2, name: "NextJS", image: "/images/nextjs.svg" },
  { id: 3, name: "Tailwind", image: "/images/tailwind.svg" },
  { id: 4, name: "Figma", image: "/images/figma.svg" },
  { id: 5, name: "JavaScript", image: "/images/js.svg" },
  { id: 6, name: "GitHub", image: "/images/github.png" },
  { id: 7, name: "GraphQL", image: "/images/graphql.svg" },
  { id: 8, name: "Redux", image: "/images/redux-toolkit.png" },
  // {
  //   id: 9, name: "Typescript", image: "/images/typescript.png"
  // },
];
const Home = () => {
  return (
    <>
      <div className="w-full">
        <div className="main-container w-full pt-[50px] bg-[url('/images/bg-vector.svg')] bg-center bg-no-repeat bg-contain">
          <div className="flex flex-col items-center text-center gap-2 md:gap-5 w-full">
            <div className="flex items-center border-[1px] border-[#513d09] bg-[#251e0b] gap-4 py-1.5 md:py-2 lg:py-2.5 px-5 rounded-full">
              <Image
                src="/images/hand.svg"
                alt="hand"
                width={118}
                height={118}
                className="w-7 sm:w-10 md:w-12 lg:w-14"
              />
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white ">
                Hello! I am{" "}
                <span className="text-mainColor inline-block font-bold">
                  Abhishek Rohtagi
                </span>
              </h1>
            </div>
            <h1 className="text-3xl mt-3 sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white lg:leading-[60px]">
              Expert{" "}
              <span className="text-mainColor inline-block">Web Design</span> &{" "}
              {""}
              <span className="text-mainColor inline-block">
                {" "}
                Front-End Development
              </span>
              , Including{" "}
              <span className="text-mainColor inline-block">
                {" "}
                SaaS Solutions
              </span>
            </h1>

            <p className="text-base mt-2 sm:text-lg md:text-xl lg:text-2xl font-light text-white leading-7 lg:leading-[40px]">
              I{"'"}m an{" "}
              <span className="font-bold">Expert frontend developer</span> with{" "}
              <br className="block md:hidden" />
              <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-mainColor px-3 md:px-5 py-1 rounded-full border-[1px] border-[#303030] bg-[#181818] transition backdrop-blur-sm">
                1.7+ Years
              </span>{" "}
              of expertise in ReactJS and NextJS. I create &amp;
              <br className="md:block hidden" />
              responsive, user-centric web solutions, specializing in
              <span className="font-bold"> SaaS</span> and
              <span className="font-bold"> eCommerce</span> development.
            </p>

            <div className="mt-6 flex items-center justify-center flex-wrap gap-3 lg:gap-5">
              <button className="flex gap-2 text-base sm:text-lg md:text-xl lg:text-2xl  text-mainColor hover:bg-mainColor hover:text-black font-medium border-[1px] border-[#513d09] bg-[#251e0b] py-1.5 md:py-2 lg:py-2.5 px-5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="md:w-8 md:h-8 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  ></path>
                </svg>
                <span>Download CV</span>
              </button>

              <button className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-medium border-[1px] border-[#513d09] bg-mainColor hover:bg-[#251e0b] hover:text-mainColor py-1.5 md:py-2 lg:py-2.5 px-5 rounded-full ">
                Hire Me
              </button>
            </div>
            <div className="skill-scroller mt-10">
              <div className="scroller-track">
                <div className="scroller-content">
                  {[...skillsData, ...skillsData].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-2 rounded-full bg-white cursor-pointer min-w-[150px] md:min-w-[180px] h-auto w-auto"
                    >
                      <Image
                        alt={skill.name}
                        loading="lazy"
                        width={46}
                        height={46}
                        className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain transition duration-300 ease-in-out"
                        src={skill.image}
                      />
                      <p className="text-black text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
