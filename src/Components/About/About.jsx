import CountUp from "react-countup";
import { assets } from "../../assets/assets";
import Title from "../Title/Title";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About">
      <Title
        title={"About"}
        subTitle={"Our Brand"}
        description={"Passionate About Properties, Dedicated to Your Vision"}
      />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
        <img
          src={assets.brand_img}
          alt="brand_img"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <CountUp start={0} end={10} duration={4} />+
              </p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <CountUp start={0} end={12} duration={4} />+
              </p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <CountUp start={0} end={20} duration={4} />+
              </p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <CountUp start={0} end={25} duration={4} />+
              </p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <div>
            <p className="my-10 max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-blue-600 text-white py-2 px-8 rounded">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
