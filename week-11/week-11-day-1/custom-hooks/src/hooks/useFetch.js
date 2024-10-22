import { useEffect } from "react";
import { useState } from "react";

//custom hook
export function usePostTitle() {
  const [title, setTitle] = useState("");

  async function fetchTitle() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5"
    );
    const data = await response.json();
    setTitle(data.title);
  }
  useEffect(() => {
    fetchTitle();
  }, []);
  return title;
}

//useFetch custom hook
export function useFetch(url) {
  const [response, setResponse] = useState({});
  const [loading,setLoading] = useState(true)

  async function fetchData() {
    setLoading(true)
    const res = await fetch(url);
    const data = await res.json();
    setResponse(data);
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(()=>{
    let clockId = setInterval(fetchData,10*1000)
    return ()=>{
      clearInterval(clockId)
    }
  })

  return { data: response };
}
