import moment from "moment";
import { CardProps } from "../modal";
import { urlFor } from "../sanity/client";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Cards = (props: CardProps) => {
  const {
    id,
    url,
    image,
    content,
    author,
    description,
    category,
    title,
    launchAt,
    dataset
  } = props;
  // console.log("card console", id);
  return (
    <div className="blog-card" key={id}>
      <div className="card mx-3 mb-14">
        <img
          className="left object-cover object-center"
          src={urlFor(image).url()}
          alt="blog" 
        />

        <div className="mb-1">
          <div className="author flex items-center pr-2 ml-2 my-1">
            <img src={urlFor(author.authImage).url()} alt="blog image"/>
            <h3>{author.authName}</h3>
          </div>
        </div>
        <h3 className="font-bold">{title}</h3>
        <p className="h-[50px] overflow-hidden">{description}</p>

        <div className="date">
          <h6> {moment(launchAt).format("MMM Do YYYY")}</h6>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 flex">
            {category.map((tag: any, i: any) => {
              return (
                <div className="ml-1" key={i}>
                  #{tag.Category}
                </div>
              );
            })}
          </h2>
        </div>

        {/* 01718251064 jannat com */}
        <button className="custom-btn btn-15">
          <Link className="items-center flex text-sm" href={`/${dataset}/${id}`}>
            Learn More <BsArrowRight className="arrowIcon ml-1" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cards;
