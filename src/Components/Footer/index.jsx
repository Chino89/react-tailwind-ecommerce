import { NavLink } from "react-router-dom";

function Footer() {
  const footerLinks = [
    "Quienes somos",
    "Empleo",
    "Información legal",
    "Contactanos",
  ];
  const activeStyle = "underline underline-offset-4 decoration-lime-600";

  return (
    <div className="w-full bg-white py-5 px-8 flex justify-between fixed bottom-0 z-10 shadow-[0px_8px_15px_rgba(0,0,0,0.7)]">
      <h1 className="font-semibold text-lg text-lime-600">
        <NavLink to="/">Shopi</NavLink>
      </h1>
      <div>
        <ul className="flex gap-5">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive ? activeStyle : ""
                  } font-light hover:underline hover:underline-offset-4`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
