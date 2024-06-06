import React, { useEffect, useState } from "react";
import axios from "axios";
import TopStory from "./TopStory";

export default function Contect() {
  const [pages, setPages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/DrupalReact/v1/news-blog')
      .then(response => {
        setPages(response.data);
      })
      .catch(error => {
        setError('There was an error fetching the data!');
        console.error('There was an error fetching the data!', error);
      });
  }, []);
   const page = pages[0];
   const page2 = pages;
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-4">
            {page && (
              <div className="col-lg-7 col-xl-8 mt-0">
                <div className="position-relative overflow-hidden rounded">
                  <img
                    src={`http://localhost${page.field_images}`}
                    className="img-fluid rounded img-zoomin w-100"
                    alt="Main article"
                  />
                  <div
                    className="d-flex justify-content-center px-4 position-absolute flex-wrap"
                    style={{ bottom: "10px", left: "0" }}
                  >
                    <a href="#" className="text-white me-3 link-hover">
                      <i className="fa fa-clock"></i> 06 minute read
                    </a>
                    <a href="#" className="text-white me-3 link-hover">
                      <i className="fa fa-eye"></i> 3.5k Views
                    </a>
                    <a href="#" className="text-white me-3 link-hover">
                      <i className="fa fa-comment-dots"></i> 05 Comment
                    </a>
                    <a href="#" className="text-white link-hover">
                      <i className="fa fa-arrow-up"></i> 1.5k Share
                    </a>
                  </div>
                </div>

                <div className="border-bottom py-3">
                  <a href="#" className="display-4 text-dark mb-0 link-hover">
                    {page.title}
                  </a>
                </div>
                <div
                  className="mt-3 mb-4"
                  dangerouslySetInnerHTML={{ __html: page.body }}
                />
                <TopStory/>
              </div>
            )}
            <div className="col-lg-5 col-xl-4">
              <div className="bg-light rounded p-4 pt-0">
                <div className="row g-4">
                  {page && (
                    <div  className="col-12">
                      <div className="rounded overflow-hidden mb-4">
                        <img
                          src={`http://localhost${page.field_images}`}
                          className="img-fluid rounded img-zoomin w-100"
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column mb-4">
                        <a href="#" className="h4 mb-2">
                          {page.title}
                        </a>
                        <p className="fs-5 mb-0">
                          <i className="fa fa-clock"> 06 minute read</i>{" "}
                        </p>
                        <p className="fs-5 mb-0">
                          <i className="fa fa-eye"> 3.5k Views</i>
                        </p>
                      </div>
                    </div>
                  )}
				  {page2.map((page, index) => (
                  <div key={index} className="col-12">
                    <div className="row g-4 align-items-center">
                      <div className="col-5">
                        <div className="overflow-hidden rounded">
                          <img
                            src={`http://localhost${page.field_images}`}
                            className="img-zoomin img-fluid rounded w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-7">
                        <div className="features-content d-flex flex-column">
                          <a href="#" className="h6">
                            {page.title}
                          </a>
                          <small>
                            <i className="fa fa-clock"> 06 minute read</i>{" "}
                          </small>
                          <small>
                            <i className="fa fa-eye"> 3.5k Views</i>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
				  ))}
                  {/* Add more static articles here if necessary */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
