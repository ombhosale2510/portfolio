import React from "react";

const FallAlert = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">FallAlert Mobile App</h1>
    <p className="text-lg mb-4">
      Developed a real-time fall detection mobile app using accelerometer and gyroscope sensors. Achieved 92% precision and ensured emergency response within 3 seconds.
    </p>
    <p className="text-lg mb-4">
      Reduced false positives by 35% and processed over 50,000 data samples for reliable performance.
    </p>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <img src="/images/fall1.png" alt="FallAlert 1" className="rounded shadow-md" />
      <img src="/images/fall2.png" alt="FallAlert 2" className="rounded shadow-md" />
    </div>
  </div>
);

export default FallAlert;
