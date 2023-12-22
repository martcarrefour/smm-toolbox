import React, { useState } from "react";
import { Button } from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { Form } from "./From.types";

const Form: React.FC<Form> = ({
  fields,
  onSubmit,
  submitButtonText,
  className,
  error,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((field) => [field.name, ""]))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([name, value]) =>
      form.append(name, value)
    );
    onSubmit(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={className}>
        {fields.map((field) => (
          <div key={field.name} className="flex-grow">
            <Input
              label_title={field.label}
              name={field.name}
              type={field.type || "text"}
              placeholder={field.placeholder || ""}
              value={formData[field.name]}
              onChange={handleChange}
              className="flex-grow"
            />
          </div>
        ))}
        <div className="mt-auto ml-16">
          <Button appearance="accent" type="submit">
            {submitButtonText}
          </Button>
        </div>
      </form>
      {error && <p className="text-red-400 mt-4">{error}</p>}
    </>
  );
};

export default Form;
