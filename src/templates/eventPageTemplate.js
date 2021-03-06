import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Image from "gatsby-image";
import styled from "styled-components";
import { Wrapper, ContentWrapper } from "../styles/wrappers/Wrapper";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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
              {event.author !== null && (
                <Author>
                  <AuthorPhoto>
                    <Image
                      fluid={event.author.authorPhoto.childImageSharp.fluid}
                      alt={event.title}
                    />
                  </AuthorPhoto>
                  <AuthorInfoContainer>
                    <AuthorName>{event.author.name}</AuthorName>
                    <PublishDate>{event.published_at}</PublishDate>
                  </AuthorInfoContainer>
                </Author>
              )}

              <ProgrammeInfo>
                <div>
                  <span>Programme: </span>
                  {event.programme}
                </div>
                <div>
                  <span>Date: </span>
                  {event.published_at}
                </div>
              </ProgrammeInfo>
              {/* <div>
                <span>Author: </span>
                {event.author.name}
              </div> */}
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
                  {item.paragraph_photo !== null && (
                    <PostImage position={item.photo_position}>
                      <Image
                        fluid={item.paragraph_photo.childImageSharp.fluid}
                        alt={event.title}
                      />
                    </PostImage>
                  )}

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
            </div>
          ))}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0.9rem;
  span {
    font-weight: 400;
  }
`;

const ProgrammeInfo = styled.div`
  display: flex;
  flex-direction: column;
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

// const FeatureImage = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 20vh;
// `;

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

const Author = styled.div`
  display: flex;
  margin: 0.5em 0;
`;

const AuthorInfoContainer = styled.div`
  margin-bottom: 0.5em;
`;

const AuthorName = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--color-black);
`;

const AuthorPhoto = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 35px;
  height: 35px;
  overflow: hidden;
  margin-right: 0.5em;
  border: 1px solid var(--color-primary-1);
  border-radius: 100%;

  /* img {
    display: block;
    max-width: 30px;
    max-height: 30px;
    margin-left: auto;
    margin-right: auto;
  } */
`;

const PublishDate = styled.div`
  font-size: 0.7rem;
  font-weight: 300;
  color: var(--color-darkgrey);
`;

// ...GatsbyImageSharpFluid
export const query = graphql`
  query getSingleEvent($slug: String) {
    strapiEvent(slug: { eq: $slug }) {
      author {
        name
        authorPhoto {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
