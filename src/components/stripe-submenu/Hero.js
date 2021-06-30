import phoneImg from "../../images/phone.svg";
import { useGlobalContext } from "../../context/context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className="stripeapp__hero" onMouseOver={closeSubmenu}>
      <div className="stripeapp__hero__container">
        <div className="stripeapp__hero__container__info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes - from startups to Fortune 500s -
            use Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.{" "}
          </p>
          <button className="start-btn">Start Now</button>
        </div>
        <div className="stripeapp__hero__container__images">
          <img
            src={phoneImg}
            className="stripeapp__hero__container__images--phone"
            alt="Phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
