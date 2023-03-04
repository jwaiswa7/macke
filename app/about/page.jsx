import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
      />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-justify"
              data-wow-delay=".2s"
            >
              <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                We began in 1990 with the acquisition of Macke farm located in Chepterit right above Sipi one magnificent water falls. Our Parents kept local animal breeds and grew Arabica coffee as a cash crop to supplement their household income. Today we pride in producing high quality organic Arabica coffee demanded across the globe grown at an altitude of above 2000 degrees above sea level, fresh farm milk, a vibrant hospitality business in lodges and restaurants, general trading and cleaning services.
              </p>
              <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
              Macke is named after the last born of Mzee Kuka, Cherotich Anthony Kuka who inherited the family farm and estate with his Wife Emily Chelangat and three Children. The logo is inspired by their love for environment and family.              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
