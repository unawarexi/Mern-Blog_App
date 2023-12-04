import React from "react";
import {
  FaFacebookSquare,
  FaRedditSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

{
  /**===========
     1. the ${url} is used in articledetail.jsx file same with the ${title} 
     2. the target=_blank ensures the link page displays in a new window
     3.  "app_id=776061603874020"  yours can be gotten from meta app id
     4. rel="noreferrer", it instructs the browser not to include 
        the referring page's address when making a request to the linked resource.
    ======================*/
}

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/dialog/share?app_id=776061603874020&display=popup&href=${url}`}
      >
        {" "}
        <FaFacebookSquare className="text-[#3B5998] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?url=${url}`}
      >
        {" "}
        <FaTwitterSquare className="text-[#00acee] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
      >
        {" "}
        <FaRedditSquare className="text-[#ff4500] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send/?text=${url}`}
      >
        {" "}
        <FaWhatsappSquare className="text-[#25d366] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
