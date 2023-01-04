import { images } from "../assets/img";

export default function Actions() {
    const style = {
        background: `linear-gradient(rgba(55, 55, 63, 0.7), rgba(55, 55, 63, 0.7)), url(${images.carousel2}), no-repeat center center`,
        backgroundSize: "cover",
        height: 500
    }
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="bg-action rounded" style={style}>
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-lg-7 text-center">
              <h1 className="text-white mb-4">
                Let's get started. Call us now for a Free Consultation
              </h1>
              <a className="btn btn-primary py-3 px-5 mt-2" href="#">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
