
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
      <div className="container my-12 mx-auto px-2 md:px-4">
        <section className="mb-32">
          <div className="to-current text-2xl pt-10">
            <Title text1={"Contactează-ne"} text2={""} />
          </div>

          <div className="flex flex-wrap">
            <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-black"
                  htmlFor="exampleInput90"
                >
                  Nume
                </label>
                <input
                  type="text"
                  className="px-2 py-2 border w-full outline-none rounded-lg"
                  id="exampleInput90"
                  placeholder="Nume"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-black"
                  htmlFor="exampleInput90"
                >
                  Adresă email
                </label>
                <input
                  type="email"
                  className="px-2 py-2 border w-full outline-none rounded-lg"
                  id="exampleInput90"
                  placeholder="Introduceți adresa de email"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-black"
                  htmlFor="exampleInput90"
                >
                  Număr de telefon
                </label>
                <input
                  type="phone"
                  className="px-2 py-2 border w-full outline-none rounded-lg"
                  id="exampleInput90"
                  placeholder="Introduceți numărul de telefon"
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-black"
                  htmlFor="exampleInput90"
                >
                  Mesaj
                </label>
                <textarea
                  className="px-2 py-2 border rounded-[5px] w-full outline-none"
                  name="message"
                  id="message"
                  placeholder="Introduceți mesajul"
                  value={currentMessage}
                  onChange={(e) => {setMessage(e.target.value)}}
                >
                </textarea>
              </div>

              <button
                className="mb-6 inline-block w-full rounded bg-teal-400! px-6 py-2.5 font-medium uppercase leading-normal text-black hover:shadow-md! hover:bg-teal-500!"
                onClick={() => {console.log(currentMessage)}}
              >
                Trimite
              </button>
            </form>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-2 md:mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-lg bg-teal-400-100 ml-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="md:mb-2 font-bold">Telefon</p>
                      <a href={'tel:' + constants.PHONE_NUMBER} className="text-black cursor-pointer">{constants.PHONE_NUMBER}</a>
                    </div>
                  </div>
                </div>
                <div className="md:mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-lg bg-teal-400-100 ml-4 text-teal-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="md:mb-2 font-bold ">Email</p>
                      <a href={'mailto:' + constants.EMAIL} className="text-black cursor-pointer">{constants.EMAIL}</a>
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
