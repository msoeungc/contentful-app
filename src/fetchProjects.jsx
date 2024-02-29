import { useState, useEffect } from "react";
// named import for contentful client API
import { createClient } from "contentful";

// setup for using contenful
const client = createClient({
  space: "zj59zb2m3yxu",
  environment: "master",
  // importing token from .env file
  accessToken: import.meta.env.VITE_API_KEY,
});

// custom hook
export const useFetchProjects = () => {
  // Managing loading state and projects array state
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  //   Async function to fetch data
  //   await response from getEntries method
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      //  Parsing and interating over the data
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url
        return {title, url, id, img}

      })
    //   setting empty project array to our array project objects
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // useEffect hook to call getData function on render
  useEffect(() => {
    getData();
  }, []);

//   custom hook returns loading state and projects state
  return {loading, projects}
};
