import Image from "next/image";

function ContactUs() {
   return (
      <div className="mt-20 min-h-[100vh]">

         <div className="h-auto py-4 md:h-80 bg-[#ffbe0b]">
            <div className="w-full h-full flex flex-wrap items-center justify-evenly">
               <div className="flex flex-col gap-y-8">
                  <h2 className="font-bold text-xl md:text-6xl drop-shadow-lg">How can we help <br /> you today?</h2>
                  <span className="drop-shadow-lg text-lg">Welcom to <span className="italic font-medium">Veer-Pawas</span> help center</span>
               </div>
               <div>
                  <Image src={'/forAbout/cartoon.jpg'} width={100} height={100} className="size-80 px-4 py-4 rounded-[34px]" alt="this is image" />
               </div>
            </div>

      

         </div>

         <div className="w-[95%] md:w-[80%] mx-auto mt-24 mb-20 grid grid-col-1 md:grid-cols-2 gap-x-6 gap-y-10">

            <div className="group border border-slate-200 rounded-xl flex flex-col items-center gap-y-4 py-4 px-4 bg-white drop-shadow-lg hover:drop-shadow-[0_6px_10px_#e35b66] cursor-pointer">
               <div>
                  <Image width={100} height={100} className="w-30 group-hover:scale-[1.1] transition-all ease-in-out duration-300" src={'/forAbout/office.jpg'} alt="this is an image" />
               </div>
               <div className="flex flex-col gap-y-3">
                  <h2 className="text-lg font-bold text-center group-hover:text-[#e35b66]">Our Office</h2>
                  <p className="opacity-80 w-[70%] mx-auto">Office no 22 first floor,Gulshna plaza, Badnera Rd, near mantri mothers, Rajapeth, Amravati, Maharashtra 444605</p>
               </div>
            </div>


            <div className="group border border-slate-200 rounded-xl flex flex-col items-center gap-y-4 py-4 px-4 bg-white cursor-pointer drop-shadow-lg hover:drop-shadow-[0_6px_10px_#e35b66]">
               <div>
                  <Image width={100} height={100} className="w-25 group-hover:scale-[1.1] transition-all ease-in-out duration-300" src={'/forAbout/call-us.webp'} alt="this is an image" />
               </div>
               <div className="flex flex-col gap-y-3">
                  <h2 className="text-lg font-bold text-center group-hover:text-[#e35b66]">Call us</h2>
                  <p className="opacity-80 w-[70%] mx-auto">Request a quote, or just chat about your next vacation. We&apos;re always happy to help! <span className="text-blue-600 font-medium">+91 8446162375</span> </p>
               </div>
            </div>



            <div className="group border border-slate-200 rounded-xl flex flex-col items-center gap-y-4 py-4 px-4 bg-white cursor-pointer drop-shadow-lg hover:drop-shadow-[0_6px_10px_#e35b66]">
               <div>
                  <Image width={100} height={100} className="w-25 group-hover:scale-[1.1] transition-all ease-in-out duration-300" src={'/forAbout/email.webp'} alt="this is an image" />
               </div>
               <div className="flex flex-col gap-y-3">
                  <h2 className="text-lg font-bold text-center group-hover:text-[#e35b66]">Write to Us</h2>
                  <p className="opacity-80 w-[70%] mx-auto">Be it an enquiry, feedback or a simple suggestion, write to us. <span className="text-blue-600 font-medium">aryandhamale07@gmail.com</span></p>
               </div>
            </div>


            <div className="group border border-slate-200 rounded-xl flex flex-col items-center gap-y-4 py-4 px-4 bg-white cursor-pointer drop-shadow-lg hover:drop-shadow-[0_6px_10px_#e35b66]">
               <div>
                  <Image width={100} height={100} className="w-30 group-hover:scale-[1.1] transition-all ease-in-out duration-300" src={'/forAbout/contact-with-us.png'} alt="this is an image" />
               </div>
               <div className="flex flex-col gap-y-3">
                  <h2 className="text-lg font-bold text-center group-hover:text-[#e35b66]">Contact with Us</h2>
                  <p className="opacity-80 w-[70%] mx-auto">Located across the country, ready to assist in planning & booking your perfect vacation.</p>
               </div>
            </div>


         </div>

      </div>
   );
}

export default ContactUs;