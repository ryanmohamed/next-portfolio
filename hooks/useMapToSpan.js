export default function useMapToSpan(list){
    return (
        <>
        {list?.map(l => (
            <span class='m-8' key={l}>{l}</span>
        ))}
        </>
    )
}