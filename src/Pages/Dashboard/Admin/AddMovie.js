import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { Input, Message, Select } from "../../../Components/UsedInputs";
import Uploader from "../../../Components/Uploader";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UsersData } from "../../../Data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import CastsModal from "../../../Modals/CastsModal";

function AddMovie() {
  const [year, setYear] = useState("");

  const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setYear(value);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);

  return (
    <SideBar>
      <CastsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Add Movies</h2>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              label="Movie Title"
              placeholder="Enter A Movie Title"
              type="text"
              bg={true}
              name="text"
            />
          </div>
          <div className="w-full">
            <Input
              label="Hours"
              placeholder="3hrs"
              type="text"
              bg={true}
              name="text"
            />
          </div>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              label="Language"
              placeholder="English"
              type="text"
              bg={true}
              name="text"
            />
          </div>
          <div className="w-full">
            <Input
              label="Year of Release"
              placeholder="2024"
              type="text"
              bg={true}
              name="year"
              value={year}
              onChange={handleYearChange}
            />
          </div>
        </div>
        {/* IMAGES */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/* img without title */}

          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image without Title
            </p>
            <Uploader />
          </div>
          {/* img with title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image with Title
            </p>
            <Uploader />
          </div>
        </div>

        {/* Movie Category */}
        <div className="text-sm w-full">
          <Select
            label="Movie Category"
            options={CategoriesData?.length > 0 ? CategoriesData : []}
            name="category"
          />
        </div>

        {/* Movie Description */}
        <div className="w-full">
          <Message
            label="Movie Description"
            placeholder="Make short, giving hints about the movie"
            name="desc"
          />
        </div>

        {/* Movie Video */}

        <div className="flex flex-col gap-2 w-full ">
          <label className="text-border font-semibold text-sm">
            Movie Video
          </label>
          <Uploader />
        </div>

        {/* AddMovie Cast */}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start ">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
          >
            Add Cast
          </button>
        </div>
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
          {UsersData.map((user, i) => (
            <div
              key={i}
              className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
            >
              <img
                src={`/images/${user?.image}`}
                alt={user.name}
                className="w-full h-52 object-cover rounded mb-2"
              />

              <p>{user.fullName}</p>
              <div className="flex-rows mt-2 w-full gap-2">
                <button
                  type="button"
                  className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded"
                >
                  <MdDelete />
                </button>

                <button
                  onClick={() => {
                    setCast(user);
                    setModalOpen(true);
                  }}
                  className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded"
                >
                  <FaEdit />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/*Add Movies*/}
        <button className="bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded">
          {" "}
          Add Movie
        </button>
      </div>
    </SideBar>
  );
}

export default AddMovie;
