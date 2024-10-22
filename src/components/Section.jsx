import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img1.svg";
import img3 from "../assets/images/img1.svg";
import arrow from "../assets/images/rightArrow.svg";
const sectionsData = [
  {
    imgSrc: img1,
    title: "What level of hiker are you?",
    content:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
  },
  {
    imgSrc: img2,
    title: "Picking the right Hiking Gear!",
    content:
      "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.",
  },
  {
    imgSrc: img3,
    title: "Understand Your Map & Timing",
    content:
      "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.",
  },
];

function SectionComponent({ imgSrc, title, content, index }) {
  const isEven = index % 2 === 0;
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div
      className={`flex flex-col md:flex-row gap-10 md:gap-36 justify-center items-center pb-12 md:pb-52 ${
        isEven ? "flex-row-reverse" : ""
      }`}
    >
      <div className={`font-gilroy relative ${isEven ? "order-2" : ""}`}>
        <span className='absolute -top-44 -left-24 font-gilroy text-[10rem] md:text-[15rem] font-bold opacity-10 '>
          {formattedIndex}
        </span>
        <div className='ml-6 w-full md:w-[39.5rem] flex flex-col gap-7'>
          <div className='uppercase font-gilroy font-extrabold text-accent pl-0 md:pl-[7.5rem]'>
            <span className='before:content-[""] before:absolute before:w-[72px] before:h-[2px] before:bg-accent before:-translate-x-[120px] before:translate-y-3 '>
              <p>A Hiking guide</p>
            </span>
          </div>
          <h2 className='font-chronicle font-semibold text-[2rem] md:text-[4rem] leading-tight'>
            {title}
          </h2>
          <p className='text-base md:text-lg'>{content}</p>
          <p className='flex gap-4 text-base md:text-lg'>
            <span>read more</span> <img src={arrow} alt='' />
          </p>
        </div>
      </div>
      <div className={`${isEven ? "order-1" : ""}`}>
        <img src={imgSrc} alt='' className='w-full h-auto' />
      </div>
    </div>
  );
}

function Section() {
  return (
    <>
      {sectionsData.map((section, index) => (
        <SectionComponent
          key={index}
          imgSrc={section.imgSrc}
          title={section.title}
          content={section.content}
          index={index + 1}
        />
      ))}
    </>
  );
}
export default Section;
