import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import test from "../../Assets/images/paul.jpeg"
// import test2 from "../../Assets/Graphics/black-cross.png";



const Timeline = () => {
  return (
    <>
      <VerticalTimeline className={"timeline"} lineColor={ "black" }>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<img src={test2} alt="" />}
        >
          <h3 className="vertical-timeline-element-title">Trainee Full Stack Developer, nology</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Currently working as a nology full stack developer consultance. Stack includes React and Java.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<img src={test2} alt="" />}
        >
          <h3 className="vertical-timeline-element-title">Manufacturing Excellence Lead, Diageo</h3>
          <h4 className="vertical-timeline-element-subtitle">Global</h4>
          <p>
            Responsible for change management and strategy development for Scotch sites globally
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2020 - Aug 2021"
          
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Supply Planner, Diageo</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Budapest, Hunagry
          </h4>
          <p>
            Supply chain planner for international export to Africa markets.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2019 - Aug 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Commercial Operations Analyst, Diageo</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Budapest, Hungary
          </h4>
          <p>Analysis of CRM data to support improvements in operational cash performance</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sept 2014 - July 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MEng Chemical Engineering 1st Class, University of Birmingham
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Masters Degree
          </h4>
          <p>Teamwork, fluid thinking and problem solving</p>
        </VerticalTimelineElement>









        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
