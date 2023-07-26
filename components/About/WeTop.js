const { default: Image } = require("next/image")

const WeTop = () => {
  return (
    <div className="w-full text-center font-sysui mt-[130px]">
      <div>
        <h2 className="text-[24px] leading-4 lg:text-[68px]">
          We are
        </h2>
        <h1 className="italic lg:text-[90px] text-[34px] font-medium bg-linear bg-clip-text text-transparent">
          Web3
        </h1>
        <p className="text-[14px] lg:text-[40px]">Rewards ecosystem to give back and incentivize our users</p>
        <div className="w-full flex my-[44px] justify-center items-center">
          <div className="translate-x-[60px] -z-1">
            <Image
              src="/about/leaderboard 2.png"
              alt="leaderboard"
              width={158}
              height={358}
            />
          </div>
          <Image
            src="/about/userbook.png"
            alt="userbook3"
            width={1017}
            height={487}
          />
          <div className="translate-x-[-60px] -z-1">
            <Image
              src="/about/driver2 2.png"
              alt="userbook3"
              width={141}
              height={361}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeTop;
