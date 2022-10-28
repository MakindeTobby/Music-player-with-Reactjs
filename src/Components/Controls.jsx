import { useState } from 'react';
import { FaBackward, FaForward, FaPause, FaPlay } from 'react-icons/fa';

const Controls = ({ isPlaying, setIsPlaying, skipSong, backSong }) => {
    return (
        <div className='tw-w-full tw-flex  tw-items-center tw-justify-center tw-gap-6'>
            <span className='bg-white rounded-circle tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-cursor-pointer' onClick={() => backSong()}>
                <FaBackward /></span>
            <span className='bg-white rounded-circle tw-w-20 tw-h-20 tw-flex tw-items-center tw-justify-center tw-cursor-pointer' onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <FaPause className='tw-text-3xl' /> : <FaPlay className='tw-text-3xl' />} </span>
            <span className='bg-white rounded-circle tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-cursor-pointer' onClick={() => skipSong()}>
                <FaForward /></span>
        </div>
    );
}

export default Controls;