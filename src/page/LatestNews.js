import React, { useEffect, useState } from "react";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function LatestNews() {
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
        <div className="container-fluid latest-news py-5">
            <div className="container py-5">
                <h2 className="mb-4">Latest News</h2>
                <OwlCarousel  className="latest-news-carousel owl-carousel">
                {pages.map((page, index) => (
                    <div key={index} class="latest-news-item">
                        <div className="bg-light rounded">
                            <div className="rounded-top overflow-hidden">
                                <img src={`http://localhost${page.field_images}`} className="img-zoomin img-fluid rounded-top w-100" alt=""/>
                            </div>
                            <div className="d-flex flex-column p-4">
                                <a href="#" className="h4">{page.title}</a>
                                <div className="d-flex justify-content-between">
                                    <a href="#" className="small text-body link-hover">{page.uid}</a>
                                    <small className="text-body d-block"><i className="fas fa-calendar-alt me-1"></i> {page.field_date}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </OwlCarousel>
            </div>
        </div>
    </>
  )
}
