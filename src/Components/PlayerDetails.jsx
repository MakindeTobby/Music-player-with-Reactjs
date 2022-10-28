const Details = ({ song, currentSong }) => {
    return (
        <div className="tw-flex tw-gap-3 tw-items-center  tw-flex-col">
            <div className='tw-w-64 tw-h-72  rounded'>
                <img src={song[currentSong]?.cover} alt="" className='w-100 h-100 rounded' />
            </div>
            <div className='text-white tw-text-lg tw-w-full tw-flex  tw-items-center tw-justify-center tw-flex-col'>
                <strong>{song[currentSong]?.artist}</strong>
                <small className="text-center tw-h-8 tw-overflow-hidden">{song[currentSong]?.title}</small>
            </div>
            {/* <div className="w-100 tw-h-1 rounded-pill tw-bg-slate-100">
                <div className="tw-w-[5%] tw-h-1 rounded-pill  tw-bg-red-600">

                </div>
            </div> */}
        </div>
    );
}

export default Details;