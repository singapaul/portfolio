import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.scss";
import alun from "../../Assets/images/timeline/alun.jpeg";
import diageo from "../../Assets/images/timeline/diageo.png";
import jde from "../../Assets/images/timeline/jde2.png";
import nology from "../../Assets/images/timeline/nology.jpeg";
import uob from "../../Assets/images/timeline/uob2.jpeg";

const Timeline = () => {
  return (
    <>
      <VerticalTimeline className={"timeline"} lineColor={"black"}>
        <VerticalTimelineElement
          className="timeline__element"
          contentStyle={{
            background: "#4c926d",
            color: "#fff",
            border: "solid black 4px",
          }}
          contentArrowStyle={{ borderRight: "10px solid black" }}
          date={"Jan 2021 - present"}
          iconStyle={{
            background: "#fff",
            color: "#000000",
            border: "1px solid black",
          }}
          icon={<img src={nology} alt="" />}
          iconClassName={"timeline__element-icon"}
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
          className="timeline__element"
          contentArrowStyle={{ borderRight: "10px solid black" }}
          contentStyle={{
            background: "#fcd91f",
            color: "#000000",
            border: "solid black 4px",
          }}
          date="Sep 2021 - Jan 2022"
          // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src={diageo} alt="" />}
          iconClassName={"timeline__element-icon"}
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
          className="timeline__element"
          date="Sep 2020 - Aug 2021"
          contentArrowStyle={{ borderRight: "10px solid black" }}
          iconStyle={{ background: "#0078b5", color: "#fff" }}
          contentStyle={{
            background: "#fcd91f",
            color: "#000000",
            border: "solid black 4px",
          }}
          icon={<img src={diageo} alt="" />}
          iconClassName={"timeline__element-icon"}
        >
          <h3 className="vertical-timeline-element-title">
            Supply Planner, Diageo
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Budapest, Hunagry
          </h4>
          <p>
            Coordinator for supply of imported products with manufacturing
            plants, customer service and logistics team. Experience in inventory
            modelling, supply network reviews, digitization, crisis response,
            inventory rationalization.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline__element"
          contentStyle={{
            background: "#fcd91f",
            color: "#000000",
            border: "solid black 4px",
          }}
          contentArrowStyle={{ borderRight: "10px solid black" }}
          date={"Sep 2019 - Aug 2020"}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src={diageo} alt="" />}
          iconClassName={"timeline__element-icon"}
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
          className="timeline__element"
          contentStyle={{
            background: "#f25230",
            color: "#fff",
            border: "solid black 4px",
          }}
          contentArrowStyle={{ borderRight: "10px solid black" }}
          date={"Sept 2014 - July 2019"}
          icon={<img src={uob} alt="" />}
          iconClassName={"timeline__element-icon"}
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
          contentStyle={{
            background: "#392c35",
            color: "#fff",
            border: "solid black 4px",
          }}
          contentArrowStyle={{ borderRight: "10px solid black" }}
          className="timeline__element"
          date={"Jul 2017 - Jun 2018"}
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={<img src={jde} alt="" />}
          iconClassName={"timeline__element-icon"}
        >
          <h3 className="vertical-timeline-element-title">
            Process Engineer, Jacobs Douwe Egberts
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Banbury, England
          </h4>
          <p>
            Project and Operations Engineer.Led design of PLC software to
            support a £500,000 capital project for a major plant modification.
            Led commissioning process of plant upgrade process, managing
            contractors, engineers, plant stakeholders.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline__element"
          contentArrowStyle={{ borderRight: "10px solid black" }}
          contentStyle={{
            background: "#f25230",
            color: "#fff",
            border: "solid black 4px",
          }}
          date="June 2016 - Sept 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img src={uob} alt="" />}
          iconClassName={"timeline__element-icon"}
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
          className="timeline__element"
          contentArrowStyle={{ borderRight: "10px solid black" }}
          contentStyle={{
            background: "#0078b5",
            color: "#fff",
            border: "solid black 4px",
          }}
          date={"June 2014"}
          iconStyle={{ background: "#fcd91f", color: "#fff" }}
          icon={<img src={alun} alt="" />}
          iconClassName={"timeline__element-icon"}
        >
          <h3 className="vertical-timeline-element-title">
            A levels, Alun Schol{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Mold, Wales</h4>
          <p>Chemistry (A*), Maths (A*), Physics (A).</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
