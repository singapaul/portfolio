import React from "react";
import Ticker from "react-ticker";
import { useState } from "react";

const Scrolling = () => {
  const [scroll, setScroll] = useState(true);



  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <Ticker move={scroll} offset={0} speed={4}>
        {({ index }) => (
          <>
            <h1>This is the Headline of element #{index}!</h1>
            <img src="www.my-image-source.com/" alt="" />
          </>
        )}
      </Ticker>
      <Ticker move={scroll} offset={800} speed={4} direction={"toRight"}>
        {({ index }) => (
          <>
            <h1>This is the Headline of element #{index}!</h1>
            <img src="www.my-image-source.com/" alt="" />
          </>
        )}
      </Ticker>
      <Ticker move={scroll} offset={0} speed={4}>
        {({ index }) => (
          <>
            <h1>This is the Headline of element #{index}!</h1>
            <img src="www.my-image-source.com/" alt="" />
          </>
        )}
      </Ticker>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        quas voluptate ipsum adipisci, odio accusamus veritatis quis velit sed
        ipsa? Obcaecati eveniet itaque facere ipsam, assumenda amet dolores
        repellat? Ipsa.
      </p>
    </div>
  );
};

export default Scrolling;
