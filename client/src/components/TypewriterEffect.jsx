import { Typewriter } from "react-simple-typewriter";

function TypewriterEffect(props) {
  return (
    <p>
      <Typewriter
        words={[
          "Welcome to Himchuli Family",
          "Center of Excellence since 2059 BS",
          "Best school in Madhyapurthimi (BLE)",
          "Enjoy your stay!",
        ]}
        loop={false}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </p>
  );
}

export default TypewriterEffect;
