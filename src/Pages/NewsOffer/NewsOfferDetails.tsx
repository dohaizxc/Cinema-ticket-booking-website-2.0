import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { useGet } from "../../api/get";
import { NewsOffer } from "../../interface/Interface";
import { useParams } from "react-router-dom";

export const NewsOfferDetails = () => {
  const { fetchGet, result: newsOffer } = useGet<NewsOffer>();
  const param = useParams();
  const id = param.id;

  useEffect(() => {
    fetchGet("newsoffer/detail/" + id);
  }, []);

  console.log(newsOffer);

  return (
    <Layout>
      <div className="md:mx-32 sm:mx-16 mx-5 mb-10">
        {newsOffer && (
          <div>
            <div className="py-6">
              <h2 className="sm:text-2xl text-base font-medium">
                {newsOffer.name}
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col">
              <img
                className="sm:w-72 w-60 h-fit rounded mx-auto"
                src={newsOffer.img}
                alt="Ảnh minh họa"
              />
              <div className="sm:w-3/5 sm:mt-0 mt-5 w-full space-y-2 sm:text-base text-xs">
                <p>
                  <b>1. Thời gian áp dụng: </b>
                  {newsOffer.date}
                </p>
                <div>
                  <b>
                    2. Nội dung chương trình: <br />
                  </b>
                  <ul>
                    {newsOffer.contents?.map((content) => (
                      <li>{content}</li>
                    ))}
                  </ul>
                </div>
                <p className=" ">
                  <b>3. Địa điểm áp dụng: </b>
                  {newsOffer.address}
                </p>
                <p className=" ">
                  <b>
                    4. Đối tượng khuyến mại: <br />
                  </b>
                  <ul>
                    {newsOffer.objects?.map((obj) => (
                      <li>{obj}</li>
                    ))}
                  </ul>
                </p>
                <div className=" ">
                  <b>
                    5. Điều kiện và điều khoản: <br />
                  </b>
                  <ul>
                    {newsOffer.others?.map((other) => (
                      <li>{other}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
