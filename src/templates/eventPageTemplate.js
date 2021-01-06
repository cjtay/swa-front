import React from "react";
import { graphql } from "gatsby";
// import ReactMarkdown from "react-markdown";
import Layout from "../components/layout/layout";
// import Image from "gatsby-image";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";

export const query = graphql`
  query getSingleEvent($slug: String) {
    strapiEvent(slug: { eq: $slug }) {
      id
      published_at(formatString: "Do MMM YYYY")
      slug
      title
      summary
      author {
        name
      }
      programme
    }
  }
`;

const EventPageTemplate = ({ data }) => {
  console.log("from template ", data.strapiEvent.title);
  const event = data.strapiEvent;
  return (
    <Layout>
      <SectionBackground />

      <Wrapper>
        <FeatureImage src="https://source.unsplash.com/random/" alt="" />
        <ContentWrapper>
          <PostContainer>
            <PostTitle>{event.title}</PostTitle>
          </PostContainer>

          <PostContainer>
            <PostInfo>
              <div>
                <span>Programme: </span>
                {event.programme}
              </div>
              <div>
                <span>Date: </span>
                {event.published_at}
              </div>
              <div>
                <span>Author: </span>
                {event.author.name}
              </div>
            </PostInfo>
          </PostContainer>

          <PostContainer>
            <PostParagraph>
              Normal paragraph without title.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis est incidunt animi optio expedita praesentium
              laudantium quidem esse reiciendis, debitis, repudiandae laboriosam
              error quo recusandae dolorem rem placeat quas. Quibusdam!
            </PostParagraph>
          </PostContainer>
          <PostContainer>
            <PostSectionTitle>
              This is a section with a section title
            </PostSectionTitle>
            <PostParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis est incidunt animi optio expedita praesentium
              laudantium quidem esse reiciendis, debitis, repudiandae laboriosam
              error quo recusandae dolorem rem placeat quas. Quibusdam!
            </PostParagraph>
          </PostContainer>

          <PostContainerWide>
            <PostParagraph>
              Wide paragraph.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis est incidunt animi optio expedita praesentium
              laudantium quidem esse reiciendis, debitis, repudiandae laboriosam
              error quo recusandae dolorem rem placeat quas. Quibusdam!
            </PostParagraph>
          </PostContainerWide>

          <PostContainer>
            <PostImage>
              {/* <img src="https://source.unsplash.com/random/" alt="post-photo" /> */}
            </PostImage>
            <ImageCaption>This is an image caption</ImageCaption>
          </PostContainer>

          <PostContainerWide>
            <PostImage>
              {/* <img
                src="https://source.unsplash.com/random/1200x800"
                alt="random"
              /> */}
            </PostImage>
            <ImageCaption>This is a wide image</ImageCaption>
          </PostContainerWide>

          <PostContainer>
            <PostImage left>
              {/* <img
                src="https://source.unsplash.com/random/900x800"
                alt="random"
              /> */}
            </PostImage>

            <PostParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis est incidunt animi optio expedita praesentium
              laudantium quidem esse reiciendis, debitis, repudiandae laboriosam
              error quo recusandae dolorem rem placeat quas. Quibusdam! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. recusandae
              dolorem rem placeat quas. Quibusdam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perspiciatis est incidunt animi
              optio expedita praesentium laudantium quidem esse reiciendis,
              debitis, repudiandae laboriosam error quo recusandae dolorem rem
              placeat quas. Quibusdam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. recusandae dolorem rem placeat quas. Quibusdam!
            </PostParagraph>
          </PostContainer>
          <PostContainer>
            <Highlight>
              This is a highlighted section <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              harum blanditiis id molestiae est voluptas facilis magnam
              voluptatum maiores unde eveniet, numquam a optio eum saepe! Ut
              modi autem reiciendis?
            </Highlight>
          </PostContainer>
          <PostContainer>
            <Gallery>
              <GalleryImg
                src="https://source.unsplash.com/cssvEZacHvQ"
                alt="random"
                tall
              />

              <GalleryImg
                src="https://source.unsplash.com/O-8Fmpx7HqQ"
                alt="random"
              />

              <GalleryImg
                src="https://source.unsplash.com/FpATXvTxEI4"
                alt="random"
                wide
              />

              <GalleryImg
                src="https://source.unsplash.com/EwKXn5CapA4"
                alt="random"
              />

              <GalleryImg
                src="https://source.unsplash.com/FpATXvTxEI4"
                alt="random"
              />

              <GalleryImg
                src="https://source.unsplash.com/EwKXn5CapA4"
                alt="random"
              />

              <GalleryImg
                src="https://source.unsplash.com/vltMzn0jqsA"
                alt="random"
                wide
              />
            </Gallery>
          </PostContainer>
          <PostContainerWide>
            <Gallery>
              <GalleryImg
                src="https://source.unsplash.com/cssvEZacHvQ"
                alt="random"
                tall
              />

              <GalleryImg
                src="https://source.unsplash.com/O-8Fmpx7HqQ"
                alt="random"
              />

              <GalleryImg
                src="https://source.unsplash.com/FpATXvTxEI4"
                alt="random"
                wide
              />

              <GalleryImg
                src="https://source.unsplash.com/EwKXn5CapA4"
                alt="random"
              />

              <GalleryImg
                src="https://source.unsplash.com/FpATXvTxEI4"
                alt="random"
              />

              <GalleryImg
                src="https://source.unsplash.com/EwKXn5CapA4"
                alt="random"
              />

              <GalleryImg
                src="https://source.unsplash.com/vltMzn0jqsA"
                alt="random"
                wide
              />
            </Gallery>
          </PostContainerWide>
          <PostContainer>
            <Bullets>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti illo asperiores officia tempore neque delectus maiores
                vitae repellendus velit repellat vel cum error possimus
                quibusdam sed, molestias molestiae mollitia ratione.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                nulla sunt rerum eveniet culpa ut ex nobis, ducimus tempore
                excepturi nesciunt nihil, quia doloribus non alias vero
                sapiente. Laudantium, dolores.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                enim dolores quas architecto corrupti unde sunt dicta
                repudiandae, quae velit, similique, est voluptate quidem?
                Voluptas quod suscipit ut ratione amet.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nemo iusto libero harum nihil obcaecati dignissimos,
                velit est, suscipit deleniti minus hic ex, ipsum dolore adipisci
                blanditiis deserunt omnis molestias!
              </li>
            </Bullets>
          </PostContainer>
          <PostContainer>
            <PostParagraph column>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              perspiciatis pariatur odio debitis earum assumenda. Non possimus
              repellendus tenetur dolor qui dolorem! Distinctio quisquam tempore
              blanditiis praesentium porro mollitia eveniet. Praesentium
              laboriosam fuga earum accusantium iure perspiciatis quasi aperiam
              natus vel ipsa error animi dolor nesciunt, sed voluptate
              doloremque deleniti? Pariatur repellat maiores consequuntur
              adipisci saepe, qui nobis libero quaerat. Iure temporibus delectus
              eius rem maxime tempora quidem fuga est fugiat mollitia adipisci
              exercitationem ipsa, quam eos perferendis obcaecati beatae
              voluptate eligendi sed cum? Nisi iste deleniti labore corporis.
              Debitis!
            </PostParagraph>
          </PostContainer>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default EventPageTemplate;

const SectionBackground = styled.div`
  background: rgba(112, 49, 140, 1);
  background: -webkit-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  background: -moz-linear-gradient(
    bottom right,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  background: linear-gradient(
    to top left,
    rgba(112, 49, 140, 1),
    rgba(132, 137, 199, 1)
  );
  position: absolute;
  top: 0;
  height: 110px;
  width: 100%;
  z-index: -1;
`;

const PostContainer = styled.div`
  max-width: 700px;
  margin: 1.5em auto;
`;

const PostContainerWide = styled.div`
  max-width: 1200px;
  margin: 1.5em auto;
`;

const PostInfo = styled.div`
  font-size: 1rem;
  span {
    font-weight: 400;
  }
`;

const PostTitle = styled.h1`
  font-weight: 900;
  color: var(--color-primary-1);
`;

const PostSectionTitle = styled.h3`
  font-weight: 700;
  color: var(--color-primary-1);
`;

const PostParagraph = styled.p`
  color: var(--color-black);
  /* font-size: 1.4rem; */
  line-height: 1.5;

  @media (min-width: 600px) {
    column-count: ${props => props.column && "2"};
    column-gap: ${props => props.column && "2em"};
  }
`;

const PostImage = styled.div`
  width: 100%;
  /* max-height: 400px; */
  overflow: hidden;
  margin: 0;

  img {
    display: block;
    max-width: 100%;
    max-height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 600px) {
    width: ${props => (props.right || props.left ? "200px" : "100%")};
    overflow: hidden;
    float: ${props => (props.left ? "left" : props.right ? "right" : null)};
    margin-left: ${props => props.right && "1em"};
    margin-right: ${props => props.left && "1em"};
    margin-bottom: ${props => (props.left || props.right) && "0.8em"};
    /* padding: 0.5em; */
    /* box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.25); */
  }
`;

const ImageCaption = styled.div`
  color: var(--color-grey);
  font-size: 0.9rem;
  font-weight: 300;
  /* text-align: center; */
`;

const FeatureImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 20vh;
`;

const Highlight = styled.p`
  background-color: var(--color-primary-light);
  border: 1px solid var(--color-primary-2);
  border-radius: 10px;
  padding: 1em;
  font-weight: 400;
`;

const Gallery = styled.div`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1em;
  align-items: stretch;
  grid-auto-rows: 300px;
  grid-auto-flow: dense;
  background-color: #333;
  padding: 1em;
`;

const GalleryImg = styled.img`
  border: 1px solid white;
  max-width: 100%;
  object-fit: cover;

  @media (min-width: 900px) {
    grid-column: ${props => props.wide && "span 2"};
    grid-row: ${props => props.tall && "span 2"};
  }
`;

const Bullets = styled.ul`
  list-style-type: disc;
  background-color: var(--color-lightgrey);
  border: 1px solid var(--color-primary-2);
  border-radius: 10px;
  padding: 1em 1em 1em 2em;
  font-weight: 400;
  font-size: inherit;

  li {
    margin: 1em auto;
  }
`;
// export const query = graphql`
//   query SingleEvent($slug: String) {
//     strapiEvent(slug: { eq: $slug }) {
//       id
//       description
//       slug
//       title
//       published_at(formatString: "MMM Do YYYY")
//       mainPhoto {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `;
