import styles from "../styles";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <h4
            className="font-poppins font-semibold xs:text-[28px] text-[20px] text-white xs:leading-[36.8px] leading-[33.8px] w-full"
            id="gcorporation"
          >
            GCorporation
          </h4>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make payments easy, reliable and secure
          </p>
        </div>
        <div className="flex flex-[1.5] flex-wrap justify-between md:mt-0 mt-10 w-full">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] 
                  leading-[24px] text-dimWhite hover:text-secondary 
                  cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-[1px] border-t-[#3f3e45] w-[100%]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white pt-2">
          &copy; Copyright Agostinho Soberano 2022
        </p>
      </div>
    </section>
  );
};

export default Footer;
