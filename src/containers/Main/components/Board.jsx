
import React, { memo } from 'react';
import  { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({data}) {
    const {cases, todayDeaths, recoverd, deaths, todayCases } = data;

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} labe ="Total de Casos" color="#5d78ff" /> 
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} labe ="Óbitos hoje" color="#F7B829" /> 
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} labe ="Casos hoje" color="#000" /> 
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} labe ="Total de mortos" color="#E95078" /> 
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recoverd)} labe ="Total de Recuperados" color="#67C887" /> 
            </Grid>
        </Grid>
    )

}

export default memo(Board)