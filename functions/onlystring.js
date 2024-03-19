export default input => {
    const list=Object.getOwnPropertyNames(input)
            .map(value =>{
                return {key:value,val:input[value]}
            })
        .filter(value => (value.type!=='string'))
    return list.map(value => {
        return { message:`Parameter  ${value.key} is not string `}
    })
};

