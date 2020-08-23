import React, { memo, useState, useCallback, useEffect } from 'react';
import Api from '../../api';
import Board from './components/Board';
import Panel from './components/Panel';
import { ContainerStyled } from './style';

function Main() {

    const [ data, setData] = useState({})
    const [ country, setCoutry ] = useState('brazil')
    const updateAt = new Date().toLocaleDateString();

    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then(data => setData(data))
    }, [])

    useEffect( () => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ({target}) =>{
        const country = target.value;
        setCoutry(country);
    }

    return(
        <ContainerStyled>
            <div className="mb-2">
                <Panel 
                    data={data}
                    onChange={handleChange}
                    updateAt={updateAt}
                    country={country}
                    getCovidData={getCovidData}                    
                />

            </div>
            <Board data={data} />

        </ContainerStyled>
    )
}

export default memo(Main)