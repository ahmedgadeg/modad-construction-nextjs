import { Button, Carousel } from "antd";
import Image from "next/image";
import HomeExpCard from "@/components/UI/HomeExpCard";
import ProjectCard from "@/components/UI/ProjectCard";
import CXALeft from "@/components/UI/CarouselXArrows/CXALeft";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import CXARight from "@/components/UI/CarouselXArrows/CXARight";
import ReadMoreCollapse from "@/components/UI/ReadMoreCollapse";
export default function Home() {
  return (
    <>
      <main className=" xl:min-h-[90vh] xl:max-h-screen">
        <div className="w-full">
          <Carousel
            slidesToShow={1}
            slidesToScroll={1}
            dots={{ className: "bottom-6" }}
            autoplay={true}
            pauseOnFocus={false}
            pauseOnHover={false}
            pauseOnDotsHover={false}
            infinite
          >
            <div className="aspect-video xl:max-h-screen relative">
              <Image
                src="/imgs/shutterstock_2212033973.jpg"
                alt=""
                className="w-full object-cover"
                fill
              />
              <div className="relative w-full h-full flex items-center justify-center text-white">
                <div className="mr-12 w-full sm:w-[500px] px-4">
                  <h2 className="uppercase text-3xl sm:text-7xl lg:text-9xl font-bold">
                    title
                  </h2>
                  <p className="text-xs sm:text-base md:text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit labore temporibus dolor perferendis incidunt fugiat ex
                    inventore animi quae ipsam libero, blanditiis sed
                    consequatur tempora illo consequuntur qui eligendi
                    repudiandae?
                  </p>
                  <Button
                    style={{ borderRadius: 0, fontWeight: 700 }}
                    className="uppercase opacity-100 mt-6"
                    type="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-video relative xl:max-h-screen">
              <Image
                src="/imgs/shutterstock_1067925506.jpg"
                alt=""
                className="w-full object-cover"
                fill
              />
              <div className="relative w-full h-full flex items-center justify-center text-white">
                <div className="mr-12 w-full sm:w-[500px] opacity-100 px-4">
                  <h2 className="uppercase text-3xl sm:text-7xl lg:text-9xl font-bold">
                    Second TItle
                  </h2>
                  <p className="text-xs sm:text-base md:text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit labore temporibus dolor perferendis incidunt fugiat ex
                    inventore animi quae ipsam libero, blanditiis sed
                    consequatur tempora illo consequuntur qui eligendi
                    repudiandae?
                  </p>
                  <Button
                    style={{ borderRadius: 0, fontWeight: 700 }}
                    className="uppercase opacity-100 mt-6"
                    type="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-video relative xl:max-h-screen">
              <Image
                src="/imgs/shutterstock_707662543.jpg"
                alt=""
                className="w-full object-cover"
                fill
              />
              <div className="relative w-full h-full flex items-center justify-center text-white">
                <div className="mr-12 w-full sm:w-[500px] opacity-100 px-4">
                  <h2 className="uppercase text-3xl sm:text-7xl lg:text-9xl font-bold">
                    Third title
                  </h2>
                  <p className="text-xs sm:text-base md:text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit labore temporibus dolor perferendis incidunt fugiat ex
                    inventore animi quae ipsam libero, blanditiis sed
                    consequatur tempora illo consequuntur qui eligendi
                    repudiandae?
                  </p>
                  <Button
                    style={{ borderRadius: 0, fontWeight: 700 }}
                    className="uppercase opacity-100 mt-6"
                    type="primary"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </main>
      <section>
        <div className="w-full lg:h-[100vh]  flex flex-col-reverse lg:flex-row relative overflow-hidden">
          <div className="bg-[#111619] w-full lg:w-[40%] flex py-6 px-6 items-center">
            <div className="relative z-[2] lg:h-[40vh]">
              <h2 className="text-primary font-bold uppercase text-3xl mb-4">
                Chairman message
              </h2>
              <p className="text-white">
                I am privileged and honored to be introducing MODAD
                Construction. Nowadays to operate successfully in a rapidly
                changing market dynamic we have developed a work ethic centered
                around...
              </p>
              <ReadMoreCollapse
                content="Agility drives our continuous success as today’s market is rapidly
              changing. To ensure that we exceed our clients’ expectations we
              make sure we are always one step ahead in the market and ready to
              overcome any challenge we face. Hard work & Commitment: Our client
              is at the heart of our operations, and we put in the effort and
              hard work to deliver our projects exceptionally. We are proud of
              our dedication and commitment to help our clients grow and reach
              their business goals. Diversification: With a diverse and wide
              scope of services provided we ensure to meet all requirements and
              provide our customers with all the solutions needed for their
              projects. Quality: We take quality very seriously in all of our
              processes. We have an exceptional quality assurance team that is
              experienced in ensuring our clients receive their projects at the
              highest quality standards available with the most suitable
              materials for their projects."
              />
            </div>
          </div>
          <div className="w-full aspect-video lg:aspect-auto lg:w-[60%] relative">
            <Image src="/Chairman.jpg" alt="" className="object-cover" fill />
          </div>
          <div className="absolute w-1/2 h-[350vh] -rotate-[30deg] hidden lg:flex -bottom-[100vh]">
            <div className="grow h-full bg-[#111619] "></div>
            <div className=" w-[180px] h-full bg-gradient-to-r from-[#373737] to-[#231f20]"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16 px-12 md:px-0">
          <h2 className="text-primary text-xl sm:text-3xl font-bold text-center">
            OUR EXPERIENCE SECTORS
          </h2>
          <p className="text-center mt-4 text-sm max-w-[1024px] mx-auto">
            We have succeeded in establishing our name as market leader in the
            construction, and engineering solutions industry. We serve a wide
            range of sectors including but not limited to commercial, banking,
            administrative, hospitality, and residential.
          </p>
          <div className="grid gap-y-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 py-12">
            <HomeExpCard
              title="MODAD Group"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Construction"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Properties"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD MEP"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Smart Solutions"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Fine Finishing"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
            <HomeExpCard
              title="MODAD Foundation"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure accusantium."
              imgSrc="/imgs/shutterstock_1411133069.jpg"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full aspect-video">
          <Carousel
            dots={false}
            arrows
            prevArrow={
              <CXALeft icon={faCaretLeft} iconClassName="text-3xl" left={5} />
            }
            nextArrow={
              <CXARight
                icon={faCaretRight}
                iconClassName="text-3xl"
                right={5}
              />
            }
          >
            <div className="relative aspect-video w-full">
              <Image
                src="/imgs/shutterstock_2328313927.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute top-0 sm:top-[15%] left-0 p-6 w-full sm:w-[500px] bg-black/20">
                <h3 className="text-primary text-2xl mb-6">Highlights</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quos esse, minima doloribus quia fugiat?
                </p>
              </div>
            </div>
            <div className="relative aspect-video w-full">
              <Image
                src="/imgs/shutterstock_2328313927.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute top-0 sm:top-[15%] left-0 p-6 w-full sm:w-[500px] bg-black/20">
                <h3 className="text-primary text-2xl mb-6">Highlights</h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quos esse, minima doloribus quia fugiat?
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="bg-black">
        <div className="container mx-auto py-12 px-2">
          <h2 className="text-primary text-2xl xl:text-3xl mb-6 xl:mb-12">
            Current Projects
          </h2>
          <div className="w-full px-6 xl:px-12">
            <Carousel
              arrows
              dots={false}
              slidesToShow={3}
              responsive={[
                { breakpoint: 640, settings: { slidesToShow: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
              ]}
              prevArrow={
                <CXALeft left={-5} iconClassName="text-xl select-none" />
              }
              nextArrow={
                <CXARight right={-5} iconClassName="text-xl select-none" />
              }
            >
              <div>
                <ProjectCard
                  title="P.1"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_1559528492.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.2"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2206514397.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.3"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2272446391.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.4"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2272446391.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.5"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2272446391.jpg"
                />
              </div>
              <div>
                <ProjectCard
                  title="P.6"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam ipsum voluptas!"
                  imgSrc="/imgs/shutterstock_2272446391.jpg"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div className="container mx-auto py-12 px-2">
          <div className="flex flex-col gap-12 px-1 md:px-0">
            <div>
              <h3 className="text-2xl xl:text-3xl">News</h3>
            </div>
            <div className="col-span-5 flex flex-col gap-4 px-12">
              <Carousel
                dots={false}
                arrows
                prevArrow={
                  <CXALeft left={-5} iconClassName="text-xl select-none" />
                }
                nextArrow={
                  <CXARight right={-5} iconClassName="text-xl select-none" />
                }
              >
                <div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative w-full sm:w-2/5 aspect-square shrink-0">
                      <Image
                        fill
                        src="/imgs/shutterstock_1913548069.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="mb-3 text-base lg:text-xl font-bold">
                        LOREM IPSUM DOLOR (REUTERS)
                      </h3>
                      <p className="text-xs md:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        doloreolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative w-full sm:w-2/5 aspect-square shrink-0">
                      <Image
                        fill
                        src="/imgs/shutterstock_1913548069.jpg"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="mb-3 text-base lg:text-xl font-bold">
                        LOREM IPSUM DOLOR (REUTERS){" "}
                      </h3>
                      <p className="text-xs md:text-base">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        doloreolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary relative">
        <Image
          fill
          src="/pattern.svg"
          alt=""
          className="object-cover opacity-5"
        />
        <div className="container mx-auto py-12 relative z-[1]">
          <h3 className="text-3xl mb-6">Corporate Responsibility</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:min-h-[60vh]">
            <div className="text-white p-4 flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-4">LOREM IPSUM DOLOR </h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet doloreolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
                cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 px-4 lg:px-0 lg:gap-8">
              <div className="relative aspect-square">
                <Image
                  src="/imgs/shutterstock_2145134953.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/imgs/shutterstock_2298356519.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/imgs/shutterstock_1868955754.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/imgs/shutterstock_697100377.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}