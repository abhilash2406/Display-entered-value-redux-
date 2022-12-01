 export const detectInput =(value)=> {
    return {
        type : 'inputed_text',
        payload : value
    }
};


export const showComponent =(output)=> {
    return {
        type : 'show_comp',
        payload : output
    }
};