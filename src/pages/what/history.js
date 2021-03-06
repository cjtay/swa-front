import React from "react";
import Layout from "../../components/layout/layout";

const History = () => {
  return (
    <>
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <section className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1>History and Milestones</h1>

          <h2>Our Heritage</h2>
          <p>
            Singapore Women's Association (SWA) started out as Siglap Girls'
            Club in 1954 with the aim of serving the needs of underprivileged
            girls in Singapore. With the establishment of the People's
            Association in 1960 to oversee activities for the Youth Movement, we
            decided to change our association name officially to SWA and shift
            our focus on empowering and helping women and elderly. SWA was also
            known as 'Persekutua Wanita Singapura' during the days of
            Singapore’s merger with Malaysia. Since its inception, SWA had been
            rendering voluntary services with the aim of helping to make
            Singapore a peaceful, happy and prosperous homeland for
            Singaporeans.
          </p>
          <p>
            Throughout the years, we have started many initiatives and projects
            with the aim of creating a better quality of life for everyone. Key
            on-going charity work include the Singapore Vision Care Programme
            (free eye care/ eye screening for elderly), Annual Charity Dinner
            (anchor fundraising campaign for beneficiaries), Athena Academy
            (social enterprise to empower women in professional/ personal growth
            training) and many others.
          </p>
          <p>
            SWA is also affiliated to Singapore Council of Women’s Organisation
            (SCWO) and is a member of National Council of Social Services
            (NCSS).
          </p>

          <h2>Milestones</h2>
          <div className="flex flex-col my-5 space-y-6">
            <div className="p-3 bg-gray-300 w-80 ">
              Card Component
              <p>Nov 2019</p>
              <img
                src="https://source.unsplash.com/random/800x600"
                alt=""
                className="object-cover max-w-full mt-2 border-4 border-white sm:mb-2 sm:mt-0 sm:mr-4 "
              />
              <div className="w-full bg-blue-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                hendrerit, augue vel convallis aliquam, tortor urna congue
                risus, a tristique ex felis id dui. Morbi venenatis risus in
                odio tempor, in faucibus nulla ornare.
              </div>
            </div>

            <div className="self-end p-3 bg-gray-300 w-80 ">
              Card Component
              <p>Nov 2019</p>
              <div className="relative w-full my-3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/GUNsLGUat30"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="relative top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <div className="w-full bg-blue-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                hendrerit, augue vel convallis aliquam, tortor urna congue
                risus, a tristique ex felis id dui. Morbi venenatis risus in
                odio tempor, in faucibus nulla ornare.
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default History;
