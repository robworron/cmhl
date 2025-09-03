import Image from "next/image";
import "./infotable.css";

export const InfoTable = () => {
  const galeCentre = "/assets/gale-centre.jpg";

  return (
    <div className="infotable">
      <h1>CMHL League Information</h1>
      <div className="infotable--information">
        <div className="infotable--image">
          <Image
            src={galeCentre}
            fill
            style={{ objectFit: "contain" }}
            alt="Gale Centre"
            priority
          />
        </div>
        <table className="infotable--table">
          <tbody>
            <tr>
              <td>League</td>
              <td>Canucks Men's Hockey League</td>
            </tr>
            <tr className="infotable--row">
              <td>Inaugural Season</td>
              <td>2023</td>
            </tr>
            <tr className="infotable--row">
              <td>Rink</td>
              <td>Gale Centre Arena</td>
            </tr>
            <tr className="infotable--row">
              <td>Location</td>
              <td>5152 Thorold Stone Road, Niagara Falls, ON.</td>
            </tr>
            <tr className="infotable--row">
              <td>Teams</td>
              <td>
                Axemen, Bulldogs, Gulls, Jagrbombs, Mighty Drunks, Rockies,
                Seamen, Toonie Tuesdays
              </td>
            </tr>
            <tr className="infotable--row">
              <td>League Start Date</td>
              <td>Friday, October 10, 2025</td>
            </tr>
            <tr className="infotable--row">
              <td>League End Date</td>
              <td>Friday, March 27, 2026</td>
            </tr>
            <tr className="infotable--row">
              <td>Contact</td>
              <td>cmhlniagara@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
