import { invokeExternalAPI } from "@/utilities/http";
import Link from "next/link";
import React from "react";

const Home = ({ cocktails }) => {
  return (
    <div>
      <h2>List of News</h2>
      <div>
        <ul>
          {cocktails.drinks.map((item, index) => (
            <li style={{ padding: "5px" }} key={item.idDrink}>
              <span>
                {item.idDrink} -{item.strDrink} -{" "}
                <Link href={`/${item.idDrink}`}>{item.strDrink}</Link>
              </span>

              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(ctx) {
  const { data, error } = await invokeExternalAPI(
    "search.php",
    "get",
    {},
    {},
    { s: "s" }
  );

  return {
    props: {
      cocktails: data,
      error: error,
    },
  };
}
