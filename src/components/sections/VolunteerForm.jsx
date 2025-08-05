import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
export default function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sendmail called");
    emailjs
      .sendForm("service_t1ezvai", "template_2l9ycdp", formRef.current, {
        publicKey: "qj-TC6HGJtnZCWqjN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success(
            "Thank you for volunteering! We will contact you soon."
          );
          setForm({
            name: "",
            email: "",
            phone: "",
            dob: "",
            city: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="volunteerform" className="py-10 md:py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Volunteer With Us</h2>
        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto"
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded p-2 focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded p-2 focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded p-2 focus:outline-none"
              placeholder="Your Phone"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded p-2 focus:outline-none"
              placeholder="Your Date of Birth"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded p-2 focus:outline-none"
              placeholder="Your City"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-500 rounded p-2 focus:outline-none resize-none"
              placeholder="Write your message here..."
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
