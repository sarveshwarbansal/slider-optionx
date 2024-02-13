// "use client";
// 
import logo from "../assets/logo.svg";
import Image from "next/image";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import linkedin from "../assets/Linkedin.svg";
import twitter from "../assets/Twitter.svg";
import youtube from "../assets/YouTube.svg";
import email from "../assets/Email.svg";
import phone from "../assets/Phone.svg";
import mark from "../assets/Mark.svg";

function Footer() {
  
  return (
    <>
      <footer className="flex flex-col justify-between  bg-slate-950 lg:text-left p-8 md:px-16 md:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between  ">
          {/* First links section */}
          
          <div className="mb-10 sm:mb-6  sm:w-[20%]">
            <a href="/">
              <Image className="mb-2" src={logo} loading="lazy" alt="" />
            </a>
            <p className="mb-8 font-medium  text-[#6F6C90] max-w-full md:max-w-[60%] text-left ">
              Trade with Unleashed Speed and Execution
            </p>
            <div className="flex justify-start items-center gap-6">
              <a href="/">
                <Image src={facebook} alt="" loading="lazy" />
              </a>
              <a href="/">
                <Image src={instagram} alt="" loading="lazy" />
              </a>
              <a href="https://www.linkedin.com/company/99996879/admin/feed/posts/" target="_blank">
                <Image src={linkedin} alt=""  />
              </a>
              <a href="/">
                <Image src={twitter} alt="" loading="lazy" />
              </a>
              <a href="https://www.youtube.com/channel/UCLLrXgzv1kw51w0JCGpA_ng" target="_blank">
                <Image src={youtube} alt="" loading="lazy" />
              </a>
            </div>
          </div>

<div className="flex justify-between sm:justify-evenly sm:w-[50%]">
          {/* Second links section */}
          <div className="mb-6  ">
            <h5 className="mb-2.5 font-bold  text-slate-300">Products</h5>

            <ul className="mb-6 list-none">
              <li className="text-[#6F6C90] py-2">
                <a href="#features">Features</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="#testimonials">Testimonial</a>
              </li>
            </ul>
          </div>

          {/* Third links section */}
          <div className="mb-6 ">
            <h5 className="mb-2.5 font-bold  text-slate-300">Company</h5>

            <ul className="mb-0 list-none">
              <li className="text-[#6F6C90] py-2">
                <a href="#aboutus">About</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="mailto:tech@optionx.trade">Contact Us</a>
              </li>
              <li className="text-[#6F6C90] py-2">
                <a href="mailto:tech@optionx.trade">Feedback</a>
              </li>
            </ul>
          </div>
          </div>

          <div className="sm:mb-6 w-full sm:w-[25%]">
            <h5 className="mb-2.5 font-bold  text-slate-300 ">
              Contact Us
            </h5>

            <ul className="mb-0 list-none ">
              <li className="text-[#6F6C90] py-2 flex gap-2">
                <a href="/">
                  <Image src={email} alt="" loading="lazy" />
                </a>

                <a href="mailto:tech@optionx.trade">tech@optionx.trade</a>
              </li>
              <li className="text-[#6F6C90] py-2 flex gap-2">
                <a href="/">
                  <Image src={phone} alt="" loading="lazy" />
                </a>
                <a href="tel:7501351937">7501351937</a>
              </li>
              <li className="text-[#6F6C90] py-2 flex gap-2">
                <a href="/">
                  <Image src={mark} alt="" loading="lazy" />
                </a>
                <a href="#!">Building 8C, DLF Cyber City, Gurugram, Haryana, India</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
      </footer>
      <div className="w-full bg-slate-950 px-8 pb-8 pt-2 text-gray-300">
        <p className="text-[#6F6C90] sm:float-left">
          Copyright © 2023 OptionX.trade
        </p>
        <div className="sm:float-right">
        <span className="text-[#6F6C90]">
            Charts Powered By{" "}
            <a
              className="text-[#6A71E5]"
              href="https://in.tradingview.com/"
              target="_blank"
            >
              Trading view |
            </a>
          </span>
          <span className="text-[#6F6C90]">
            {" "}
            All Rights Reserved |
          </span>{" "}
          <span className="text-[#6A71E5]">
            Terms and Conditions |
          </span>{" "}
          <span className="text-[#6A71E5]">Privacy Policy</span>
        </div>
      </div>
    </>
  );
}

export default Footer;