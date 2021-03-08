import React from "react";
import Layout from "../../components/layout/layout";

const Press = () => {
  return (
    <>
      <div className="absolute w-full h-32 z-n10 bg-gradient-to-r from-swa-1 to-swa-5"></div>
      <Layout>
        <div className="max-w-4xl px-2 mx-auto sm:w-4/5">
          <h1 className="text-swa-3">Press Page</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus dolorem quo numquam quam magni cupiditate porro
            reiciendis veritatis autem! Explicabo aperiam, similique esse quod
            illum assumenda atque quo consequatur excepturi. Ullam enim
            doloremque harum sequi error rerum rem nobis officia perspiciatis
            corrupti et ducimus reiciendis facere, quod odio omnis, ipsa fuga,
            modi maiores debitis at ad? Asperiores sit eaque autem?
          </p>
          <section className="my-8 space-y-6">
            <h2 className="mb-2 text-swa-3">Media mentions</h2>
            <div>
              <h3>Media 1</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem modi consequatur ratione necessitatibus rerum.
                Quisquam consectetur vel repudiandae, laborum numquam tempora
                nostrum voluptatem rem suscipit facilis. Quae ab natus amet.
              </p>
            </div>
            <div>
              <h3>Media 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati eveniet recusandae in maxime ducimus praesentium sunt
                quaerat dolor ipsam, vel saepe laborum impedit itaque eum magni
                sequi temporibus ab eligendi.
              </p>
            </div>
          </section>
          <section className="my-8 space-y-6">
            <h2 className="mb-2 text-swa-3">Press release</h2>
            <div>
              <h3>Press release 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                voluptate sed eos possimus corporis maiores quam. Recusandae
                nihil deserunt illum molestiae esse nemo temporibus, magni quasi
                iure, aliquid libero amet.
              </p>
            </div>
            <div>
              <h3>Press release 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
                error consectetur maiores minus, ut impedit cumque, expedita non
                quis dignissimos magnam. Nesciunt accusantium repellat
                repudiandae. Numquam dicta ad placeat iste?
              </p>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Press;
