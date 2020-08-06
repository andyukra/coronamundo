import React from 'react';

const handlers = {

    filterFlag(x){
        let icon = `https://www.countryflags.io/${x}/flat/32.png`;
        return <img src={icon} alt="flag"/>
    },

    sortData(x){
        for(let i = 0; i < x.length; i++){
            for(let j = i+1; j < x.length-1; j++){
                if(x[i].TotalConfirmed < x[j].TotalConfirmed) {
                    let k = x[i];
                    x[i] = x[j];
                    x[j] = k;
                } 
            }
        }
    },

    fab(){
        window.scroll({
            behavior : 'smooth',
            top : 0
        })
    },

    getStarted(x){
        window.scroll({
            behavior : 'smooth',
            top : x
        })
    }

}

export default handlers;