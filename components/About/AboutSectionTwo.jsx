import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/macke-farm.jpeg"
                alt="farm image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Coffee
                </h3>
                <p className="text-justify font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                More than 10 speciality blends and single origin farm coffee grown from Macke farm Chepterit.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Fresh Foods
                </h3>
                <p className="text-justify font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Fresh farm milk, variety of organically grown vegetables and fruits for local consumption and export through Nutrimark.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Beverages
                </h3>
                <p className="text-justify font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Teas, juices and imported wines traded under Macke Ltd.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Cleaning Services
                </h3>
                <p className="text-justify font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                 Our team consists of experienced professionals and keep to the highest proven standards that take into consideration healthy and safe working environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
