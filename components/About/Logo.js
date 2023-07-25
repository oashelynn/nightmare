import Image from "next/image";

const Logo = () => {
  return (<div className="text-center">
    <div id="logo-logo" className="w-[888px] mx-auto translate-x-10  inset-0 z-10 object-cover">
      <Image
          src="/logo.svg"
          alt="Logo"
          width={560}
          height={585}
          className="m-auto"
      />
    </div>
    <div  className=" z-10 ">
      <Image
          src="/logo.svg"
          alt="Logo"
          width={560}
          height={585}
          className="mx-auto"
      />
    </div>
    <div id="logo-text" className=" mx-auto  mb-[120px]">
      <Image
          src="/logo_txt_only.svg"
          alt="Purple "
          width={476}
          height={200}
          className="m-auto"
      />
    </div>
    <div id="" className="absolute inset-0 top-[4500px]">
      <Image
          src="/screenshot/map 3.png"
          alt="Logo Phone"
          width={200}
          height={405}
      />
    </div>
  </div>)
};

export default Logo;
