import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginationComponent from './PaginationComponent';
import TeachersSection from './TeachersSection';



function PaginationContainer() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const totalTeachers = 10;
    const totalPages = Math.ceil(totalTeachers / itemsPerPage);

    return (
        <div className="container col-md-8  d-flex justify-content-center">
            <div className="row d-flex justify-content-center height-fit " style={{ height: "fit-content", width: "110%" }}>
                <div className="col-md-12 hight-fit">
                    <TeachersSection currentPage={currentPage} itemsPerPage={itemsPerPage} />
                    <div />
                </div>
                <div className="row d-flex justify-content-center mt-3" style={{ height: "fit-content" }}>


                    <div className="col-md-12">
                        <PaginationComponent
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PaginationContainer;
