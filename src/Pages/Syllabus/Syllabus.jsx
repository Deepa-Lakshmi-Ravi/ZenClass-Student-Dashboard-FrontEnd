import syllabuspdf from '../../../utils/mern-syllabus.pdf';
import{FaDownload} from 'react-icons/fa';
import './Syllabus.css';

const Syllabus = ()=>{
    return(
        <>
        <section className='syllabus'>
            <div className="syllabus-container col-10 col-lg-6">
                <div className='doc'>
                    <div className="doc-title">
                        Course
                    </div>
                    <div className='doc-body'>FSD-MERN</div>
                </div>
                <div className='doc'>
                    <div className='doc-title'>Syllabus</div>
                    <div className='doc-body'> <a href={syllabuspdf} className='downlaod-syllabus'>
                        Download <FaDownload /></a> </div>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Syllabus;