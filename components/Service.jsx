/* eslint-disable react/no-unescaped-entities */
import { services } from "../data/services";
/* eslint-disable @next/next/no-img-element */

export default function Service() {
  const serviceItems = services.map((item) => (
    <div
      key={item.id}
      className="rounded-lg text-center border-2 py-8 px-5 w-[359px] service-anim "
    >
      <div className="w-20 h-20 mx-auto">
        <img
          src={item.image}
          alt="responsive web icon"
          className="w-full h-full"
        />
      </div>
      <p className="text-[22px] my-3 font-bold card-body-font  ">
        {item.title}
      </p>
      <p className="text-base card-body-font font-light text-gray-200 ">
        {item.description}
      </p>
    </div>
  ));
  return (
    <div className="my-20 w-full 2xl:max-w-7xl 2xl:mx-auto ">
      <div>
        <p className="header-font text-gray-300">Services</p>
      </div>
      <div className="flex space-x-10">{serviceItems}</div>
    </div>
  );
}
