import React from "react";
import MainLayout from "../../layout/MainLayout";
import BreadCrumbs from "../../layout/components/BreadCrumbs";
import { Link } from "react-router-dom";
import { Images } from "../../constants/ImgIndex";
import SuggestedArticle from "./container/SuggestedArticle";
import CommentBox from "../../layout/components/Comments/CommentBox";
import SocialShareButtons from "../../layout/components/SocialShareButtons";

{
  /* 
  1. there's 3 array of objects here
      one for the first 3 breadcrumbs
      seceond for data desc of each post
      third tags data for suggested and below posts

  2. breadvrumbs date are passed to breadcrumb e.g
      "   <BreadCrumbs data={breadCrumbsData} />"


  3. ensure to give it it's unique key during mapping
  4. extra "to="/blog?category=selectedCategory""
        this line is a conditional if  blog go to catergory 
        and the catergory should be the userselected
  ============== */
}

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article Title", link: "/blog/1" },
];

{
  /*===========================  Breadcrumbs is the top link ================= */
}

const postsData = [
  {
    _id: "1",
    image: Images.post1,
    title: "Help children get better education",
    createdAt: "2023-05-9T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: Images.post1,
    title: "Help children get better education",
    createdAt: "2023-05-9T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: Images.post1,
    title: "Help children get better education",
    createdAt: "2023-05-9T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: Images.post1,
    title: "Help children get better education",
    createdAt: "2023-05-9T15:35:53.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetail = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          {/*===========================  Breadcrumbs data  passed to the file ================= */}

          <img className="rounded-xl w-full" src={Images.post1} alt="laptop" />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-colorsecond md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-colorfourth">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
              vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi
              tristique senectus et netus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Egestas purus viverra accumsan in
              nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit
              scelerisque. In egestas erat imperdiet sed euismod nisi porta
              lorem mollis. Morbi tristique senectus et netus. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Sapien
              faucibus et molestie ac feugiat sed lectus vestibulum.
            </p>
          </div>
          <CommentBox className="mt-10" logginedUserId="a" />
        </article>

        <div>
          <SuggestedArticle
            header="Latest Article"
            posts={postsData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs"
          />
          {/* ===========  the items in this suggested tag are used in the file ============== */}

          <div className="mt-7">
            <h2 className="font-roboto font-medium text-dark-colorfourth md:text-xl">
              Share On:
            </h2>

            <SocialShareButtons
              url={encodeURI("https://manuarora.in/boxshadows")}
              title={encodeURIComponent("Box Shadows for TailwindCSS")}
            />
            {/* encodeURI converts any url character into it's UTF-8 character fmt  */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetail;
