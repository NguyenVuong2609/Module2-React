import { images } from "../assets/img";

export default function Testimonial() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center pb-5">
          <h6 className="text-uppercase">Testimonial</h6>
          <h1 className="mb-5">What Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
              elitr clita lorem
            </div>
            <div className="d-flex align-items-center pt-3">
              <img
                className="img-fluid rounded-circle"
                src={images.testimonial1}
                style={{ width: 80, height: 80 }}
                alt=""
              />
              <div className="pl-4">
                <h5>Client Name</h5>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
              elitr clita lorem
            </div>
            <div className="d-flex align-items-center pt-3">
              <img
                className="img-fluid rounded-circle"
                src={images.testimonial2}
                style={{ width: 80, height: 80 }}
                alt=""
              />
              <div className="pl-4">
                <h5>Client Name</h5>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
              elitr clita lorem
            </div>
            <div className="d-flex align-items-center pt-3">
              <img
                className="img-fluid rounded-circle"
                src={images.testimonial3}
                style={{ width: 80, height: 80 }}
                alt=""
              />
              <div className="pl-4">
                <h5>Client Name</h5>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
              elitr clita lorem
            </div>
            <div className="d-flex align-items-center pt-3">
              <img
                className="img-fluid rounded-circle"
                src={images.testimonial4}
                style={{ width: 80, height: 80 }}
                alt=""
              />
              <div className="pl-4">
                <h5>Client Name</h5>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
