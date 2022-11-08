import Search from './Search';
import App from '../App';
import './current-weather.css';



const CurrentWeather = (props) => {



    // const searchCity = "Banglore";
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{props.city.name}</p>
                    <p className="weather-description">{props.city.weather_description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`http://openweathermap.org/img/w/${props.city.icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{props.city.temp}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{props.city.feels_like}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{props.city.wind} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{props.city.humidity} %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{props.city.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeather;