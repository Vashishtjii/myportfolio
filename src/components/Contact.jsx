import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const mailtoLink = `mailto:shubhamvashishjii@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const rows = [
    {
      icon: <MdOutlineEmail />,
      label: "Email",
      value: "shubhamvashishjii@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shubhamvashishjii@gmail.com",
      external: true,
    },
    {
      icon: <MdOutlineLocationOn />,
      label: "Location",
      value: "Delhi, India",
      href: "#",
      external: false,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Vashishtjii",
      href: "https://github.com/Vashishtjii",
      external: true,
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      value: "linkedin.com/in/shubham-vashisht",
      href: "https://www.linkedin.com/in/shubham-vashisht-317775292/",
      external: true,
    },
  ];

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      style={{ pointerEvents: "auto" }}
    >
      <h2 className="section-title">
        Contact <span className="heading-gradient">Me</span>
      </h2>

      <h3 className="contact-headline">Let's build something together</h3>

      <div className="contact-container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-stretch">
        <motion.div
          className="contact-card w-full h-full p-6 md:p-8 pb-8 md:pb-12 flex flex-col overflow-visible"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {rows.map((row) => (
            <motion.div
              key={row.label}
              className="contact-row"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
            >
              <span className="contact-row-icon">{row.icon}</span>
              <div className="contact-row-content min-w-0">
                <p className="contact-row-label">{row.label}</p>
                {row.external ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="break-all md:break-normal"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="contact-row-value break-all md:break-normal">{row.value}</p>
                )}
              </div>

              <span className="contact-row-arrow" aria-hidden="true">
                <HiOutlineArrowUpRight />
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.form
          className="contact-form w-full h-full mt-8 md:mt-0 p-6 md:p-8 flex flex-col justify-between overflow-visible"
          onSubmit={handleFormSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows="5"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              required
            />
          </div>

          <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white w-full py-3 px-4 rounded-md transition-colors">Send Message</button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
