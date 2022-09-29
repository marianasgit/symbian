 export const maskPhone = (val : any) => {
    return val
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
}

export const maskTelephone = (val : any) => {
    return val
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d{3})(\d)/, "$1-$2");
}