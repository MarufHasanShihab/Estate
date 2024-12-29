import PropTypes from "prop-types"

const Title = ({title,subTitle,description}) => {
    return (
        <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">{title} <span className="underline underline-offset-4 decoration-1 under font-light">{subTitle}</span></h1>
            <p className="text-gray-500 max-w-80 mx-auto text-center mb-8">{description}</p>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    description: PropTypes.string,
}

export default Title;