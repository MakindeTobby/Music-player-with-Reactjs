import { FaArrowDown, FaBars, FaBell, } from 'react-icons/fa';

const Head = ({ isPlaying }) => {
    return (
        <div className='tw-w-full tw-flex  tw-items-center tw-justify-between'>
            <span className='bg-white rounded-circle tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-cursor-pointer'><FaBell /></span>
            <span className='tw-bg-red-600 text-white rounded-pill tw-w-40 tw-h-8 tw-flex tw-items-center tw-font-bold tw-justify-center'>
                {isPlaying ? "Now playing" : "Paused"}
            </span>
            <span className='bg-white rounded-circle tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-cursor-pointer'><FaBars /></span>
        </div>
    );
}

export default Head;