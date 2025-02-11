import React from "react";
import SideBar from "./SideBar";
import Table from "../../Components/Table";
import { Movies } from "../../Data/MovieData";

function FavouriteMovie() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Favourite Movies</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>
        <Table data={Movies} admin={false} />
      </div>
    </SideBar>
  );
}

export default FavouriteMovie;
