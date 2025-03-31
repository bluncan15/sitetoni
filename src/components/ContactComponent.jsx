
import { useState } from 'react';
import { assets } from "../assets/assets";
import { constants } from "../assets/constants"
import Title from "./Title";

const ContactComponent = ( {message=""} ) => {

  let [currentMessage, setMessage] = useState(message);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div class="container my-12 mx-auto px-2 md:px-4">
        <section class="mb-32">
          <div className="to-current text-2xl pt-10">
            <Title text1={"Contactează-ne"} text2={""} />
          </div>

          <div class="flex flex-wrap">
            <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <div class="mb-3 w-full">
                <label
                  class="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Nume
                </label>
                <input
                  type="text"
                  class="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Nume"
                />
              </div>

              <div class="mb-3 w-full">
                <label
                  class="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Adresă email
                </label>
                <input
                  type="email"
                  class="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Introduceți adresa de email"
                />
              </div>

              <div class="mb-3 w-full">
                <label
                  class="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Număr de telefon
                </label>
                <input
                  type="phone"
                  class="px-2 py-2 border w-full outline-none rounded-md"
                  id="exampleInput90"
                  placeholder="Introduceți numărul de telefon"
                />
              </div>

              <div class="mb-3 w-full">
                <label
                  class="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Mesaj
                </label>
                <textarea
                  class="px-2 py-2 border rounded-[5px] w-full outline-none"
                  name="message"
                  id="message"
                  placeholder="Introduceți mesajul"
                  value={currentMessage}
                  onChange={(e) => {setMessage(e.target.value)}}
                >
                </textarea>
              </div>

              <button
                class="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-black hover:shadow-md hover:bg-teal-500"
                onClick={() => {console.log(currentMessage)}}
              >
                Trimite
              </button>
            </form>

            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div class="flex flex-wrap">
                <div class="mb-2 md:mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="flex items-start">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-teal-400-100 ml-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="md:mb-2 font-bold">Telefon</p>
                      <a href={'tel:' + constants.PHONE_NUMBER} class="text-neutral-500 cursor-pointer">{constants.PHONE_NUMBER}</a>
                    </div>
                  </div>
                </div>
                <div class="md:mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div class="align-start flex">
                    <div class="shrink-0">
                      <div class="inline-block rounded-md bg-teal-400-100 ml-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-6 grow">
                      <p class="md:mb-2 font-bold ">Email</p>
                      <a href={'mailto:' + constants.EMAIL} class="text-neutral-500 cursor-pointer">{constants.EMAIL}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactComponent;
