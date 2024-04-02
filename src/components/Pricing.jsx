import PropTypes from "prop-types";

export default function Pricing(props) {
    const { title, value, features,button,isAvailable } = props;

    return (
        <div>
            <div className="container p-4 mt-3" style={{ background: "blue" }}>
                <div className="">
                    <div className="">
                        <div className="card">
                            <div style={{ textAlign: "center", fontSize: "12px", color: "grey" }}>
                                {title}
                            </div>
                            <div className="heading" style={{ textAlign: "center", fontSize: "24px" }}>
                                {value}
                            </div>
                            {features.map((feature, index) => (
                                <div key={index} className="my-2 content">
                                    <i className={feature.isAvailable ? "fa-solid fa-check" : "fa-solid fa-xmark"}></i>
                                    <span className={feature.isAvailable ? "content-sub mx-3" : "content-disable mx-3"}>
                                        {feature.features}
                                    </span>
                                </div>
                            ))}
                            <button className={isAvailable ? "disable-btn" : "disable-active"}>
                                        {button}
                                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Pricing.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    features: PropTypes.arrayOf(
        PropTypes.shape({
            features: PropTypes.string,
            isAvailable: PropTypes.bool,
           
        })
    ),
    button: PropTypes.string,
    isAvailable: PropTypes.bool
};

