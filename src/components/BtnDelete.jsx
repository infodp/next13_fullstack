"use client";
//Sweet Alert 2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/navigation";

const uri = "http://localhost:3000/api/student";

const BtnDelete = ({ id }) => {
  const router = useRouter();

  const MySwal = withReactContent(Swal);

  const deleteDocument = () => {
    MySwal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(`${uri}/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.refresh();
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <button
      onClick={deleteDocument}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none"
    >
      Delete
    </button>
  );
};

export default BtnDelete;
