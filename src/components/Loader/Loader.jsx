import "./loader.css";

const Loader = ({ title }) => (
  <div className="w-full flex h-screen justify-center items-center flex-col">
    <section className="wrapper">
      <div className="spinner">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </section>
  </div>
);

export default Loader;
