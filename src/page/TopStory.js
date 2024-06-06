import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TopStory() {
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
     const page = pages[3];
  return (
    <>
    {page && (
        <div className="bg-light p-4 rounded">
                  <div className="news-2">
                    <h3 className="mb-4">Top Story</h3>
                  </div>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                      <div className="rounded overflow-hidden">
                        <img
                          src={`http://localhost${page.field_images}`}
                          className="img-fluid rounded img-zoomin w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column">
                        <a href="#" className="h3">
                        {page.title}
                        </a>
                        <p className="mb-0 fs-5">
                          <i className="fa fa-clock"> 06 minute read</i>{" "}
                        </p>
                        <p className="mb-0 fs-5">
                          <i className="fa fa-eye"> 3.5k Views</i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
    )}
    </>
  )
}
