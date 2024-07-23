import React from "react";
import "./testimonial.css";
import team from "../assets/avatar-5.jpg";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import person6 from "../assets/person6.png";


const testimonials = [
    {
      text: "ChainCred has changed the way we handle our finances. By uploading bank statements, it gives us detailed analysis of spending habits and costs. Not only does this give us a better understanding of our financial health but also makes it very easy to share selected financial insights with potential investors. While raising funds for our startup, it consists of comprehensive financial data in the form of charts and graphs with insightful reports. Moreover, investors have real-time information on the companies’ financials. It is highly accurate and user-friendly thus saving us hours on end and enabling us to put much focus on expansion activities.  ",
      name: "ANKIT SANGHVI",
      role: "CEO, Recontact",
      image: person1,
      rating: 4.5,
    },
    {
      text: "ChainCred is the need of startup industry as the requirement of a bridge between startups and investors for the due diligence is highly required. It is a constant pain for investors to always go through the documents and then the long hours of verifying the same. The market is big and ChainCred can capture it, if rightly visioned, to great volumes. As an incubator cell, it makes it very easy to analyze and read a company’s financial data and understand the spendings. Also, great to have real time updates over the company and not to wait constantly for the company to share updates. Also, for teams monitoring various company, its always great to have and all in one software for record purposes.",
      name: "NIRMAAN",
      role: "Incubator cell",
      image: person2,
      rating: 5,
    },
    {
      text: "Being an investor, analysing and inspecting finances before finalizing the deals is very crucial. ChainCred with its analysis helps us understand how the management/ founders are managing their expenditure and growth analysis. Being an angel, it always is hard to put in bandwidth in reliability and verification of data, ChainCred takes up the burden off for angel investing. It also gives us a real time feedback and saves lot of manual efforts providing us more time to focus on other aspects.",
      name: "MUSKAAN",
      role: "Angel Investor",
      image: person3,
      rating: 5,
    },
    {
      text: "ChainCred aims to solve a very crucial problem which definitely has a great adoption scope. With ever growing startup market and innumerous funding applications everyday, the due diligence process needs to be streamlined and automated. The team’s functioning will be significantly elevated. The product needs a proof of concept for the market to believe the data is secured and is ready to be deployed. While it is easier for people who are in blockchain to understand the secureness, it needs to prove it to institutions not in the space. The product vision and requirement is very on to the point and it has a long way to go with a very wide market.",
      name: " BETTER CAPITAL",
      role: "VC Firm",
      image: person4,
      rating: 5,
    },
    {
      text: "Chaincred has now made our lives easier by managing our finances not just from our end but to show it to the investors as well and made the communication easier between the investor and us. We don't need to conduct constant meetings with them and their team to show how we our progressing and how their funds being used. It also streamline are expenditure and make important decisions and strategies in a faster way.",
      name: " ABHINAV",
      role: " Co Founder, Friday.ai",
      image: person5,
      rating: 5,
    },
    {
      text: "Simply uploading the bank statement and ChainCred do the rest is remarkable. Company’s expense management has been much easier now. The expense bucketing feature is helpful to visualize the trends and manage the finances more effectively. Alongside, making the pitch deck and presenting data to investors every 15 days is no more a necessity. ChainCred is now our complete end to end ERP and investor communication platform.",
      name: "RISHABH ARYA",
      role: "Co Founder, Entvin, YC’22",
      image: person6,
      rating: 5,
    },
  ];

  
  const TestimonialComponent = () => {
    return (
      <>
        <div className="text-white text-center mt-[10%]">
          <h1 className="text-7xl" data-aos="fade-down" data-aos-delay="50">Testimonials</h1>
          <div className="flex items-center justify-center">
            <div className="w-60 h-2 bg-gray-500 flex items-center justify-center mt-5"></div>
          </div>
          <p className="px-20 text-xl mt-10 text-gray-300" data-aos="fade-down" data-aos-delay="100">
            At our company, we are dedicated to creating exceptional digital
            experiences for brands, transcending beyond the ordinary. Our app
            offers a seamless platform where investors and founders can
            effortlessly register, manage, and organize their expenses with
            precision and ease.
          </p>
        </div>
        <div className="testimonial-container" data-aos="fade-down" data-aos-delay="250">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-wrapper">
              <div className="testimonial-card">
                <div className="testimonial-text">
                  <div className="stars">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p>{testimonial.text}</p>
                </div>
              </div>
              <div className="testimonial-profile" data-aos="fade-down" data-aos-delay="350">
                <div className="profile-image mt-10">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-info mt-5">
                  <h1>{testimonial.name}</h1>
                  <p className="text-xl">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default TestimonialComponent;
  