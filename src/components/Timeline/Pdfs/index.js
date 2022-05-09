
import './pdfs.css';


export default function Pdfs(props){
    return(
        <>
        <div className="content_pdf">

        <embed src={props.pdf}></embed>
        
        </div>

        </>
    )
}