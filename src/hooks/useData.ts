import { useState, useEffect } from 'react';

export interface Data {
  title: string;
  desctiption: string;
  url: string;
}

export interface Response {
  status: string;
  code: number;
  total: number;
  data: Data[];
}

const delay = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), ms);
  });
};
const fetchThing = async (): Promise<Response> => {
  const data = await fetch(
    'https://fakerapi.it/api/v1/images?_type=kittens&_height=300&_quantity=100'
  );
  const res: Response = await data.json();
  await delay(3000);
  return res;
};

export const useData = () => {
  const [data, setData] = useState<Response>();

  useEffect(() => {
    fetchThing().then(setData);
  }, []);
  return data;
};
