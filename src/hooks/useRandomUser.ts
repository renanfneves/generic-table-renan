import { useCallback, useState } from "react";

type DataFormat = {
  name: string;
};

type Hook = () => {
  headers: string[];
  data: DataFormat[];
  fetchData: () => void;
  loading: boolean;
};

const useRandomUser: Hook = () => {
  const [data, setData] = useState<DataFormat[]>([]);
  const [headers, setHeaders] = useState<string[]>([""]);
  const [loading, setLoading] = useState<boolean>(false);

  const mapData = (data: any): DataFormat[] => {
    const mapped = data.map((dt: any) => {
      return {
      id: new Date().getTime(), // it would be normally a real id
      name: `${dt.name?.first} ${dt.name?.last}`
    }});
    
    return mapped;
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://randomuser.me/api/?results=10").then(
      (apiResponse) => {
        setLoading(false);
        return apiResponse.json();
      }
    );

    const mappedData = mapData(response.results);

    setData(mappedData);
    setHeaders(["name"]);
  }, []);

  return {
    data,
    headers,
    fetchData,
    loading
  };
};

export default useRandomUser;
