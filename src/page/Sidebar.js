import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar() {
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
  return (
    <>
        {pages.map((page, index) => (
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
    </>
  )
}
