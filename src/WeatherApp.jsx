import React, {useState} from 'react';
import { useFetch } from './hooks'

function WeatherApp() {
    const [data, loading, selectedSol] = useFetch(
        "https://api.nasa.gov/insight_weather/?api_key=yF5XishREd40vysqeqpv3njo49QDSapRjqDXbQp2&feedtype=json&ver=1.0"
    );
    return (
        <>
          <h1>Weather</h1>
          {loading ? (
              "Loading..."
          ) : (
            <div>
     
            </div>
          )}  
        </>
    )
}

export default WeatherApp
