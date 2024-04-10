export default function(data:{ textContent:string, id?:string, className?:string, type?:string}){

    return(
        `
            <button 
            id=${data.id}
            class=${data.className}
            type=${data.type}
            >
                ${data.textContent}
            </button>
        `
    )                          

}