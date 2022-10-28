import { FaUndo, FaHome, } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='tw-w-full tw-flex  tw-items-center tw-justify-between'>
            <span className='bg-white rounded-circle tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center'><FaHome /></span>
            <span className='tw-bg-slate-500 text-white rounded-pill tw-w-40 tw-h-8 tw-flex tw-items-center tw-font-bold tw-justify-center'>

            </span>
            <span className='bg-white rounded-circle tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center'><FaUndo /></span>
        </div>
    );
}

export default Footer;