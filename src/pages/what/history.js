import React from "react";
import Layout from "../../components/layout/layout";

const History = () => {
  return (
    <>
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <div className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1 className="text-swa-3">History and Milestones</h1>
          <section className="my-8">
            <h2 className="text-swa-3">Our Heritage</h2>
            <p>
              Singapore Women's Association (SWA) started out as Siglap Girls'
              Club in 1954 with the aim of serving the needs of underprivileged
              girls in Singapore. With the establishment of the People's
              Association in 1960 to oversee activities for the Youth Movement,
              we decided to change our association name officially to SWA and
              shift our focus on empowering and helping women and elderly. SWA
              was also known as 'Persekutua Wanita Singapura' during the days of
              Singapore’s merger with Malaysia. Since its inception, SWA had
              been rendering voluntary services with the aim of helping to make
              Singapore a peaceful, happy and prosperous homeland for
              Singaporeans.
            </p>
            <p>
              Throughout the years, we have started many initiatives and
              projects with the aim of creating a better quality of life for
              everyone. Key on-going charity work include the Singapore Vision
              Care Programme (free eye care/ eye screening for elderly), Annual
              Charity Dinner (anchor fundraising campaign for beneficiaries),
              Athena Academy (social enterprise to empower women in
              professional/ personal growth training) and many others.
            </p>
            <p>
              SWA is also affiliated to Singapore Council of Women’s
              Organisation (SCWO) and is a member of National Council of Social
              Services (NCSS).
            </p>
          </section>
          <section>
            <h2 className="text-swa-3">Milestones</h2>
            <div className="relative flex flex-col items-center py-3 mx-auto my-5 space-y-6 bg-gray sm:max-w-4xl">
              {/* vertical bar */}
              <div className="absolute inset-0 w-2 h-full md:mx-auto bg-swa-4 left-5 sm:left-20 md:left-0"></div>

              {/* left card */}
              <div className="relative w-10/12 p-5 rounded-lg bg-swa-4 md:self-start sm:w-72 lg:w-96">
                <div
                  aria-hidden="true"
                  className="absolute z-0 w-4 h-4 transform rotate-45 md:block bg-swa-4 md:-right-2 md:left-auto -right-0 -left-2 "
                ></div>
                <h4 className="font-bold md:text-right text-swa-2">Nov 2019</h4>
                <img
                  src="https://source.unsplash.com/random/600x600"
                  alt=""
                  className="object-cover w-full my-3 border-8 border-white sm:mb-2 sm:mt-0 sm:mr-4"
                />
                <div className="w-full text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque hendrerit, augue vel convallis aliquam, tortor urna
                  congue risus, a tristique ex felis id dui. Morbi venenatis
                  risus in odio tempor, in faucibus nulla ornare.
                </div>
              </div>

              {/* right card */}
              <div className="relative w-10/12 p-5 rounded-lg shadow-lg bg-swa-4 md:self-end sm:w-72 lg:w-96">
                <div
                  aria-hidden="true"
                  className="absolute z-0 w-4 h-4 transform rotate-45 bg-swa-4 md:block -left-2"
                ></div>
                <h4 className="font-bold text-swa-2">Oct 2019</h4>
                <div className="relative w-full my-3">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GUNsLGUat30"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="relative top-0 left-0 w-full h-full border-8 border-white"
                  ></iframe>
                </div>
                <div className="w-full text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque hendrerit, augue vel convallis aliquam, tortor urna
                  congue risus, a tristique ex felis id dui. Morbi venenatis
                  risus in odio tempor, in faucibus nulla ornare.
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default History;
