import arrowdown from "../assets/images/arrow_downward_24px.svg";

function Hero() {
  return (
    <>
      <div className="absolute top-[30%] z-10">
        <div className="flex w-fit flex-col justify-center gap-8 px-16 md:px-32 lg:px-64 xl:px-[450px]">
          <div className="font-gilroy font-extrabold uppercase text-accent">
            <span className='before:absolute before:h-[2px] before:w-[72px] before:-translate-x-0 before:translate-y-3 before:bg-accent before:content-[""]'>
              <p className="pl-24 uppercase tracking-[0.375rem]">
                A Hiking guide
              </p>
            </span>
          </div>
          <h1 className="font-chronicle text-[56px] font-semibold capitalize leading-normal md:text-[88px] md:leading-[100px]">
            Be prepared for the Mountains and beyond!
          </h1>
          <div className="flex items-center gap-4">
            <p className="font-gilroy text-lg">scroll down</p>
            <img src={arrowdown} alt="scroll_arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
