"use client";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
const uri = "http://localhost:3000/api/student";

const getDataById = async (id) => {
  try {
    const response = await fetch(`${uri}/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to update.");
    }
    return response.json();
  } catch (error) {
    console.log("Error : ", error);
  }
};

const Edit = async ({ params }) => {
  const router = useRouter();

  const id = params.id;
  const { data } = await getDataById(id);
  //console.log("documento completo :"+JSON.stringify(data)); //recibo el documento
  //const {name, age} = data

  const onSubmitEdit = async (formData) => {
    console.log("formData:", formData);
    const { name, age } = formData;
    try {
      const response = await fetch(`${uri}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: name, age: age }),
      });

      if (!response.ok) {
        throw new Error("Failed to update.");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmitForm={onSubmitEdit} formValues={data} />
    </div>
  );
};

export default Edit;
