import { useState } from "react";

const ConsultationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name) => {
    const re = /^[a-zA-Z\s'-]+$/;
    const isValidFormat = re.test(name);
    const isValidLength = name.trim().length >= 2;
    const hasTwoWords = name.trim().split(" ").length >= 2;
    return isValidFormat && isValidLength && hasTwoWords;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    setMessage({ type: "", text: "" });

    if (!name) {
      newErrors.name = "Full name is required";
    } else if (!validateName(name)) {
      newErrors.name = "Please enter your full name (first and last name)";
    }

    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!specialist) {
      newErrors.specialist = "Please select a specialist";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/forms/contact",
          {
            method: "POST",
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName: name,
              email: email,
              specialist: specialist,
            }),
          },
        );

        if (response.ok) {
          setMessage({
            type: "success",
            text: "Your appointment request has been submitted!",
          });
          setName("");
          setEmail("");
          setSpecialist("");
          setErrors({});
          setTimeout(() => {
            setMessage({ type: "", text: "" });
          }, 2500);
        } else {
          const errorData = await response.json();
          setMessage({
            type: "error",
            text: errorData.message || "Submission failed",
          });
        }
      } catch {
        setMessage({
          type: "error",
          text: "An error occurred. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="consultation-form-container">
      <form className="consultation-form" onSubmit={handleSubmit} noValidate>
        <div>
          <h2>Get Online Consultation</h2>
        </div>

        <label htmlFor="name">Full name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) {
              setErrors({ ...errors, name: "" });
            }
          }}
          placeholder="Jack Smith"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              setErrors({ ...errors, email: "" });
            }
          }}
          placeholder="example@email.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="specialist">Specialist</label>
        <div className="select-wrapper">
          <select
            id="specialist"
            className="custom-select"
            value={specialist}
            onChange={(e) => {
              setSpecialist(e.target.value);
              if (errors.specialist) {
                setErrors({ ...errors, specialist: "" });
              }
            }}
          >
            <option value="">Select a specialist</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="therapist">Therapist</option>
          </select>
        </div>
        {errors.specialist && <p className="error">{errors.specialist}</p>}

        {message.text && (
          <p className={message.type === "error" ? "error" : "success"}>
            {message.text}
          </p>
        )}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Make an appointment"}
        </button>
      </form>
    </section>
  );
};

export default ConsultationForm;
