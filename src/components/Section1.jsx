import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/img3.svg";
import arrow from "../assets/images/rightArrow.svg";

const sectionData = [
  {
    title: "Get Started",
    subtitle: "What level of hiker are you?",
    content:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
    image: img1,
    index: "01",
  },
  {
    title: "Hiking Essentials",
    subtitle: "Picking the right Hiking Gear!",
    content:
      "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.",
    image: img2,
    index: "02",
  },
  {
    title: "Where you go is the key",
    subtitle: "Understand Your Map & Timing",
    content:
      "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.",
    image: img3,
    index: "03",
  },
];

function SectionComponent({ title, subtitle, content, image, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex w-full flex-col items-center pb-20 md:flex-row md:pb-52 ${
        isEven ? "flex-col-reverse" : "flex-row-reverse"
      }`}
    >
      <div
        className={`flex w-full justify-center sm:w-1/2 sm:justify-start md:justify-end ${isEven ? "" : "order-1"}`}
      >
        <img className="h-auto w-80 shadow-lg md:w-full" src={image} alt="" />
      </div>
      <div
        className={`w-full sm:w-2/3 ${isEven ? "p-4 md:pl-28" : "p-4 md:pr-28"}`}
      >
        <div className="container relative mt-20">
          <div className="flex flex-col font-gilroy sm:text-xs md:gap-3 md:pl-24 md:text-sm lg:text-base xl:gap-7 xl:pl-36">
            <span className="font-extrabold uppercase tracking-[0.375rem] text-accent before:absolute before:left-[9rem] before:h-[2px] before:-translate-x-10 before:bg-accent before:content-[''] md:pl-12 md:before:w-8 md:before:translate-y-2 lg:pl-24 lg:before:w-[4.5rem] lg:before:-translate-x-0 lg:before:translate-y-3">
              {title}
            </span>
            <h1 className="xs:text-xl font-chronicle text-3xl font-semibold leading-none sm:leading-normal lg:text-4xl lg:leading-tight xl:text-5xl 2xl:text-7xl">
              {subtitle}
            </h1>
            <p className="font-bold">{content}</p>
            <p className="flex gap-3">
              <span className="font-bold text-accent">read more</span>
              <img src={arrow} alt="" />
            </p>
          </div>
          <span className="absolute -left-1 -top-28 font-gilroy text-8xl font-bold leading-none opacity-10 md:text-[15rem]">
            {index}
          </span>
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <>
      {sectionData.map((section, index) => (
        <SectionComponent
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          content={section.content}
          image={section.image}
          index={section.index}
        />
      ))}
    </>
  );
}

export default Section1;
