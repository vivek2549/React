import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Photo() {
    const [pages, setPages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/DrupalReact/v1/photo')
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
    {pages.map((page) => (
      <div class="col-4">
        <div class="rounded overflow-hidden">
        <img src={`http://localhost${page.field_image}`} className="img-zoomin img-fluid rounded w-100" alt=""/>
        </div>
      </div>
    ))}
    </>
  );
}
