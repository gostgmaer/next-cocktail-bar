import { invokeExternalAPI } from "@/utilities/http";
import React from "react"

const cockTailsDetails = ({cocktail}) => {
  return (
    <div>index</div>
  )
}

export default cockTailsDetails






export async function getServerSideProps(ctx) {
  
  const  {params} =ctx
 
    const { data, error } = await invokeExternalAPI(
      "lookup.php",
      "get",
      {},
      {},
      { i: params.cocktailId }
    );
  
    return {
      props: {
        cocktail: data,
        error: error
       
      },
    };
  }
  