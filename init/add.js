"use server";
import Listing from "../models/Listing.js";
import connetDb from "@/DataBase/connetDb.js";
import tours from "./packages.js";
import cities from "./city.js";
import City from "@/models/City.js";

async function insertOnedoc(){
   await connetDb();
   const listing = await Listing.create({
     image : "https://img.veenaworld.com/group-tours/india/jammu-and-kashmir/jkhlp/jkhlp-bnn-JKHLP-2952023.jpg",
     title : "Highlights of Kashmir - Pune",
     location : "Pune",
     totalDay : 6,
     cities : ["Srinagar(Houseboat)(1N)","Pahalgam(1N)","Srinagar(3N)","Gulmarg"], 
     cost : 90000,
     highlight : ["Srinagar Houseboat Stay","Avantipur ruins","Walk & Click tour of Betaab valley","Kashmiri Cricket Bat Factory","Gondola ride at Gulmarg","Shikara and Speed boat ride at Dal Lake","Kashmiri gardens - Shalimar & Nishat Bagh"]
   })   ;
}

async function insertManydoc(){
  await connetDb();
  //const res=await Listing.insertMany(tours);
  const res=await City.insertMany(cities);
  console.log(res);
}

export default insertManydoc;