import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="mt-20 mb-20 flex flex-row items-center">
        <div className="mr-44 ml-20 mt-20 flex-1 p-3">
          <h3 className="mb-4 text-5xl ">
            About <h1 className="pt-2 font-bold">OSAIL</h1>{" "}
          </h3>
          <p className="w-full text-lg text-gray-700">
            The Office of Student Activities, Involvement & Leadership
            complements students' academic experiences by providing services and
            resources that engage students in creating campus culture through
            social, cultural, intellectual, spiritual, athletic, recreational,
            artistic, political, and service opportunities. The Office supports
            the student organizations that abound at PDEU.
          </p>
          <button class="mt-6  flex rounded border-0 bg-indigo-500 py-2 px-5 text-white focus:outline-none hover:bg-indigo-600">
            Button
          </button>
        </div>
        <div className="mr-auto flex-1" style={{ marginRight: "60px" }}>
          <img
            className="h-full w-full rounded-lg object-fill"
            src="https://img.freepik.com/free-vector/company-employees-sharing-thoughts-ideas_74855-5469.jpg?w=1380&t=st=1680509845~exp=1680510445~hmac=62ffa760b41d9b313a14687c8de811ef1354bcdae3e6601ffa27b99b5079c4df"
            alt="Image"
          />
        </div>
      </div>

      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-24">
          <div class="mb-20 flex w-full flex-col text-center">
            <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-indigo-500">
              ROOF PARTY POLAROID
            </h2>
            <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
              Master Cleanse Reliac Heirloom
            </h1>
            <p class="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div class="flex flex-wrap">
            <div class="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
              <h2 class="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">
                Shooting Stars
              </h2>
              <p class="mb-4 text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a class="inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
              <h2 class="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">
                The Catalyzer
              </h2>
              <p class="mb-4 text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a class="inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
              <h2 class="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">
                Neptune
              </h2>
              <p class="mb-4 text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a class="inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
              <h2 class="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">
                Melanchole
              </h2>
              <p class="mb-4 text-base leading-relaxed">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a class="inline-flex items-center text-indigo-500">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button class="mx-auto mt-16 flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white focus:outline-none hover:bg-indigo-600">
            Button
          </button>
        </div>
      </section>

      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-24">
          <div class="-mx-4 -mb-10 flex flex-wrap text-center">
            <div class="mb-10 px-4 sm:w-1/2">
              <div class="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  class="h-full w-full object-cover object-center"
                  src="https://dummyimage.com/1201x501"
                />
              </div>
              <h2 class="title-font mt-6 mb-3 text-2xl font-medium text-gray-900">
                Buy YouTube Videos
              </h2>
              <p class="text-base leading-relaxed">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button class="mx-auto mt-6 flex rounded border-0 bg-indigo-500 py-2 px-5 text-white focus:outline-none hover:bg-indigo-600">
                Button
              </button>
            </div>
            <div class="mb-10 px-4 sm:w-1/2">
              <div class="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  class="h-full w-full object-cover object-center"
                  src="https://dummyimage.com/1202x502"
                />
              </div>
              <h2 class="title-font mt-6 mb-3 text-2xl font-medium text-gray-900">
                The Catalyzer
              </h2>
              <p class="text-base leading-relaxed">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button class="mx-auto mt-6 flex rounded border-0 bg-indigo-500 py-2 px-5 text-white focus:outline-none hover:bg-indigo-600">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
