import "./App.css";
import mustafa from "./assets/mustafa-unler.jpeg";
import net from "./assets/internet.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import mail from "./assets/mail.png";
import phone from "./assets/phone-call.png";

function App() {
  let iconClass = "w-[20px] m-2";
  let aClass = "flex items-center justify-center my-1";
  let labelClass = "text-[20px]";

  return (
    <div
      className="w-[100vw] h-[100vh]  flex items-start justify-center"
      style={{ fontFamily: "Lucida Handwriting, Cursive" }}
    >
      <div className="flex flex-col items-center">
        <img
          className="w-[80vw] rounded-[10px] mt-10 border-solid border-4 border-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          src={mustafa}
        />
        <h1 className="m-2 text-[30px] ">Mustafa ÜNLER</h1>

        <div className="flex flex-col items-start justify-center">
          <a className={aClass}>
            <img className={iconClass} src={phone} />
            <label className={labelClass}>0545 449 99 89</label>
          </a>

          <a className={aClass}>
            <img className={iconClass} src={mail} />
            <label className={labelClass}>bilgi@ozteknikrekor.com.tr</label>
          </a>
          <a
            href="https://ozteknikrekor.com.tr/"
            target="_blank"
            className={aClass}
          >
            <img className={iconClass} src={net} />
            <label className={labelClass}>Özteknik Rekar Websitemiz</label>
          </a>

          <a
            className={aClass}
            href="https://www.instagram.com/rekorozteknik/"
            target="_blank"
          >
            <img className={iconClass} src={instagram} />
            <label className={labelClass}>Instagram Adresimiz</label>
          </a>
          <a
            className={aClass}
            href="https://www.linkedin.com/in/mustafa-%C3%BCnler-5428221b8/"
            target="_blank"
          >
            <img className={iconClass} src={linkedin} />
            <label className={labelClass}>Linkedin Adresim</label>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
