import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const code = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      inputs: [
        {
          name: "Name",
          type: "text",
          value: "",
        },
        {
          name: "Email",
          type: "email",
          value: "",
        },
        {
          name: "Password",
          type: "password",
          value: "",
        },
      ],
    },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "inputs",
  });

  const onFormSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="mx-auto pt-4 px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold">Card Title</h2>
        <p className="text-gray-700 mt-2 mb-20">Card content goes here...</p>

        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="max-w-md mx-auto"
        >
          <button
            onClick={() =>
              append({
                name: "Other Info",
                type: "text",
                value: "",
              })
            }
            className="my-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Append New Input
          </button>

          {fields.map((field, index) => {
            return (
              <div key={field.id} className="mb-4  my-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  {field.name}
                </label>

                <input
                  type={true ? field.type : "text"}
                  id={field.name}
                  {...register(`inputs.${index}.value`)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  placeholder="Enter your name"
                />
                {field.name == "Other Info" && (
                  <span
                    onClick={() => {
                      remove(index);
                    }}
                    className="block w-1/2 text-center border p-2 bg-red-500 cursor-pointer mr-auto text-white text-base font-bold rounded-xl my-2"
                  >
                    Remove {field.name} 💢❌
                  </span>
                )}
              </div>
            );
          })}

          <button className="my-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default code;
