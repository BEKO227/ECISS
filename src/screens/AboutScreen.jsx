import React from 'react';
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

const customers = [
  {
    name: 'Pepsico',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/PepsiCo%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9QZXBzaUNvIGxvZ28ucG5nIiwiaWF0IjoxNzQ4MzY2MjYzLCJleHAiOjMzMjg0MzY2MjYzfQ.ykqzV1fTIg4ogM5R7kNJ7LR8KHRab1aYMMmI4dC2cj8',
  },
  {
    name: 'Egypt Foods',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/egypt-foods-group.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9lZ3lwdC1mb29kcy1ncm91cC5qcGciLCJpYXQiOjE3NDgzNjYzMDAsImV4cCI6MzMyODQzNjYzMDB9.8-eiXcBzPNuVeRyRE2yoKKDc831GO7r-aOXt3GaLDfk',
  },
  {
    name: 'Coca Cola',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/CoCaCola.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9Db0NhQ29sYS5qcGciLCJpYXQiOjE3NDgzNjYzNDQsImV4cCI6MzMyODQzNjYzNDR9.pG_t522SabToxUNC__4dLhiMMHrR39iZI6BBYhDtdt0',
  },
  {
    name: 'Unilever mashreq',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Unilever.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9VbmlsZXZlci5wbmciLCJpYXQiOjE3NDgzNjYzNzQsImV4cCI6MzMyODQzNjYzNzR9.QKkpyaSTBTmuR8-RiNHIBWUYhryxasP_7WHBwOut_MM',
  },
  {
    name: 'Savola group',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Savola%20group.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9TYXZvbGEgZ3JvdXAucG5nIiwiaWF0IjoxNzQ4MzY2Mzk4LCJleHAiOjMzMjg0MzY2Mzk4fQ.pQkF7aRXWUkVluF0MMYLszsDOlX5atX5ay0iZuEgUvA',
  },
  {
    name: 'Cadbury',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Cadbury.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9DYWRidXJ5LnN2ZyIsImlhdCI6MTc0ODM2NjQyNywiZXhwIjozMzI4NDM2NjQyN30.e4c3mAilkvAeT0da4p_pVDYElCr3PHbiLwkIU-BeUag',
  },
  {
    name:'Milano For Food industries',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Milano%20food.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9NaWxhbm8gZm9vZC5wbmciLCJpYXQiOjE3NDgzNjY0NzUsImV4cCI6MzMyODQzNjY0NzV9.S1O5zFLNQ62cy5A_rW_DKwZaMJJtA_ewkfufu2B_qLs',
  },
  {
    name:'الملكة للصناعات الغذائية',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/El%20Maleka.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9FbCBNYWxla2EuanBnIiwiaWF0IjoxNzQ4MzY2NDUxLCJleHAiOjMzMjg0MzY2NDUxfQ.NahL9LW6OEm-MDnNaKOL3fiyco13Bt219lvCWym2IsU',
  },
  {
    name:'Nestle',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/nestle.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9uZXN0bGUuc3ZnIiwiaWF0IjoxNzQ4MzY2NDkzLCJleHAiOjMzMjg0MzY2NDkzfQ.hJgT1NaridVsI8k_gZhScSZYtxMwPOQaJR7POthy-Qs',
  },
  {
    name:'Leoni',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Leoni.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9MZW9uaS5wbmciLCJpYXQiOjE3NDgzODMzMjEsImV4cCI6MzMyODQzODMzMjF9.rd3wcYD2EiL3XPNmtwcReGz4ABHbYRDyYoJMGhGTWE0',
  },
  {
    name:'Swes-Eg',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Swes.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9Td2VzLmpwZyIsImlhdCI6MTc0ODM4MzM1OSwiZXhwIjozMzI4NDM4MzM1OX0.y2XZCfSfiB_Zrb9vLQWmon6EzgLJs5XvTW0FNgprl9g',
  },
  {
    name:'Pachin',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Pachin.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9QYWNoaW4ud2VicCIsImlhdCI6MTc0ODM4MzM4MCwiZXhwIjozMzI4NDM4MzM4MH0.c-Y6N220PVkPUXsM8NIwF4DJEwTiQoa0hQvjqFrIkPY',
  },
  {
    name:'Protall',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Protall.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9Qcm90YWxsLmpwZyIsImlhdCI6MTc0ODM4MzQxNSwiZXhwIjozMzI4NDM4MzQxNX0.MRWUXmoDciV2-OaPbAVdn_SmnwGO-DK4tN9woNfvDCc',
  },
  {
    name:'شركة العالمية للطباعة',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Ipp.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9JcHAud2VicCIsImlhdCI6MTc0ODM4MzQ1OSwiZXhwIjozMzI4NDM4MzQ1OX0.VpkYfMvgtd7XSBrD1AJu2WQ6CYSwc3-_-QsBnxDgHVo',
  },
  {
    name:'Electrolux',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Electrolux.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9FbGVjdHJvbHV4LmpwZWciLCJpYXQiOjE3NDgzODk4NjQsImV4cCI6MzMyODQzODk4NjR9.wJUHD53CCZxwvpUEfY1tHrzi_KhpBiF370cwQdGaqNk',
  },
  {
    name:'MascoMid',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Mascomid.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9NYXNjb21pZC5zdmciLCJpYXQiOjE3NDgzODk4OTEsImV4cCI6MzMyODQzODk4OTF9.ImDrPHH2bYe9vOpDZfV_fICFwbL_zj8_0KqxN-t24u4',
  },
  {
    name:'Q Medical Industries',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Qmed.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9RbWVkLndlYnAiLCJpYXQiOjE3NDgzODk5MzMsImV4cCI6MzMyODQzODk5MzN9.ffFP5ABYd6_6SJZjJjp5e5kPgDLjFgbjtz5QKBl1Sfs',
  },
  {
    name:'Kapci coatings',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Kapic.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9LYXBpYy5wbmciLCJpYXQiOjE3NDgzODk5NzUsImV4cCI6MzMyODQzODk5NzV9.DpGL-cNL_qjUbZmqT9mLeev7MmNl0UzbVCXJOJ8aWt4',
  },
  {
    name:'Flexiback',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Flexipack.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9GbGV4aXBhY2sud2VicCIsImlhdCI6MTc0ODM4OTk5OSwiZXhwIjozMzI4NDM4OTk5OX0.iQa-pcDohUFTQn5njoZjNSYvJEy8gV1ujDjst9e39_E',
  },
  {
    name:'Marbella',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Marbella.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9NYXJiZWxsYS5qcGciLCJpYXQiOjE3NDgzOTAwMjcsImV4cCI6MzMyODQzOTAwMjd9.QL2W9fl0-Fb42pphk7MNCQJW-_gtsM8W-mpPx5yJdbg',
  },
  {
    name:'Big Cola',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Bigcola.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9CaWdjb2xhLndlYnAiLCJpYXQiOjE3NDgzOTAwNjMsImV4cCI6MzMyODQzOTAwNjN9.zoqwLLQsSSoTkwxeVCOYVp3cbUEolTptyvNNiXz46hE',
  },
  {
    name:'Aqua Delta',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Aquadelta.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9BcXVhZGVsdGEuanBnIiwiaWF0IjoxNzQ4MzkwMDkzLCJleHAiOjMzMjg0MzkwMDkzfQ.w1dAfNtw6MN9LBUWz4hQA7vxw1DVGbwbXr76z99DQus',
  },
  {
    name:'Elano',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Elano.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9FbGFuby5wbmciLCJpYXQiOjE3NDgzOTAxMjYsImV4cCI6MzMyODQzOTAxMjZ9.8E9tmdo6h26CHwOC3cQ_N2Xy2z8BSWR-UcjLFStofUg',
  },
  {
    name:'Medco Plast',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Medcoplast.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9NZWRjb3BsYXN0LmpwZyIsImlhdCI6MTc0ODM5MDE0OSwiZXhwIjozMzI4NDM5MDE0OX0.BydQUedAkB3uzcub36_QRFoRLEzYWQFRoh8QKvrxn1U',
  },
  {
    name:'MisrCafe',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/misrcafe.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9taXNyY2FmZS5qcGciLCJpYXQiOjE3NDgzOTAxNjUsImV4cCI6MzMyODQzOTAxNjV9.9de1rJ8OnhuwHNih_Ab4GN9axFzzECjzdh-FuQIDToM',
  },
  {
    name:'Mepco Egypt',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/MepcoEgypt.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9NZXBjb0VneXB0LmpwZyIsImlhdCI6MTc0ODM5MDE4MiwiZXhwIjozMzI4NDM5MDE4Mn0.hPb687waUczUuL_wYw9zDDjyjkdVxHRhyG3nqqIquuQ',
  },
  {
    name:'Procter & Gamble',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/P&G.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9QJkcucG5nIiwiaWF0IjoxNzQ4MzkwMjAyLCJleHAiOjMzMjg0MzkwMjAyfQ.ctRIZHfEg3aBnC0xexgFfNdlTdJf4VBFHiqZ90OMOkU',
  },
  {
    name:'SGS',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/SGS.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9TR1MuanBnIiwiaWF0IjoxNzQ4MzkwMjE3LCJleHAiOjMxNzEwODM5MDIxN30.P9pv1qXv_klRzywH1R_ibgqP74d0dknWrQ0uCjZYYfM',
  },
];


