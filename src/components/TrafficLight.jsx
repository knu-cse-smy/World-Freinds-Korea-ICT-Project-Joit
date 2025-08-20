import React, { useEffect, useState } from "react";
import { getRainProbability } from "../services/aiService";
import { getArduinoData, toggleTrafficLight } from "../services/arduinoService";
import "./TrafficLight.css";
import rainyImg from '../assets/features/trafficlight.png';
import celsiusImg from '../assets/weather/celsius.png';
import humidityImg from '../assets/weather/humidity.png';
import cloudyImg from '../assets/weather/cloudy.png';

export default function TrafficLight() {
  const [currentDate, setCurrentDate] = useState("");
  const [selectedLight, setSelectedLight] = useState("");
  const [isOn, setIsOn] = useState(false);

  const [temperature, setTemperature] = useState(28);
  const [humidity, setHumidity] = useState(60);
  const [umbrellaOpen, setUmbrellaOpen] = useState(true);
  const [rainProb, setRainProb] = useState(0.75);
  const [timer, setTimer] = useState(30);

  const handleLightSelect = (e) => setSelectedLight(e.target.value);

  const handleToggle = async () => {
    if (!selectedLight) {
      alert("Select traffic light first!!");
      return;
    }
    const newState = !isOn;
    setIsOn(newState);
    try {
      await toggleTrafficLight(selectedLight, newState);
    } catch (e) {
      console.error("toggleTrafficLight error:", e);
    }
  };

  useEffect(() => {
    const updateDate = () => {
      const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
      setCurrentDate(new Date().toLocaleDateString("en-US", options));
    };
    updateDate();
    const id = setInterval(updateDate, 60_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    async function fetchAllData() {
      try {
        const arduinoData = await getArduinoData();
        setTemperature(arduinoData?.temp ?? null);
        setHumidity(arduinoData?.humidity ?? null);
        setUmbrellaOpen(!!arduinoData?.umbrellaOpen);
        setTimer(arduinoData?.timer ?? 0);

        if (arduinoData?.temp != null && arduinoData?.humidity != null) {
          try {
            const prob = await getRainProbability(arduinoData.temp, arduinoData.humidity);
            setRainProb(prob);
          } catch (e) {
            console.error("getRainProbability error:", e);
            setRainProb(null);
          }
        } else {
          setRainProb(null);
        }
      } catch (err) {
        console.error("fetchAllData error:", err);
      }
    }

    fetchAllData();
    const interval = setInterval(fetchAllData, 10_000);
    return () => clearInterval(interval);
  }, []);

  // Traffic light 색상 표시
  const getTrafficLightColor = () => {
    if (!isOn) return "gray";
    return selectedLight === "light1" ? "red" : selectedLight === "light2" ? "yellow" : "green";
  };

  return (
    <div className="dashboard-wrapper">
      <h1 className="main-title">Traffic Light and Weather System</h1>
      <p className="subtitle">Change the traffic light signal to help you cross the road</p>
      <div className="dashboard">
        {/* 왼쪽 패널 */}
        <div className="left-panel">
          <select className="select-box" value={selectedLight} onChange={handleLightSelect}>
            <option value="">Select subdistrict</option>
            <option value="light1">Traffic Light #1</option>
            <option value="light2">Traffic Light #2</option>
            <option value="light3">Traffic Light #3</option>
          </select>

          <div className="traffic-display">
            <p className="subtitle" >Please press the following button:</p>
            <div className={`traffic-light ${getTrafficLightColor()}`}></div>
          </div>

          <div className={`toggle-switch ${isOn ? "on" : ""}`} onClick={handleToggle}>
            <div className="toggle-circle"></div>
          </div>

          <div className="timer-box">
            <span>Timer :</span>
            <div className="timer-display">
              {timer != null ? String(timer).padStart(2, "0") : "00"}
            </div>
          </div>
        </div>

        {/* 오른쪽 패널 */}
        <div className="right-panel">
          <div className="weather-header">
            <h2>Weather Controll System</h2>
            <p>{currentDate}</p>
          </div>

          <div className="card-grid">
            <div className="info-card">
              <img src={cloudyImg} alt="Umbrella" />
              <h3 className="highlight">{umbrellaOpen ? "Open" : "Closed"}</h3>
              <p>Umbrella Status</p>
            </div>

            <div className="info-card">
              <img src={rainyImg} alt="Trafficlight" />
              <h3 className="highlight">{rainProb == null ? "--" : `${Math.round(rainProb * 100)}%`}</h3>
              <p>Trafficlight Status</p>
            </div>

            <div className="info-card">
              <img src={celsiusImg} alt="Temperature" />
              <h3 className="highlight">{temperature != null ? `${temperature}° C` : "--"}</h3>
              <p>Temperature</p>
            </div>

            <div className="info-card">
              <img src={humidityImg} alt="Humidity" />
              <h3 className="highlight">{humidity != null ? `${humidity}%` : "--"}</h3>
              <p>Humidity</p>
            </div>
          </div>

          <div className="full-width-card">
            <h3>Rain Probability</h3>
            <div className="rain-value">
              {rainProb == null ? "--" : `${Math.round(rainProb * 100)}%`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
