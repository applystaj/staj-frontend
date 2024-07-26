import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-5 flex flex-col items-center w-full box-border">
      <div className="flex justify-between w-4/5 gap-8 box-border">
        <div className="flex-1 text-left">
          <h3 className="font-bold mb-2">Brands</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#Adidas" className="text-black no-underline text-base">Adidas</a></li>
            <li className="mb-2"><a href="#Puma" className="text-black no-underline text-base">Puma</a></li>
            <li className="mb-2"><a href="#Reebok" className="text-black no-underline text-base">Reebok</a></li>
            <li className="mb-2"><a href="#Nike" className="text-black no-underline text-base">Nike</a></li>
          </ul>
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#aboutus" className="text-black no-underline text-base">About Us</a></li>
            <li className="mb-2"><a href="#findastore" className="text-black no-underline text-base">Destek</a></li>
            <li className="mb-2"><a href="#rulesandterms" className="text-black no-underline text-base">Eğitim</a></li>
            <li className="mb-2"><a href="#sitemap" className="text-black no-underline text-base">Sitemap</a></li>
            <li className="mb-2"><a href="#career" className="text-black no-underline text-base">Career</a></li>
          </ul>
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#contactus" className="text-black no-underline text-base">Contact Us</a></li>
            <li className="mb-2"><a href="#moneyrefund" className="text-black no-underline text-base">Money Refund</a></li>
            <li className="mb-2"><a href="#orderstatus" className="text-black no-underline text-base">Order Status</a></li>
            <li className="mb-2"><a href="#shippinginfo" className="text-black no-underline text-base">Shipping Info</a></li>
            <li className="mb-2"><a href="#opendispute" className="text-black no-underline text-base">Open Dispute</a></li>
          </ul>
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-bold mb-2">Account</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#login" className="text-black no-underline text-base">Login</a></li>
            <li className="mb-2"><a href="#register" className="text-black no-underline text-base">Register</a></li>
            <li className="mb-2"><a href="#accountsetting" className="text-black no-underline text-base">Account Setting</a></li>
            <li className="mb-2"><a href="#myorders" className="text-black no-underline text-base">My Orders</a></li>
          </ul>
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-bold mb-2">Abonelik</h3>
          <ul className="list-none p-0">
            <li className="mb-2"><a href="#facebook" className="text-black no-underline text-base flex items-center"><img src="facebook.png" alt="Facebook Icon" className="footer-icon w-4 h-4 mr-2" />Facebook</a></li>
            <li className="mb-2"><a href="#twitter" className="text-black no-underline text-base flex items-center"><img src="indir.png" alt="Twitter Icon" className="footer-icon w-4 h-4 mr-2" /> Twitter</a></li>
            <li className="mb-2"><a href="#instagram" className="text-black no-underline text-baseflex items-center"><img src="instagramr.png" alt="Instagram Icon" className="footer-icon w-4 h-4 mr-2" />Instagram</a></li>
            <li className="mb-2"><a href="#youtube" className="text-black no-underline text-baseflex items-center"><img src="youtube.png" alt="Youtube Icon" className="footer-icon w-4 h-4 mr-2" />YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black w-4/5 my-5 box-border"></div>
      <div className="text-center py-5 bg-gray-200 text-base w-4/5 box-border">
        abc@mail.com
      </div>
    </footer>
  );
};

export default Footer;
