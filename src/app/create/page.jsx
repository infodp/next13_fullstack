"use client";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
const uri = "http://localhost:3000/api/student";

const Create = () => {
  const router = useRouter();

  const onSubmitCreate = async (formData) => {
    console.log("Datos capturados del Form: ", formData);
    const { name, age } = formData;

    if (!formData) {
      alert("Complete the fields.");
      return;
    }
    //console.log(`Name: ${name} Age: ${age}`);
    try {
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: name, age: age }),
      });
      if (response.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmitForm={onSubmitCreate} />
    </div>
  );
};

export default Create;
