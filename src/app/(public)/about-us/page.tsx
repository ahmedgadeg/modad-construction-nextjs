import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CXALeft from "@/components/UI/CarouselXArrows/CXALeft";
import CXARight from "@/components/UI/CarouselXArrows/CXARight";
import HomeExpCard from "@/components/UI/HomeExpCard";
import { faBullseye, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import { Metadata } from "next";
import Image from "next/image";
import logo1 from "@/assets/companiesLogos/Modad Consratuction-Black.svg";
import logo2 from "@/assets/companiesLogos/Modad Properties-Black.svg";
import logo3 from "@/assets/companiesLogos/Modad MEP-Black.svg";
import logo4 from "@/assets/companiesLogos/Modad Smart Solutions-Black.svg";
import logo5 from "@/assets/companiesLogos/Modad Fine Finishing-Black.svg";
import logo6 from "@/assets/companiesLogos/Modad Charity Foundation-Black.svg";
import Link from "next/link";
import ServiceCard from "@/components/UI/ServiceCard";

export const metadata: Metadata = {
  title: "Modad - About us",
  description: "About Modad",
};
const AboutUsPage = () => {
  return (
    <>
      <BreadCrumbs
        title="About us"
        items={[
          { title: "Home", path: "/" },
          { title: "About us", path: "/about-us" },
        ]}
      />
      <main className="bg-primary relative">
        <Image
          fill
          src="/pattern.svg"
          alt=""
          className="object-cover opacity-5"
        />
        <div className="container mx-auto py-12 px-6 md:px-0 relative z-[1]">
          <h3 className="text-3xl font-bold mb-6">MODAD</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:min-h-[60vh]">
            <div className="text-white p-4 flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-4 uppercase">
                Welcome to MODAD Group
              </h4>
              <p className="text-lg">
                A dynamic conglomerate built on the pillars of passion,
                innovation, and excellence. Since our inception in 2011, we have
                been at the forefront of the construction, real estate, MEP
                services, and smart solutions industries, shaping a better
                tomorrow for communities worldwide. Led by visionary Founder and
                Chairman, Engineer Mohamed El-Haddad, our group is driven by a
                steadfast commitment to delivering exceptional engineering
                solutions and infrastructure development. With over 12 years of
                expertise and a growing portfolio of successful projects, we
                have earned the trust of clients and investors alike. From Real
                Estate Development, Construction services, Electromechanical
                services, Fine Finishing, to smart solutions. our diverse range
                of companies provides comprehensive solutions tailored to the
                unique needs of our clients. Join us on a remarkable journey of
                engineering excellence, sustainable development, and meaningful
                contributions to society. At MODAD Group, we are more than just
                a conglomerate; we are a force shaping a brighter, more
                prosperous future for generations to come.
              </p>
            </div>
            <div className="">
              <Carousel>
                <div className="relative aspect-square">
                  <Image
                    src="/imgs/shutterstock_2145134953.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/imgs/shutterstock_2145134953.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </Carousel>
            </div>
            <div></div>
          </div>
        </div>
      </main>
      <section className="bg-black">
        <div className="container mx-auto py-24 px-6 md:px-0">
          <p className="mb-16 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cumque laboriosam nulla eligendi perspiciatis suscipit eius
            blanditiis vitae, aut ea voluptatum excepturi voluptates aliquam,
            eveniet inventore consequuntur odio officiis maxime vero labore eos
            accusantium beatae.
          </p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <div className="border-primary border-4 p-5 sm:p-12">
              <div className="flex mb-6">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-primary text-8xl me-4"
                />
                <h3 className="text-5xl font-bold uppercase">
                  <span className="block text-white">Our</span>
                  <span className="block text-primary">Vision</span>
                </h3>
              </div>
              <div>
                <p className="text-justify text-white">
                  We envision a future where engineering brilliance meets human
                  potential, creating a better world for generations to come.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 p-5 sm:p-12">
              <div className="flex mb-6">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="text-primary text-8xl me-4"
                />
                <h3 className="text-5xl font-bold uppercase">
                  <span className="block text-white">Our</span>
                  <span className="block text-primary">Mission</span>
                </h3>
              </div>
              <div>
                <p className="text-justify text-white">
                  We are driven to build a brighter, more prosperous future,
                  leaving an indelible mark of excellence on the world stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16 px-12 md:px-0">
          <h2 className="text-primary text-xl sm:text-3xl font-bold text-center">
            OUR GROUP
          </h2>
          <p className="text-center mt-4 text-sm max-w-[1024px] mx-auto">
            Welcome to MODAD Group, a dynamic conglomerate built on the pillars
            of passion, innovation, and excellence. Since our inception in 2011,
            we have been at the forefront of the construction, real estate, MEP
            services, and smart solutions industries, shaping a better tomorrow
            for communities worldwide. MODAD Group is divided into 7
            subsidiaries, in which each is specialized or serves in a different
            yet crossed sector:
          </p>
          <div className="grid gap-y-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 py-12">
            <HomeExpCard
              title="MODAD Group"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Construction"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Properties"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD MEP"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Smart Solutions"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Fine Finishing"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Foundation"
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="container mx-auto py-12">
          <h2 className="text-white text-xl sm:text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="px-8">
            <Carousel
              responsive={[{ breakpoint: 1024, settings: { slidesToShow: 1 } }]}
              slidesToShow={2}
              dots={false}
              arrows
              prevArrow={
                <CXALeft left={-5} iconClassName="text-xl select-none" />
              }
              nextArrow={
                <CXARight right={-5} iconClassName="text-xl select-none" />
              }
            >
              <div className="p-4">
                <ServiceCard
                  imgLink="/imgs/shutterstock_697100377.jpg"
                  title="CONSULTING"
                  description="Our consulting services offer you ease of mind, as we oversee the entire process. Beginning with the documentation and paperwork to the creation of a project plan, we can get it done from start to finish. Meeting our clients’ needs and exceeding their expectations."
                />
              </div>
              <div className="p-4">
                <ServiceCard
                  imgLink="/imgs/shutterstock_707662543.jpg"
                  title="ARCHITECTURE"
                  description="An idea cannot become reality unless it is designed properly. Our skilled and experienced architects are talented, highly trained, and equipped with the latest technology. They are the ones that turn your vision into reality by transforming your ideas into tangible plans and designs."
                />
              </div>
              <div className="p-4">
                <ServiceCard
                  imgLink="/imgs/shutterstock_1067925506.jpg"
                  title="CONSTRUCTION"
                  description="MODAD Construction stands as your comprehensive solution for construction requirements, adept at handling projects of various scales. Whether it's a small-scale initiative or a large corporate complex, our expertise extends to diverse construction needs. From intricate roadwork to the development of expansive corporate complexes, MODAD Construction ensures excellence and precision in every facet of the construction process."
                />
              </div>
              <div className="p-4">
                <ServiceCard
                  imgLink="/imgs/shutterstock_1411133069.jpg"
                  title="RENOVATIONS"
                  description="We can deliver renovation projects of any scale, at the highest standards of quality. We offer a full service starting from planning, architecture, tiling, painting, woodwork, and stonework. We can work hand in hand with our clients every step of the way."
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
