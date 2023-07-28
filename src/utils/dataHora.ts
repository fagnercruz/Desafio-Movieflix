
export const getDateToday = () => {
    const dataHoje = new Date();
    return dataHoje.toLocaleDateString();
}

export const getTimeNow = () => {
    const dataHoje = new Date();
    return dataHoje.toLocaleTimeString();
}

export const getSaudacaoByHour = () => {
    const dataHoje = new Date();

    if(dataHoje.getHours() < 12){
        return "Bom dia,";
    } else if(dataHoje.getHours() < 18){
        return "Boa tarde,";
    } else {
        return "Boa noite,";
    }
}