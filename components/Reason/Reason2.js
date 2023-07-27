import Image from "next/image";

const Reason2 = () => {
  return (
    <div className="lg:py-[100px]">
      <h2 className="text-[32px] font-semibold leading-none lg:px-[156px]">
        Reason #2 – Budbo is the first holistic ecosystem that touches every stakeholder of the cannabis industry.
      </h2>
      <div className="flex justify-center items-start my-[36px]">
        <Image
          src="/reason/Table.png"
          alt="traxchain"
          width={1120}
          height={638}
        />
      </div>
    </div>
  )
}

export default Reason2;
