export default function (data: { content: string }): string {
    return (
        `
            <aside>
                <p> ${data.content} </p>
            </aside>
        
        `
    )
}