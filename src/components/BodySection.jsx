import React from "react";
import ActiveNote from './ActiveNote';
import Archive from './Archive';

function BodySection({ onDelete, onActive, onArchive, activeDatas, archiveDatas }) {
    return (
        <React.Fragment>
            <section className="container">
                <div className="bg-blue-50 px-5 sm:px-24 py-10 md:py-20">
                    <h2 className="text-2xl font-bold mb-8">Catatan Aktif</h2>
                    {
                        activeDatas.length !== 0
                            ? (<ActiveNote onDelete={onDelete} notes={activeDatas} onActive={onActive} />)
                            : (<p className='text-gray-500'>Tidak ada catatan</p>)
                    }
                </div>
            </section>
            <section className="container">
                <div className="bg-white-50 px-5 sm:px-24 py-10 md:py-20">
                    <h2 className="text-2xl font-bold mb-8">Arsip</h2>
                    {
                        archiveDatas.length !== 0
                            ? (<Archive onDelete={onDelete} notes={archiveDatas} onArchive={onArchive} />)
                            : (<p className='text-gray-500'>Tidak ada catatan</p>)
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default BodySection;