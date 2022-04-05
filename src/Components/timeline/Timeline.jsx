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
      <VerticalTimeline className={"timeline"} lineColor={"black"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jan 2021 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<img src={test2} alt="" />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Trainee, nology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Currently working as a nology full stack developer consultant. Stack
            includes HTML, JavaScript, SASS, React, Java and Spring
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Sep 2021 - Jan 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<img src={test2} alt="" />}
        >
          <h3 className="vertical-timeline-element-title">
            Manufacturing Excellence Lead, Diageo
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Global</h4>
          <p>
            Responsible for change management and strategy development for
            Scotch sites globally
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2020 - Aug 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Supply Planner, Diageo
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Budapest, Hunagry
          </h4>
          <p>
            Coordination of supply of imported products with manufacturing
            plants, customer service and logistics team. Experience in inventory
            modelling, supply network reviews, digitization, crisis response,
            inventory rationalization.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2019 - Aug 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Commercial Operations Analyst, Diageo
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Budapest, Hungary
          </h4>
          <p>
            Analysis of CRM data to support improvements in operational cash
            performance for Europe reigon
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sept 2014 - July 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            MEng Chemical Engineering 1st Class, University of Birmingham
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Masters Degree</h4>
          <p>
            Teamwork, fluid thinking and problem solving, completed 1 year
            internship in manufacturing
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jul 2017 - Jun 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Process Engineer, Jacobs Douwe Egberts
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Banbury, England
          </h4>
          <p>
            Project and Operations Engineer.Led design of PLC software to
            support a £500,000 capital project for a major plant
            modification.Successfully led several change management engagements
            in a highly unionized environment. Led commissioning process of
            plant upgrade process, managing contractors, engineers, plant
            stakeholders and strict deadlines to deliver project on time and
            within budget.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2016 - Sept 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Matlab Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Birmingham, England
          </h4>
          <p>
            Designed and coded a computer simulation programme GUI for a reactor
            in Matlab software for use as an undergraduate teaching aid.
            Provided students with an interactive programme to understand a
            difficult concept through an easy to understand piece of software.
            Utilised Agile methodology to manage project delivery
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
