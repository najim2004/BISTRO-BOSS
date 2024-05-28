import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { GrUserAdmin } from "react-icons/gr";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleRole = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user an admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`/users/admin/${id}`, { role: "admin" })
            .then((res) => {
              if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "User has been successfully made an admin.",
                  icon: "success",
                });
              }
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-[990px] mx-auto">
      <SectionTitle title={"MANAGE ALL USERS"} subtitle={"---How many??---"} />
      <div className="mt-10 bg-white w-full p-6">
        <div className="uppercase">
          <h2 className="text-4xl uppercase font-bold">
            Total Users: {users.length}
          </h2>
        </div>
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="h-16 bg-cmnBg text-white rounded-t-[15px]">
                  <th></th>
                  <th>USER NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((item) => (
                  <tr key={item._id} className="font-medium text-[#737373]">
                    <td className="text-black">1</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        onClick={() => handleRole(item._id)}
                        className="btn btn-ghost bg-cmnBg text-white size-12 p-0 text-2xl btn-xs"
                      >
                        {item.role === "admin" ? <GrUserAdmin /> : <FaUsers />}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost bg-[#B91C1C] text-white size-12 p-0 text-2xl btn-xs"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
