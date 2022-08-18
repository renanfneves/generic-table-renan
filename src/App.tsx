import React, { useEffect } from "react";

import Table from "./components/table/Table";

import useRandomUser from "./hooks/useRandomUser";

import "./styles.css";

export default function App() {
  const { data, headers, fetchData, loading } = useRandomUser();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if(loading) {
    return <div>loading...</div>
  };

  return (
    <div className="App">
      <h1 className="Title">Our table</h1>
      <Table headers={headers} data={data} /> 
    </div>
  );
}
