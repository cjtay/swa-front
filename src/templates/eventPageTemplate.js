import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Image from "gatsby-image";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

// ...GatsbyImageSharpFluid
export const query = graphql`
  query getSingleEvent($slug: String) {
    strapiEvent(slug: { eq: $slug }) {
      author {
        name
      }
      id
      programme
      published_at(formatString: "Do MMM YYYY")
      slug
      summary
      title
      eventContent {
        singleParagraph
        paragraph_title
        singlePhoto {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        photo_position
        photoCaption
        paragraph_text
        paragraph_photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        boxed
        wide
        two_columns
        rich_text
      }
    }
  }
`;

const EventPageTemplate = ({ data }) => {
  const event = data.strapiEvent;
  const content = data.strapiEvent.eventContent;
  console.log("content: ", content);

  return (
    <Layout>
      <SectionBackground />

      <Wrapper>
        {/* <FeatureImage src="https://source.unsplash.com/random/" alt="" /> */}
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

          {content.map((item, index) => (
            <div key={index}>
              {item.singleParagraph !== null && (
                <PostContainer wide={item.wide && true}>
                  {item.boxed ? (
                    <Highlight>
                      <PostSectionTitle>
                        {item.paragraph_title}
                      </PostSectionTitle>
                      <PostParagraph column={item.two_columns && true}>
                        {item.singleParagraph}
                      </PostParagraph>
                    </Highlight>
                  ) : (
                    <>
                      <PostSectionTitle>
                        {item.paragraph_title}
                      </PostSectionTitle>
                      <PostParagraph column={item.two_columns && true}>
                        {item.singleParagraph}
                      </PostParagraph>
                    </>
                  )}
                </PostContainer>
              )}
              {item.singlePhoto !== null && (
                <PostContainer wide={item.wide && "wide"}>
                  <PostImage>
                    <Image
                      fluid={item.singlePhoto.childImageSharp.fluid}
                      alt="test"
                    />
                  </PostImage>
                  {item.photoCaption !== null && (
                    <ImageCaption>{item.photoCaption}</ImageCaption>
                  )}
                </PostContainer>
              )}
              {item.paragraph_text !== null && (
                <PostContainer wide={item.wide && "wide"}>
                  <PostImage position={item.photo_position}>
                    <Image
                      fluid={item.paragraph_photo.childImageSharp.fluid}
                      alt={event.title}
                    />
                  </PostImage>

                  <PostParagraph>{item.paragraph_text}</PostParagraph>
                </PostContainer>
              )}
              {item.rich_text !== null && (
                <PostContainer wide={item.wide && "wide"}>
                  <MarkdownStyle>
                    <ReactMarkdown
                      source={item.rich_text}
                      plugins={[[gfm, { singleTilde: false }]]}
                    />
                  </MarkdownStyle>
                </PostContainer>
              )}
              {/* {item.photo_gallery !== null && (
                <PostContainer wide={item.wide && "wide"}>
                  {item.photo_gallery.map((photo, index) => (
                    <Gallery key={index}>
                      <Image
                        fluid={photo.formats.small.childImageSharp.fluid}
                      />
                    </Gallery>
                  ))} 
                </PostContainer>
              )} */}
            </div>
          ))}

          {/* <PostContainer>
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
          </PostContainer> */}
          {/* <PostContainer>
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
          </PostContainer> */}
          {/* <PostContainer>
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
          </PostContainer> */}
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
  max-width: ${props => (props.wide ? "1200px" : "700px")};
  margin: 3em auto;

  @media (min-width: 600px) {
    margin: 2em auto;
  }
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
  padding-bottom: 0.2em;
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
    padding-bottom: 0.5em;
  }

  @media (min-width: 600px) {
    width: ${props =>
      props.position === "right" || props.position === "left"
        ? "250px"
        : "100%"};
    overflow: hidden;
    float: ${props =>
      props.position === "left"
        ? "left"
        : props.position === "right"
        ? "right"
        : null};
    margin-left: ${props => props.position === "right" && "1em"};
    margin-right: ${props => props.position === "left" && "1em"};
    margin-bottom: ${props =>
      (props.position === "left" || props.position === "right") && "0.5em"};
    margin-top: 0.4em;
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

const Highlight = styled.div`
  background-color: var(--color-primary-light);
  border: 1px solid var(--color-primary-2);
  border-radius: 10px;
  padding: 1em;
  font-weight: 400;
`;

const MarkdownStyle = styled.div`
  h1 {
    font-weight: 900;
    color: var(--color-primary-1);
  }
  h2 {
    font-weight: 900;
    color: var(--color-primary-1);
  }
  h3 {
    font-weight: 700;
    color: var(--color-primary-1);
  }

  p {
    color: var(--color-black);
    /* font-size: 1.4rem; */
    line-height: 1.5;

    @media (min-width: 600px) {
      column-count: ${props => props.column && "2"};
      column-gap: ${props => props.column && "2em"};
    }
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
    list-style-image: none;
    margin: 1em auto;
    color: var(--color-black);
  }

  em,
  strong {
    font-weight: 700;
    color: var(--color-primary-2);
  }

  u {
    text-decoration: underline;
  }

  blockquote > p {
    display: inline-block;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--color-primary-1);
    margin: 1em auto;
    background-color: var(--color-primary-4);
    border-radius: 15px;
    padding: 0 0.8em 0 0;

    ::before {
      content: "Q";
      font-size: 5rem;
      font-weight: 400;
      margin-right: 0.1em;
      position: relative;
      top: -7px;
      right: -7px;
    }

    /* ::after {
      content: "_____";
      position: relative;
      left: -250px;
      top: 10px;
    } */
  }
`;

// const Gallery = styled.div`
//   display: grid;
//   max-width: 100%;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 1em;
//   align-items: stretch;
//   grid-auto-rows: 300px;
//   grid-auto-flow: dense;
//   background-color: #333;
//   padding: 1em;
// `;

// const GalleryImg = styled.img`
//   border: 1px solid white;
//   max-width: 100%;
//   object-fit: cover;

//   @media (min-width: 900px) {
//     grid-column: ${props => props.wide && "span 2"};
//     grid-row: ${props => props.tall && "span 2"};
//   }
// `;

// const Bullets = styled.ul`
//   list-style-type: disc;
//   background-color: var(--color-lightgrey);
//   border: 1px solid var(--color-primary-2);
//   border-radius: 10px;
//   padding: 1em 1em 1em 2em;
//   font-weight: 400;
//   font-size: inherit;

//   li {
//     margin: 1em auto;
//   }
// `;
