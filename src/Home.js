import styles from "./style";
// import { discount, robot } from "../assets";
import doctor from "./doctor-svgrepo-com.svg";
// import GetStarted from "./GetStarted";
import React from "react";

function DropdownComponent() {
  return (
    <>
      <div class="container  px-6 mx-auto">
        <section class=" text-gray-800 text-center">
          <h2 class="text-3xl font-bold mb-6">
            Meet the <u class="text-blue-600">team</u>
          </h2>

          <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">
            <div class="mb-6">
              <p class="font-bold mb-2">John Doe</p>
              <p class="text-gray-500">Co-founder</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Lisa Ferrol</p>
              <p class="text-gray-500">Web designer</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Maria Smith</p>
              <p class="text-gray-500">Senior consultant</p>
            </div>
            <div class="mb-6">
              <p class="font-bold mb-2">Agatha Bevos</p>
              <p class="text-gray-500">Co-founder</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Darren Randolph</p>
              <p class="text-gray-500">Marketing expert</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Soraya Letto</p>
              <p class="text-gray-500">SEO expert</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Maliha Welch</p>
              <p class="text-gray-500">Web designer</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Zeynep Dudley</p>
              <p class="text-gray-500">Web developer</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Avaya Hills</p>
              <p class="text-gray-500">Copywritter</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Thierry Fischer</p>
              <p class="text-gray-500">Senior consultant</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Aisling Sheldon</p>
              <p class="text-gray-500">Senior developer</p>
            </div>

            <div class="mb-6">
              <p class="font-bold mb-2">Ayat Black</p>
              <p class="text-gray-500">Web designer</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex container  px-6 mx-auto     md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={doctor} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">Who</span> are {" "}
              <span className="text-white">we </span> ?
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0"></div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            team Name
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            We are a group of thirteen senior students, clinical pharmacy
            program, Faculty of pharmacy Alexandria university . It's an honour
            to present CRC site which includes part of our graduation project
            ,providing scheme represented in different sections dealing with
            Management of coagulopathy among critical ill cancer patients as
            well as providing different scores to estimate the risk of most
            serious events associated with critically ill cancer patients
            besides the use of anticoagulants such as bleeding, VTE and stroke
            especially for patients with atrial fibrillation and other scores
            for diagnosis of (HIT) and (DIC).
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={doctor}
            alt="billing"
            className="w-[80%] h-[80%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}></div>
      </section>
      <DropdownComponent></DropdownComponent>
    </>
  );
};

export default Hero;
