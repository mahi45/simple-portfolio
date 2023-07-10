import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 text-gray-300"
      id="footer"
    >
      <div className="pr-4">
        <h1 className="w-full text-3xl font-bold text-[#00df91]">React</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolore, repellendus corporis aspernatur iure amet!
        </p>
        <div className="flex sm:justify-around justify-between my-6 md:w-[75%]">
          <FaFacebookSquare size={30}></FaFacebookSquare>
          <FaInstagram size={30}></FaInstagram>
          <FaTwitterSquare size={30}></FaTwitterSquare>
          <FaGithubSquare size={30}></FaGithubSquare>
          <FaDribbbleSquare size={30}></FaDribbbleSquare>
        </div>
      </div>
      <div className="md:col-span-2 flex sm:justify-around justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guided</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
