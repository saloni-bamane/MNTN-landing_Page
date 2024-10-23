import arrowdown from "../assets/images/arrow_downward_24px.svg";

function Hero() {
  return (
    <>
      <div className="absolute top-32 z-[5] mb-5 md:top-[15%] lg:top-[30%]">
        <div className="flex w-fit flex-col justify-center gap-1 px-16 md:gap-8 md:px-32 lg:px-32 xl:px-44 2xl:px-[28rem]">
          <div className="font-gilroy font-extrabold uppercase text-accent">
            <span className='before:content-[""] md:before:absolute md:before:h-[2px] md:before:w-[72px] md:before:-translate-x-0 md:before:translate-y-3 md:before:bg-accent'>
              <p className="uppercase tracking-[0.375rem] md:pl-24">
                A Hiking guide
              </p>
            </span>
          </div>
          <h1 className="font-chronicle text-3xl font-semibold capitalize leading-normal sm:text-[56px] md:text-[80px] md:leading-[100px] xl:text-[88px]">
            Be prepared for the Mountains and beyond!
          </h1>
          <div className="flex h-5 items-center gap-4">
            <p className="font-gilroy text-sm lg:text-lg">scroll down</p>
            <img
              src={arrowdown}
              alt="scroll_arrow"
              className="h-auto w-3 md:h-5 md:w-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
