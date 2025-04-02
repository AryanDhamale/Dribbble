function Footer()
{
    return (
            <div className="flex justify-between bg-[ghostwhite] gap-y-6 px-30 py-16 flex-wrap">
                <div className="pl-3.5">
                    <p className="text-2xl font-semibold italic cursor-pointer py-2">Dribbble</p>
                    <p className="text-xl font-semibold opacity-50">Keep travelling all year round!</p>
                    <p className="text-xl opacity-50">Subscribe to our newsletter to find travel inspiration in your inbox.</p>
                    <p className="text-xl opacity-50">All Rights Reserved &copy; Dribbble 2025</p>
                </div>
                
                <div className="flex gap-x-30 flex-wrap gap-y-6">

                  <div>
                  <h2 className="text-2xl font-semibold  mb-5">About</h2>
                   <ul className="flex flex-col gap-y-2">
                     <li className="opacity-40 cursor-pointer hover:opacity-100">How to Book</li>
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Contact Us</li>
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Help Center</li>
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Career</li>
                   </ul>
                  </div>

                  <div>
                  <h2 className="text-2xl font-semibold  mb-5">Products</h2>
                   <ul className="flex flex-col gap-y-2">
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Flighs</li>
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Hotels</li>
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Train</li>
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Villas</li>
                   </ul>
                  </div>

                  <div>
                  <h2 className="text-2xl font-semibold  mb-5">Other</h2>
                   <ul className="flex flex-col gap-y-2">
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Blog</li>
                     <li className="opacity-40 cursor-pointer hover:opacity-100">Privacy Notice</li>
                   </ul>
                  </div>

                </div>
                   
            </div>
    );
}

export default Footer;