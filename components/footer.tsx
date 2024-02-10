import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-center gap-x-5 justify-around">
        <div className="flex items-center mb-3 sm:mb-0 text-left">
          <Image
            src="/logo.svg"
            alt="logo"
            className="mr-2"
            width={40}
            height={40}
          />
          <span>Estatery</span>
        </div>
        <div className="grid grid-cols-2 gap-x-2 md:grid-cols-3 w-[70%]">
          <SubFooter
            heading="Sell a Home"
            sub_links={['Request an offer', 'Pricing', 'Reviews', 'Stories']}
          />
          <SubFooter
            heading="Buy, Rent and Sell"
            sub_links={[
              'Buy and sell properties',
              'Rent home',
              'builder trade-up',
            ]}
          />
          <SubFooter
            heading="ABout"
            sub_links={['Company', 'How it works', 'Contact', 'Investors']}
          />
          <SubFooter heading="Buy a Home" sub_links={['Buy', 'Finance']} />
          <SubFooter
            heading="Terms & Privacy"
            sub_links={['Trust & Safety', 'Terms of Service', 'Privacy Policy']}
          />
          <SubFooter
            heading="resources"
            sub_links={['Blog', 'Guides', 'FAQ', 'Help Center']}
          />
        </div>
      </div>
      <hr />
      <div className="">
        <p className="text-center py-5 text-muted-foreground">
          © 2021 Estatery, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const SubFooter = ({
  heading,
  sub_links,
}: {
  heading: string;
  sub_links: any[];
}) => {
  return (
    <section className="w-[200px] py-5">
      <h3 className="uppercase font-semibold text-sm sm:text-lg">{heading}</h3>
      <div className="flex flex-col gap-y-2 mt-2">
        {sub_links.map((link, index) => (
          <div className="text-sm text-muted-foreground " key={index}>
            {link}
          </div>
        ))}
      </div>
    </section>
  );
};