export default function AboutScreen() {
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutContent = async () => {
      const { data, error } = await supabase
        .from("About")
        .select("Mission, Vision")
        .single(); // get only the first (and only) row

      if (error) {
        console.error("Error fetching About data:", error.message);
        return;
      }

      setMission(data.Mission || "Mission not found.");
      setVision(data.Vision || "Vision not found.");
      setIsLoading(false);
    };

    fetchAboutContent();
  }, []);

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={{ marginTop: 10 }}>Loading info...</p>
      </div>
    );
  }

  return (
    <div style={styles.background}>
      <div style={styles.scrollViewContent}>
        <div style={styles.rowLayout}>
          {/* Mission */}
          <div style={{ ...styles.sectionBox, ...styles.missionBox }}>
            <h2 style={styles.heading}>Mission</h2>
            <p style={styles.text}>{mission}</p>
          </div>

          {/* Vision */}
          <div style={{ ...styles.sectionBox, ...styles.missionBox }}>
            <h2 style={styles.heading}>Vision</h2>
            <p style={styles.text}>{vision}</p>
          </div>

          {/* Customers */}
          <div style={{ ...styles.sectionBox, ...styles.partnerBox }}>
            <h2 style={styles.heading}>Our Customers</h2>
            <div style={styles.partnerList}>
              {customers.map((customer, index) => (
                <div key={index} style={styles.partnerItem}>
                  {customer.logo ? (
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      style={styles.partnerLogo}
                    />
                  ) : (
                    <div style={styles.partnerLogo} />
                  )}
                  <p style={styles.partnerName}>{customer.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url("https://www.mecmesin.com/sites/default/files/styles/hero_sq_1920w/public/2023-06/hero-immerse_header_force_torque.png.webp?itok=-E2EZWEK")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  scrollViewContent: {
    padding: 20,
    maxWidth: 1000,
    margin: '0 auto',
  },
  rowLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
  },
  sectionBox: {
    backgroundColor: 'rgba(216, 218, 220, 0.7)',
    padding: 20,
    borderRadius: 12,
    boxShadow: '0 4px 6px rgba(0,0,0,0.25)',
    border: '4px solid #000066',
    flex: 1,
    minWidth: 300,
  },
  missionBox: {
    marginRight: 10,
  },
  partnerBox: {
    marginLeft: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000066',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  partnerList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  partnerItem: {
    width: '45%',
    textAlign: 'center',
    margin: '10px 0',
  },
  partnerLogo: {
    width: '100%',
    height: 50,
    objectFit: 'contain',
    marginBottom: 5,
  },
  partnerName: {
    fontSize: 13,
    color: '#222',
  },
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  spinner: {
    width: 40,
    height: 40,
    border: '5px solid #ccc',
    borderTop: '5px solid #000066',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};
