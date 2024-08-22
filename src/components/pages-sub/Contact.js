
import React from 'react';
import Subnavbody from '../props/sub-pages/Subnavbody';
import ContactUS from '../props/body-components/ContactUs';
import Footer from '../props/main-pages/Footer';

function Contact() {
  return (
    <div>
      <Subnavbody img='/assets/about.png' subTitle='Contact Us' subText='Contact Us'
      />
      <ContactUS/>
      <Footer footerContainerClassName="py-32 2xl:py-32 xl:py-auto lg:py-28 md:py-24 sm:py-40 " />

    </div>
  );
}

export default Contact;
