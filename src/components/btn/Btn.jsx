// import CV from "../../img/cv.pdf";
import "./btn.css";
function Btn({ children}) {
  return (
    <a className="aa" href="#contact">
      <span className="spanspan">{children }</span>
      <div class="liquid"></div>
    </a>
  );
}
export default Btn;
